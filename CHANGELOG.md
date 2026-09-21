[← Back to methodology index](README.md)

# Changelog

All notable changes to this repository are recorded here. This changelog tracks the **repository** (structure, formatting, governance files, and cross-artifact consistency work) — it is not a substitute for the semantic-versioning history of each individual artifact, which is owned by that artifact's own front matter and, going forward, by the change-control process in [Artifact #11 §2](docs/11-governance-and-certification-model.md).

The format loosely follows [Keep a Changelog](https://keepachangelog.com/); dates are in `YYYY-MM-DD`.

## [Unreleased]

### Added
- Repository scaffolding: `README.md`, `CONTRIBUTING.md`, `ROADMAP.md`, `CODE_OF_CONDUCT.md`, this `CHANGELOG.md`, and `REVIEW_FINDINGS.md`.
- All 11 methodology artifacts converted from source drafts into clean, publication-quality Markdown under `docs/`, each cross-linked back to the README index:
  - `01-manifesto.md`
  - `02-core-conceptual-model.md`
  - `03-maturity-model.md`
  - `04-scoring-framework.md`
  - `05-master-control-library.md`
  - `06-evidence-model.md`
  - `07-assessment-methodology.md`
  - `08-assessor-handbook.md`
  - `09-reporting-standard.md`
  - `10-reference-assessment-repository.md`
  - `11-governance-and-certification-model.md`
- Independent ruthless-reviewer consistency pass across all 11 artifacts, recorded in `REVIEW_FINDINGS.md` (findings R-01 through R-10).

### Changed
- Manifesto (Artifact #1), Appendix B: redacted a list of internal, pre-existing source filenames per the Manifesto's own publication-boundary rules. **This is a redaction of internal file references only — no methodology semantics, terminology, or doctrine were altered.** See `REVIEW_FINDINGS.md`, finding R-01.

### Known issues (not yet fixed — see REVIEW_FINDINGS.md)
- Path-state taxonomy: Core Conceptual Model defines 8 states (including `Residual`); Scoring Framework and Master Control Library define 7 (R-02). Unresolved pending an author decision.
- PEI formula notation is inconsistent across the Scoring Framework's Formula Register (`B`, `K`) and the Reference Assessment Repository's cross-case register (`Am`, `CR`) (R-03).
- Assessment Methodology: §0.11 describes "thirteen controlled phases" numbered 1–13; the document's own phase headers run 2–14 (R-04).
- Artifact precedence/dependency chain is worded differently in four separate artifacts (R-05).
- Core Conceptual Model is versioned 1.1 while every other artifact in the bundle is 1.0, with no top-level release manifest reconciling the two (R-06).
- `LICENSE` and `SECURITY.md` are not present, though the Manifesto's own Appendix B publication-acceptance criteria call for both (R-08).

### Not yet done
- Independent chief-product-architecture review, AI-security architecture review, employer/IP/confidentiality review, and licence/trademark approval remain **pending** on every artifact — see each artifact's closing approval table and `README.md`'s Status section.
- Certification readiness (Artifact #11) is defined but no certification scheme has been established, reviewed, or launched, and none is scheduled by this changelog.

---

## Versioning note

This project has not yet cut a tagged release. Everything above is grouped under `[Unreleased]` deliberately: none of it should be represented as a finished, reviewed, or certified "v1.0" until the gates listed in `ROADMAP.md` close. When the first tagged release is cut, this changelog will record the exact version of every one of the 11 artifacts included in it, resolving the version-manifest gap noted in `REVIEW_FINDINGS.md`, finding R-06.
