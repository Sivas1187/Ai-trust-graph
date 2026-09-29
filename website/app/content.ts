/**
 * Website copy that summarizes canonical methodology content.
 *
 * Every entry records the canonical artifact (and section) it was taken from so
 * reviewers can trace website wording back to the source. The canonical
 * artifacts in ../../docs win on any conflict; correct this file, never the
 * methodology, when they disagree. See ../WEBSITE_GOVERNANCE.md.
 */

export const SITE_URL = "https://aitrustgraph.org";
export const REPO_URL = "https://github.com/Sivas1187/Ai-trust-graph";

/**
 * Owner ruling 5: normative artifact links must be immutable for the bundle
 * the site names. No Git tag or release exists for 1.0-rc.4 (checked
 * 2026-09-29), so artifact links pin the bundle source commit, whose docs/
 * blobs match every Git blob SHA in METHODOLOGY_MANIFEST.md §4. Replace with
 * the release tag once the owner creates one.
 */
export const BUNDLE_REF = "ec9b4571d96afdf1c423713349871459e1cf9b9b";

/** Immutable link into the 1.0-rc.4 bundle (normative artifacts, manifest). */
const pinned = (path: string) => `${REPO_URL}/blob/${BUNDLE_REF}/${path}`;
/** Mutable repository navigation (contribution, review and project files). */
const blob = (path: string) => `${REPO_URL}/blob/main/${path}`;

export const links = {
  repo: REPO_URL,
  issues: `${REPO_URL}/issues`,
  newIssue: `${REPO_URL}/issues/new/choose`,
  contributing: blob("CONTRIBUTING.md"),
  reviewFindings: blob("REVIEW_FINDINGS.md"),
  manifest: pinned("METHODOLOGY_MANIFEST.md"),
  roadmap: blob("ROADMAP.md"),
  license: pinned("LICENSE"),
  trademarks: blob("TRADEMARKS.md"),
  readme: blob("README.md"),
  doc: (file: string) => pinned(`docs/${file}`),
};

/** Source: METHODOLOGY_MANIFEST.md header. */
export const release = {
  bundle: "1.0-rc.4",
  status: "Public-release candidate",
  snapshot: "2026-09-26",
};

/** Source: METHODOLOGY_MANIFEST.md §4 (exact artifact registry). */
export const artifacts = [
  { n: 1, title: "Manifesto", version: "1.0", file: "01-manifesto.md", role: "Purpose, principles and boundaries of the methodology" },
  { n: 2, title: "Core Conceptual Model", version: "3.0.0", file: "02-core-conceptual-model.md", role: "The graph model: nodes, edges, trust, authority, boundaries, paths" },
  { n: 12, title: "Ontology Specification", version: "3.0.0", file: "12-ontology-specification.md", role: "Canonical entity types, relationship predicates, states and enumerations" },
  { n: 3, title: "Maturity Model", version: "1.0", file: "03-maturity-model.md", role: "The M1–M5 scale, 36 capabilities, critical gates" },
  { n: 4, title: "Scoring Framework", version: "3.0.0", file: "04-scoring-framework.md", role: "Control scoring, DCA/VCR/WCA, the PEI formula" },
  { n: 5, title: "Master Control Library", version: "2.0.0", file: "05-master-control-library.md", role: "All 72 canonical controls" },
  { n: 6, title: "Evidence Model", version: "2.0.0", file: "06-evidence-model.md", role: "E0–E5 grading, quality dimensions, evidence lifecycle" },
  { n: 7, title: "Assessment Methodology", version: "1.1.0", file: "07-assessment-methodology.md", role: "The 13-phase assessment lifecycle and specialized methods" },
  { n: 8, title: "Assessor Handbook", version: "1.0", file: "08-assessor-handbook.md", role: "Assessor competency levels (A1–A5), field guidance per control" },
  { n: 9, title: "Reporting Standard", version: "1.1.0", file: "09-reporting-standard.md", role: "The mandatory report package and claim-integrity rules" },
  { n: 10, title: "Reference Assessment Repository", version: "2.0.0", file: "10-reference-assessment-repository.md", role: "Synthetic worked calibration cases and adversarial vectors" },
  { n: 11, title: "Governance & Certification Model", version: "1.0", file: "11-governance-and-certification-model.md", role: "Stewardship, change control, certification readiness" },
] as const;

/** Source: METHODOLOGY_MANIFEST.md §4 (Phase 2 non-normative companion). */
export const companion = {
  n: 13,
  title: "Reference Graph Schema and Illustrative Query Library",
  version: "0.4.0",
  file: "13-reference-graph-schema-and-query-library.md",
  role: "Illustrative property-graph schema and GQL-style query patterns",
};

