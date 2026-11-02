// Synthetic public demonstration dataset only.
// This is an implementation example. It is not a normative methodology artifact.
// Generated from website/app/graph-example.json (the bundled /graph/ example);
// keep the two in step. Ontology pattern: Artifact #12, Appendix E.1.

// Remove an earlier demonstration graph. Only nodes flagged as public demo data are touched.
MATCH (old:ATGDemo {atgPublicDemo: true}) DETACH DELETE old;

MERGE (analyst:ATGDemo:Actor {id: "analyst"})
SET analyst.atgPublicDemo = true, analyst.type = "Actor", analyst.label = "Analyst",
    analyst.summary = "The human analyst who starts the refund workflow.",
    analyst.displayX = 110, analyst.displayY = 110, analyst.displayLabelAt = "above";

MERGE (analyst_identity:ATGDemo:HumanIdentity {id: "analyst-identity"})
SET analyst_identity.atgPublicDemo = true, analyst_identity.type = "HumanIdentity", analyst_identity.label = "Analyst identity",
    analyst_identity.summary = "The identity the analyst signs in with. It is the grantor that delegates bounded authority to the agent.",
    analyst_identity.displayX = 400, analyst_identity.displayY = 110, analyst_identity.displayLabelAt = "above";

MERGE (agent:ATGDemo:Agent {id: "agent"})
SET agent.atgPublicDemo = true, agent.type = "Agent", agent.label = "Refund agent",
    agent.summary = "An AI agent that prepares and submits customer refunds on the analyst's behalf.",
    agent.displayX = 690, agent.displayY = 110, agent.displayLabelAt = "above";

MERGE (tool:ATGDemo:Tool {id: "tool"})
SET tool.atgPublicDemo = true, tool.type = "Tool", tool.label = "Refund tool",
    tool.summary = "A write-capable tool the agent calls to submit a refund.",
    tool.displayX = 690, tool.displayY = 280, tool.displayLabelAt = "below";

MERGE (action:ATGDemo:BusinessAction {id: "action"})
SET action.atgPublicDemo = true, action.type = "BusinessAction", action.label = "Issue refund",
    action.summary = "The business action that moves money. Its consequence is what makes this path material.",
    action.displayX = 400, action.displayY = 280, action.displayLabelAt = "above";

MERGE (outcome:ATGDemo:Outcome {id: "outcome"})
SET outcome.atgPublicDemo = true, outcome.type = "Outcome", outcome.label = "Customer refunded",
    outcome.summary = "The intended result of the action. Whether it is materially adverse depends on the amount, the recipient and the conditions.",
    outcome.displayX = 110, outcome.displayY = 280, outcome.displayLabelAt = "below";

MERGE (ledger:ATGDemo:Source {id: "ledger"})
SET ledger.atgPublicDemo = true, ledger.type = "Source", ledger.label = "Payment ledger",
    ledger.summary = "The system of record in which each refund appears. It is a source of evidence, not evidence of approval.",
    ledger.displayX = 100, ledger.displayY = 450, ledger.displayLabelAt = "below";

MERGE (limit:ATGDemo:Budget {id: "limit"})
SET limit.atgPublicDemo = true, limit.type = "Budget", limit.label = "Refund limit",
    limit.summary = "A per-refund value allowance that constrains the action.",
    limit.displayX = 300, limit.displayY = 450, limit.displayLabelAt = "below";

MERGE (approval:ATGDemo:Approval {id: "approval"})
SET approval.atgPublicDemo = true, approval.type = "Approval", approval.label = "Refund approval",
    approval.summary = "The decision that permits, conditions or stops refunds above the limit.",
    approval.displayX = 500, approval.displayY = 450, approval.displayLabelAt = "right";

MERGE (control:ATGDemo:Control {id: "control"})
SET control.atgPublicDemo = true, control.type = "Control", control.label = "Payment control",
    control.summary = "A control intended to prevent or detect improper refunds. Coverage alone does not establish operating effectiveness.",
    control.displayX = 720, control.displayY = 450, control.displayLabelAt = "right";

