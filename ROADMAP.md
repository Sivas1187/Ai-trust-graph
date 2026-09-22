[← Back to methodology index](README.md)

# Roadmap

This roadmap tracks what stands between the current state of this repository and a genuine, defensible "AI Trust Graph Methodology v1.0" public release — not just a repository that looks finished.

## Where things stand today

All twelve methodology artifacts have been converted from their source drafts into publication-quality Markdown, cross-linked, and organized into this repository's structure — including the Ontology Specification (Artifact #12), added after the initial eleven-artifact publish and filed last for repository stability even though it reads right after Artifact #2 (see the README's "Reading order" note and [REVIEW_FINDINGS.md, R-11](REVIEW_FINDINGS.md#r-11--ontology-specification-added-as-artifact-12-new-evidence-bearing-on-r-02-r-05-and-r-06-should-fix--informational)). The core governance files requested for this repository — README, CONTRIBUTING, CODE_OF_CONDUCT, CHANGELOG, and this roadmap — exist. An independent consistency review has been performed and its findings are recorded in [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md).

**None of this constitutes public release readiness.** Every artifact's own closing approval record says so explicitly, and this roadmap should be read alongside that honesty, not instead of it.

## Phase 1 — Content integrity (in progress)

- [x] Convert all 11 source artifacts to clean, publication-quality Markdown with no semantic changes.
- [x] Cross-link artifacts and build a navigable README index.
- [x] Run an independent, ruthless consistency review across all 11 artifacts ([REVIEW_FINDINGS.md](REVIEW_FINDINGS.md)).
- [x] Resolve R-02 by separating seven path validation states from the orthogonal path roles Primary, Alternate and Residual.
- [x] Resolve R-06 with [METHODOLOGY_MANIFEST.md](METHODOLOGY_MANIFEST.md), bundle identifier `1.0-rc.1`, and exact artifact version/Git-blob pins.
- [x] Resolve R-03 (PEI formula notation, standardized on `Am`/`CR`) and R-04 (Assessment Methodology phase headers, restored and numbered 1–13) as patch-level corrections.
- [x] Resolve R-05 by centralizing authority/dependencies in [METHODOLOGY_MANIFEST.md](METHODOLOGY_MANIFEST.md) and classifying future Domain Guides as Extension artifacts, not core v1.0 dependencies.
- [x] Publish the release-candidate manifest with exact artifact versions and Git blob identifiers.
- [x] Resolve R-14: UNKNOWN is non-numeric for PEI; disproved reachability invalidates the path; determinate active PEI range is 7-62.
- [x] Add PEI threshold/adversarial vectors, residual/alternate-path cases and an M5 calibration pair (R-15/R-22).
- [x] Add the six-stage-to-thirteen-phase lifecycle crosswalk (R-18).
- [x] Gate L4 Tool-compatible until approved normative schemas and test vectors exist (R-19).

## Phase 2 — Legal and governance gates (not started)

Per the Manifesto's own Appendix B publication-acceptance criteria and Governance & Certification Model §0.15 ("External validation gate"), the following must close before this can be represented as a genuine public release rather than a release candidate:

- [ ] **Employer / IP / confidentiality review** — confirm ownership and permission to publish every artifact, per every artifact's own approval table.
- [ ] **Independent chief-product-architecture review** — currently "internal author-loop completed" only, on every artifact.
- [ ] **Independent AI-security architecture review** — same status.
- [ ] **Independent inter-assessor reproducibility study** — execute Artifact #10 Appendix B.4 with independent assessors and publish agreement/disagreement results. Until complete, no empirical reproducibility claim is permitted (R-16).
- [x] **Licence and trademark decision** — CC BY 4.0 chosen for the methodology text (`LICENSE`); "AI Trust Graph" name/marks reserved separately (`TRADEMARKS.md`). Still needs the employer/IP/confidentiality review below to be legally final ([R-08](REVIEW_FINDINGS.md#r-08--governance-required-repository-files-not-present-blocking)).
- [ ] **Security disclosure process** — add `SECURITY.md` for the repository itself ([R-08](REVIEW_FINDINGS.md#r-08--governance-required-repository-files-not-present-blocking)).
- [ ] **Legal review of external standards references** — confirm the ISO/IEC and Singapore Accreditation Council references in the Governance Model's source register (Artifact #11, Appendix A.7) require no further permission or reproduction review ([R-10](REVIEW_FINDINGS.md#r-10--governance-model-cites-real-external-standards-should-fix)).

## Phase 3 — Governance activation (not started)

Artifact #11 defines a full governance operating model — a Methodology Steward, Governance Council, Technical Architecture Board, AI Security Review Board, Certification Scheme Committee, Impartiality Committee, Appeals Panel, and Secretariat — none of which currently exist as constituted bodies. Until they do, the methodology author is acting as a stand-in for all of them, which Artifact #11 itself flags as a temporary and non-ideal state.

- [ ] Appoint or recruit initial members for the Technical Architecture Board and AI Security Review Board.
- [x] Stand up structured issue intake for real: a "Methodology finding" template (mirroring the R-01–R-11 format) and a lower-ceremony "General feedback" template, both under `.github/ISSUE_TEMPLATE/`, with a config pointing formal change proposals to `CONTRIBUTING.md` and open questions to Discussions.
- [ ] Review checklists and a public artifact registry (the remainder of Artifact #11 §2's change-control process) are still not stood up.
- [ ] Decide whether and when to pursue any of the certification pathways Artifact #11 describes as *readiness*, not authorization — persons, processes, services, or tools. **This roadmap does not commit to launching any certification scheme.** Artifact #11 is explicit that certification readiness is not certification, and that decision belongs to a properly constituted, impartial Governance Council and Certification Scheme Committee, not to a roadmap item.

## Phase 4 — Ecosystem (not started, exploratory)

- [x] Publish a **non-normative** Phase 2 reference graph schema/query companion for implementation guidance (Artifact #13).
- [ ] Publish **approved normative** machine-readable schemas and conformance test vectors before L4 Tool-compatible becomes claimable (Artifact #11 §4 and §7; R-19).
- [ ] A public directory of authorized assessors, once the competence and authorization model in Artifact #11 §3 is operational.
- [ ] Sector or technology extensions (Artifact #11 §8.9–8.10), each requiring its own expert review and staying outside the canonical core.

## Explicitly out of scope, permanently

- **ExposureGraph** in any form — implementation, architecture, algorithms, or commercial workflow. It is a separate product and will never appear in this roadmap as something this repository builds toward.
- Any feature whose only purpose is to produce a single overall AI trust score. The methodology's "no overall trust score" doctrine (Scoring Framework) is a permanent design decision, not a v1.0 limitation to be lifted later.
