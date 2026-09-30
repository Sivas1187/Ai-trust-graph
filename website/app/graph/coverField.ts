/**
 * Curated, deterministic coordinates for the Cover graph fields.
 *
 * Taken from the approved refined visual-reset prototype
 * (review-artifacts/visual-reset-prototype/*-refined.png on the
 * `visual-reset-prototype-review` branch) and frozen here: nothing is
 * generated at build or run time. Desktop and mobile are separate
 * compositions, not a scaled copy of one another.
 *
 * Coordinates are in each field's own viewBox. The desktop field sits under a
 * 72px header, the mobile field under a 60px header; the areas the Cover copy
 * occupies are kept free of nodes and edges (the Cover layout reserves them —
 * see `.coverFrame` in globals.css).
 *
 * The field is decorative (aria-hidden). Nodes, edges and the path are not
 * ontology objects, predicates or a claimed attack path; accent colours carry
 * no meaning.
 */
import type { GraphFieldData } from "../components/GraphField";

export const coverFieldDesktop: GraphFieldData = {
  width: 1440,
  height: 828,
  // [x, y, radius, accent?]
  nodes: [
    [167, 20, 2.7],
    [286, 45, 3.9],
    [342, 92, 3.4, "amber"],
    [688, 73, 4.8],
    [750, 61, 4.6],
    [883, 54, 3.6, "indigo"],
    [1220, 51, 3.8, "indigo"],
    [1336, 72, 3.5],
    [1435, 84, 3.7],
    [95, 172, 4.5],
    [668, 172, 3.4],
    [856, 205, 4.1],
    [1181, 151, 3.4],
    [1438, 214, 3.1, "green"],
    [60, 252, 4.2, "indigo"],
    [162, 325, 2.7],
    [336, 272, 4.5],
    [915, 306, 3.8],
    [13, 383, 3.7],
    [127, 401, 3.7],
    [1184, 409, 3.6],
    [34, 454, 4.3],
    [165, 525, 3.8],
    [1162, 484, 2.7],
    [152, 559, 3.7],
    [1123, 610, 2.6],
    [1339, 631, 3.2],
    [1357, 649, 3.1],
    [87, 700, 4],
  ],
  // pairs of indexes into `nodes`
  edges: [
    [0, 1], [0, 9], [1, 2], [3, 4], [3, 10], [4, 5], [5, 11], [6, 12],
    [6, 7], [7, 8], [8, 13], [9, 14], [9, 15], [4, 10], [11, 17], [7, 12],
    [7, 13], [14, 15], [15, 19], [18, 21], [18, 19], [19, 21], [20, 23], [22, 24],
    [19, 22], [23, 25], [24, 28], [26, 27],
  ],
  path: { points: [[560, 46], [404, 126], [618, 190], [846, 124], [1012, 142], [1128, 346], [1262, 488], [1196, 688], [1226, 828]], quietSegments: 3 },
};

export const coverFieldMobile: GraphFieldData = {
  width: 390,
  height: 300,
  // [x, y, radius, accent?]
  nodes: [
    [21, 36, 3.4],
    [114, 38, 3.7],
    [169, 21, 4.2],
    [216, 33, 2.9],
    [287, 36, 4.6],
    [331, 143, 4.2],
    [109, 180, 3.2],
    [379, 190, 3.2],
    [13, 234, 2.7],
    [91, 244, 4.2, "indigo"],
    [156, 258, 3],
    [238, 233, 2.7],
  ],
  // pairs of indexes into `nodes`
  edges: [
    [0, 1], [1, 2], [2, 3], [3, 4], [5, 7], [6, 9], [6, 10], [8, 9],
    [6, 8], [9, 10], [10, 11],
  ],
  path: { points: [[58, 86], [166, 146], [284, 90], [336, 202], [404, 258]], quietSegments: 1 },
};
