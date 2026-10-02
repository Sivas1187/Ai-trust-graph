# AI Trust Graph Website Content Map

**Website role:** explanatory and navigational.

**Canonical source:** `METHODOLOGY_MANIFEST.md` and the pinned artifacts it identifies.

| Website route | Purpose | Primary canonical source |
| --- | --- | --- |
| `/` | Single-page explanation of the methodology, its artifacts, publication status, author and review status | README; METHODOLOGY_MANIFEST; #1 to #12 as mapped below |
| `/graph/` | Optional interactive implementation view with a bundled synthetic graph and a same-origin Neo4j-backed snapshot when configured; non-normative and vendor-replaceable | #2 Core Conceptual Model; #12 Ontology Specification; #13 non-normative companion |
| `/privacy/` | Privacy notice (no analytics, cookies, trackers, storage or forms) | Website policy |
| `/accessibility/` | Accessibility statement and known limitations | Website policy |

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

- "peer reviewed", "academically published"
- "globally recognised" or any adoption or recognition claim
- "regulator approved" or any endorsement
- "patented" or "registered trademark"
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

Canonical text lives in `app/content.ts` (release facts, registry, canonical
lists), `app/site-content.ts` (each entry marked CANONICAL or EDITORIAL) and
`app/publication.ts` (whitepaper record). Every section ends with a "§ Source"
note naming the artifact and section and saying which text is verbatim.

| Section | Canonical source | Website explanation (editorial) |
| --- | --- | --- |
| Hero `#top` | METHODOLOGY_MANIFEST header (status, bundle, snapshot); README status | Line and supporting paragraph; hero graph (illustrative, captioned) |
| Why it exists `#why` | #1 §2.2 thesis, §4 invariant (verbatim) | Narrative; conceptual comparison figure (labelled conceptual) |
| Methodology `#methodology` | #1 §7 lifecycle steps (each outcome cites its step) | Outcome labels Discover, Model, Assess, Validate, Decide, Reassess |
| The graph `#graph` | #12 predicates and caveats (verbatim); #2 §3.2, §6, §6.6; #6 §0.5, §1 | Synthetic path, node notes, illustrative grades |
| Reasoning chain `#flow` | #2 §0.10 chain and theory map (verbatim); #2 §7.4, §3.8, §1.10 decision note (verbatim) | Stage notes; statement that the chain is not the lifecycle |
| Authority `#authority` | #2 §3.6 separation rule, §5.2 classes and sentence, §1.8 / §6.6 breakpoint definition, §6.3 states and roles (verbatim) | Six-assertion illustration and one-line hints; "Not a ladder" note |
| Evidence and UNKNOWN `#unknown` | #6 §0.3, §0.5, §0.9, §1.1 to §1.6, §1.8; #4 §0.5 and SC-INV-01 (verbatim) | Lede; relation symbols; grade-vs-confidence heading |
| Domains `#domains` | README names; #2 §8.1 lede, purposes, outputs; §8.2 integration; #3 capabilities; #5 prefixes | Practical question per domain |
| Lifecycle `#lifecycle` | #7 §0.11 phases, outcomes, iteration rule; §0.12 gates; §1.1 to §1.10 types (verbatim) | Separation statement; Reassess trigger examples drawn from §1 types |
| Worked example `#example` | Vocabulary from #12, #6, #4 §0.5, #2 §6.3 and §7.4 | Entire scenario (synthetic, labelled) |
| Frameworks `#frameworks` | #1 principle 10 and §11 "Claims we will not make" | Complementary positioning wording |
| Artifacts `#artifacts` | METHODOLOGY_MANIFEST §2 and §4; README; artifact header tables | Grouping; filter labels |
| Publications `#publications` | `app/publication.ts` | Scope note while in preparation |
| About the author `#author` | Artifact approval tables and LICENSE (author name) | Role line, summary, independence statement (pending approved wording) |
| Status and review `#status`, `#review` | METHODOLOGY_MANIFEST header and §6; README; CONTRIBUTING; `.github/ISSUE_TEMPLATE` | Review invitation wording |
| Footer | METHODOLOGY_MANIFEST header; LICENSE; TRADEMARKS | Independence statement |

Navigation: Home, Why it exists, Methodology, Worked example, Artifacts,
Publications, About the author, GitHub (canonical source). These are website
labels, not methodology constructs. `scripts/check-claims.mjs` enforces the
order, the canonical content and order in every section, release facts against
the manifest, and the integrity statements; `scripts/check-links.mjs` checks
every fragment and pinned link.
