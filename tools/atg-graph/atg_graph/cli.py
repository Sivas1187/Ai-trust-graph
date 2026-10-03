# SPDX-License-Identifier: Apache-2.0
"""Command line: atg-graph scan <context.json> --out <dir>."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from . import __version__
from .context import build
from .export import to_cypher, to_json, to_snapshot
from .queries import run_all, unknown_register
from .report import render


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(prog="atg-graph", description="Build an AI Trust Graph candidate graph from exported files.")
    p.add_argument("--version", action="version", version=f"atg-graph {__version__}")
    sub = p.add_subparsers(dest="cmd", required=True)
    scan = sub.add_parser("scan", help="build the graph, run the queries and write the report")
    scan.add_argument("context", type=Path, help="context file (JSON) listing the inputs")
    scan.add_argument("--out", type=Path, default=Path("atg-graph-out"), help="output directory (default: atg-graph-out)")
    args = p.parse_args(argv)

    graph, collector_unknowns, _ = build(args.context)
    findings = run_all(graph)
    unknowns = unknown_register(graph, collector_unknowns)

    args.out.mkdir(parents=True, exist_ok=True)
    (args.out / "report.md").write_text(render(graph, findings, unknowns, args.context.name), encoding="utf-8")
    (args.out / "graph.json").write_text(to_json(graph), encoding="utf-8")
    (args.out / "graph.cypher").write_text(to_cypher(graph), encoding="utf-8")
    (args.out / "snapshot.json").write_text(to_snapshot(graph), encoding="utf-8")

    hits = sum(1 for f in findings if f.items)
    print(f"atg-graph: {len(graph.nodes)} objects, {len(graph.edges)} relationships; "
          f"{hits} of {len(findings)} queries returned candidate findings; {len(unknowns)} UNKNOWN items.")
    print(f"Wrote {args.out / 'report.md'}, graph.json, graph.cypher and snapshot.json.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
