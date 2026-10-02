# AI Trust Graph Website: Design Brief and Decisions

This file records the design of the research-site redesign (October 2026) and
every decision taken while building it. Earlier directions (the
"research-monograph" visual reset and its owner rulings on colour, cards and
D-numbers) are in the git history of this file. The redesign brief supersedes
those visual rulings; the methodology-semantic rulings remain binding and are
enforced by `scripts/check-claims.mjs`.

## 1. Identity and positioning

- **AI Trust Graph is the methodology.** The site explains it; the GitHub
  artifacts define it.
- **Siva Sethumadhavan is its independent author.** The author appears in the
  hero line ("Independent research by …"), the About section, the footer and
  structured data. No employer, logo, portrait or endorsement appears.
- **GitHub is the canonical source.** Every artifact link is pinned to the
  bundle commit (`BUNDLE_REF`), and the site says that the artifacts take
  precedence on any conflict.
- **A whitepaper is forthcoming, not published.** It is shown as "in
  preparation" everywhere. No PDF, DOI, record, date or citation exists on the
  site until `app/publication.ts` is filled with verified values.
- **Not a product.** No Products, Pricing, Demo, Consultation, Solutions or
  Customers navigation, and no contact form.

## 2. Page structure (single page with anchors)

| # | Section | Anchor | Purpose | Visual device |
|---|---|---|---|---|
| | Hero | `#top` | Name, line, author, actions, release status | Navy field; hero graph with trust boundary and one UNKNOWN authority assertion |
| | On this page | `#page-index` | Orientation and reading depth | Numbered index; Overview / Detail / Sources control |
| 01 | Why it exists | `#why` (+ legacy `#problem`) | Narrative; component vs connected view | Side-by-side conceptual comparison (labelled conceptual) and two Manifesto quotes |
| 02 | Methodology | `#methodology` | What a practitioner does | Six outcome blocks with different shapes and domain tints |
| 03 | The graph | `#graph` | The signature path read the methodology's way | Interactive SVG + inspector; legend; text list is the accessible equivalent |
| 04 | Reasoning chain | `#flow`, `#decision` | Nine canonical stages | Serpentine (desktop), two-column snake (tablet), vertical (mobile) |
| 05 | Authority | `#authority`, `#breakpoints` | Access is not authority | Six independent tiles, offset so they cannot read as steps; "Not a ladder" note |
| 06 | Evidence and UNKNOWN | `#unknown`, `#evidence` | UNKNOWN discipline; evidence relations; grades | Hatched violet UNKNOWN panel; relation list with symbols; graded bars |
| 07 | Domains | `#domains` | D1 to D6 as lenses over one graph | Coloured domain panels with glyphs and alternating edge treatment; "one graph" band |
| 08 | Lifecycle | `#lifecycle` | Thirteen fieldwork phases | Staged loop (desktop), tiles (tablet), timeline (mobile); Reassess loops back |
| 09 | Worked example | `#example` | Synthetic procurement agent | Four views: System, Graph, Evidence, Decision (tabs with JS; all views without) |
| 10 | Frameworks | `#frameworks` | Complementary positioning | Two panels joined by "+", boundary note |
| 11 | Artifacts | `#artifacts` | Library with filters | Grouped cards; filters All / Foundation / Assessment / Execution / Published / Release candidate |
| 12 | Publications | `#publications` | Whitepaper status | Config-driven card |
| 13 | About the author | `#author` | Restrained author note | Text only, verified links only, independence statement |
| 14 | Status and review | `#status`, `#review` | Release facts, gates, critique invitation | Fact card, pending-gate list, review panel |
| | Footer | | Facts, links, notices, licence | Navy colophon |

Sub-pages: `/graph/` (existing non-normative implementation view), `/privacy/`,
`/accessibility/`, and the 404 page.

Every anchor of the previous site still resolves (`#problem`, `#flow`,
`#authority`, `#breakpoints`, `#evidence`, `#decision`, `#domains`, `#unknown`,
`#lifecycle`, `#status`, `#review`, `#methodology`, `#page-index`).

## 3. Design decisions

1. **Navy and paper alternate by section.** Dark sections carry the
   "connected system" material (hero, graph, authority, publications); paper
   and white carry reading material. This gives rhythm without decoration.
2. **Six domain accents** (cyan, teal, violet, coral, amber, green), each with
   a light value for paper (≥ 4.5:1 for text, verified) and a bright value for
   navy (≥ 4.5:1, verified). The same accents colour hero nodes, outcomes,
   chain stage groups and artifact groups, so colour is a wayfinding system,
   not a rating.
3. **State colours never stand alone.** SUPPORTS / CORROBORATES green with ✓,
   QUALIFIES amber with ◐, DISPUTES coral-red with ✕, UNKNOWN violet with "?",
   dashed or dotted lines and hatching. Candidate edges are dashed; UNKNOWN
   edges are dotted. Every badge contains its word.
