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
| `npm run build` | Production static export to `out/`, then `scripts/finalize-headers.mjs` writes the build's inline-script CSP hashes into `out/_headers`. Cloudflare Pages runs this same command. |
| `npm run typecheck` | `tsc --noEmit`. |
| `npm run check` | Typecheck, build, then `scripts/check-links.mjs` (in-page anchors, internal links, and every GitHub link resolves to a file in this repository), `scripts/check-claims.mjs` (prohibited-claims scan of rendered text and metadata) and `scripts/check-headers.mjs` (production `out/_headers` policy, no HSTS, every inline script allowed by a CSP hash, required export assets present). |
| `node scripts/serve-out.mjs [port]` | Local preview of `out/` **with** the `out/_headers` response headers applied, to test the CSP in a browser before deploying. Development aid only. |

Next.js is configured with `output: "export"`, producing a static `out/` directory
suitable for Cloudflare Pages. Preview it with `node scripts/serve-out.mjs` (applies the
production headers) or any static server, e.g. `python3 -m http.server -d out 4173`.

## Continuous integration

`.github/workflows/website-ci.yml` runs on pull requests to `main` and on pushes to `main`
that touch `website/**` or the workflow. With Node.js 22 it runs `npm ci`, `npm run check`
and `npm audit --audit-level=high`; any failure fails the workflow. It checks out full
history because the link check verifies version-pinned links against the bundle commit.
It never deploys and uses no secrets.

## Structure

| Path | Role |
| --- | --- |
| `app/content.ts` | All methodology-derived copy, each entry annotated with its canonical source artifact and section. Edit here first; never edit canonical artifacts to match the site. |
| `app/page.tsx` | Homepage narrative. |
| `app/components/` | Synthetic hero graph and control-breakpoint illustration (server components) and the primary navigation (`PrimaryNav.tsx`, the only client component: mobile menu). |
| `app/globals.css` | Visual system (tokens, layout, reduced-motion handling). |
| `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/icon.svg`, `app/apple-icon.png`, `public/og.png` | Metadata, canonical URL (`https://aitrustgraph.org`), Open Graph/Twitter, robots and sitemap. |
| `public/_headers` | **Active** Cloudflare Pages response headers (CSP, nosniff, Referrer-Policy, Permissions-Policy, framing). No HSTS. |
| `DEPLOYMENT.md` | Production configuration, header policy, www → apex redirect runbook, verification and rollback. |

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md). The site is live at **https://aitrustgraph.org** on
Cloudflare Pages:

- Production branch: `main` (automatic deployments)
- Root directory: `website`
- Build command: `npm ci && npm run build`
- Build output directory: `out`
- Node.js: 22
- Security headers: `public/_headers` (active once the production-hardening PR is merged and deployed)
- `www` → apex redirect: Cloudflare-side setup still required (runbook in DEPLOYMENT.md)
- HSTS: deliberately **off**; never HSTS preload

## Methodology links are version-pinned

The site names bundle `1.0-rc.4`, so links to normative artifacts (`docs/*`, `METHODOLOGY_MANIFEST.md`, `LICENSE`) are pinned to an immutable ref (`BUNDLE_REF` in `app/content.ts`). No Git tag or release exists for `1.0-rc.4` yet, so the ref is the bundle source commit `ec9b4571d96afdf1c423713349871459e1cf9b9b`, whose `docs/` blobs match every pin in the manifest. Replace it with the release tag once the owner creates one. Repository navigation (Issues, CONTRIBUTING, REVIEW_FINDINGS, ROADMAP, TRADEMARKS) stays on `main`. `scripts/check-links.mjs` fails if a normative artifact is linked at `main`.

## Brand mark is provisional

The graph mark used for `app/icon.svg`, `app/apple-icon.png`, the header and `public/og.png` is a **provisional placeholder**, not final branding. It is pending a separate visual-brand review; the name "AI Trust Graph" is reserved under `../TRADEMARKS.md`.

## Publication gate

The initial launch met this gate (PR #8). Substantive future changes should meet it again
before they reach `main`:
1. content and semantic review passes;
2. branding/domain decision is approved;
3. production build passes;
4. mobile/accessibility review passes;
5. external-facing status text remains consistent with the canonical repository.

## Engineering workflow

Recommended:
**Claude builds -> independent semantic/code review -> owner approval -> merge.**

Website changes that alter methodology meaning must first update the canonical methodology through its governance process.
