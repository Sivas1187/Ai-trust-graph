// Static link check for the exported site (run after `npm run build`).
//
// - Every in-page fragment (href="#id") must resolve to an element id on that page.
// - Every root-relative link (href="/...") must resolve to a file in out/.
// - Every link into the canonical GitHub repository must resolve: links on
//   `main` to a path in this checkout; commit-pinned links to a path that
//   exists at that commit (`git cat-file -e <sha>:<path>`).
// - Normative artifacts (docs/*, METHODOLOGY_MANIFEST.md) must be linked at an
//   immutable ref, never at mutable `main` (owner ruling 5).
//
// No network access is used.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
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
    } else if (href.startsWith(REPO + "/blob/") || href.startsWith(REPO + "/tree/")) {
      const m = href.slice(REPO.length).match(/^\/(blob|tree)\/([^/]+)\/([^#?]+)/);
      if (!m) {
        errors.push(`${rel}: unparseable GitHub link ${href}`);
        continue;
      }
      const [, , ref, rawPath] = m;
      const path = decodeURIComponent(rawPath);
      const normative = path.startsWith("docs/") || path === "METHODOLOGY_MANIFEST.md";
      if (ref === "main") {
        if (normative) errors.push(`${rel}: normative artifact linked at mutable main: ${path}`);
        if (!existsSync(join(repoRoot, path))) errors.push(`${rel}: GitHub link to missing repository path ${path}`);
      } else if (/^[0-9a-f]{40}$/.test(ref)) {
        try {
          execFileSync("git", ["-C", repoRoot, "cat-file", "-e", `${ref}:${path}`], { stdio: "ignore" });
        } catch {
          errors.push(`${rel}: ${path} does not exist at pinned commit ${ref}`);
        }
      } else {
        errors.push(`${rel}: GitHub link uses unexpected ref "${ref}": ${href}`);
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