/**
 * Domain names: README "The methodology at a glance" (canonical names).
 * Purpose: Artifact #2 Core Conceptual Model §8.1, verbatim.
 * Capabilities: Artifact #3 Maturity Model §2.1–§7.6 headings, verbatim.
 * Control prefixes: Artifact #5 Master Control Library, ID scheme.
 */
export const domains = [
  {
    id: "D1",
    name: "Discovery and AIBOM",
    prefix: "ATG-DIS",
    purpose: "Establish measurable estate, ownership, dependencies and shadow AI.",
    capabilities: [
      "Discovery scope and source coverage",
      "Canonical inventory and ownership",
      "Shadow AI and unmanaged use",
      "AIBOM and dependency lineage",
      "Unknown, orphan and lifecycle management",
      "Discovery evidence and assurance",
    ],
  },
  {
    id: "D2",
    name: "Trust and Privilege Paths",
    prefix: "ATG-TRU",
    purpose: "Model cloud and AI trust, identity inheritance and attacker-relevant paths.",
    capabilities: [
      "Trust relationship representation",
      "Identity and privilege path analysis",
      "Boundary and provider trust",
      "Path identification and prioritization",
      "Control breakpoint analysis",
      "Trust graph quality and governance",
    ],
  },
  {
    id: "D3",
    name: "Authority Governance",
    prefix: "ATG-AUT",
    purpose: "Define and review effective access, inference, approval and action.",
    capabilities: [
      "Authority inventory and taxonomy",
      "Delegation and identity context",
      "Human approval and oversight",
      "Authority amplification control",
      "Revocation and containment",
      "Authority decision governance",
    ],
  },
  {
    id: "D4",
    name: "AI Security Validation",
    prefix: "ATG-VAL",
    purpose: "Test architecture and controls against realistic scenarios.",
    capabilities: [
      "Validation strategy and scope",
      "Threat modeling and path hypotheses",
      "Rules of engagement and safety",
      "Control effectiveness testing",
      "Finding quality and closure",
      "Validation assurance and independence",
    ],
  },
  {
    id: "D5",
    name: "AI Governance and Assurance",
    prefix: "ATG-GOV",
    purpose: "Connect ownership, risk tier, policy, obligations and evidence.",
    capabilities: [
      "Strategy, policy and risk appetite",
      "Use-case intake and tiering",
      "Decision rights and accountability",
      "Applicability and obligations",
      "Exceptions and risk acceptance",
      "Assurance, reporting and literacy",
    ],
  },
  {
    id: "D6",
    name: "Operational Resilience",
    prefix: "ATG-RES",
    purpose: "Prepare for failure, compromise, containment and recovery.",
    capabilities: [
      "Observability and attribution",
      "Detection and triage",
      "Containment and kill mechanisms",
      "Recovery, rollback and compensation",
      "Incident reconstruction and evidence",
      "Exercises, learning and resilience governance",
    ],
  },
] as const;

/**
 * Source: Artifact #2 Core Conceptual Model §0.10.
 *
 * `canonicalReasoningChain` is the "REASONING CHAIN" callout, verbatim and in
 * canonical order. Owner ruling 1: this is the only reasoning chain the public
 * site presents.
 *
 * `reasoningChain` groups the same stages with the §0.10 theory-map question
 * table (question and concept verbatim). The table has eight rows for nine
 * stages: its last row, "What can we defend? / Evidence, confidence and
 * accountable decision.", covers both Evidence and Decision, so those two
 * stages share one group rather than the site inventing a ninth question.
 */
export const canonicalReasoningChain = [
  "Objects",
  "Relationships",
  "Conditions",
  "Paths",
  "Authority and Influence",
  "Consequence",
  "Controls",
  "Evidence",
  "Decision",
] as const;

export const reasoningChain = [
  { stages: ["Objects"], question: "What exists?", concept: "Objects and system boundary." },
  { stages: ["Relationships"], question: "How is it connected?", concept: "Typed directional relationships." },
  { stages: ["Conditions"], question: "What must be true?", concept: "Preconditions and state." },
  { stages: ["Paths"], question: "What can happen next?", concept: "Reachability and path analysis." },
  { stages: ["Authority and Influence"], question: "Who or what can cause it?", concept: "Authority, influence and actionability." },
  { stages: ["Consequence"], question: "Why does it matter?", concept: "Target criticality and consequence." },
  { stages: ["Controls"], question: "What interrupts it?", concept: "Control breakpoint and resilience." },
  { stages: ["Evidence", "Decision"], question: "What can we defend?", concept: "Evidence, confidence and accountable decision." },
] as const;