MERGE (approval_record:ATGDemo:EvidenceItem {id: "approval-record"})
SET approval_record.atgPublicDemo = true, approval_record.type = "EvidenceItem", approval_record.label = "Approval record",
    approval_record.summary = "The record of an approval decision. Its grade, quality and confidence are evaluated separately.",
    approval_record.displayX = 500, approval_record.displayY = 610, approval_record.displayLabelAt = "right";

MERGE (test_record:ATGDemo:EvidenceItem {id: "test-record"})
SET test_record.atgPublicDemo = true, test_record.type = "EvidenceItem", test_record.label = "Control test record",
    test_record.summary = "The record of a test of the payment control. Its grade, quality and confidence are evaluated separately.",
    test_record.displayX = 720, test_record.displayY = 610, test_record.displayLabelAt = "right";

MATCH (analyst:ATGDemo {id: "analyst"}), (analyst_identity:ATGDemo {id: "analyst-identity"})
MERGE (analyst)-[r1:AUTHENTICATES_AS {id: "r1"}]->(analyst_identity)
SET r1.conditions = "The analyst's session is established with the analyst identity.";

MATCH (analyst_identity:ATGDemo {id: "analyst-identity"}), (agent:ATGDemo {id: "agent"})
MERGE (analyst_identity)-[r2:DELEGATES_TO {id: "r2"}]->(agent)
SET r2.conditions = "The scope, duration and revocation of this delegation have not been evidenced, so the step stays UNKNOWN.",
    r2.state = "UNKNOWN";

MATCH (agent:ATGDemo {id: "agent"}), (tool:ATGDemo {id: "tool"})
MERGE (agent)-[r3:CONNECTS_TO {id: "r3"}]->(tool)
SET r3.conditions = "The agent can reach the tool endpoint. Reaching it is a separate fact from being allowed to call it.";

MATCH (agent:ATGDemo {id: "agent"}), (tool:ATGDemo {id: "tool"})
MERGE (agent)-[r4:INVOKES {id: "r4"}]->(tool)
SET r4.conditions = "The agent calls the tool. A call is a separate fact from a successful refund.";

MATCH (tool:ATGDemo {id: "tool"}), (action:ATGDemo {id: "action"})
MERGE (tool)-[r5:TRIGGERS_ACTION {id: "r5"}]->(action)
SET r5.conditions = "A successful call issues the refund.";

MATCH (action:ATGDemo {id: "action"}), (outcome:ATGDemo {id: "outcome"})
MERGE (action)-[r6:AFFECTS {id: "r6"}]->(outcome)
SET r6.conditions = "The refund pays the customer. Direction and scope: one customer, one refund.";

MATCH (action:ATGDemo {id: "action"}), (ledger:ATGDemo {id: "ledger"})
MERGE (action)-[r7:OBSERVED_BY {id: "r7"}]->(ledger)
SET r7.conditions = "Each refund is recorded in the payment ledger.";

MATCH (action:ATGDemo {id: "action"}), (limit:ATGDemo {id: "limit"})
MERGE (action)-[r8:LIMITED_BY {id: "r8"}]->(limit)
SET r8.conditions = "Each refund is capped at a set value. Whether the cap is enforced is a separate question.";

MATCH (action:ATGDemo {id: "action"}), (approval:ATGDemo {id: "approval"})
MERGE (action)-[r9:APPROVED_BY {id: "r9"}]->(approval)
SET r9.conditions = "Refunds above the limit need this approval.";

MATCH (action:ATGDemo {id: "action"}), (control:ATGDemo {id: "control"})
MERGE (action)-[r10:CONTROLLED_BY {id: "r10"}]->(control)
SET r10.conditions = "The refund falls within the payment control's coverage.";

MATCH (approval:ATGDemo {id: "approval"}), (approval_record:ATGDemo {id: "approval-record"})
MERGE (approval)-[r11:EVIDENCED_BY {id: "r11"}]->(approval_record)
SET r11.conditions = "The approval decision is linked to its record.";

MATCH (control:ATGDemo {id: "control"}), (test_record:ATGDemo {id: "test-record"})
MERGE (control)-[r12:EVIDENCED_BY {id: "r12"}]->(test_record)
SET r12.conditions = "The control is linked to the record of its latest test.";
