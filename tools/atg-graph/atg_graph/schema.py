# SPDX-License-Identifier: Apache-2.0
"""The subset of the AI Trust Graph vocabulary this tool uses.

Every entity type and predicate below is a canonical term of Artifact #12
(Ontology Specification, Appendices A and C); authority classes come from
Artifact #2 §5.2, path states from Artifact #12 §9.3 and control titles from
Artifact #5. tests/test_schema.py checks all of them against docs/.
"""

ENTITY_TYPES = (
    "Agent",
    "MCPClient",
    "MCPServer",
    "MCPCapability",
    "Tool",
    "WorkloadIdentity",
    "Identity",
    "Role",
    "Resource",
    "Approval",
)

PREDICATES = (
    "USES",
    "CONNECTS_TO",
    "EXPOSES",
    "AUTHENTICATES_AS",
    "ASSUMES_ROLE",
    "AUTHORIZED_TO",
    "APPROVED_BY",
)

# Artifact #2 §5.2, in canonical order.
AUTHORITY_CLASSES = (
    "Observe",
    "Read",
    "Retrieve",
    "Infer",
    "Recommend",
    "Approve",
    "Execute",
    "Modify",
    "Delete",
    "Disclose",
    "Transact",
)

# The tool only ever establishes that a traversal exists in the represented
# graph. Artifact #12 §9.3: "Topological: A traversal exists in the represented graph."
PATH_STATE = "Topological"

# Review state of everything the tool asserts (Artifact #12 review status).
REVIEW_STATE = "candidate"

# Artifact #5 controls referenced by the queries (id -> canonical title).
CONTROLS = {
    "ATG-AUT-002": "Unique machine identity and attribution",
    "ATG-AUT-003": "Least authority and bounded scope",
    "ATG-AUT-005": "Meaningful approval for consequential action",
    "ATG-AUT-006": "Tool, plugin and MCP allowlisting",
    "ATG-AUT-009": "Data disclosure and destination authority",
    "ATG-AUT-010": "Environment and duty separation",
    "ATG-DIS-009": "Dependency and provenance lineage",
    "ATG-RES-008": "Credential, token and delegation revocation",
    "ATG-TRU-005": "Trust boundary definition and enforcement",
    "ATG-TRU-008": "Material path construction",
    "ATG-TRU-010": "Control breakpoint mapping",
    "ATG-VAL-009": "AI supply-chain and pipeline validation",
}

# Whitepaper Executive brief questions, referenced by number (E.4 Qn, E.9 Qn).
QUESTIONS = {
    "E.4 Q1": "What can this component reach?",
    "E.4 Q2": "Through which identity, and under what authority?",
    "E.4 Q3": "Across which boundaries, for example a provider, account, privilege or data-classification boundary?",
    "E.4 Q5": "Which control would stop, constrain, detect or contain the path, and is there evidence that it actually operates?",
    "E.9 Q1": "Which of our AI agents or automations can approve, execute, modify, delete, disclose or transact, and through which identities?",
    "E.9 Q3": "Is any \"human approval\" in our AI workflows meaningful: does the reviewer have the information, decision freedom, competence, time and enforceable ability to stop the action, or is an AI recommendation being treated as an approval?",
    "E.9 Q5": "If that control fails, is there an alternate route to the same target?",
}
