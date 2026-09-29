# AI Trust Graph Website - Visual Design Brief

## Desired impression

The site should feel like a modern AI-security research initiative:
- technically serious;
- visually distinctive;
- calm and premium;
- credible to CISOs, security architects, auditors, risk leaders and researchers;
- memorable to recruiters and first-time visitors.

Avoid generic cybersecurity tropes: hacker imagery, matrix code, glowing padlocks, stock AI brains and excessive neon.

## Signature interaction

The visual identity is the graph.

The homepage should progressively reveal:

**Objects -> Relationships -> Conditions -> Paths -> Authority and Influence -> Consequence -> Controls -> Evidence -> Decision**

(Owner ruling 1: the canonical Artifact #2 §0.10 chain, with canonical stage names and order. No simplified or competing chain is presented on the public site.)

The graph is not decorative. Every animation should reinforce methodology meaning.

## Visual language

- Base: warm off-white / near-white surfaces with dark graphite sections.
- Accent: restrained cyan/indigo spectrum.
- Typography: large editorial headings paired with highly legible technical body text.
- Lines/nodes: thin, crisp, geometric; minimal glow.
- Motion: slow, purposeful, accessible; reduced-motion support required.
- Layout: generous whitespace and strong hierarchy.

## Homepage sequence

1. Hero - name, proposition, graph, Explore Methodology / GitHub CTAs
2. Problem - "AI systems are no longer isolated models"
3. Reasoning chain - the nine-stage canonical Artifact #2 §0.10 chain, with the 13-phase assessment lifecycle shown separately
4. Six domains - responsive domain cards
5. Authority - "Access is not authority"
6. UNKNOWN - dark, high-impact assurance section
7. Control breakpoints - synthetic path visualization
8. Evidence model - E0-E5 explainer
9. Methodology scale - 6 domains / 72 controls / 36 capabilities / M1-M5 / E0-E5
10. Methodology explorer - artifact cards
11. Public review - invitation to challenge assumptions and submit findings

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
