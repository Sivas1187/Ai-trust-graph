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
const manifestPath = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..", "METHODOLOGY_MANIFEST.md");

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
  // Problem section (Artifact #1 §4 invariant).
  "A topological connection is not automatically an exploitable path.",
  "Required permissions, protocols, state and preconditions must be evidenced or explicitly marked Unknown.",
  // Assessment lifecycle (Artifact #7 §0.11 iteration rule).
  "Phases may iterate, but required gates cannot be skipped merely because information was available earlier.",
  // Release status, provenance and gates (METHODOLOGY_MANIFEST header and §6; README).
  "AI Trust Graph is not independently validated.",
  "Public-release candidate",
  "1.0-rc.4",
  "Methodology author: Siva Sethumadhavan",
  "This manifest pins content; it does not convert pending external gates into completed review.",
  "Independent methodology / architecture review",
  "Independent AI-security review",
  "Inter-assessor reproducibility study using the protocol in Artifact #10 Appendix B.4",
  "Employer / IP / confidentiality review",
  "Legal approval of licence / trademark position",
  // Evidence model (Artifact #6 §1.8).
  "Grade is not sufficiency.",
  "A high grade can confirm an adverse state.",
];

// Six domains in canonical order (README; WEBSITE_CONTENT_MAP "Canonical homepage domain names").
const domainNames = [
  "Discovery and AIBOM", "Trust and Privilege Paths", "Authority Governance",
  "AI Security Validation", "AI Governance and Assurance", "Operational Resilience",
];

// The four contribution entry points, in order (CONTRIBUTING routes).
const contributionEntries = ["Report a finding", "Share feedback", "Propose a change", "Inspect the source"];

// Assessment Methodology phases in canonical order (Artifact #7 §0.11).
const assessmentPhases = [
  "Initiate", "Scope", "Discover", "Model", "Evidence", "Controls", "Paths",
  "Maturity", "Scoring", "Findings", "Decisions", "Report", "Reassess",
];

// Assessment types in canonical order (Artifact #7 §1.1–§1.10).
const assessmentTypes = [
  "Baseline assessment", "Periodic reassessment", "Material-change assessment",
  "High-impact deep dive", "Incident-driven assessment", "Third-party and provider assessment",
  "Portfolio assessment", "Pre-deployment readiness assessment",
  "Continuous or event-driven assessment", "Regulatory or obligation-focused assessment",
];

// Act II (Artifact #1 Manifesto §2.2 thesis, §4 invariant).
const act2 = {
  title: "AI systems are no longer isolated models.",
  thesis: "The methodology treats enterprise AI risk as a property of interconnected authority, influence and dependency.",
  invariant: "A topological connection is not automatically an exploitable path.",
  condition: "Required permissions, protocols, state and preconditions must be evidenced or explicitly marked Unknown.",
  figureNote: "Illustrative topology",
};
// Act III annotations: stage → key and target (a, b in Act III; c, d continue in later sections).
const chainNotes = [
  ["Authority and Influence", "a", "#authority"],
  ["Controls", "b", "#breakpoints"],
  ["Evidence", "c", "#note-evidence"],
  ["Decision", "d", "#note-decision"],
];
// Authority annotation (Artifact #2 §3.6 separation rule, §5.2 classes; the site's distinct-assertion illustration).
const separationRule =
  "The capability definition, its network reachability, granted authority and actual invocation are different concepts and require different relationships.";
const distinctAssertions = ["Can connect", "Can authenticate", "Can access", "Can invoke", "Can modify", "Can transact"];
const authorityClasses = ["Observe", "Read", "Retrieve", "Infer", "Recommend", "Approve", "Execute", "Modify", "Delete", "Disclose", "Transact"];
const authorityNotRanked =
  "Authority classes describe the kind of consequence an entity can cause. They are not maturity levels and should not be ranked without considering target, scope, conditions and criticality.";
// Breakpoints annotation (Artifact #2 §1.8, §6.6; §6.3 states and roles).
const breakpointDefinition =
  "A control breakpoint is a node, relationship or boundary where an effective control can materially stop, constrain, detect or contain a path.";
const breakpointEffects = ["Stop", "Constrain", "Detect", "Contain"];
const pathValidationStates = ["Candidate", "Topological", "Plausible", "Validated", "Exploitable", "Controlled", "Invalidated"];
const pathRoles = ["Primary", "Alternate", "Residual"];

// Evidence grades in canonical order with canonical names (Artifact #6 §1.1–§1.7).
const evidenceGrades = [
  "E0 — No evidence",
  "E1 — Inference or uncorroborated signal",
  "E2 — Attestation",
  "E3 — Approved documentary evidence",
  "E4 — Corroborated technical evidence",
  "E5 — Direct technical and representative evidence",
];

