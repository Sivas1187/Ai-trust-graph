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
const siteDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

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
  // PR C: no unsupported endorsement, adoption, maturity or standard-status claims.
  /\b(approved|endorsed|certified|recogni[sz]ed|adopted) by\b/i,
  /\b(ISO|NIST|regulator)[- ](approved|endorsed|certified|compliant)\b/i,
  /\bpeer[- ]reviewed\b/i,
  /\bproduction[- ]ready\b|\bbattle[- ]tested\b|\benterprise[- ]grade\b/i,
  /\b(an?|the) (official|formal|international|recogni[sz]ed) standard\b/i,
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

// Normative artifacts in METHODOLOGY_MANIFEST §2 recommended reading order.
const readingOrder = ["1", "2", "12", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

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
  ["Decision", "d", "#decision"],
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

// Evidence grade meaning and what each grade can support (Artifact #6 §1.1–§1.6), E0…E5.
const evidenceRegister = [
  ["No source is available or the supplied item cannot be linked to the assertion.", "The only defensible conclusion is UNKNOWN or Not Tested. E0 is not evidence that the control is absent."],
  ["A hypothesis is derived from incomplete, indirect, automated or unverified information.", "E1 can prioritize investigation and create candidate graph assertions, but cannot establish implementation or operating effectiveness."],
  ["An accountable person states that a condition or practice exists.", "E2 supports claimed practice and context. It is vulnerable to memory, interpretation, incentives and incomplete visibility and therefore needs corroboration for material technical claims."],
  ["A governed document records approved design, policy, architecture, procedure, contract or decision.", "E3 can support design intent and governance state. It does not alone prove actual configuration, runtime behavior or sustained operation."],
  ["Technical evidence from authoritative sources is supported by an independent source, consistent observation or reproducible inspection.", "E4 can support implementation or operation within observed scope when current, relevant and representative."],
  ["Current direct technical evidence is combined with a representative test or operating record that demonstrates the claimed behavior under stated conditions.", "E5 may support verified effectiveness or adaptive operation, but only for the tested scope, period and conditions."],
];

// Cover (visual reset): the approved proposition and the primary navigation, in order.
// Cover context line: website copy built from the Artifact #1 Manifesto CORE PROPOSITION.
const coverContext =
  "AI risk is not located only inside a model. It emerges through relationships that must be made visible, evidenced and governed as a connected system.";
// Marketing / outcome claims the Cover copy must not make.
const coverMarketing =
  /\b(reduc\w*|prevent\w*|ensur\w*|guarantee\w*|prove[sn]?|protect\w*|secures?|compliance|compliant|safer|catch\w*|replac\w*|stops?|eliminat\w*|world[- ]class|leading|revolutionary|trusted by)\b/i;
// "On this page": website orientation only, eight destinations in page order.
const pageIndexLinks = [
  ["#flow", "Method"], ["#domains", "Domains"], ["#unknown", "UNKNOWN"], ["#evidence", "Evidence"],
  ["#lifecycle", "Lifecycle"], ["#status", "Status"], ["#methodology", "Source"], ["#review", "Review"],
];
// Class tokens that would give colour or styling a semantic (assurance / risk / pass-fail) meaning.
const semanticColourClass =
  /(^|[-_])(safe|unsafe|danger|success|warning|warn|critical|alert|error|pass|passed|fail|failed|ok|risky?)([-_]|$)|(^|[a-z])(Safe|Unsafe|Danger|Success|Warning|Warn|Critical|Alert|Error|Pass|Passed|Fail|Failed|Risk|Risky)([A-Z0-9]|$)|(^|[-_])(red|amber|yellow|orange)([-_]|$)|(^|[a-z])(Red|Amber|Yellow|Orange)([A-Z0-9]|$)/;

// Colour-role or rating class names, in any case ("gradeColor", "risk-high", "traffic-light").
const semanticColourRole = /risk-?(high|low|medium)|traffic|rag-?status|(maturity|grade|domain|phase|state|status|gate|evidence|level|tier|severity|score)-?colou?r/i;
const coverProposition =
  "An open methodology for reasoning about connected AI systems through graph structure, controls and evidence.";
const primaryNav = ["Method", "Domains", "Assurance", "Source", "GitHub"];
// Fragment targets of the in-page navigation items, in order (final visual-reset mapping:
// Assurance opens the UNKNOWN → Evidence → Lifecycle sequence at #unknown).
const primaryNavTargets = ["#flow", "#domains", "#unknown", "#methodology"];

// Assessment phase outcomes (Artifact #7 §0.11), paired with assessmentPhases.
const phaseOutcomes = [
  "Approved charter and decision purpose.", "Versioned boundary and population.", "Measured estate and blind spots.",
  "Reviewed graph snapshot.", "Graded and traceable evidence set.", "Applicability and control results.",
  "Validated material path portfolio.", "Six-domain capability profile.", "Transparent scorecards and coverage.",
  "Evidence-linked gaps and remediation objectives.", "Approved gates, exceptions and dispositions.",
  "Quality-reviewed decision package.", "Trigger-based new or updated run.",
];
// Gate tests between phases (Artifact #7 §0.12), in order.
const gateTests = ["Completeness", "Evidence", "Safety", "Traceability", "Critical gates", "Quality", "Decision"];
// UNKNOWN is never silently converted into any of these (Artifact #4 §0.5, SC-INV-01).
const unknownNotConverted = ["Safe", "Failed", "Zero risk", "N/A"];
// Distinct non-numeric result states (Artifact #4 §0.5), in order.
const nonNumericStates = ["Not Assessed", "UNKNOWN", "Inconclusive", "Not Tested", "Not Applicable"];

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
      const context = visibleText(cover.match(/<p class="coverContext">([\s\S]*?)<\/p>/)?.[1] ?? "");
      if (context !== coverContext) errors.push(`${file}: Cover context line is "${context}", expected "${coverContext}"`);
      const copyText = visibleText(cover.match(/<div class="coverCopy">([\s\S]*?)<\/div>/)?.[1] ?? "");
      const sell = copyText.match(coverMarketing);
      if (sell) errors.push(`${file}: Cover copy makes an unsupported marketing / outcome claim ("${sell[0]}")`);
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
    const navTargets = [...nav.matchAll(/<a href="(#[^"]*)"/g)].map((m) => m[1]);
    if (navTargets.join(" ") !== primaryNavTargets.join(" ")) {
      errors.push(`${file}: navigation targets are "${navTargets.join(" ")}", expected "${primaryNavTargets.join(" ")}"`);
    }
    for (const t of primaryNavTargets) if (!new RegExp(`<section id="${t.slice(1)}"`).test(raw)) errors.push(`${file}: navigation target ${t} is not a section`);
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
    // Annotation d must not equate the Decision stage with the UNKNOWN assurance state (or with
    // Evidence): it reads "Accountable decision." (§0.10 theory map) and links only to its own
    // local note, #decision — never to #unknown or #evidence.
    const noteD = actIII.match(/<li id="note-decision">([\s\S]*?)<\/li>/)?.[1] ?? "";
    const noteDText = visibleText(noteD.replace(/<span class="noteKey"[^>]*>[\s\S]*?<\/span>/, ""));
    if (noteDText !== "Decision — Accountable decision.") errors.push(`${file}: annotation d reads "${noteDText}", expected "Decision — Accountable decision."`);
    const noteDHrefs = [...noteD.matchAll(/href="([^"]*)"/g)].map((m) => m[1]);
    if (!/^\s*<a href="#decision">[\s\S]*<\/a>\s*$/.test(noteD) || noteDHrefs.join(" ") !== "#decision") {
      errors.push(`${file}: annotation d must be one plain link to the local Decision note (#decision); found ${JSON.stringify(noteDHrefs)}`);
    }
    const chainDecision = chainOl.match(/<a class="chainAnchor" href="([^"]+)"><span class="chainStage">Decision<\/span>/)?.[1];
    if (chainDecision !== "#decision") errors.push(`${file}: the chain's Decision stage links to "${chainDecision}", expected "#decision"`);
    if ((raw.match(/\sid="decision"/g) ?? []).length !== 1) errors.push(`${file}: expected exactly one id="decision", found ${(raw.match(/\sid="decision"/g) ?? []).length}`);
    // The Decision note: every sentence verbatim from Artifact #2 (§0.10, §7.4, §3.8, §1.10), cited to the pinned artifact.
    const decisionNote = actIII.match(/<article id="decision" class="note noteDecision" aria-labelledby="decision-title">([\s\S]*?)<\/article>/)?.[1] ?? "";
    if (!decisionNote) errors.push(`${file}: the Decision note (article#decision) is missing from Act III`);
    else {
      const wantDecision = {
        title: "Accountable decision.",
        text: "A finding is an evidence-linked assessment conclusion. A decision is accountable disposition. Keeping them separate prevents management acceptance or remediation preference from changing the assessed condition.",
        small: "This separation prevents observations, interpretations and management choices from being collapsed into a single status field. Human approval is required for material facts, findings, exceptions and risk decisions. Inference accelerates review; accountable approval determines accepted state.",
      };
      const gotDecision = {
        title: visibleText(decisionNote.match(/<h3 id="decision-title" class="noteDecisionTitle">([\s\S]*?)<\/h3>/)?.[1] ?? ""),
        text: visibleText(decisionNote.match(/<p class="noteText">([\s\S]*?)<\/p>/)?.[1] ?? ""),
        small: visibleText(decisionNote.match(/<p class="noteSmall">([\s\S]*?)<\/p>/)?.[1] ?? ""),
      };
      for (const k of Object.keys(wantDecision)) if (gotDecision[k] !== wantDecision[k]) errors.push(`${file}: the Decision note ${k} is "${gotDecision[k]}", expected the approved Artifact #2 wording`);
      const cite = decisionNote.match(/<p class="marginRef marginRefSide">([\s\S]*?)<\/p>/)?.[1] ?? "";
      if (!/<a href="https:\/\/github\.com\/Sivas1187\/Ai-trust-graph\/blob\/[0-9a-f]{40}\/docs\/02-core-conceptual-model\.md"[^>]*>Artifact #2<\/a>/.test(cite) || !/^Artifact #2\s*§7\.4 · §3\.8\s*(·\s*)?§1\.10$/.test(visibleText(cite))) {
        errors.push(`${file}: the Decision note must cite the pinned Artifact #2 at §7.4 · §3.8 · §1.10 (found "${visibleText(cite)}")`);
      }
      if (!/§7\.4 · §3\.8 · §1\.10/.test(visibleText(actIII.match(/<p class="marginRef marginRefEnd act3RefEnd">([\s\S]*?)<\/p>/)?.[1] ?? ""))) {
        errors.push(`${file}: the Act III end reference (narrow layouts) lost the Decision note's §7.4 · §3.8 · §1.10`);
      }
      if (/href="#(unknown|evidence)"/.test(decisionNote)) errors.push(`${file}: the Decision note links to UNKNOWN or Evidence`);
      const dText = visibleText(decisionNote);
      const loaded = dText.match(/\b(approved outcome|pass(ed)?|fail(ed)?|score[sd]?|scoring|assurance state|result state|automat\w*|AI decides|final decision|certif\w*|guarantee\w*|resolves? UNKNOWN|overrides?)\b/i);
      if (loaded) errors.push(`${file}: the Decision note introduces unsupported wording ("${loaded[0]}")`);
    }
    if (/href="#evidence"/.test(chainOl.match(/<a class="chainAnchor" href="[^"]*"><span class="chainStage">Decision<\/span>/)?.[0] ?? "")) {
      errors.push(`${file}: the Decision stage must not point to the Evidence section`);
    }
    if (/href="#unknown"/.test(actIII)) errors.push(`${file}: Act III links to #unknown — the Decision stage must not point to the UNKNOWN state`);
    if (/Decision\s*—\s*UNKNOWN stays UNKNOWN/i.test(visibleText(raw.replace(/<script[\s\S]*?<\/script>/gi, "")))) {
      errors.push(`${file}: "Decision — UNKNOWN stays UNKNOWN" must not reappear`);
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
    // ── Domains (PR C): six coordinated lenses over one graph ──
    const dom = (raw.match(/<section id="domains" class="domainsAct"[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!dom) errors.push(`${file}: Domains section (#domains.domainsAct) not found`);
    const lensList = dom.match(/<ul class="lensList" aria-label="The six assessment domains">([\s\S]*)<\/ul>\s*<p class="figureNote lensNote">/)?.[1] ?? "";
    if (!lensList) errors.push(`${file}: the domain list (the text equivalent of the lens figure) is missing or no longer an unordered list`);
    inOrder("domains", lensList, /<h3 class="lensName">([^<]+)<\/h3>/g, domainNames);
    const lensItems = lensList.split(/<li class="lens(?:Item|Domain)"[^>]*>/).slice(1);
    const itemOk = lensItems.filter(
      (c) => /12 controls/.test(c) && /6 maturity capabilities/.test(c) && /ATG-[A-Z]{3}-001 … ATG-[A-Z]{3}-012/.test(c) &&
        (c.match(/<ul class="lensCaps">([\s\S]*?)<\/ul>/)?.[1].match(/<li>/g) ?? []).length === 6 && /<details class="lensDetails">/.test(c),
    ).length;
    if (lensItems.length !== 6 || itemOk !== 6) {
      errors.push(`${file}: expected exactly 6 domain lenses, each with "12 controls", "6 maturity capabilities", its control ID range and 6 capabilities in a disclosure; found ${itemOk}/${lensItems.length}`);
    }
    // No numbering, ranking or colour carried by the domains themselves.
    const lensNames = [...lensList.matchAll(/<h3 class="lensName">([^<]+)<\/h3>/g)].map((m) => m[1]);
    if (lensNames.some((n) => /\d/.test(n)) || /class="[^"]*\b(domainId|rank|stage|level|tier)\w*"/.test(lensList)) {
      errors.push(`${file}: domain lenses carry numbering or ranking markers`);
    }
    if (/style=|class="[^"]*(cyan|indigo|green|amber|gfNode-)/.test(lensList)) errors.push(`${file}: a domain lens carries its own colour`);
    const anchors = [...dom.matchAll(/<circle [^>]*class="lensAnchor"[^>]*>/g)].map((m) => m[0].replace(/c[xy]="[^"]*"/g, ""));
    if (anchors.length !== 6 || new Set(anchors).size !== 1) errors.push(`${file}: the six lens anchors must be present and drawn identically (found ${anchors.length})`);
    if (!/<svg class="graphField lensBand" aria-hidden="true"/.test(dom)) errors.push(`${file}: the domain graph must be decorative (aria-hidden)`);
    const lensNote = visibleText(dom.match(/<p class="figureNote lensNote">([\s\S]*?)<\/p>/)?.[1] ?? "");
    if (lensNote !== "Explanatory figure: six equal lenses reading one connected graph. Position, line and order imply no ranking, hierarchy, sequence or maturity.") {
      errors.push(`${file}: the domain figure's explanatory note (its text equivalent and no-ranking statement) is missing or changed: "${lensNote}"`);
    }
    if (!dom.includes("The six domains are coordinated assessment lenses over one graph.")) errors.push(`${file}: Domains lost the Artifact #2 §8.1 lede`);
    for (const f of ["02-core-conceptual-model.md", "03-maturity-model.md", "05-master-control-library.md"]) {
      if (!dom.includes(`docs/${f}`)) errors.push(`${file}: Domains lost its canonical source link to ${f}`);
    }
    // The retired card layout (hub panel, network, per-card IDs) must not return.
    if (/class="[^"]*\b(lensDomain|lensHub|lensFacts|lensNetwork|lensBody|domainTop|domainPrefix|domainCounts)\b/.test(raw) || /<p class="lensHubTitle">/.test(raw)) {
      errors.push(`${file}: the retired six-card domain layout is present again`);
    }

    // ── Release, review and limitations (PR C): factual colophon ──
    const st = (raw.match(/<section id="status" class="colophonAct"[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!st) errors.push(`${file}: Status section (#status.colophonAct) not found`);
    if (!/<h2 id="status-title" class="actTitle">Release, review and limitations\.<\/h2>/.test(st)) errors.push(`${file}: Status heading missing or changed`);
    const facts = [...st.matchAll(/<div><dt>([^<]+)<\/dt>([\s\S]*?)<\/div>/g)].map((m) => [m[1], [...m[2].matchAll(/<dd>([\s\S]*?)<\/dd>/g)].map((d) => visibleText(d[1]))]);
    const want = [
      ["Status", [manifestRelease.status]],
      ["Bundle", [manifestRelease.bundle]],
      ["Snapshot", [manifestRelease.snapshot]],
      ["Review", ["Author’s internal review complete", "Independent review pending"]],
      ["Validation", ["AI Trust Graph is not independently validated."]],
      ["Authorship", ["Methodology author: Siva Sethumadhavan"]],
      ["Change review", ["Until the governance bodies defined in Artifact #11 are standing, the methodology author reviews proposed changes directly."]],
    ];
    if (JSON.stringify(facts) !== JSON.stringify(want)) errors.push(`${file}: status / provenance facts changed: ${JSON.stringify(facts)}`);
    const gates = [...st.matchAll(/<li><span class="gateName">([^<]+)<\/span> <span class="gateState">([^<]+)<\/span><\/li>/g)];
    if (gates.length !== 5 || gates.some((g) => g[2] !== "Pending")) errors.push(`${file}: the five external release gates must each read "Pending" (found ${gates.length})`);
    if (!visibleText(st).includes("AI Trust Graph is a methodology, not a product. It is not a certification program, an accreditation body, a legal opinion, or a guarantee of AI security, safety or compliance.")) {
      errors.push(`${file}: Status lost its limitations statement`);
    }
    // Authorship stays one factual line: no portrait, titles, affiliations or promotion.
    if (/<img\b/.test(st) || /\b(founder|CEO|CTO|CISO|renowned|award|expert|hire|consult|speaking)\b/i.test(visibleText(st))) {
      errors.push(`${file}: Status carries personal-brand material beyond the factual authorship line`);
    }

    // ── Canonical source (PR C): the governed artifacts ──
    const src = (raw.match(/<section id="methodology" class="sourceAct"[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!src) errors.push(`${file}: Canonical source section (#methodology.sourceAct) not found`);
    if (!visibleText(src).includes("This website explains; the artifacts on GitHub decide.")) errors.push(`${file}: Canonical source lost "This website explains; the artifacts on GitHub decide."`);
    const pinnedRe = /https:\/\/github\.com\/Sivas1187\/Ai-trust-graph\/blob\/[0-9a-f]{40}\//;
    if (!new RegExp(`<p class="sourceManifestTitle"><a href="${pinnedRe.source}METHODOLOGY_MANIFEST\\.md"`).test(src)) errors.push(`${file}: the pinned METHODOLOGY_MANIFEST link is missing from Canonical source`);
    const srcTitles = [...src.matchAll(/<a class="sourceTitle" href="([^"]+)"[^>]*>([^<]+)<\/a>/g)];
    if (srcTitles.length !== 13 || srcTitles.some((m) => !pinnedRe.test(m[1]))) errors.push(`${file}: expected 12 artifacts + the companion, each linked at the pinned bundle commit (found ${srcTitles.length})`);
    inOrder("canonical artifacts (manifest reading order)", src, /<span class="sourceNum">Artifact #(\d+)<\/span>/g, readingOrder);
    if (!/<i>Non-normative\.<\/i>/.test(src)) errors.push(`${file}: the companion artifact is no longer marked non-normative`);

    // ── Public review (PR C): four entry points, governance framing ──
    const rv = (raw.match(/<section id="review" class="reviewAct"[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!rv) errors.push(`${file}: Public review section (#review.reviewAct) not found`);
    const entryList = rv.match(/<ul class="reviewList"[^>]*>([\s\S]*?)<\/ul>/)?.[1] ?? "";
    inOrder("contribution entry points", entryList, /<h3>([^<]+)<\/h3>/g, contributionEntries);
    if (!visibleText(rv).includes("Changes to canonical terms, controls, evidence grades, result states or scoring need a formal change proposal (Artifact #11 §2.4) before any pull request.")) {
      errors.push(`${file}: Public review lost the formal change-proposal rule`);
    }
    for (const [label, re] of [
      ["CONTRIBUTING", /blob\/main\/CONTRIBUTING\.md/],
      ["finding template", /template=finding-report\.yml/],
      ["feedback template", /template=general-feedback\.yml/],
      ["pinned manifest", /blob\/[0-9a-f]{40}\/METHODOLOGY_MANIFEST\.md/],
      ["REVIEW_FINDINGS", /REVIEW_FINDINGS\.md/],
    ]) if (!re.test(rv)) errors.push(`${file}: Public review lost its ${label} link`);
    if (/class="[^"]*\b(button|entryGrid|entry)\b/.test(rv) || /newsletter|subscribe|sign up|get started|join (us|the)/i.test(visibleText(rv))) {
      errors.push(`${file}: Public review carries CTA / growth styling or language`);
    }
    // The standalone scale band was removed; its figures live in Domains and Canonical source.
    if (/class="scale"|The structure that carries the model/.test(raw)) {
      errors.push(`${file}: the removed standalone scale band is present again`);
    }

    // ── UNKNOWN (PR D): an assurance invariant, not an error state ──
    const unk = (raw.match(/<section id="unknown" class="unknownAct"[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!unk) errors.push(`${file}: UNKNOWN section (#unknown.unknownAct) not found`);
    const unknownTitle = visibleText(unk.match(/<h2 id="unknown-title" class="unknownTitle">([\s\S]*?)<\/h2>/)?.[1] ?? "");
    if (unknownTitle !== "UNKNOWN stays UNKNOWN.") errors.push(`${file}: the UNKNOWN title is "${unknownTitle}", expected "UNKNOWN stays UNKNOWN."`);
    const unkText = visibleText(unk);
    const unkLead =
      "Insufficient evidence does not silently become a favourable — or an adverse — conclusion. UNKNOWN remains visible until sufficient evidence and accountable review resolve the material assertion.";
    if (visibleText(unk.match(/<p class="unknownLead">([\s\S]*?)<\/p>/)?.[1] ?? "") !== unkLead) errors.push(`${file}: the UNKNOWN lead sentence is missing or changed`);
    const notList = unk.match(/<ul class="unknownNot" aria-label="UNKNOWN is never silently converted into">([\s\S]*?)<\/ul>/)?.[1] ?? "";
    const notItems = [...notList.matchAll(/<li><span class="unknownFrom">UNKNOWN<\/span><span class="unknownNeq" aria-hidden="true"> ≠ <\/span><span class="visuallyHidden"> is not <\/span><span class="unknownTo">([^<]+)<\/span><\/li>/g)].map((m) => m[1]);
    if (notItems.join(" > ") !== unknownNotConverted.join(" > ") || (notList.match(/<li>/g) ?? []).length !== unknownNotConverted.length) {
      errors.push(`${file}: UNKNOWN non-equivalences are "${notItems.join(" > ")}", expected "${unknownNotConverted.join(" > ")}" (each "UNKNOWN ≠ x" with a spoken "is not")`);
    }
    if (!/<blockquote class="unknownInvariant"[^>]*><p><span class="noteRuleLabel">Invariant SC-INV-01 · <a href="[^"]*docs\/04-scoring-framework\.md"[^>]*>Artifact #4 — Scoring Framework<\/a><\/span>UNKNOWN is not zero, weak, safe or effective\.<\/p><\/blockquote>/.test(unk)) {
      errors.push(`${file}: invariant SC-INV-01 ("UNKNOWN is not zero, weak, safe or effective.") with its Artifact #4 link is missing or changed`);
    }
    if (!/<h3 class="unknownStatesTitle">UNKNOWN is not Not Tested\.<\/h3>/.test(unk) || !unkText.includes("They are distinct non-numeric result states with different meanings.")) {
      errors.push(`${file}: the UNKNOWN / Not Tested distinction is missing or changed`);
    }
    const register = [...(unk.match(/<dl class="stateRegister">([\s\S]*?)<\/dl>/)?.[1] ?? "").matchAll(/<div><dt>([^<]+)<\/dt><dd>([^<]+)<\/dd><\/div>/g)].map((m) => [m[1], m[2]]);
    const wantRegister = [
      ["UNKNOWN", "The material state remains unresolved because evidence is absent, insufficient or materially conflicting."],
      ["Not Tested", "Testing required for a stronger conclusion was not performed."],
    ];
    if (JSON.stringify(register) !== JSON.stringify(wantRegister)) errors.push(`${file}: the UNKNOWN / Not Tested meanings changed: ${JSON.stringify(register)}`);
    const stateRows = [...(unk.match(/<details class="unknownDetails"><summary>Numeric and reporting treatment<\/summary>([\s\S]*?)<\/details>/)?.[1] ?? "").matchAll(/<tr><th scope="row">([^<]+)<\/th><td>([^<]+)<\/td><td>([^<]+)<\/td><\/tr>/g)].map((m) => [m[1], m[2], m[3]]);
    const wantRows = [
      ["UNKNOWN", "No numeric value.", "Included in uncertainty and evidence-gap counts."],
      ["Not Tested", "No numeric value for effectiveness.", "May retain a design score if separately supported."],
    ];
    if (JSON.stringify(stateRows) !== JSON.stringify(wantRows)) errors.push(`${file}: the numeric / reporting treatment disclosure is missing or changed: ${JSON.stringify(stateRows)}`);
    if (!unkText.includes("Neither may be silently converted into a fabricated effectiveness result. Evidence grade E0 (no evidence) can support either, according to context: The only defensible conclusion is UNKNOWN or Not Tested.")) {
      errors.push(`${file}: the E0 → UNKNOWN or Not Tested rule is missing or changed`);
    }
    inOrder("non-numeric result states", unk.match(/<ul class="stateIds"[^>]*>([\s\S]*?)<\/ul>/)?.[1] ?? "", /<li>([^<]+)<\/li>/g, nonNumericStates);
    if (!unkText.includes("They must never be silently collapsed into one another, into a score, or into a pass/fail. AI Trust Graph deliberately produces no single overall trust score.")) {
      errors.push(`${file}: UNKNOWN lost the "no single overall trust score" statement`);
    }
    for (const f of ["04-scoring-framework.md", "06-evidence-model.md"]) if (!unk.includes(`docs/${f}`)) errors.push(`${file}: UNKNOWN lost its canonical source link to ${f}`);
    // An assurance state, not an alert: no warning, error, risk or traffic-light treatment.
    if (/class="[^"]*\b\w*(alert|warn|danger|error|risk|amber|red|traffic|status|badge|pill|chip)\w*\b/i.test(unk) || /role="alert"|[⚠❗❌✓✔✗]/.test(unk) || /\b(warning|danger|alert)\b/i.test(unkText)) {
      errors.push(`${file}: UNKNOWN carries alert, warning, error or traffic-light treatment`);
    }
    // ── Evidence (PR D): six grades on one quiet axis ──
    const ev = (raw.match(/<section id="evidence" class="evidenceAct"[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!ev) errors.push(`${file}: Evidence section (#evidence.evidenceAct) not found — Act III annotation c points to #evidence`);
    const evText = visibleText(ev);
    if (!/<h2 id="evidence-title" class="actTitle">Six grades of evidentiary support\.<\/h2>/.test(ev)) errors.push(`${file}: Evidence heading missing or changed`);
    if (!/<p class="actLede">Grade measures evidentiary support, not desirability, safety or compliance\.<\/p>/.test(ev)) errors.push(`${file}: Evidence lost "Grade measures evidentiary support, not desirability, safety or compliance."`);
    const axis = ev.match(/<ol class="evLine" aria-label="Evidence grades E0 to E5, in order of increasing evidentiary support">([\s\S]*?)<\/ol>/)?.[1] ?? "";
    const stops = [...axis.matchAll(/<li class="evStop"><span class="evGrade">([^<]+)<\/span><span class="visuallyHidden"> — <\/span><span class="evGradeName">([^<]+)<\/span><\/li>/g)].map((m) => `${m[1]} — ${m[2].replace(/&amp;/g, "&")}`);
    if (stops.join(" > ") !== evidenceGrades.join(" > ") || (axis.match(/<li\b/g) ?? []).length !== 6) {
      errors.push(`${file}: evidence grades on the axis are "${stops.join(" > ")}", expected "${evidenceGrades.join(" > ")}"`);
    }
    if (visibleText(ev.match(/<figcaption class="evAxisNote">([\s\S]*?)<\/figcaption>/)?.[1] ?? "") !== "E0 → E5 Increasing evidentiary support only. The order does not measure safety, desirability or compliance.") {
      errors.push(`${file}: the evidence axis lost its "increasing evidentiary support only" caption`);
    }
    const evDetails = ev.match(/<details class="evDetails"><summary>Meaning, and what each grade can support<\/summary>([\s\S]*?)<\/details>/)?.[1] ?? "";
    const entries = [...evDetails.matchAll(/<div class="evEntry"><dt><span class="evGrade">([^<]+)<\/span> <span class="evEntryName">([^<]+)<\/span><\/dt><dd><span class="noteLabel">Meaning<\/span> ([^<]+)<\/dd><dd><span class="noteLabel">What it can support<\/span> ([^<]+)<\/dd><\/div>/g)];
    const entryNames = entries.map((m) => `${m[1]} — ${m[2].replace(/&amp;/g, "&")}`);
    if (entryNames.join(" > ") !== evidenceGrades.join(" > ")) errors.push(`${file}: the evidence register is "${entryNames.join(" > ")}", expected each grade with its meaning and what it can support`);
    const gotRegister = entries.map((m) => [m[3], m[4]]);
    if (JSON.stringify(gotRegister) !== JSON.stringify(evidenceRegister)) {
      const i = evidenceRegister.findIndex((r, k) => JSON.stringify(r) !== JSON.stringify(gotRegister[k]));
      errors.push(`${file}: evidence register content changed or lost at E${i} (meaning / what it can support): ${JSON.stringify(gotRegister[i] ?? null)}`);
    }
    if (/\b(higher|better|stronger) grades?\b[^.]*\b(safer|safe|more secure|compliant|better|desirable)\b/i.test(evText) || /\bE\d\s*=\s*(safe|unsafe|pass|fail)/i.test(evText)) {
      errors.push(`${file}: Evidence equates grade with safety, desirability or compliance`);
    }
    const rules = [...(ev.match(/<ul class="evRules" aria-label="How to read evidence grades">([\s\S]*?)<\/ul>/)?.[1] ?? "").matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => visibleText(m[1]));
    const wantRules = [
      "Grade is not sufficiency. Meeting the grade minimum is necessary but not sufficient; relevance, scope, currentness, representativeness, conflict status and an approved reviewer decision still govern.",
      "A high grade can confirm an adverse state. A low grade can weakly suggest a favorable state.",
      "Grade is its own quantity. Never add evidence grade to control effectiveness, severity, maturity or risk as if they were the same quantity.",
    ];
    if (JSON.stringify(rules) !== JSON.stringify(wantRules)) errors.push(`${file}: the evidence reading rules changed: ${JSON.stringify(rules)}`);
    if (!ev.includes("docs/06-evidence-model.md")) errors.push(`${file}: Evidence lost its canonical Artifact #6 link`);
    // Not a maturity, safety or pass/fail scale: no such labels, no colour progression, ladder or gauge.
    if (/\b(low|medium|high|weak|strong|poor|good|excellent|safe|unsafe|pass|fail|mature|immature)\b/i.test(stops.join(" ")) ||
      /class="[^"]*\b\w*(ladder|gauge|meter|progress|level|tier|rank|red|green|amber|cyan|indigo|gfNode-)\w*\b/i.test(ev) || /style=|<meter|<progress/.test(ev)) {
      errors.push(`${file}: Evidence grades carry maturity / safety / pass-fail labels, colour progression, ladder or gauge structure`);
    }
    if (/class="[^"]*\b(evScale|evSteps|evStep|evNode|evId|evName|evidenceRules)\b/.test(raw)) errors.push(`${file}: the retired evidence step diagram is present again`);
    // ── Assessment lifecycle (PR D): a numbered register, not a progress chain ──
    const lc = (raw.match(/<section id="lifecycle" class="lifecycleAct"[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!lc) errors.push(`${file}: Lifecycle section (#lifecycle.lifecycleAct) not found`);
    if (!/<h2 id="lifecycle-title" class="actTitle">Thirteen controlled phases\.<\/h2>/.test(lc)) errors.push(`${file}: Lifecycle heading missing or changed`);
    const lcText = visibleText(lc);
    if (!lcText.includes("Separate from the reasoning chain: Artifact #7 governs the controlled fieldwork lifecycle and gates without redefining upstream semantics.")) {
      errors.push(`${file}: Lifecycle lost its "separate from the reasoning chain" statement`);
    }
    if (visibleText(lc.match(/<p class="lcRuleLine">([\s\S]*?)<\/p>/)?.[1] ?? "") !== "The lifecycle contains thirteen controlled phases. Phases may iterate, but required gates cannot be skipped merely because information was available earlier.") {
      errors.push(`${file}: the lifecycle iteration rule is missing or changed`);
    }
    const phaseOl = lc.match(/<ol class="phaseRegister" aria-label="Assessment Methodology phases, Artifact #7 §0.11">([\s\S]*?)<\/ol>/)?.[1] ?? "";
    const phases = [...phaseOl.matchAll(/<li class="phaseRow"><span class="phaseNum"><span class="visuallyHidden">Phase <\/span>(\d+)<\/span><span class="phaseName">([^<]+)<\/span><span class="phaseOutcome">([^<]+)<\/span><\/li>/g)].map((m) => `${m[1]} ${m[2]}: ${m[3]}`);
    const wantPhases = assessmentPhases.map((n, i) => `${i + 1} ${n}: ${phaseOutcomes[i]}`);
    if (phases.join(" > ") !== wantPhases.join(" > ") || (phaseOl.match(/<li\b/g) ?? []).length !== 13) {
      errors.push(`${file}: assessment phases on page are "${phases.join(" > ")}", expected "${wantPhases.join(" > ")}"`);
    }
    const gateDl = lc.match(/<details class="lcDetails"><summary>Gate tests between phases<\/summary>([\s\S]*?)<\/details>/)?.[1] ?? "";
    inOrder("gate tests", gateDl, /<div><dt>([^<]+)<\/dt><dd>[^<]+<\/dd><\/div>/g, gateTests);
    const typeUl = lc.match(/<ul class="typeRegister" aria-labelledby="assessment-types-title">([\s\S]*?)<\/ul>/)?.[1] ?? "";
    inOrder("assessment types", typeUl, /<li><details class="typeEntry"><summary>([^<]+)<\/summary><p>[^<]+<\/p><\/details><\/li>/g, assessmentTypes);
    if (!/<h3 id="assessment-types-title" class="lcTypesTitle">Assessment types<\/h3><p class="noteSmall">Listed in Artifact #7 order; the order implies no priority\.<\/p>/.test(lc)) {
      errors.push(`${file}: the assessment types lost their "the order implies no priority" note`);
    }
    if (!lc.includes("docs/07-assessment-methodology.md")) errors.push(`${file}: Lifecycle lost its canonical Artifact #7 link`);
    // No progress, completion or "current" semantics; not chips; the retired timeline must not return.
    if (/aria-current|<progress|<meter|[✓✔☑%]|class="[^"]*\b\w*(progress|complete|done|current|active|check|tick|chip|pill|badge|step|marker)\w*\b/i.test(lc)) {
      errors.push(`${file}: Lifecycle carries progress, completion, current-state, check-mark or chip treatment`);
    }
    if (/class="[^"]*\b(lcPhases|lcPhase|lcMarker|lcNum|lcName|lcRule|lcTypes|lcTypeDefs|lcTypeList|chips)\b/.test(raw)) errors.push(`${file}: the retired lifecycle timeline or chip list is present again`);
    // Retired UNKNOWN layout (cards, grid) must not return.
    if (/class="[^"]*\b(unknownGrid|unknownCanon|stateCards|stateCard|stateCompare)\b/.test(raw) || /<section id="unknown" class="unknown"/.test(raw)) {
      errors.push(`${file}: the retired UNKNOWN card layout is present again`);
    }
    // ── Footer (PR D): facts only ──
    const ft = (raw.match(/<footer class="siteFooter">[\s\S]*?<\/footer>/)?.[0] ?? "").replace(/<!-- -->/g, "");
    if (!ft) errors.push(`${file}: footer (.siteFooter) not found`);
    const ftText = visibleText(ft);
    const wantFooter = [
      "AI Trust Graph",
      `${manifestRelease.status} · Bundle ${manifestRelease.bundle} · Snapshot ${manifestRelease.snapshot}`,
      "AI Trust Graph is a methodology, not a product. This website is explanatory. The GitHub methodology artifacts are canonical and win on any conflict.",
      `Copyright © 2026 Siva Sethumadhavan. Methodology text licensed CC BY 4.0; the name is reserved separately — see TRADEMARKS.`,
    ];
    const gotFooter = [...ft.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => visibleText(m[1]));
    if (JSON.stringify(gotFooter) !== JSON.stringify(wantFooter)) errors.push(`${file}: footer facts changed: ${JSON.stringify(gotFooter)}`);
    const ftLinks = [...ft.matchAll(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => [m[1].replace(/\/blob\/[0-9a-f]{40}\//, "/blob/<pinned>/"), visibleText(m[2])]);
    const wantFtLinks = [
      ["https://github.com/Sivas1187/Ai-trust-graph", "GitHub methodology artifacts"],
      ["https://github.com/Sivas1187/Ai-trust-graph/blob/<pinned>/LICENSE", "CC BY 4.0"],
      ["https://github.com/Sivas1187/Ai-trust-graph/blob/main/TRADEMARKS.md", "TRADEMARKS"],
    ];
    if (JSON.stringify(ftLinks) !== JSON.stringify(wantFtLinks)) errors.push(`${file}: footer links are ${JSON.stringify(ftLinks)}, expected ${JSON.stringify(wantFtLinks)}`);
    if (/<img\b|<form\b|<input\b|<button\b/.test(ft) || /newsletter|subscribe|sign up|get started|contact|follow|twitter|linkedin|mastodon|bluesky|about the author|hire|book a|consult|services|engagement|pricing|demo/i.test(ftText) || /linkedin\.com|twitter\.com|x\.com\/|mailto:/i.test(ft)) {
      errors.push(`${file}: the footer carries social, contact, biography, CTA or newsletter material`);
    }
    // ── Brand: the header lockup, and a mark that stays a plain, self-contained monochrome drawing ──
    const header = raw.match(/<header class="siteHeader">[\s\S]*?<\/header>/)?.[0] ?? "";
    const brand = header.match(/<a class="brand" href="([^"]*)" aria-label="([^"]*)">([\s\S]*?)<\/a>/);
    if (!brand) errors.push(`${file}: the header brand link (a.brand) is missing`);
    else {
      if (brand[1] !== "#top") errors.push(`${file}: the brand link targets "${brand[1]}", expected "#top"`);
      if (brand[2] !== "AI Trust Graph — back to top") errors.push(`${file}: the brand link label is "${brand[2]}", expected "AI Trust Graph — back to top"`);
      if (visibleText(brand[3]) !== "AI Trust Graph") errors.push(`${file}: the brand text is "${visibleText(brand[3])}", expected "AI Trust Graph"`);
      const mark = brand[3].match(/<svg class="brandMark"[^>]*>[\s\S]*?<\/svg>/)?.[0] ?? "";
      if (!mark || !/aria-hidden="true"/.test(mark.slice(0, mark.indexOf(">")))) errors.push(`${file}: the brand mark is missing or not decorative (aria-hidden)`);
      const bad = mark.match(/<(image|text|foreignObject|style|script|use|filter|linearGradient|radialGradient|pattern|mask)\b|\b(filter|mask|style|href|xlink:href|src)=|url\(|https?:/i);
      if (bad) errors.push(`${file}: the brand mark contains "${bad[0]}" (no images, text, gradients, filters, styles or external references)`);
      const paints = [...mark.matchAll(/\b(fill|stroke)="([^"]*)"/g)].map((m) => m[2]).filter((v) => !/^(currentColor|none)$/.test(v));
      if (paints.length) errors.push(`${file}: the brand mark uses colour values ${paints.join(", ")} (monochrome currentColor only)`);
    }
    // ── Deep-page return links: "↑ On this page" → #page-index, at the end of six major blocks only ──
    if ((raw.match(/\sid="page-index"/g) ?? []).length !== 1 || !/<nav id="page-index" class="pageIndex"/.test(raw)) {
      errors.push(`${file}: the page index must carry the single stable id "page-index"`);
    }
    const returns = [...raw.matchAll(/<p class="pageReturn">([\s\S]*?)<\/p>/g)].map((m) => m[1]);
    const returnAnchors = [...raw.matchAll(/<a [^>]*href="#page-index"[^>]*>/g)].map((m) => m[0]);
    if (returns.length !== 6 || returnAnchors.length !== 6) errors.push(`${file}: expected 6 "↑ On this page" return links to #page-index, found ${returns.length} (${returnAnchors.length} anchors)`);
    for (const r of returns) {
      const a = r.match(/^<a ([^>]*)>([\s\S]*)<\/a>$/);
      if (!a || a[1] !== 'href="#page-index"') errors.push(`${file}: a return link is not a plain anchor to #page-index: ${r.slice(0, 120)}`);
      else if (visibleText(a[2]) !== "↑ On this page") errors.push(`${file}: a return link reads "${visibleText(a[2])}", expected "↑ On this page"`);
      if (/aria-current|role=|style=|onclick|class="[^"]*(active|current|progress|complete|done|sticky|fixed|button)/i.test(r)) errors.push(`${file}: a return link carries state, role, style or button semantics`);
    }
    const sectionsWithReturn = [...raw.matchAll(/<section id="([^"]+)"[\s\S]*?<\/section>/g)].filter((m) => m[0].includes('class="pageReturn"')).map((m) => m[1]);
    if (sectionsWithReturn.join(" ") !== "flow domains unknown evidence lifecycle methodology") errors.push(`${file}: return links sit in "${sectionsWithReturn.join(" ")}", expected "flow domains unknown evidence lifecycle methodology"`);
    // ── Whole page: unique ids; Assurance is #unknown, and #evidence stays for annotation c ──
    const ids = [...raw.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
    if (dupes.length) errors.push(`${file}: duplicate id(s): ${dupes.join(", ")}`);
    if (/<a href="#evidence"/.test(nav)) errors.push(`${file}: the Assurance navigation item must target #unknown, not #evidence`);
    if (!/<li id="note-evidence"><a href="#evidence">/.test(actIII) || !/<section id="evidence"/.test(raw)) errors.push(`${file}: Act III annotation c no longer reaches the #evidence section`);
    // ── On this page: website orientation only — eight links, page order, real targets, no progress ──
    const pix = raw.match(/<nav id="page-index" class="pageIndex" aria-labelledby="page-index-label">[\s\S]*?<\/nav>/)?.[0] ?? "";
    if (!pix || !/<p id="page-index-label" class="pageIndexLabel">On this page<\/p>/.test(pix)) errors.push(`${file}: the "On this page" navigation (labelled landmark with the stable id "page-index") is missing`);
    const pixLinks = [...pix.matchAll(/<a ([^>]*)>([\s\S]*?)<\/a>/g)].map((m) => [m[1].match(/href="([^"]*)"/)?.[1], visibleText(m[2])]);
    if (JSON.stringify(pixLinks) !== JSON.stringify(pageIndexLinks)) {
      errors.push(`${file}: "On this page" links are ${JSON.stringify(pixLinks)}, expected ${JSON.stringify(pageIndexLinks)}`);
    }
    for (const [href] of pageIndexLinks) if (!new RegExp(`<section id="${href.slice(1)}"`).test(raw)) errors.push(`${file}: "On this page" target ${href} is not a section`);
    const pixClasses = [...pix.matchAll(/class="([^"]*)"/g)].map((m) => m[1]).join(" ");
    if (/aria-current|<progress|<meter|<ol\b/.test(pix) || /[✓✔☑%\d]/.test(visibleText(pix)) || /progress|complete|done|current|active|step|visited/i.test(pixClasses)) {
      errors.push(`${file}: "On this page" carries numbering, progress, completion or active-state semantics`);
    }
    if (raw.indexOf('class="pageIndex"') < raw.indexOf("</section>") || raw.indexOf('class="pageIndex"') > raw.indexOf('<section id="problem"')) {
      errors.push(`${file}: "On this page" must sit between the Cover and Act II`);
    }
    // ── Domains: equal treatment in the graph band — no secondary accent beside any domain ──
    const band = dom.match(/<svg class="graphField lensBand"[\s\S]*?<\/svg>/)?.[0] ?? "";
    if (/gfNode-|style=|class="[^"]*(cyan|indigo|green|amber|ochre|red)/.test(band)) errors.push(`${file}: the Domains graph band carries a per-node or per-domain colour accent`);
    // ── Colour never carries meaning: no semantic colour / status classes anywhere on the page ──
    const classTokens = [...new Set([...raw.matchAll(/\sclass="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter(Boolean))];
    const semantic = classTokens.filter((t) => !/^gfNode-(indigo|green|amber)$/.test(t) && (semanticColourClass.test(t) || semanticColourRole.test(t)));
    if (semantic.length) errors.push(`${file}: semantic colour / status class(es) present: ${semantic.join(", ")}`);
  }
  for (const ctx of allowedContexts) text = text.replace(new RegExp(ctx.source, "gi"), " ");
  for (const re of forbidden) {
    const m = text.match(re);
    if (m) errors.push(`${file}: forbidden wording "${m[0]}" … ${text.slice(Math.max(0, m.index - 60), m.index + 60)}`);
  }
}

// Source-level guards: the mark and the return links stay static, server-rendered and dependency-free.
const pkg = JSON.parse(readFileSync(join(siteDir, "package.json"), "utf8"));
const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
const iconLib = /icon|lucide|heroicons|fontawesome|feather|phosphor|tabler|iconify|svgr|remixicon|ionicons/i;
for (const d of deps) if (iconLib.test(d)) errors.push(`package.json: icon dependency "${d}" is not allowed`);
const sources = readdirSync(join(siteDir, "app"), { recursive: true }).filter((f) => /\.(tsx?|mjs)$/.test(f));
for (const f of sources) {
  const src = readFileSync(join(siteDir, "app", f), "utf8");
  for (const m of src.matchAll(/^\s*import\b[^;]*?from\s+["']([^"']+)["']/gm)) {
    if (!/^(\.|next(\/|$)|react(\/|$)|react-dom)/.test(m[1]) || iconLib.test(m[1])) errors.push(`app/${f}: imports "${m[1]}" (no icon or third-party UI dependency)`);
  }
}
for (const f of ["BrandMark.tsx", "PageIndexReturn.tsx"]) {
  const src = readFileSync(join(siteDir, "app", "components", f), "utf8");
  if (/["']use client["']|\buse(State|Effect|Ref)\b|\bon[A-Z]\w*=/.test(src)) errors.push(`app/components/${f}: must stay a static server component (no client code, state or handlers)`);
}
const css = readFileSync(join(siteDir, "app", "globals.css"), "utf8");
for (const m of css.matchAll(/([^{}]*\.pageReturn[^{}]*)\{([^}]*)\}/g)) {
  if (/position\s*:\s*(fixed|sticky)/i.test(m[2])) errors.push(`app/globals.css: "${m[1].trim()}" makes the return link fixed or sticky`);
}
for (const m of css.matchAll(/([^{}]*\.brandMark[^{}]*)\{([^}]*)\}/g)) {
  if (/filter|drop-shadow|gradient|url\(/i.test(m[2])) errors.push(`app/globals.css: "${m[1].trim()}" adds a filter, gradient or image to the brand mark`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Claims scan passed: ${html.length} page(s), ${forbidden.length} forbidden patterns, 0 matches.`);
