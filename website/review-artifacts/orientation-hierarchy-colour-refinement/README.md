# Orientation, hierarchy and colour refinement — review artifacts (temporary)

Temporary screenshots for independent review of
`website-orientation-hierarchy-colour-refinement` → `main`. Remove after review.

- Baseline: `b69007213f760d23325b4d81ab6deb1ef0b7dc73` (production `main`), built and served with production headers.
- Chromium; 1440 × 900 (desktop), 390 × 844 @2x (mobile), 834 × 1112, 320 × 568 @2x. Colour crops are @2x.

| File | What |
|---|---|
| 01-baseline-cover-1440.png / 02-refined-cover-1440.png | First viewport: Cover before / after (context line under the unchanged proposition) |
| 03-baseline-cover-390.png / 04-refined-cover-390.png | The same at 390 |
| 05–08-on-this-page-{1440,834,390,320}.png | "On this page" index under the Cover colophon |
| 09/10-…-domains-1440.png | Domains before / after (taller band, cyan anchors and leaders, no secondary accents) |
| 11/12-…-domains-390.png | The same at 390 |
| 13/14-…-lifecycle-1440.png | Lifecycle before / after (same content, denser) |
| 15/16-…-lifecycle-390.png | The same at 390 |
| 17-colour-cover-graph-baseline-vs-refined.png | Cover reading path: calibrated cyan, firmer stroke |
| 18-colour-act-ii-graph-baseline-vs-refined.png | Act II field: fewer secondary accents |
| 19-colour-domains-graph-baseline-vs-refined.png | Domains band: accents removed, shared cyan connectivity |
| 20-colour-paper-links-baseline-vs-refined.png | Primary link underline on paper |
| 21-colour-graphite-links-baseline-vs-refined.png | Links on graphite (unchanged tokens) |
| 22-colour-secondary-accents-baseline-vs-refined.png | Cover upper field: secondary accents reduced |
| 23-refined-whole-page-1440.png | Whole page, 1440 (@0.5) |
| 24-refined-whole-page-390.png | Whole page, 390 |
| 25-forced-colours-on-this-page-1440.png | Forced colours: orientation index |
| 26-forced-colours-domains-1440.png | Forced colours: Domains |
| 27-forced-colours-lifecycle-1440.png | Forced colours: Lifecycle |
| 28-forced-colours-on-this-page-390.png | Forced colours: orientation index, 390 |

## Measurements (baseline → refined)

| | 1440 | 390 |
|---|---|---|
| Lifecycle height | 1899 → 1593 px (−16.1%) | 2808 → 2389 px (−14.9%) |
| Domains height | 1191 → 1245 px | 2076 → 2094 px |
| Whole page | 14550 → 14373 px | 20520 → 20437 px |
| Cover | 828 → 828 px (links end at 768 px, as before) | 784 → 861 px (links still in the first 844 px viewport) |

## Colour tokens

| Token | Before | After | Contrast on its ground |
|---|---|---|---|
| `--cyan` (structural) | `#0a6c7c` | `#0b7685` | 5.62 → 4.91 on paper (AA text) |
| `--cyan-on-dark` | `#6fd6e3` | unchanged | 10.90 on graphite |
| `--indigo` (decorative) | `#4146b8` | `#4d55a8` | 6.94 → 6.09 |
| `--indigo-on-dark` | `#aeb1ff` | `#b3b8ea` | 9.26 → 9.63 |
| `--green` (decorative) | `#17704c` | unchanged | 5.60 |
| `--amber` → ochre (decorative) | `#9a6b12` | `#8a702c` | 4.32 → 4.37 |
| `--amber-on-dark` | `#f0c674` | `#d8bf80` | 11.46 → 10.27 |
| `--paper` / `--graphite` | `#f6f6f1` / `#0f1514` | unchanged | — |
