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

export const exComponents = [
  { id: "analyst", kind: "Human", name: "Procurement analyst", note: "Asks the agent for a purchase recommendation." },
  { id: "agent", kind: "Agent", name: "Procurement agent", note: "Plans the task, retrieves supplier data and calls tools." },
  { id: "model", kind: "Model", name: "Hosted model", note: "Generates the recommendation. Operated by an external provider." },
  { id: "data", kind: "Data", name: "Supplier data store", note: "Supplier records, prices and risk ratings." },
  { id: "tool", kind: "Tool", name: "Purchase-order tool", note: "Creates purchase orders through the ERP interface." },
  { id: "identity", kind: "Identity", name: "Service identity svc-procure", note: "The identity the tool uses towards the ERP." },
  { id: "erp", kind: "Business system", name: "ERP (finance zone)", note: "Behind a trust boundary. Holds purchase orders and payment commitments." },
] as const;

export const exAssumptions = [
  "The scope is the procurement agent in production, as deployed on the assessment date.",
  "The ERP is operated by another team; its configuration is outside direct inspection unless exported.",
  "No live testing against the ERP was authorised for this run.",
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
  { from: "Procurement analyst", predicate: "INSTRUCTS", to: "Procurement agent", state: "supported", grade: "E3" },
  { from: "Procurement agent", predicate: "INVOKES", to: "Hosted model", state: "supported", grade: "E4" },
  {
    from: "Procurement agent",
    predicate: "RETRIEVES_FROM",
    to: "Supplier data store",
    state: "candidate",
    grade: "E1",
    condition: "Is the analyst's authorisation context passed through?",
  },
  { from: "Procurement agent", predicate: "INVOKES", to: "Purchase-order tool", state: "supported", grade: "E4", condition: "Only after a human approval step?" },
  { from: "Purchase-order tool", predicate: "AUTHENTICATES_AS", to: "svc-procure", state: "supported", grade: "E4" },
  { from: "svc-procure", predicate: "CONNECTS_TO", to: "ERP", state: "supported", grade: "E4", boundary: true },
  {
    from: "svc-procure",
    predicate: "AUTHORIZED_TO",
    to: "create purchase orders in ERP",
    state: "unknown",
    grade: "E0",
    condition: "Within a spend limit?",
    boundary: true,
  },
  { from: "ERP", predicate: "TRIGGERS_ACTION", to: "payment commitment", state: "candidate", grade: "E1" },
];

export const exAuthority: { claim: string; state: ExState; basis: string }[] = [
  { claim: "Can connect to the ERP", state: "supported", basis: "Network flow logs corroborated by firewall configuration (E4)." },
  { claim: "Can authenticate to the ERP", state: "supported", basis: "Identity provider configuration and sign-in logs (E4)." },
  { claim: "Can access supplier data in the user's context", state: "candidate", basis: "Inferred from agent code; no runtime evidence (E1)." },
  { claim: "Can invoke the purchase-order tool", state: "supported", basis: "Tool gateway logs and configuration (E4)." },
  { claim: "Can modify ERP records", state: "unknown", basis: "ERP role export for svc-procure not supplied (E0)." },
  { claim: "Can transact (commit spend)", state: "unknown", basis: "No evidence either way (E0)." },
];

export const exEvidence = {
  available: [
    { item: "Approved architecture document", grade: "E3", relation: "SUPPORTS", target: "Analyst instructs agent; agent calls tool" },
    { item: "Model and tool gateway logs with configuration", grade: "E4", relation: "SUPPORTS", target: "Agent invokes model and tool" },
    { item: "Network flow logs and firewall rules", grade: "E4", relation: "CORROBORATES", target: "svc-procure connects to ERP" },
    { item: "Service owner interview", grade: "E2", relation: "SUPPORTS", target: "A human approval step exists" },
    { item: "Approval workflow configuration", grade: "E3", relation: "QUALIFIES", target: "Approval applies only above a value threshold" },
  ],
  missing: [
    "ERP role and entitlement export for svc-procure.",
    "A record of the approval step operating below the value threshold.",
    "Runtime evidence that retrieval preserves the analyst's authorisation context.",
  ],
};

export const exControls: { control: string; role: string; state: ExState }[] = [
  { control: "Human approval before purchase-order submission", role: "Candidate breakpoint: could stop the path", state: "nottested" },
  { control: "ERP spend limit on svc-procure", role: "Candidate breakpoint: could constrain the path", state: "unknown" },
  { control: "Network segmentation to the finance zone", role: "Constrains which identities connect; does not decide authority", state: "supported" },
];

export const exConsequence =
  "If svc-procure can create and commit purchase orders, and the approval step does not cover lower-value orders, a manipulated supplier record or instruction could lead to an unapproved purchase commitment. This is a candidate path. It is not shown to be exploitable.";

export const exConclusion = [
  "Within the stated scope and evidence, a candidate path exists from the procurement agent to purchase-order creation in the ERP.",
  "Connection and authentication across the trust boundary are supported by corroborated technical evidence (E4).",
  "Authority to create or commit purchase orders is UNKNOWN. The approval step is Not Tested below its threshold.",
  "The path is not shown to be exploitable, and it is not shown to be controlled.",
];

export const exUnknowns = [
  "svc-procure authority in the ERP (create, modify, commit).",
  "Whether a spend limit applies to svc-procure.",
  "Whether retrieval preserves the analyst's authorisation context.",
];

export const exDecision = {
  finding: "Finding (evidence-linked): transaction authority on the agent's ERP path is UNKNOWN, and the only identified breakpoint is Not Tested below its threshold.",
  decision:
    "Decision (accountable, illustrative): the accountable owner records the result as Provisional, holds any expansion of autonomous submission until the ERP entitlement export is reviewed, and sets a reassessment trigger on its receipt.",
  note: "The decision does not change the finding. Accepting a risk would be recorded as a decision; the UNKNOWNs would remain UNKNOWN.",
};
