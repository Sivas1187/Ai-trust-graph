# AI Trust Graph Website

This directory contains the public explanatory website for AI Trust Graph.

The website is **not** the canonical methodology. See `../METHODOLOGY_MANIFEST.md` and `WEBSITE_GOVERNANCE.md`.

## Local development

```bash
cd website
npm ci          # or `npm install`
npm run dev     # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server. |
| `npm run build` | Production static export to `out/`. |
| `npm run typecheck` | `tsc --noEmit`. |
| `npm run check` | Typecheck, build, then `scripts/check-links.mjs` (in-page anchors, internal links, and every GitHub link resolves to a file in this repository) and `scripts/check-claims.mjs` (prohibited-claims scan of rendered text and metadata). |

Next.js is configured with `output: "export"`, producing a static `out/` directory
suitable for Cloudflare Pages. Preview it with any static server, e.g.
`python3 -m http.server -d out 4173`.

## Structure

| Path | Role |
| --- | --- |
| `app/content.ts` | All methodology-derived copy, each entry annotated with its canonical source artifact and section. Edit here first; never edit canonical artifacts to match the site. |
| `app/page.tsx` | Homepage narrative. |
| `app/components/` | Synthetic hero graph and control-breakpoint illustration (server components; no client JS). |
| `app/globals.css` | Visual system (tokens, layout, reduced-motion handling). |
| `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/icon.svg`, `app/apple-icon.png`, `public/og.png` | Metadata, canonical URL (`https://aitrustgraph.org`), Open Graph/Twitter, robots and sitemap. |
| `DEPLOYMENT.md`, `deploy/_headers.example` | Cloudflare Pages and security-header guidance. **Not active.** |

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md). Summary of the proposed Cloudflare Pages configuration:

- Production branch: `main` after website PR approval
- Root directory: `website`
- Build command: `npm ci && npm run build`
- Build output directory: `out`
- Node.js: 22 LTS (minimum 20.9)
- Custom domain: `aitrustgraph.org` (owner-selected; binding not yet configured)
- HTTPS: enforce at the Cloudflare edge; redirect HTTP to HTTPS
- Add HSTS only after custom-domain HTTPS is confirmed stable

## Publication gate

Do not deploy the website as the official methodology site until:
1. content and semantic review passes;
2. branding/domain decision is approved;
3. production build passes;
4. mobile/accessibility review passes;
5. external-facing status text remains consistent with the canonical repository.

## Engineering workflow

Recommended:
**Claude builds -> independent semantic/code review -> owner approval -> merge.**

Website changes that alter methodology meaning must first update the canonical methodology through its governance process.
