# SPDX-License-Identifier: Apache-2.0
"""Agent tool definitions: a JSON list of tools in the common function-calling shapes.

Accepted entries: {"name": ...} (Anthropic style), {"type": "function",
"function": {"name": ...}} (OpenAI style), optionally wrapped in {"tools": [...]}.
"""

from __future__ import annotations

import json
from pathlib import Path

from ..classify import classify_capability
from ..model import Graph


def collect_agent_tools(g: Graph, path: Path, agent_id: str) -> None:
    data = json.loads(path.read_text(encoding="utf-8"))
    tools = data.get("tools", []) if isinstance(data, dict) else data
    for t in tools:
        spec = t.get("function", t) if isinstance(t, dict) else {}
        name = spec.get("name")
        if not name:
            continue
        classes, basis, flags = classify_capability(name, spec.get("annotations") or t.get("annotations"))
        tid = f"tool:{agent_id}/{name}"
        g.add_node(tid, "Tool", f"{name} (agent tool)", provenance=str(path), authority=classes, basis=basis, **flags)
        g.add_edge(agent_id, "USES", tid, provenance=str(path))
