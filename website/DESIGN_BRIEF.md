# AI Trust Graph Website - Visual Design Brief

## Desired impression

The site should feel like a modern AI-security research initiative:
- technically serious;
- visually distinctive;
- calm and premium;
- credible to CISOs, security architects, auditors, risk leaders and researchers;
- memorable to recruiters and first-time visitors.

Avoid generic cybersecurity tropes: hacker imagery, matrix code, glowing padlocks, stock AI brains and excessive neon.

## Visual reset: research-monograph direction (in progress)

Owner-approved direction for the visual reset, delivered in slices on the
`website-visual-reset` integration branch. The approved reference is the refined
prototype (`website/review-artifacts/visual-reset-prototype/*-refined.png` on the
`visual-reset-prototype-review` branch). Implemented so far: the system
foundation, header/navigation, the Cover (Act I), Act II (why graph reasoning)
and Act III (how the method thinks, with the Authority and control-breakpoint
annotations). Every other section keeps
its previous design until its own reset PR; during construction the
integration branch is intentionally mixed.

- **Positioning.** The site reads as a research monograph about a methodology:
  a title page, then acts, each with one idea, typographic rather than
  card-driven.
- **Typography roles.**
  - Display: Source Serif 4 (SIL OFL 1.1), self-hosted from
    `app/fonts/source-serif-4/` via `next/font/local`; optical sizing on.
    Cover title `--type-cover` (68px at 390 → 132px at 1440).
  - Body: Inter; 18–22px where a section is redesigned (Cover proposition 22px
    desktop, 18px mobile). Sections not yet redesigned keep their sizes.
  - Metadata and identifiers only: IBM Plex Mono, 12–14px (Cover colophon
    12.5px desktop, 12px mobile).
  - Inter Tight stays until the remaining sections are redesigned (they still
    use it for headings).
- **Grid.** A left margin column (`--vr-edge`, up to 56px) for running head
  and marginal references; a text column starting at `--vr-margin` (up to
  200px); a right margin `--vr-right` (up to 120px). Composition frames are at
  most 1440px wide and centred.
- **Colour roles.** Paper `--paper`, graphite `--graphite`, near-black
  `--ink`; cyan = the reading path and the primary link; indigo = structural
  detail; green / amber = very sparse decorative texture. No gradients. Colour
  never encodes maturity, safety, severity, quality, ranking or pass/fail.
  Forced-colours mode uses system colours (decorative graph → GrayText).
- **Graph system** (`components/GraphField.tsx`). Hollow nodes, hairline edges,
  one restrained cyan reading path whose segments nearest the type stay neutral,
  sparse accent nodes. No labels, glow, shadows, gradients, enclosures or
  animation. Coordinates are curated data (`app/graph/`), separately composed
  for desktop and mobile, never generated. Decorative fields are `aria-hidden`
  and must never cross or obscure type; layouts reserve node-free bands for
  copy.
- **Cover composition** (`components/Cover.tsx`). Off-white title page: the
  graph field in the upper region, the large serif "AI Trust Graph", the
  approved proposition, two plain text links (Read the methodology ↗ ·
  How it reasons ↓), and a running colophon under a full-width hairline. The
  copy is bottom-anchored to the hairline, left-aligned on the text column; not
  centred. Mobile is its own composition: cropped topology above, a two-line
  title, stacked links, and a separate two-line metadata foot; the cyan path
  leaves the cover through the right edge rather than running as a rail.
- **Card and chrome reduction.** No pills, badges, buttons, framed graph cards,
  drop shadows or decorative enclosures in redesigned sections; text links and
  hairline rules carry the structure.
- **Citation primitives** (`components/Marginalia.tsx`). `MarginReference`
  (canonical-source citation in the margin column on wide screens, at the end
  of the act on narrow ones; replaces "Source:" lines as acts are redesigned)
  and `FigureNote` (a quiet italic caption such as "Illustrative topology").
  The Cover carries no citation.
- **Citation treatment in redesigned acts.** No visible "Source: …" prose. On
  wide layouts (≥ 1024px) each act and each full annotation carries a quiet
  mono marginal reference in the margin column ("Artifact #2 / §3.6 · §5.2"),
  linked to the pinned canonical artifact; on narrow layouts one act-end
  reference line lists the act's sections, with the same link.
- **Act II — why graph reasoning** (`components/ActTwo.tsx`). A full-width
  graphite act that continues the Cover's graph field: the cyan path enters
  where it left the Cover and ends in a dashed, open "unresolved" motif (the
  path is illustrative topology, never a validated path). Headline and the
  Manifesto thesis top left; the §4 topology invariant is the act's dominant
  serif pull quote, with its second sentence below; a quiet italic
  "Illustrative topology" note. No constellation, cards, tags, frame, glow or
  gradient. Desktop (≥ 1024px) is the approved 1440 × 880 composition scaled as
  a whole, so type and drawing keep their relationship; narrower layouts stack
  the copy in flow with the field in a right-hand strip, the path zig-zagging
  down it rather than running as a rail. Curated coordinates:
  `app/graph/problemField.ts`.
