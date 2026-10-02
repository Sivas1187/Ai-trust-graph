// Builds the publication PDF of the AI Trust Graph whitepaper from its
// authoritative Markdown. The Markdown is the only content source: this script
// adds layout (cover, contents, page numbers, figure captions) but no text of
// its own beyond the cover labels, running header and the contents heading.
//
// Usage: npm install && npm run build
// Requires a Chromium binary; set CHROMIUM_PATH if it is not at the default.

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { execFileSync } from "node:child_process";
import { marked } from "marked";
import { chromium } from "playwright-core";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const SRC = path.join(root, "AI-Trust-Graph-Whitepaper-v1.0.md");
const OUT = path.join(root, "AI-Trust-Graph-Whitepaper-v1.0.pdf");
const CHROMIUM = process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium";
const TMP = path.join(here, ".tmp");
fs.mkdirSync(TMP, { recursive: true });

const md = fs.readFileSync(SRC, "utf8");

// ------------------------------------------------------------ front matter
const sep = md.indexOf("\n---\n");
const front = md.slice(0, sep);
const body = md.slice(sep + 5);
const line = (re) => (front.match(re) || [])[1] || "";
const fm = {
  title: line(/^# (.+)$/m),
  subtitle: line(/^## (.+)$/m),
  author: line(/^\*\*([^*:]+)\*\*$/m),
  version: line(/^\*\*(Whitepaper version [^*]+)\*\*$/m),
  date: line(/^\*\*((?:January|February|March|April|May|June|July|August|September|October|November|December) \d{4})\*\*$/m),
  doiMd: line(/^\*\*DOI:\*\* (.+)$/m),
  baseline: line(/^\*\*Methodology baseline:\*\* (.+)$/m),
  manifestMd: line(/^\*\*Manifest blob:\*\* (.+)$/m),
  citeMd: line(/^\*\*How to cite:\*\* (.+)$/m),
  licenceMd: line(/^(© .+)$/m),
};
for (const [k, v] of Object.entries(fm)) if (!v) throw new Error(`front matter field missing: ${k}`);
const inline = (s) => marked.parseInline(s);

// ------------------------------------------------------------ body html
let html = marked.parse(body, { gfm: true });
// Figures: an image alone in a paragraph becomes a figure with its alt text as caption.
html = html.replace(/<p><img src="([^"]+)" alt="([^"]*)"\s*\/?><\/p>/g,
  (_, src, alt) => `<figure><img src="${src}" alt="${alt}"><figcaption>${alt}</figcaption></figure>`);
// Typographic arrow in running text (not inside code).
html = html.split(/(<code>[\s\S]*?<\/code>)/).map((p) => (p.startsWith("<code>") ? p : p.replace(/ -&gt; /g, " → "))).join("");
// Ids for top-level headings, contents entries, and page-break classes.
const toc = [];
let n = 0;
html = html.replace(/<h1>([\s\S]*?)<\/h1>/g, (_, inner) => {
  const id = `s${++n}`;
  const text = inner.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  toc.push({ id, text });
  const breakBefore = !/^(Abstract)$/.test(text);
  return `<h1 id="${id}" class="${breakBefore ? "newpage" : ""}">${inner}</h1>`;
});

const css = `
@page { size: A4; margin: 24mm 20mm 22mm 20mm; }
:root { --navy: #14284b; --accent: #2b6cb0; --rule: #c9d1dc; --muted: #5a6474; }
html { font-family: "Liberation Serif", "DejaVu Serif", serif; font-size: 10.6pt; line-height: 1.48; color: #161a20; }
body { margin: 0; }
h1, h2, h3, figcaption, th, .toc, .cover, .meta dt, .runninglabel { font-family: "Liberation Sans", "DejaVu Sans", sans-serif; }
h1 { font-size: 17pt; color: var(--navy); margin: 0 0 10pt; padding-bottom: 4pt; border-bottom: 1.5pt solid var(--navy); page-break-after: avoid; }
h1.newpage { page-break-before: always; }
h3 { font-size: 11.6pt; color: var(--navy); margin: 14pt 0 4pt; page-break-after: avoid; }
p { margin: 0 0 7pt; orphans: 3; widows: 3; }
ul, ol { margin: 0 0 8pt 0; padding-left: 18pt; }
li { margin-bottom: 3pt; }
strong { color: #0e1b33; }
table { border-collapse: collapse; width: 100%; margin: 6pt 0 10pt; font-size: 8.9pt; line-height: 1.35; page-break-inside: auto; }
tr { page-break-inside: avoid; }
th { background: #e8edf4; color: var(--navy); font-weight: bold; text-align: left; }
th, td { border: 0.6pt solid var(--rule); padding: 3.5pt 5pt; vertical-align: top; }
code { font-family: "Liberation Mono", "DejaVu Sans Mono", monospace; font-size: 8.6pt; overflow-wrap: anywhere; }
blockquote { margin: 8pt 0 10pt; padding: 6pt 10pt; border-left: 3pt solid var(--accent); background: #f1f5fa; }
blockquote p { margin: 0; }
figure { margin: 10pt 0 12pt; text-align: center; page-break-inside: avoid; }
figure img { max-width: 100%; max-height: 105mm; }
figcaption { font-size: 8.8pt; color: var(--muted); margin-top: 4pt; }
a { color: var(--accent); text-decoration: none; overflow-wrap: anywhere; }
hr { display: none; }
@page cover { margin: 0; }
.cover { page: cover; height: 297mm; width: 210mm; box-sizing: border-box; page-break-after: always; display: flex; flex-direction: column; }
.cover .band { background: var(--navy); color: #fff; padding: 46mm 22mm 20mm; }
.cover .kicker { font-size: 10pt; letter-spacing: 0.14em; text-transform: uppercase; color: #b9c8e2; margin-bottom: 10mm; }
.cover h1.ct { font-size: 27pt; line-height: 1.18; color: #fff; border: 0; margin: 0 0 6mm; padding: 0; }
.cover .sub { font-size: 13pt; line-height: 1.4; color: #dbe4f3; }
.cover .lower { padding: 16mm 22mm; flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
.cover .author { font-size: 15pt; color: var(--navy); font-weight: bold; }
.cover .role { font-size: 10pt; color: var(--muted); margin-top: 1mm; }
.cover .facts { margin-top: 12mm; font-size: 9.6pt; line-height: 1.7; color: #222; }
.cover .facts span { color: var(--muted); display: inline-block; min-width: 42mm; }
.cover .note { font-size: 8.6pt; color: var(--muted); border-top: 0.6pt solid var(--rule); padding-top: 4mm; }
.meta { page-break-after: always; }
.meta h2 { font-size: 13pt; color: var(--navy); margin: 0 0 8pt; }
.meta dl { margin: 0; }
.meta dt { font-weight: bold; font-size: 9pt; color: var(--navy); margin-top: 8pt; }
.meta dd { margin: 2pt 0 0; }
.toc h2 { font-size: 15pt; color: var(--navy); margin: 0 0 10pt; border-bottom: 1.5pt solid var(--navy); padding-bottom: 4pt; }
.toc ol { list-style: none; padding: 0; margin: 0; font-size: 10.2pt; }
.toc li { display: flex; align-items: baseline; margin: 0 0 4.2pt; }
.toc li a { color: #161a20; }
.toc li .dots { flex: 1; border-bottom: 0.8pt dotted #9aa4b2; margin: 0 5pt; transform: translateY(-3pt); }
.toc li .pg { min-width: 14pt; text-align: right; color: var(--navy); }
`;

const coverHtml = `
<section class="cover">
  <div class="band">
    <div class="kicker">Methodology whitepaper</div>
    <h1 class="ct">${fm.title}</h1>
    <div class="sub">${fm.subtitle}</div>
  </div>
  <div class="lower">
    <div>
      <div class="author">${fm.author}</div>
      <div class="role">Independent research</div>
      <div class="facts">
        <div><span>Version</span>${fm.version} · ${fm.date}</div>
        <div><span>DOI</span>${inline(fm.doiMd)}</div>
        <div><span>Methodology baseline</span>${inline(fm.baseline)}</div>
        <div><span>Licence</span>CC BY 4.0</div>
      </div>
    </div>
    <div class="note">Non-normative narrative introduction. The governed AI Trust Graph methodology artifacts remain the canonical source and prevail over this paper.</div>
  </div>
</section>`;

const metaHtml = `
<section class="meta">
  <h2>Publication details</h2>
  <dl>
    <dt>Title</dt><dd>${fm.title}: ${fm.subtitle}</dd>
    <dt>Author</dt><dd>${fm.author}</dd>
    <dt>Version</dt><dd>${fm.version}, ${fm.date}</dd>
    <dt>DOI</dt><dd>${inline(fm.doiMd)}</dd>
    <dt>Methodology baseline</dt><dd>${inline(fm.baseline)}</dd>
    <dt>Manifest blob</dt><dd>${inline(fm.manifestMd)}</dd>
    <dt>How to cite</dt><dd>${inline(fm.citeMd)}</dd>
    <dt>Licence</dt><dd>${inline(fm.licenceMd)}</dd>
  </dl>
</section>`;

function tocHtml(pages) {
  const items = toc
    .map((t, i) => `<li><a href="#${t.id}">${t.text}</a><span class="dots"></span><span class="pg">${pages ? pages[i] : "00"}</span></li>`)
    .join("");
  return `<section class="toc"><h2>Contents</h2><ol>${items}</ol></section>`;
}

const shell = (inner) => `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${fm.title}</title><base href="${url.pathToFileURL(root + "/").href}"><style>${css}</style></head>
<body>${inner}</body></html>`;
const page = (pages) => shell(`${metaHtml}${tocHtml(pages)}${html}`);

const headerTemplate = `<div style="font-family:'Liberation Sans',sans-serif;font-size:7.5pt;color:#5a6474;width:100%;padding:0 20mm;display:flex;justify-content:space-between;">
<span>AI Trust Graph · ${fm.version}</span><span>DOI ${fm.doiMd.match(/\[([^\]]+)\]/)[1]}</span></div>`;
const footerTemplate = `<div style="font-family:'Liberation Sans',sans-serif;font-size:8pt;color:#5a6474;width:100%;text-align:center;"><span class="pageNumber"></span></div>`;

async function render(doc, out, withHeaderFooter) {
  const tmpHtml = path.join(TMP, "page.html");
  fs.writeFileSync(tmpHtml, doc);
  const browser = await chromium.launch({ executablePath: CHROMIUM, args: ["--no-sandbox", "--allow-file-access-from-files"] });
  const p = await browser.newPage();
  await p.goto(url.pathToFileURL(tmpHtml).href, { waitUntil: "load" });
  await p.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true,
    ...(withHeaderFooter ? { displayHeaderFooter: true, headerTemplate, footerTemplate } : {}) });
  await browser.close();
}

