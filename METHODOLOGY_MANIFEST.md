# AI Trust Graph — Methodology Manifest

**Bundle identifier:** 1.0-rc.5  
**Status:** Public-release candidate  
**Snapshot date:** 2026-10-04  
**Purpose:** Single canonical authority/dependency map and exact artifact-content registry for this repository snapshot.

> **MANIFEST RULE** This file is the repository-wide source of truth for artifact authority, dependency, reading order, version pins and exact Git blob identifiers. Individual artifacts may describe their own scope, but they MUST NOT publish a competing repository-wide precedence chain.

## 1. Authority model

AI Trust Graph does not use one simplistic total order for every kind of conflict. Authority is resolved by **scope**:

| Authority scope | Governing artifact(s) | Rule |
| --- | --- | --- |
| Public purpose and non-negotiable commitments | Artifact #1 — Manifesto | Lower artifacts may operationalize but not contradict the Manifesto. |
| Canonical conceptual semantics | Artifact #2 — Core Conceptual Model | Governs the meaning of graph, trust, authority, path, evidence and control concepts. |
| Formal ontology representation | Artifact #12 — Ontology Specification | Formalizes Artifact #2 semantics into canonical classes, predicates, states and constraints; it may not redefine Artifact #2. |
| Normative maturity rules | Artifact #3 — Maturity Model | Governs M1-M5 capability criteria, gates and determination rules subject to higher semantic authority. |
| Normative scoring rules | Artifact #4 — Scoring Framework | Governs control/scoring arithmetic, PEI, coverage and aggregation rules subject to higher semantic authority. |
| Normative control requirements | Artifact #5 — Master Control Library | Governs canonical control IDs, objectives, applicability, evidence expectations and validation procedures. |
| Normative evidence semantics | Artifact #6 — Evidence Model | Governs evidence grades, provenance, sufficiency, confidence and conflict treatment. |
| Normative assessment execution | Artifact #7 — Assessment Methodology | Governs the controlled fieldwork lifecycle and gates without redefining upstream semantics. |
| Operational assessor guidance | Artifact #8 — Assessor Handbook | Explains execution and judgment; cannot redefine normative artifacts. |
| Normative reporting | Artifact #9 — Reporting Standard | Governs result presentation and claim boundaries. |
| Illustrative/calibration material | Artifact #10 — Reference Assessment Repository | Demonstrates/calibrates use; examples never override normative artifacts. |
| Governance and change control | Artifact #11 — Governance & Certification Model | Governs stewardship, change control, conformance vocabulary and future certification readiness; governance process does not silently redefine semantics. |
| Phase 2 non-normative implementation reference | Artifact #13 — Reference Graph Schema and Illustrative Query Library | Informative only; carries no conformance weight and cannot become a hidden source of methodology truth. |

When a conflict is detected, the affected conclusion or claim is paused, evidence and version state are preserved, and the issue is resolved through Artifact #11 governance using the authority scope above.

## 2. Dependency and reading order

For a new reader, the recommended sequence is:

1. Artifact #1 — Manifesto
2. Artifact #2 — Core Conceptual Model
3. Artifact #12 — Ontology Specification
4. Artifact #3 — Maturity Model
5. Artifact #4 — Scoring Framework
6. Artifact #5 — Master Control Library
7. Artifact #6 — Evidence Model
8. Artifact #7 — Assessment Methodology
9. Artifact #8 — Assessor Handbook
10. Artifact #9 — Reporting Standard
11. Artifact #10 — Reference Assessment Repository
12. Artifact #11 — Governance & Certification Model
13. Artifact #13 — Phase 2 non-normative companion, when implementation examples are needed

This reading order is not permission for a later artifact to override an earlier artifact outside its own authority scope.

## 3. Domain Guides decision

**“Domain Guides” are not a core v1.0 artifact and are not a missing dependency.**

Any future sector-, jurisdiction- or technology-specific guide is an **Extension artifact** governed by Artifact #11. An extension MUST preserve canonical terminology, IDs, evidence grades, maturity semantics, scoring rules and ontology invariants unless a separately approved methodology change updates the canonical artifacts first.

## 4. Exact artifact registry

The Git blob SHA pins the exact UTF-8 file content for this release-candidate snapshot. It is a Git object identifier, not a claim that the artifact has completed external validation.

**1.0-rc.5 (2026-10-04)** is an editorial patch of 1.0-rc.4 under Artifact #11 §2.3. In Artifacts #6, #7, #8, #9 and #11, table rows that were repeated word for word in every section of a series are listed once, with the sections they apply to; each artifact carries a correction note. Artifact #9 §5.1 also gains a cross-reference to the finding-type definitions. No rule, value or other wording changed, and the other eight artifacts are byte-identical to 1.0-rc.4. A script checked, for every section, that the rows that apply are unchanged and that all prose is identical. Cross-artifact "Depends on" version references are patch-compatible and were not changed. Work pinned to 1.0-rc.4, including the inter-assessor study IAS-01 and whitepaper v1.0, remains valid against the `v1.0-rc.4` tag.

