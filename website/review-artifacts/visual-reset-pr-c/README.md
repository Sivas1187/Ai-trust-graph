# Visual reset — PR C review artifacts (temporary)

Temporary screenshots for independent review of PR C
(`website-visual-reset-pr-c-status-domains` → `website-visual-reset`).
Remove before the integration branch is merged to `main`.

- Baseline: `25a6495c9118b045ea74bf4c3e25719ecd7e6c23` (built and served with production headers).
- Chromium; 1440 × 900 (desktop), 390 × 844 @2x (mobile), 320 × 568 @2x.

| File | What |
|---|---|
| 01-baseline-domains-1440.png | Baseline Domains (card lens) |
| 02-pr-c-domains-1440.png | PR C Domains — one graph band, six lenses |
| 03-pr-c-domains-disclosure-open-1440.png | PR C Domains with the first disclosure open |
| 04-baseline-status-source-review-1440.png | Baseline Status → Canonical source → Review |
| 05-pr-c-status-1440.png | PR C Release, review and limitations (colophon) |
| 06-pr-c-canonical-source-1440.png | PR C Canonical source (table of contents) |
| 07-pr-c-review-1440.png | PR C Public review |
| 08-baseline-act-iii-to-domains-1440.png | Baseline: one viewport before Domains → two into it |
| 09-pr-c-act-iii-to-domains-1440.png | PR C: the Act III → Domains transition |
| 10-baseline-domains-390.png | Baseline Domains, 390 |
| 11-pr-c-domains-390.png | PR C Domains, 390 |
| 12-pr-c-domains-disclosure-open-390.png | PR C Domains, disclosure open, 390 |
| 13-baseline-status-source-review-390.png | Baseline Status → Review, 390 |
| 14-pr-c-status-390.png | PR C Status, 390 |
| 15-pr-c-canonical-source-390.png | PR C Canonical source, 390 |
| 16-pr-c-review-390.png | PR C Public review, 390 |
| 17-baseline-act-iii-to-domains-390.png | Baseline transition, 390 |
| 18-pr-c-act-iii-to-domains-390.png | PR C transition, 390 |
| 19-pr-c-domains-320.png | PR C Domains, 320 |
| 20-pr-c-status-320.png | PR C Status, 320 |
| 21-pr-c-source-to-review-320.png | PR C Canonical source → Review transition, 320 |
| 22-forced-colours-domains-1440.png | Forced colours, Domains |
| 23-forced-colours-status-source-review-1440.png | Forced colours, Status → Review |
| 24-forced-colours-domains-390.png | Forced colours, Domains, 390 |
| 25-forced-colours-status-review-390.png | Forced colours, Status → Review, 390 |
| 26-reduced-motion-domains-1440.png | Reduced motion, Domains |
| 27-no-js-domains-to-review-1440.png | JavaScript disabled, Domains → Review |
| 28-no-js-domains-390.png | JavaScript disabled, Domains, 390 |
| 29-no-js-status-review-390.png | JavaScript disabled, Status → Review, 390 |
| 30-compare-domains-baseline-vs-pr-c-1440.png | Baseline vs PR C, Domains |
| 31-compare-domains-baseline-vs-pr-c-390.png | Baseline vs PR C, Domains, 390 |
| 32-compare-status-source-review-baseline-vs-pr-c-1440.png | Baseline vs PR C, Status → Review |
| 33-compare-status-source-review-baseline-vs-pr-c-390.png | Baseline vs PR C, Status → Review, 390 |
| 34-compare-act-iii-to-domains-baseline-vs-pr-c-1440.png | Baseline vs PR C, Act III → Domains transition |
| 35-compare-act-iii-to-domains-baseline-vs-pr-c-390.png | Baseline vs PR C, transition, 390 |
| 36-overview-whole-page-baseline-vs-pr-c-1440.png | Scaled whole page (0.25×), baseline vs PR C |
| 37-overview-whole-page-baseline-vs-pr-c-390.png | Scaled whole page (0.4×), baseline vs PR C, 390 |

No design prototype was created for PR C; the baseline is the comparison reference.

## Density — redesigned region

Cards = elements bordered on ≥ 3 sides; pills = fully rounded bordered/filled
text boxes; type styles = distinct family / size / weight / style combinations.
Paragraph count rises because text formerly in card spans is now semantic
`<p>` elements; words, framing and styles all fall.

| Metric (Domains + Status + Canonical source + Review) | 1440 baseline | 1440 PR C | 390 baseline | 390 PR C |
|---|---|---|---|---|
| Visible words | 800 | 688 | 800 | 695 |
| Prose words | 368 | 341 | 368 | 348 |
| Paragraphs (<p>) | 31 | 40 | 31 | 40 |
| Bordered cards | 26 | 0 | 26 | 0 |
| Pills | 3 | 0 | 3 | 0 |
| Type styles | 24 | 16 | 24 | 15 |
| Rendered height (px) | 5147 | 5096 | 8896 | 8378 |

## Rhythm (section start, in viewports)

| | 1440 baseline | 1440 PR C | 390 baseline | 390 PR C |
|---|---|---|---|---|
| Domains | 4.65 | 4.65 | 5.91 | 5.91 |
| UNKNOWN | 6.40 | 5.98 | 9.06 | 8.37 |
| Evidence | 8.60 | 8.18 | 12.47 | 11.78 |
| Lifecycle | 9.73 | 9.30 | 14.46 | 13.77 |
| Release, review and limitations | 11.23 | 10.80 | 16.88 | 16.18 |
| Canonical source | 12.50 | 12.15 | 19.09 | 18.69 |
| Public review | 14.24 | 14.08 | 22.75 | 21.95 |
| Footer | 15.20 | 15.14 | 24.26 | 23.65 |
| Page height | 13,881px (15.4 vp) | 13,830px (15.4 vp) | 20,837px (24.7 vp) | 20,319px (24.1 vp) |