4. **UNKNOWN is violet, never green or red.** Violet sits outside the
   good/bad axis, which is how the methodology treats UNKNOWN: not safe, not
   automatically unsafe.
5. **Canonical evidence relations instead of the brief's states.** The brief
   suggested "supported / partially supported / conflicting / unsupported".
   These are not canonical. The site uses the Artifact #6 §0.9 relations
   (SUPPORTS, CORROBORATES, QUALIFIES, DISPUTES) plus the §0.5 UNKNOWN state.
6. **Chain and lifecycle look different on purpose.** The chain is nine
   numbered cards in a serpentine; the lifecycle is a loop of thirteen phase
   tiles. Both sections say in words that they are different constructs.
7. **Authority tiles are an unordered list and visually offset**, so the six
   assertions cannot read as a ladder; the "Not a ladder" note says it too.
8. **Domains are not identical boxes.** Each has its own accent, glyph and
   gradient, and every second panel moves its accent edge from the side to
   the top. The "one graph" band under them states that they share one model.
9. **The signature graph has two equal representations.** The SVG (with
   title and description) and a list of every node and relationship. On
   desktop the selected element's detail is shown in a sticky panel; on
   narrow screens the detail opens under the item and the drawing scrolls
   sideways. Without JavaScript every detail is shown.
10. **The worked example is new synthetic content.** Artifact #10 has no
    procurement case. The example is labelled "Synthetic example for
    methodology illustration only" and uses only canonical vocabulary.
11. **Theory map: eight rows, nine stages.** The §0.10 table's last row covers
    both Evidence and Decision; both stages show that shared question rather
    than an invented ninth.
12. **Reading depth control.** Overview hides detail and source notes;
    Detail is the default; Sources opens every source note. Nothing is stored.
    Without JavaScript the control is hidden and the page shows full detail.
13. **Citations are compact.** A "§ Source" disclosure under each section
    names the artifact and section and states which text is verbatim and
    which is website explanation.
14. **Typography.** Source Serif 4 for display headings and canonical
    quotations; Inter for body (16px mobile to 18px desktop via `clamp()`);
    IBM Plex Mono for labels, predicates and IDs. Lines are held to 68ch.
15. **Navigation collapses at 1100px**, because eight items need that width;
    the noscript fallback shows them inline.
16. **Minimal JavaScript.** Client components: navigation menu, depth control,
    signature graph inspector, worked-example tabs, artifact filters, the
    (post-publication) copy buttons, and the existing `/graph/` explorer.
    Everything else is static.
17. **Author section is text only.** No portrait (none supplied), no employer
    logos. Only the verified GitHub profile is linked; LinkedIn, ORCID and
    Zenodo appear automatically once verified URLs are added to
    `app/site-content.ts`.
18. **Independence statement is editorial, not legal.** METHODOLOGY_MANIFEST
    §6 lists the employer / IP / confidentiality review as pending, so the
    statement names no employer and claims no clearance. Replace it with
    approved wording when that gate closes.

## 4. Tokens

All tokens are CSS custom properties at the top of `app/globals.css`:
colour (foundation, domain light / bright / tint, state), type (families,
`clamp()` sizes, line height, measure), spacing (4px scale, section padding,
gutter), radii, borders, shadows, motion (durations, easing), containers.
Breakpoints are documented there (CSS cannot use custom properties in media
queries): 600px, 768px, 900px, 1024px, 1100px (navigation), 1280px.

## 5. Accessibility and motion

- WCAG 2.2 AA target. axe-core reports 0 violations on every page at 390px
  and 1440px (see the PR for the run).
- Skip link; visible focus rings; 44px minimum control height for buttons,
  filters, tabs and menu items.
- Tabs follow the ARIA tab pattern with arrow, Home and End keys.
- Scrollable regions (graph drawing, tables) are focusable and labelled.
- `prefers-reduced-motion` removes smooth scrolling and transitions;
  `forced-colors` restores system colours in SVG and controls.

## 6. Conflicts recorded, not reconciled

- Artifact header "Depends on" lines cite superseded versions (#3 cites CCM
  v1.1; #5 cites CCM v2.0.0 and Scoring v2.0.0; #8 cites Assessment
  Methodology v1.0, Evidence Model v1.0 and MCL v1.0). The library lists
  dependencies by artifact number only.
- ROADMAP.md records the licence choice as made; METHODOLOGY_MANIFEST §6
  lists legal approval as pending. The site follows the manifest and states
  the difference.
- The brief's evidence-state vocabulary is not canonical (decision 5).
- No verified LinkedIn, ORCID or Zenodo URL and no approved independence
  wording exist yet (decisions 17 and 18).
