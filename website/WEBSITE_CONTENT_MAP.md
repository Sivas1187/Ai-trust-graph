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
| Cover (`#top`) | Owner-approved cover proposition (visual reset; explanatory website copy, not canonical text); METHODOLOGY_MANIFEST header (status "Public-release candidate", bundle 1.0-rc.4, snapshot date 2026-09-26); `notValidated` (the site's standing validation statement, short form) | H1 is the methodology name. Proposition, verbatim: "An open methodology for reasoning about connected AI systems through graph structure, controls and evidence." Text links: "Read the methodology ↗" (canonical GitHub source) and "How it reasons ↓" (`#flow`). Running colophon: "Public-release candidate · Bundle 1.0-rc.4 · 26 September 2026 · Not independently validated"; the date is the manifest snapshot date written out (`<time datetime="2026-09-26">`). The graph field is decorative (`aria-hidden`): unlabelled nodes, edges and path are not ontology objects, predicates or an attack path, and accent colours carry no meaning. `scripts/check-claims.mjs` checks the title, proposition, links, and that the colophon's status, bundle and date match the manifest header. The README first line no longer appears on the Cover. |
| Act II — why graph reasoning (`#problem`) | #1 Manifesto §2.2 (thesis sentence, verbatim); §4 INVARIANT (both sentences, verbatim) | Headline "AI systems are no longer isolated models."; the §2.2 thesis; the first §4 sentence as the pull quote with the second below it. The graph field continues the Cover's and is decorative (`aria-hidden`): its path ends in a dashed "unresolved" motif and is marked "Illustrative topology" — not an ontology, architecture, sequence or validated path. The retired constellation must not return. Citation: margin reference (wide) / act-end line (narrow), linked to Artifact #1. Enforced by `scripts/check-claims.mjs`. |
| Act III — how the method thinks (`#flow`) | #2 §0.10 (chain, verbatim and in order; theory-map table verbatim) | Owner ruling 1: the only reasoning chain on the public site, set as one typographic argument: exact stage names and order, no numbering, markers, rail, progress framing or grouping. The theory-map table (Question / Concept) sits in one native disclosure, without assigning rows to stages. Superscript keys a–d on Authority and Influence, Controls, Evidence and Decision point to annotations (a, b below; c → Evidence section, using its existing headline; d is plain text, "Decision — Accountable decision.", from the §0.10 theory-map concept "Evidence, confidence and accountable decision.", with no destination until a later PR — it must not point to UNKNOWN, which would equate the Decision stage with an assurance state). Order, names, keys and the disclosure are enforced by `scripts/check-claims.mjs`. |
| Six domains | README (names, prefixes, "twelve canonical controls" per domain, 72 controls); #2 §8.1 (lede and purposes, verbatim); #3 §2.1–§7.6 (capability names, verbatim; 36 capabilities, six per domain) | Six coordinated lenses over one graph (visual reset): one decorative connected graph band (`aria-hidden`) read by six equal domain lenses in canonical order, as a `<ul>` that is the text equivalent. Each lens shows the name, the §8.1 purpose and "12 controls / 6 capabilities"; a native disclosure holds the control-ID range (#5 prefix) and the six #3 capabilities under "6 maturity capabilities". No D-numbers, cards, hub panel or per-domain colour; the italic "Explanatory figure" note states that position, line and order imply no ranking, hierarchy, sequence or maturity. Names, order, exactly six lenses, counts, identical anchors, the note, the source links and the absence of the retired card layout are enforced by `scripts/check-claims.mjs`. |
| Annotation a — Authority and Influence (`#authority`, in Act III) | #2 §3.6 separation rule (verbatim); #2 §5.2 authority classes (verbatim names, order) and "not maturity levels … criticality" sentence (verbatim) | Title "Access is not authority."; one assertion line "Can connect ≠ Can authenticate ≠ Can access ≠ Can invoke ≠ Can modify ≠ Can transact", each a separate list item, explicitly an illustration of distinct assertions and not a canonical sequence, ladder or state machine; the separation rule keeps capability definition, network reachability, granted authority and actual invocation distinct; classes as an unranked inline list. Enforced by `scripts/check-claims.mjs`. |
| UNKNOWN stays UNKNOWN | #4 SC-INV-01; #4 §0.5 result states and numeric treatment; #6 §0.5 state meanings; #6 §1.1 (E0 supports UNKNOWN or Not Tested); README (no overall trust score) | Owner ruling 2: UNKNOWN and Not Tested are shown as distinct states with their canonical meanings; Not Tested keeps the design-score nuance. |
| Annotation b — Controls: control breakpoints (`#breakpoints`, in Act III) | #2 §6.6 (definition, verbatim); §1.8 (stop, constrain, detect or contain; alternate and residual paths); §6.3 (path validation states and roles, verbatim names and order; orthogonality) | Stop · Constrain · Detect · Contain as one native radio group over a synthetic path (Human → Agent → Identity → Tool → API → Sensitive action) with a text equivalent of the breakpoint position. The one-line glosses are plain-language illustrations, not canonical definitions; the caption states the path is synthetic and shows nothing is authorized, invoked, reachable or exploitable. Validation states and roles sit in a disclosure. Enforced by `scripts/check-claims.mjs`. |
| Evidence model | #6 §1.1–§1.8 and §4 sufficiency note | Grade names and support statements quoted; full sufficiency rules linked, not summarized. |
| Assessment lifecycle | #7 §0.11 (phase numbers, names, primary outcomes and iteration rule, verbatim); #7 §0.12 (gate tests, verbatim); #7 §1.1–§1.10 (assessment types and first-sentence definitions, verbatim); METHODOLOGY_MANIFEST §1 (role of #7) | A standalone section after Evidence, separate from the reasoning chain. Two-row timeline (1–7, 8–13) with square markers; no groupings or completion state. Outcomes, gate tests and type definitions sit in disclosures. Phase order, type order and the iteration rule are enforced by `scripts/check-claims.mjs`. |
| Release, review and limitations (`#status`) | METHODOLOGY_MANIFEST header (status, bundle, snapshot) and §6 (five external gates and "This manifest pins content…", verbatim); README (author's internal review complete, independent review pending); artifact approval records and LICENSE (methodology author); CONTRIBUTING (author reviews proposed changes until the #11 bodies are standing) | Publication colophon (visual reset): mono labels (Status, Bundle, Snapshot, Review, Validation, Authorship, Change review), gates as text "Pending", limitations set apart. No warning colours, badges, meter or percentage. Authorship is one line ("Methodology author: …"), with no portrait, biography, title, employer or links. The manifest controls gate status; the section states, rather than reconciles, that ROADMAP records the licence choice as made while the manifest lists legal approval as pending. Status facts, gates and the author line are enforced by `scripts/check-claims.mjs`. |
| Canonical source explorer | METHODOLOGY_MANIFEST (purpose line), §2 (reading order), §4 (versions); README (M1–M5 "cumulative, evidence-gated", E0–E5, 72 controls, 36 capabilities) | Table of contents (visual reset): the manifest first as the authority map, then where the model's figures are defined (6 domains / 72 controls, 36 capabilities / M1–M5, E0–E5), then the twelve artifacts in §2 reading order as rows, each linked at the pinned bundle commit; #13 marked non-normative in text. Reading order, pinned links and the "explains / decide" statement are enforced by `scripts/check-claims.mjs`. The former standalone scale band is removed; `scripts/check-claims.mjs` fails if it returns. |
| Public review (`#review`) | CONTRIBUTING ("Ways to give feedback", change classes, formal change proposal per #11 §2.4); `.github/ISSUE_TEMPLATE` (finding and general-feedback templates); REVIEW_FINDINGS | Invitation (visual reset): four equal entry points as typographic rows with text links: Report a finding, Share feedback, Propose a change, Inspect the source; the #11 §2.4 formal-change-proposal rule is kept. GitHub Discussions (enabled on the repository) is a secondary link under Share feedback only. No SLAs, timelines or active governance bodies are claimed. Entry labels and order are enforced by `scripts/check-claims.mjs`. |
| Footer | LICENSE (copyright holder, CC BY 4.0); TRADEMARKS | Copyright and licence line; the methodology-not-product statement. |

Homepage navigation (visual reset): Method, Domains, Assurance, Source, GitHub (canonical source). Until the corresponding acts are redesigned, each item targets an existing section: Method → the reasoning chain (`#flow`); Domains → `#domains`; Assurance → the evidence model (`#evidence`), where the assurance material begins; Source → the canonical source explorer (`#methodology`). Release status is carried by the Cover colophon and the Release, review and limitations section (`#status`); public review (`#review`) and lifecycle remain on the page without navigation items; Authority and control breakpoints are annotations a and b inside Act III (`#authority`, `#breakpoints`), reached from the chain's superscript keys. Label order is enforced by `scripts/check-claims.mjs`; every fragment by `scripts/check-links.mjs`.
