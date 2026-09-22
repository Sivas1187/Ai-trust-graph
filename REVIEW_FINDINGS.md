[← Back to methodology index](README.md)

# Independent Review Findings

This document records an independent, ruthless-reviewer pass across all twelve AI Trust Graph artifacts, conducted before public release. It follows the project's own standing rule: **no methodology semantics, terminology, control definition, maturity level, evidence grade, or scoring logic may be silently changed.** Every finding below either (a) documents a change already made and why, or (b) flags an inconsistency, gap, or open question for the methodology author and independent reviewers to resolve — it does not resolve them unilaterally.

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

**Update (R-11):** The newly added [Ontology Specification](docs/12-ontology-specification.md) (Artifact #12) independently states the same eight-state taxonomy, including `Residual` (§11.1, "State namespaces"; also §9.3). That makes it two artifacts (Core Conceptual Model and Ontology Specification) stating eight states against two (Scoring Framework and Master Control Library) stating seven. This is material new evidence toward option (a) above, but it is still a recommendation, not a resolution — see R-11 for the full accounting.

---

## R-03 — PEI formula: three different variable-naming conventions (Should-fix, resolved)

**Artifacts:** [Scoring Framework](docs/04-scoring-framework.md) §formula callout and Formula Register (F-05); [Reference Assessment Repository](docs/10-reference-assessment-repository.md), Appendix A.1.

**Finding:** The identical Path Exposure Index formula is written three different ways across the corpus:

1. Spelled out in the Scoring Framework's formula callout: *"PEI = 4 × Consequence + 3 × Reachability + 3 × Authority + 2 × Amplification + 3 × Control Resistance."*
2. Abbreviated in the Scoring Framework's own Formula Register, entry F-05: *"PEI = 4C + 3R + 3A + 2B + 3K"* — using **`B`** for Amplification and **`K`** for Control Resistance, both non-mnemonic.
3. Abbreviated differently in the Reference Assessment Repository's cross-case register, Appendix A.1: *"PEI = 4C + 3R + 3A + 2Am + 3CR"* — using **`Am`** and **`CR`**, which are mnemonic and match the spelled-out labels.

**Why this matters:** A reader working from the Formula Register alone has no way to recover what `B` and `K` stand for without cross-referencing a different artifact's appendix. This is a purely notational defect — the underlying arithmetic is identical and consistent everywhere it's actually computed (all twelve reference cases calculate PEI correctly against the spelled-out formula) — but it is the kind of small inconsistency a "ruthless" reviewer is asked to catch before a methodology calls itself publication-ready.

**Recommendation:** Standardize the Formula Register (F-05) on `Am` / `CR`, matching Artifact #10 and the spelled-out form, or add a one-line legend to F-05 defining `B` and `K`. This is a patch-level (non-semantic) correction under the versioning rules in Artifact #11 §2.3.

**Action taken (2026-09-22):** Formula Register F-05 in the [Scoring Framework](docs/04-scoring-framework.md) changed from `PEI = 4C + 3R + 3A + 2B + 3K` to `PEI = 4C + 3R + 3A + 2Am + 3CR`, with its legend updated from "B amplification, K control resistance" to "Am amplification, CR control resistance" — now identical to the Reference Assessment Repository's Appendix A.1 and the spelled-out formula everywhere else. Confirmed via corpus-wide search that no other `B`/`K` notation for this formula remained anywhere. **Notation only — the arithmetic, coefficients, and every computed PEI value in the corpus are unchanged.**

**Status:** Resolved.

---

## R-04 — Assessment Methodology: phase numbering is off by one (Should-fix, resolved)

**Artifact:** [Assessment Methodology](docs/07-assessment-methodology.md), §0.11 vs. the phase section headers throughout the document.

**Finding:** §0.11 ("Assessment lifecycle overview") states: *"The lifecycle contains thirteen controlled phases."* Its accompanying table lists phases numbered 1 through 13. However, every actual phase section in the body of the document is headed "PHASE 2: INITIATE" through "PHASE 14: REASSESS" — the same thirteen phases, but consistently numbered 2 through 14 rather than 1 through 13.

**Why this matters:** This is a labeling/numbering mismatch, not a structural or semantic one — the same thirteen named phases (Initiate → Reassess) appear in the same order in both places, and no phase is missing, duplicated, or renamed. But it will confuse anyone cross-referencing §0.11's table against the document's own running headers, and it should not survive into a "publication-ready" release.

**Recommendation:** Renumber either the §0.11 table (to 2–14) or the phase headers (to 1–13) so the two agree. This is a patch-level correction — it does not change any phase's content, order, or requirements.

**What was actually found when fixing this (2026-09-22):** The converted Markdown did not contain literal "PHASE 2: INITIATE"-style headers at all — this repository's docx-to-Markdown conversion drops an umbrella heading whenever it has numbered subsection children (the same rule visible in the Governance Model, where "Appendix A" is dropped in favor of "A.1", "A.2" ...). The source's "PHASE 2: INITIATE" heading had numbered children ("2.1 Charter and decision purpose," etc.), so it was silently dropped during the original conversion, leaving section blocks 2.1–2.4, 3.1–3.4, ... 14.1–14.4 with **no phase label or number visible anywhere in the body at all** — arguably a worse defect than the one originally described, since a reader now has no way to tell which decimal-numbered block is which named phase without manually matching topics against §0.11's table.

**Action taken:** Reinserted a phase-identifying heading immediately before each phase's first subsection, using the numbering already established as canonical in §0.11 (1–13, not the source draft's 2–14): `Phase 1 — Initiate` before §2.1, `Phase 2 — Scope` before §3.1, and so on through `Phase 13 — Reassess` before §14.1. This resolves the mismatch by adopting recommendation (b) above, and additionally restores the phase identification that the earlier conversion had inadvertently dropped. **No phase's content, order, entry conditions, gates, or requirements were changed — this is a heading/navigation addition only,** verified by confirming the phase names and their outcome descriptions match §0.11's table exactly for every phase.

