# PR #8 visual review artifacts — TEMPORARY

> **Delete this entire directory (`website/review-artifacts/`) before PR #8 is merged.**
> These screenshots are temporary review evidence for the independent visual review
> of PR #8. They are not website content, are not in `public/`, and are not part of
> the production build or static export (`out/`).

## What the screenshots represent

| Field | Value |
| --- | --- |
| Commit shown | `259061a9c8adf6628c9769be8d2d83764a129cd4` (branch `website-v1-foundation`; last commit before these artifacts were added) |
| Methodology bundle | `1.0-rc.4` (links pinned to `ec9b4571d96afdf1c423713349871459e1cf9b9b`) |
| Build | `next build` (Next.js 16.3.7, static export), served locally from `out/` with `python3 -m http.server` |
| Browser | Chromium 141.0.7390.37 (headless), driven by Playwright 1.56.1 |
| Reduced motion | **Not enabled** (`prefers-reduced-motion: no-preference`). Reduced-motion behaviour was verified separately and is not pictured. |
| Device scale factor | 1 |
| Captured | 2026-09-29 |
| Console errors during capture | 0 (desktop and mobile) |

## Viewports

| Files | Viewport (CSS px) |
| --- | --- |
| `01`–`06`, `13`–`16` | Desktop, 1440 × 900 |
| `07`–`12`, `20`–`25` | Mobile, 390 × 844 |

## Files

| # | File | Content |
| --- | --- | --- |
| 01 | `01-desktop-hero.jpg` | First viewport (hero), sticky header visible |
| 02 | `02-desktop-reasoning-chain.jpg` | Canonical Artifact #2 §0.10 reasoning chain and separate 13-phase lifecycle |
| 03 | `03-desktop-six-domains.jpg` | Six domains (D1–D6) |
| 04 | `04-desktop-unknown-not-tested.jpg` | UNKNOWN stays UNKNOWN; UNKNOWN is not Not Tested |
| 05 | `05-desktop-evidence-ladder.jpg` | E0–E5 evidence ladder |
| 06 | `06-desktop-breakpoint.jpg` | Synthetic control-breakpoint illustration (default "Stop" selected) |
| 07–12 | `07-mobile-…` to `12-mobile-…` | The same six views at mobile width |
| 13–16 | `13-desktop-full-01.jpg` … `16-desktop-full-04.jpg` | Full desktop page (12,838 px tall), top to bottom, in 4,200 px slices |
| 20–25 | `20-mobile-full-01.jpg` … `25-mobile-full-06.jpg` | Full mobile page (21,216 px tall), top to bottom, in 3,800 px slices |

### Mobile navigation fix (added after the independent visual review)

| # | File | Content |
| --- | --- | --- |
| 26 | `26-mobile-nav-closed.jpg` | 390 × 844: compact header, "Menu" button (`aria-expanded="false"`) |
| 27 | `27-mobile-nav-open.jpg` | 390 × 844: menu opened by keyboard (Tab to the button, Enter); `aria-expanded="true"`; visible focus ring; all seven destinations listed |

`26`–`27` show the **mobile-navigation fix**, built from commit `23f498989d80b16e8ef49277313330d5b8da1964`
(identical website code to `396b43c`, which only adds CI), not `259061a`. They were captured with Chromium 141.0.7390.37,
Playwright 1.56.1, reduced motion not enabled, device scale factor 1, JPEG quality 70.

Numbers 17–19 are intentionally unused: mobile full-page slices start at 20, as requested
for the review.

## Capture notes

- Section views (`02`–`06`, `08`–`12`) and full-page slices are element or page captures.
  For those, the sticky header was set to `position: static` **at screenshot time only**
  (an injected style in the capture script) so it would not overlap the captured section.
  No production content or code was changed to create the screenshots.
- On desktop the reasoning-chain rail uses a CSS scroll-linked reveal. A section capture
  can show it mid-reveal (stages slightly offset vertically); all content is present.
- JPEG quality: 60 for hero and section views, 50 for full-page slices. Hero and section
  captures are at full resolution with no downscaling.
