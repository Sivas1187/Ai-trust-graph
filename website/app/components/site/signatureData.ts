/**
 * The signature AI Trust Graph figure: one synthetic path drawn with the
 * methodology's own vocabulary.
 *
 * Predicate names and their caveats are CANONICAL, verbatim from the
 * Artifact #12 Ontology Specification predicate catalogue. States follow the
 * methodology: observed (approved) assertions, proposed or inferred
 * (candidate) assertions, and UNKNOWN (Artifact #6 §0.5). Evidence grades are
 * Artifact #6 E0–E5 and are illustrative here. The scenario is the
 * procurement-agent example used throughout the page. Everything else is a synthetic
 * illustration and makes no claim about a real system.
 */

export type SigState = "observed" | "candidate" | "unknown";

/** x, y: desktop drawing (1040 × 600). mx, my: vertical mobile drawing (360 × 1160). */
export type SigNode = { key: string; label: string; kind: string; x: number; y: number; mx: number; my: number; tone: string; note: string };
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
  /** Shorter condition label for the mobile drawing. */
  conditionShort?: string;
  /**
   * A claim about the control on this edge and how the evidence relates to it
   * (Artifact #6 §0.9 relation names). Used for the disputed-claim state.
   */
  controlClaim?: { claim: string; relation: "DISPUTES" | "QUALIFIES"; by: string };
  crossesBoundary?: boolean;
  bend?: number;
  /** Mobile drawing: curve offset and which side of the line the labels sit. */
  mbend?: number;
  side?: "left" | "right";
};

export const sigNodes: SigNode[] = [
  { key: "human", label: "Employee", kind: "Human actor", x: 70, y: 300, mx: 180, my: 40, tone: "d5", note: "Asks the agent to identify a supplier and prepare a purchase request. The principal the agent acts for." },
  { key: "agent", label: "Agent", kind: "AI procurement agent", x: 250, y: 300, mx: 180, my: 190, tone: "d1", note: "Plans the task and calls other components." },
  { key: "model", label: "Model", kind: "Model endpoint", x: 450, y: 120, mx: 60, my: 330, tone: "d3", note: "Generates the plan and the draft request." },
  { key: "provider", label: "Provider", kind: "Model provider", x: 640, y: 120, mx: 60, my: 500, tone: "d3", note: "Operates the platform the model runs on. A separate party with its own responsibilities." },
  { key: "data", label: "Data", kind: "Supplier data", x: 450, y: 480, mx: 300, my: 330, tone: "d6", note: "Supplier records, prices and ratings used as context." },
  { key: "tool", label: "Tool", kind: "Procurement tool", x: 450, y: 300, mx: 180, my: 560, tone: "d2", note: "Creates purchase requests in the business system." },
  { key: "identity", label: "Identity", kind: "Service identity", x: 660, y: 300, mx: 180, my: 720, tone: "d4", note: "The identity the tool uses for its calls." },
  { key: "system", label: "Business system", kind: "Enterprise business system", x: 920, y: 300, mx: 180, my: 900, tone: "d5", note: "Holds purchase requests and spend commitments, behind a trust boundary." },
  { key: "consequence", label: "Potential consequence", kind: "Consequence", x: 920, y: 490, mx: 180, my: 1070, tone: "d4", note: "A target and its effect are recorded separately; this one is potential, not established." },
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
    side: "right",
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
    side: "left",
  },
  {
    key: "e-hosted",
    from: "model",
    to: "provider",
    predicate: "HOSTED_ON",
    state: "observed",
    evidence: "E3",
    caveat: "Hosting does not imply ownership or trust.",
    note: "The model runs on the provider's platform, as recorded in an approved architecture document.",
    side: "right",
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
    conditionShort: "user context?",
    side: "right",
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
    controlClaim: {
      claim: "An attestation (E2) states that every request needs human approval.",
      relation: "DISPUTES",
      by: "The approval workflow configuration (E3) applies approval only above a value threshold.",
    },
    side: "right",
    note: "A control sits on this edge: a human approval step that could stop or constrain the call. The claim that it covers every request is disputed by the evidence, so its scope is unsupported.",
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
    side: "right",
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
    mbend: 40,
    side: "left",
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
    mbend: -40,
    side: "right",
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
    side: "right",
  },
];

/** Reading order for the inspector and the mobile path. */
export const sigOrder = [
  "human",
  "e-instructs",
  "agent",
  "e-model",
  "model",
  "e-hosted",
  "provider",
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
