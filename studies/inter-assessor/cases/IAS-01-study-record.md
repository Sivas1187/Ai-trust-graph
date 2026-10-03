[← Back to the study kit](../README.md)

# Study record: IAS-01

> **Frozen 2026-10-03, before any assessor started.** From here on this record only grows: the reveal and the results are appended below, and nothing above this line is edited.

## Identifiers

| Field | Value |
|---|---|
| Study ID | IAS-01 |
| Study lead | Siva Sethumadhavan (methodology author) |
| Methodology | Tag `v1.0-rc.4`; commit `2bfe2db33c96a18790b1228d2914ba388b22e739`; bundle 1.0-rc.4 |
| Cases | [IAS-01-1](IAS-01-1-assessor-pack.md) v1.0 and [IAS-01-2](IAS-01-2-assessor-pack.md) v1.0, committed at `ec4c2ed7f87351defaa0180e01e6c48a6c15a54e` |
| Case author | The study lead (drafted with AI assistance). The case author is not an assessor. |

## Sealed answer key

| File | SHA-256 | Published |
|---|---|---|
| `answer-key.csv` | `ff075d94a0dd523c754eb364792e470ed84bebda5772fc43e5ce75455b65cc73` | 2026-10-03 |
| `answer-key-notes.md` | `23b6d0d9d26d1e4e37daf4b045abe5a65395fc845c0388605eaf29ad3b24da9b` | 2026-10-03 |

After the reveal, anyone can check: `sha256sum answer-key.csv answer-key-notes.md`.

## Analysis choices (fixed before any assessor starts)

1. **Agreement basis for the B.4 gates:** each assessor against the key. Pairwise assessor agreement is also reported, but not gated.
2. **Determinate items:** items where the key is determinate. Agreement on determinacy itself is reported separately for all items.
3. **Accepted alternatives:** only those listed in the sealed key. Where the key lists none for an item, only the key value counts as agreement. Two items are pre-registered rule questions (Case 1 PATH-1 `pei_band`; Case 2 AUT-009 `control_score_OE`); both of their readings count as agreement, and the split is reported.
4. **Ordinal gate population:** `control_score_*` and `pei_C`, `pei_R`, `pei_A`, `pei_Am`, `pei_CR` rows where both compared values are numeric.
5. **Categorical gate population:** `path_state`, `pei_band` and `domain_maturity` rows; the critical-gate condition uses the `critical_gate` rows.

## Assessors

| Assessor ID | Independence confirmed | Workpaper received |
|---|---|---|
| *None yet. Sign up on [issue #52](https://github.com/Sivas1187/Ai-trust-graph/issues/52).* | | |

## Reveal and results

*(Appended after every workpaper is in: reveal date, hash check, then the results document.)*
