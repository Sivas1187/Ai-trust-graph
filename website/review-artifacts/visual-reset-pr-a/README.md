# Visual reset — PR A review artifacts (temporary)

Temporary screenshots for independent review of PR A
(`website-visual-reset-system` → `website-visual-reset`). Remove before
the integration branch is merged to `main`.

Approved reference: `website/review-artifacts/visual-reset-prototype/*-refined.png`
on branch `visual-reset-prototype-review` (copied here as 02 and 07).
Production baseline: `main` @ `7f6f631b3112b185c90810b51498b9ea9c53f5c3`.

| # | File | What |
|---|---|---|
| 01 | 01-main-cover-1440.png | Production `main` cover, 1440 × 900 |
| 02 | 02-prototype-cover-1440-reference.png | Approved refined prototype, desktop cover |
| 03 | 03-pr-a-cover-1440.png | PR A Cover section only (below the header), 1440 |
| 04 | 04-pr-a-first-viewport-1440.png | PR A first viewport, 1440 × 900 |
| 05 | 05-pr-a-first-three-viewports-1440.png | PR A first three viewports, 1440 (transition into unchanged sections) |
| 06 | 06-main-cover-390.png | Production `main` cover, 390 × 844 @2x |
| 07 | 07-prototype-cover-390-reference.png | Approved refined prototype, mobile cover |
| 08 | 08-pr-a-cover-390.png | PR A cover, 390 × 844 @2x |
| 09 | 09-pr-a-first-three-viewports-390.png | PR A first three viewports, 390 @2x |
| 10 | 10-pr-a-cover-320.png | PR A header + cover, 320 @2x (full cover height) |
| 11 | 11-forced-colours-1440.png | Forced colours (emulated), 1440 |
| 12 | 12-forced-colours-390.png | Forced colours (emulated), 390 @2x |
| 13 | 13-no-js-1440.png | JavaScript disabled, 1440 |
| 14 | 14-no-js-390.png | JavaScript disabled, 390 @2x (no-JS navigation fallback shown inline) |
| 15 | 15-reduced-motion-1440.png | prefers-reduced-motion: reduce, 1440 |
| 16 | 16-mobile-menu-open-390.png | Mobile menu open, 390 @2x |
| 17 | 17-pr-a-cover-834.png | PR A first viewport, 834 × 1112 (tablet) |
| 18 | 18-diff-prototype-vs-pr-a-1440.png | Pixel diff vs prototype, 1440 (magenta = RGB Δ > 24) — 0.33 % of pixels |
| 19 | 19-diff-prototype-vs-pr-a-390.png | Pixel diff vs prototype, 390 @2x — 0.75 % of pixels |
| 20 | 20-side-by-side-prototype-vs-pr-a-1440.png | Prototype (left) vs PR A (right), 1440 |
| 21 | 21-side-by-side-prototype-vs-pr-a-390.png | Prototype (left) vs PR A (right), 390 @2x |

## Implementation vs prototype measurements

Measured in Chromium on the built static export (text extents from DOM
ranges; graph counts are elements whose centre falls inside the viewport above
the colophon hairline).

### Desktop 1440 × 900

| Metric | Approved prototype | PR A | Δ |
|---|---|---|---|
| Title left edge (glyph ink, px) | 194 | 194 | 0 |
| Title top (glyph box, px from page top) | 395 | 395 | 0 |
| Title size | 132px | 132px | 0 |
| Title text width (px) | 748 | 748 | 0 |
| Proposition text width (px) | 394 | 394 | 0 |
| Proposition lines | 4 | 4 | 0 |
| Hairline (colophon rule) y | 812 | 812 | 0 |
| Colophon x | 200 | 200 | 0 |
| Colophon y | 847 | 846 | -1 |
| Cover bottom (header + cover) | 900 | 900 | 0 |
| Graph nodes visible in cover | 37 | 37 | 0 |
| …of which cyan reading-path nodes | 5 | 5 | 0 |
| Graph edges visible in cover | 28 | 28 | 0 |

### Mobile 390 × 844

| Metric | Approved prototype | PR A | Δ |
|---|---|---|---|
| Title left edge (glyph ink, px) | 21 | 21 | 0 |
| Title top (glyph box, px from page top) | 365 | 365 | 0 |
| Title size | 68px | 68px | 0 |
| Title text width (px) | 213 | 213 | 0 |
| Proposition text width (px) | 324 | 324 | 0 |
| Proposition lines | 3 | 3 | 0 |
| Hairline (colophon rule) y | 750 | 750 | 0 |
| Colophon x | 24 | 24 | 0 |
| Colophon y | 769 | 769 | 0 |
| Cover bottom (header + cover) | 844 | 844 | 0 |
| Graph nodes visible in cover | 16 | 16 | 0 |
| …of which cyan reading-path nodes | 3 | 3 | 0 |
| Graph edges visible in cover | 11 | 11 | 0 |

Remaining pixel differences: sub-pixel ring positions (curated coordinates are
rounded to whole pixels), glyph anti-aliasing, the colophon colour (PR A uses
the existing, slightly darker `--muted` token) and the nav "GitHub ↗" arrow
glyph. The mobile "Menu" control is text-only, as in the prototype.

Menu update (text-only control): 08, 09, 10, 12, 16, 17, 19 and 21 were
re-captured; every other PR A capture was pixel-identical after the change
and is unchanged.
