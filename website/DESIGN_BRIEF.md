# AI Trust Graph Website - Visual Design Brief

## Desired impression

The site should feel like a modern AI-security research initiative:
- technically serious;
- visually distinctive;
- calm and premium;
- credible to CISOs, security architects, auditors, risk leaders and researchers;
- memorable to recruiters and first-time visitors.

Avoid generic cybersecurity tropes: hacker imagery, matrix code, glowing padlocks, stock AI brains and excessive neon.

## Visual reset: research-monograph direction (implemented)

Owner-approved direction for the visual reset, delivered in slices on the
`website-visual-reset` integration branch. The approved reference is the refined
prototype (`website/review-artifacts/visual-reset-prototype/*-refined.png` on the
`visual-reset-prototype-review` branch). The entire reset is implemented, in
four slices: PR A (system foundation, header/navigation, Cover), PR B (Acts II
and III with the Authority and control-breakpoint annotations), PR C (Domains,
Release/review/limitations, Canonical source, Public review) and PR D (UNKNOWN,
Evidence, Assessment lifecycle, footer and final navigation). No section keeps
the pre-reset design.

- **Positioning.** The site reads as a research monograph about a methodology:
  a title page, then acts, each with one idea, typographic rather than
  card-driven.
- **Typography roles.**
  - Display: Source Serif 4 (SIL OFL 1.1), self-hosted from
    `app/fonts/source-serif-4/` via `next/font/local`; optical sizing on.
    Cover title `--type-cover` (68px at 390 → 132px at 1440).
  - Body: Inter; 15.5–22px (Cover proposition 22px desktop, 18px mobile).
  - Metadata and identifiers only: IBM Plex Mono, 12–14px (Cover colophon
    12.5px desktop, 12px mobile).
  - Inter Tight is retired (PR D). An audit at the PR D baseline showed it was
    used only by the pre-reset UNKNOWN, Evidence, Lifecycle and footer
    headings; once those were redesigned in Source Serif 4 nothing used it, so
    it is no longer loaded and `--font-display` no longer exists. The generic
    `h1–h3` fallback is Inter. Three families remain: Source Serif 4, Inter,
    IBM Plex Mono.
- **Grid.** A left margin column (`--vr-edge`, up to 56px) for running head
  and marginal references; a text column starting at `--vr-margin` (up to
  200px); a right margin `--vr-right` (up to 120px). Composition frames are at
  most 1440px wide and centred.
- **Colour roles.** Paper `--paper`, graphite `--graphite`, near-black
  `--ink`. **Cyan is the one primary structural / navigation accent**
  (`--cyan` `#0b7685` on paper, `--cyan-on-dark` on graphite): the reading
  path, primary-link and hover underlines, chain-key and focus accents, and
  the shared Domains connectivity (anchors and leaders). **Secondary colours
  are decorative only**: muted slate indigo (`#4d55a8`), green and a muted
  brass ochre (`--amber` `#8a702c`) appear as a few incidental graph nodes and
  never cluster or sit beside a particular domain, grade, phase or state.
  No gradients. **Colour never carries assurance, risk, maturity, evidence
  sufficiency, lifecycle state, domain rank or pass/fail meaning**; every
  section reads correctly in monochrome. Forced-colours mode uses system
  colours (decorative graph → GrayText).
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
  (Evidence) is a one-line pointer to the Evidence section (`#evidence`);
  annotation d (Decision), "Accountable decision." (§0.10 theory map), links —
  like the chain's Decision key — to a compact local note (`#decision`) below
  the short annotations: every sentence verbatim from Artifact #2 (§7.4 a
  decision is accountable disposition, separate from findings; §3.8 not
  collapsed into a single status field; §1.10 accountable approval, not
  inference, determines accepted state), cited to the pinned Artifact #2.
  It is deliberately never linked to UNKNOWN or Evidence: Decision is not an
  assurance state.
- **Domains — six coordinated lenses over one graph** (`components/DomainsLens.tsx`).
  One connected graph band (decorative, `aria-hidden`) with six identical
  anchor nodes on its lower edge; on wide screens (≥ 1280px) the six canonical
  domains hang from them as equal columns, each a hairline rule reading the
  same graph. Each shows only its name (serif), its §8.1 purpose and a two-line
  mono count ("12 controls / 6 capabilities") that opens a native disclosure
  with the control-ID range and the six Artifact #3 capabilities. No cards, hub
  panel, D-numbers or per-domain colour: every anchor and rule is drawn the
  same, and the italic "Explanatory figure" note states that position, line and
  order imply no ranking, hierarchy, sequence or maturity. Narrower layouts keep
  the band above a three-, two- or one-column list.