- **Act III — the typographic reasoning chain** (`components/ActThree.tsx`).
  The nine canonical stages set as one serif argument (54px desktop, 33px
  mobile), joined by light arrows and wrapping naturally — no numbers, dots,
  rail, progress framing or card row. The theory map sits in one quiet native
  disclosure. Four stages carry small mono superscript keys (a–d; underline
  only on hover/focus) that point to footnote-style annotations below a short
  rule.
- **Authority annotation (a).** One strong assertion line ("Can connect ≠ Can
  authenticate ≠ … ≠ Can transact", marked as an illustration, not a sequence),
  the §3.6 separation rule verbatim beside a hairline, and the §5.2 authority
  classes as a quiet inline list with the "not maturity levels / not ranked"
  sentence. No tiles, icons or ranking.
- **Control-breakpoint annotation (b).** Stop · Constrain · Detect · Contain
  as a text toggle (a native radio group: arrow keys, visible focus, selected
  state exposed semantically, works without JavaScript) over a synthetic path
  drawn in the graph grammar inside top and bottom hairlines. Each effect
  changes the drawing's shape (dashed downstream, a dotted gate, a signal ring,
  a dashed enclosure) and shows a one-line gloss, so nothing depends on colour.
  Path validation state and role sit in a quiet disclosure. Annotation c
  (Evidence) is a one-line pointer to the Evidence section until it is
  redesigned; annotation d (Decision) is a plain-text note, "Accountable
  decision." (§0.10 theory map), with no destination yet — it is deliberately
  not linked to UNKNOWN, which is an assurance state, not the Decision stage.

## Signature interaction

The visual identity is the graph.

The homepage should clearly present the canonical reasoning chain:

**Objects -> Relationships -> Conditions -> Paths -> Authority and Influence -> Consequence -> Controls -> Evidence -> Decision**

(Owner ruling 1: the canonical Artifact #2 §0.10 chain, with canonical stage names and order. No simplified or competing chain is presented on the public site.)

The graph is not decorative. Where motion is used, it must reinforce methodology meaning and must never imply progress, completion or assurance state.

## Visual language

- Base: warm off-white / near-white surfaces with dark graphite sections.
- Accent: restrained cyan/indigo spectrum.
- Diagrams may use a restrained cyan / indigo / green / amber accent palette to improve visual distinction, but colour must never encode assurance state, maturity, safety, severity or ranking by itself.
- Typography: large editorial headings paired with highly legible technical body text.
- Lines/nodes: thin, crisp, geometric; minimal glow.
- Motion: slow, purposeful, accessible; reduced-motion support required.
- Layout: generous whitespace and strong hierarchy.
- Authorship: restrained provenance only ("Methodology author" line and the footer copyright/licence line); no portrait, biography, title, employer, social links or personal-brand treatment.

## Homepage sequence

(Current sequence. Items 1–3 are redesigned; items 4–10 are unchanged until their visual-reset PRs.)

1. Cover (visual reset, Act I) - methodology name, approved proposition, "Read the methodology ↗" and "How it reasons ↓" text links, decorative graph field, running colophon (status, bundle, snapshot date, not independently validated)
2. Act II, why graph reasoning (visual reset) - "AI systems are no longer isolated models", the Manifesto thesis, the topology invariant as pull quote, continued graph field ending unresolved, "Illustrative topology"
3. Act III, how the method thinks (visual reset) - the nine-stage canonical Artifact #2 §0.10 chain as a typographic argument; theory map in one disclosure; annotations a (Authority and Influence: "Access is not authority"), b (Controls: control breakpoints), c (Evidence, pointing to the Evidence section) and d (Decision: "Accountable decision.", plain text)
4. Six domains - graph-centred lens model: the shared graph with six equal domain cards (D1-D3 | graph | D4-D6 on wide screens; graph first on narrow), capabilities in disclosures, labelled Explanatory
5. UNKNOWN - dark, high-impact assurance section
6. Evidence model - E0-E5 explainer
7. Assessment lifecycle - the 13 Artifact #7 phases as a two-row timeline, separate from the reasoning chain, with the iteration rule and assessment types
8. Release, review and limitations - status, bundle, snapshot, review state, validation statement, one-line provenance, the five manifest gates (Pending), limitations; calm and neutral
9. Canonical source - the manifest as authority map, where the model's figures are defined (6 domains, 72 controls, 36 capabilities, M1-M5, E0-E5), then artifact cards in reading order
10. Public review - four equal entry points: report a finding, share feedback, propose a change, inspect the source

The former standalone Authority and Control breakpoints sections are now annotations a and b inside Act III.

The former standalone scale band is removed; its figures live in the Domains and Canonical source sections.

## Accessibility

- WCAG-conscious contrast.
- Full keyboard navigation.
- Visible focus states.
- Semantic headings.
- Reduced-motion mode.
- No information conveyed only by color.
- Mobile-first interaction fallbacks for hover effects.

## Performance

- Static-first.
- Minimal client-side JavaScript.
- Animation components loaded only where needed.
- No autoplay video.
- Images optimized.
- Core content readable without animation.

## Technology direction

Recommended v1:
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion only for purposeful interactions
- static export
- GitHub source
- Cloudflare Pages hosting
- custom domain with HTTPS enforced
