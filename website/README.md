# AI Trust Graph Website

This directory contains the public explanatory website for AI Trust Graph.

The website is **not** the canonical methodology. See `../METHODOLOGY_MANIFEST.md` and `WEBSITE_GOVERNANCE.md`.

## Local development

```bash
cd website
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Next.js is configured with `output: "export"`, producing a static `out/` directory suitable for Cloudflare Pages.

## Recommended Cloudflare Pages configuration

- Production branch: `main` after website PR approval
- Root directory: `website`
- Build command: `npm run build`
- Build output directory: `out`
- Node.js: current supported LTS compatible with the pinned Next.js version
- Custom domain: to be selected
- HTTPS: enforce at the Cloudflare edge
- Redirect HTTP to HTTPS
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