- **Release, review and limitations — a publication colophon**
  (`components/StatusColophon.tsx`). Mono labels over quiet rules: status,
  bundle, snapshot, review, validation, one factual authorship line and change
  review; the five external gates as text marked "Pending" (no badges, traffic
  lights or seals); the manifest §6 principle and roadmap note; limitations set
  apart under a rule. Authorship stays one line, subordinate to the work.
- **Canonical source — a table of contents** (`components/CanonicalSource.tsx`).
  The METHODOLOGY_MANIFEST first as the authority map, where the model's figures
  are defined, then the twelve artifacts in the manifest's reading order as
  hairline rows (number · title · role · version) and the non-normative #13
  companion; every link pinned to the bundle commit. Not a GitHub CTA.
- **Public review — an invitation** (`components/ReviewInvitation.tsx`). On
  graphite, the four routes as typographic entries with plain text links;
  canonical changes still require a formal change proposal (Artifact #11 §2.4).
  No buttons, growth mechanics or sales language.
- **UNKNOWN — an assurance invariant** (`components/UnknownAssurance.tsx`). The
  page's second graphite field. "UNKNOWN *stays* UNKNOWN." is the dominant serif
  assertion, with Act II's open dashed ring as a small decorative motif on wide
  screens. A typographic non-equivalence argument (UNKNOWN ≠ Safe / Failed /
  Zero risk / N/A; spoken "is not") sits beside the SC-INV-01 invariant;
  "UNKNOWN is not Not Tested." follows as a two-row register of meanings, with
  numeric and reporting treatment in one native disclosure (a real table) and
  the E0 rule. The five non-numeric result states are a quiet mono inline list,
  then the no-single-overall-trust-score statement. UNKNOWN is an assurance
  state, not an error: no amber, red, warning icon, alert box, traffic light or
  side-by-side cards; every state is drawn identically.
- **Evidence — six grades of evidentiary support** (`components/EvidenceSequence.tsx`).
  One quiet axis: a hairline with six identical hollow nodes and textual stops
  (mono E-number, serif name), vertical below 1024px. The caption states that
  the order means increasing evidentiary support only, not safety,
  desirability or compliance. No colour progression, size change, fill, ladder
  or gauge. Meaning and what each grade can support sit in one disclosure as a
  register; the three §1.8 reading rules follow as a three-column register
  (stacked on narrow screens).
- **Assessment lifecycle — thirteen controlled phases** (`components/AssessmentLifecycle.tsx`).
  Deliberately unlike Act III's chain: the iteration rule leads, then a
  numbered register (mono number, serif name, muted outcome; 1–7 and 8–13 in two
  columns on wide screens, one column below 1024px). No nodes, arrows, markers,
  check marks, fills or "current" state. Gate tests sit in one disclosure; the
  ten assessment types are a two-column typographic list of native
  disclosures (name → definition) in Artifact #7 order, which implies no
  priority — not chips.
- **Footer — a closing colophon** (`components/SiteFooter.tsx`). Paper with a
  hairline: the name (serif), status · bundle · snapshot (mono), the
  methodology-not-product and canonical-source statement, copyright, CC BY 4.0
  and TRADEMARKS. No social links, biography, contact, CTA or newsletter.
- **Navigation (final).** Method → `#flow`, Domains → `#domains`, Assurance →
  `#unknown` (the first section of the UNKNOWN → Evidence → Lifecycle
  sequence), Source → `#methodology`, GitHub ↗. `#evidence` keeps its id for
  annotation c.
- **Cover context line (website refinement).** Under the unchanged
  proposition, one smaller, muted line for a first-time visitor: "AI risk is
  not located only inside a model. It emerges through relationships that must
  be made visible, evidenced and governed as a connected system." It is
  explanatory website copy compressed from the Artifact #1 Manifesto CORE
  PROPOSITION (the enumerated list elided), not canonical text, and makes no
  outcome claim. The Cover still fits the first viewport at 1024–1440.
- **"On this page" (website refinement, `components/PageIndex.tsx`).** A
  quiet typographic index directly below the Cover's colophon and before
  Act II: a mono label in the margin column and eight plain fragment links in
  page order — Method, Domains, UNKNOWN, Evidence, Lifecycle, Status, Source,
  Review. Static links in a labelled `<nav>`; no numbering, progress,
  active state, sticky panel or script; two columns of 44px targets on small
  screens. Website navigation only, not a methodology hierarchy or sequence.
  The nav carries the stable id `page-index`.
- **Deep-page return links (`components/PageIndexReturn.tsx`).** At the end
  of six major reading blocks — Act III, Domains, UNKNOWN, Evidence,
  Lifecycle and Canonical source — one quiet mono "↑ On this page" link back
  to `#page-index` (none in the Cover, Act II, Status, Review or footer). A
  plain anchor with a hairline underline and the cyan hover; no button
  chrome, sticky or fixed position, script, active or progress state.
  Publication navigation, not an app control.
- **Brand mark (`components/BrandMark.tsx`).** "A relationship with a
  breakpoint": three graph nodes in a closed triangle of relationships, two
  holding and the third interrupted by a perpendicular control bar —
  connection is not authority, and a path can be interrupted (Act II's
  unresolved path, annotation b's control breakpoint). Replaces the
  provisional node-cluster mark. Monochrome `currentColor` inline SVG (no
  text, gradient, filter, image or dependency), 20px in the header, decorative
  inside the "AI Trust Graph — back to top" link; it follows the text colour
  on paper, graphite and in forced colours. The wordmark stays "AI Trust
  Graph" with no tagline.
- **Domains emphasis (website refinement).** A taller graph band, firmer
  shared edges, more space above the band, and the six anchors and their
  leaders in the one structural cyan — all six identical. The band carries no
  secondary accent nodes, so no colour sits beside any one domain. Names,
  order, purposes and the no-ranking note are unchanged.
- **Lifecycle density (website refinement).** The same content — 13 phases
  with outcomes, iteration rule, gate tests, ten assessment types — in a
  shorter frame: tighter row padding, outcome line height and section gaps
  (about 16% shorter at 1440 and 15% at 390). Outcomes stay visible.
- **Whole-page cadence.** Paper (Cover) · graphite (Act II) · paper (Act III,
  Domains) · graphite (UNKNOWN) · paper (Evidence, Lifecycle, Release, Source) ·
  graphite (Public review) · paper (footer).

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

(Final visual-reset sequence; every item is redesigned.)

1. Cover (visual reset, Act I) - methodology name, approved proposition, a subordinate context line (from the Manifesto core proposition), "Read the methodology ↗" and "How it reasons ↓" text links, decorative graph field, running colophon (status, bundle, snapshot date, not independently validated); followed by the "On this page" index (website navigation only)
2. Act II, why graph reasoning (visual reset) - "AI systems are no longer isolated models", the Manifesto thesis, the topology invariant as pull quote, continued graph field ending unresolved, "Illustrative topology"
3. Act III, how the method thinks (visual reset) - the nine-stage canonical Artifact #2 §0.10 chain as a typographic argument; theory map in one disclosure; annotations a (Authority and Influence: "Access is not authority"), b (Controls: control breakpoints), c (Evidence, pointing to the Evidence section) and d (Decision: "Accountable decision.", linking to a compact local Decision note, `#decision`, quoting Artifact #2 §7.4 · §3.8 · §1.10)
4. Six domains (visual reset) - one connected graph band read by six equal domain lenses (names, §8.1 purposes, counts; controls and capabilities in disclosures), with an explanatory no-ranking note
5. UNKNOWN (visual reset) - "UNKNOWN stays UNKNOWN." on graphite; UNKNOWN ≠ Safe / Failed / Zero risk / N/A; SC-INV-01; UNKNOWN is not Not Tested (meanings, numeric and reporting treatment, E0 rule); the non-numeric result states; no single overall trust score
6. Evidence (visual reset) - E0–E5 on one quiet axis of increasing evidentiary support; meanings and what each grade can support in a disclosure; the three §1.8 reading rules
7. Assessment lifecycle (visual reset) - the iteration rule, then the 13 Artifact #7 phases as a numbered register with outcomes (separate from the reasoning chain), gate tests in a disclosure, the ten assessment types as a typographic list
8. Release, review and limitations (visual reset) - a publication colophon: status, bundle, snapshot, review state, validation statement, one-line authorship, change review, the five manifest gates (Pending, as text), limitations
9. Canonical source (visual reset) - the manifest as authority map, where the model's figures are defined (6 domains, 72 controls, 36 capabilities, M1-M5, E0-E5), then the artifacts in reading order as a table of contents
10. Public review (visual reset) - four equal entry points as typographic rows: report a finding, share feedback, propose a change, inspect the source
11. Footer (visual reset) - name, status · bundle · snapshot, methodology-not-product and canonical-source statement, copyright, CC BY 4.0, TRADEMARKS

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
