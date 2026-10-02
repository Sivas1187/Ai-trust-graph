# PEI sensitivity analysis — methodology bundle 1.0-rc.4

**Status:** non-normative analysis report, prepared 2 October 2026 for adoption through governance.
**Requirement addressed:** Scoring Framework (Artifact #4) §6.5 *Sensitivity analysis* — "Before public use of weighted or path formulas, reviewers test how reasonable changes in component ratings, weights and thresholds affect bands and priorities" — and the A.7 release-acceptance row *Calibration: synthetic cases and sensitivity analysis reviewed*.
**Scope:** the Path Exposure Index (PEI), the only weighted or path formula the whitepaper publishes.
**Reproduce:** `python3 analysis/pei-sensitivity/pei_sensitivity.py` regenerates [`RESULTS.md`](RESULTS.md) exactly (pure Python 3, no dependencies).

This report changes no canonical rule. The formula, weights, scales, bands, overrides, UNKNOWN treatment and eligibility rules of Artifact #4 are used exactly as published. Where a finding suggests a change, it is listed under *Questions for governance*, not applied.

## 1. Method

| Element | Choice | Canonical basis |
| --- | --- | --- |
| Formula | PEI = 4C + 3R + 3A + 2Am + 3CR | #4 §4.9 |
| Input space | All 2,000 determinate eligible active vectors: C 1–5, R 1–4, A 0–4, Am 0–3, CR 0–4 | #4 §§4.3–4.7 (R has no numeric zero, §4.4) |
| Bands | Low 7–19, Moderate 20–34, High 35–49, Critical 50–62 | #4 §4.10 |
| Calibration check | P-CAL-01 to P-CAL-12 recomputed | #10 Appendix B.1–B.2 |
| "Reasonable change" in a rating | One scale point, the tolerance used by the inter-assessor gate | #10 Appendix B.4 |
| "Reasonable change" in a weight | ±1 on one weight; all weights equal | §6.5 "weight alternatives" |
| "Reasonable change" in a threshold | ±1 and ±2 points on one band edge, and on all edges together | §6.5 |
| Ranking reversal | Two paths in different baseline bands whose PEI order inverts | — |
| Major ranking reversal | The same, for paths two or more baseline bands apart | — |

The enumeration is uniform over the scales. It characterises the arithmetic of the formula over its whole input space; it does not describe how real paths are distributed, which only field calibration can establish.

## 2. Findings

**F1 — Formula integrity.** The determinate range is exactly 7–62 and every calibration vector in Appendix B.1–B.2 recomputes to its expected PEI and band, including the P-CAL-09 provisional range of 38–47.

**F2 — One-point component change (§6.5: "Does the band change disproportionately?").** No one-point change in any component moves a path by more than one band. Even if all five components differ by one point at once (the B.4 tolerance), no path moves more than one band. The band is, however, sensitive at its edges: 20.3% of all single one-point moves change the band (13.3% for Amplification up to 27.5% for Consequence), 51.9% of vectors have at least one single move that changes their band, and every vector can change band when all five components vary by one point together.

**F3 — Weight alternatives (§6.5: "Do priorities depend primarily on one chosen weight?").** Across the eleven reasonable alternatives (each weight ±1, and all weights equal) there are **no major ranking reversals**. Cross-band reversals affect at most 0.4% of cross-band pairs, Kendall tau-b against the baseline ordering stays between 0.913 and 0.952, and 9.9–20.0% of vectors change band. No single weight dominates: Consequence carries the largest share of PEI variance (38.0%), consistent with its published rationale "Decision materiality is primary" (§4.9); Authority and Control Resistance carry 21.4% each, Reachability 13.4% and Amplification 5.9%.

**F4 — Threshold alternatives.** Moving one band edge by one or two points re-bands 1.3–8.1% of vectors; moving all edges together re-bands 7.0–13.0%. Threshold changes never alter the PEI order, so they cause no ranking reversal. The High/Moderate edge is the most sensitive because most vectors lie in the two middle bands (44.7% each).

**F5 — Evidence downgrade (§6.5: "Does confidence change without pretending consequence changed?").** Confidence is not a PEI input, so a confidence downgrade cannot change any component value; low confidence keeps the band provisional (§4.8). When a single component becomes UNKNOWN, the band is indeterminate for 40% (Amplification) to 100% (Consequence) of vectors. The canonical prohibition of a final point PEI under UNKNOWN (§§4.4, 4.8) is therefore necessary rather than merely conservative.

**F6 — Tests not performed here.** *Coverage expansion* concerns aggregates, not the path formula. *Gate activation* is a rule-level property: critical overrides set a minimum band and take precedence over the arithmetic (§§4.10–4.11), so no PEI value can lower an override floor. *Reviewer variation* needs independent assessors (Appendix B.4) and remains a pending external gate; F2 gives only its arithmetic bound.

## 3. Conclusion against §6.5

§6.5 requires the component profile and expert review to be used "rather than presenting the index as stable" if small arbitrary changes cause major ranking reversals. **No major ranking reversal occurs** under any reasonable weight alternative, and no one-point rating change moves a path by more than one band. The PEI ordering is therefore robust to the reasonable weight choices tested.

Band membership is **not** stable at band edges under one-point rating variation. A PEI band should therefore not be presented as a stable classification on its own. This is already what the canon requires: the component profile "remains the authoritative explanation" (§4.9), bands "require calibration using synthetic and field cases" (§4.10), and PEI is for triage only. The analysis supports those rules; it does not require a change to them.

## 4. Limitations of this analysis

- **Author-performed.** This is a desk analysis by the methodology author. It is not the independent scoring-method review recorded as pending in #4 A.8, and it should be included in that review.
- **Uniform input space.** Shares are over all scale combinations, not over observed paths. Field calibration remains mandatory before any claim of validated predictive performance (§4.10).
- **Path formula only.** Other weighted formulas in Artifact #4 (for example weighted aggregates) are outside this analysis.
- **No reviewer data.** Inter-assessor reproducibility (Appendix B.4) is untested.
- **Synthetic calibration only.** No field or historical-record calibration was available.

## 5. Questions for governance (not applied)

1. **Adoption.** Whether this author-performed analysis satisfies §6.5 and the A.7 *Calibration* row for public use of PEI, pending the independent scoring-method review.
2. **Boundary-adjacent paths.** Whether reporting should flag a path whose band would change with a one-point move in any component (51.9% of the input space). This would be a new reporting rule and needs governance; it is not proposed as current canon.
3. **Scope of §6.5.** Which other weighted formulas in Artifact #4 require the same analysis before public use.
4. **Roadmap wording.** `ROADMAP.md` calls "no overall trust score" a permanent design decision, while #4 §5.8 permits a future composite under conditions. The two should be reconciled; the whitepaper follows #4.

## 6. Proposed governance record

Suggested wording for METHODOLOGY_MANIFEST.md (for example a new §6.2 *Release-acceptance records*), to be added only by the methodology owner:

| Requirement | Status | Recorded | Basis |
| --- | --- | --- | --- |
| Sensitivity analysis of the path formula (Scoring Framework §6.5; A.7 *Calibration*) | Performed by the methodology author | 2026-10-02 | Desk analysis of PEI over all 2,000 determinate vectors and the Appendix B.1–B.2 calibration vectors; script and results in `analysis/pei-sensitivity/`. No major ranking reversal under reasonable weight alternatives; band membership is sensitive at band edges, which the component-profile and triage-only rules already address. Not an independent review; does not cover aggregate formulas, reviewer variation or field calibration. |