// Build-time guard: the grouped chain must equal the canonical chain, in order.
if (reasoningChain.flatMap((g) => g.stages).join(" > ") !== canonicalReasoningChain.join(" > ")) {
  throw new Error("reasoningChain diverges from the canonical Artifact #2 §0.10 chain");
}

/** Source: Artifact #7 Assessment Methodology, phase headings (Phase 1–13). */
export const assessmentPhases = [
  "Initiate",
  "Scope",
  "Discover",
  "Model",
  "Evidence",
  "Controls",
  "Paths",
  "Maturity",
  "Scoring",
  "Findings",
  "Decisions",
  "Report",
  "Reassess",
];

/**
 * Source: Artifact #6 Evidence Model §1.1–§1.6. Names are the canonical grade
 * headings; "supports" sentences are quoted from the same sections.
 */
export const evidenceGrades = [
  {
    grade: "E0",
    name: "No evidence",
    meaning: "No source is available or the supplied item cannot be linked to the assertion.",
    supports:
      "The only defensible conclusion is UNKNOWN or Not Tested. E0 is not evidence that the control is absent.",
  },
  {
    grade: "E1",
    name: "Inference or uncorroborated signal",
    meaning: "A hypothesis is derived from incomplete, indirect, automated or unverified information.",
    supports:
      "Can prioritize investigation and create candidate graph assertions, but cannot establish implementation or operating effectiveness.",
  },
  {
    grade: "E2",
    name: "Attestation",
    meaning: "An accountable person states that a condition or practice exists.",
    supports:
      "Supports claimed practice and context; needs corroboration for material technical claims.",
  },
  {
    grade: "E3",
    name: "Approved documentary evidence",
    meaning:
      "A governed document records approved design, policy, architecture, procedure, contract or decision.",
    supports:
      "Can support design intent and governance state. It does not alone prove actual configuration, runtime behavior or sustained operation.",
  },
  {
    grade: "E4",
    name: "Corroborated technical evidence",
    meaning:
      "Technical evidence from authoritative sources is supported by an independent source, consistent observation or reproducible inspection.",
    supports:
      "Can support implementation or operation within observed scope when current, relevant and representative.",
  },
  {
    grade: "E5",
    name: "Direct technical and representative evidence",
    meaning:
      "Current direct technical evidence is combined with a representative test or operating record that demonstrates the claimed behavior under stated conditions.",
    supports:
      "May support verified effectiveness or adaptive operation, but only for the tested scope, period and conditions.",
  },
] as const;

/**
 * Source: Artifact #6 Evidence Model §0.5 (state meanings, verbatim) and
 * Artifact #4 Scoring Framework §0.5 (numeric treatment, verbatim).
 * Owner ruling 2: UNKNOWN and Not Tested are distinct; E0 may support either
 * according to context (Artifact #6 §1.1).
 */
export const unknownVsNotTested = [
  {
    state: "UNKNOWN",
    meaning:
      "The material state remains unresolved because evidence is absent, insufficient or materially conflicting.",
    numeric: "No numeric value.",
    reporting: "Included in uncertainty and evidence-gap counts.",
  },
  {
    state: "Not Tested",
    meaning: "Testing required for a stronger conclusion was not performed.",
    numeric: "No numeric value for effectiveness.",
    reporting: "May retain a design score if separately supported.",
  },
] as const;

/** Source: Artifact #4 Scoring Framework §0.5 (non-numeric AssessmentResultState values). */
export const nonNumericResultStates = [
  "Not Assessed",
  "UNKNOWN",
  "Inconclusive",
  "Not Tested",
  "Not Applicable",
];

/** Source: Artifact #2 Core Conceptual Model §6.3, verbatim state and role names. */
export const pathValidationStates = [
  "Candidate",
  "Topological",
  "Plausible",
  "Validated",
  "Exploitable",
  "Controlled",
  "Invalidated",
];
export const pathRoles = ["Primary", "Alternate", "Residual"];

/** Source: Artifact #2 Core Conceptual Model §1.8 / §6.6 ("stop, constrain, detect or contain"). */
export const breakpointEffects = ["Stop", "Constrain", "Detect", "Contain"];

/** Source: METHODOLOGY_MANIFEST.md §6 (validation status). */
export const pendingGates = [
  "Independent methodology / architecture review",
  "Independent AI-security review",
  "Inter-assessor reproducibility study (Artifact #10 Appendix B.4 protocol)",
  "Employer / IP / confidentiality review",
  "Legal approval of licence / trademark position",
];
