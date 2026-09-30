# AI Trust Graph Website Content Map

**Website role:** explanatory and navigational.

**Canonical source:** `METHODOLOGY_MANIFEST.md` and the pinned artifacts it identifies.

| Website route | Purpose | Primary canonical source |
| --- | --- | --- |
| `/` | Explain AI Trust Graph and its core proposition | README; #1 Manifesto; #2 Core Conceptual Model |
| `/why-atg` | Explain why connected AI systems need relationship- and authority-aware assurance | #1 Manifesto; #2 Core Conceptual Model |
| `/how-it-works` | Explain the canonical reasoning chain Objects -> Relationships -> Conditions -> Paths -> Authority and Influence -> Consequence -> Controls -> Evidence -> Decision (Artifact #2 §0.10), distinct from the 13-phase assessment lifecycle | #2 Core Conceptual Model; #7 Assessment Methodology |
| `/domains` | Introduce all six domains and their scope | #3 Maturity Model; #5 Master Control Library |
| `/domains/discovery-aibom` | D1 overview | #3; #5; #8 |
| `/domains/trust-privilege-paths` | D2 overview | #2; #3; #5; #8 |
| `/domains/authority-governance` | D3 overview | #2; #3; #5; #8 |
| `/domains/security-validation` | D4 overview | #3; #5; #8 |
| `/domains/governance-assurance` | D5 overview | #3; #5; #8 |
| `/domains/operational-resilience` | D6 overview | #3; #5; #8 |
| `/evidence` | E0-E5, evidence sufficiency and uncertainty | #6 Evidence Model; #4 Scoring Framework |
| `/maturity` | M1-M5 maturity and non-compensating determination | #3 Maturity Model |
| `/path-analysis` | Path semantics, roles, breakpoints and PEI context | #2; #4; #12 |
| `/methodology` | Human-friendly index of canonical artifacts | METHODOLOGY_MANIFEST.md |
| `/ontology` | Explain canonical graph entities/relationships/states | #12 Ontology Specification |
| `/review` | Invite critique and link to governance/contribution channels | CONTRIBUTING; REVIEW_FINDINGS; ROADMAP |
| `/about` | Authorship, methodology boundary and licence | README; LICENSE; TRADEMARKS |

## Homepage claims permitted from the current release candidate

- AI Trust Graph is a graph-based AI assurance methodology.
- The methodology has six domains.
- The Master Control Library has 72 canonical controls.
- The maturity model has 36 capabilities across the six domains.
- The evidence model uses E0-E5 grades.
- The maturity model uses M1-M5.
- The methodology deliberately avoids a single overall trust score.
- UNKNOWN is not silently converted into a numeric score.
- The current repository status is public-release candidate.

- UNKNOWN and Not Tested are distinct non-numeric result states; E0 can support either according to context.

## Homepage claims that MUST NOT be made

- "industry standard"
- "certified"
- "independently validated"
- "proven"
- "guarantees AI safety"
- "first in the world"
- "only graph-based AI assurance methodology"
- empirical reproducibility claims before the planned study is completed

## Core public narrative

1. AI systems are connected ecosystems, not isolated models.
2. Relationships and delegated authority can shape material consequence.
3. AI Trust Graph represents these systems as evidence-linked graphs.
4. Assurance follows the canonical reasoning chain of Artifact #2 §0.10: objects, relationships, conditions, paths, authority and influence, consequence, controls, evidence and decision.
5. Uncertainty is preserved rather than hidden.
6. Canonical methodology details remain in GitHub.

## Canonical homepage domain names

- D1 - Discovery and AIBOM
- D2 - Trust and Privilege Paths
- D3 - Authority Governance
- D4 - AI Security Validation
- D5 - AI Governance and Assurance
- D6 - Operational Resilience

## Homepage section traceability (`/`)

All methodology-derived homepage copy lives in `app/content.ts` with an inline source note. Sections:

| Homepage section | Canonical source | Notes |
| --- | --- | --- |
| Hero, status pill | README (first-line methodology description, verbatim); METHODOLOGY_MANIFEST header (bundle 1.0-rc.4, public-release candidate) | H1 is the methodology name. Primary CTA goes to the canonical GitHub source. Hero graph is synthetic; edge labels are illustrative, not ontology predicates. |
| The problem | #1 Manifesto §2.2 (thesis sentence, verbatim); §4 INVARIANT (both sentences, verbatim); core proposition (constellation terms) | The constellation is labelled Illustrative: an unordered list of terms with undirected, unlabelled links; not a sequence, ontology, architecture or path. Invariant, terms and label are enforced by `scripts/check-claims.mjs`. |
| Reasoning chain | #2 §0.10 (chain, verbatim and in order; theory-map table verbatim) | Owner ruling 1: the only reasoning chain on the public site. Nine equal nodes with directional connectors; no numbering, progress fill or grouping. The theory-map table (Question / Concept) sits in one disclosure, as the canonical table, without assigning rows to stages. Order is enforced by `scripts/check-claims.mjs`. |
| Six domains | README (names, prefixes, "twelve canonical controls" per domain, 72 controls); #2 §8.1 (lede and purposes, verbatim); #3 §2.1–§7.6 (capability names, verbatim; 36 capabilities, six per domain) | Graph-centred lens model labelled Explanatory: the shared graph ("One graph", with 6 domains / 72 controls / 36 capabilities) comes first, then six identical domain cards (D1–D3 left, D4–D6 right on wide screens; stacked on narrow). Position and colour imply no ranking, hierarchy or maturity. Each card shows "12 controls" and "6 maturity capabilities"; capabilities sit in a disclosure. Names, order and counts are enforced by `scripts/check-claims.mjs`. |
| Access is not authority | #2 §3.6 separation rule; #2 §5.2 authority classes | The six "Can …" tiles illustrate distinct assertions; explicitly not a canonical sequence or state machine. |
| UNKNOWN stays UNKNOWN | #4 SC-INV-01; #4 §0.5 result states and numeric treatment; #6 §0.5 state meanings; #6 §1.1 (E0 supports UNKNOWN or Not Tested); README (no overall trust score) | Owner ruling 2: UNKNOWN and Not Tested are shown as distinct states with their canonical meanings; Not Tested keeps the design-score nuance. |
| Control breakpoints | #2 §1.8, §6.3, §6.6 | Synthetic path; one-line glosses of stop/constrain/detect/contain are plain-language illustrations. |
| Evidence model | #6 §1.1–§1.8 and §4 sufficiency note | Grade names and support statements quoted; full sufficiency rules linked, not summarized. |
| Assessment lifecycle | #7 §0.11 (phase numbers, names, primary outcomes and iteration rule, verbatim); #7 §0.12 (gate tests, verbatim); #7 §1.1–§1.10 (assessment types and first-sentence definitions, verbatim); METHODOLOGY_MANIFEST §1 (role of #7) | A standalone section after Evidence, separate from the reasoning chain. Two-row timeline (1–7, 8–13) with square markers; no groupings or completion state. Outcomes, gate tests and type definitions sit in disclosures. Phase order, type order and the iteration rule are enforced by `scripts/check-claims.mjs`. |
| Release, review and limitations (`#status`) | METHODOLOGY_MANIFEST header (status, bundle, snapshot) and §6 (five external gates and "This manifest pins content…", verbatim); README (author's internal review complete, independent review pending); artifact approval records and LICENSE (methodology author); CONTRIBUTING (author reviews proposed changes until the #11 bodies are standing) | Calm, neutral presentation: no warning colours, meter or percentage. Provenance is one line ("Methodology author: …"), with no portrait, biography, title, employer or links. The manifest controls gate status; the section states, rather than reconciles, that ROADMAP records the licence choice as made while the manifest lists legal approval as pending. Status facts, gates and the author line are enforced by `scripts/check-claims.mjs`. |
| Canonical source explorer | METHODOLOGY_MANIFEST (purpose line), §2 (reading order), §4 (versions); README (M1–M5 "cumulative, evidence-gated", E0–E5, 72 controls, 36 capabilities) | The manifest is shown first as the authority map, then where the model's figures are defined (6 domains / 72 controls, 36 capabilities / M1–M5, E0–E5), then the artifacts in reading order. #13 labelled non-normative. The former standalone scale band is removed; `scripts/check-claims.mjs` fails if it returns. |
| Public review (`#review`) | CONTRIBUTING ("Ways to give feedback", change classes, formal change proposal per #11 §2.4); `.github/ISSUE_TEMPLATE` (finding and general-feedback templates); REVIEW_FINDINGS | Four equal entry points: Report a finding, Share feedback, Propose a change, Inspect the source. GitHub Discussions (enabled on the repository) is a secondary link under Share feedback only. No SLAs, timelines or active governance bodies are claimed. Entry labels and order are enforced by `scripts/check-claims.mjs`. |
| Footer | LICENSE (copyright holder, CC BY 4.0); TRADEMARKS | Copyright and licence line; the methodology-not-product statement. |

Homepage navigation: Reasoning, Domains, Evidence, Lifecycle, Status, Contribute, GitHub (canonical source). "Status" targets the Release, review and limitations section (`#status`); "Contribute" targets the public review section (`#review`). Authority remains on the page without a navigation item.
