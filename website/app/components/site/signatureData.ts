/**
 * The signature AI Trust Graph figure: one synthetic path drawn with the
 * methodology's own vocabulary.
 *
 * Predicate names and their caveats are CANONICAL, verbatim from the
 * Artifact #12 Ontology Specification predicate catalogue. States follow the
 * methodology: observed (approved) assertions, proposed or inferred
 * (candidate) assertions, and UNKNOWN (Artifact #6 §0.5). Evidence grades are
 * Artifact #6 E0–E5 and are illustrative here. Everything else is a synthetic
 * illustration and makes no claim about a real system.
 */

export type SigState = "observed" | "candidate" | "unknown";

export type SigNode = { key: string; label: string; kind: string; x: number; y: number; tone: string; note: string };
export type SigEdge = {
  key: string;
  from: string;
  to: string;
  predicate: string;
  state: SigState;
  evidence?: string;
  caveat: string;
  note: string;
  condition?: string;
  breakpoint?: string;
  /** Short label drawn in the figure (the full text is in the inspector). */
  breakpointLabel?: string;
  /** Draw the condition label to the left of its marker. */
  conditionLeft?: boolean;
  crossesBoundary?: boolean;
  bend?: number;
};

export const sigNodes: SigNode[] = [
  { key: "human", label: "Employee", kind: "Human actor", x: 70, y: 300, tone: "d5", note: "Starts the request and is the principal the agent acts for." },
  { key: "agent", label: "Agent", kind: "AI agent", x: 250, y: 300, tone: "d1", note: "Plans the task and calls other components." },
  { key: "model", label: "Model", kind: "Model endpoint", x: 450, y: 120, tone: "d3", note: "Generates the plan and the draft request." },
  { key: "data", label: "Data", kind: "Data source", x: 450, y: 480, tone: "d6", note: "Supplier records used as context." },
  { key: "tool", label: "Tool", kind: "Tool / API", x: 450, y: 300, tone: "d2", note: "Creates requests in another system." },
  { key: "identity", label: "Identity", kind: "Service identity", x: 660, y: 300, tone: "d4", note: "The identity the tool uses for its calls." },
  { key: "system", label: "Business system", kind: "Business system", x: 920, y: 300, tone: "d5", note: "Holds records whose change has business consequence." },
  { key: "consequence", label: "Potential consequence", kind: "Consequence", x: 920, y: 490, tone: "d4", note: "A target and its effect are recorded separately; this one is potential, not established." },
];

export const sigEdges: SigEdge[] = [
  {
    key: "e-instructs",
    from: "human",
    to: "agent",
    predicate: "INSTRUCTS",
    state: "observed",
    evidence: "E3",
    caveat: "Instruction does not prove execution or authority.",
    note: "The employee directs the agent toward a task.",
  },
  {
    key: "e-model",
    from: "agent",
    to: "model",
    predicate: "INVOKES",
    state: "observed",
    evidence: "E4",
    caveat: "Invocation is distinct from ability to invoke, successful completion and resulting consequence.",
    note: "The agent calls the model endpoint.",
  },
  {
    key: "e-data",
    from: "agent",
    to: "data",
    predicate: "RETRIEVES_FROM",
    state: "candidate",
    evidence: "E1",
    caveat: "Retrieval must preserve authorization context and does not imply unrestricted read access.",
    condition: "user context passed?",
    note: "Inferred from configuration only. Whether the employee's access rights are applied to retrieval is not yet evidenced.",
  },
  {
    key: "e-tool",
    from: "agent",
    to: "tool",
    predicate: "INVOKES",
    state: "observed",
    evidence: "E4",
    caveat: "Invocation is distinct from ability to invoke, successful completion and resulting consequence.",
    breakpoint: "human approval step",
    breakpointLabel: "approval step",
    note: "A control sits on this edge: a human approval step that can stop or constrain the call. Its effectiveness needs its own evidence.",
  },
  {
    key: "e-authn",
    from: "tool",
    to: "identity",
    predicate: "AUTHENTICATES_AS",
    state: "observed",
    evidence: "E4",
    caveat: "Authentication does not imply authorization.",
    note: "The tool establishes its requests using a service identity.",
  },
  {
    key: "e-connect",
    from: "identity",
    to: "system",
    predicate: "CONNECTS_TO",
    state: "observed",
    evidence: "E4",
    caveat: "Does not imply authentication, authorization, invocation or exploitability.",
    crossesBoundary: true,
    bend: -70,
    note: "Network and logical connectivity across the trust boundary is established.",
  },
  {
    key: "e-authz",
    from: "identity",
    to: "system",
    predicate: "AUTHORIZED_TO",
    state: "unknown",
    caveat: "Authorization does not prove invocation or successful effect.",
    condition: "within spend limit?",
    conditionLeft: true,
    crossesBoundary: true,
    bend: 70,
    note: "Authority to create purchase requests is a separate assertion. No evidence has been linked, so it stays UNKNOWN.",
  },
  {
    key: "e-trigger",
    from: "system",
    to: "consequence",
    predicate: "TRIGGERS_ACTION",
    state: "candidate",
    caveat: "Must distinguish trigger from authority, successful effect and consequence.",
    note: "If every condition held, a purchase request would commit spend. This is a hypothesis, not a finding.",
  },
];

/** Reading order for the inspector and the mobile path. */
export const sigOrder = [
  "human",
  "e-instructs",
  "agent",
  "e-model",
  "model",
  "e-data",
  "data",
  "e-tool",
  "tool",
  "e-authn",
  "identity",
  "e-connect",
  "e-authz",
  "system",
  "e-trigger",
  "consequence",
] as const;

export const stateLabel: Record<SigState, string> = {
  observed: "Observed (approved assertion)",
  candidate: "Proposed or inferred (candidate)",
  unknown: "UNKNOWN",
};