| # | Artifact | Version | Status | Path | Git blob SHA |
| ---: | --- | --- | --- | --- | --- |
| 1 | Manifesto | 1.0 | Public-release candidate | `docs/01-manifesto.md` | `38081d537cbd7fdfd7300cca58244639cd415da6` |
| 2 | Core Conceptual Model | 3.0.0 | Public-release candidate | `docs/02-core-conceptual-model.md` | `8dc9953c69f359f3b76f5d00a1cbd82992aaa31d` |
| 3 | Maturity Model | 1.0 | Public-release candidate | `docs/03-maturity-model.md` | `f2a9359cc98522ca622eef232eac75f0a5b87e87` |
| 4 | Scoring Framework | 3.0.0 | Public-release candidate | `docs/04-scoring-framework.md` | `8c92ebb824b8de2c956c7522c24e1b8e76dd10d2` |
| 5 | Master Control Library | 2.0.0 | Public-release candidate | `docs/05-master-control-library.md` | `d1584f82a0c8a50338346818ac02653e884ec0fb` |
| 6 | Evidence Model | 2.0.1 | Public-release candidate | `docs/06-evidence-model.md` | `5815129b518715bd94e2556ddc9a7a3222a18aff` |
| 7 | Assessment Methodology | 1.1.1 | Public-release candidate | `docs/07-assessment-methodology.md` | `117482ae6876bce3cfc6b80fc81cbae884165dd8` |
| 8 | Assessor Handbook | 1.0.1 | Public-release candidate | `docs/08-assessor-handbook.md` | `a06b99de572cf8f416613052cd46105eaff4a215` |
| 9 | Reporting Standard | 1.1.1 | Public-release candidate | `docs/09-reporting-standard.md` | `f3d3fe15f7640118a70b372f0935215931313748` |
| 10 | Reference Assessment Repository | 2.0.0 | Public-release candidate | `docs/10-reference-assessment-repository.md` | `54a71fa9af694b291ece152d61b1217d61f41483` |
| 11 | Governance & Certification Model | 1.0.1 | Public-release candidate | `docs/11-governance-and-certification-model.md` | `2eb6e1ec642d34faf437bf95beee635ae9283c5b` |
| 12 | Ontology Specification | 3.0.0 | Public-release candidate | `docs/12-ontology-specification.md` | `713742afab9255eef1f08dc8e07f3dbdbc8c05cb` |

### Phase 2 non-normative companion

| Artifact | Version | Status | Path | Git blob SHA |
| --- | --- | --- | --- | --- |
| Reference Graph Schema and Illustrative Query Library | 0.4.0 | Non-normative | `docs/13-reference-graph-schema-and-query-library.md` | `d6c08539762b789e664ab6f66a0ffec6316c8c04` |

## 5. Conformance availability

L0-L3 and applicable L5 methodology claims remain governed by Artifact #11 and their stated scope/limitations.

**L4 Tool-compatible is unavailable for this release candidate.** It MUST NOT be claimed until a future governed release publishes approved normative machine-readable schemas and approved conformance test vectors. Artifact #13 is illustrative and does not satisfy that requirement.

## 6. Validation status

This manifest pins content; it does not convert pending external gates into completed review.

The following remain external release gates until actually completed:

- independent methodology / architecture review;
- independent AI-security review;
- inter-assessor reproducibility study using the protocol in Artifact #10 Appendix B.4;
- legal approval of licence / trademark position.

No repository wording may imply those gates are complete until evidence of completion is published or recorded through governance.

### 6.1 Gate records

Gates closed through governance, with the evidence recorded for each. A record states exactly what was established and by whom; it does not extend to anything it does not state.

| Gate | Status | Recorded | Basis |
| --- | --- | --- | --- |
| Employer / IP / confidentiality review | Closed by author declaration | 2026-10-02 | Declaration by the methodology author, Siva Sethumadhavan: AI Trust Graph is the author's independent research, not undertaken for or on behalf of any employer or client; the author owns its intellectual property; and it does not include any employer's or client's confidential information. This is a self-declaration by the author. It is not an external legal review or opinion. |

The closing approval records inside the pinned artifacts reflect the 1.0-rc.4 content snapshot (unchanged by the 1.0-rc.5 editorial patch) and still list this gate as pending; this section governs current gate status until the artifacts are next revised.

### 6.2 Release-acceptance records

Release-acceptance work that the artifacts require, recorded through governance with what it established. A record states exactly what was done and by whom. It is not an independent review, and it does not complete any release-acceptance criterion or external gate that it does not name as complete.

| Requirement | Status | Recorded | Basis |
| --- | --- | --- | --- |
| Sensitivity analysis of the path formula (Artifact #4 §6.5; Artifact #4 A.7 *Calibration*) | Performed by the methodology author; recorded by the author | 2026-10-02 | Desk analysis of the Path Exposure Index over all 2,000 determinate component vectors and the Artifact #10 Appendix B.1–B.2 calibration vectors; method, results, limitations and reproducible script in `analysis/pei-sensitivity/`. Of the §6.5 tests it covers one-point component change, weight alternatives and evidence downgrade, and it adds threshold alternatives. Under the author-defined alternatives, ordering changes are small (Kendall tau-b at least 0.913) and reversals between paths two or more bands apart cannot occur; band membership is sensitive at band edges, which the component-profile and triage-only rules already address. Coverage expansion and gate activation concern aggregates and were not tested; reviewer variation needs the inter-assessor study, which remains a pending gate in §6. Other weighted formulas in Artifact #4, such as F-04, are not covered. This is not an independent review or a field calibration, and it does not record the review of the sensitivity analysis that the A.7 *Calibration* criterion asks for. |