function pagesOf(pdf) {
  const count = Number(execFileSync("pdfinfo", [pdf]).toString().match(/Pages:\s+(\d+)/)[1]);
  const norm = (s) => s.replace(/\s+/g, " ").trim().toLowerCase();
  const texts = [];
  for (let i = 1; i <= count; i++) texts.push(norm(execFileSync("pdftotext", ["-f", String(i), "-l", String(i), "-layout", pdf, "-"]).toString()));
  // Skip the details and contents pages when locating headings.
  let from = 2;
  return toc.map((t) => {
    const key = norm(t.text).slice(0, 38);
    for (let i = from; i < count; i++) if (texts[i].includes(key)) { from = i; return i + 1; }
    throw new Error(`heading not found in PDF: ${t.text}`);
  });
}

// The cover is rendered on its own so that it carries no running header or
// page number; body page numbers start at 1 on the publication-details page.
const coverPdf = path.join(TMP, "cover.pdf");
await render(shell(coverHtml), coverPdf, false);
const pass1 = path.join(TMP, "pass1.pdf");
await render(page(null), pass1, true);
const pages = pagesOf(pass1);
const bodyPdf = path.join(TMP, "body.pdf");
await render(page(pages), bodyPdf, true);
const check = pagesOf(bodyPdf);
if (check.join() !== pages.join()) throw new Error("contents page numbers changed between passes");
if (Number(execFileSync("pdfinfo", [coverPdf]).toString().match(/Pages:\s+(\d+)/)[1]) !== 1) throw new Error("cover is not one page");
execFileSync("pdfunite", [coverPdf, bodyPdf, OUT]);
console.log(`wrote ${path.relative(root, OUT)} (${execFileSync("pdfinfo", [OUT]).toString().match(/Pages:\s+(\d+)/)[1]} pages)`);
