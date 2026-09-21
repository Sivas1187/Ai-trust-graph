[← Back to methodology index](README.md)

# Roadmap

This roadmap tracks what stands between the current state of this repository and a genuine, defensible "AI Trust Graph Methodology v1.0" public release — not just a repository that looks finished.

## Where things stand today

All eleven methodology artifacts have been converted from their source drafts into publication-quality Markdown, cross-linked, and organized into this repository's structure. The core governance files requested for this repository — README, CONTRIBUTING, CODE_OF_CONDUCT, CHANGELOG, and this roadmap — exist. An independent consistency review has been performed and its findings are recorded in [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md).

**None of this constitutes public release readiness.** Every artifact's own closing approval record says so explicitly, and this roadmap should be read alongside that honesty, not instead of it.

## Phase 1 — Content integrity (in progress)

- [x] Convert all 11 source artifacts to clean, publication-quality Markdown with no semantic changes.
- [x] Cross-link artifacts and build a navigable README index.
- [x] Run an independent, ruthless consistency review across all 11 artifacts ([REVIEW_FINDINGS.md](REVIEW_FINDINGS.md)).
- [ ] **Resolve the two Blocking-severity open findings that require an author decision:** the path-state taxonomy discrepancy ([R-02](REVIEW_FINDINGS.md#r-02--path-state-taxonomy-8-states-vs-7-states-blocking)) and the version-skew between the Core Conceptual Model (v1.1) and the rest of the bundle (v1.0) ([R-06](REVIEW_FINDINGS.md#r-06--version-skew-core-conceptual-model-is-v11-everything-else-is-v10-blocking)).
- [ ] Resolve the three Should-fix findings (R-03 formula notation, R-04 phase numbering, R-05 precedence-chain wording) as patch-level corrections.
- [ ] Publish a release manifest pinning the exact version of every artifact that constitutes "Methodology v1.0" (see R-06).

## Phase 2 — Legal and governance gates (not started)

Per the Manifesto's own Appendix B publication-acceptance criteria and Governance & Certification Model §0.15 ("External validation gate"), the following must close before this can be represented as a genuine public release rather than a release candidate:

- [ ] **Employer / IP / confidentiality review** — confirm ownership and permission to publish every artifact, per every artifact's own approval table.
- [ ] **Independent chief-product-architecture review** — currently "internal author-loop completed" only, on every artifact.
- [ ] **Independent AI-security architecture review** — same status.
- [ ] **Licence and trademark approval** — choose and approve an open-source licence; add `LICENSE` ([R-08](REVIEW_FINDINGS.md#r-08--governance-required-repository-files-not-present-blocking)).
- [ ] **Security disclosure process** — add `SECURITY.md` for the repository itself ([R-08](REVIEW_FINDINGS.md#r-08--governance-required-repository-files-not-present-blocking)).
- [ ] **Legal review of external standards references** — confirm the ISO/IEC and Singapore Accreditation Council references in the Governance Model's source register (Artifact #11, Appendix A.7) require no further permission or reproduction review ([R-10](REVIEW_FINDINGS.md#r-10--governance-model-cites-real-external-standards-should-fix)).

## Phase 3 — Governance activation (not started)

Artifact #11 defines a full governance operating model — a Methodology Steward, Governance Council, Technical Architecture Board, AI Security Review Board, Certification Scheme Committee, Impartiality Committee, Appeals Panel, and Secretariat — none of which currently exist as constituted bodies. Until they do, the methodology author is acting as a stand-in for all of them, which Artifact #11 itself flags as a temporary and non-ideal state.

- [ ] Appoint or recruit initial members for the Technical Architecture Board and AI Security Review Board.
- [ ] Stand up the change-control process described in Artifact #11 §2 for real (issue templates, review checklists, a public artifact registry).
- [ ] Decide whether and when to pursue any of the certification pathways Artifact #11 describes as *readiness*, not authorization — persons, processes, services, or tools. **This roadmap does not commit to launching any certification scheme.** Artifact #11 is explicit that certification readiness is not certification, and that decision belongs to a properly constituted, impartial Governance Council and Certification Scheme Committee, not to a roadmap item.

## Phase 4 — Ecosystem (not started, exploratory)

- [ ] Conformance test vectors and a reference schema for tools that want to claim method-, assessment-, reporting-, or tool-compatibility (Artifact #11 §4 and §7).
- [ ] A public directory of authorized assessors, once the competence and authorization model in Artifact #11 §3 is operational.
- [ ] Sector or technology extensions (Artifact #11 §8.9–8.10), each requiring its own expert review and staying outside the canonical core.

## Explicitly out of scope, permanently

- **ExposureGraph** in any form — implementation, architecture, algorithms, or commercial workflow. It is a separate product and will never appear in this roadmap as something this repository builds toward.
- Any feature whose only purpose is to produce a single overall AI trust score. The methodology's "no overall trust score" doctrine (Scoring Framework) is a permanent design decision, not a v1.0 limitation to be lifted later.
