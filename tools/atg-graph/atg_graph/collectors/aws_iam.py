# SPDX-License-Identifier: Apache-2.0
"""AWS IAM from `aws iam get-account-authorization-details` output.

Adds users (Identity) and roles (Role), AUTHORIZED_TO edges from Allow
statements, and ASSUMES_ROLE edges from role trust policies. The collector
does not evaluate IAM: Deny statements, NotAction / NotResource, permission
boundaries, SCPs and conditions are recorded as UNKNOWN rather than resolved,
so an edge here means "a policy grants this", not "this is effective".
"""

from __future__ import annotations

import json
from pathlib import Path
from urllib.parse import unquote

from ..classify import classify_aws_action
from ..model import Graph


def _doc(raw) -> dict:
    if isinstance(raw, dict):
        return raw
    if isinstance(raw, str):
        return json.loads(unquote(raw))
    return {}


def _list(v) -> list:
    return v if isinstance(v, list) else ([] if v is None else [v])


def _resource_node(g: Graph, pattern: str, src: str) -> str:
    rid = f"res:{pattern}"
    label = "All resources (*)" if pattern == "*" else pattern
    g.add_node(rid, "Resource", label, provenance=src, wildcard=(pattern == "*" or pattern.endswith(":*")))
    return rid


def _apply_policy(g: Graph, unknowns: list, subject: str, doc: dict, policy: str, src: str) -> None:
    for i, st in enumerate(_list(doc.get("Statement"))):
        effect = st.get("Effect")
        where = f"{policy} statement {i + 1}"
        if effect == "Deny":
            unknowns.append({"subject": g.label(subject), "what": f"Deny in {where} is not evaluated",
                             "why": "the tool does not compute effective permissions",
                             "resolve": "evaluate effective permissions (for example with IAM Access Analyzer or the policy simulator)"})
            continue
        if effect != "Allow":
            continue
        if "NotAction" in st or "NotResource" in st:
            unknowns.append({"subject": g.label(subject), "what": f"NotAction / NotResource in {where}",
                             "why": "inverse grants cannot be enumerated from the policy alone",
                             "resolve": "evaluate effective permissions for this principal"})
            continue
        actions = [str(a) for a in _list(st.get("Action"))]
        authority = sorted({c for a in actions for c in classify_aws_action(a)})
        if not authority:
            unknowns.append({"subject": g.label(subject), "what": f"unclassified actions in {where}: {', '.join(actions)}",
                             "why": "no authority-class rule matched", "resolve": "classify the actions manually"})
        conditional = bool(st.get("Condition"))
        for pattern in [str(r) for r in _list(st.get("Resource"))]:
            rid = _resource_node(g, pattern, src)
            g.add_edge(subject, "AUTHORIZED_TO", rid, provenance=f"{src}#{where}", key=where,
                       actions=actions, authority=authority, conditional=conditional,
                       wildcard_action=any(a == "*" or a.endswith(":*") for a in actions))
            if conditional:
                unknowns.append({"subject": g.label(subject), "what": f"conditions on {where} ({pattern})",
                                 "why": "conditions decide whether the grant applies; the tool does not evaluate them",
                                 "resolve": "evidence of how the condition evaluates in practice"})


def collect_aws(g: Graph, path: Path, unknowns: list) -> None:
    data = json.loads(path.read_text(encoding="utf-8"))
    src = str(path)
    managed = {}
    for p in data.get("Policies", []):
        default = next((v for v in p.get("PolicyVersionList", []) if v.get("IsDefaultVersion")), None)
        if default:
            managed[p["Arn"]] = (p.get("PolicyName", p["Arn"]), _doc(default.get("Document")))

    def attach(subject: str, inline: list, attached: list) -> None:
        for ip in inline or []:
            _apply_policy(g, unknowns, subject, _doc(ip.get("PolicyDocument")), ip.get("PolicyName", "inline policy"), src)
        for ap in attached or []:
            arn = ap.get("PolicyArn")
            if arn in managed:
                name, doc = managed[arn]
                _apply_policy(g, unknowns, subject, doc, name, src)
            else:
                unknowns.append({"subject": g.label(subject), "what": f"managed policy {arn} not in the export",
                                 "why": "its permissions cannot be read", "resolve": "include the policy in the export"})

    groups = {grp["GroupName"]: grp for grp in data.get("GroupDetailList", [])}
    for u in data.get("UserDetailList", []):
        uid = u["Arn"]
        g.add_node(uid, "Identity", f"IAM user {u['UserName']}", provenance=src, cloud="aws")
        attach(uid, u.get("UserPolicyList"), u.get("AttachedManagedPolicies"))
        for gname in u.get("GroupList", []):
            grp = groups.get(gname, {})
            attach(uid, grp.get("GroupPolicyList"), grp.get("AttachedManagedPolicies"))

    for r in data.get("RoleDetailList", []):
        rid = r["Arn"]
        g.add_node(rid, "Role", f"IAM role {r['RoleName']}", provenance=src, cloud="aws")
        attach(rid, r.get("RolePolicyList"), r.get("AttachedManagedPolicies"))
        if r.get("PermissionsBoundary"):
            unknowns.append({"subject": f"IAM role {r['RoleName']}", "what": "permissions boundary not evaluated",
                             "why": "the boundary may narrow the grants shown", "resolve": "evaluate effective permissions"})

    for r in data.get("RoleDetailList", []):
        trust = _doc(r.get("AssumeRolePolicyDocument"))
        for st in _list(trust.get("Statement")):
            if st.get("Effect") != "Allow":
                continue
            principal = st.get("Principal", {})
            entries = []
            if principal == "*":
                entries.append(("*", "AWS"))
            elif isinstance(principal, dict):
                for kind, vals in principal.items():
                    entries += [(str(v), kind) for v in _list(vals)]
            for who, kind in entries:
                if kind == "AWS":
                    pid = who
                    if pid not in g.nodes:
                        label = "Any AWS principal (*)" if who == "*" else f"AWS principal {who}"
                        g.add_node(pid, "Identity", label, provenance=src, cloud="aws", external=True)
                else:
                    pid = f"{kind.lower()}:{who}"
                    if pid not in g.nodes:
                        g.add_node(pid, "WorkloadIdentity", f"{kind} principal {who}", provenance=src, cloud="aws")
                g.add_edge(pid, "ASSUMES_ROLE", r["Arn"], provenance=f"{src}#trust:{r['RoleName']}",
                           conditional=bool(st.get("Condition")))
