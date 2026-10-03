[← Back to the study kit](README.md)

# Analysis guide

This guide explains how to compare workpapers against the provisional gates in [Artifact #10](../../docs/10-reference-assessment-repository.md) Appendix B.4. The gates and thresholds come from B.4; this guide only explains how to apply them. A spreadsheet is enough to do it.

## 1. Workpaper columns

The [workpaper template](workpaper-template.csv) has one row per output. Everyone (assessors, and the answer key with `assessor_id = KEY`) uses the same `item_id` and `output` values, so that rows can be matched.

| `output` | Values | Rule source |
|---|---|---|
| `applicability` | Applicable, Not Applicable (with rationale) | Artifact #4 |
| `evidence_grade` | E0 to E5 | Artifact #6 |
| `control_score_D`, `control_score_I`, `control_score_OE`, `control_score_overall` | 0 to 5 | Artifact #4 |
| `path_state` | Candidate, Topological, Plausible, Validated, Exploitable, Controlled, Invalidated | Artifact #12 §9.3 |
| `path_role` | Primary, Alternate, Residual | Artifact #12 §9.3 |
| `pei_C`, `pei_R`, `pei_A`, `pei_Am`, `pei_CR` | The component scales in Artifact #4 §4.9 | Artifact #4 §4.9 |
| `pei_value` | Computed as `4C + 3R + 3A + 2Am + 3CR` | Artifact #4 §4.9 |
| `pei_band` | Low, Moderate, High, Critical | Artifact #4 §4.9 |
| `capability_maturity`, `domain_maturity` | M1 to M5 | Artifact #3 |
| `critical_gate` | open, not open | Artifacts #3 and #4 |
| `finding_type` | Observation, Evidence Gap, Control Deficiency, Path Exposure, Governance Exception, Nonconformity, Risk Statement | Artifact #9 §5.1 |

Any output may instead be a result state: UNKNOWN, Not Assessed, Not Applicable, Not Tested, Inconclusive or Provisional. These states stay distinct ([Artifact #10](../../docs/10-reference-assessment-repository.md) §0.6). A row with a result state instead of a value has `determinate = no`.

## 2. Decide the analysis choices before the reveal

B.4 sets the thresholds but leaves some choices open. The study lead records these choices in the study record **before any assessor starts**, next to the answer-key hash, so they cannot be tuned to the results:

1. **Agreement with what?** This kit reports both: each assessor against the key, and each pair of assessors against each other. The study record says which one the gate is judged on.
2. **What counts as a determinate item?** For example, items where the key is determinate, or items where both compared ratings are determinate. Agreement about determinacy itself (did both record UNKNOWN?) is reported separately and never dropped.
3. **Acceptable alternatives:** listed in the answer key before the reveal (see the [case template](case-template.md)); never added afterwards.

Any part of B.4 that proves ambiguous in practice is reported as a methodology finding.

## 3. The gates (from B.4)

**Categorical gate.** At least 80% exact agreement on PathState, PEI band and domain maturity, across determinate items, and zero unresolved disagreement on whether a material critical gate is open.

> Exact agreement = (number of compared pairs with identical values) / (number of compared pairs). Report each output separately and combined.

**Ordinal and numeric gate.** At least 90% of determinate control-score and PEI-component ratings differ by no more than one scale point. In addition, every arithmetic value must recalculate exactly from the components the assessor selected.

> Within-one rate = (pairs with an absolute difference of 1 or less) / (compared pairs). Recalculate every `pei_value` from that assessor's own components with the formula above; any mismatch is reported as an arithmetic error, separately from disagreement about the components.

**Determinacy agreement** (reported, not gated). For each output, the share of pairs in which both ratings were determinate, both were the same result state, or they differed. A study where assessors agree only because many items were dropped as UNKNOWN must show it.

## 4. Disagreement log

Keep the original workpapers unchanged. Log every disagreement, one row each:

| Column | Content |
|---|---|
| `case_id`, `item_id`, `output` | What was disagreed on |
| `values` | Each assessor's value and the key's, for example `A1=Plausible; A2=Validated; KEY=Plausible` |
| `variance_class` | Semantic, evidence, procedural or judgment (B.4) |
| `root_cause` | The rule, wording or case input behind the disagreement |
| `adjudicated_value` | The value after adjudication, if adjudication changes it |
| `methodology_change` | None, or a link to the finding or change proposal it led to |

## 5. Results template

Publish one document per study with these sections. B.4 requires every item marked *(B.4)*.

1. **Study identifiers** *(B.4)*: methodology tag, commit and bundle; case IDs and versions; the answer-key hash and when it was published.
2. **Sample** *(B.4)*: number of assessors, a short description of their backgrounds (with consent), and the time each case took.
3. **Analysis choices**: as recorded before the reveal (section 2).
4. **Raw agreement counts** *(B.4)*: for each output, the number of compared pairs, matches, within-one counts and determinacy agreement. Report the numbers, not just percentages.
5. **Gate outcomes**: met or not met for each gate, stated plainly.
6. **Arithmetic errors**: any PEI values that did not recalculate.
7. **Adjudicated changes** *(B.4)*: the disagreement log summary.
8. **Methodology changes** *(B.4)*: findings and change proposals caused by the study.
9. **Limitations** *(B.4)*: at least the sample size, the synthetic cases, the case author's influence, and the fact that the gates are governance release gates, not validity claims.
