// Claims and methodology-integrity guard for the exported site (run after
// `npm run build`). It reads out/*.html and fails on:
//
// 1. Forbidden claims (peer review, certification, standard status, proof,
//    validation, endorsement, registration), marketing vocabulary, em dashes
//    in visible text, commercial navigation, exposed email addresses,
//    third-party scripts or trackers, and DOI or citation metadata while the
//    whitepaper is in preparation.
// 2. Loss or reordering of canonical methodology content: the nine-stage
//    reasoning chain, thirteen lifecycle phases, six domains, evidence grades
//    and relations, UNKNOWN / Not Tested, SC-INV-01, the authority separation
//    rule, the breakpoint definition, the decision note, release facts (read
//    from METHODOLOGY_MANIFEST.md) and pending gates.
// 3. Loss of the integrity statements the redesign brief makes
//    non-negotiable: access is not authority (not a ladder), the chain is
//    separate from the lifecycle, framework mapping is not compliance, the
//    worked example and comparison are labelled synthetic or conceptual,
//    states carry text and not colour alone, and there is no trust score.
//
// Deliberate negations ("not independently validated", "not a
// certification program") are allow-listed by exact context.
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "..", "out");
const manifest = readFileSync(resolve(here, "..", "..", "METHODOLOGY_MANIFEST.md"), "utf8");
const publicationSrc = readFileSync(resolve(here, "..", "app", "site.config.ts"), "utf8");

const errors = [];
const fail = (m) => errors.push(m);

// ------------------------------------------------------------------ helpers

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = join(dir, d.name);
    if (d.isDirectory()) return d.name.startsWith("_next") ? [] : htmlFiles(p);
    return d.name.endsWith(".html") ? [p] : [];
  });
}
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
/** Visible text: no scripts, styles, SVG <title>/<desc> kept (they are read aloud), tags removed. */
const visible = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript>[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<!-- -->/g, "")
      .replace(/<\/?(strong|em|b|i|a|span|code|q|time|abbr)\b[^>]*>/gi, "")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
const section = (html, id) => {
  const start = html.search(new RegExp(`<section id="${id}"`));
  if (start < 0) return "";
  // Walk nested <section> elements to find the matching close tag.
  const re = /<section\b|<\/section>/g;
  re.lastIndex = start + 1;
  let depth = 1;
  let m;
  while ((m = re.exec(html))) {
    depth += m[0] === "</section>" ? -1 : 1;
    if (depth === 0) return html.slice(start, m.index);
  }
  return html.slice(start);
};
const all = (html, re) => [...html.matchAll(re)].map((m) => visible(m[1]));
const inOrder = (label, got, want) => {
  if (got.join(" > ") !== want.join(" > ")) fail(`index.html: ${label} are "${got.join(" > ")}", expected "${want.join(" > ")}"`);
};
const has = (label, text, phrase) => {
  if (!text.includes(phrase)) fail(`index.html: ${label} lost required wording: "${phrase}"`);
};

// --------------------------------------------------------------- canon data

const manifestField = (label) => manifest.match(new RegExp(`^\\*\\*${label}:\\*\\*\\s*(.+?)\\s*$`, "m"))?.[1];
const rel = { bundle: manifestField("Bundle identifier"), status: manifestField("Status"), snapshot: manifestField("Snapshot date") };
for (const [k, v] of Object.entries(rel)) if (!v) fail(`METHODOLOGY_MANIFEST.md: could not read the ${k} header field`);

