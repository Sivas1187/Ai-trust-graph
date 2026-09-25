[← Back to methodology index](README.md)

# Changelog

All notable changes to this repository are recorded here. This changelog tracks the **repository** (structure, formatting, governance files, and cross-artifact consistency work) — it is not a substitute for the semantic-versioning history of each individual artifact, which is owned by that artifact's own front matter and, going forward, by the change-control process in [Artifact #11 §2](docs/11-governance-and-certification-model.md).

The format loosely follows [Keep a Changelog](https://keepachangelog.com/); dates are in `YYYY-MM-DD`.

## [Unreleased]

### Added
- [METHODOLOGY_MANIFEST.md](METHODOLOGY_MANIFEST.md): canonical repository-wide authority/dependency map, reading order, bundle identifier `1.0-rc.1`, and exact version/Git-blob pins for all twelve core artifacts plus the Phase 2 companion. Resolves R-05/R-06.
- **Phase 2 formally opened.** `docs/13-reference-graph-schema-and-query-library.md`: a non-normative companion consolidating the ontology/control graph vocabulary and providing illustrative **GQL-style** query patterns informed by ISO/IEC 39075. The examples are not claimed as parser-validated ISO GQL. It carries no conformance weight and creates no dependency on ExposureGraph. See R-13/R-21.
- Artifact #10 Appendix B: PEI boundary vectors across all four bands, UNKNOWN/Invalidated tests, residual/alternate-path cases, an M5 positive/false-positive calibration pair, and a blinded inter-assessor reproducibility protocol (R-15/R-16/R-22).
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
- **Bundle `1.0-rc.2` — formal control-conclusion casing normalized from `Unknown` to `UNKNOWN`** for cross-artifact consistency. The control-conclusion value is now written `UNKNOWN` in Artifact #2 §7.3 (Control state and dependency) and Artifact #12 §10.6 (Control conclusion states), matching Artifact #5 §0.8. The same value is aligned in the vocabulary reproduced in non-normative Artifact #13. `UNKNOWN` is the exact canonical non-numeric assurance token for unresolved assurance due to absent, insufficient or materially conflicting evidence. It remains non-numeric and is never coerced to zero, fail, safe, Not Applicable, low risk or any other numeric or result state. **This is a conformance/casing correction only, with no semantic, scoring, evidence, maturity, path or governance change.** Ordinary prose and canonical titles that use the English word "Unknown" (e.g. `D1.5 Unknown, orphan and lifecycle management`) are unchanged, as is the reachability-form value `Unknown` in Artifact #2 §6.1, which is not a control conclusion. [METHODOLOGY_MANIFEST.md](METHODOLOGY_MANIFEST.md) bumps the bundle identifier from `1.0-rc.1` to `1.0-rc.2` and re-pins the Git blob SHAs of Artifacts #2, #12 and #13. Per Artifact #11 §2.3 (a patch change is a defect, typo or non-semantic clarification), the affected artifacts receive patch-version increments: Artifact #2 `1.1` → `1.1.1`, Artifact #12 `1.0` → `1.0.1`, Artifact #13 `0.2` → `0.2.1`. All other artifact versions are unchanged.
  - **Compatibility/migration:** Existing records produced against bundle 1.0-rc.1 using the formal ControlConclusionState token "Unknown" remain historically tied to that bundle. An implementation explicitly migrating such records to 1.0-rc.2 may translate that control-conclusion token to "UNKNOWN". No reassessment, score change or semantic reinterpretation is implied.
- PEI reachability no longer encodes UNKNOWN/disproved as numeric zero: determinate active reachability is 1-4, UNKNOWN blocks a final point PEI, disproved reachability invalidates the path, and the determinate active-path PEI range is 7-62 (R-14).
- L4 Tool-compatible is explicitly unavailable until approved normative schemas and conformance test vectors are published; Artifact #13 cannot satisfy that gate (R-19/R-20).
- Added the explicit six-stage conceptual to thirteen-phase execution lifecycle crosswalk (R-18).
- Resolved R-02 by separating **path validation state** from **path role**. `PathState` is now the seven-value validation taxonomy (Candidate, Topological, Plausible, Validated, Exploitable, Controlled, Invalidated), while `PathRole` is Primary, Alternate or Residual. A residual path therefore retains an independent validation state. No PEI, control, evidence-grade, maturity or gate logic changed.
- Renamed Domain 2 across all eight affected artifacts and the README from **"Trust and CloudHound"** to **"Trust and Privilege Paths"**, because "CloudHound" was structurally derivative of BloodHound, a specific real third-party attack-path tool, conflicting with this methodology's vendor-neutral, tool-independent mandate. Terminology only: the `ATG-TRU` control prefix, all twelve `ATG-TRU-001`–`012` control IDs, the `D2` maturity domain code, and `D2.1`–`D2.6` capability identifiers are unchanged, as is every control's and capability's underlying requirement, scoring, and gate logic. See `REVIEW_FINDINGS.md`, finding R-12.
- Manifesto (Artifact #1), Appendix B: redacted a list of internal, pre-existing source filenames per the Manifesto's own publication-boundary rules. **This is a redaction of internal file references only — no methodology semantics, terminology, or doctrine were altered.** See `REVIEW_FINDINGS.md`, finding R-01.
- Fixed a broken relative link: every `docs/*.md` file's "Back to methodology index" link pointed to `README.md` (which resolves to the non-existent `docs/README.md`) instead of `../README.md`. Corrected across all files. Purely a navigation fix — no content changed.
- Added Artifact #12, the Ontology Specification, after the initial eleven-artifact publish. It is filed last (`12-ontology-specification.md`) for repository stability, but its own governing document (Core Conceptual Model §0.2) places its correct *reading* position immediately after Artifact #2 — see the README's "Reading order" note and `REVIEW_FINDINGS.md`, finding R-11, for the full rationale, including how this addition bears on findings R-02, R-05 and R-06.
- Standardized the PEI formula's Formula Register entry (F-05) in the Scoring Framework on `Am`/`CR`, matching the Reference Assessment Repository and the spelled-out formula everywhere else. Notation only; no computed value changes. See `REVIEW_FINDINGS.md`, R-03.
- Restored phase-identifying headers (`Phase 1 — Initiate` through `Phase 13 — Reassess`) in the Assessment Methodology, numbered to match §0.11's table. These had been silently dropped by the original docx-to-Markdown conversion (an umbrella heading with numbered children is dropped, per this repository's own established convention) and their absence was worse than the numbering mismatch originally flagged — see `REVIEW_FINDINGS.md`, R-04, for the full account. No phase content, order, or requirements changed.

### Known issues / external gates (not yet closed — see REVIEW_FINDINGS.md)
- Independent inter-assessor reproducibility has not yet been empirically demonstrated. Artifact #10 Appendix B.4 defines the protocol; R-16 remains an external validation gate.
- `SECURITY.md` is not present, though the Manifesto's own Appendix B publication-acceptance criteria call for it (R-08). (`LICENSE` and `TRADEMARKS.md` are present.)

### Not yet done
- Independent chief-product-architecture review, AI-security architecture review, inter-assessor reproducibility execution, employer/IP/confidentiality review, and legal approval of the licence/trademark position remain **pending** — see artifact approval tables, Artifact #10 Appendix B.4 and `README.md` Status.
- Certification readiness (Artifact #11) is defined but no certification scheme has been established, reviewed, or launched, and none is scheduled by this changelog.

---

## Versioning note

This project has not yet cut a tagged release. Everything above remains under `[Unreleased]`: it must not be represented as a finished, independently validated or certified v1.0 until the gates in `ROADMAP.md` close. The exact current release-candidate contents are already pinned in `METHODOLOGY_MANIFEST.md`; a future tagged release must update that manifest rather than reconstructing versions retrospectively.
