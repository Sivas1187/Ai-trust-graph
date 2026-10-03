# SPDX-License-Identifier: Apache-2.0
"""Path queries over the candidate graph.

Every finding is a candidate for human review. A path the tool reports has
PathState Topological at most: it exists in the represented graph, but its
conditions, identities and controls have not been evidenced (Artifact #12
§9.3). Nothing here is a score.
"""

from __future__ import annotations

from collections import defaultdict
from dataclasses import dataclass, field

from .model import Graph

CONSEQUENTIAL = {"Delete", "Transact", "Execute", "Disclose", "Approve"}
CLOUD_HIGH = {"Delete", "Modify", "Execute"}


@dataclass
class Finding:
    query: str
    title: str
    why: str
    items: list = field(default_factory=list)  # each: {"subject": str, "paths": [[str, ...]], "detail": str}
    questions: list = field(default_factory=list)
    controls: list = field(default_factory=list)
    evidence: list = field(default_factory=list)


def _step(g: Graph, a: str, pred: str, b: str) -> str:
    return f"{g.label(a)} -{pred}-> {g.label(b)}"


def capabilities(g: Graph, agent: str) -> list[tuple[str, list[str]]]:
    """(capability id, path steps) for every tool or MCP capability an agent can reach."""
    out = []
    for e in g.out(agent, "USES"):
        n = g.nodes[e.target]
        if n.type == "Tool":
            out.append((n.id, [_step(g, agent, "USES", n.id)]))
        elif n.type == "MCPClient":
            for c in g.out(n.id, "CONNECTS_TO"):
                for x in g.out(c.target, "EXPOSES"):
                    out.append((x.target, [_step(g, agent, "USES", n.id), _step(g, n.id, "CONNECTS_TO", c.target),
                                           _step(g, c.target, "EXPOSES", x.target)]))
    return out


def servers(g: Graph, agent: str) -> list[tuple[str, list[str]]]:
    out = []
    for e in g.out(agent, "USES"):
        if g.nodes[e.target].type == "MCPClient":
            for c in g.out(e.target, "CONNECTS_TO"):
                out.append((c.target, [_step(g, agent, "USES", e.target), _step(g, e.target, "CONNECTS_TO", c.target)]))
    return out


def cloud_reach(g: Graph, start: str, max_roles: int = 3) -> list[tuple[str, dict, list[str], tuple]]:
    """(resource id, edge props, steps, identity chain) for grants reachable from an identity."""
    results = []
    frontier = [(start, [], (start,))]
    seen = set()
    while frontier:
        node, steps, chain = frontier.pop()
        if (node, chain) in seen:
            continue
        seen.add((node, chain))
        for e in g.out(node, "AUTHORIZED_TO"):
            results.append((e.target, e.props, steps + [_step(g, node, "AUTHORIZED_TO", e.target) + f" [{', '.join(e.props.get('actions', []))}]"], chain))
        if len(chain) <= max_roles:
            for e in g.out(node, "ASSUMES_ROLE"):
                if e.target not in chain:
                    frontier.append((e.target, steps + [_step(g, node, "ASSUMES_ROLE", e.target)], chain + (e.target,)))
    return results