**Status:** Resolved.

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

**Update (R-11):** The "Ontology" stage is now answered: it is a real, separately-versioned artifact, and has been published as Artifact #12, the [Ontology Specification](docs/12-ontology-specification.md). "Domain Guides" remains unanswered — the Ontology Specification is explicitly scoped to semantic/ontology content only and does not claim to be the Domain Guides artifact. The new artifact also adds a *fifth* distinct wording of the dependency relationship (a "Semantic authority" field plus a separate, unversioned "Consumes" list) — see R-11 for detail.

---

## R-06 — Version skew: Core Conceptual Model is v1.1, everything else is v1.0 (Blocking)

**Artifacts:** [Core Conceptual Model](docs/02-core-conceptual-model.md) (v1.1) vs. all other ten artifacts (v1.0).

**Finding:** Every artifact in this repository is versioned 1.0 except the Core Conceptual Model, which is versioned 1.1 (confirmed both in its own front matter and in the "Depends on" fields of the Maturity Model and Scoring Framework, which both correctly cite it as "Core Conceptual Model v1.1"). The project's stated objective is to "Publish AI Trust Graph Methodology v1.0" as a single release.

**Why this matters:** Publishing a bundle called "v1.0" that contains one internally-consistent v1.1 component and ten v1.0 components is not wrong, exactly — the Maturity Model and Scoring Framework demonstrate that they were correctly updated to track the Core Conceptual Model's revision — but it means "AI Trust Graph Methodology v1.0" is not itself a well-defined version number for the bundle as a whole under the semantic-versioning rules the methodology itself lays out in Governance & Certification Model §2.3. There is no top-level release manifest anywhere in the repository that says, authoritatively, "AI Trust Graph Methodology v1.0 = Manifesto v1.0 + Core Conceptual Model v1.1 + Maturity Model v1.0 + ... ".

