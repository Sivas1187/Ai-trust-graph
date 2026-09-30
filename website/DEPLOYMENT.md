# Deployment, production configuration and security headers

The website is **live at https://aitrustgraph.org** on Cloudflare Pages. It remains an
explanatory site: the GitHub methodology artifacts are canonical.

Deployment happens only through the normal flow: **merge to `main` on GitHub → Cloudflare
Pages builds and deploys automatically.** Nothing is deployed manually, and this
repository holds no Cloudflare credentials, DNS configuration or infrastructure-as-code.
Everything under "Cloudflare-side" below is done by the owner in the Cloudflare dashboard.

## Current production state

As reported by the owner after the PR #8 launch (merge commit
`7554bf16bb1a07c6010d228e20b5bbcbf4e0c244`):

| Item | State |
| --- | --- |
| Cloudflare Pages project | Configured |
| Production domain | https://aitrustgraph.org (live) |
| Production branch | `main` |
| Automatic deployments | Enabled |
| Root directory | `website` |
| Build command | `npm ci && npm run build` |
| Build output directory | `out` |
| Node.js | 22 |
| DNS | Active |
| DNSSEC | Enabled |
| SSL/TLS | Enabled |
| Security headers | **Active in production** via `public/_headers` (PR #9); CSP and companion headers verified on the live apex domain. |
| `www.aitrustgraph.org` → apex redirect | **Configured and verified.** Proxied `CNAME www → aitrustgraph.org` plus a Cloudflare 301 Redirect Rule preserves path and query string. |
| HSTS | **Deliberately disabled** pending production stability verification. |
| HSTS preload | **Must not be enabled.** |

Environment variables: none required. `NEXT_TELEMETRY_DISABLED=1` is optional.
Build-time network access is needed for `npm ci` (npm registry) and `next/font` (Google
Fonts API, build time only; fonts are then served from this site's own origin).

## What the site is

- A fully static export (`out/`) produced by `next build` with `output: "export"`.
- No backend, API routes, server actions, middleware or database.
- No forms, authentication, cookies, web storage, analytics or third-party runtime
  requests.
- No secrets are required to build or serve it.

## Security headers (`public/_headers`)

Cloudflare Pages applies response headers from a `_headers` file at the root of the build
output. `next build` copies `public/_headers` to `out/_headers`, and then
`scripts/finalize-headers.mjs` (part of `npm run build`) fills in the CSP script hashes.
`scripts/check-headers.mjs` (part of `npm run check` and CI) verifies the result.

Active policy, applied to `/*`:

| Header | Value |
| --- | --- |
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' <sha256 hashes of this build's inline scripts>; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |
| `X-Frame-Options` | `DENY` |

`/_next/static/*` also gets `Cache-Control: public, max-age=31536000, immutable`. Those
file names are content-hashed.

There is deliberately **no `Strict-Transport-Security`** and **no CSP reporting endpoint**
in this iteration. `check-headers.mjs` fails the build if HSTS appears.

### Why the policy looks like this

- **Only same-origin sources.** Every script, stylesheet, font and image is served from
  the site's own origin. There are no third-party origins, wildcards, `data:` or `blob:`
  sources, and no `'unsafe-eval'`. The application and its module code do not rely on
  `eval` or `new Function`, and the export has no inline event handlers or `javascript:`
  URLs.
  - One exception sits outside that code. Next.js also emits a legacy polyfill bundle,
    loaded only through `<script noModule>`. It contains core-js's global-object lookup,
    whose last-resort fallback is `Function("return this")`.
  - Modern browsers support ES modules, so they never download `noModule` scripts. The
    fallback is also reached only after the earlier `globalThis`/`window`/`self` checks
    fail.
  - The CSP therefore needs no `'unsafe-eval'`, and none is added.
- **Scripts: hashes, not `'unsafe-inline'`.** Each exported HTML page contains a small
  number of inline `<script>` elements, the React Server Components hydration payload.
  Their content, and possibly how many there are, can change on every build.
  `finalize-headers.mjs` therefore runs after each build: it finds every inline script
  in every exported HTML file, and writes the SHA-256 hash of each distinct one into
  `script-src`. `check-headers.mjs` then confirms that every inline script is covered.
  The build fails if the placeholder is missing or duplicated, no inline scripts are
  found, or a header line would exceed Cloudflare's 2,000-character limit.
- **Styles keep `'unsafe-inline'`: a deliberate, documented compromise.** The page uses
  React `style` attributes for animation staggering (`--i`, `--level`), and the mobile
  menu's `<noscript>` fallback uses a `<style>` element. Removing `'unsafe-inline'` would
  need `'unsafe-hashes'` plus a hash for every distinct `style` attribute value. That
  would make the header large and fragile, and CSP2-only browsers would silently drop
  the styles. With scripts
  locked down, and with no user-generated content, the residual risk from inline styles
  is low.
- **Framing** is refused by both `frame-ancestors 'none'` and `X-Frame-Options: DENY`.
- **Changed from the reviewed proposal** (`deploy/_headers.example`, now moved to
  `public/_headers`):
  1. `script-src 'unsafe-inline'` was replaced by per-build hashes.
  2. `img-src` no longer allows `data:`, which nothing uses.
  3. `interest-cohort=()` was dropped from `Permissions-Policy`. That feature (FLoC) no
     longer exists, and Chrome logs an "Unrecognized feature" console error for it.

### Cloudflare zone settings the policy assumes

The CSP is written for the site as built. The following Cloudflare features inject or
rewrite scripts at the edge and would conflict with it:

| Feature | Required state | Why |
| --- | --- | --- |
| **Rocket Loader** (Speed → Optimization) | **Off** | Rewrites inline scripts, so their hashes stop matching. The site would then fail to hydrate, and the **mobile menu would stop working**. |
| Cloudflare **Web Analytics** (Pages project → Metrics) / **Zaraz** | Off | Would inject a third-party beacon. The CSP blocks it and logs a console error. The site deliberately has no analytics. |
| **Web Analytics → Manage site → Real User Measurements (RUM)** for the `aitrustgraph.org` hostname (account level, separate from the Pages project setting) | **Disable** | Any "Enable" option injects `static.cloudflareinsights.com/beacon.min.js` at the edge for proxied requests. This was the cause of the beacon issue below. |
| Email Address Obfuscation (Scrape Shield) | Either state | The pages contain no email addresses, so it is a no-op. |


### Resolved: Cloudflare beacon injection

**Symptom.** After launch, browsers showed a CSP console error on every page: a
`<script>` for `https://static.cloudflareinsights.com/beacon.min.js` was blocked by
`script-src`. The CSP was working as intended. The script never loaded, so no data was
sent.

**Cause.** In the Cloudflare dashboard, Web Analytics → Manage site for the hostname
`aitrustgraph.org` had **Real User Measurements (RUM)** set to **"Enable, excluding
visitor data in the EU"**. With that option, Cloudflare injects the RUM snippet at the
edge into HTML served through the `aitrustgraph.org` zone, for non-EU visitors.

- This is separate from the Pages project's own Web Analytics toggle, which was already
  off. That is why `*.pages.dev` never carried the beacon.
- The snippet was injected only for browser-like requests. A plain `curl` showed clean
  HTML; a request with a browser `User-Agent` and `Accept: text/html` showed the tag.

**Fix.** Set RUM for `aitrustgraph.org` to **Disable**, then purge the zone cache. After
that, the site loaded with no CSP errors in DevTools.

**Rules going forward:**

- Keep RUM for this hostname **Disabled**. The site deliberately has no analytics.
- **Do not weaken the CSP** to allow `static.cloudflareinsights.com`.
- If the error reappears, check for the injected tag with a browser-like request:

  ```powershell
  $ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36'
  $html = (curl.exe -s -A $ua -H 'Accept: text/html,application/xhtml+xml' https://aitrustgraph.org/) -join ''
  [regex]::Match($html, '<script[^>]*cloudflareinsights[^>]*>').Value
  ```

  ```bash
  curl -s -A 'Mozilla/5.0 Chrome/141.0' -H 'Accept: text/html' https://aitrustgraph.org/ | grep -o '<script[^>]*cloudflareinsights[^>]*>'
  ```

  Empty output means no injection. Compare with the `*.pages.dev` hostname: a tag only on
  the apex means a zone or hostname-level Cloudflare setting.
- A `feature_collector.js` "deprecated parameters" console warning seen during this
  investigation came from a browser extension, not from the site.

### Verify headers after deploying

Before merging, if Pages preview deployments are enabled, open the PR's preview URL
(`*.pages.dev`), which also serves `_headers`. After merging, use the production URL.

```bash
curl -sI https://aitrustgraph.org/ | grep -iE 'content-security|x-content-type|referrer|permissions|cross-origin|x-frame|strict-transport'
# expect every header above, and NO strict-transport-security line
```

Then load the site in a browser with DevTools open and confirm:

- The Console shows no CSP violations and no errors.
- At a narrow width (≤ 900px), the **Menu** button opens and closes. This proves the
  hashed hydration scripts ran.
- Fonts, the hero graph and the favicon render.

To preview the exact policy locally before pushing:

```bash
cd website
npm run build
node scripts/serve-out.mjs 4174   # serves out/ with out/_headers applied
```

### Rollback

If a deployed policy breaks the site, use either of these:

- Revert the offending commit on `main`. Pages redeploys automatically.
- In the Cloudflare Pages dashboard, roll back to the previous deployment.

No Cloudflare setting needs to change for either.

## `www.aitrustgraph.org` → apex redirect (Cloudflare-side, configured)

Verified behaviour:

```
https://www.aitrustgraph.org/<path>?<query>  →  301  →  https://aitrustgraph.org/<path>?<query>
http://www.aitrustgraph.org/<path>?<query>   →  (HTTPS)  →  301  →  https://aitrustgraph.org/<path>?<query>
```

The redirect is done at Cloudflare's edge with a **Redirect Rule**, so a `www` request
never reaches Pages. Production uses a proxied `CNAME www → aitrustgraph.org` and the
rule below. The root redirect and a path/query preservation test were verified after
deployment.

1. **Pages custom domain for `www`: not required.**
   - With a Redirect Rule the edge answers every `www` request itself, so `www` does not
     need to be attached to the Pages project.
   - Optional fallback: in Workers & Pages → the project → Custom domains, add
     `www.aitrustgraph.org`. Pages then creates its own proxied `CNAME www → <project>.pages.dev`,
     and you skip step 2. Keep the Redirect Rule from step 3 either way, so `www` never
     serves a duplicate copy of the site.
2. **DNS record in production.** DNS → Records contains:
   - Type `CNAME`, Name `www`, Target `aitrustgraph.org`, Proxy status **Proxied** (orange cloud), TTL Auto.
   - The proxied record exists so Cloudflare's edge can answer `www` and apply the redirect rule.
3. **Create the permanent redirect.** In Rules → Redirect Rules → Create rule:
   - Rule name: `www to apex`
   - When incoming requests match → Custom filter expression:
     `(http.host eq "www.aitrustgraph.org")`
   - Then → URL redirect:
     - Type **Dynamic**
     - Expression `concat("https://aitrustgraph.org", http.request.uri.path)`
     - Status code **301**
     - **Preserve query string: checked**
   - Deploy.
4. **Path and query string.** The dynamic expression carries the path, and "Preserve query
   string" carries the query.
5. **HTTPS on both hostnames.**
   - Universal SSL covers `aitrustgraph.org` and `*.aitrustgraph.org`, which includes
     `www`. No extra certificate is needed.
   - Keep SSL/TLS → Edge Certificates → **Always Use HTTPS** on, so `http://www` is first
     upgraded to `https://www` and then redirected.
   - Do **not** enable HSTS there.
6. **Avoid redirect loops.**
   - The rule matches only the host `www.aitrustgraph.org`, and its target is the apex,
     which the rule does not match. It therefore cannot loop.
   - Make sure no other Redirect Rule, Page Rule or Bulk Redirect sends the apex back
     to `www`.
   - Do not add a Pages-level redirect for the apex.

Verify the redirect:

```bash
curl -sI "https://www.aitrustgraph.org/some/path/?a=1&b=2" | grep -iE '^HTTP|^location'
# HTTP/2 301
# location: https://aitrustgraph.org/some/path/?a=1&b=2

curl -sI "http://www.aitrustgraph.org/" | grep -iE '^HTTP|^location'
# 301 to https://www.aitrustgraph.org/ (Always Use HTTPS), then 301 to the apex

curl -sIL --max-redirs 5 "http://www.aitrustgraph.org/?x=1" | grep -iE '^HTTP|^location'
# ends in HTTP/2 200 at https://aitrustgraph.org/?x=1 after at most two redirects (no loop)

curl -sI https://aitrustgraph.org/ | grep -iE '^HTTP'
# HTTP/2 200 (apex unaffected)
```

The production state table above records this redirect as configured because the root
redirect and the path/query preservation test have passed.

## `*.pages.dev` hostname

The production `<project>.pages.dev` hostname also serves the site. Canonical metadata,
robots and the sitemap all point to https://aitrustgraph.org. Optionally, redirect
`<project>.pages.dev` to the apex with a Cloudflare Bulk Redirect, following Cloudflare's
"Redirecting *.pages.dev to a custom domain" guide.

## HSTS (deliberately off)

Owner ruling:
- Do not send `Strict-Transport-Security` from `_headers`.
- Do not enable HSTS in SSL/TLS → Edge Certificates.
- Enable it only after https://aitrustgraph.org, and `www` once redirected, have been
  verified to serve correctly over HTTPS for a sustained period. Start with a short
  `max-age` and raise it gradually.
- **Never enable HSTS preload.**

## Pre-merge checks

```bash
cd website
rm -rf node_modules .next out
npm ci
npm run check                # typecheck, build (+ header finalization), links, claims, headers
npm audit --audit-level=high
```

CI (`.github/workflows/website-ci.yml`) runs the same checks on every pull request that
touches `website/**`.
