// Synthetic public demonstration dataset only.
// This is an implementation example. It is not a normative methodology artifact.

MERGE (actor:ATGDemo:Actor {id: "actor-1"})
SET actor.atgPublicDemo = true, actor.type = "Actor", actor.label = "Analyst",
    actor.summary = "Human actor initiating the AI-assisted workflow.", actor.displayX = 72, actor.displayY = 210;

MERGE (agent:ATGDemo:Agent {id: "agent-1"})
SET agent.atgPublicDemo = true, agent.type = "Agent", agent.label = "AI agent",
    agent.summary = "Agent selecting and sequencing steps toward the task objective.", agent.displayX = 220, agent.displayY = 132;

MERGE (identity:ATGDemo:Identity {id: "identity-1"})
SET identity.atgPublicDemo = true, identity.type = "Identity", identity.label = "Workload identity",
    identity.summary = "Identity used by the agent when reaching governed capabilities.", identity.displayX = 360, identity.displayY = 72;

MERGE (tool:ATGDemo:Tool {id: "tool-1"})
SET tool.atgPublicDemo = true, tool.type = "Tool", tool.label = "Case tool",
    tool.summary = "Write-capable tool exposed to the agent under bounded conditions.", tool.displayX = 500, tool.displayY = 132;

MERGE (api:ATGDemo:API {id: "api-1"})
SET api.atgPublicDemo = true, api.type = "API", api.label = "Action API",
    api.summary = "API exposing a consequential operation.", api.displayX = 642, api.displayY = 210;

MERGE (action:ATGDemo:BusinessAction {id: "action-1"})
SET action.atgPublicDemo = true, action.type = "BusinessAction", action.label = "Sensitive action",
    action.summary = "Business action whose consequence makes the path material.", action.displayX = 500, action.displayY = 332;

MERGE (control:ATGDemo:Control {id: "control-1"})
SET control.atgPublicDemo = true, control.type = "Control", control.label = "Approval control",
    control.summary = "Illustrative control coverage; coverage alone does not prove effectiveness.", control.displayX = 330, control.displayY = 370;

MERGE (evidence:ATGDemo:EvidenceItem {id: "evidence-1"})
SET evidence.atgPublicDemo = true, evidence.type = "EvidenceItem", evidence.label = "Execution record",
    evidence.summary = "Illustrative evidence item supporting a scoped graph assertion.", evidence.displayX = 150, evidence.displayY = 348;

MERGE (actor)-[r1:USES {id: "r1"}]->(agent)
SET r1.conditions = "Declared workflow scope.";

MERGE (agent)-[r2:AUTHENTICATES_AS {id: "r2"}]->(identity)
SET r2.conditions = "Session uses the workload identity.";

MERGE (identity)-[r3:AUTHORIZED_TO {id: "r3"}]->(tool)
SET r3.conditions = "Material grant conditions are intentionally unresolved in this synthetic example.",
    r3.state = "UNKNOWN";

MERGE (agent)-[r4:INVOKES {id: "r4"}]->(tool)
SET r4.conditions = "Invocation remains distinct from successful effect.";

MERGE (tool)-[r5:INVOKES {id: "r5"}]->(api)
SET r5.conditions = "API operation and scope must be evidenced.";

MERGE (api)-[r6:TRIGGERS_ACTION {id: "r6"}]->(action)
SET r6.conditions = "Successful call may create a business consequence.";

MERGE (action)-[r7:CONTROLLED_BY {id: "r7"}]->(control)
SET r7.conditions = "Coverage does not establish operating effectiveness.";

MERGE (control)-[r8:EVIDENCED_BY {id: "r8"}]->(evidence)
SET r8.conditions = "Evidence strength and sufficiency are evaluated separately.";
