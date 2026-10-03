# SPDX-License-Identifier: Apache-2.0
"""Build the graph from a context file.

The context file lists the exported inputs and the facts only a person can
declare: which agent uses which MCP configuration, which identity an MCP
server's credential maps to, which capabilities need human approval, and which
content is untrusted or sensitive. Paths are relative to the context file.

    {
      "agents": [{"id": "dev-agent", "name": "Developer agent",
                  "mcp_configs": ["mcp.json"], "agent_tools": "agent-tools.json"}],
      "mcp_tools_dir": "tools",
      "aws_authorization_details": "aws-authorization-details.json",
      "server_identities": {"aws-ops": "arn:aws:iam::111122223333:role/AgentOps"},
      "approvals": ["github/merge_pull_request"],
      "untrusted_sources": ["github/list_issues"],
      "trusted_sources": [],
      "sensitive_reads": ["github/get_file_contents"]
    }
"""

from __future__ import annotations

import json
from pathlib import Path

from .collectors.agent_tools import collect_agent_tools
from .collectors.aws_iam import collect_aws
from .collectors.mcp import collect_config, collect_tools_dir
from .model import Graph


def _match(cap_id: str, entries: list[str]) -> bool:
    server = cap_id.split("/", 1)[0]
    return cap_id in entries or server in entries


def build(context_path: Path) -> tuple[Graph, list, dict]:
    """Return (graph, unknowns, context)."""
    context_path = Path(context_path)
    base = context_path.parent
    ctx = json.loads(context_path.read_text(encoding="utf-8"))
    g = Graph()
    unknowns: list = []
    src = str(context_path)

    for a in ctx.get("agents", []):
        aid = f"agent:{a['id']}"
        g.add_node(aid, "Agent", a.get("name", a["id"]), provenance=src)
        for cfg in a.get("mcp_configs", []):
            collect_config(g, base / cfg, aid)
        if a.get("agent_tools"):
            collect_agent_tools(g, base / a["agent_tools"], aid)

    if ctx.get("mcp_tools_dir"):
        collect_tools_dir(g, base / ctx["mcp_tools_dir"])

    if ctx.get("aws_authorization_details"):
        collect_aws(g, base / ctx["aws_authorization_details"], unknowns)

    for server, identity in (ctx.get("server_identities") or {}).items():
        sid = f"mcp:{server}"
        if sid not in g.nodes:
            unknowns.append({"subject": f"MCP server {server}", "what": "server_identities names a server that no configuration declares",
                             "why": "the mapping cannot be attached", "resolve": "check the server name"})
            continue
        if identity not in g.nodes:
            g.add_node(identity, "Identity", f"Identity {identity}", provenance=src)
        g.add_edge(sid, "AUTHENTICATES_AS", identity, provenance=f"{src}#server_identities", declared=True)

    caps = [n for n in g.nodes.values() if n.type in ("MCPCapability", "Tool")]
    for n in caps:
        cid = n.id.split(":", 1)[1] if n.type == "Tool" else n.id
        if _match(cid, ctx.get("untrusted_sources", [])):
            n.props["untrusted_read"] = True
            n.props["basis"] = n.props.get("basis", []) + ["declared untrusted in context"]
        if _match(cid, ctx.get("trusted_sources", [])):
            n.props["untrusted_read"] = False
            n.props["basis"] = n.props.get("basis", []) + ["declared trusted in context"]
        if _match(cid, ctx.get("sensitive_reads", [])):
            n.props["sensitive_read"] = True
            n.props["basis"] = n.props.get("basis", []) + ["declared sensitive in context"]
        if _match(cid, ctx.get("approvals", [])):
            ap = f"approval:{cid}"
            g.add_node(ap, "Approval", f"Declared approval for {cid}", provenance=src, declared=True)
            g.add_edge(n.id, "APPROVED_BY", ap, provenance=f"{src}#approvals", declared=True)

    return g, unknowns, ctx
