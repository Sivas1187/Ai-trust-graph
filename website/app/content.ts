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
  // Issue templates in .github/ISSUE_TEMPLATE (see CONTRIBUTING "Ways to give feedback").
  findingIssue: `${REPO_URL}/issues/new?template=finding-report.yml`,
  feedbackIssue: `${REPO_URL}/issues/new?template=general-feedback.yml`,
  // Discussions is enabled on the repository (GitHub API has_discussions: true, checked 2026-09-30).
  discussions: `${REPO_URL}/discussions`,
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
  /** `snapshot` written out for the Cover colophon; check-claims verifies both against the manifest. */
  snapshotLabel: "26 September 2026",
};

/**
 * Release, review and provenance facts for the Status section.
 * - Review: README.md status paragraph ("the methodology author's internal review
 *   is complete, and independent ... review ... still pending").
 * - Author: artifact approval tables ("Author | Siva Sethumadhavan") and LICENSE.
 * - Change review: CONTRIBUTING.md ("until they are, the methodology author reviews
 *   all proposed changes directly").
 * - Limitation: the site's standing disclaimer (WEBSITE_GOVERNANCE.md; Artifact #11
 *   constitutional boundary).
 */
export const methodologyAuthor = "Siva Sethumadhavan";
export const reviewStatus = ["Author’s internal review complete", "Independent review pending"] as const;
export const notValidated = "AI Trust Graph is not independently validated.";
/** Short form of `notValidated` for the Cover colophon. */
export const notValidatedShort = "Not independently validated";
export const changeReviewNote =
  "Until the governance bodies defined in Artifact #11 are standing, the methodology author reviews proposed changes directly.";
export const limitation =
  "AI Trust Graph is a methodology, not a product. It is not a certification program, an accreditation body, a legal opinion, or a guarantee of AI security, safety or compliance.";

/** Source: METHODOLOGY_MANIFEST.md §6, verbatim sentence. */
export const manifestGatePrinciple =
  "This manifest pins content; it does not convert pending external gates into completed review.";

/**
 * Cover proposition. Owner-approved wording for the visual-reset Cover
 * (explanatory website copy, not canonical methodology text). It replaces the
 * README first line that the previous hero used as its lede.
 */
export const coverProposition =
  "An open methodology for reasoning about connected AI systems through graph structure, controls and evidence.";

/**
 * Cover context line: explanatory website copy (not canonical text), placed
 * under the proposition for a first-time visitor. Built only from the
 * Artifact #1 Manifesto CORE PROPOSITION ("AI risk is not located only inside
 * a model. It emerges through relationships among … These relationships must
 * be made visible, evidenced and governed as a connected system."): the two
 * sentences are joined and the enumerated list is elided; no claim is added.
 */
export const coverContext =
  "AI risk is not located only inside a model. It emerges through relationships that must be made visible, evidenced and governed as a connected system.";

/**
 * "On this page": website navigation only, in page order. Not a methodology
 * construct, hierarchy or sequence; labels reuse existing section names.
 */
export const pageIndex = [
  { href: "#flow", label: "Method" },
  { href: "#domains", label: "Domains" },
  { href: "#unknown", label: "UNKNOWN" },
  { href: "#evidence", label: "Evidence" },
  { href: "#lifecycle", label: "Lifecycle" },
  { href: "#status", label: "Status" },
  { href: "#methodology", label: "Source" },
  { href: "#review", label: "Review" },
] as const;

/**
 * Source: Artifact #1 Manifesto.
 * `problemThesis`: §2.2 "The core risk thesis", first sentence, verbatim.
 * `topologyInvariant`: §4 INVARIANT, both sentences, verbatim.
 */
export const problemThesis =
  "The methodology treats enterprise AI risk as a property of interconnected authority, influence and dependency.";
