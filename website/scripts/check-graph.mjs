// Ontology guard for the /graph/ example (app/graph-example.json).
//
// Fails when:
// 1. an entity family or definition, or a predicate meaning or constraint,
//    differs from Artifact #12 (docs/12-ontology-specification.md, Appendix A
//    Canonical Entity Registry and Appendix C Canonical Relationship Registry);
// 2. a node type, relationship predicate or view predicate is not a canonical
//    term, or a node type or predicate used in the graph has no bundled text;
// 3. the example names an Appendix E pattern that does not exist;
// 4. the graph is malformed (duplicate ids, dangling endpoints, self loops,
//    missing positions) or an UNKNOWN relationship is not written as UNKNOWN.
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const example = JSON.parse(readFileSync(resolve(here, "..", "app", "graph-example.json"), "utf8"));
const ontology = readFileSync(resolve(here, "..", "..", "docs", "12-ontology-specification.md"), "utf8");

const errors = [];
const fail = (m) => errors.push(m);

/** Rows of the first Markdown table after `heading`, as arrays of trimmed cells. */
function tableAfter(heading) {
  const start = ontology.indexOf(`\n${heading}\n`);
  if (start < 0) {
    fail(`docs/12: heading not found: ${heading}`);
    return [];
  }
  const rows = [];
  let inTable = false;
  for (const line of ontology.slice(start + heading.length + 2).split("\n")) {
    if (line.startsWith("|")) {
      inTable = true;
      const cells = line.slice(1, line.endsWith("|") ? -1 : undefined).split("|").map((c) => c.trim());
      if (!/^-+$/.test(cells[0]) && !cells[0].startsWith("**")) rows.push(cells);
    } else if (inTable) break;
  }
  return rows;
}

const entityRows = new Map(tableAfter("# Appendix A. Canonical Entity Registry").map((c) => [c[0], { family: c[1], definition: c[2] }]));
const predicateRows = new Map(tableAfter("# Appendix C. Canonical Relationship Registry").map((c) => [c[0], { meaning: c[3], constraint: c[4] }]));
if (entityRows.size < 100) fail(`docs/12: Appendix A parsed only ${entityRows.size} rows`);
if (predicateRows.size < 90) fail(`docs/12: Appendix C parsed only ${predicateRows.size} rows`);

// 1. Verbatim texts.
for (const [type, text] of Object.entries(example.entities)) {
  const canon = entityRows.get(type);
  if (!canon) fail(`entity ${type} is not in Appendix A`);
  else {
    if (text.family !== canon.family) fail(`entity ${type}: family "${text.family}" differs from Appendix A "${canon.family}"`);
    if (text.definition !== canon.definition) fail(`entity ${type}: definition differs from Appendix A`);
  }
}
for (const [predicate, text] of Object.entries(example.predicates)) {
  const canon = predicateRows.get(predicate);
  if (!canon) fail(`predicate ${predicate} is not in Appendix C`);
  else {
    if (text.meaning !== canon.meaning) fail(`predicate ${predicate}: meaning differs from Appendix C`);
    if (text.constraint !== canon.constraint) fail(`predicate ${predicate}: constraint differs from Appendix C`);
  }
}

// 2. Terms used by the graph and the views.
const { nodes, relationships } = example.graph;
for (const n of nodes) {
  if (!entityRows.has(n.type)) fail(`node ${n.id}: type ${n.type} is not in Appendix A`);
  if (!example.entities[n.type]) fail(`node ${n.id}: no bundled definition for ${n.type}`);
}
for (const r of relationships) {
  if (!predicateRows.has(r.type)) fail(`relationship ${r.id}: ${r.type} is not in Appendix C`);
  if (!example.predicates[r.type]) fail(`relationship ${r.id}: no bundled meaning for ${r.type}`);
}
for (const [view, predicates] of Object.entries(example.views)) {
  for (const p of predicates) if (!predicateRows.has(p)) fail(`view ${view}: ${p} is not in Appendix C`);
  if (!relationships.some((r) => predicates.includes(r.type))) fail(`view ${view} shows no relationship of the example`);
}

// 3. Pattern reference.
if (!ontology.includes(`\n# ${example.pattern}\n`)) fail(`pattern "${example.pattern}" is not an Artifact #12 heading`);

// 4. Graph shape.
const ids = new Set();
for (const n of nodes) {
  if (ids.has(n.id)) fail(`duplicate node id ${n.id}`);
  ids.add(n.id);
  if (typeof n.x !== "number" || typeof n.y !== "number") fail(`node ${n.id} has no position`);
  if (!["above", "below", "right"].includes(n.labelAt)) fail(`node ${n.id}: labelAt must be above, below or right`);
  if (!n.label || !n.summary) fail(`node ${n.id} needs a label and a summary`);
}
const relIds = new Set();
for (const r of relationships) {
  if (relIds.has(r.id)) fail(`duplicate relationship id ${r.id}`);
  relIds.add(r.id);
  if (!ids.has(r.from) || !ids.has(r.to)) fail(`relationship ${r.id} has a missing endpoint`);
  if (r.from === r.to) fail(`relationship ${r.id} is a self loop`);
  if (r.state !== undefined && r.state !== "UNKNOWN") fail(`relationship ${r.id}: state "${r.state}" is not handled by the view`);
  if (r.state === "UNKNOWN" && !/\bUNKNOWN\b/.test(r.conditions ?? "")) fail(`relationship ${r.id} is UNKNOWN but its conditions do not say so`);
}

if (errors.length) {
  console.error(`check-graph: ${errors.length} problem(s)`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  `check-graph: ${nodes.length} objects, ${relationships.length} relationships; ${Object.keys(example.entities).length} definitions and ${Object.keys(example.predicates).length} predicates match Artifact #12 verbatim.`,
);
