/**
 * Structured website content for the research-site redesign.
 *
 * Two kinds of text live here, and every entry says which it is:
 * - CANONICAL: quoted or closely transcribed from a pinned artifact (the
 *   artifact and section are named). Do not edit these to "improve" them;
 *   correct them only to match the artifact.
 * - EDITORIAL: website explanation written for first-time readers. It must
 *   stay inside what the cited artifacts support and must not add claims.
 *
 * Writing conventions for EDITORIAL text: British English, no em dashes, no
 * marketing verbs. Canonical quotations keep the artifacts' own spelling.
 * Release facts, artifact registry and canonical lists stay in content.ts.
 */

import { siteConfig } from "./site.config";

export type DomainKey = "d1" | "d2" | "d3" | "d4" | "d5" | "d6";

/**
 * Author. Name, role and links come from site.config.ts (verified links only;
 * empty values are not rendered). `summary` is EDITORIAL, written from the
 * areas of experience the author supplied in the narrative brief.
 */
export const author = {
  ...siteConfig.author,
  summary: [
    "Siva Sethumadhavan created and maintains AI Trust Graph as independent research.",
    "The methodology draws on practitioner experience across cybersecurity, security architecture, AI governance, risk and assurance. It is published openly so that its reasoning can be examined, challenged and improved.",
  ],
  /**
   * Independence statement. Approved by the methodology author (2026-10-02)
   * as the author's own statement about the author's own research. It is not
   * a legal opinion, names no employer and claims no external clearance.
   */
  independence:
    "AI Trust Graph is an independent research initiative. The methodology and views expressed are the author’s own and do not imply endorsement by any employer or client.",
};

/**
 * Section 1: why the methodology exists. EDITORIAL narrative built from
 * Artifact #1 Manifesto (core proposition, §2.2 thesis) and Artifact #2
 * (§3.6 separation of reachability, authority and invocation). It does not
 * criticise any framework and does not claim existing approaches fail.
 */
export const whyNarrative = {
  opening: "AI systems are no longer isolated models.",
  paragraphs: [
    "AI assurance often starts from components: a model card, a policy, a control list, a model-level risk register. Those perspectives remain necessary.",
    "In practice, AI systems operate through relationships. An agent invokes a tool. The tool acts through an identity. The identity crosses a trust boundary into a business system, and data, recommendations, approvals and actions move along the way.",
    "When each component is reviewed on its own, the connected path between them can remain insufficiently understood. AI Trust Graph provides a structured way to examine that path, and to keep every conclusion bounded by the evidence available for it.",
  ],
  proposition:
    "AI Trust Graph treats the connected AI environment as the unit of reasoning, while preserving the distinction between what is connected, what is possible, what is authorised and what the evidence can support.",
};

/**
 * Section 2: the problem, told through one synthetic scenario that the
 * signature visual and the worked example continue. EDITORIAL and SYNTHETIC.
 */
export const problemScenario = {
  intro:
    "An employee asks an AI procurement agent to identify a supplier and prepare a purchase request.",
  steps: [
    { key: "human", who: "Employee", what: "asks the agent to prepare a purchase request" },
    { key: "agent", who: "Procurement agent", what: "plans the task and uses a hosted model" },
    { key: "data", who: "Supplier data", what: "is retrieved to compare suppliers" },
    { key: "tool", who: "Procurement tool", what: "is invoked to create the request" },
    { key: "identity", who: "Service identity", what: "is the identity the tool acts through" },
    { key: "boundary", who: "Trust boundary", what: "separates the agent environment from finance systems" },
    { key: "system", who: "Enterprise business system", what: "holds purchase requests and spend commitments" },
  ],
  unanswered: [
    "whether the agent is able to invoke the tool, and under which conditions",
    "which identity the tool uses, and what authority that identity holds in the business system",
    "which controls sit on the path, and whether they operate as designed",
    "what evidence supports each of those assertions, and for what scope and period",
    "what consequence could follow if every condition held",
  ],
  close:
    "A component diagram shows that these parts exist and are linked. It is not designed to record what each link allows, under which conditions, with which evidence, or what remains unknown. That is the gap AI Trust Graph addresses.",
};

/**
 * The five conceptual distinctions shown in section 2. EDITORIAL labels for
 * Artifact #2 §3.6 (reachability, granted authority and invocation are
 * different), Artifact #1 §4 (a topological connection is not automatically an
 * exploitable path) and SC-INV-01 (UNKNOWN is not safe).
 */
