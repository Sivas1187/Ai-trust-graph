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
| `npm run check` | Typecheck, build, then `scripts/check-links.mjs` (in-page anchors, internal links, and every GitHub link resolves to a file in this repository), `scripts/check-claims.mjs` (forbidden claims, banned vocabulary, em dashes, emails, trackers, DOI before publication, and canonical content and order in every section) and `scripts/check-headers.mjs` (production `out/_headers` policy, no HSTS, every inline script allowed by a CSP hash, required export assets present). |
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
| `app/content.ts` | Canonical data: release facts, artifact registry, reasoning chain, theory map, lifecycle, grades, result states, domains, gates, pinned links (`BUNDLE_REF`). Each entry names its source artifact and section. |
| `app/site-content.ts` | Redesign content: author, outcomes, chain stage notes, domain detail, evidence relations, framework positioning, artifact grouping and dependencies. Each entry is marked CANONICAL or EDITORIAL. |
| `app/publication.ts` | Whitepaper record and citation generator (APA, IEEE, BibTeX). Drives the hero action, Publications section, footer and JSON-LD. |
| `app/page.tsx` | Homepage section order. |
| `app/components/site/` | Homepage sections and shared primitives (`Primitives.tsx`: section head, source note, external link, detail). Client components: `SignatureGraph`, `WorkedExample`, `ArtifactLibrary`, `DepthControl`, `CopyButton`. |
| `app/components/PrimaryNav.tsx`, `BrandMark.tsx`, `GraphExplorer.tsx` | Navigation menu (client), brand mark, `/graph/` explorer (client). |
| `app/globals.css` | Design tokens and all homepage styles (see the header comment). `app/graph/graph.css` styles `/graph/`. |
| `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/icon.svg`, `app/apple-icon.png`, `public/og.png` | Metadata, canonical URL (`https://aitrustgraph.org`), Open Graph / Twitter, JSON-LD (WebSite, Person, CreativeWork), robots and sitemap. |
| `app/privacy/`, `app/accessibility/`, `app/not-found.tsx` | Privacy notice, accessibility statement, 404. |
| `public/_headers` | **Active** Cloudflare Pages response headers (CSP, nosniff, Referrer-Policy, Permissions-Policy, framing). No HSTS. |
| `DESIGN_BRIEF.md` | Design decisions, tokens, accessibility approach, recorded conflicts. |
| `WEBSITE_CONTENT_MAP.md` | Section-to-source traceability and permitted / forbidden claims. |
| `DEPLOYMENT.md` | Production configuration, header policy, redirect runbook, verification and rollback. |

## Maintenance

All values below are edited in one place; `npm run check` then verifies the
result against the manifest and the claims rules.

- **New release or status change.** Update `release` (bundle, status, snapshot,
  snapshot label), `BUNDLE_REF`, `reviewStatus`, `pendingGates` and
  `artifacts` versions in `app/content.ts`. `check-claims` reads the bundle,
  status and snapshot from `../METHODOLOGY_MANIFEST.md` and fails if the hero
  or status section disagrees.
- **Publishing the whitepaper.** Only after the Zenodo record and DOI exist:
  in `app/publication.ts` set `status: "published"` and fill `doi`,
  `zenodoUrl`, `pdfUrl`, `publishedDate` (YYYY-MM-DD), `licence` and
  `abstract`; add earlier versions to `versions`. The hero then offers the
  PDF, the Publications section shows the record, Copy DOI and APA / IEEE /
  BibTeX citations, and a ScholarlyArticle is added to the JSON-LD. While
  `status` is "in-preparation", `check-claims` rejects any DOI, PDF link,
  download wording or scholarly metadata.
- **Author links.** Add verified URLs to `author.links` in
  `app/site-content.ts` (LinkedIn, ORCID, Zenodo). Empty values are not
  rendered. `check-claims` rejects author-section links other than the
  verified GitHub profile until the guard's allow-list is updated with the
  new verified URL.
- **Independence statement.** Replace `author.independence` with the approved
  legal wording once the employer / IP / confidentiality gate closes.
- **Canonical text.** Correct CANONICAL entries only to match the pinned
  artifact. EDITORIAL text follows the writing rules: British English, no em
  dashes, no marketing vocabulary (enforced by `check-claims`).
- **Adding a section.** Use `SectionHead` and end with a `SourceNote`; add
  its required sentences and ordered lists to `scripts/check-claims.mjs`.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md). The site is live at **https://aitrustgraph.org** on
Cloudflare Pages:

- Production branch: `main` (automatic deployments)
- Root directory: `website`
- Build command: `npm ci && npm run build`
- Build output directory: `out`
- Node.js: 22
- Security headers: **active in production** via `public/_headers` (PR #9)
- `www` → apex redirect: **configured and verified** (Cloudflare Redirect Rule, 301, path and query preserved; see DEPLOYMENT.md)
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