**Recommendation:** Either (a) bump the Core Conceptual Model back to 1.0 for the initial public release and treat its current content as the actual v1.0 baseline (if no prior public v1.0 of that artifact ever existed, calling it 1.1 may itself be a labeling leftover from internal drafting), or (b) keep 1.1 and publish an explicit release manifest — e.g., in CHANGELOG.md — pinning the exact version of every artifact that constitutes "Methodology v1.0." Option (b) is consistent with, and arguably required by, Governed-object registry rules already defined in Artifact #11 §0.6.

**Update (R-11):** The newly added Ontology Specification (Artifact #12) is itself versioned 1.0 and explicitly cites "Core Conceptual Model v1.1" as an upstream dependency — the same correct pattern already followed by the Maturity Model and Scoring Framework. This is a third artifact confirming that the v1.1 revision was deliberate and isolated, which further supports resolving this via option (b) — an explicit release manifest — rather than rolling the Core Conceptual Model back to 1.0.

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

**Update — LICENSE and TRADEMARKS.md added (2026-09-22):** The methodology author chose **CC BY 4.0** for the methodology text (README and `docs/*.md`) — permitting sharing and adaptation, including commercially, with attribution — over CC BY-SA 4.0 (same, plus a ShareAlike requirement on modified redistributions) and CC BY-ND 4.0 (rejected as a fit: it would have conflicted with this repository's own `CONTRIBUTING.md` change-proposal process and Artifact #11's extension model, both of which assume the community can propose modified versions). `LICENSE` records this, including explicit carve-outs for the "AI Trust Graph" name/marks, any future Phase 2 code/schemas, and ExposureGraph.

The author also chose to reserve the **"AI Trust Graph" name and any future logo separately** from the content license, recorded in the new `TRADEMARKS.md`. Rationale: Artifact #11 defines a conformance-level (L0–L5) and certification vocabulary that only means something if claims like "AI Trust Graph Certified" stay governed rather than freely reusable by anyone who copies the CC-BY-licensed text — a purely content-permissive license, on its own, would have let any fork or competing tool make such claims without passing through Artifact #11's certification model at all.

**This does not close the gap.** Per this repository's own standing rule, choosing a license and drafting the trademark notice is not the same as clearing the employer/IP/confidentiality review that Manifesto Appendix B and this repository's own `ROADMAP.md` (Phase 2) require before the license choice is legally final. Both files are added and recorded here as candidates the author has approved for publication, not as a substitute for that review. **SECURITY.md remains outstanding** — see the follow-up item below.

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

## R-11 — Ontology Specification added as Artifact #12; new evidence bearing on R-02, R-05 and R-06 (Should-fix / Informational)

**Artifact:** [Ontology Specification](docs/12-ontology-specification.md) (new), cross-referencing [Core Conceptual Model](docs/02-core-conceptual-model.md), [Scoring Framework](docs/04-scoring-framework.md), [Master Control Library](docs/05-master-control-library.md), and [Governance & Certification Model](docs/11-governance-and-certification-model.md).

**Finding:** The author supplied a previously unpublished "AI Trust Graph Ontology Specification v1.0" (self-identified internally as "Companion identifier O1"), which formalizes the corpus's canonical entity types (over 100), relationship predicates (96), states and enumerations into a single human-readable registry, cross-checked against the Master Control Library's actual node vocabulary. It has been converted and added to this repository as **Artifact #12**, `docs/12-ontology-specification.md`, following the same placement decision recorded below. Four things came out of reviewing it against the rest of the corpus:

1. **It is the real artifact behind R-05's dangling "Ontology" reference.** Core Conceptual Model §0.2 names "Ontology" as a stage in its precedence chain with no corresponding published artifact. It is this document. "Domain Guides," the other unmapped stage in that same chain, is still unaccounted for — this document is explicitly scoped to ontology/semantics only and does not claim that role.
2. **It restates the eight-state path taxonomy, including `Residual`** (§9.3 and §11.1), agreeing with the Core Conceptual Model and disagreeing with the Scoring Framework and Master Control Library's seven-state version — see the R-02 update above. It does not resolve R-02; it makes the count 2-to-2 among artifacts that state the full taxonomy, which is new information for whoever decides it.
3. **It restates the artifact-dependency relationship a fifth way**: a "Semantic authority" field ("Constrained by AI Trust Graph Manifesto v1.0 and Core Conceptual Model v1.1") plus a separate, unversioned "Consumes" field naming the other nine operational artifacts. This compounds R-05 rather than resolving it.
4. **Its own version (1.0) and explicit citation of Core Conceptual Model v1.1** is a third data point supporting the R-06 update above.

**Placement decision recorded here for traceability:** the Ontology Specification's own governing document (Core Conceptual Model §0.2) states its conceptual reading position is immediately after Artifact #2, ahead of the Maturity Model. Renumbering the repository to reflect that (shifting Artifacts #3–#11 up to #4–#12) would be the more "correct" filing, but was judged too high-risk to execute via GitHub's web upload flow on an already-published repository (the project's most recent incident, a broken relative link, came from exactly this kind of cross-file surgery). The methodology author chose to append it as **Artifact #12** instead, with a "reading order" note in the README pointing readers to its true conceptual position. This is a repository-organization decision, not a methodology-semantics decision, and is recorded here rather than silently made.

**Minor / cosmetic notes found during conversion (none blocking):**
- The Ontology Specification's own restatement of the Core Conceptual Model's "reasoning chain" (§1.1) uses "Authority & Influence"; the Core Conceptual Model's original (§1.2) spells it out as "Authority and Influence." Preserved as authored rather than silently harmonized.
- §12 of the Ontology Specification jumps from its section header directly into a data table, then to "§12.2 Capability identifiers" — there is no "§12.1" in the source. Preserved exactly as authored.
- Two of the document's own internal numeric claims were independently verified against the actual repository content during this review rather than taken on faith: "the 72 controls" (§16.1, Appendix B) matches the Master Control Library's actual 72 unique `ATG-` control IDs exactly, and "36 capability identifiers" (§12) matches the Maturity Model's actual 36 `D#.#` identifiers exactly. Both check out.

**Recommendation:** No methodology semantics were changed to accommodate this addition. Three follow-on decisions are now ready for the author, all previously opened by earlier findings and only strengthened here: resolve R-02 (this review's own recommendation, given the new 2-to-2 split, leans toward adding `Residual` back to the Scoring Framework and Master Control Library, but this is the author's call); decide whether "Domain Guides" is a real, still-unwritten companion artifact or a chain reference that should be removed from Core Conceptual Model §0.2; and fold this document's dependency wording into whatever single canonical manifest eventually resolves R-05.

**Status:** Artifact added. R-02, R-05 and R-06 remain open, now with additional evidence recorded above.

---

## R-12 — Domain 2 renamed "Trust and CloudHound" → "Trust and Privilege Paths" (Blocking, vendor-neutrality)

**Artifact:** All artifacts that name the six assessment domains — [Manifesto](docs/01-manifesto.md), [Core Conceptual Model](docs/02-core-conceptual-model.md), [Maturity Model](docs/03-maturity-model.md), [Scoring Framework](docs/04-scoring-framework.md), [Master Control Library](docs/05-master-control-library.md), [Assessor Handbook](docs/08-assessor-handbook.md), [Reporting Standard](docs/09-reporting-standard.md), [Ontology Specification](docs/12-ontology-specification.md), and `README.md`.

**Finding:** Domain 2 was originally named "Trust and CloudHound." "CloudHound" is structurally and phonetically derivative of BloodHound, a specific, well-known, real third-party Active Directory/Entra ID attack-path enumeration tool. Retaining it directly conflicts with this methodology's own stated mandate to remain vendor-neutral, tool-independent and product-independent (Manifesto, Appendix B publication-boundary criteria) — a reader could reasonably infer the methodology assumes or endorses a specific commercial or open-source tool where none is intended.

**Resolution:** The domain has been renamed **"Trust and Privilege Paths"** everywhere it appears as a domain label, section heading, or inline domain reference, across all eight affected artifacts and the README's domain-to-control-family table. This is a terminology change only:

- **Unchanged:** the `ATG-TRU` control-family prefix and all twelve control IDs (`ATG-TRU-001`–`ATG-TRU-012`); the `D2` maturity-domain code and all six capability identifiers (`D2.1`–`D2.6`); every control's canonical requirement, evidence expectation, validation procedure, graph nodes/relationships, failure pattern, remediation outcome, and crosswalk candidates; every maturity capability's criteria, scoring logic, and critical gates; and all cross-artifact numbering.
- **Changed:** only the human-readable domain name and its lowercase inline variants (e.g., "the applicable trust and cloudhound population" → "the applicable trust and privilege paths population").

**Known residual mention:** the Manifesto's Appendix C ("Source and derivation note") retains one sentence citing "CloudHound methodology" as one of several internal source materials the author consolidated when originally drafting this methodology (the literal source *filename*, `CloudHound_Methodology_v1.docx`, was already redacted under R-01, before this finding). This single mention is a historical-provenance citation, not a public methodology term, and has been left as-authored pending the author's explicit call on whether it should also be scrubbed or generalized before final public release.

**Recommendation:** Confirm during the still-pending legal/employer/IP review (Manifesto, Appendix B) whether the Appendix C provenance sentence needs further genericization, consistent with how R-01 already treated the adjacent internal-filename list.

**Status:** Resolved across all public-facing terminology. One historical citation intentionally left open for the author's decision (see above).

---

## R-13 — Phase 2 formally opened: Reference Graph Schema and Illustrative Query Library added (Informational / Governance)

**Artifact:** New, non-normative — `docs/13-reference-graph-schema-and-query-library.md` — cross-referenced from [Ontology Specification](docs/12-ontology-specification.md) Appendix G and [Governance & Certification Model](docs/11-governance-and-certification-model.md) §7.1.

**Finding:** The Ontology Specification (Artifact #12) had explicitly deferred machine-readable/property-graph bindings and a tool-conformance suite to an unscheduled "Phase 2" (§14.2, Appendix G), stating that their absence did not make Phase 1 semantically incomplete. The methodology author requested an exhaustive graph schema and query library be produced. Producing it without first addressing that deferral would have silently contradicted a decision Artifact #12 had already published — exactly the kind of unannounced change this review process exists to catch.

**Resolution:** Rather than silently proceed or silently ignore the request, this was raised with the author, who chose to formally open Phase 2. The result:

- **What was added:** a single new document consolidating Ontology Specification Appendix A (129 canonical entity types), Appendix C (96 canonical relationship predicates) and the state/evidence/maturity/confidence enumerations (§9.3, §10.5, §10.6, §11.1-§11.3, Appendix D) into a property-graph schema; an exact, machine-extracted cross-reference of all 72 Master Control Library controls' `Graph nodes`/`Graph relationships` fields (not hand-transcribed, so it cannot silently drift from the canonical control text); and an illustrative query library with one pattern per maturity capability (35 of 36 — see below) plus nine cross-cutting patterns, expressed in GQL (ISO/IEC 39075), the multi-vendor ISO standard descended from openCypher, chosen specifically to avoid binding the methodology to one company's graph database.
- **What stayed unchanged:** no entity, relationship, state, control, capability, evidence grade, path state or scoring/maturity rule was added, removed or redefined. The new document's own §4 records exactly which sections are verbatim reproductions versus derived content, and every query is traceable to the specific control(s) whose graph vocabulary it draws from.
- **Explicit non-normative framing:** the new document states, in its own opening status box, that it carries no conformance weight (none of the five L0-L5 conformance levels or seven conformance classes require it), is not the ExposureGraph product and creates no dependency on it, and that GQL was chosen for standards alignment rather than to require any specific graph database — the same query patterns could be expressed in SPARQL, Gremlin or recursive SQL.
- **D4.6 called out rather than papered over:** Ontology Specification §12.3 already notes that D4.6 (Validation assurance and independence) has no direct Master Control Library control mapping. The new document's D4.6 pattern is explicitly labeled as generically grounded rather than falsely cited to a specific `ATG-VAL` control.
- **Governance updated to match:** Ontology Specification Appendix G now records that Phase 2 has begun and which of its previously-deferred rows are partially addressed versus still deferred; Governance & Certification Model §7.1 now states plainly that the new document has no bearing on L4 Tool-compatible status.

**Recommendation:** Treat this document as a living companion, not a frozen artifact: it must be regenerated (not hand-patched) if the Ontology Specification's Appendix A/B/C or the Master Control Library's 72 controls are ever revised, per the change-control note in the new document's own §5. Independent review of this document has not yet been performed and should happen before implementers treat it as stable.

**Status:** Phase 2 formally opened. First Phase 2 artifact published, non-normative, and cross-referenced from governance. Remaining Phase 2 items (assessment data model, JSON schema objects, tool conformance suite, synthetic dataset pack) remain deferred per Ontology Specification Appendix G.

---

## Gaps

Summarizing R-08 for quick reference: this repository was intentionally missing a **LICENSE** and a **SECURITY.md**, both called for by the Manifesto's own Appendix B. **LICENSE** (CC BY 4.0) and its companion **TRADEMARKS.md** have since been added, on the methodology author's explicit decision — see the R-08 update above. **SECURITY.md** remains missing and is still flagged rather than added, because drafting it responsibly requires the author to decide what a real disclosure process looks like, not just fill in a template.

## Summary table

| ID | Finding | Severity | Status |
| --- | --- | --- | --- |
| R-01 | Manifesto internal-source filenames redacted | Blocking | Resolved by redaction; legal review still pending |
| R-02 | Path-state taxonomy: 8 states (Core Conceptual Model) vs. 7 states (everywhere else) | Blocking | Open — needs an author decision |
| R-03 | PEI formula: `B`/`K` vs. `Am`/`CR` vs. spelled-out variable names | Should-fix | Resolved — F-05 standardized on `Am`/`CR` |
| R-04 | Assessment Methodology phases numbered 1–13 in §0.11 but unlabeled (headers dropped in conversion) in the body | Should-fix | Resolved — `Phase 1`–`Phase 13` headers restored, numbered to match §0.11 |
| R-05 | Artifact precedence/dependency chain stated four different ways | Should-fix | Open |
| R-06 | Core Conceptual Model at v1.1 while the bundle is called "v1.0" | Blocking | Open — needs a release-manifest decision |
| R-07 | Every artifact shows "Pending" for all independent reviews | Blocking (by design) | Must remain accurate, not be softened |
| R-08 | No LICENSE or SECURITY.md, though the Manifesto's own criteria require them | Blocking | LICENSE (CC BY 4.0) + TRADEMARKS.md added; SECURITY.md still open |
| R-09 | Evidence Model cites a generic "AI Security Assessment Toolkit" | Minor | Open — confirm during IP review |
| R-10 | Governance Model cites real external standards (SAC, ISO/IEC 17021-1/17024/17065) | Should-fix | Open — confirm during legal review |
| R-11 | Ontology Specification added as Artifact #12; strengthens R-02 and R-06, further compounds R-05 | Should-fix / Informational | Artifact added; R-02/R-05/R-06 still open |
| R-12 | Domain 2 "Trust and CloudHound" echoed a real third-party tool name (BloodHound) | Blocking | Resolved — renamed "Trust and Privilege Paths" everywhere; one historical citation in Manifesto Appendix C left for author decision |
| R-13 | Phase 2 (deferred by Artifact #12) formally opened; non-normative reference graph schema and query library added | Informational / Governance | Resolved — Artifact #12 Appendix G and Artifact #11 §7.1 updated to match; independent review of the new document still pending |
