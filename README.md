# AI Trust Graph

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23104503.svg)](https://doi.org/10.5281/zenodo.23104503)

**An open methodology for assessing AI systems using graph-based trust, authority, evidence, controls, paths, governance, and security validation.**

AI Trust Graph models an AI system's real exposure as a directed, labelled multigraph of identities, tools, data, and trust relationships — then assesses it through six domains, seventy-two canonical controls, an evidence-graded assurance model, and a non-compensating maturity scale. The methodology produces bounded, evidence-linked findings and a Path Exposure Index for triage. It does not produce a single trust score, and it does not certify anyone.

> **What this is not.** AI Trust Graph is a methodology, not a product. It is not a certification program, not an accreditation body, not a legal opinion, and not a guarantee of safety or compliance. Version 1.0 defines certification *readiness*; it does not launch an operating certification scheme. See [Artifact #11 — Governance & Certification Model](docs/11-governance-and-certification-model.md).

## Start here

1. **Ten minutes:** the [website](https://aitrustgraph.org) explains the idea with a worked example, and the [interactive graph](https://aitrustgraph.org/graph/) lets you inspect a synthetic system relationship by relationship.
2. **Half an hour:** the Abstract and Executive brief at the start of the [whitepaper](https://doi.org/10.5281/zenodo.23104503) summarise the whole methodology.
3. **Try it on one system in two hours:** the [Lite review guide](guides/lite-review.md) walks one AI use case through the path questions, a path template and an UNKNOWN register; it is a first look, not an assessment. To see where the methodology sits next to frameworks you already use, read the [OWASP Agentic Top 10 and NIST AI RMF crosswalks](guides/crosswalks.md). For a hindsight reading of five public AI incidents through the methodology's questions, see the [incident retrospectives](guides/incident-retrospectives.md). All three guides are non-normative. To build a candidate graph from your own MCP configurations, agent tools and AWS IAM export, try the reference tool [`atg-graph`](tools/atg-graph/).
4. **The canonical source:** read [Artifact #1 (Manifesto)](docs/01-manifesto.md), [#2 (Core Conceptual Model)](docs/02-core-conceptual-model.md) and [#12 (Ontology)](docs/12-ontology-specification.md), then #3 to #11 as needed (see [The twelve artifacts](#the-twelve-artifacts)).
5. **Give feedback:** open a [Methodology finding](https://github.com/Sivas1187/Ai-trust-graph/issues/new?template=finding-report.yml) or [General feedback](https://github.com/Sivas1187/Ai-trust-graph/issues/new?template=general-feedback.yml) issue, or start a [Discussion](https://github.com/Sivas1187/Ai-trust-graph/discussions). Report security vulnerabilities privately, as described in [SECURITY.md](SECURITY.md).

## Status

This repository is a **public-release candidate**. The methodology author's internal review is complete, and **independent architecture review, AI-security review, inter-assessor reproducibility validation, and licence/trademark approval are still pending.** The employer/IP/confidentiality gate is closed by author declaration (independent research, author-owned IP, no employer or client confidential information); that is a self-declaration, not an external legal review, and is recorded in [METHODOLOGY_MANIFEST.md §6.1](METHODOLOGY_MANIFEST.md#61-gate-records). The closing approval records inside the artifacts reflect the 1.0-rc.4 snapshot and still list that gate as pending; the manifest governs current gate status. An author-performed sensitivity analysis of the Path Exposure Index (Artifact #4 §6.5) is recorded in [METHODOLOGY_MANIFEST.md §6.2](METHODOLOGY_MANIFEST.md#62-release-acceptance-records); it is not an independent review, and it covers the PEI only. Nothing here should be treated as independently validated, finalized, endorsed, or ready for reliance until those gates close. The exact release-candidate artifact set, authority model, versions and Git blob pins are defined in [METHODOLOGY_MANIFEST.md](METHODOLOGY_MANIFEST.md). See [ROADMAP.md](ROADMAP.md) for what remains and [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md) for the pre-publication review record.

The repository files the methodology's own publication-acceptance criteria call for are now present: a **LICENSE** (CC BY 4.0, see below), **TRADEMARKS.md**, and **[SECURITY.md](SECURITY.md)**, which sets a private disclosure route for vulnerabilities in the repository and website (distinct from the AI-security *subject matter* the methodology assesses). See [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md#gaps) for the gap history.

## Whitepaper

Sethumadhavan, S. (2026). *AI Trust Graph: A Graph-Driven, Evidence-Based Methodology for AI Assurance* (Version 1.0). Zenodo. [https://doi.org/10.5281/zenodo.23104503](https://doi.org/10.5281/zenodo.23104503)

The whitepaper is a non-normative narrative introduction to the methodology, frozen to bundle 1.0-rc.4. The artifacts under `docs/` remain canonical: where the paper and an artifact differ, the artifact governs. The paper is published by the author on Zenodo under CC BY 4.0; it has not been peer reviewed, and its publication does not change the status above. "Version 1.0" is the version of the paper; the methodology remains a public-release candidate.

The source Markdown, the published PDF and the build and text-parity tooling are in [`whitepaper/`](whitepaper/). The Path Exposure Index sensitivity analysis the paper summarizes, with its reproducible script, is in [`analysis/pei-sensitivity/`](analysis/pei-sensitivity/). To cite the paper, use the reference above or GitHub's "Cite this repository" button, which reads [`CITATION.cff`](CITATION.cff).

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
- A **Path Exposure Index (PEI)**, `4×Consequence + 3×Reachability + 3×Authority + 2×Amplification + 3×Control-resistance` (range **7–62 for determinate eligible active paths**, bands Low/Moderate/High/Critical), used strictly for triage — never as a probability, an expected loss, or a certification score. `UNKNOWN` is never encoded as zero; unresolved material reachability prevents a final point PEI.
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
| 10 | [Reference Assessment Repository](docs/10-reference-assessment-repository.md) | 12 synthetic worked calibration cases with calibrated control subsets, plus adversarial PEI/M5/reproducibility vectors |
| 11 | [Governance & Certification Model](docs/11-governance-and-certification-model.md) | Stewardship, change control, certification readiness |
| 12 | [Ontology Specification](docs/12-ontology-specification.md) | Canonical entity types, relationship predicates, states and enumerations behind every other artifact |

The canonical authority/dependency model and exact reading order are defined once in [METHODOLOGY_MANIFEST.md](METHODOLOGY_MANIFEST.md). For a new reader: read #1, #2, #12, then #3 through #11; use #13 only when implementation examples are needed. Artifact #10's twelve worked cases and calibration vectors are entirely synthetic and must never be represented as facts about a real organization, product or provider.

## Phase 2: non-normative companions

The Ontology Specification (Artifact #12) deliberately deferred machine-readable/property-graph bindings to an unscheduled "Phase 2," on the grounds that the methodology should not be bound to an implementation before its concepts were settled. That phase has now formally begun:

| Companion | What it is | Conformance weight |
| --- | --- | --- |
| [Reference Graph Schema and Illustrative Query Library](docs/13-reference-graph-schema-and-query-library.md) | Consolidates the ontology's entity/relationship/state registries into a property-graph reference schema, cross-references all 72 controls' graph vocabulary, and provides illustrative **GQL-style** query patterns informed by ISO/IEC 39075. The examples are not claimed as parser-validated ISO GQL conformance. | **None.** Not one of the twelve core artifacts. L4 Tool-compatible is currently unavailable until approved normative schemas and test vectors are published; this companion does not satisfy that gate. |

See `REVIEW_FINDINGS.md`, finding R-13, for the full record of why this was opened now and what was and wasn't changed to accommodate it.

## Product boundary

**ExposureGraph** is referenced in several artifacts as a separate, future commercial product. It is explicitly and permanently **excluded from this public methodology**: its implementation, proprietary algorithms, connectors, customer data, and commercial workflows are out of scope here, and no future contribution should attempt to fold it back in. The methodology itself is designed to remain tool-independent and vendor-neutral — any compliant implementation should be able to execute it.

## Repository layout

```
ai-trust-graph/
├── README.md                 — you are here
├── METHODOLOGY_MANIFEST.md    — canonical authority/dependency map, versions and exact artifact pins
├── CITATION.cff               — citation metadata; points to the whitepaper DOI
├── LICENSE                    — CC BY 4.0 (methodology text)
├── TRADEMARKS.md               — "AI Trust Graph" name/marks, reserved separately from the content license
├── ROADMAP.md                 — what's done, what's pending, what's next
├── CHANGELOG.md                — version history for this repository
├── CONTRIBUTING.md            — how to propose changes, and the review bar they must clear
├── CODE_OF_CONDUCT.md          — community conduct standard
├── SECURITY.md                — how to report a vulnerability in the repository or website
├── REVIEW_FINDINGS.md          — independent ruthless-reviewer pass: inconsistencies, gaps, recommendations
├── guides/                    — non-normative practical guides: two-hour Lite review, framework crosswalks, incident retrospectives
├── whitepaper/                — whitepaper v1.0 (non-normative): source, published PDF, figures, build tooling
├── analysis/pei-sensitivity/  — author-performed PEI sensitivity analysis and reproducible script
├── tools/atg-graph/           — reference graph tool: candidate paths from MCP configs, agent tools and AWS IAM (Apache-2.0)
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

You don't need a pull request to help, though. First impressions, questions, and specific findings are welcome via this repository's Issues (a structured "Methodology finding" template and a lower-ceremony "General feedback" option) or Discussions, if enabled. A particularly valuable external contribution is an **independent blinded assessor-calibration run** using Artifact #10 Appendix B.4; until that protocol is actually executed, the repository does not claim empirically demonstrated inter-assessor reliability.

## License

The reference tool in [`tools/atg-graph/`](tools/atg-graph/) is code, licensed separately under the [Apache License 2.0](tools/atg-graph/LICENSE). The methodology text (this README and everything under `docs/`) is licensed under **[Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE)** — you may share and adapt it, including commercially, with attribution. The **"AI Trust Graph" name and any future logo are reserved separately**, and conformance/certification claims are governed by [Artifact #11](docs/11-governance-and-certification-model.md), not by this license — see [TRADEMARKS.md](TRADEMARKS.md). This license choice is recorded, with rationale, in [REVIEW_FINDINGS.md, R-08](REVIEW_FINDINGS.md#r-08--governance-required-repository-files-not-present-blocking); the employer/IP/confidentiality gate is closed by author declaration ([METHODOLOGY_MANIFEST.md §6.1](METHODOLOGY_MANIFEST.md#61-gate-records)), and legal approval of the licence/trademark position remains pending ([ROADMAP.md](ROADMAP.md)).