export const topologyInvariant = [
  "A topological connection is not automatically an exploitable path.",
  "Required permissions, protocols, state and preconditions must be evidenced or explicitly marked Unknown.",
] as const;

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
 * Source: README "The methodology at a glance" (six domains, "each with twelve
 * canonical controls"; M1–M5; E0–E5; all 72 canonical controls) and Artifact #3
 * Maturity Model (36 capabilities, six per domain).
 */
export const scale = {
  domains: 6,
  controlsPerDomain: 12,
  capabilitiesPerDomain: 6,
  controls: 72,
  capabilities: 36,
  maturityLevels: "M1–M5",
  evidenceGrades: "E0–E5",
};

/** Source: Artifact #2 Core Conceptual Model §8.1, first two sentences, verbatim. */
export const domainsLede = [
  "The six domains are coordinated assessment lenses over one graph.",
  "They are not separate products and should not maintain incompatible definitions, evidence grades or scoring assumptions.",
] as const;

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
 * `theoryMap` is the §0.10 theory-map table (Question / Concept), verbatim and
 * in canonical order. It is shown as the canonical table; the site does not
 * assign its eight rows to the nine stages.
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

export const theoryMap = [
  { question: "What exists?", concept: "Objects and system boundary." },
  { question: "How is it connected?", concept: "Typed directional relationships." },
  { question: "What must be true?", concept: "Preconditions and state." },
  { question: "What can happen next?", concept: "Reachability and path analysis." },
  { question: "Who or what can cause it?", concept: "Authority, influence and actionability." },
  { question: "Why does it matter?", concept: "Target criticality and consequence." },
  { question: "What interrupts it?", concept: "Control breakpoint and resilience." },
  { question: "What can we defend?", concept: "Evidence, confidence and accountable decision." },
] as const;

/**
 * Source: Artifact #7 Assessment Methodology §0.11 (phase numbers, names and
 * primary outcomes, verbatim) and the iteration rule that introduces the table.
 */
export const assessmentPhases = [
  { n: 1, name: "Initiate", outcome: "Approved charter and decision purpose." },
  { n: 2, name: "Scope", outcome: "Versioned boundary and population." },
  { n: 3, name: "Discover", outcome: "Measured estate and blind spots." },
  { n: 4, name: "Model", outcome: "Reviewed graph snapshot." },
  { n: 5, name: "Evidence", outcome: "Graded and traceable evidence set." },
  { n: 6, name: "Controls", outcome: "Applicability and control results." },
  { n: 7, name: "Paths", outcome: "Validated material path portfolio." },
  { n: 8, name: "Maturity", outcome: "Six-domain capability profile." },
  { n: 9, name: "Scoring", outcome: "Transparent scorecards and coverage." },
  { n: 10, name: "Findings", outcome: "Evidence-linked gaps and remediation objectives." },
  { n: 11, name: "Decisions", outcome: "Approved gates, exceptions and dispositions." },
  { n: 12, name: "Report", outcome: "Quality-reviewed decision package." },
  { n: 13, name: "Reassess", outcome: "Trigger-based new or updated run." },
] as const;

export const lifecycleIntro = "The lifecycle contains thirteen controlled phases.";
export const phaseIterationRule =
  "Phases may iterate, but required gates cannot be skipped merely because information was available earlier.";

/** Source: Artifact #7 Assessment Methodology §0.12 (intro sentences and gate tests, verbatim). */
export const exitCriteria = {
  intro: [
    "Each phase has entry conditions, mandatory activities, outputs, decision gates and quality checks.",
    "An incomplete phase may proceed only under an approved limitation that does not invalidate downstream work.",
  ],
  gates: [
    { test: "Completeness", rule: "Mandatory outputs exist or limitations are explicitly approved." },
    { test: "Evidence", rule: "Assertions meet artifact-specific sufficiency." },
    { test: "Safety", rule: "Collection and testing remained within authorization." },
    { test: "Traceability", rule: "Inputs and decisions can be reconstructed." },
    { test: "Critical gates", rule: "Open conditions are applied before progression." },
    { test: "Quality", rule: "Required reviewer has challenged the work." },
    { test: "Decision", rule: "Named authority accepts the next phase or bounded limitation." },
  ],
} as const;

/**
 * Source: Artifact #7 Assessment Methodology §1.1–§1.10 (section headings and
 * each section's first sentence, verbatim), in canonical order. The order is
 * the artifact's; it implies no priority.
 */
export const assessmentTypes = [
  { name: "Baseline assessment", definition: "Establish the first defensible view of scope, graph, controls, evidence, maturity and material paths." },
  { name: "Periodic reassessment", definition: "Re-evaluate a stable scope at an approved cadence while preserving comparable prior results." },
  { name: "Material-change assessment", definition: "Assess the consequences of model, prompt, data, tool, identity, provider, autonomy, geography, purpose or architecture change." },
  { name: "High-impact deep dive", definition: "Increase evidence, testing, independence and path analysis for systems with significant consequence or authority." },
  { name: "Incident-driven assessment", definition: "Reconstruct changed facts, affected paths, control failures and recovery evidence after an event." },
  { name: "Third-party and provider assessment", definition: "Examine service-specific responsibility, configuration, evidence access, data handling, resilience and concentration." },
  { name: "Portfolio assessment", definition: "Profile multiple use cases or systems while preserving materially different populations and avoiding misleading averages." },
  { name: "Pre-deployment readiness assessment", definition: "Determine whether evidence, controls, testing, approvals and containment are sufficient for the requested release." },
  { name: "Continuous or event-driven assessment", definition: "Use approved automated signals and triggers to refresh evidence and initiate human review of material change." },
  { name: "Regulatory or obligation-focused assessment", definition: "Evaluate fact-specific obligations and related controls without representing framework mapping as compliance proof." },
] as const;

/**
 * Source: Artifact #6 Evidence Model §1.1–§1.6, verbatim. `name` is the canonical
 * grade heading; `meaning` is each section's first paragraph and `supports` its
 * second (full sentences, including the grade subject).
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
      "E1 can prioritize investigation and create candidate graph assertions, but cannot establish implementation or operating effectiveness.",
  },
  {
    grade: "E2",
    name: "Attestation",
    meaning: "An accountable person states that a condition or practice exists.",
    supports:
      "E2 supports claimed practice and context. It is vulnerable to memory, interpretation, incentives and incomplete visibility and therefore needs corroboration for material technical claims.",
  },
  {
    grade: "E3",
    name: "Approved documentary evidence",
    meaning:
      "A governed document records approved design, policy, architecture, procedure, contract or decision.",
    supports:
      "E3 can support design intent and governance state. It does not alone prove actual configuration, runtime behavior or sustained operation.",
  },
  {
    grade: "E4",
    name: "Corroborated technical evidence",
    meaning:
      "Technical evidence from authoritative sources is supported by an independent source, consistent observation or reproducible inspection.",
    supports:
      "E4 can support implementation or operation within observed scope when current, relevant and representative.",
  },
  {
    grade: "E5",
    name: "Direct technical and representative evidence",
    meaning:
      "Current direct technical evidence is combined with a representative test or operating record that demonstrates the claimed behavior under stated conditions.",
    supports:
      "E5 may support verified effectiveness or adaptive operation, but only for the tested scope, period and conditions.",
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

/**
 * Authority annotation (Act III, a).
 * `distinctAssertions`: the site's illustration of distinct claims, each needing
 * its own evidence (Artifact #2 §3.6 separation rule); explicitly not
 * a canonical sequence, ladder or state machine.
 * `authorityClasses`: Artifact #2 §5.2 authority classes, verbatim names, in order.
 */
export const distinctAssertions = ["Can connect", "Can authenticate", "Can access", "Can invoke", "Can modify", "Can transact"];
export const authorityClasses = [
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
];

/** Source: Artifact #2 Core Conceptual Model §1.8 / §6.6 ("stop, constrain, detect or contain"). */
export const breakpointEffects = ["Stop", "Constrain", "Detect", "Contain"];

/**
 * Source: METHODOLOGY_MANIFEST.md §6 (validation status): the five external
 * release gates, verbatim except for the initial capital and list punctuation.
 * The manifest controls gate status; see `roadmapNote` for the ROADMAP difference.
 */
export const pendingGates = [
  "Independent methodology / architecture review",
  "Independent AI-security review",
  "Inter-assessor reproducibility study using the protocol in Artifact #10 Appendix B.4",
  "Employer / IP / confidentiality review",
  "Legal approval of licence / trademark position",
];

/**
 * ROADMAP.md Phase 2 ticks the "Licence and trademark decision" (CC BY 4.0 chosen)
 * while noting it is not yet legally final; METHODOLOGY_MANIFEST §6 still lists
 * legal approval of the licence / trademark position as a pending gate. The site
 * follows the manifest and states the difference rather than reconciling it.
 */
export const roadmapNote =
  "Gate status follows METHODOLOGY_MANIFEST §6. ROADMAP.md records the licence choice (CC BY 4.0) as made; the manifest still lists legal approval of the licence / trademark position as pending.";
