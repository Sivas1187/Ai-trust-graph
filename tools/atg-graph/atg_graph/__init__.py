# SPDX-License-Identifier: Apache-2.0
"""atg-graph: a reference implementation of AI Trust Graph graph construction.

Builds a candidate graph of agents, MCP servers and capabilities, credentials
and cloud permissions from exported files, then runs path queries that point
at the questions an AI Trust Graph review asks. It produces candidate findings
for human review, never assessment results.
"""

__version__ = "0.1.0"