def run_all(g: Graph) -> list[Finding]:
    findings: list[Finding] = []
    agents = [n.id for n in g.of_type("Agent")]

    # Q01: untrusted influence + sensitive read + disclosure available to one agent.
    f = Finding("Q01", "Untrusted content, sensitive data and an outbound channel meet in one agent",
                "Content written by others can steer the agent (influence without authority), the agent can read "
                "sensitive data, and it can disclose to a channel others read. Together these form a candidate path "
                "from private data to an outside audience, the pattern behind EchoLeak and the GitHub MCP disclosure.",
                questions=["E.4 Q1", "E.4 Q3", "E.4 Q5"], controls=["ATG-AUT-009", "ATG-TRU-005", "ATG-AUT-005", "ATG-TRU-010"],
                evidence=["Which channels can the disclosing capabilities write to, and are any public or external?",
                          "Is a human approval enforced before disclosure, and is it bound to the exact content?",
                          "Can the untrusted and sensitive sources be separated into different sessions or agents?"])
    for a in agents:
        caps = capabilities(g, a)
        groups = {k: [(c, p) for c, p in caps if cond(g.nodes[c])] for k, cond in (
            ("untrusted", lambda n: n.props.get("untrusted_read")),
            ("sensitive", lambda n: n.props.get("sensitive_read")),
            ("disclose", lambda n: "Disclose" in n.props.get("authority", [])))}
        if all(groups.values()):
            f.items.append({"subject": g.label(a), "detail": "; ".join(
                f"{k}: {', '.join(sorted(g.label(c) for c, _ in v))}" for k, v in groups.items()),
                "paths": [p for k in ("untrusted", "sensitive", "disclose") for _, p in groups[k][:1]]})
    findings.append(f)

    # Q02: consequential capability without a declared approval.
    f = Finding("Q02", "Consequential capabilities with no declared human approval",
                "The agent can reach a capability that can delete, transact, execute, disclose or approve, and no approval "
                "is declared for it. An instruction to the agent is not a control; ATG-AUT-005 asks for technically "
                "enforceable approval before consequential action.",
                questions=["E.9 Q1", "E.9 Q3"], controls=["ATG-AUT-005", "ATG-AUT-003", "ATG-AUT-010"],
                evidence=["Is there an enforced approval step for this capability, bound to its exact parameters?",
                          "Does the agent need this authority at all for its task?"])
    for a in agents:
        seen = set()
        for c, p in capabilities(g, a):
            if c in seen:
                continue
            seen.add(c)
            auth = set(g.nodes[c].props.get("authority", []))
            hit = sorted(auth & CONSEQUENTIAL)
            if hit and not g.out(c, "APPROVED_BY"):
                f.items.append({"subject": f"{g.label(a)} -> {g.label(c)}", "detail": f"authority: {', '.join(hit)}", "paths": [p]})
    findings.append(f)

    # Q03: one credential used by more than one MCP server.
    f = Finding("Q03", "One credential shared by several MCP servers",
                "Several servers authenticate with the same credential, so actions cannot be attributed to one server and "
                "revoking it for one revokes it for all.",
                questions=["E.4 Q2"], controls=["ATG-AUT-002", "ATG-RES-008"],
                evidence=["Can each server have its own credential with only the scope it needs?"])
    users = defaultdict(list)
    for e in g.edges.values():
        if e.type == "AUTHENTICATES_AS":
            kind = g.nodes[e.target].props.get("credential_kind")
            if kind in ("reference", "literal") or e.props.get("declared"):
                users[e.target].append(e.source)
    for cred, srvs in users.items():
        if len(set(srvs)) > 1:
            f.items.append({"subject": g.label(cred), "detail": "used by " + ", ".join(sorted(g.label(s) for s in set(srvs))),
                            "paths": [[_step(g, s, "AUTHENTICATES_AS", cred)] for s in sorted(set(srvs))]})
    findings.append(f)

    # Q04 and Q09: agent reaches high-authority cloud grants through a server's identity.
    q4 = Finding("Q04", "Agent reaches cloud delete, modify or execute authority",
                 "Through an MCP server's identity, the agent can reach cloud permissions that change or destroy resources. "
                 "Whether the grant is effective, and what the agent would actually do, is not established.",
                 questions=["E.4 Q1", "E.4 Q2", "E.9 Q1"], controls=["ATG-AUT-003", "ATG-AUT-010", "ATG-AUT-005"],
                 evidence=["Effective permissions of this identity (IAM Access Analyzer or the policy simulator)",
                           "Is production separated from the environment the agent works in?"])
    q9 = Finding("Q09", "More than one route to the same high-authority grant",
                 "The agent reaches the same resource grant through different identities or roles. Removing one route "
                 "leaves the others; a fix must cover every alternate route.",
                 questions=["E.9 Q5"], controls=["ATG-TRU-008", "ATG-TRU-010"],
                 evidence=["Which control breaks each route, and is there evidence that it operates?"])
    for a in agents:
        routes = defaultdict(set)
        for s, sp in servers(g, a):
            for e in g.out(s, "AUTHENTICATES_AS"):
                for res, props, steps, chain in cloud_reach(g, e.target):
                    hit = sorted(set(props.get("authority", [])) & CLOUD_HIGH)
                    if hit:
                        path = sp + [_step(g, s, "AUTHENTICATES_AS", e.target)] + steps
                        q4.items.append({"subject": f"{g.label(a)} -> {g.label(res)}", "detail": f"authority: {', '.join(hit)}"
                                         + ("; conditional grant" if props.get("conditional") else ""), "paths": [path]})
                        routes[res].add((s,) + chain)
        for res, rs in routes.items():
            if len(rs) > 1:
                q9.items.append({"subject": f"{g.label(a)} -> {g.label(res)}", "detail": f"{len(rs)} distinct routes",
                                 "paths": [[" -> ".join(g.label(x) for x in r)] for r in sorted(rs)]})
    findings.append(q4)

    # Q05: wildcard cloud grants with changing authority.
    f = Finding("Q05", "Wildcard cloud permissions",
                "A policy grants every action of a service, or acts on every resource, with authority to modify, delete or "
                "execute. Wildcards make reach hard to bound and review.",
                questions=["E.4 Q2"], controls=["ATG-AUT-003"],
                evidence=["Which specific actions and resources does the workload need?"])
    for e in g.edges.values():
        if e.type == "AUTHORIZED_TO" and (e.props.get("wildcard_action") or g.nodes[e.target].props.get("wildcard")):
            hit = sorted(set(e.props.get("authority", [])) & CLOUD_HIGH)
            if hit:
                f.items.append({"subject": f"{g.label(e.source)} -> {g.label(e.target)}",
                                "detail": f"actions: {', '.join(e.props.get('actions', []))}", "paths": [[_step(g, e.source, 'AUTHORIZED_TO', e.target)]]})
    findings.append(f)

    # Q06, Q07, Q08: server configuration hygiene.
    q6 = Finding("Q06", "MCP server launched from an unpinned package",
                 "The server is fetched by name without a fixed version, so a new release (or a compromised one) runs "
                 "without review, the supply-chain pattern in the Amazon Q incident.",
                 questions=["E.4 Q3"], controls=["ATG-DIS-009", "ATG-VAL-009", "ATG-AUT-006"],
                 evidence=["Pin the version or digest and review updates before they run."])
    q7 = Finding("Q07", "Credential stored as a literal value in an MCP configuration",
                 "A secret is written directly into a configuration file rather than referenced from a secret store or the "
                 "environment. The value is not shown here.",
                 questions=["E.4 Q2"], controls=["ATG-AUT-002", "ATG-RES-008"],
                 evidence=["Move the secret to a secret store or environment reference, and rotate it."])
    q8 = Finding("Q08", "Remote MCP server over unencrypted HTTP",
                 "The client connects to a non-local server over plain HTTP, so requests, responses and any credentials "
                 "cross the network unprotected.",
                 questions=["E.4 Q3"], controls=["ATG-TRU-005"],
                 evidence=["Use HTTPS, or confirm the network path is otherwise protected."])
    for n in g.of_type("MCPServer"):
        if n.props.get("pinned") is False:
            q6.items.append({"subject": n.label, "detail": f"{n.props.get('package_registry')} package {n.props.get('package')}", "paths": []})
        if n.props.get("insecure_http"):
            q8.items.append({"subject": n.label, "detail": n.props.get("url", ""), "paths": []})
    for n in g.of_type("WorkloadIdentity"):
        for where in n.props.get("literal_in", []):
            q7.items.append({"subject": n.label, "detail": f"in {where}", "paths": []})
    findings += [q6, q7, q8, q9]
    return findings