const chain = ["Objects", "Relationships", "Conditions", "Paths", "Authority and Influence", "Consequence", "Controls", "Evidence", "Decision"];
const chainQuestions = ["What exists?", "How is it connected?", "What must be true?", "What can happen next?", "Who or what can cause it?", "Why does it matter?", "What interrupts it?", "What can we defend?", "What can we defend?"];
const phases = ["Initiate", "Scope", "Discover", "Model", "Evidence", "Controls", "Paths", "Maturity", "Scoring", "Findings", "Decisions", "Report", "Reassess"];
const phaseOutcomes = [
  "Approved charter and decision purpose.", "Versioned boundary and population.", "Measured estate and blind spots.",
  "Reviewed graph snapshot.", "Graded and traceable evidence set.", "Applicability and control results.",
  "Validated material path portfolio.", "Six-domain capability profile.", "Transparent scorecards and coverage.",
  "Evidence-linked gaps and remediation objectives.", "Approved gates, exceptions and dispositions.",
  "Quality-reviewed decision package.", "Trigger-based new or updated run.",
];
const gateTests = ["Completeness", "Evidence", "Safety", "Traceability", "Critical gates", "Quality", "Decision"];
const assessmentTypes = [
  "Baseline assessment", "Periodic reassessment", "Material-change assessment", "High-impact deep dive",
  "Incident-driven assessment", "Third-party and provider assessment", "Portfolio assessment",
  "Pre-deployment readiness assessment", "Continuous or event-driven assessment", "Regulatory or obligation-focused assessment",
];
const domainNames = ["Discovery and AIBOM", "Trust and Privilege Paths", "Authority Governance", "AI Security Validation", "AI Governance and Assurance", "Operational Resilience"];
const domainPrefixes = ["ATG-DIS", "ATG-TRU", "ATG-AUT", "ATG-VAL", "ATG-GOV", "ATG-RES"];
// The mandatory narrative order (sections 1 to 8, then review), by section id.
const narrativeOrder = ["top", "why", "problem", "big-idea", "graph", "methodology", "flow", "authority", "unknown", "domains", "lifecycle", "example", "artifacts", "publications", "author", "status"];
const distinctionPairs = ["Connected ≠ Authorised", "Reachable ≠ Invocable", "Invocable ≠ Consequential", "Possible ≠ Proven", "Unknown ≠ Safe"];
const bigIdeaConcepts = ["Entities", "Relationships", "Conditions", "Authority", "Evidence"];
const grades = [
  ["E0", "No evidence"], ["E1", "Inference or uncorroborated signal"], ["E2", "Attestation"],
  ["E3", "Approved documentary evidence"], ["E4", "Corroborated technical evidence"], ["E5", "Direct technical and representative evidence"],
];
const relations = [
  ["SUPPORTS", "Evidence provides relevant support for the assertion."],
  ["CORROBORATES", "Independent evidence supports the same material assertion."],
  ["QUALIFIES", "Evidence narrows scope, period, conditions or confidence."],
  ["DISPUTES", "Evidence contradicts a material part of the assertion."],
  ["UNKNOWN", "Evidence is absent, insufficient or materially conflicting."],
];
const assertions = ["Can connect", "Can authenticate", "Can access", "Can invoke", "Can modify", "Can transact"];
const authorityClasses = ["Observe", "Read", "Retrieve", "Infer", "Recommend", "Approve", "Execute", "Modify", "Delete", "Disclose", "Transact"];
const breakpointEffects = ["Stop", "Constrain", "Detect", "Contain"];
const pathStates = ["Candidate", "Topological", "Plausible", "Validated", "Exploitable", "Controlled", "Invalidated"];
const nonNumericStates = ["Not Assessed", "UNKNOWN", "Inconclusive", "Not Tested", "Not Applicable"];
// Pending gates, read from METHODOLOGY_MANIFEST §6 (bullet list before §6.1), with the
// initial capital restored. The site must show exactly these, in order.
const manifestS6 = manifest.split(/^## 6\. Validation status/m)[1]?.split(/^### 6\.1|^## 7/m)[0] ?? "";
const pendingGates = [...manifestS6.matchAll(/^- (.+?);?\.?$/gm)].map((m) => m[1].charAt(0).toUpperCase() + m[1].slice(1));
if (pendingGates.length === 0) errors.push("METHODOLOGY_MANIFEST.md: could not read the §6 pending gates");
const artifactNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

// Sentences that must appear verbatim (canonical quotations and integrity statements).
const required = {
  why: [
    "AI systems are no longer isolated models.",
    "Those perspectives remain necessary.",
    "AI Trust Graph treats the connected AI environment as the unit of reasoning, while preserving the distinction between what is connected, what is possible, what is authorised and what the evidence can support.",
    "The methodology treats enterprise AI risk as a property of interconnected authority, influence and dependency.",
    "Conceptual comparison for explanation only. It is not empirical evidence.",
  ],
  problem: [
    "An employee asks an AI procurement agent to identify a supplier and prepare a purchase request.",
    "Synthetic scenario.",
    "These are conceptual distinctions, not a universal linear sequence.",
    "Missing evidence is not a favourable result, and not automatically an adverse one.",
  ],
  "big-idea": [
    "Assess the connected system, not only the model.",
    "What changes?",
    "“Is this component controlled?”",
    "“How do trust, authority and evidence connect across the wider system?”",
    "Control-based assessment remains part of the method",
    "does not establish legal or regulatory compliance",
    "does not replace legal analysis, certification, penetration testing, model evaluation or mandated sector requirements",
  ],
  graph: [
    "Graph structure supports systematic reasoning. A connection drawn in the graph does not, on its own, prove reachability under current conditions, authority, invocation or exploitability.",
    "Synthetic illustration.",
    "A topological connection is not automatically an exploitable path.",
    "Required permissions, protocols, state and preconditions must be evidenced or explicitly marked Unknown.",
    "Authorization does not prove invocation or successful effect.",
    "Authentication does not imply authorization.",
    "Hosting does not imply ownership or trust.",
    "UNKNOWN",
    "Unsupported claim: the evidence disputes it",
  ],
  flow: [
    "From what exists to what can be defended.",
    "It is not the fieldwork plan.",
    "A finding is an evidence-linked assessment conclusion. A decision is accountable disposition. Keeping them separate prevents management acceptance or remediation preference from changing the assessed condition.",
    "Human approval is required for material facts, findings, exceptions and risk decisions. Inference accelerates review; accountable approval determines accepted state.",
  ],
  authority: [
    "Access is not authority.",
    "Each is its own assertion and needs its own evidence.",
    "Not a ladder.",
    "These are not a maturity sequence, a progression or a state machine.",
    "The capability definition, its network reachability, granted authority and actual invocation are different concepts and require different relationships.",
    "Authority classes describe the kind of consequence an entity can cause. They are not maturity levels and should not be ranked without considering target, scope, conditions and criticality.",
    "A control breakpoint is a node, relationship or boundary where an effective control can materially stop, constrain, detect or contain a path.",
  ],
  unknown: [
    "UNKNOWN stays UNKNOWN.",
    "It is not quietly turned into a favourable conclusion, and not automatically into an adverse one.",
    "UNKNOWN is not zero, weak, safe or effective.",
    "UNKNOWN is not Not Tested.",
    "They are distinct non-numeric result states with different meanings.",
    "The material state remains unresolved because evidence is absent, insufficient or materially conflicting.",
    "Testing required for a stronger conclusion was not performed.",
    "May retain a design score if separately supported.",
    "The only defensible conclusion is UNKNOWN or Not Tested.",
    "Grade is not confidence.",
    "Grade is not sufficiency.",
    "A high grade can confirm an adverse state.",
    "Grade is its own quantity.",
    "The model separates evidence grade, evidence quality, assertion confidence, coverage and reviewer decision because combining them creates false certainty.",
    "AI Trust Graph deliberately produces no single overall trust score.",
  ],
  domains: [
    "The six domains are coordinated assessment lenses over one graph. They are not separate products and should not maintain incompatible definitions, evidence grades or scoring assumptions.",
  ],
  lifecycle: [
    "The lifecycle contains thirteen controlled phases.",
    "The reasoning chain defines how assurance conclusions are formed. The assessment lifecycle governs how fieldwork is conducted. These two structures are related but not interchangeable.",
    "Phases may iterate, but required gates cannot be skipped merely because information was available earlier.",
  ],
  example: [
    "Synthetic example for methodology illustration only.",
    "It is not shown to be exploitable.",
    "The path is not shown to be exploitable, and it is not shown to be controlled.",
    "The decision does not change the finding.",
    "What cannot yet be defended",
    "Remaining UNKNOWNs",
  ],
  publications: ["AI Trust Graph: A Graph-Driven, Evidence-Based Methodology for AI Assurance v1.0", "Siva Sethumadhavan"],
  author: [
    "Siva Sethumadhavan",
    "Independent researcher and author of AI Trust Graph",
    "AI Trust Graph is an independent research initiative. The methodology and views expressed are the author’s own and do not imply endorsement by any employer or client.",
  ],
  status: [
    "AI Trust Graph is not independently validated.",
    "This manifest pins content; it does not convert pending external gates into completed review.",
    "Author’s internal review complete",
    "Independent review pending",
    ...pendingGates,
  ],
};

// ------------------------------------------------------ global prohibitions

const forbidden = [
  [/\bpeer[- ]review(ed)?\b/i, "peer-review claim"],
  [/industry[- ]standard/i, "industry-standard claim"],
  [/globally recogni[sz]ed|internationally recogni[sz]ed|widely (adopted|recogni[sz]ed)/i, "recognition claim"],
  [/\b(certified|accredited)\b/i, "certification claim"],
  [/regulator[- ]approved|\b(approved|endorsed|certified|recogni[sz]ed|adopted) by\b/i, "endorsement or approval claim"],
  [/\bendorsed\b/i, "endorsement claim"],
  [/\bproven\b/i, "proof claim"],
  [/\b(independently |formally |scientifically |empirically )?validated (methodology|framework|approach|model)\b|\bindependently validated\b/i, "validation claim"],
  [/academically published|published in (a|the) (journal|proceedings)/i, "publication claim"],
  [/\bpatent(ed|s)?\b|registered trademark|[®™]/i, "patent or trademark registration claim"],
  [/\bguarantee[sd]?\b/i, "guarantee claim"],
  [/world'?s first|first in the world|only graph-based/i, "superiority claim"],
  [/\btrust score\b/i, "trust score"],
  [/\b(an?|the) (official|formal|international|recogni[sz]ed) standard\b/i, "standard-status claim"],
  [/\bproduction[- ]ready\b|\bbattle[- ]tested\b|\benterprise[- ]grade\b/i, "maturity claim"],
  // Owner ruling 1 (still binding): no competing reasoning chain.
  [/Assets\s*(→|->)\s*Relationships|Assurance Reasoning Flow/i, "non-canonical reasoning chain"],
  // Marketing vocabulary banned by the redesign brief.
  [/\bunlock(s|ed|ing)?\b|\btransform(s|ed|ing|ative)?\b|\bnavigat(e|es|ing)\b|\bempower(s|ed|ing)?\b|\brevolutioni[sz](e|es|ing|ed)\b|game[- ]changing|\bholistic\b|\bseamless(ly)?\b|cutting[- ]edge|\bjourney\b|paradigm shift|It is important to note|In today's rapidly evolving landscape/i, "banned marketing vocabulary"],
  [/\bjoin (the|our) community\b/i, "community claim"],
];
const allowed = [
  /not a certification program, an accreditation body, a legal opinion, or a guarantee of AI security, safety or compliance/gi,
  /\bnot independently validated\b/gi,
  /no single overall trust score/gi,
  // The whitepaper's own abstract (Publications section, published state).
  /does not produce a universal trust score/gi,
  /not yet published or peer reviewed/gi,
  /Possible\s*≠?\s*(is not\s*)?Proven/gi,
];
const commercialNav = /^(Products?|Pricing|Demo|Book a demo|Consultation|Solutions?|Customers?|Contact sales)$/i;

const files = htmlFiles(outDir);
const publicationPublished = /publication:\s*\{\s*status:\s*"published"/.test(publicationSrc);

for (const file of files) {
  const name = file.slice(outDir.length + 1);
  const raw = readFileSync(file, "utf8");
  let text = visible(raw);
  const meta = [...raw.matchAll(/<meta[^>]+content="([^"]*)"/g)].map((m) => decode(m[1])).join(" ");
  const title = decode(raw.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  let scan = `${text} ${meta} ${title}`;
  for (const a of allowed) scan = scan.replace(a, " ");
  for (const [re, label] of forbidden) {
    const m = scan.match(re);
    if (m) fail(`${name}: ${label}: "${m[0]}"`);
  }
  // No em dashes in visible text, metadata or title.
  if (/—/.test(`${text} ${meta} ${title}`)) {
    const at = `${text} ${meta} ${title}`.indexOf("—");
    fail(`${name}: em dash in visible text near "${`${text} ${meta} ${title}`.slice(Math.max(0, at - 40), at + 20)}"`);
  }
  // No exposed email addresses.
  if (/mailto:|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}/.test(raw.replace(/<script[\s\S]*?<\/script>/g, ""))) fail(`${name}: an email address or mailto link is exposed`);
  // No third-party scripts, frames or trackers.
  for (const m of raw.matchAll(/<(script|iframe|img|link)\b[^>]*\s(src|href)="(https?:)?\/\/([^"/]+)/g)) {
    if (m[1] === "link" && !/rel="(stylesheet|preload|modulepreload|preconnect|dns-prefetch|icon)"/.test(m[0])) continue;
    fail(`${name}: external ${m[1]} from ${m[4]}`);
  }
  if (/googletagmanager|google-analytics|gtag\(|plausible\.io|matomo|hotjar|clarity\.ms|fbq\(/i.test(raw)) fail(`${name}: analytics or tracker code`);
  // Navigation: never commercial items.
  for (const nav of raw.matchAll(/<nav\b[\s\S]*?<\/nav>/g)) {
    for (const label of all(nav[0], /<a [^>]*>([\s\S]*?)<\/a>/g)) {
      if (commercialNav.test(label.replace(/\s*↗$/, ""))) fail(`${name}: commercial navigation item "${label}"`);
    }
  }
  // States are never colour alone: every state badge has text.
  for (const m of raw.matchAll(/<span class="stateBadge state-(\w+)">([\s\S]*?)<\/span>\s*(?=<|$)/g)) {
    if (!visible(m[2]).replace(/[^A-Za-z]/g, "")) fail(`${name}: a state badge (${m[1]}) has no text label`);
  }
  for (const m of raw.matchAll(/class="stateBadge state-unknown">([\s\S]*?UNKNOWN)?/g)) {
    if (!m[1]) fail(`${name}: an UNKNOWN state badge does not say UNKNOWN`);
  }
  // Publication: nothing citable before the record exists.
  if (!publicationPublished) {
    if (/\b10\.\d{4,9}\/\S+/.test(text) || /doi\.org/i.test(raw)) fail(`${name}: DOI text or link while the whitepaper is in preparation`);
    if (/ScholarlyArticle|citation_doi|citation_pdf_url/.test(raw)) fail(`${name}: scholarly citation metadata while the whitepaper is in preparation`);
    if (/Download (the )?(whitepaper|PDF)/i.test(text)) fail(`${name}: a whitepaper download is offered while it is in preparation`);
    if (/\.pdf"/i.test(raw)) fail(`${name}: a PDF link exists while the whitepaper is in preparation`);
  }
}

// ---------------------------------------------------------------- homepage

const index = readFileSync(join(outDir, "index.html"), "utf8");
const indexText = visible(index);

// Title and metadata.
if (!index.includes("<title>AI Trust Graph | Graph-Based AI Assurance Methodology</title>")) fail("index.html: <title> is not the approved title");
if (!/<link rel="canonical" href="https:\/\/aitrustgraph\.org\/?"/.test(index)) fail("index.html: canonical URL missing");
for (const p of ['property="og:title"', 'name="twitter:card"', 'property="og:image"']) if (!index.includes(p)) fail(`index.html: ${p} missing`);
const ld = index.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
if (!ld) fail("index.html: JSON-LD missing");
else {
  const types = [...ld.matchAll(/"@type":"(\w+)"/g)].map((m) => m[1]);
  for (const t of ["WebSite", "Person", "CreativeWork"]) if (!types.includes(t)) fail(`index.html: JSON-LD lacks ${t}`);
}

// Deep links from the previous site and the new structure.
for (const id of ["top", "main", "page-index", "why", "problem", "big-idea", "methodology", "graph", "flow", "decision", "authority", "breakpoints", "unknown", "evidence", "domains", "lifecycle", "example", "frameworks", "artifacts", "publications", "author", "status", "review"]) {
  if (!new RegExp(`\\sid="${id}"`).test(index)) fail(`index.html: anchor #${id} missing`);
}

// Primary navigation (brief): Home, Why it exists, Methodology, Worked example, Artifacts, Publications, About the author, GitHub.
const nav = index.match(/<nav aria-label="Primary"[\s\S]*?<\/nav>/)?.[0] ?? "";
inOrder("primary navigation items", all(nav, /<a [^>]*>([\s\S]*?)<\/a>/g), [
  "Why it exists", "The big idea", "Methodology", "Artifacts", "Publications", "About",
]);
if (!/<a class="headerGithub" href="https:\/\/github\.com\/Sivas1187\/Ai-trust-graph"/.test(index)) fail("index.html: the separate GitHub header action is missing");

// Mandatory narrative order.
{
  const at = narrativeOrder.map((id) => [id, index.search(new RegExp(`<section id="${id}"`))]);
  for (const [id, i] of at) if (i < 0) fail(`index.html: narrative section #${id} not found`);
  const got = at.filter(([, i]) => i >= 0).sort((a, b) => a[1] - b[1]).map(([id]) => id);
  inOrder("narrative sections", got, narrativeOrder);
}

// Hero.
const hero = section(index, "top");
const heroText = visible(hero);
if (visible(hero.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "") !== "AI Trust Graph") fail("index.html: hero h1 is not \"AI Trust Graph\"");
has("hero", heroText, "A graph-based, evidence-driven methodology for connected AI systems.");
has("hero", heroText, "AI Trust Graph was created to examine those relationships while keeping authority, evidence and uncertainty explicit.");
has("hero", heroText, "Independent research by Siva Sethumadhavan");
inOrder("hero actions", all(hero.match(/<div class="heroActions">[\s\S]*?<\/div>/)?.[0] ?? "", /<a [^>]*>([\s\S]*?)<\/a>/g).map((l) => l.replace(/\s*↗$/, "").replace(/ \(canonical source\)$/, "")), [
  "Understand why it exists", "Explore the methodology", "View on GitHub",
]);
for (const fact of [rel.status, `Version ${rel.bundle}`, "Independent review pending"]) has("hero status", heroText, fact);
if (rel.snapshot && !hero.includes(`dateTime="${rel.snapshot}"`)) fail(`index.html: hero snapshot date is not the manifest snapshot ${rel.snapshot}`);
// The hero motif is decorative; the meaningful graph is the signature visual.
for (const svg of hero.match(/<svg[\s\S]*?<\/svg>/g) ?? []) if (!/aria-hidden="true"/.test(svg.slice(0, svg.indexOf(">")))) fail("index.html: hero graphic is not marked decorative");

// Section-level canonical content.
for (const [id, phrases] of Object.entries(required)) {
  const t = visible(section(index, id));
  if (!t) {
    fail(`index.html: section #${id} not found`);
    continue;
  }
  for (const p of phrases) has(`#${id}`, t, p);
}

// Publication status must match publication.ts.
has("#publications", visible(section(index, "publications")), publicationPublished ? "Published " : "Whitepaper in preparation");

// Outcomes.
// Problem and big idea.
inOrder("conceptual distinctions", all(section(index, "problem"), /<p class="distinctionPair">([\s\S]*?)<\/p>/g).map((t) => t.replace(/\s*≠\s*is not\s*/, " ≠ ")), distinctionPairs);
inOrder("big-idea concepts", all(section(index, "big-idea"), /<strong class="conceptName">([\s\S]*?)<\/strong>/g), bigIdeaConcepts);
if (!/<div id="frameworks"/.test(section(index, "big-idea"))) fail("index.html: framework positioning (#frameworks) is not in the big idea");
// Signature visual: two labelled drawings (desktop and mobile) and the structured list alternative.
{
  const g = section(index, "graph");
  if ((g.match(/<svg[^>]+role="img"[^>]+aria-labelledby/g) ?? []).length !== 2) fail("index.html: signature visual must have a labelled desktop and mobile drawing");
  if (!/<ol class="sigPath"/.test(g)) fail("index.html: signature visual lost its structured text alternative");
}

// Reasoning chain: canonical order, questions, and the verbatim chain line.
const flow = section(index, "flow");
inOrder("reasoning-chain stages", all(flow, /<h4 class="chainStage">([\s\S]*?)<\/h4>/g), chain);
inOrder("reasoning-chain questions", all(flow, /<p class="chainQuestion">([\s\S]*?)<\/p>/g), chainQuestions);
has("#flow chain line", visible(flow.match(/<p class="chainLine"[\s\S]*?<\/p>/)?.[0] ?? ""), chain.join(" → "));

// Authority.
const authority = section(index, "authority");
inOrder("distinct assertions", all(authority, /<p class="assertionName">([\s\S]*?)<\/p>/g), assertions);
if (/<ol class="assertions"/.test(authority)) fail("index.html: the six assertions are an ordered list (they are not a sequence)");
inOrder("authority classes", all(authority.match(/<ul class="chipList" aria-label="Authority classes[\s\S]*?<\/ul>/)?.[0] ?? "", /<li class="chip">([\s\S]*?)<\/li>/g), authorityClasses);
inOrder("breakpoint effects", all(authority, /<span class="effectName">([\s\S]*?)<\/span>/g), breakpointEffects);
// Each effect is a native disclosure; explanations are labelled as website explanation, Contain carries
// its own canonical text (#2 §5.13), and the shared BREAKS_PATH caveat and §6.6 questions are present.
if ((authority.match(/<details class="effectDetails">/g) ?? []).length !== 4) fail("index.html: the four breakpoint effects are not expandable disclosures");
{
  const t = visible(authority);
  for (const p of [
    "The artifacts define the four effects together, not one by one.",
    "Containment limits ongoing effect. Can active or queued effects be isolated or stopped?",
    "Effectiveness must be validated before claiming the path is controlled.",
    "Where does authority increase?", "Target the transition that creates new capability.",
    "Where is context lost?", "Restore identity, policy or data semantics.",
    "Where do paths converge?", "Apply a high-leverage shared control.",
  ]) has("#authority breakpoints", t, p);
  if ((t.match(/Synthetic example/g) ?? []).length !== 4) fail("index.html: every breakpoint example must be labelled synthetic");
}
inOrder("path states", all(authority.match(/aria-label="Path validation states[\s\S]*?<\/ul>/)?.[0] ?? "", /<li class="chip">([\s\S]*?)<\/li>/g), pathStates);

// Evidence and UNKNOWN.
const unknown = section(index, "unknown");
inOrder("evidence grades", all(unknown, /<span class="gradeId">([\s\S]*?)<\/span>/g), grades.map((g) => g[0]));
inOrder("evidence grade names", all(unknown, /<span class="gradeName">([\s\S]*?)<\/span>/g), grades.map((g) => g[1]));
inOrder("evidence relations", all(unknown, /<span class="relLabel">([\s\S]*?)<\/span>/g), relations.map((r) => r[0]));
inOrder("evidence relation meanings", all(unknown, /<span class="relText">([\s\S]*?)<\/span>/g), relations.map((r) => r[1]));
inOrder("non-numeric result states", all(unknown.match(/aria-label="Distinct non-numeric result states[\s\S]*?<\/ul>/)?.[0] ?? "", /<li class="chip">([\s\S]*?)<\/li>/g), nonNumericStates);
inOrder("UNKNOWN is never converted into", all(unknown, /<span class="neqTo">([\s\S]*?)<\/span>/g), ["Safe", "Failed", "Zero risk", "N/A"]);

// Domains.
const domainsHtml = section(index, "domains");
inOrder("domain names", all(domainsHtml, /<h4 class="domainName">([\s\S]*?)<\/h4>/g), domainNames);
inOrder("domain ids", all(domainsHtml, /<p class="domainId">([\s\S]*?)<\/p>/g), ["D1", "D2", "D3", "D4", "D5", "D6"]);
for (const p of domainPrefixes) if (!domainsHtml.includes(p)) fail(`index.html: domain control prefix ${p} missing`);

// Lifecycle.
const lifecycle = section(index, "lifecycle");
inOrder("lifecycle phases", all(lifecycle, /<span class="phaseName">([\s\S]*?)<\/span>/g), phases);
inOrder("lifecycle outcomes", all(lifecycle, /<span class="phaseOutcome">([\s\S]*?)<\/span>/g), phaseOutcomes);
inOrder("phase gate tests", all(lifecycle.match(/Phase exit gates[\s\S]*?<\/dl>/)?.[0] ?? "", /<dt>([\s\S]*?)<\/dt>/g), gateTests);
inOrder("assessment types", all(lifecycle.match(/Ten assessment types[\s\S]*?<\/dl>/)?.[0] ?? "", /<dt>([\s\S]*?)<\/dt>/g), assessmentTypes);

// Worked example: no-JS markup shows every view with a heading.
const example = section(index, "example");
inOrder("worked example views", all(example, /<h4 id="ex-h-\w+" class="exPanelTitle">([\s\S]*?)<\/h4>/g), ["System view", "Graph view", "Authority view", "Evidence view", "Control view", "Decision view"]);
if (/<div[^>]*class="exPanel"[^>]*hidden/.test(example)) fail("index.html: a worked-example view is hidden in the static HTML");

// Artifacts.
const artifactsHtml = section(index, "artifacts");
const nums = all(artifactsHtml, /<p class="libNum"[^>]*>([\s\S]*?)<\/p>/g).map((n) => n.replace("#", "")).sort((a, b) => a - b);
inOrder("artifact numbers", nums, artifactNumbers);
const pinned = [...(artifactsHtml.match(/<div class="library"[\s\S]*?<details class="sourceRegister"/)?.[0] ?? "").matchAll(/href="([^"]*\/docs\/[^"]+)"/g)].map((m) => m[1]);
if (pinned.length !== 13) fail(`index.html: expected 13 artifact links, found ${pinned.length}`);
for (const [, href] of index.matchAll(/href="([^"]*\/docs\/[^"]+)"/g)) {
  if (!/\/blob\/[0-9a-f]{40}\/docs\//.test(href)) fail(`index.html: artifact link is not commit-pinned: ${href}`);
}
if (/Published<\/span>\s*<\/dd>|libStatus-published/.test(artifactsHtml)) fail("index.html: an artifact is labelled Published");

// Author: no portrait, no employer claims, only verified links.
const authorHtml = section(index, "author");
if (/<img\b/.test(authorHtml)) fail("index.html: the author section contains an image");
for (const m of authorHtml.matchAll(/href="([^"]+)"/g)) if (!/^https:\/\/github\.com\/Sivas1187\b/.test(m[1])) fail(`index.html: unverified author link ${m[1]}`);

// Gates: the pending list matches the manifest, and every closed gate is stated as bounded.
{
  const st = section(index, "status");
  inOrder("pending gates", all(st.match(/<ul class="gates">[\s\S]*?<\/ul>/)?.[0] ?? "", /<li>([\s\S]*?)<\/li>/g).map((t) => t.replace(/^○\s*/, "")), pendingGates);
  const closed = all(st.match(/<ul class="gates gatesClosed">[\s\S]*?<\/ul>/)?.[0] ?? "", /<li>([\s\S]*?)<\/li>/g);
  for (const c of closed) {
    if (!/closed by the author’s declaration/i.test(c)) fail(`index.html: closed gate "${c.slice(0, 60)}" does not say it was closed by the author's declaration`);
    const name = c.replace(/^✓\s*/, "").split(":")[0];
    if (!manifest.includes(`| ${name} | Closed`)) fail(`index.html: closed gate "${name}" has no §6.1 record in the manifest`);
  }
}

// Release facts: hero and status must match the manifest.
const status = visible(section(index, "status"));
for (const fact of [rel.bundle, rel.status, rel.snapshot]) has("#status release facts", status, fact);

// "product" only in negated form.
for (const m of indexText.matchAll(/[^.]*\bproducts?\b[^.]*\./gi)) {
  if (!/\bnot (a|separate) products?\b|not a product|\bproduct-independent\b/i.test(m[0])) fail(`index.html: "product" used outside a negation: "${m[0].trim()}"`);
}

if (errors.length) {
  console.error(`check-claims: ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`check-claims: ${files.length} page(s) clean; canonical content, order and integrity statements intact.`);
