[← Back to methodology index](README.md)

# Changelog

All notable changes to this repository are recorded here. This changelog tracks the **repository** (structure, formatting, governance files, and cross-artifact consistency work) — it is not a substitute for the semantic-versioning history of each individual artifact, which is owned by that artifact's own front matter and, going forward, by the change-control process in [Artifact #11 §2](docs/11-governance-and-certification-model.md).

The format loosely follows [Keep a Changelog](https://keepachangelog.com/); dates are in `YYYY-MM-DD`.

## [Unreleased]

### Added
- **Phase 2 formally opened.** `docs/13-reference-graph-schema-and-query-library.md`: a new, explicitly non-normative companion consolidating the Ontology Specification's canonical entity registry (129 types), relationship registry (96 predicates) and state/evidence/maturity enumerations into a property-graph schema, an exact machine-extracted cross-reference of all 72 Master Control Library controls' graph vocabulary, and an illustrative query library (one pattern per maturity capability, plus nine cross-cutting patterns) written in GQL (ISO/IEC 39075) rather than any single vendor's query language. It carries no conformance weight and creates no dependency on ExposureGraph. Ontology Specification Appendix G and Governance & Certification Model §7.1 were updated to record the Phase 2 status change and clarify this document's non-normative standing. See `REVIEW_FINDINGS.md`, finding R-13.
- Repository scaffolding: `README.md`, `CONTRIBUTING.md`, `ROADMAP.md`, `CODE_OF_CONDUCT.md`, this `CHANGELOG.md`, and `REVIEW_FINDINGS.md`.
- `LICENSE`: the methodology text is licensed under Creative Commons Attribution 4.0 International (CC BY 4.0), chosen by the methodology author over CC BY-SA 4.0 and CC BY-ND 4.0 — see `REVIEW_FINDINGS.md`, the R-08 update, for the comparison and rationale.
- `TRADEMARKS.md`: reserves the "AI Trust Graph" name and any future logo separately from the content license, so conformance and certification claims stay governed by Artifact #11 rather than freely reusable.
- All 12 methodology artifacts converted from source drafts into clean, publication-quality Markdown under `docs/`, each cross-linked back to the README index:
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
  - `12-ontology-specification.md` (added after the first eleven; see "Reading order" note below and `REVIEW_FINDINGS.md`, R-11)
- Independent ruthless-reviewer consistency pass across all 12 artifacts, recorded in `REVIEW_FINDINGS.md` (findings R-01 through R-11).
- `.github/ISSUE_TEMPLATE/`: a "Methodology finding" template (mirrors the R-01–R-11 format in `REVIEW_FINDINGS.md` so accepted reports fold straight into that record) and a lower-ceremony "General feedback" template, plus a `config.yml` routing open questions to Discussions and formal change proposals to `CONTRIBUTING.md`. This is a partial start on Roadmap Phase 3's change-control activation — review checklists and a public artifact registry are still not stood up.
- `CONTRIBUTING.md`: new guide mapping Artifact #11 §2.2's seven artifact classes to approval requirements, listing what's low-ceremony vs. what needs a formal change proposal, and restating the ExposureGraph exclusion boundary for contributors.

### Changed
- Renamed Domain 2 across all eight affected artifacts and the README from **"Trust and CloudHound"** to **"Trust and Privilege Paths"**, because "CloudHound" was structurally derivative of BloodHound, a specific real third-party attack-path tool, conflicting with this methodology's vendor-neutral, tool-independent mandate. Terminology only: the `ATG-TRU` control prefix, all twelve `ATG-TRU-001`–`012` control IDs, the `D2` maturity domain code, and `D2.1`–`D2.6` capability identifiers are unchanged, as is every control's and capability's underlying requirement, scoring, and gate logic. See `REVIEW_FINDINGS.md`, finding R-12.
- Manifesto (Artifact #1), Appendix B: redacted a list of internal, pre-existing source filenames per the Manifesto's own publication-boundary rules. **This is a redaction of internal file references only — no methodology semantics, terminology, or doctrine were altered.** See `REVIEW_FINDINGS.md`, finding R-01.
- Fixed a broken relative link: every `docs/*.md` file's "Back to methodology index" link pointed to `README.md` (which resolves to the non-existent `docs/README.md`) instead of `../README.md`. Corrected across all files. Purely a navigation fix — no content changed.
- Added Artifact #12, the Ontology Specification, after the initial eleven-artifact publish. It is filed last (`12-ontology-specification.md`) for repository stability, but its own governing document (Core Conceptual Model §0.2) places its correct *reading* position immediately after Artifact #2 — see the README's "Reading order" note and `REVIEW_FINDINGS.md`, finding R-11, for the full rationale, including how this addition bears on findings R-02, R-05 and R-06.
- Standardized the PEI formula's Formula Register entry (F-05) in the Scoring Framework on `Am`/`CR`, matching the Reference Assessment Repository and the spelled-out formula everywhere else. Notation only; no computed value changes. See `REVIEW_FINDINGS.md`, R-03.
- Restored phase-identifying headers (`Phase 1 — Initiate` through `Phase 13 — Reassess`) in the Assessment Methodology, numbered to match §0.11's table. These had been silently dropped by the original docx-to-Markdown conversion (an umbrella heading with numbered children is dropped, per this repository's own established convention) and their absence was worse than the numbering mismatch originally flagged — see `REVIEW_FINDINGS.md`, R-04, for the full account. No phase content, order, or requirements changed.

### Known issues (not yet fixed — see REVIEW_FINDINGS.md)
- Path-state taxonomy: Core Conceptual Model and now the Ontology Specification (Artifact #12) both define 8 states (including `Residual`); Scoring Framework and Master Control Library define 7 (R-02, updated by R-11). Unresolved pending an author decision.
- Artifact precedence/dependency chain is now worded five different ways across five separate artifacts, including the newly added Ontology Specification (R-05, updated by R-11). "Ontology" in the Core Conceptual Model's chain is now confirmed to be Artifact #12; "Domain Guides" remains an unmapped stage.
- Core Conceptual Model is versioned 1.1 while every other artifact in the bundle, including the newly added Ontology Specification, is 1.0, with no top-level release manifest reconciling the two (R-06, updated by R-11).
- `SECURITY.md` is not present, though the Manifesto's own Appendix B publication-acceptance criteria call for it (R-08). (`LICENSE` and `TRADEMARKS.md` are now added — see Added, above.)

### Not yet done
- Independent chief-product-architecture review, AI-security architecture review, employer/IP/confidentiality review, and legal approval of the newly chosen licence/trademark decision all remain **pending** on every artifact — see each artifact's closing approval table and `README.md`'s Status section.
- Certification readiness (Artifact #11) is defined but no certification scheme has been established, reviewed, or launched, and none is scheduled by this changelog.

---

## Versioning note

This project has not yet cut a tagged release. Everything above is grouped under `[Unreleased]` deliberately: none of it should be represented as a finished, reviewed, or certified "v1.0" until the gates listed in `ROADMAP.md` close. When the first tagged release is cut, this changelog will record the exact version of every one of the 11 artifacts included in it, resolving the version-manifest gap noted in `REVIEW_FINDINGS.md`, finding R-06.
