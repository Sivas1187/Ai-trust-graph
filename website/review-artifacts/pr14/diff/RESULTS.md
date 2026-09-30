# PR #14 pixel-diff results (temporary review artifact)

Main `3db314e` vs branch, element screenshots, reduced motion. A pixel counts as different when the summed RGB difference exceeds 24.
Unchanged sections were compared **height-pinned**: on the branch, the hero, problem and reasoning sections were given main's exact rendered heights, and the new lifecycle section was hidden, so every later section starts at the same subpixel offset as on main.

| Section | 1440 normal | 390 normal | 1440 forced | 390 forced |
|---|---|---|---|---|
| Header / navigation | 3,877 (nav labels) | 0 (menu collapsed) | 3,781 (nav labels) | 0 |
| Hero + problem | changed (overlay) | changed (overlay) | changed (overlay) | changed (overlay) |
| Reasoning chain | changed (overlay) | changed (overlay) | changed (overlay) | changed (overlay) |
| Domains | 0 | 0 | 0 | 0 |
| Authority | 0 | 0 | 0 | 0 |
| UNKNOWN | 0 | 0 | 0 | 0 |
| Breakpoints | 0 | 0 | 0 | 0 |
| Evidence | 0 | 0 | 0 | 0 |
| Scale | 0 | 0 | 0 | 0 |
| Methodology | 0 | 0 | 0 | 0 |
| Review | 0 | 0 | 0 | 0 |
| Footer | 0 | 0 | 0 | 0 |

Overlays in this folder show the branch image with differing pixels painted red. Overlays are only written for regions expected to change (zero-difference regions would be identical to the branch image).