export const distinctions = [
  { left: "Connected", right: "Authorised", note: "A link between two components does not grant authority." },
  { left: "Reachable", right: "Invocable", note: "Being able to reach a system is not being permitted to call it." },
  { left: "Invocable", right: "Consequential", note: "A permitted call does not establish what effect it has." },
  { left: "Possible", right: "Proven", note: "A plausible path is a hypothesis until evidence supports it." },
  { left: "Unknown", right: "Safe", note: "Missing evidence is not a favourable result, and not automatically an adverse one." },
] as const;

/**
 * Section 3: the big idea. Five concepts only. EDITORIAL wording; the
 * authority line follows Artifact #2 §5.2 ("Authority classes describe the
 * kind of consequence an entity can cause").
 */
export const bigIdeaConcepts = [
  { key: "entities", name: "Entities", text: "show what exists: people, agents, models, tools, identities, data, providers and business systems." },
  { key: "relationships", name: "Relationships", text: "show how entities are associated, as typed and directed links." },
  { key: "conditions", name: "Conditions", text: "show what must be true for a relationship to matter." },
  { key: "authority", name: "Authority", text: "describes the kinds of consequence an entity may be able to cause." },
  { key: "evidence", name: "Evidence", text: "determines which conclusions can be defended, and how far." },
] as const;

/**
 * Reasoning-chain stage notes. `question` and `concept` come from the
 * Artifact #2 §0.10 theory map (CANONICAL). The theory map has eight rows for
 * nine stages; its order follows the chain, and its final row ("What can we
 * defend? Evidence, confidence and accountable decision.") covers both
 * Evidence and Decision. The site shows that shared row on both stages rather
 * than inventing a ninth question. `note` is EDITORIAL.
 */
export const chainStages = [
  { stage: "Objects", question: "What exists?", concept: "Objects and system boundary.", note: "Humans, agents, models, tools, identities, data, infrastructure and providers, inside a declared scope." },
  { stage: "Relationships", question: "How is it connected?", concept: "Typed directional relationships.", note: "Each edge has a type and a direction: invokes, retrieves, authenticates as, depends on." },
  { stage: "Conditions", question: "What must be true?", concept: "Preconditions and state.", note: "A relationship may only matter when a token is valid, a flag is set or an approval exists." },
  { stage: "Paths", question: "What can happen next?", concept: "Reachability and path analysis.", note: "Relationships combine under conditions into paths. A path is a hypothesis until evidence supports it." },
  { stage: "Authority and Influence", question: "Who or what can cause it?", concept: "Authority, influence and actionability.", note: "Who can act, approve or steer an outcome is asserted separately from who can merely reach a system." },
  { stage: "Consequence", question: "Why does it matter?", concept: "Target criticality and consequence.", note: "The target reached and the effect produced are recorded separately." },
  { stage: "Controls", question: "What interrupts it?", concept: "Control breakpoint and resilience.", note: "A control matters where it stops, constrains, detects or contains the path." },
  { stage: "Evidence", question: "What can we defend?", concept: "Evidence, confidence and accountable decision.", note: "Every material assertion links to evidence with a grade, and confidence is recorded separately." },
  { stage: "Decision", question: "What can we defend?", concept: "Evidence, confidence and accountable decision.", note: "An accountable person records a bounded disposition. UNKNOWNs stay visible in it." },
] as const;

/**
 * Domain detail. `purpose` and `outputs`: Artifact #2 §8.1 (CANONICAL).
 * `question`: EDITORIAL, written from the Artifact #3 domain statements
 * (§2.0–§7.0). `feeds`: Artifact #2 §8.2 integration rules (CANONICAL).
 * `artifactSection`: the Artifact #3 section that defines the domain.
 */
export const domainDetail: Record<
  DomainKey,
  { question: string; outputs: string; feeds: string; maturitySection: string }
> = {
  d1: {
    question: "What AI exists here, who owns it, and what does it depend on?",
    outputs: "Asset register, AIBOM, evidence coverage, UNKNOWN backlog.",
    feeds: "Publishes coverage, ownership, AIBOM, evidence and UNKNOWNs to all domains.",
    maturitySection: "§2.0",
  },
  d2: {
    question: "Through which relationships and identities can trust and privilege travel?",
    outputs: "Trust graph, privilege paths, boundary map, breakpoint candidates.",
    feeds: "Provides relationships, boundaries and candidate paths to authority and validation.",
    maturitySection: "§3.0",
  },
  d3: {
    question: "What may each human and machine actor access, approve, execute or transact?",
    outputs: "Authority matrix, approval boundaries, delegation and revocation.",
    feeds: "Provides grants, action classes, approval, revocation and amplification to governance and resilience.",
    maturitySection: "§4.0",
  },
  d4: {
    question: "Do the controls hold when the material paths are tested safely?",
    outputs: "Authorized tests, control state, findings and residual paths.",
    feeds: "Provides current control and path evidence to assurance.",
    maturitySection: "§5.0",
  },
  d5: {
    question: "Who is accountable, under which obligations, and with what evidence?",
    outputs: "Decision records, applicability, exceptions and assurance trail.",
    feeds: "Provides purpose, risk appetite, decisions, exceptions and obligations to all domains.",
    maturitySection: "§6.0",
  },
  d6: {
    question: "Can failure or compromise be observed, contained and recovered from?",
    outputs: "Playbooks, kill-switch tests, rollback and recovery evidence.",
    feeds: "Provides containment, recovery, incident and rehearsal evidence to validation and governance.",
    maturitySection: "§7.0",
  },
};

