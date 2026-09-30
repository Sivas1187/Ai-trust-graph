# Visual reset — PR B review artifacts (temporary)

Temporary screenshots for independent review of PR B
(`website-visual-reset-acts-ii-iii` → `website-visual-reset`). Remove before
the integration branch is merged to `main`.

- Integration baseline: `website-visual-reset` @ `3aaaba6ac06dd42458b93d0e5b81882ab3135d7d`
- Approved reference: `website/review-artifacts/visual-reset-prototype/*-refined.png`
  on branch `visual-reset-prototype-review` (the Act II / Act III prototype
  captures used in 25–28 are rendered from the same approved prototype).
- Chromium, 1440 × 900 (desktop) and 390 × 844 @2x (mobile) unless stated.

| File | What |
|---|---|
| 01-baseline-first-three-viewports-1440.png | Integration baseline, first 3 viewports |
| 02-pr-b-first-three-viewports-1440.png | PR B, first 3 viewports |
| 03-act-ii-1440.png | Act II |
| 04-act-iii-1440.png | Act III (chain, disclosure, annotations a–d) |
| 05-authority-annotation-1440.png | Annotation a — Authority and Influence |
| 06-breakpoints-default-stop-1440.png | Annotation b — Breakpoints, default (Stop) |
| 07-breakpoints-constrain-1440.png | Breakpoints — Constrain selected |
| 08-breakpoints-detect-1440.png | Breakpoints — Detect selected |
| 09-breakpoints-contain-1440.png | Breakpoints — Contain selected |
| 10-pr-b-first-five-viewports-1440.png | PR B, first 5 viewports |
| 10b-baseline-first-five-viewports-1440.png | Baseline, first 5 viewports |
| 11-baseline-first-three-viewports-390.png | Baseline, first 3 viewports, 390 |
| 12-pr-b-first-three-viewports-390.png | PR B, first 3 viewports, 390 |
| 13-act-ii-390.png | Act II, 390 |
| 14-act-iii-390.png | Act III, 390 |
| 15-authority-annotation-390.png | Authority annotation, 390 |
| 16-breakpoints-390.png | Breakpoints annotation, 390 (vertical path) |
| 17-pr-b-first-five-viewports-390.png | PR B, first 5 viewports, 390 |
| 17b-baseline-first-five-viewports-390.png | Baseline, first 5 viewports, 390 |
| 18-act-ii-iii-320.png | Acts II and III, 320 @2x |
| 19-forced-colours-act-ii-1440.png | Forced colours, Act II |
| 20-forced-colours-act-iii-1440.png | Forced colours, Act III |
| 21-forced-colours-acts-390.png | Forced colours, Acts II–III, 390 |
| 22-reduced-motion-first-three-viewports-1440.png | Reduced motion, first 3 viewports |
| 23-no-js-acts-1440.png | JavaScript disabled, Acts II–III |
| 24-no-js-acts-390.png | JavaScript disabled, Acts II–III, 390 |
| 25-compare-act-ii-prototype-vs-pr-b-1440.png | Prototype vs PR B + pixel diff, Act II — 0.18 % |
| 26-compare-act-ii-prototype-vs-pr-b-390.png | Prototype vs PR B + pixel diff, Act II, 390 — 0.66 % |
| 27-compare-act-iii-prototype-vs-pr-b-1440.png | Prototype vs PR B, Act III (PR B adds the full a/b annotations) |
| 28-compare-act-iii-prototype-vs-pr-b-390.png | Prototype vs PR B, Act III, 390 |
| 29-cover-regression-baseline-vs-pr-b-1440.png | Cover regression vs baseline + diff — 0 pixels |
| 30-cover-regression-baseline-vs-pr-b-390.png | Cover regression vs baseline + diff, 390 — 0 pixels |
| 31-overview-baseline-vs-pr-b-1440.png | Scaled whole page (0.25×), baseline vs PR B |
| 32-overview-baseline-vs-pr-b-390.png | Scaled whole page (0.5×), baseline vs PR B, 390 |

## Implementation vs prototype (text extents; y relative to each act's top)