// Cover (visual reset): the approved proposition and the primary navigation, in order.
const coverProposition =
  "An open methodology for reasoning about connected AI systems through graph structure, controls and evidence.";
const primaryNav = ["Method", "Domains", "Assurance", "Source", "GitHub"];

// Release facts the Cover colophon must repeat, read from the canonical manifest header.
const manifest = readFileSync(manifestPath, "utf8");
const manifestField = (label) => manifest.match(new RegExp(`^\\*\\*${label}:\\*\\*\\s*(.+?)\\s*$`, "m"))?.[1];
const manifestRelease = {
  bundle: manifestField("Bundle identifier"),
  status: manifestField("Status"),
  snapshot: manifestField("Snapshot date"),
};
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const longDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
};

// Deliberate negations that are required disclosures.
const allowedContexts = [
  /not a certification program, an accreditation body, a legal opinion, or a guarantee of AI security, safety or compliance/i,
  // "AI Trust Graph is not independently validated." (Status) and the Cover
  // colophon's "Not independently validated". Only the negated form is allowed;
  // any other "independently validated" still fails.
  /\bnot independently validated\b/i,
  /no single overall trust score/i,
  /never a single overall trust score/i,
];

const html = readdirSync(outDir)
  .filter((f) => f.endsWith(".html"))
  .map((f) => [f, readFileSync(join(outDir, f), "utf8")]);