/**
 * Evidence relations and the UNKNOWN state, for the evidence visual.
 * CANONICAL: relation names and meanings are Artifact #6 Evidence Model §0.9
 * (verbatim); the UNKNOWN meaning is Artifact #6 §0.5 (verbatim). The brief's
 * "supported / partially supported / conflicting / unsupported" labels are not
 * canonical, so the site uses these instead (recorded in the PR).
 */
export const evidenceRelations = [
  { key: "supports", label: "SUPPORTS", text: "Evidence provides relevant support for the assertion." },
  { key: "corroborates", label: "CORROBORATES", text: "Independent evidence supports the same material assertion." },
  { key: "qualifies", label: "QUALIFIES", text: "Evidence narrows scope, period, conditions or confidence." },
  { key: "disputes", label: "DISPUTES", text: "Evidence contradicts a material part of the assertion." },
  { key: "unknown", label: "UNKNOWN", text: "Evidence is absent, insufficient or materially conflicting." },
] as const;

/**
 * Relationship to existing frameworks. Built from Artifact #1 Manifesto
 * principle 10 ("The methodology complements standards ... It does not
 * replace legal analysis, certification or mandated sector requirements.")
 * and §11 "Claims we will not make" ("A framework mapping proves legal or
 * regulatory compliance."; "The methodology replaces penetration testing,
 * model evaluation, legal advice, certification or sector-specific
 * assurance."). EDITORIAL wording; no named standard is characterised.
 */
export const frameworks = {
  existing:
    "Existing standards and frameworks provide governance, management-system, control, lifecycle, risk and threat guidance. AI Trust Graph is designed to sit alongside them.",
  contributes:
    "It contributes a relationship-centred method for examining connected system structure: trust, authority, paths, controls, evidence and bounded conclusions.",
  boundary:
    "A mapping from AI Trust Graph to a framework does not establish legal or regulatory compliance. The methodology does not replace legal analysis, certification, penetration testing, model evaluation or mandated sector requirements.",
};

/** Artifact grouping and dependencies for the artifact library (EDITORIAL grouping). */
export type ArtifactGroup = "foundation" | "assessment" | "execution" | "supporting";
export const artifactMeta: Record<number, { group: ArtifactGroup; dependsOn: number[] }> = {
  // Depends-on lists are taken from each artifact's own header table, expressed
  // as artifact numbers. Several headers cite superseded version numbers of
  // their dependencies; the site lists the numbers only (see PR conflicts).
  1: { group: "foundation", dependsOn: [] },
  2: { group: "foundation", dependsOn: [] },
  12: { group: "foundation", dependsOn: [1, 2] },
  3: { group: "assessment", dependsOn: [1, 2] },
  4: { group: "assessment", dependsOn: [1, 2, 3] },
  5: { group: "assessment", dependsOn: [1, 2, 3, 4] },
  6: { group: "assessment", dependsOn: [1, 2, 3, 4, 5] },
  7: { group: "execution", dependsOn: [1, 2, 3, 4, 5, 6] },
  8: { group: "execution", dependsOn: [1, 2, 3, 4, 5, 6, 7] },
  9: { group: "execution", dependsOn: [1, 2, 3, 4, 5, 6, 7, 8] },
  10: { group: "supporting", dependsOn: [] },
  11: { group: "supporting", dependsOn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  13: { group: "supporting", dependsOn: [12, 5] },
};
export const artifactGroups: { key: ArtifactGroup; label: string; note: string }[] = [
  { key: "foundation", label: "Foundation", note: "Purpose, concepts and formal vocabulary." },
  { key: "assessment", label: "Assessment models", note: "Maturity, scoring, controls and evidence." },
  { key: "execution", label: "Execution", note: "How an assessment is run and reported." },
  { key: "supporting", label: "Supporting", note: "Worked cases, governance and an implementation companion." },
];
