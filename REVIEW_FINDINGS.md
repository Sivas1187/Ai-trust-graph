[← Back to methodology index](README.md)

# Independent Review Findings

This document records an independent, ruthless-reviewer pass across all eleven AI Trust Graph artifacts, conducted before public release. It follows the project's own standing rule: **no methodology semantics, terminology, control definition, maturity level, evidence grade, or scoring logic may be silently changed.** Every finding below either (a) documents a change already made and why, or (b) flags an inconsistency, gap, or open question for the methodology author and independent reviewers to resolve — it does not resolve them unilaterally.

Findings are numbered `R-NN` in order of discovery and are cross-referenced from the artifacts where relevant (the Manifesto's Appendix B redaction notice, for example, points back to `R-01`).

Severity is rated as **Blocking** (must be resolved before v1.0 public release), **Should-fix** (undermines internal consistency but does not misstate the methodology), or **Minor** (cosmetic or low-impact).

---

## R-01 — Manifesto internal-source redaction (Blocking, resolved)

**Artifact:** [Manifesto](docs/01-manifesto.md), Appendix B.

**Finding:** The source draft named specific internal, pre-existing working files as "internal consolidation sources reviewed for this draft" — including employer/consulting-style methodology drafts, an internal ontology file, an internal toolkit spreadsheet, and internal product-methodology documents.

**Why this matters:** Per the Manifesto's own §12 ("Open methodology and protected product boundary") and Appendix B ("Public boundary: No ExposureGraph product architecture, confidential client information or unapproved employer content is included"), the literal filenames of unreleased internal source material must not appear in a public repository. Publishing that list would itself be a publication-boundary violation, and could reference material whose ownership, employer status, or licensing has not been cleared.

**Action taken:** The list of internal filenames was removed from the public Manifesto text. **This is a redaction of internal file references for publication-boundary compliance, not a change to methodology semantics, terminology, or doctrine.** No concept, principle, or declaration in the Manifesto has been altered.

**Status:** Resolved by redaction. Still requires legal/employer/IP review (Appendix B) to confirm whether any derivation acknowledgment is appropriate in the redacted list's place before final release.

---

## R-02 — Path-state taxonomy: 8 states vs. 7 states (Blocking)

**Artifacts:** [Core Conceptual Model](docs/02-core-conceptual-model.md) §6.3 vs. [Scoring Framework](docs/04-scoring-framework.md) §4.2 and [Master Control Library](docs/05-master-control-library.md) (validation section).

**Finding:** The Core Conceptual Model's path-state taxonomy (§6.3, "Path state taxonomy") defines **eight** states:

> Candidate, Topological, Plausible, Validated, Exploitable, Controlled, **Residual**, Invalidated

The Scoring Framework's path-eligibility table (§4.2) and the Master Control Library's validation guidance instead use a **seven**-state taxonomy that omits `Residual`:

> Candidate, Topological, Plausible, Validated, Exploitable, Controlled, Invalidated

The seven-state version is the one used consistently downstream — in the Assessor Handbook, the Reporting Standard, and all twelve cases in the Reference Assessment Repository. `Residual` never reappears anywhere in Artifacts #4 through #10.

**Why this matters:** Path state is a load-bearing concept — it gates what conclusions a report may draw (§9 of the Reporting Standard) and what a control result may claim (Master Control Library). A reader who learns the taxonomy from the Core Conceptual Model will expect an eighth state that the rest of the methodology does not implement or ever produce.

**Recommendation:** Determine which is canonical. Two honest options: (a) `Residual` is a genuine state that the Scoring Framework, Master Control Library, and everything downstream should be updated to include (Residual exposure — "a route remains after existing or proposed intervention" — is conceptually distinct from `Controlled` and arguably worth keeping); or (b) `Residual` was dropped intentionally when the seven-state model was finalized and the Core Conceptual Model's §6.3 is the artifact that needs a patch release. Either way, this needs a decision, not a silent pick — it is exactly the kind of semantic question this review is not authorized to resolve on its own.

---

## R-03 — PEI formula: three different variable-naming conventions (Should-fix)

**Artifacts:** [Scoring Framework](docs/04-scoring-framework.md) §formula callout and Formula Register (F-05); [Reference Assessment Repository](docs/10-reference-assessment-repository.md), Appendix A.1.

**Finding:** The identical Path Exposure Index formula is written three different ways across the corpus:

1. Spelled out in the Scoring Framework's formula callout: *"PEI = 4 × Consequence + 3 × Reachability + 3 × Authority + 2 × Amplification + 3 × Control Resistance."*
2. Abbreviated in the Scoring Framework's own Formula Register, entry F-05: *"PEI = 4C + 3R + 3A + 2B + 3K"* — using **`B`** for Amplification and **`K`** for Control Resistance, both non-mnemonic.
3. Abbreviated differently in the Reference Assessment Repository's cross-case register, Appendix A.1: *"PEI = 4C + 3R + 3A + 2Am + 3CR"* — using **`Am`** and **`CR`**, which are mnemonic and match the spelled-out labels.

**Why this matters:** A reader working from the Formula Register alone has no way to recover what `B` and `K` stand for without cross-referencing a different artifact's appendix. This is a purely notational defect — the underlying arithmetic is identical and consistent everywhere it's actually computed (all twelve reference cases calculate PEI correctly against the spelled-out formula) — but it is the kind of small inconsistency a "ruthless" reviewer is asked to catch before a methodology calls itself publication-ready.

**Recommendation:** Standardize the Formula Register (F-05) on `Am` / `CR`, matching Artifact #10 and the spelled-out form, or add a one-line legend to F-05 defining `B` and `K`. This is a patch-level (non-semantic) correction under the versioning rules in Artifact #11 §2.3.

---

## R-04 — Assessment Methodology: phase numbering is off by one (Should-fix)

**Artifact:** [Assessment Methodology](docs/07-assessment-methodology.md), §0.11 vs. the phase section headers throughout the document.

**Finding:** §0.11 ("Assessment lifecycle overview") states: *"The lifecycle contains thirteen controlled phases."* Its accompanying table lists phases numbered 1 through 13. However, every actual phase section in the body of the document is headed "PHASE 2: INITIATE" through "PHASE 14: REASSESS" — the same thirteen phases, but consistently numbered 2 through 14 rather than 1 through 13.

**Why this matters:** This is a labeling/numbering mismatch, not a structural or semantic one — the same thirteen named phases (Initiate → Reassess) appear in the same order in both places, and no phase is missing, duplicated, or renamed. But it will confuse anyone cross-referencing §0.11's table against the document's own running headers, and it should not survive into a "publication-ready" release.

**Recommendation:** Renumber either the §0.11 table (to 2–14) or the phase headers (to 1–13) so the two agree. This is a patch-level correction — it does not change any phase's content, order, or requirements.

---

## R-05 — Artifact precedence and dependency chain stated four different ways (Should-fix)

**Artifacts:** [Core Conceptual Model](docs/02-core-conceptual-model.md) §0.2; [Maturity Model](docs/03-maturity-model.md) header field; [Scoring Framework](docs/04-scoring-framework.md) header field; [Assessment Methodology](docs/07-assessment-methodology.md) §0.2.

**Finding:** Four artifacts each state the dependency/precedence relationship among artifacts differently:

- **Core Conceptual Model §0.2** gives an eight-stage chain: *"Manifesto → Core Conceptual Model → Ontology → Domain Guides → Controls and Tests → Maturity and Scoring → Assessor Handbook → Reports and Tooling."* Two of these stages — "Ontology" and "Domain Guides" — do not correspond to the title of any of the eleven published artifacts; they appear to be internal sub-components of the Core Conceptual Model and Master Control Library rather than separate deliverables.
- **Maturity Model's** header field states only: *"Depends on: AI Trust Graph Manifesto v1.0 and Core Conceptual Model v1.1"* — two dependencies, version-pinned.
- **Scoring Framework's** header field states: *"Depends on: Manifesto v1.0; Core Conceptual Model v1.1; Maturity Model v1.0"* — three dependencies, version-pinned, adding the Maturity Model.
- **Assessment Methodology §0.2** gives a narrative description instead of a chain: *"The Manifesto supplies commitments. The Core Conceptual Model supplies canonical meaning. The Maturity, Scoring, Control and Evidence artifacts supply operational rules."* — grouping four artifacts together as co-equal "operational rules" rather than ordering them.

Meanwhile, the **Reference Assessment Repository** and **Governance & Certification Model** simply cite "Artifacts #1-#9" / "Artifacts #1-#10" with no version pinning at all.

**Why this matters:** None of these four statements directly contradicts another on substance — they're all consistent with "Manifesto first, Core Conceptual Model second, then the operational artifacts" — but no two of them are worded or scoped identically, and the "Ontology" / "Domain Guides" stages in the Core Conceptual Model's chain don't map cleanly onto the eleven-artifact structure the rest of the repository uses. A reader trying to construct a single authoritative dependency graph cannot do it from any one artifact alone.

**Recommendation:** Adopt one canonical dependency statement — ideally as a machine-checkable manifest per Artifact #11's registry model (§0.6, §2.1) — and have every artifact's header field cite it rather than restate it. Decide explicitly whether "Ontology" and "Domain Guides" are real, separately-versioned sub-artifacts or just internal section names within the Core Conceptual Model and Master Control Library, and make the Core Conceptual Model's §0.2 chain match whichever is true.

---

## R-06 — Version skew: Core Conceptual Model is v1.1, everything else is v1.0 (Blocking)

**Artifacts:** [Core Conceptual Model](docs/02-core-conceptual-model.md) (v1.1) vs. all other ten artifacts (v1.0).

**Finding:** Every artifact in this repository is versioned 1.0 except the Core Conceptual Model, which is versioned 1.1 (confirmed both in its own front matter and in the "Depends on" fields of the Maturity Model and Scoring Framework, which both correctly cite it as "Core Conceptual Model v1.1"). The project's stated objective is to "Publish AI Trust Graph Methodology v1.0" as a single release.

**Why this matters:** Publishing a bundle called "v1.0" that contains one internally-consistent v1.1 component and ten v1.0 components is not wrong, exactly — the Maturity Model and Scoring Framework demonstrate that they were correctly updated to track the Core Conceptual Model's revision — but it means "AI Trust Graph Methodology v1.0" is not itself a well-defined version number for the bundle as a whole under the semantic-versioning rules the methodology itself lays out in Governance & Certification Model §2.3. There is no top-level release manifest anywhere in the repository that says, authoritatively, "AI Trust Graph Methodology v1.0 = Manifesto v1.0 + Core Conceptual Model v1.1 + Maturity Model v1.0 + ... ".

**Recommendation:** Either (a) bump the Core Conceptual Model back to 1.0 for the initial public release and treat its current content as the actual v1.0 baseline (if no prior public v1.0 of that artifact ever existed, calling it 1.1 may itself be a labeling leftover from internal drafting), or (b) keep 1.1 and publish an explicit release manifest — e.g., in CHANGELOG.md — pinning the exact version of every artifact that constitutes "Methodology v1.0." Option (b) is consistent with, and arguably required by, Governed-object registry rules already defined in Artifact #11 §0.6.

---

## R-07 — Universal "Pending" approval status (Blocking, by design — must not be misrepresented)

**Artifacts:** All eleven.

**Finding:** Every single artifact's closing approval table shows the identical pattern: "Public-release candidate" status, methodology author's internal review complete, and every other line — independent architecture review, AI-security review, employer/IP/confidentiality review, licence/trademark approval, and (for Artifact #11) certification-scheme review and operational-certification launch — marked **Pending**.

**Why this matters:** This is not a defect in the writing; it is an honest and consistent status across the whole corpus, and it should stay that way until those reviews genuinely happen. The risk is purely at the publication layer: nothing about the polish of the converted Markdown, the professionalism of this repository structure, or the completeness of the eleven artifacts should be read by a visitor as implying those independent reviews have occurred. They have not.

**Recommendation:** Keep this fact prominent — it is stated in the top-level README's Status section and should stay there through every future release until the gates genuinely close. Do not remove or soften this language to make the repository look more "finished" than it is.

---

## R-08 — Governance-required repository files not present (Blocking)

**Artifact:** [Manifesto](docs/01-manifesto.md), Appendix B ("v1.0 publication acceptance criteria").

**Finding:** The Manifesto's own publication acceptance criteria state, verbatim: *"Governance | Repository includes license, code of conduct, contribution guide, security policy, changelog and release process."* Of these six items, this repository ships a code of conduct, a contribution guide, a changelog, and a release process (via the roadmap), but **does not ship a LICENSE file or a SECURITY.md.**

**Why this matters:** The methodology's own acceptance criteria — written by the same author, in the same artifact set — treat these as release-blocking, not optional. Adding either file with invented terms would itself violate the "never silently change" principle this review operates under (a license implies legal permissions the author hasn't yet granted; a security policy implies a disclosure process and commitments that don't yet exist).

**Recommendation:** Do not publish this repository as "public" (in the sense of being clonable, forkable, or reusable) until:
- **LICENSE** — the rights holder chooses and approves an open-source licence, per Governance & Certification Model §10.2, distinguishing methodology text, any future code/schemas, marks, and examples.
- **SECURITY.md** — a disclosure route is established for the repository itself (distinct from the AI-security subject matter the methodology assesses), per the Manifesto's own §"Establish a security disclosure route before accepting code or live connectors."

These are flagged here, in the README, and in ROADMAP.md rather than silently added.

---

## R-09 — Evidence Model: generic internal-toolkit reference (Minor)

**Artifact:** [Evidence Model](docs/06-evidence-model.md), Appendix A.7 ("Source and derivation register").

**Finding:** Appendix A.7 references an "AI Security Assessment Toolkit" as a source. This is a generic, descriptive name rather than an exact internal filename (unlike the filenames redacted under R-01), so it has been left in place. It is noted here for completeness.

**Recommendation:** Confirm during employer/IP review (Manifesto Appendix B) that this generic reference requires no further redaction or attribution.

---

## R-10 — Governance Model cites real external standards as boundary guidance (Should-fix)

**Artifact:** [Governance & Certification Model](docs/11-governance-and-certification-model.md), Appendix A.7 ("Source and derivation register").

**Finding:** Unlike every other artifact's source register (which cites only prior AI Trust Graph artifacts), Artifact #11's register explicitly names external, real-world standards and bodies as sources of "boundary guidance": Singapore Accreditation Council certification-body guidance, and the public accreditation descriptions associated with ISO/IEC 17021-1, ISO/IEC 17024, and ISO/IEC 17065.

**Why this matters:** This is very likely appropriate and low-risk — the register explicitly frames these as *pathway references* used to shape the certification-readiness boundary, not as reproduced standards text — but it is the one place in the entire corpus where real third-party named standards enter the methodology, and it should get specific legal attention rather than being swept into the same generic "employer/IP/confidentiality review — pending" line as everything else.

**Recommendation:** During legal/IP review, confirm explicitly that (a) no ISO copyrighted text is reproduced anywhere in Artifact #11 — a spot check during this conversion found none, only high-level structural references — and (b) naming these bodies and standards by name in a public methodology document doesn't require permission or a disclaimer beyond what's already in the "Constitutional boundary" language at the top of the artifact.

---

## Gaps

Summarizing R-08 for quick reference: this repository is intentionally missing a **LICENSE** and a **SECURITY.md**. Both are called for by the Manifesto's own Appendix B and are flagged rather than added, because adding either responsibly requires a decision only the rights holder can make.

## Summary table

| ID | Finding | Severity | Status |
| --- | --- | --- | --- |
| R-01 | Manifesto internal-source filenames redacted | Blocking | Resolved by redaction; legal review still pending |
| R-02 | Path-state taxonomy: 8 states (Core Conceptual Model) vs. 7 states (everywhere else) | Blocking | Open — needs an author decision |
| R-03 | PEI formula: `B`/`K` vs. `Am`/`CR` vs. spelled-out variable names | Should-fix | Open |
| R-04 | Assessment Methodology phases numbered 1–13 in §0.11 but headed 2–14 in the body | Should-fix | Open |
| R-05 | Artifact precedence/dependency chain stated four different ways | Should-fix | Open |
| R-06 | Core Conceptual Model at v1.1 while the bundle is called "v1.0" | Blocking | Open — needs a release-manifest decision |
| R-07 | Every artifact shows "Pending" for all independent reviews | Blocking (by design) | Must remain accurate, not be softened |
| R-08 | No LICENSE or SECURITY.md, though the Manifesto's own criteria require them | Blocking | Open — flagged, not silently added |
| R-09 | Evidence Model cites a generic "AI Security Assessment Toolkit" | Minor | Open — confirm during IP review |
| R-10 | Governance Model cites real external standards (SAC, ISO/IEC 17021-1/17024/17065) | Should-fix | Open — confirm during legal review |
