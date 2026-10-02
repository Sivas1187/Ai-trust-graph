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
| 1 Hero `#top` | METHODOLOGY_MANIFEST header (version, status, snapshot); README status | Descriptor, supporting message and actions (narrative brief); decorative motif |
| 1 Why it exists `#why` | #1 §2.2 thesis (verbatim) | Opening statement, narrative, proposition; conceptual comparison (labelled) |
| 2 The problem `#problem` | #2 §3.6; #1 §4; SC-INV-01 | Synthetic procurement scenario; what components do not establish; five distinctions |
| 3 The big idea `#big-idea` | #2 (objects, relationships, conditions, paths, §5.2 authority, evidence); #1 principle 10 and §11 | Five-concept explanation; "What changes?"; framework positioning (`#frameworks`) |
| 4 Signature visual `#graph` | #12 predicates and caveats (verbatim); #2 §3.2, §6, §6.6; #6 §0.5, §0.9, §1; #1 §4 (verbatim) | Scenario, node notes, illustrative grades, qualifier sentence |
| 5 Methodology `#methodology` | | Subsection index, reading depth |
| 5.1 Reasoning chain `#flow` | #2 §0.10 chain and theory map; §7.4, §3.8, §1.10 decision note (verbatim) | Stage notes; chain vs lifecycle statement |
| 5.2 Authority `#authority` | #2 §3.6, §5.2, §1.8 / §6.6, §6.3 (verbatim) | Six-assertion illustration; "Not a ladder" note |
| 5.3 Evidence and UNKNOWN `#unknown` | #6 §0.3, §0.5, §0.9, §1.1 to §1.6, §1.8; #4 §0.5, SC-INV-01 (verbatim) | Discipline points; relation symbols |
| 5.4 Domains `#domains` | README names; #2 §8.1 lede, purposes, outputs; #3; #5 prefixes | Practical question per domain |
| 5.5 Lifecycle `#lifecycle` | #7 §0.11, §0.12, §1.1 to §1.10 (verbatim) | Chain vs lifecycle statement; Reassess trigger note |
| 5.6 Worked example `#example` | Vocabulary from #12, #6, #4 §0.5, #2 §6.3 and §7.4 | Entire scenario (synthetic, labelled) |
| 6 Artifacts `#artifacts` | METHODOLOGY_MANIFEST §2, §4; README; artifact headers | Grouping, filters, source register |
| 7 Publications `#publications` | `app/site.config.ts` publication record | Scope note while in preparation |
| 8 About the author `#author` | Artifact approval tables, LICENSE | Role, summary, independence statement (pending approved wording) |
| Review and status `#status`, `#review` | METHODOLOGY_MANIFEST header and §6; README; CONTRIBUTING | Review invitation |
| Footer | METHODOLOGY_MANIFEST header; LICENSE; TRADEMARKS | Independence statement |

Navigation: Why it exists, The big idea, Methodology, Artifacts,
Publications, About, plus a separate GitHub action. These are website
labels, not methodology constructs. `scripts/check-claims.mjs` enforces the
order, the canonical content and order in every section, release facts against
the manifest, and the integrity statements; `scripts/check-links.mjs` checks
every fragment and pinned link.
