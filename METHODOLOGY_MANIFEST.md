# AI Trust Graph — Methodology Manifest

**Bundle identifier:** 1.0-rc.2  
**Status:** Public-release candidate  
**Snapshot date:** 2026-09-25  
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

| # | Artifact | Version | Status | Path | Git blob SHA |
| ---: | --- | --- | --- | --- | --- |
| 1 | Manifesto | 1.0 | Public-release candidate | `docs/01-manifesto.md` | `38081d537cbd7fdfd7300cca58244639cd415da6` |
| 2 | Core Conceptual Model | 1.1.1 | Public-release candidate | `docs/02-core-conceptual-model.md` | `30ad1db474fc3798bf51d6892335becae4caa59c` |
| 3 | Maturity Model | 1.0 | Public-release candidate | `docs/03-maturity-model.md` | `f2a9359cc98522ca622eef232eac75f0a5b87e87` |
| 4 | Scoring Framework | 1.0 | Public-release candidate | `docs/04-scoring-framework.md` | `ed7bcd0b41073dd4b03323a92d2e5f8609106536` |
| 5 | Master Control Library | 1.0 | Public-release candidate | `docs/05-master-control-library.md` | `ee8424cca029e6fca7a5712efb8b6f59037dac40` |
| 6 | Evidence Model | 1.0 | Public-release candidate | `docs/06-evidence-model.md` | `86de991c8d9d6c65c55b745ae039f855430dfc0b` |
| 7 | Assessment Methodology | 1.0 | Public-release candidate | `docs/07-assessment-methodology.md` | `1b3d67f37938d675da1313336f64d8703fbf6ae5` |
| 8 | Assessor Handbook | 1.0 | Public-release candidate | `docs/08-assessor-handbook.md` | `3fbede164f6ac3f89c4a02619b0a0f40866938e6` |
| 9 | Reporting Standard | 1.0 | Public-release candidate | `docs/09-reporting-standard.md` | `0d85dafb5295b575acbdeede4e09bbea93ce8d72` |
| 10 | Reference Assessment Repository | 1.0 | Public-release candidate | `docs/10-reference-assessment-repository.md` | `4128c68344b7cbed6fb0e303958f453b01256a9c` |
| 11 | Governance & Certification Model | 1.0 | Public-release candidate | `docs/11-governance-and-certification-model.md` | `35d9184a56098c3036a5edc1857a6fba29dc1fa5` |
| 12 | Ontology Specification | 1.0.1 | Public-release candidate | `docs/12-ontology-specification.md` | `dcad629c463008dcc2e0009c8efda810473013af` |

### Phase 2 non-normative companion

| Artifact | Version | Status | Path | Git blob SHA |
| --- | --- | --- | --- | --- |
| Reference Graph Schema and Illustrative Query Library | 0.2.1 | Non-normative | `docs/13-reference-graph-schema-and-query-library.md` | `a344e7c6059b21b63d1b222ab094fa566445fb99` |

## 5. Conformance availability

L0-L3 and applicable L5 methodology claims remain governed by Artifact #11 and their stated scope/limitations.

**L4 Tool-compatible is unavailable for this release candidate.** It MUST NOT be claimed until a future governed release publishes approved normative machine-readable schemas and approved conformance test vectors. Artifact #13 is illustrative and does not satisfy that requirement.

## 6. Validation status

This manifest pins content; it does not convert pending external gates into completed review.

The following remain external release gates until actually completed:

- independent methodology / architecture review;
- independent AI-security review;
- inter-assessor reproducibility study using the protocol in Artifact #10 Appendix B.4;
- employer / IP / confidentiality review;
- legal approval of licence / trademark position.

No repository wording may imply those gates are complete until evidence of completion is published or recorded through governance.
