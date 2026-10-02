export type GraphView = "system" | "authority" | "controls" | "evidence";

export type GraphNode = {
  id: string;
  type: string;
  label: string;
  summary: string;
  x?: number;
  y?: number;
};

export type GraphRelationship = {
  id: string;
  from: string;
  to: string;
  type: string;
  label?: string;
  conditions?: string;
  state?: string;
};

export type GraphSnapshot = {
  nodes: GraphNode[];
  relationships: GraphRelationship[];
  generatedAt?: string;
};

export const graphViews: { id: GraphView; label: string; description: string }[] = [
  { id: "system", label: "System", description: "The connected synthetic system and its governed relationships." },
  { id: "authority", label: "Authority", description: "Identity, authorization and invocation relationships." },
  { id: "controls", label: "Controls", description: "Where controls cover or constrain consequential activity." },
  { id: "evidence", label: "Evidence", description: "Which graph assertions are supported by evidence items." },
];

export const syntheticGraph: GraphSnapshot = {
  generatedAt: "bundled synthetic example",
  nodes: [
    { id: "actor-1", type: "Actor", label: "Analyst", summary: "Human actor initiating the AI-assisted workflow.", x: 72, y: 210 },
    { id: "agent-1", type: "Agent", label: "AI agent", summary: "Agent selecting and sequencing steps toward the task objective.", x: 220, y: 132 },
    { id: "identity-1", type: "Identity", label: "Workload identity", summary: "Identity used by the agent when reaching governed capabilities.", x: 360, y: 72 },
    { id: "tool-1", type: "Tool", label: "Case tool", summary: "Write-capable tool exposed to the agent under bounded conditions.", x: 500, y: 132 },
    { id: "api-1", type: "API", label: "Action API", summary: "API exposing a consequential operation.", x: 642, y: 210 },
    { id: "action-1", type: "BusinessAction", label: "Sensitive action", summary: "Business action whose consequence makes the path material.", x: 500, y: 332 },
    { id: "control-1", type: "Control", label: "Approval control", summary: "Illustrative control covering the sensitive action; coverage alone does not prove effectiveness.", x: 330, y: 370 },
    { id: "evidence-1", type: "EvidenceItem", label: "Execution record", summary: "Illustrative evidence item supporting a scoped control or relationship assertion.", x: 150, y: 348 },
  ],
  relationships: [
    { id: "r1", from: "actor-1", to: "agent-1", type: "USES", conditions: "Declared workflow scope." },
    { id: "r2", from: "agent-1", to: "identity-1", type: "AUTHENTICATES_AS", conditions: "Session uses the workload identity." },
    { id: "r3", from: "identity-1", to: "tool-1", type: "AUTHORIZED_TO", conditions: "Material grant conditions are intentionally unresolved in this synthetic example.", state: "UNKNOWN" },
    { id: "r4", from: "agent-1", to: "tool-1", type: "INVOKES", conditions: "Invocation remains distinct from successful effect." },
    { id: "r5", from: "tool-1", to: "api-1", type: "INVOKES", conditions: "API operation and scope must be evidenced." },
    { id: "r6", from: "api-1", to: "action-1", type: "TRIGGERS_ACTION", conditions: "Successful call may create a business consequence." },
    { id: "r7", from: "action-1", to: "control-1", type: "CONTROLLED_BY", conditions: "Coverage does not establish operating effectiveness." },
    { id: "r8", from: "control-1", to: "evidence-1", type: "EVIDENCED_BY", conditions: "Evidence strength and sufficiency are evaluated separately." },
  ],
};

const authorityTypes = new Set(["AUTHENTICATES_AS", "AUTHORIZED_TO", "INVOKES", "DELEGATES_TO", "LIMITED_BY"]);
const controlTypes = new Set(["CONTROLLED_BY", "CONTROLS", "BREAKS_PATH", "DENIED_BY", "LIMITED_BY"]);
const evidenceTypes = new Set(["EVIDENCED_BY", "CORROBORATES", "OBSERVED_BY", "INVALIDATED_BY"]);

export function relationshipInView(rel: GraphRelationship, view: GraphView) {
  if (view === "system") return true;
  if (view === "authority") return authorityTypes.has(rel.type);
  if (view === "controls") return controlTypes.has(rel.type);
  return evidenceTypes.has(rel.type);
}
