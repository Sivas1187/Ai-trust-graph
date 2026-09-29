// Production header and export verification (run after `npm run build`).
//
// Fails unless:
// - out/_headers exists, has a /* rule with the required security headers,
//   and every line fits Cloudflare Pages limits;
// - the CSP has no 'unsafe-eval', no 'unsafe-inline' in script-src, no
//   wildcard or third-party source, no leftover placeholder, and frame-ancestors
//   'none';
// - every inline script in every exported HTML file is allowed by a hash in
//   script-src (otherwise the live site would fail to hydrate);
// - HSTS is absent (owner ruling: HSTS stays off in this iteration);
// - the export contains the pages and assets production depends on.
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { inlineScriptHashes } from "./finalize-headers.mjs";

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "out");
const errors = [];
const need = (cond, msg) => {
  if (!cond) errors.push(msg);
};

const headersPath = join(outDir, "_headers");
if (!existsSync(headersPath)) {
  console.error("check-headers: out/_headers does not exist");
  process.exit(1);
}
const raw = readFileSync(headersPath, "utf8");

// Parse Cloudflare Pages _headers: unindented URL pattern, indented "Name: value".
const rules = new Map();
let current = null;
for (const line of raw.split("\n")) {
  if (!line.trim() || line.trimStart().startsWith("#")) continue;
  need(line.length <= 2000, `line longer than 2000 characters: ${line.slice(0, 60)}…`);
  if (!/^\s/.test(line)) {
    current = line.trim();
    rules.set(current, new Map());
  } else if (current) {
    const i = line.indexOf(":");
    rules.get(current).set(line.slice(0, i).trim().toLowerCase(), line.slice(i + 1).trim());
  }
}
need(rules.size <= 100, "more than 100 header rules");

const all = rules.get("/*");
need(all, "no /* rule");
const h = all ?? new Map();

need(!/strict-transport-security/i.test(raw), "Strict-Transport-Security present (HSTS must stay off)");
need(!raw.includes("{{"), "unreplaced placeholder in out/_headers");
need(h.get("x-content-type-options") === "nosniff", "X-Content-Type-Options: nosniff missing");
need(h.get("referrer-policy") === "strict-origin-when-cross-origin", "Referrer-Policy missing or changed");
need(/camera=\(\)/.test(h.get("permissions-policy") ?? ""), "Permissions-Policy missing");
need(!/interest-cohort/.test(h.get("permissions-policy") ?? ""), "obsolete interest-cohort in Permissions-Policy");
need(h.get("x-frame-options") === "DENY", "X-Frame-Options: DENY missing");

const csp = h.get("content-security-policy") ?? "";
need(csp, "Content-Security-Policy missing");
const directives = new Map(
  csp
    .split(";")
    .map((d) => d.trim().split(/\s+/))
    .filter((p) => p[0])
    .map(([name, ...values]) => [name, values]),
);
const expectExact = {
  "default-src": ["'self'"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'none'"],
  "frame-ancestors": ["'none'"],
  "img-src": ["'self'"],
  "font-src": ["'self'"],
  "connect-src": ["'self'"],
};
for (const [name, values] of Object.entries(expectExact)) {
  need(JSON.stringify(directives.get(name)) === JSON.stringify(values), `CSP ${name} should be ${values.join(" ")}`);
}
need(directives.has("upgrade-insecure-requests"), "CSP upgrade-insecure-requests missing");
need(!/unsafe-eval|wasm-unsafe-eval/.test(csp), "CSP allows eval");
need(!/(^|\s)\*|https?:|data:|blob:/.test([...directives].map(([, v]) => v.join(" ")).join(" ")),
  "CSP allows a wildcard, scheme or third-party source");

const scriptSrc = directives.get("script-src") ?? [];
need(scriptSrc[0] === "'self'", "script-src must start with 'self'");
need(!scriptSrc.includes("'unsafe-inline'"), "script-src must not contain 'unsafe-inline'");
need(scriptSrc.slice(1).every((s) => /^'sha256-[A-Za-z0-9+/]+=*'$/.test(s)), "script-src may only add sha256 hashes");
const expected = inlineScriptHashes(outDir);
need(expected.length > 0, "no inline scripts found in export (unexpected)");
for (const hash of expected) need(scriptSrc.includes(hash), `inline script ${hash} not allowed by script-src`);

// Assets the production site depends on.
for (const f of ["index.html", "404.html", "robots.txt", "sitemap.xml", "og.png", "icon.svg", "apple-icon.png"]) {
  need(existsSync(join(outDir, f)), `export is missing ${f}`);
}

if (errors.length) {
  console.error(errors.map((e) => `check-headers: ${e}`).join("\n"));
  process.exit(1);
}
console.log(
  `Header check passed: ${rules.size} rule(s); CSP script-src allows 'self' + ${expected.length} inline-script hash(es); no HSTS; export assets present.`,
);
