# AI Trust Graph

**An open methodology for assessing AI systems using graph-based trust, authority, evidence, controls, paths, governance, and security validation.**

AI Trust Graph models an AI system's real exposure as a directed, labelled multigraph of identities, tools, data, and trust relationships — then assesses it through six domains, seventy-two canonical controls, an evidence-graded assurance model, and a non-compensating maturity scale. The methodology produces bounded, evidence-linked findings and a Path Exposure Index for triage. It does not produce a single trust score, and it does not certify anyone.

> **What this is not.** AI Trust Graph is a methodology, not a product. It is not a certification program, not an accreditation body, not a legal opinion, and not a guarantee of safety or compliance. Version 1.0 defines certification *readiness*; it does not launch an operating certification scheme. See [Artifact #11 — Governance & Certification Model](docs/11-governance-and-certification-model.md).

## Status

This repository is a **public-release candidate**. Every artifact carries the same honest status in its closing approval record: the methodology author's internal review is complete, and **independent architecture review, AI-security review, employer/IP/confidentiality review, and licence/trademark approval are all still pending.** Nothing here should be treated as finalized, endorsed, or ready for reliance until those gates close. See [ROADMAP.md](ROADMAP.md) for what remains and [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md) for a ruthless, independent-reviewer-style pass identifying inconsistencies and gaps across the twelve artifacts.

One governance item the methodology's own publication-acceptance criteria calls for is **not yet present in this repository** and is flagged rather than silently added:

- **SECURITY.md** — no vulnerability-disclosure process exists yet for the methodology repository itself (distinct from the AI-security *subject matter* the methodology assesses).

A **LICENSE** (CC BY 4.0, see below) and **TRADEMARKS.md** have since been added — see [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md#gaps) for the full gap history and for why the remaining item is a gap rather than an omission.

## The methodology at a glance

AI Trust Graph organizes assessment into **six domains**, each with twelve canonical controls (prefix `ATG-<DOMAIN>-NNN`):

| Domain | Focus | Control prefix |
| --- | --- | --- |
| D1 — Discovery and AIBOM | Inventory, ownership, and blind spots across the AI estate | `ATG-DIS` |
| D2 — Trust and Privilege Paths | Trust relationships, identity/privilege paths, graph quality | `ATG-TRU` |
| D3 — Authority Governance | Delegated authority, approval, amplification, revocation | `ATG-AUT` |
| D4 — AI Security Validation | Threat hypotheses, control testing, independent retest | `ATG-VAL` |
| D5 — AI Governance and Assurance | Policy, appetite, use-case impact, provider assurance | `ATG-GOV` |
| D6 — Operational Resilience | Detection, containment, recovery, forensics | `ATG-RES` |

On top of the six domains, the methodology defines:

- A **five-level maturity scale** (M1–M5) that is cumulative, evidence-gated, and explicitly *not* an average of control scores.
- A **six-point evidence grade** (E0–E5) separating how strongly a claim is supported from whether a control is effective.
- A **Path Exposure Index (PEI)**, `4×Consequence + 3×Reachability + 3×Authority + 2×Amplification + 3×Control-resistance` (range 4–62, bands Low/Moderate/High/Critical), used strictly for triage — never as a probability, an expected loss, or a certification score.
- A doctrine of **distinct, non-numeric result states** (`UNKNOWN`, `Not Assessed`, `Not Applicable`, `Not Tested`, `Inconclusive`, `Provisional`, `Final within scope`) that must never be silently collapsed into a score or a pass/fail.
- **No overall trust score.** This is a deliberate, repeated design decision across every scoring and reporting artifact, not an oversight.

## The twelve artifacts

| # | Artifact | What it defines |
| --- | --- | --- |
| 1 | [Manifesto](docs/01-manifesto.md) | Purpose, principles, and boundaries of the methodology |
| 2 | [Core Conceptual Model](docs/02-core-conceptual-model.md) | The graph model: nodes, edges, trust, authority, boundaries, paths |
| 3 | [Maturity Model](docs/03-maturity-model.md) | The M1–M5 scale, 36 capabilities, critical gates |
| 4 | [Scoring Framework](docs/04-scoring-framework.md) | Control scoring, DCA/VCR/WCA, the PEI formula |
| 5 | [Master Control Library](docs/05-master-control-library.md) | All 72 canonical controls |
| 6 | [Evidence Model](docs/06-evidence-model.md) | E0–E5 grading, quality dimensions, evidence lifecycle |
| 7 | [Assessment Methodology](docs/07-assessment-methodology.md) | The 13-phase assessment lifecycle and specialized methods |
| 8 | [Assessor Handbook](docs/08-assessor-handbook.md) | Assessor competency levels (A1–A5), field guidance per control |
| 9 | [Reporting Standard](docs/09-reporting-standard.md) | The mandatory report package and claim-integrity rules |
| 10 | [Reference Assessment Repository](docs/10-reference-assessment-repository.md) | 12 synthetic, fully worked reference assessments |
| 11 | [Governance & Certification Model](docs/11-governance-and-certification-model.md) | Stewardship, change control, certification readiness |
| 12 | [Ontology Specification](docs/12-ontology-specification.md) | Canonical entity types, relationship predicates, states and enumerations behind every other artifact |

Read them in order if you're new to the methodology, **with one exception**: Artifact #12, the Ontology Specification, is filed last but is meant to be read right after Artifact #2. The Core Conceptual Model's own precedence rule (§0.2) places "Ontology" immediately after itself and before every operational artifact — it was added to this repository after Artifacts #1–#11 were already published, and appending it as #12 avoided renumbering (and re-linking) files already live on GitHub. Read #1, #2, #12, then #3 through #11 in order. Artifact #10's twelve reference cases are entirely synthetic and must never be represented as facts about a real organization, product, or provider.

## Phase 2: non-normative companions

The Ontology Specification (Artifact #12) deliberately deferred machine-readable/property-graph bindings to an unscheduled "Phase 2," on the grounds that the methodology should not be bound to an implementation before its concepts were settled. That phase has now formally begun:

| Companion | What it is | Conformance weight |
| --- | --- | --- |
| [Reference Graph Schema and Illustrative Query Library](docs/13-reference-graph-schema-and-query-library.md) | Consolidates the ontology's entity/relationship/state registries into a property-graph schema, cross-references all 72 controls' graph vocabulary exactly, and illustrates one query pattern per maturity capability in GQL (ISO/IEC 39075) — the multi-vendor ISO standard, not one vendor's product. | **None.** Not one of the twelve core artifacts; implementing it, ignoring it, or using a different engine entirely has no bearing on any conformance level. See its own §0 and Ontology Specification Appendix G. |

See `REVIEW_FINDINGS.md`, finding R-13, for the full record of why this was opened now and what was and wasn't changed to accommodate it.

## Product boundary

**ExposureGraph** is referenced in several artifacts as a separate, future commercial product. It is explicitly and permanently **excluded from this public methodology**: its implementation, proprietary algorithms, connectors, customer data, and commercial workflows are out of scope here, and no future contribution should attempt to fold it back in. The methodology itself is designed to remain tool-independent and vendor-neutral — any compliant implementation should be able to execute it.

## Repository layout

```
ai-trust-graph/
├── README.md                 — you are here
├── LICENSE                    — CC BY 4.0 (methodology text)
├── TRADEMARKS.md               — "AI Trust Graph" name/marks, reserved separately from the content license
├── ROADMAP.md                 — what's done, what's pending, what's next
├── CHANGELOG.md                — version history for this repository
├── CONTRIBUTING.md            — how to propose changes, and the review bar they must clear
├── CODE_OF_CONDUCT.md          — community conduct standard
├── REVIEW_FINDINGS.md          — independent ruthless-reviewer pass: inconsistencies, gaps, recommendations
└── docs/
    ├── 01-manifesto.md
    ├── 02-core-conceptual-model.md
    ├── 03-maturity-model.md
    ├── 04-scoring-framework.md
    ├── 05-master-control-library.md
    ├── 06-evidence-model.md
    ├── 07-assessment-methodology.md
    ├── 08-assessor-handbook.md
    ├── 09-reporting-standard.md
    ├── 10-reference-assessment-repository.md
    ├── 11-governance-and-certification-model.md
    ├── 12-ontology-specification.md    — filed last; read right after #2 (see "The twelve artifacts")
    └── 13-reference-graph-schema-and-query-library.md  — Phase 2, non-normative (see "Phase 2: non-normative companions")
```

## Contributing and feedback

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version: this is a constitutional methodology, not a wiki — proposals that touch canonical terminology, control definitions, maturity levels, evidence grades, or scoring logic go through the change-control process defined in [Artifact #11, §2](docs/11-governance-and-certification-model.md), not a quick pull request.

You don't need a pull request to help, though. First impressions, questions, and specific findings are all welcome via this repository's Issues (two templates: a structured "Methodology finding" report matching the [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md) format, and a lower-ceremony "General feedback" option) or [Discussions](https://github.com/Sivas1187/Ai-trust-graph/discussions), if enabled. Two open questions this methodology genuinely wants outside input on: should the path-state taxonomy include `Residual` ([R-02](REVIEW_FINDINGS.md#r-02--path-state-taxonomy-8-states-vs-7-states-blocking)), and is "Domain Guides" a real, still-unwritten companion artifact ([R-05](REVIEW_FINDINGS.md#r-05--artifact-precedence-and-dependency-chain-stated-four-different-ways-should-fix))?

## License

The methodology text (this README and everything under `docs/`) is licensed under **[Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE)** — you may share and adapt it, including commercially, with attribution. The **"AI Trust Graph" name and any future logo are reserved separately**, and conformance/certification claims are governed by [Artifact #11](docs/11-governance-and-certification-model.md), not by this license — see [TRADEMARKS.md](TRADEMARKS.md). This license choice is recorded, with rationale, in [REVIEW_FINDINGS.md, R-08](REVIEW_FINDINGS.md#r-08--governance-required-repository-files-not-present-blocking); it still awaits the employer/IP/confidentiality review tracked in [ROADMAP.md](ROADMAP.md) before this repository should be treated as legally final.
