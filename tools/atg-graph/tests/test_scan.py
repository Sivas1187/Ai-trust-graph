# SPDX-License-Identifier: Apache-2.0
"""End-to-end: the demo, secret handling, MCP config parsing and IAM parsing."""

import json
import tempfile
import unittest
from pathlib import Path

from atg_graph.cli import main
from atg_graph.collectors.mcp import _package
from atg_graph.context import build
from atg_graph.queries import run_all, unknown_register

DEMO = Path(__file__).resolve().parents[1] / "examples" / "demo" / "atg-context.json"


def scan(context: Path):
    g, unknowns, _ = build(context)
    findings = {f.query: f for f in run_all(g)}
    return g, findings, unknown_register(g, unknowns)


class Demo(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.g, cls.f, cls.u = scan(DEMO)

    def subjects(self, q):
        return [i["subject"] for i in self.f[q].items]

    def test_every_query_fires_on_the_demo(self):
        for q, finding in self.f.items():
            self.assertTrue(finding.items, q)

    def test_q01_influence_to_disclosure(self):
        self.assertEqual(self.subjects("Q01"), ["Developer coding agent"])
        self.assertIn("github/create_pull_request", self.f["Q01"].items[0]["detail"])

    def test_q02_respects_declared_approvals(self):
        subs = " ".join(self.subjects("Q02"))
        self.assertIn("terminate_instances", subs)
        self.assertNotIn("merge_pull_request", subs)

    def test_q03_shared_credential(self):
        self.assertEqual(self.subjects("Q03"), ["Credential GITHUB_TOKEN"])

    def test_q05_ignores_bucket_object_patterns(self):
        subs = self.subjects("Q05")
        self.assertNotIn("IAM role AgentOpsRole -> arn:aws:s3:::prod-data/*", subs)
        self.assertIn("IAM role DeployRole -> arn:aws:s3:::prod-data/*", subs)

    def test_q09_alternate_routes(self):
        self.assertEqual(self.f["Q09"].items[0]["detail"], "2 distinct routes")

    def test_unknown_register(self):
        whats = [u["what"] for u in self.u]
        self.assertTrue(any("not in the export" in w for w in whats))
        self.assertTrue(any(w.startswith("Deny in") for w in whats))
        self.assertTrue(any(w == "authority of this capability" for w in whats))
        self.assertTrue(any(w == "whether the declared approval is enforced" for w in whats))

    def test_every_edge_is_a_candidate(self):
        self.assertTrue(all(e.review_state == "candidate" for e in self.g.edges.values()))


class Secrets(unittest.TestCase):
    SECRET = "ghp_ThisIsALiteralSecretValue0123456789"

    def test_secret_values_never_reach_any_output(self):
        with tempfile.TemporaryDirectory() as d:
            d = Path(d)
            (d / "mcp.json").write_text(json.dumps({"mcpServers": {
                "a": {"command": "npx", "args": ["-y", "pkg-a@1.0.0"], "env": {"API_TOKEN": self.SECRET}},
                "b": {"command": "npx", "args": ["-y", "pkg-b@1.0.0"], "env": {"OTHER_TOKEN": self.SECRET}},
            }}))
            (d / "ctx.json").write_text(json.dumps({"agents": [{"id": "x", "mcp_configs": ["mcp.json"]}]}))
            out = d / "out"
            self.assertEqual(main(["scan", str(d / "ctx.json"), "--out", str(out)]), 0)
            for f in out.iterdir():
                self.assertNotIn(self.SECRET, f.read_text(encoding="utf-8"), f.name)
            g, findings, _ = scan(d / "ctx.json")
            # The same literal in two servers is recognised as one shared credential, without storing it.
            self.assertEqual(len(findings["Q03"].items), 1)
            self.assertEqual(len(findings["Q07"].items), 2)


class McpParsing(unittest.TestCase):
    def test_pinning(self):
        self.assertFalse(_package("npx", ["-y", "@scope/server"])[1])
        self.assertTrue(_package("npx", ["-y", "@scope/server@1.2.3"])[1])
        self.assertFalse(_package("npx", ["server@latest"])[1])
        self.assertTrue(_package("uvx", ["--from", "server==0.6.2", "server"])[1])
        self.assertFalse(_package("docker", ["run", "-i", "ghcr.io/o/image"])[1])
        self.assertTrue(_package("docker", ["run", "ghcr.io/o/image@sha256:" + "a" * 64])[1])
        self.assertIsNone(_package("node", ["server.js"])[1])

    def test_vscode_format_and_local_http(self):
        with tempfile.TemporaryDirectory() as d:
            d = Path(d)
            (d / "mcp.json").write_text(json.dumps({"servers": {
                "local": {"type": "http", "url": "http://localhost:3000/mcp"},
                "remote": {"type": "http", "url": "https://mcp.example.com/mcp"},
            }}))
            (d / "ctx.json").write_text(json.dumps({"agents": [{"id": "x", "mcp_configs": ["mcp.json"]}]}))
            _, findings, _ = scan(d / "ctx.json")
            self.assertEqual(findings["Q08"].items, [])


if __name__ == "__main__":
    unittest.main()
