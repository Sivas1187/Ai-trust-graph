# Visual reset — PR D review artifacts (temporary)

Temporary screenshots for independent review of PR D
(`website-visual-reset-pr-d` → `website-visual-reset`): UNKNOWN, Evidence,
Assessment lifecycle, footer and final navigation. Remove before the
integration branch is merged to `main` (with the PR B and PR C directories,
at owner-directed final hygiene).

- Baseline: `83bc1f458e43818750232dcd1d49b66d2ea20e55` (built and served with production headers).
- Chromium; 1440 × 900 (desktop), 390 × 844 @2x (mobile), 320 × 568 @2x.
  Forced-colours / no-JS 390 sequences and whole-page views are @1x or scaled.

| File | What |
|---|---|
| 01-baseline-unknown-1440.png | Baseline UNKNOWN (amber "stays", four boxed states, side-by-side state cards, chips) |
| 02-pr-d-unknown-1440.png | PR D UNKNOWN — assertion, ≠ argument, SC-INV-01, Not Tested register |
| 03-pr-d-unknown-disclosure-open-1440.png | PR D UNKNOWN, numeric and reporting treatment open |
| 04-baseline-evidence-1440.png | Baseline Evidence (arrowed steps, three boxed rules) |
| 05-pr-d-evidence-1440.png | PR D Evidence — one quiet axis, three rules |
| 06-pr-d-evidence-disclosure-open-1440.png | PR D Evidence, meaning / what it can support open |
| 07-baseline-lifecycle-1440.png | Baseline Lifecycle (two-row timeline with markers, chips) |
| 08-pr-d-lifecycle-1440.png | PR D Lifecycle — numbered register with outcomes |
| 09-pr-d-lifecycle-gates-open-1440.png | PR D Lifecycle, gate tests open |
| 10-pr-d-assessment-types-1440.png | PR D assessment types (two entries open) |
| 11-baseline-end-of-page-1440.png | Baseline Review → footer |
| 12-pr-d-end-of-page-1440.png | PR D Review → footer |
| 13-baseline-domains-to-unknown-1440.png | Baseline Domains → UNKNOWN |
| 14-pr-d-domains-to-unknown-1440.png | PR D Domains → UNKNOWN |
| 15-pr-d-unknown-to-evidence-1440.png | PR D UNKNOWN → Evidence |
| 16-pr-d-evidence-to-lifecycle-1440.png | PR D Evidence → Lifecycle |
| 17-pr-d-lifecycle-to-status-1440.png | PR D Lifecycle → Release, review and limitations |
| 18–33 (…-390.png) | The same set at 390 (baseline vs PR D UNKNOWN, Evidence, Lifecycle; disclosures; end of page; the four transitions) |
| 34-pr-d-unknown-320.png | PR D UNKNOWN, 320 (treatment table open) |
| 35-pr-d-evidence-320.png | PR D Evidence, 320 (vertical axis) |
| 36-pr-d-lifecycle-320.png | PR D Lifecycle, 320 |
| 37-pr-d-footer-320.png | PR D footer, 320 |
| 38-forced-colours-unknown-evidence-1440.png | Forced colours: UNKNOWN → Evidence |
| 39-forced-colours-lifecycle-1440.png | Forced colours: Lifecycle (gates open) |
| 40-forced-colours-assurance-sequence-390.png | Forced colours: UNKNOWN → footer, 390 |
| 41-no-js-assurance-sequence-1440.png | JavaScript disabled: UNKNOWN → footer |
| 42-no-js-assurance-sequence-390.png | JavaScript disabled: UNKNOWN → footer, 390 |
| 43-reduced-motion-assurance-sequence-1440.png | Reduced motion: UNKNOWN → Lifecycle |
| 44-overview-whole-page-baseline-vs-pr-d-1440.png | Whole page, baseline vs PR D, 1440 (scaled) |
| 45-overview-whole-page-baseline-vs-pr-d-390.png | Whole page, baseline vs PR D, 390 (scaled) |
| 46-final-pr-d-whole-page-1440.png | Final PR D whole page, 1440 (@0.5) |
| 47-final-pr-d-whole-page-390.png | Final PR D whole page, 390 |
| 48–53 (compare-…) | Side-by-side baseline vs PR D for UNKNOWN, Evidence, Lifecycle at 1440 and 390 |

## Density (UNKNOWN + Evidence + Lifecycle + footer; disclosures closed)

| Measure | 1440 baseline → PR D | 390 baseline → PR D |
|---|---|---|
| Visible words | 572 → 555 | 572 → 569 |
| Prose words | 351 → 259 | 351 → 273 |
| Paragraphs | 28 → 28 | 28 → 28 |
| Bordered cards | 6 → 0 | 6 → 0 |
| Pills / chips | 15 → 0 | 15 → 0 |
| Distinct type styles | 35 → 21 | 34 → 20 |
| Rendered height (px) | 4545 → 5265 | 6956 → 7156 |

Words removed are eyebrows, "Source: …" prose (now marginal references) and
old disclosure labels; no canonical text was removed. Height grows at 1440
because the thirteen phase outcomes are now visible in the register (they were
hidden in a disclosure) and the assessment types are a readable list rather
than a chip cloud; at 390 UNKNOWN is shorter and Lifecycle longer for the same
reason.

## Whole-page rhythm (section heights in viewports; ■ graphite, □ paper)

```
1440 base 15.4 vp | top□0.92 problem■0.98 flow□2.68 domains□1.32 unknown■2.20 evidence□1.13 lifecycle□1.50 status□1.34 methodology□1.93 review■1.06 footer■0.22
1440 PR D 16.2 vp | top□0.92 problem■0.98 flow□2.68 domains□1.32 unknown■2.10 evidence□1.34 lifecycle□2.11 status□1.34 methodology□1.93 review■1.06 footer□0.29
 390 base 24.1 vp | top□0.93 problem■1.33 flow□3.58 domains□2.46 unknown■3.41 evidence□1.99 lifecycle□2.42 status□2.51 methodology□3.26 review■1.70 footer■0.42
 390 PR D 24.3 vp | top□0.93 problem■1.33 flow□3.58 domains□2.46 unknown■2.70 evidence□1.97 lifecycle□3.33 status□2.51 methodology□3.26 review■1.70 footer□0.48
```

Cadence: paper · graphite (Act II) · paper (Act III, Domains) · graphite
(UNKNOWN) · paper (Evidence → Source) · graphite (Review) · paper (footer). The
footer moves from graphite to paper, so the page closes on a quiet colophon
after the Review field instead of two consecutive dark bands.
