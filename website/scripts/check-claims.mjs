// Claims-discipline scan for the exported site (run after `npm run build`).
//
// Fails if the rendered page text contains wording the website must not use
// (WEBSITE_CONTENT_MAP.md "Homepage claims that MUST NOT be made";
// WEBSITE_GOVERNANCE.md; METHODOLOGY_MANIFEST.md §6), or product material that
// is outside the public methodology. Negated uses that the site deliberately
// makes (e.g. "not a certification program") are allow-listed by context.
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "out");

const forbidden = [
  /industry[- ]standard/i,
  /\bcertified\b/i,
  /\baccredited\b/i,
  /independently validated/i,
  /\bproven\b/i,
  /\bguarantee[sd]?\b/i,
  /world'?s first|first in the world/i,
  /only graph-based/i,
  /\bendorsed\b/i,
  /trust score/i,
  /ExposureGraph/i,
  /\bsign[ -]?in\b|\blog[ -]?in\b/i,
  // Owner ruling 1: no competing, non-canonical reasoning chain.
  /Assets\s*(→|->)\s*Relationships/i,
  /Assurance Reasoning Flow/i,
];

// Owner rulings 1 and 2: canonical wording that must remain on the homepage.
const required = [
  "Objects",
  "Relationships",
  "Conditions",
  "Paths",
  "Authority and Influence",
  "Consequence",
  "Controls",
  "Evidence",
  "Decision",
  "UNKNOWN stays UNKNOWN.",
  "Evidence is absent, insufficient or materially conflicting".toLowerCase(),
  "Testing required for a stronger conclusion was not performed.",
  "May retain a design score if separately supported.",
  "The only defensible conclusion is UNKNOWN or Not Tested.",
  // Evidence model (Artifact #6 §1.8).
  "Grade is not sufficiency.",
  "A high grade can confirm an adverse state.",
];

// Evidence grades in canonical order with canonical names (Artifact #6 §1.1–§1.7).
const evidenceGrades = [
  "E0 — No evidence",
  "E1 — Inference or uncorroborated signal",
  "E2 — Attestation",
  "E3 — Approved documentary evidence",
  "E4 — Corroborated technical evidence",
  "E5 — Direct technical and representative evidence",
];

// Deliberate negations that are required disclosures.
const allowedContexts = [
  /not a certification program, an accreditation body, a legal opinion, or a guarantee of AI security, safety or compliance/i,
  /AI Trust Graph is not independently validated/i,
  /no single overall trust score/i,
  /never a single overall trust score/i,
];

const html = readdirSync(outDir)
  .filter((f) => f.endsWith(".html"))
  .map((f) => [f, readFileSync(join(outDir, f), "utf8")]);

const errors = [];
for (const [file, raw] of html) {
  let text = raw
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ");
  // also scan metadata attribute values (description, og, twitter)
  text += " " + [...raw.matchAll(/content="([^"]*)"/g)].map((m) => m[1]).join(" ");
  if (file === "index.html") {
    for (const phrase of required) {
      if (!text.toLowerCase().includes(phrase.toLowerCase())) errors.push(`${file}: required canonical wording missing: "${phrase}"`);
    }
    // Canonical chain order (Artifact #2 §0.10), read from the rendered stage headings.
    const stages = [...raw.matchAll(/<h3 class="flowStage">([^<]+)<\/h3>/g)].map((m) => m[1].replace(/&amp;/g, "&"));
    const expected = required.slice(0, 9);
    if (stages.join(" > ") !== expected.join(" > ")) {
      errors.push(`${file}: reasoning chain on page is "${stages.join(" > ")}", expected "${expected.join(" > ")}"`);
    }
    // Evidence grade order and names, read from the rendered disclosure summaries.
    const grades = [...raw.matchAll(/<span class="evId">([^<]+)<\/span>[\s\S]*?<span class="evName">([^<]+)<\/span>/g)].map(
      (m) => `${m[1]} — ${m[2].replace(/&amp;/g, "&")}`,
    );
    if (grades.join(" > ") !== evidenceGrades.join(" > ")) {
      errors.push(`${file}: evidence grades on page are "${grades.join(" > ")}", expected "${evidenceGrades.join(" > ")}"`);
    }
  }
  for (const ctx of allowedContexts) text = text.replace(new RegExp(ctx.source, "gi"), " ");
  for (const re of forbidden) {
    const m = text.match(re);
    if (m) errors.push(`${file}: forbidden wording "${m[0]}" … ${text.slice(Math.max(0, m.index - 60), m.index + 60)}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Claims scan passed: ${html.length} page(s), ${forbidden.length} forbidden patterns, 0 matches.`);
