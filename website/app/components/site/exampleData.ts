/**
 * Worked synthetic example: an AI procurement agent. EDITORIAL and SYNTHETIC.
 * It is not drawn from a real organisation or assessment and is not one of
 * the Artifact #10 reference cases. Vocabulary is canonical: predicates from
 * Artifact #12, evidence grades and relations from Artifact #6, result states
 * from Artifact #4 §0.5 and Artifact #12, path states from Artifact #2 §6.3.
 */

export type ExState = "supported" | "candidate" | "unknown" | "nottested";

export const exStateLabel: Record<ExState, string> = {
  supported: "Supported by evidence",
  candidate: "Candidate (inferred)",
  unknown: "UNKNOWN",
  nottested: "Not Tested",
};

/** Shared with the signature graph (section 04), so both drawings of the scenario use the same marks. */
export const exStateSymbol: Record<ExState, string> = { supported: "✓", candidate: "◇", unknown: "?", nottested: "–" };

export const exComponents = [
  { id: "analyst", kind: "Human", name: "Employee", note: "Asks the agent to identify a supplier and prepare a purchase request." },
  { id: "agent", kind: "Agent", name: "AI procurement agent", note: "Plans the task, retrieves supplier data and calls tools." },
  { id: "model", kind: "Model", name: "Hosted model", note: "Generates the recommendation." },
  { id: "provider", kind: "Provider", name: "Model provider", note: "Operates the platform the model runs on. A separate organisation." },
  { id: "data", kind: "Data", name: "Supplier data store", note: "Supplier records, prices and risk ratings." },
  { id: "tool", kind: "Tool", name: "Procurement tool", note: "Creates purchase requests through the business system interface." },
  { id: "identity", kind: "Identity", name: "Service identity svc-procure", note: "The identity the tool uses towards the business system." },
  { id: "erp", kind: "Business system", name: "Enterprise business system (finance zone)", note: "Behind a trust boundary. Holds purchase requests and spend commitments." },
] as const;

export const exAssumptions = [
  "The scope is the procurement agent in production, as deployed on the assessment date.",
  "The business system is operated by another team; its configuration is outside direct inspection unless exported.",
  "No live testing against the business system was authorised for this run.",
];

export const exEdges: {
  from: string;
  predicate: string;
  to: string;
  state: ExState;
  grade: string;
  condition?: string;
  boundary?: boolean;
}[] = [
  { from: "Employee", predicate: "INSTRUCTS", to: "Procurement agent", state: "supported", grade: "E3" },
  { from: "Procurement agent", predicate: "INVOKES", to: "Hosted model", state: "supported", grade: "E4" },
  { from: "Hosted model", predicate: "HOSTED_ON", to: "Model provider", state: "supported", grade: "E3" },
  {
    from: "Procurement agent",
    predicate: "RETRIEVES_FROM",
    to: "Supplier data store",
    state: "candidate",
    grade: "E1",
    condition: "Is the employee's authorisation context passed through?",
  },
  { from: "Procurement agent", predicate: "INVOKES", to: "Procurement tool", state: "supported", grade: "E4", condition: "Only after a human approval step?" },
  { from: "Procurement tool", predicate: "AUTHENTICATES_AS", to: "svc-procure", state: "supported", grade: "E4" },
  { from: "svc-procure", predicate: "CONNECTS_TO", to: "Business system", state: "supported", grade: "E4", boundary: true },
  {
    from: "svc-procure",
    predicate: "AUTHORIZED_TO",
    to: "create purchase requests in the business system",
    state: "unknown",
    grade: "E0",
    condition: "Within a spend limit?",
    boundary: true,
  },
  { from: "Business system", predicate: "TRIGGERS_ACTION", to: "payment commitment", state: "candidate", grade: "E1" },
];

