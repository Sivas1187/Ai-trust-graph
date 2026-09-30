# PR #15 pixel-diff results (temporary review artifact)

Main `60c00e6` vs branch, element screenshots, reduced motion. A pixel counts as different when the summed RGB difference exceeds 24.
Unchanged sections were compared **height-pinned**: on the branch, the redesigned Domains section was given main's exact rendered height, so every later section starts at the same subpixel offset as on main. Sections above Domains are unaffected by the change in height.

| Section | 1440 normal | 390 normal | 1440 forced | 390 forced |
|---|---|---|---|---|
| Header / navigation | 0 | 0 | 0 | 0 |
| Hero | 0 | 0 | 0 | 0 |
| Problem | 0 | 0 | 0 | 0 |
| Reasoning chain | 0 | 0 | 0 | 0 |
| Authority | 0 | 0 | 0 | 0 |
| UNKNOWN | 0 | 0 | 0 | 0 |
| Breakpoints | 0 | 0 | 0 | 0 |
| Evidence | 0 | 0 | 0 | 0 |
| Assessment lifecycle | 0 | 0 | 0 | 0 |
| Domains (redesigned) | changed (overlay) | changed (overlay) | changed (overlay) | changed (overlay) |

Status, Canonical source, Contribute and Footer are redesigned or new; see the main/branch screenshots in the parent folder.
Overlays show the branch image with differing pixels painted red.