const errors = [];
for (const [k, v] of Object.entries(manifestRelease)) {
  if (!v) errors.push(`METHODOLOGY_MANIFEST.md: could not read the ${k} header field`);
}
const visibleText = (fragment) =>
  fragment
    .replace(/<span class="visuallyHidden">[\s\S]*?<\/span>/g, "")
    .replace(/<!-- -->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
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
    // Cover (Act I): title, approved proposition, links, and a colophon whose
    // release facts match the METHODOLOGY_MANIFEST header.
    const cover = raw.match(/<section id="top" class="cover"[\s\S]*?<\/section>/)?.[0] ?? "";
    if (!cover) errors.push(`${file}: Cover section (#top.cover) not found`);
    else {
      const title = visibleText(cover.match(/<h1 id="hero-title" class="coverTitle">([\s\S]*?)<\/h1>/)?.[1] ?? "");
      if (title !== "AI Trust Graph") errors.push(`${file}: Cover title is "${title}", expected "AI Trust Graph"`);
      const prop = visibleText(cover.match(/<p class="coverProp">([\s\S]*?)<\/p>/)?.[1] ?? "");
      if (prop !== coverProposition) errors.push(`${file}: Cover proposition is "${prop}", expected "${coverProposition}"`);
      const coverLinks = [...cover.matchAll(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => [m[1], visibleText(m[2])]);
      const wantLinks = [
        ["https://github.com/Sivas1187/Ai-trust-graph", "Read the methodology ↗"],
        ["#flow", "How it reasons ↓"],
      ];
      if (JSON.stringify(coverLinks) !== JSON.stringify(wantLinks)) {
        errors.push(`${file}: Cover links are ${JSON.stringify(coverLinks)}, expected ${JSON.stringify(wantLinks)}`);
      }
      const colophon = visibleText(cover.match(/<p class="colophon">([\s\S]*?)<\/p>/)?.[1] ?? "");
      const wantColophon = `${manifestRelease.status} · Bundle ${manifestRelease.bundle} · ${longDate(manifestRelease.snapshot ?? "0-1-1")} · Not independently validated`;
      if (colophon !== wantColophon) errors.push(`${file}: Cover colophon is "${colophon}", expected "${wantColophon}" (from METHODOLOGY_MANIFEST.md)`);
      if (!cover.includes(`<time dateTime="${manifestRelease.snapshot}">`)) {
        errors.push(`${file}: Cover colophon date is not machine-readable as the manifest snapshot ${manifestRelease.snapshot}`);
      }
      if (/statusPill|class="button/.test(cover)) errors.push(`${file}: Cover contains a status pill or button styling`);
    }
    // Graph fields are decorative: hidden from assistive technology, never labelled.
    const fields = [...raw.matchAll(/<svg class="graphField[^"]*"[^>]*>[\s\S]*?<\/svg>/g)].map((m) => m[0]);
    if (fields.length < 4) errors.push(`${file}: expected the Cover and Act II graph fields (desktop and mobile), found ${fields.length}`);
    for (const f of fields) {
      if (!/aria-hidden="true"/.test(f.slice(0, f.indexOf(">")))) errors.push(`${file}: a graph field is not aria-hidden`);
      if (/<text|<title|<desc/.test(f)) errors.push(`${file}: a decorative graph field contains text`);
    }
    // Primary navigation labels, in order.
    const nav = raw.match(/<nav aria-label="Primary"[\s\S]*?<\/nav>/)?.[0] ?? "";
    const navLabels = [...nav.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].map((m) => visibleText(m[1]).replace(/\s*↗$/, ""));
    if (navLabels.join(" > ") !== primaryNav.join(" > ")) {
      errors.push(`${file}: primary navigation is "${navLabels.join(" > ")}", expected "${primaryNav.join(" > ")}"`);
    }

    // Ordered lists (lifecycle phases, assessment types, authority classes, …), read from the rendered lists.
    const inOrder = (label, source, re, expectedList) => {
      const got = [...source.matchAll(re)].map((m) => m[1].replace(/&amp;/g, "&"));
      if (got.join(" > ") !== expectedList.join(" > ")) {
        errors.push(`${file}: ${label} on page are "${got.join(" > ")}", expected "${expectedList.join(" > ")}"`);
      }
    };
    // ── Act II: why graph reasoning ──
    const actII = raw.match(/<section id="problem" class="act2"[\s\S]*?<\/section>/)?.[0] ?? "";
    if (!actII) errors.push(`${file}: Act II section (#problem.act2) not found`);
    else {
      const one = (re) => visibleText(actII.match(re)?.[1] ?? "");
      const checks = [
        ["title", one(/<h2 id="problem-title" class="actTitle">([\s\S]*?)<\/h2>/), act2.title],
        ["thesis", one(/<p class="act2Thesis">([\s\S]*?)<\/p>/), act2.thesis],
        ["topology invariant", one(/<blockquote class="act2Quote"[^>]*>\s*<p class="act2Invariant">([\s\S]*?)<\/p>/), act2.invariant],
        ["invariant condition", one(/<p class="act2Condition">([\s\S]*?)<\/p>\s*<\/blockquote>/), act2.condition],
        ["figure note", one(/<p class="figureNote act2Note">([\s\S]*?)<\/p>/), act2.figureNote],
      ];
      for (const [label, got, want] of checks) if (got !== want) errors.push(`${file}: Act II ${label} is "${got}", expected "${want}"`);
      if (!/docs\/01-manifesto\.md/.test(actII)) errors.push(`${file}: Act II lost its canonical Manifesto link`);
      if ((actII.match(/<svg class="graphField graphFieldDark/g) ?? []).length !== 2) errors.push(`${file}: Act II should carry the dark desktop and mobile graph fields`);
      if ((actII.match(/class="gfUnresolved"/g) ?? []).length !== 2) errors.push(`${file}: Act II paths (desktop and mobile) must end in the unresolved (dashed) motif`);
    }
    // The old problem constellation (term nodes, pill tag) must not return.
    if (/class="cst|problemGrid|problemFigure|<span class="tag">Illustrative<\/span>/.test(raw)) {
      errors.push(`${file}: the retired problem constellation (or its pill tag) is present again`);
    }

    // ── Act III: the canonical chain (Artifact #2 §0.10) as a typographic argument ──
    const actIII = (raw.match(/<section id="flow" class="act3"[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!actIII) errors.push(`${file}: Act III section (#flow.act3) not found`);
    const chainOl = actIII.match(/<ol class="chain"[^>]*>([\s\S]*?)<\/ol>/)?.[1] ?? "";
    const stages = [...chainOl.matchAll(/<span class="chainStage">([^<]+)<\/span>/g)].map((m) => m[1].replace(/&amp;/g, "&"));
    const expected = required.slice(0, 9);
    if (stages.join(" > ") !== expected.join(" > ")) {
      errors.push(`${file}: reasoning chain on page is "${stages.join(" > ")}", expected "${expected.join(" > ")}"`);
    }
    const chainText = visibleText(chainOl.replace(/<sup[^>]*>[\s\S]*?<\/sup>/g, "")).replace(/\u202f/g, " ").replace(/\s+/g, " ");
    const wantChain = expected.join(" → ");
    if (chainText !== wantChain) errors.push(`${file}: reasoning chain reads "${chainText}", expected "${wantChain}"`);
    // Not a numbered / progress chain: no digits, no step markers or rail, no old node-link diagram.
    if (/\d/.test(chainText) || /class="[^"]*(rcChain|rcStep|rcNode|progress|stepNumber)/i.test(actIII)) {
      errors.push(`${file}: the reasoning chain carries numbering, step markers or progress structure`);
    }
    const keys = [...chainOl.matchAll(/<a class="chainAnchor" href="([^"]+)"><span class="chainStage">([^<]+)<\/span><sup class="noteKey"[^>]*>([a-z])<\/sup>/g)].map((m) => [m[2], m[3], m[1]]);
    if (JSON.stringify(keys) !== JSON.stringify(chainNotes)) {
      errors.push(`${file}: chain annotation keys are ${JSON.stringify(keys)}, expected ${JSON.stringify(chainNotes)}`);
    }
    for (const [, , target] of chainNotes) if (!new RegExp(`id="${target.slice(1)}"`).test(actIII)) errors.push(`${file}: annotation target ${target} is missing from Act III`);
    // Annotation d must not equate the Decision stage with the UNKNOWN assurance state:
    // it reads "Accountable decision." (§0.10 theory map) and links nowhere, least of all #unknown.
    const noteD = actIII.match(/<li id="note-decision">([\s\S]*?)<\/li>/)?.[1] ?? "";
    const noteDText = visibleText(noteD.replace(/<span class="noteKey"[^>]*>[\s\S]*?<\/span>/, ""));
    if (noteDText !== "Decision — Accountable decision.") errors.push(`${file}: annotation d reads "${noteDText}", expected "Decision — Accountable decision."`);
    if (/<a\b|href=/.test(noteD)) errors.push(`${file}: annotation d must not link anywhere (in particular not to #unknown)`);
    if (/href="#unknown"/.test(actIII)) errors.push(`${file}: Act III links to #unknown — the Decision stage must not point to the UNKNOWN state`);
    if (/Decision\s*—\s*UNKNOWN stays UNKNOWN/i.test(visibleText(raw.replace(/<script[\s\S]*?<\/script>/gi, "")))) {
      errors.push(`${file}: "Decision — UNKNOWN stays UNKNOWN" must not reappear`);
    }
    // The UNKNOWN section itself stays as it is.
    const unknownTitle = visibleText(raw.match(/<h2 id="unknown-title" class="unknownTitle">([\s\S]*?)<\/h2>/)?.[1] ?? "");
    if (!/<section id="unknown" class="unknown"/.test(raw) || unknownTitle !== "UNKNOWN stays UNKNOWN.") {
      errors.push(`${file}: the UNKNOWN section or its title changed ("${unknownTitle}")`);
    }
    // The theory map stays in one native disclosure: Question / Concept only, not mapped onto stages.
    const questions = actIII.match(/<details class="act3Questions"><summary>Canonical reasoning questions<\/summary>([\s\S]*?)<\/details>/)?.[1] ?? "";
    const heads = [...questions.matchAll(/<th scope="col">([^<]+)<\/th>/g)].map((m) => m[1]);
    const qRows = (questions.match(/<td class="act3Question">/g) ?? []).length;
    if (heads.join("|") !== "Question|Concept" || qRows < 5 || qRows !== (questions.match(/<tr>/g) ?? []).length - 1) {
      errors.push(`${file}: the canonical reasoning questions disclosure is missing or changed (columns ${heads.join("|")}, ${qRows} rows)`);
    }

    // ── Annotation a: Authority and Influence ──
    const auth = actIII.match(/<article id="authority"[\s\S]*?<\/article>/)?.[0] ?? "";
    const authText = visibleText(auth);
    if (!/<h3 id="authority-title" class="noteTitle">Access is not authority\.<\/h3>/.test(auth)) errors.push(`${file}: Authority annotation title missing`);
    if (!authText.includes(separationRule)) errors.push(`${file}: Authority annotation lost the §3.6 separation rule (verbatim)`);
    if (!authText.includes(authorityNotRanked)) errors.push(`${file}: Authority annotation lost the §5.2 "not maturity levels / not ranked" sentence`);
    if (!/not a canonical sequence, ladder or state machine/.test(authText)) errors.push(`${file}: Authority assertions lost their "not a canonical sequence" caveat`);
    const assertList = auth.match(/<ul class="assertLine"[^>]*>([\s\S]*?)<\/ul>/)?.[1] ?? "";
    const gotAssert = [...assertList.matchAll(/<span class="assertion">([^<]+)<\/span>/g)].map((m) => m[1]);
    const neqs = (assertList.match(/class="neq"/g) ?? []).length;
    if (gotAssert.join(" > ") !== distinctAssertions.join(" > ") || neqs !== distinctAssertions.length - 1 || (assertList.match(/<li>/g) ?? []).length !== distinctAssertions.length) {
      errors.push(`${file}: distinct assertions collapsed or changed: "${gotAssert.join(" > ")}" with ${neqs} separators`);
    }
    const classList = auth.match(/<ul class="inlineList"[^>]*>([\s\S]*?)<\/ul>/)?.[1] ?? "";
    inOrder("authority classes", classList, /<li>([^<]+)<\/li>/g, authorityClasses);

    // ── Annotation b: control breakpoints ──
    const bp = actIII.match(/<article id="breakpoints"[\s\S]*?<\/article>/)?.[0] ?? "";
    const bpText = visibleText(bp);
    if (!/<h3 id="bp-title" class="noteTitle">Where can a material path be interrupted\?<\/h3>/.test(bp)) errors.push(`${file}: Breakpoints annotation title missing`);
    if (!bpText.includes(breakpointDefinition)) errors.push(`${file}: Breakpoints annotation lost the §6.6 definition (verbatim)`);
    const radios = [...bp.matchAll(/<input ([^>]*name="breakpoint-effect"[^>]*)\/?><span>([^<]+)<\/span>/g)].map((m) => ({
      type: m[1].match(/type="([^"]+)"/)?.[1],
      value: m[1].match(/value="([^"]+)"/)?.[1],
      checked: /\schecked/.test(" " + m[1]),
      label: m[2],
    }));
    const labels = radios.map((r) => r.label);
    const checked = radios.filter((r) => r.checked);
    if (labels.join(" > ") !== breakpointEffects.join(" > ") || radios.some((r) => r.type !== "radio" || r.value !== r.label.toLowerCase())) {
      errors.push(`${file}: breakpoint controls are "${labels.join(" > ")}", expected "${breakpointEffects.join(" > ")}" as one radio group`);
    }
    if (checked.length !== 1) errors.push(`${file}: breakpoint controls must expose exactly one selected option, found ${checked.length}`);
    if (!/<fieldset class="bpxControls"><legend>/.test(bp)) errors.push(`${file}: breakpoint controls lost their fieldset/legend`);
    for (const e of breakpointEffects) if (!new RegExp(`<p class="bpxGloss bpxGloss-${e.toLowerCase()}"><strong>${e}\\.</strong>`).test(bp)) errors.push(`${file}: breakpoint gloss for ${e} missing (no-JS / text equivalent)`);
    if (!/<ol class="bpxPath" aria-label="[^"]+">/.test(bp) || !/control breakpoint between Tool and API/.test(bp)) errors.push(`${file}: breakpoint path lost its text equivalent`);
    if (!pathValidationStates.every((x) => bpText.includes(x)) || !bpText.includes(pathValidationStates.join(" · ")) || !bpText.includes(pathRoles.join(" · "))) {
      errors.push(`${file}: path validation states / roles (Artifact #2 §6.3) missing or reordered`);
    }
    inOrder("assessment phases", raw, /<span class="lcName">([^<]+)<\/span>/g, assessmentPhases);
    const typeList = raw.match(/<ul class="chips lcTypeList"[^>]*>([\s\S]*?)<\/ul>/)?.[1] ?? "";
    inOrder("assessment types", typeList, /<li>([^<]+)<\/li>/g, assessmentTypes);
    // Domain lens: six canonical names in order, each card with 12 controls and 6 maturity capabilities.
    inOrder("domains", raw, /<h3 class="domainName">([^<]+)<\/h3>/g, domainNames);
    const domainCards = (raw.match(/<li class="lensDomain">[\s\S]*?<\/details><\/li>/g) ?? []).map((c) => c.replace(/<!-- -->/g, ""));
    const countOk = domainCards.filter((c) => /12 controls/.test(c) && /6 maturity capabilities/.test(c)).length;
    if (domainCards.length !== 6 || countOk !== 6) {
      errors.push(`${file}: expected 6 domain cards each stating "12 controls" and "6 maturity capabilities", found ${countOk}/${domainCards.length}`);
    }
    if (!/<span class="tag">Explanatory<\/span>/.test(raw)) {
      errors.push(`${file}: domain lens is missing its visible "Explanatory" label`);
    }
    // Contribution entry points, in order.
    const entryList = raw.match(/<ul class="entryGrid"[^>]*>([\s\S]*?)<\/ul>/)?.[1] ?? "";
    inOrder("contribution entry points", entryList, /<h3>([^<]+)<\/h3>/g, contributionEntries);
    // The standalone scale band was removed; its figures live in Domains and Canonical source.
    if (/class="scale"|The structure that carries the model/.test(raw)) {
      errors.push(`${file}: the removed standalone scale band is present again`);
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
