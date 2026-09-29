// Static link check for the exported site (run after `npm run build`).
//
// - Every in-page fragment (href="#id") must resolve to an element id on that page.
// - Every root-relative link (href="/...") must resolve to a file in out/.
// - Every link into the canonical GitHub repository (blob/tree on main) must
//   resolve to a file or directory that exists in this repository checkout,
//   so the site never points readers at a methodology artifact that is missing.
//
// No network access is used.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "..", "out");
const repoRoot = resolve(here, "..", "..");
const REPO = "https://github.com/Sivas1187/Ai-trust-graph";

if (!existsSync(outDir)) {
  console.error("out/ not found — run `npm run build` first.");
  process.exit(1);
}

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = join(dir, d.name);
    if (d.isDirectory()) return htmlFiles(p);
    return d.name.endsWith(".html") ? [p] : [];
  });
}

const errors = [];
let checked = 0;

for (const file of htmlFiles(outDir)) {
  const html = readFileSync(file, "utf8");
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const rel = file.slice(outDir.length);

  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    checked++;
    if (href.startsWith("#")) {
      if (href.length > 1 && !ids.has(decodeURIComponent(href.slice(1)))) {
        errors.push(`${rel}: missing fragment target ${href}`);
      }
    } else if (href.startsWith("/") && !href.startsWith("//")) {
      const path = href.split(/[?#]/)[0];
      const target = join(outDir, path);
      const ok =
        existsSync(target) &&
        (statSync(target).isFile() || existsSync(join(target, "index.html")));
      if (!ok) errors.push(`${rel}: broken internal link ${href}`);
    } else if (href.startsWith(REPO + "/blob/main/") || href.startsWith(REPO + "/tree/main/")) {
      const path = href.replace(/^.*\/(blob|tree)\/main\//, "").split("#")[0];
      if (!existsSync(join(repoRoot, decodeURIComponent(path)))) {
        errors.push(`${rel}: GitHub link to missing repository path ${path}`);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} broken link(s) out of ${checked} checked.`);
  process.exit(1);
}
console.log(`Link check passed: ${checked} links checked, 0 broken.`);