def unknown_register(g: Graph, collector_unknowns: list) -> list[dict]:
    """Items the tool could not resolve. UNKNOWN is never treated as safe."""
    items = list(collector_unknowns)
    for n in g.nodes.values():
        if n.type in ("MCPCapability", "Tool") and not n.props.get("authority"):
            items.append({"subject": n.label, "what": "authority of this capability",
                          "why": "no annotation or name rule classified it", "resolve": "classify it manually from its documentation"})
    for n in g.of_type("MCPServer"):
        if not g.out(n.id, "EXPOSES"):
            items.append({"subject": n.label, "what": "which capabilities this server exposes",
                          "why": "no tools/list export was provided", "resolve": "export the server's tools/list result"})
        for e in g.out(n.id, "AUTHENTICATES_AS"):
            t = g.nodes[e.target]
            if t.type == "WorkloadIdentity" and not g.out(t.id) and not e.props.get("declared"):
                items.append({"subject": f"{n.label} ({t.label})", "what": "what this credential can reach",
                              "why": "the credential is not mapped to an identity with known permissions",
                              "resolve": "map it in server_identities, or record the token's scopes"})
    for e in g.edges.values():
        if e.type == "APPROVED_BY":
            items.append({"subject": g.label(e.source), "what": "whether the declared approval is enforced",
                          "why": "approval is declared in the context file, not evidenced",
                          "resolve": "evidence that the approval is technically enforced and bound to the action (ATG-AUT-005)"})
    return items
