# AI Trust Graph Website Content Map

**Website role:** explanatory and navigational.

**Canonical source:** `METHODOLOGY_MANIFEST.md` and the pinned artifacts it identifies.

| Website route | Purpose | Primary canonical source |
| --- | --- | --- |
| `/` | Explain AI Trust Graph and its core proposition | README; #1 Manifesto; #2 Core Conceptual Model |
| `/why-atg` | Explain why connected AI systems need relationship- and authority-aware assurance | #1 Manifesto; #2 Core Conceptual Model |
| `/how-it-works` | Explain the reasoning sequence Assets -> Relationships -> Authority -> Paths -> Controls -> Evidence -> Decisions | #2 Core Conceptual Model; #7 Assessment Methodology |
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
4. Assurance reasons across assets, relationships, authority, paths, controls, evidence and decisions.
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
| Hero, status pill | README; METHODOLOGY_MANIFEST header (bundle 1.0-rc.4, public-release candidate) | Hero graph is synthetic; edge labels are illustrative, not ontology predicates. |
| The problem | #1 Manifesto (invariant: "A topological connection is not automatically an exploitable path.") | |
| AI Assurance Reasoning Flow | #2 §0.10 theory-map question table | Website device, labelled explanatory. Shown next to the canonical #2 §0.10 reasoning chain and the 13 phases of #7. |
| Six domains | README (names, prefixes); #2 §8.1 (purposes, verbatim); #3 §2.1–§7.6 (capability names, verbatim) | |
| Access is not authority | #2 §3.6 separation rule; #2 §5.2 authority classes | The six "Can …" tiles illustrate distinct assertions; explicitly not a canonical sequence or state machine. |
| UNKNOWN stays UNKNOWN | #4 SC-INV-01; #4 §0.5 result states; README (no overall trust score) | |
| Control breakpoints | #2 §1.8, §6.3, §6.6 | Synthetic path; one-line glosses of stop/constrain/detect/contain are plain-language illustrations. |
| Evidence model | #6 §1.1–§1.8 and §4 sufficiency note | Grade names and support statements quoted; full sufficiency rules linked, not summarized. |
| Methodology scale | README; this file's permitted-claims list | |
| Canonical source explorer | METHODOLOGY_MANIFEST §2 (reading order), §4 (versions) | #13 labelled non-normative. |
| Public review, pending gates | CONTRIBUTING; REVIEW_FINDINGS; METHODOLOGY_MANIFEST §6 | |
