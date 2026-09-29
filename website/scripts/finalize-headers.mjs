// Post-build step (run by `npm run build`): finalize out/_headers.
//
// Next.js copies public/_headers to out/_headers verbatim. The static export
// contains a few inline <script> elements (the RSC hydration payload) whose
// content changes per build, so their CSP hashes can only be known after the
// build. This script hashes every inline script in every exported HTML file and
// substitutes them for the {{INLINE_SCRIPT_HASHES}} placeholder, letting
// script-src stay free of 'unsafe-inline'.
//
// It fails the build (fail-closed) if the placeholder is missing, if no inline
// scripts are found, or if the finished header would exceed Cloudflare Pages
// limits. No network access; no secrets.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "out");
const headersPath = join(outDir, "_headers");
const PLACEHOLDER = "{{INLINE_SCRIPT_HASHES}}";
const MAX_LINE = 2000; // Cloudflare Pages: max characters per header line

const fail = (msg) => {
  console.error(`finalize-headers: ${msg}`);
  process.exit(1);
};

export function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = join(dir, d.name);
    if (d.isDirectory()) return htmlFiles(p);
    return d.name.endsWith(".html") ? [p] : [];
  });
}

/** SHA-256 CSP source expressions for every inline (no src) script in the export. */
export function inlineScriptHashes(dir) {
  const hashes = new Set();
  for (const file of htmlFiles(dir)) {
    const html = readFileSync(file, "utf8");
    for (const m of html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
      hashes.add(`'sha256-${createHash("sha256").update(m[1], "utf8").digest("base64")}'`);
    }
  }
  return [...hashes].sort();
}

// Only run the rewrite when executed directly (check-headers.mjs imports helpers).
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (!existsSync(headersPath)) fail("out/_headers not found (is public/_headers present?)");
  const template = readFileSync(headersPath, "utf8");
  const count = template.split(PLACEHOLDER).length - 1;
  if (count !== 1) fail(`expected exactly one ${PLACEHOLDER} (in script-src), found ${count}`);
  if (!/script-src 'self' \{\{INLINE_SCRIPT_HASHES\}\};/.test(template)) fail("placeholder is not in script-src");
  const hashes = inlineScriptHashes(outDir);
  if (hashes.length === 0) fail("no inline scripts found; refusing to emit an unexpected policy");

  const finished = template.replace(PLACEHOLDER, hashes.join(" "));
  const tooLong = finished.split("\n").filter((l) => l.length > MAX_LINE);
  if (tooLong.length) fail(`header line exceeds ${MAX_LINE} characters (Cloudflare Pages limit)`);

  writeFileSync(headersPath, finished);
  console.log(`finalize-headers: wrote ${hashes.length} inline-script hash(es) into out/_headers`);
}
