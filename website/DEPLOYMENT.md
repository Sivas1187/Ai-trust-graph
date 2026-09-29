# Deployment and static-host security guidance

**Status: guidance only.** Nothing in this file has been configured. Production DNS,
the Cloudflare Pages project binding and the custom domain remain owner decisions
and must wait for the review gate in [README.md](README.md#publication-gate).

Canonical production origin (for metadata only, until deployment is approved):
`https://aitrustgraph.org`.

## What the site is

- A fully static export (`out/`) produced by `next build` with `output: "export"`.
- No backend, no API routes, no server actions, no middleware, no database.
- No forms, no authentication, no cookies, no analytics, no third-party requests at
  runtime. Fonts are downloaded at **build** time by `next/font` and served from the
  site's own origin.
- No secrets or environment variables are required to build or run it.

## Proposed Cloudflare Pages settings

| Setting | Value |
| --- | --- |
| Production branch | `main` (only after PR approval and merge) |
| Root directory | `website` |
| Build command | `npm ci && npm run build` |
| Build output directory | `out` |
| Node.js version | 22 LTS (`NODE_VERSION=22`); minimum 20.9 per `package.json` engines |
| Environment variables | none required (`NEXT_TELEMETRY_DISABLED=1` optional) |
| Preview deployments | may stay enabled; previews are not canonical |

Build-time network access is needed for `npm ci` (registry) and for `next/font`
(Google Fonts API, build time only).

## Proposed edge settings (at domain-binding time)

- Always Use HTTPS: on; HTTP → HTTPS redirect.
- Minimum TLS version: 1.2.
- Redirect `www.aitrustgraph.org` → `https://aitrustgraph.org` (apex is canonical).
- Redirect the `*.pages.dev` production hostname to the apex, or mark it
  `noindex`, so only one canonical origin is indexed.
- HSTS (owner ruling 4): **not enabled.** Enable only after `https://aitrustgraph.org`
  is confirmed to serve correctly over HTTPS; start with a short `max-age`, then
  raise it. **HSTS preload must not be enabled.**
- DNSSEC: owner has enabled it; propagation is pending and does not block the
  build or review.

## Security headers

A proposed header set is in [`deploy/_headers.example`](deploy/_headers.example). It is
deliberately **not** in `public/`, so it is not active. Owner ruling 4: the headers stay
inactive until the production deployment gate, where they will be activated. Notes:

- **CSP `script-src 'unsafe-inline'`** is currently required: Next.js static export
  inlines small bootstrap scripts (`self.__next_f.push(...)`) whose content changes
  per build. Hardening option for later: generate per-build SHA-256 hashes of the
  inline scripts in `out/index.html` and replace `'unsafe-inline'` with them.
- **CSP `style-src 'unsafe-inline'`** is required for React `style` attributes used
  for animation staggering (`--i`, `--level`).
- `form-action 'none'` and `connect-src 'self'` reflect that the site collects no data.
- `frame-ancestors 'none'` + `X-Frame-Options: DENY` prevent framing.

Validate after enabling: load the site with DevTools open and confirm zero CSP
violations in the console, then re-run the checks below against the deployed URL.

## Pre-deployment checks

```bash
cd website
npm ci
npm run check        # typecheck + build + link check + claims scan
```

Then review `out/` locally with any static server, e.g. `npx serve out` or
`python3 -m http.server -d out 4173`.
