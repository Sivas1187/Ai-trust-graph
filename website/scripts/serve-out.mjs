// Local preview of the static export WITH the production response headers.
//
// Serves out/ and applies the rules from out/_headers the way Cloudflare Pages
// does for this site's two patterns ("/*" and "/_next/static/*"), so the CSP
// and other headers can be exercised in a real browser before deployment.
// Development aid only: not used by the build or by Cloudflare.
//
//   npm run build && node scripts/serve-out.mjs [port]
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname, resolve, dirname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "out");
const port = Number(process.argv[2] ?? 4174);

const rules = [];
let current = null;
for (const line of readFileSync(join(outDir, "_headers"), "utf8").split("\n")) {
  if (!line.trim() || line.trimStart().startsWith("#")) continue;
  if (!/^\s/.test(line)) rules.push((current = { pattern: line.trim(), headers: [] }));
  else current.headers.push([line.slice(0, line.indexOf(":")).trim(), line.slice(line.indexOf(":") + 1).trim()]);
}
const matches = (pattern, path) =>
  pattern.endsWith("*") ? path.startsWith(pattern.slice(0, -1)) : path === pattern;

const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".ico": "image/x-icon",
};

createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = normalize(join(outDir, path));
  if (!file.startsWith(outDir)) return res.writeHead(400).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  let status = 200;
  if (!existsSync(file)) {
    file = join(outDir, "404.html");
    status = 404;
  }
  for (const rule of rules) if (matches(rule.pattern, path)) for (const [k, v] of rule.headers) res.setHeader(k, v);
  res.setHeader("Content-Type", types[extname(file)] ?? "application/octet-stream");
  res.writeHead(status).end(readFileSync(file));
}).listen(port, () => console.log(`Serving out/ with _headers at http://localhost:${port}/`));