| Element | 1440 prototype | 1440 PR B | 390 prototype | 390 PR B |
|---|---|---|---|---|
| act2Height | 880 | 880 | 1120 | 1120 |
| h2 | x200 y96 w651 h162 68px | x200 y96 w651 h162 67.968px | x24 y65 w245 h190 42px | x24 y65 w245 h190 42.003px |
| thesis | x200 y280 w424 h86 20px | x200 y280 w424 h86 20px | x24 y273 w268 h99 17px | x24 y273 w268 h99 17px |
| quote | x595 y487 w591 h108 42px | x595 y487 w591 h108 42px | x22 y517 w230 h154 31px | x24 y517 w228 h154 31px |
| cond | x600 y616 w471 h49 18px | x600 y616 w471 h49 18px | x24 y693 w250 h94 16px | x24 y693 w250 h94 16px |
| figNote | x56 y812 w139 h20 14.5px | x56 y814 w127 h20 14.5px | x24 y1028 w139 h20 14.5px | x24 y1029 w127 h20 14.5px |
| act3Top | 880 | 880 | 1120 | 1120 |
| h3 | x200 y138 w595 h162 68px | x200 y138 w595 h162 67.968px | x24 y82 w303 h134 38px | x24 y82 w303 h134 38px |
| chain | x200 y459 w985 h212 54px | x200 y458 w1010 h212 54px | x24 y367 w316 h345 33px | x24 y367 w486 h345 33px |
| questions | x200 y711 w230 h22 15.5px | x200 y711 w209 h19 15.5px | x24 y754 w230 h22 15.5px | x24 y754 w209 h19 15.5px |

The chain's range width includes the screen-reader-only annotation labels; the
visible chain wraps identically.

## Density — redesigned region only

Baseline region = Problem + Reasoning chain + Authority + Control breakpoints;
PR B region = Act II + Act III (which now contains Authority and Breakpoints).
Cards = elements bordered on ≥ 3 sides; pills = fully rounded bordered/filled
text boxes; type styles = distinct family / size / weight / style combinations.

| Metric (redesigned region) | 1440 baseline | 1440 PR B | 390 baseline | 390 PR B |
|---|---|---|---|---|
| Visible words | 392 | 334 | 392 | 330 |
| Prose words | 273 | 228 | 273 | 224 |
| Paragraphs | 18 | 20 | 18 | 18 |
| Bordered cards | 16 | 0 | 16 | 0 |
| Pills | 30 | 0 | 31 | 0 |
| Type styles | 26 | 16 | 25 | 15 |
| Rendered height (px) | 3959 | 3289 | 5741 | 4141 |

## Whole-page rhythm (section start, in viewports)

| | 1440 baseline | 1440 PR B | 390 baseline | 390 PR B |
|---|---|---|---|---|
| Cover | 0.08 | 0.08 | 0.07 | 0.07 |
| Problem / Act II | 1.00 | 1.00 | 1.00 | 1.00 |
| Reasoning chain / Act III | 1.96 | 1.98 | 2.39 | 2.33 |
| Domains | 2.89 | 4.65 | 3.63 | 5.91 |
| Authority (standalone) | 4.63 | — (annotation a) | 6.78 | — |
| UNKNOWN | 5.86 | 6.40 | 8.75 | 9.06 |
| Breakpoints (standalone) | 8.06 | — (annotation b) | 12.16 | — |
| Evidence | 9.35 | 8.60 | 14.37 | 12.47 |
| Page height | 16.2 vp (14,551px) | 15.4 vp (13,881px) | 26.6 vp (22,437px) | 24.7 vp (20,837px) |

## Amendment — annotation d (Decision)

Annotation d previously read "Decision — UNKNOWN stays UNKNOWN." and linked to
`#unknown`, which risked equating the Decision stage with the UNKNOWN assurance
state. It now reads "Decision — Accountable decision." (Artifact #2 §0.10
theory map: "Evidence, confidence and accountable decision.") as plain text with
no destination. Re-captured because the note row changed: 04, 10, 14, 18, 20,
21, 23, 24, 27, 28, 31, 32. All other files were pixel-identical after the
change and are unchanged (17, first five viewports at 390, does not reach the
note).