export const exAuthority: { claim: string; state: ExState; basis: string }[] = [
  { claim: "Can connect to the business system", state: "supported", basis: "Network flow logs corroborated by firewall configuration (E4)." },
  { claim: "Can authenticate to the business system", state: "supported", basis: "Identity provider configuration and sign-in logs (E4)." },
  { claim: "Can access supplier data in the user's context", state: "candidate", basis: "Inferred from agent code; no runtime evidence (E1)." },
  { claim: "Can invoke the procurement tool", state: "supported", basis: "Tool gateway logs and configuration (E4)." },
  { claim: "Can modify business system records", state: "unknown", basis: "Business system role export for svc-procure not supplied (E0)." },
  { claim: "Can transact (commit spend)", state: "unknown", basis: "No evidence either way (E0)." },
];

export const exEvidence = {
  available: [
    { item: "Approved architecture document", grade: "E3", relation: "SUPPORTS", target: "Employee instructs agent; agent calls tool; model hosted by the provider" },
    { item: "Model and tool gateway logs with configuration", grade: "E4", relation: "SUPPORTS", target: "Agent invokes model and tool" },
    { item: "Network flow logs and firewall rules", grade: "E4", relation: "CORROBORATES", target: "svc-procure connects to the business system" },
    { item: "Service owner attestation", grade: "E2", relation: "SUPPORTS", target: "Every purchase request needs human approval (the claimed scope)" },
    { item: "Approval workflow configuration", grade: "E3", relation: "DISPUTES", target: "The claimed scope: approval applies only above a value threshold" },
  ],
  missing: [
    "Business system role and entitlement export for svc-procure.",
    "A record of the approval step operating below the value threshold.",
    "Runtime evidence that retrieval preserves the employee's authorisation context.",
  ],
};

export const exControls: { control: string; role: string; state: ExState }[] = [
  { control: "Human approval before a purchase request is submitted", role: "Candidate breakpoint: could stop the path. Claimed to cover every request; the workflow configuration disputes that, so it is Not Tested below its threshold", state: "nottested" },
  { control: "Spend limit on svc-procure in the business system", role: "Candidate breakpoint: could constrain the path", state: "unknown" },
  { control: "Network segmentation to the finance zone", role: "Constrains which identities connect; does not decide authority", state: "supported" },
];

export const exConsequence =
  "If svc-procure can create and commit purchase requests, and the approval step does not cover lower-value requests, a manipulated supplier record or instruction could lead to an unapproved purchase commitment. This is a candidate path. It is not shown to be exploitable.";

export const exConclusion = [
  "Within the stated scope and evidence, a candidate path exists from the procurement agent to purchase-request creation in the business system.",
  "Connection and authentication across the trust boundary are supported by corroborated technical evidence (E4).",
  "Authority to create or commit purchase requests is UNKNOWN. The approval step is Not Tested below its threshold.",
  "The path is not shown to be exploitable, and it is not shown to be controlled.",
];

export const exNotDefensible = [
  "That the path is exploitable: authority, the approval gap and the consequence are not evidenced.",
  "That the path is controlled: the only identified breakpoint is Not Tested below its threshold, and its claimed scope is disputed.",
  "That svc-procure is limited to read access: no entitlement evidence was supplied.",
];

export const exUnknowns = [
  "svc-procure authority in the business system (create, modify, commit).",
  "Whether a spend limit applies to svc-procure.",
  "Whether retrieval preserves the employee's authorisation context.",
];

export const exDecision = {
  finding: "Finding (evidence-linked): transaction authority on the agent's business system path is UNKNOWN, and the only identified breakpoint is Not Tested below its threshold.",
  decision:
    "Decision (accountable, illustrative): the accountable owner records the result as Provisional, holds any expansion of autonomous submission until the business system entitlement export is reviewed, and sets a reassessment trigger on its receipt.",
  note: "The decision does not change the finding. Accepting a risk would be recorded as a decision; the UNKNOWNs would remain UNKNOWN.",
};
