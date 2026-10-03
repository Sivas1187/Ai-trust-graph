# atg-graph

**A reference implementation of AI Trust Graph graph construction.** It reads files you export (MCP client configurations, MCP `tools/list` results, agent tool definitions and AWS IAM authorization details), builds a graph in the methodology's vocabulary, and runs path queries that point at the questions an AI Trust Graph review asks.

> **What it is not.** It is not an AI Trust Graph assessment and produces no control score, maturity level, Path Exposure Index, conformance claim or certification. Everything it asserts is a **candidate** for human review, and every path it reports is at most **Topological**: it exists in the represented graph, but its conditions, identities and controls have not been evidenced ([Artifact #12](../../docs/12-ontology-specification.md) §9.3). It is a small, offline reference tool, not a product; it connects to nothing and runs no MCP server. Its schema is not a normative methodology schema, so it provides no L4 Tool-compatible conformance ([METHODOLOGY_MANIFEST.md](../../METHODOLOGY_MANIFEST.md) §5).

Version 0.1.0 · Python 3.10 or later · standard library only · Apache-2.0.

Prepared with AI assistance for the methodology author; author review pending.

## Quick start

```sh
cd tools/atg-graph
python -m atg_graph scan examples/demo/atg-context.json --out atg-graph-out
```

The synthetic demo reproduces patterns from the [incident retrospectives](../../guides/incident-retrospectives.md): an agent that reads issues anyone can write, reads private files and can open pull requests; a shared GitHub token; an unpinned server package; a literal token in a configuration; a remote server over plain HTTP; and cloud authority to delete production data reached through two different roles. Open `atg-graph-out/report.md`.

To install the command instead: `pip install ./tools/atg-graph`, then `atg-graph scan <context.json> --out <dir>`.

## Inputs

A **context file** lists the inputs and the facts only a person can declare. Paths are relative to it. See [`examples/demo/atg-context.json`](examples/demo/atg-context.json).

| Key | What to put there |
|---|---|
| `agents` | Each agent's `id`, `name`, the MCP client configuration files it uses (`mcp_configs`) and, optionally, its own tool definitions (`agent_tools`). |
| `mcp_tools_dir` | A folder of `<server>.tools.json` files, each the JSON result of the MCP `tools/list` call for that server (an MCP inspector or client can save it). |
| `aws_authorization_details` | The output of `aws iam get-account-authorization-details --output json`. |
| `server_identities` | Which cloud identity an MCP server's credential acts as, for example `{"aws-ops": "arn:aws:iam::111122223333:role/AgentOps"}`. |
| `approvals` | Capabilities that need human approval, as `server/tool` (for an agent tool, `agent-id/tool`). Declared approvals are recorded as UNKNOWN until evidenced. |
| `untrusted_sources`, `trusted_sources`, `sensitive_reads` | Overrides for the heuristics, as `server/tool` or a whole `server`. |

MCP configurations in either the `{"mcpServers": {...}}` shape or the VS Code `{"servers": {...}}` shape are accepted. Agent tool definitions can be Anthropic-style (`{"name": ...}`) or OpenAI-style (`{"type": "function", "function": {...}}`).

## What it reports

| Query | Candidate finding | ATG questions | Relevant controls |
|---|---|---|---|
| Q01 | Untrusted content, sensitive data and an outbound channel meet in one agent | E.4 Q1, Q3, Q5 | ATG-AUT-009, ATG-TRU-005, ATG-AUT-005, ATG-TRU-010 |
| Q02 | Consequential capability (delete, transact, execute, disclose, approve) with no declared approval | E.9 Q1, Q3 | ATG-AUT-005, ATG-AUT-003, ATG-AUT-010 |
| Q03 | One credential shared by several MCP servers | E.4 Q2 | ATG-AUT-002, ATG-RES-008 |
| Q04 | Agent reaches cloud delete, modify or execute authority through a server's identity | E.4 Q1, Q2; E.9 Q1 | ATG-AUT-003, ATG-AUT-010, ATG-AUT-005 |
| Q05 | Wildcard cloud permissions with changing authority | E.4 Q2 | ATG-AUT-003 |
| Q06 | MCP server launched from an unpinned package | E.4 Q3 | ATG-DIS-009, ATG-VAL-009, ATG-AUT-006 |
| Q07 | Credential stored as a literal value in an MCP configuration | E.4 Q2 | ATG-AUT-002, ATG-RES-008 |
| Q08 | Remote MCP server over unencrypted HTTP | E.4 Q3 | ATG-TRU-005 |
| Q09 | More than one route to the same high-authority grant | E.9 Q5 | ATG-TRU-008, ATG-TRU-010 |

The report also contains an **UNKNOWN register**: capabilities whose authority could not be classified, servers with no `tools/list` export, credentials whose reach is unknown, IAM conditions, Deny statements and missing policies, and declared approvals that are not evidenced. A query with no result is not evidence that a risk is absent.

**Outputs:** `report.md`; `graph.json` (nodes and relationships with provenance and review state); `graph.cypher` (Neo4j `MERGE` statements); `snapshot.json` (the shape the website's interactive graph reads).

## How it follows the methodology

- **Canonical vocabulary only.** Entity types and relationships come from Artifact #12, authority classes from Artifact #2 §5.2, control titles from Artifact #5 and questions from the whitepaper. `tests/test_schema.py` checks every term against `docs/` and fails on any drift.
- **Candidate, never approved.** Automated output proposes assertions; a person approves them. Every relationship carries its source file as provenance.
- **Connectivity is not authority.** The graph keeps "uses", "connects to", "exposes", "authenticates as", "assumes role" and "authorized to" as separate relationships, and the queries report reach, not effect.
- **UNKNOWN stays UNKNOWN.** What the tool cannot classify or evaluate goes to the register, never to a default.
- **No scores.** Findings are listed, not ranked by a number.

## Security and privacy

- **Credential values are never stored or printed.** The tool records a credential's variable name and whether its value is a reference, a placeholder or a literal. To recognise one secret reused across servers, it compares values through a per-run random keyed hash that is discarded on exit. `tests/test_scan.py` checks that a literal secret appears in no output.
- **Offline and read-only.** It reads the files you give it and writes only to the output folder.
- **Treat the outputs as sensitive.** They describe your attack surface.

## Limits

- Authority classification is heuristic (tool annotations and name verbs). Check it.
- IAM is not evaluated: Deny statements, NotAction, permission boundaries, service control policies and conditions are recorded as UNKNOWN, not resolved. Use IAM Access Analyzer or the policy simulator for effective permissions.
- Runtime behaviour, prompt injection itself and tool composition at run time are out of scope (see the whitepaper's limitations, §13.5).
- MCP servers are identified by name across configurations: two different servers with the same name are merged. Give them distinct names.
- The Cypher export is covered by unit tests only; it has not been run against a live Neo4j database in CI.

## Development

```sh
cd tools/atg-graph
python -m unittest discover -s tests -t . -v
```

## Licence

The code in `tools/atg-graph/` is licensed under the [Apache License 2.0](LICENSE). The methodology text is licensed separately under CC BY 4.0 (see the repository [LICENSE](../../LICENSE)), and the "AI Trust Graph" name is reserved separately ([TRADEMARKS.md](../../TRADEMARKS.md)). Copyright 2026 Siva Sethumadhavan.
