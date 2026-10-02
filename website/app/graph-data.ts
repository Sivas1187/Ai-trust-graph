import example from "./graph-example.json";

export type GraphView = "system" | "authority" | "controls" | "evidence";

/** Where a node's name and type are drawn relative to the node. */
export type LabelAt = "above" | "below" | "right";

export type GraphNode = {
  id: string;
  type: string;
  label: string;
  summary: string;
  x?: number;
  y?: number;
  labelAt?: LabelAt;
};

export type GraphRelationship = {
  id: string;
  from: string;
  to: string;
  type: string;
  label?: string;
  conditions?: string;
  state?: string;
};

export type GraphSnapshot = {
  nodes: GraphNode[];
  relationships: GraphRelationship[];
  generatedAt?: string;
};

export const graphViews: { id: GraphView; label: string; description: string }[] = [
  { id: "system", label: "System", description: "Every object and relationship in the synthetic system." },
  { id: "authority", label: "Authority", description: "Identity, delegation, invocation and the limits placed on authority." },
  { id: "controls", label: "Controls", description: "Where approvals, limits and controls govern the consequential action." },
  { id: "evidence", label: "Evidence", description: "Where evidence items and evidence sources are linked to the graph." },
];

/**
 * Bundled synthetic example, modelled on the ontology's "Agent delegated
 * action" pattern (Artifact #12, Appendix E.1). The texts in `entities` and
 * `predicates` are verbatim from Artifact #12; scripts/check-graph.mjs keeps
 * them in step with docs/12-ontology-specification.md.
 */
export const syntheticGraph: GraphSnapshot = example.graph as GraphSnapshot;
export const examplePattern: string = example.pattern;

/** Artifact #12, Appendix A (Canonical Entity Registry): Family and Definition. */
export const entityDefinitions: Record<string, { family: string; definition: string }> = example.entities;

/** Artifact #12, Appendix C (Canonical Relationship Registry): Meaning and Constraint. */
export const predicateDefinitions: Record<string, { meaning: string; constraint: string }> = example.predicates;

const viewPredicates: Record<Exclude<GraphView, "system">, Set<string>> = {
  authority: new Set(example.views.authority),
  controls: new Set(example.views.controls),
  evidence: new Set(example.views.evidence),
};

export function relationshipInView(rel: GraphRelationship, view: GraphView) {
  return view === "system" || viewPredicates[view].has(rel.type);
}
