# SPDX-License-Identifier: Apache-2.0
"""MCP client configurations and MCP tools/list exports.

Supported config shapes: {"mcpServers": {...}} (Claude Desktop, Claude Code,
Cursor and similar) and {"servers": {...}} (VS Code). Credential *values* are
never stored or printed: only the variable name, whether the value is a
reference, a placeholder or a literal, and an equality key from a per-run
random HMAC, so two servers sharing one literal secret can be told apart from
two servers with different secrets without the secret leaving memory.
"""

from __future__ import annotations

import hashlib
import hmac
import json
import os
import re
from pathlib import Path
from urllib.parse import urlparse

from ..classify import classify_capability
from ..model import Graph

_RUN_KEY = os.urandom(32)
_SECRET_NAME = re.compile(r"(TOKEN|SECRET|PASSWORD|PASSWD|PASS\b|_PAT\b|^PAT\b|CREDENTIAL|API_?KEY|ACCESS_?KEY|PRIVATE_?KEY|AUTH)", re.I)
_REFERENCE = re.compile(r"^\$\{[^}]+\}$|^\$[A-Za-z_][A-Za-z0-9_]*$|^\{env:[^}]+\}$")
_PLACEHOLDER = re.compile(r"^$|^<.*>$|your[_-]|changeme|placeholder|x{4,}|\.\.\.", re.I)
_RUNNERS = {"npx": "npm", "bunx": "npm", "pnpx": "npm", "uvx": "pypi", "pipx": "pypi", "docker": "image", "podman": "image"}
_LOCAL_HOSTS = {"localhost", "127.0.0.1", "::1"}


def _credential(var: str, value) -> tuple[str, str]:
    """Return (equality key, kind) for one credential setting. The value is not kept."""
    text = "" if value is None else str(value).strip()
    if _REFERENCE.match(text):
        ref = re.sub(r"^\$\{|\}$|^\$|^\{env:", "", text).rstrip("}")
        return f"ref:{ref}", "reference"
    if _PLACEHOLDER.search(text):
        return f"placeholder:{var}", "placeholder"
    digest = hmac.new(_RUN_KEY, text.encode(), hashlib.sha256).hexdigest()[:12]
    return f"literal:{digest}", "literal"


def _package(command: str, args: list[str]) -> tuple[str | None, bool | None, str | None]:
    """Find the package or image a runner command launches and whether its version is pinned."""
    runner = os.path.basename(command or "")
    kind = _RUNNERS.get(runner)
    if not kind:
        return None, None, None
    rest = list(args or [])
    if runner == "pipx" and rest[:1] == ["run"]:
        rest = rest[1:]
    if runner in ("docker", "podman"):
        if rest[:1] != ["run"]:
            return None, None, kind
        rest = rest[1:]
    pkg = None
    takes_value = {"-e", "--env", "-v", "--volume", "--name", "-p", "--network", "--package", "--with", "-w", "--entrypoint"}
    it = iter(rest)
    for a in it:
        if a == "--from":  # uvx --from <package spec> <command>
            pkg = next(it, None)
            break
        if a in takes_value:
            next(it, None)
            continue
        if a.startswith("-"):
            continue
        pkg = a
        break
    if not pkg:
        return None, None, kind
    if kind == "npm":
        name_ver = pkg[1:] if pkg.startswith("@") else pkg
        pinned = "@" in name_ver and name_ver.rsplit("@", 1)[1] not in ("", "latest", "next")
    elif kind == "pypi":
        m = re.search(r"(==|@)([^\s]+)$", pkg)
        pinned = bool(m) and m.group(2) not in ("latest",)
    else:
        last = pkg.rsplit("/", 1)[-1]
        pinned = "@sha256:" in pkg or (":" in last and not last.endswith(":latest"))
    return pkg, pinned, kind


def collect_config(g: Graph, path: Path, agent_id: str) -> str:
    """Add an MCP client, its servers and their credentials. Returns the client node id."""
    data = json.loads(path.read_text(encoding="utf-8"))
    servers = data.get("mcpServers") or data.get("servers") or {}
    src = str(path)
    client = f"client:{path}"
    g.add_node(client, "MCPClient", f"MCP client ({path.name})", provenance=src)
    g.add_edge(agent_id, "USES", client, provenance=src)
    for name, spec in servers.items():
        spec = spec or {}
        sid = f"mcp:{name}"
        url = spec.get("url") or spec.get("serverUrl")
        command = spec.get("command")
        args = [str(a) for a in spec.get("args", [])]
        pkg, pinned, registry = _package(command, args)
        insecure = None
        if url:
            u = urlparse(url)
            insecure = u.scheme == "http" and (u.hostname or "") not in _LOCAL_HOSTS
        g.add_node(
            sid, "MCPServer", f"MCP server {name}", provenance=src,
            transport=("remote" if url else "stdio"), url=url, command=command,
            package=pkg, package_registry=registry, pinned=pinned, insecure_http=insecure,
        )
        g.add_edge(client, "CONNECTS_TO", sid, provenance=src)

        settings = {**(spec.get("env") or {}), **(spec.get("headers") or {})}
        for var, value in settings.items():
            if not _SECRET_NAME.search(var):
                continue
            key, kind = _credential(var, value)
            cid = f"cred:{key}"
            label = f"Credential {key.split(':', 1)[1]}" if kind == "reference" else f"Credential in {var}"
            node = g.add_node(cid, "WorkloadIdentity", label, provenance=src, credential_kind=kind, variables=[var])
            if kind == "literal":
                node.props["literal_in"] = sorted(set(node.props.get("literal_in", [])) | {f"{path.name}:{name}.{var}"})
            g.add_edge(sid, "AUTHENTICATES_AS", cid, provenance=f"{src}#{name}.{var}")
    return client


def collect_tools_dir(g: Graph, tools_dir: Path) -> None:
    """Add MCP capabilities from <server>.tools.json files (MCP tools/list results)."""
    if not tools_dir or not tools_dir.is_dir():
        return
    for f in sorted(tools_dir.glob("*.tools.json")):
        server = f.name[: -len(".tools.json")]
        sid = f"mcp:{server}"
        if sid not in g.nodes:
            g.add_node(sid, "MCPServer", f"MCP server {server}", provenance=str(f), transport="unknown")
        data = json.loads(f.read_text(encoding="utf-8"))
        tools = data.get("tools", []) if isinstance(data, dict) else data
        for t in tools:
            name = t["name"]
            classes, basis, flags = classify_capability(name, t.get("annotations"))
            cap = f"{server}/{name}"
            g.add_node(cap, "MCPCapability", cap, provenance=str(f), authority=classes, basis=basis, **flags)
            g.add_edge(sid, "EXPOSES", cap, provenance=str(f))
