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

The narrative restructure (October 2026) puts the reason for the research
before the mechanics. The order below is mandatory and enforced by
`scripts/check-claims.mjs`.

| # | Section | Anchor | Purpose | Visual device |
|---|---|---|---|---|
| 1 | Why AI Trust Graph exists (hero) | `#top` | Name, descriptor, why it was created, author, actions; release metadata as one quiet line | Navy field; decorative graph motif (desktop only, hidden from assistive technology) |
| 1 | Why AI Trust Graph exists (narrative) | `#why` | Why the work was initiated | Large opening statement beside the narrative; component vs connected-system comparison (labelled conceptual); proposition |
| 2 | The problem | `#problem` | What connected AI systems make difficult to assess | Seven-step synthetic scenario path; what the components do not establish; five ≠ distinctions |
| 3 | The big idea | `#big-idea` (+ `#frameworks`) | What changes in the unit and method of reasoning | Five stacked concepts; "What changes?" panel; framework positioning |
| 4 | The signature visual | `#graph` | What the idea looks like applied to the same scenario | Interactive graph (desktop) and a vertical drawing (mobile), legend, structured list alternative |
| 5 | The methodology | `#methodology` (+ `#page-index`) | How reasoning and assessment are performed | Subsection index and reading-depth control |
| 5.1 | Reasoning chain | `#flow`, `#decision` | From what exists to what can be defended | Editorial serpentine (desktop), two-column snake (tablet), vertical (mobile) |
| 5.2 | Authority and influence | `#authority`, `#breakpoints` | Access is not authority | Six offset assertion tiles, then authority classes and breakpoints |
| 5.3 | Evidence and UNKNOWN | `#unknown`, `#evidence` | UNKNOWN stays UNKNOWN | Discipline points, hatched UNKNOWN panel, relations with symbols, grades |
| 5.4 | Six assurance domains | `#domains` | Coordinated lenses over one graph | Constellation: a sticky hub drawing beside a staggered two-column list |
| 5.5 | Assessment lifecycle | `#lifecycle` | How fieldwork is conducted | Staged loop (desktop), timeline (mobile) |
| 5.6 | Worked example | `#example` | The scenario, assessed | Six views: System, Graph, Authority, Evidence, Control, Decision |
| 6 | The artifacts | `#artifacts` | Where specifications are maintained | Compact rows with expandable details, filters, source register |
| 7 | Publications | `#publications` | Where the citable research will appear | Config-driven card; publication-only actions listed as not yet available |
| 8 | About the author | `#author` | Who created and maintains the methodology | Two-column editorial text, verified links, independence statement |
| | Review and contribution | `#status`, `#review` | Critique, status and gates | Review actions, release facts, pending gates |
| | Footer | | Facts, links, notices, licence | Navy colophon |

Every anchor of the previous version still resolves. `#problem` was a legacy
anchor on the why section; it is now the problem section itself, which is
where a reader following an old "problem" link expects to land.

### Narrative restructure decisions

- **Hero starts with the reason, not the mechanics.** The descriptor and
  supporting message come from the narrative brief; release metadata is one
  compact line (version, status, independent review, not validated). The
  hero graph lost its labels and UNKNOWN tag and became a decorative motif,
  because the semantic graph now has its own section and repeating it in the
  hero would introduce mechanics too early.
- **One scenario runs through the page.** The problem, the signature visual
  and the worked example all use the same synthetic procurement request, so
  each section adds depth rather than introducing a new example.
- **The distinctions are pairs, not a ladder.** "Connected ≠ Authorised" and
  the other four are shown as separate rows with a caveat that they are not a
  linear sequence; screen readers hear "is not".
- **"Unsupported assertion" maps to the canonical DISPUTES relation.** The
  signature visual shows the approval control's claimed scope (attested, E2)
  disputed by the workflow configuration (E3). This uses Artifact #6 §0.9
  vocabulary instead of inventing a new state.
- **The graph qualifier was amended for accuracy.** The brief proposed "A
  connection alone does not prove reachability, authority, invocation or
  exploitability". A drawn CONNECTS_TO relationship does represent
  connectivity, so the site says a connection drawn in the graph does not, on
  its own, prove reachability *under current conditions*, authority,
  invocation or exploitability (Artifact #12 CONNECTS_TO caveat, Artifact #1
  §4 invariant).
- **Mobile graph is a separate composition**, not a scaled copy: a vertical
  drawing with labels beside the nodes, so no label is crossed by an edge.
- **Methodology subsections are h3.** Section 5 is one h2 with six h3
  subsections, so the heading outline matches the narrative.
- **Domains show only purpose, question, output and links** (integration
  notes and capability lists were removed from the page; they remain in the
  linked artifacts).
- **Outcomes (Discover to Reassess) were removed.** They duplicated the
  lifecycle and introduced mechanics before the reader needed them.
- **Framework positioning moved into the big idea**, where it answers "does
  this replace control-based assessment?" at the moment the question arises.
- **Central configuration.** `app/site.config.ts` holds version, status,
  review state, repository, author, licence, social metadata and the
  whitepaper record. Publishing is a data change there.

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
9. **The signature graph has two drawings and a list.** A wide drawing for
   laptop and desktop, a separately composed vertical drawing for mobile, and
   a list of every node and relationship as the structured text alternative.
   Elements can be selected in the drawing (pointer) or the list (pointer or
   keyboard); on desktop the detail shows in a sticky panel, on narrow screens
   under the item. Without JavaScript every detail is shown.
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
15. **Navigation collapses at 960px.** Six journey items plus the separate
    GitHub action fit above that width; the noscript fallback shows them inline.
16. **Minimal JavaScript.** Client components: navigation menu, depth control,
    signature graph inspector, worked-example tabs, artifact filters, the
    (post-publication) copy buttons, and the existing `/graph/` explorer.
    Everything else is static.
17. **Author section is text only.** No portrait (none supplied), no employer
    logos. Only the verified GitHub profile is linked; LinkedIn, ORCID and
    Zenodo appear automatically once verified URLs are added to
    `app/site-content.ts`.
18. **Independence statement is the author's own statement.** The
    methodology author approved the wording (2026-10-02) as a statement about
    their own independent research. It is not a legal opinion, names no
    employer and claims no external clearance.

## 4. Tokens

All tokens are CSS custom properties at the top of `app/globals.css`:
colour (foundation, domain light / bright / tint, state), type (families,
`clamp()` sizes, line height, measure), spacing (4px scale, section padding,
gutter), radii, borders, shadows, motion (durations, easing), containers.
Breakpoints are documented there (CSS cannot use custom properties in media
queries): 600px, 768px, 900px, 1024px, 960px (navigation), 1280px.

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
  lists legal approval as pending. The site follows the manifest; the
  difference is tracked in the repository and no longer shown on the site.
- The brief's evidence-state vocabulary is not canonical (decision 5).
- No verified LinkedIn, ORCID or Zenodo URL exists yet (decision 17). The
  Zenodo profile follows the whitepaper upload.
