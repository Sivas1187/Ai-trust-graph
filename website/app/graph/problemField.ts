/**
 * Curated, deterministic coordinates for the Act II ("Why graph reasoning")
 * graph fields — the continuation of the Cover field into the dark act.
 *
 * Taken from the approved refined prototype (the Act II half of the same
 * field the Cover comes from) and frozen here; nothing is generated at build
 * or run time. The desktop path starts at the top edge exactly where the Cover
 * path leaves the Cover (x 1226); on mobile the path re-enters from the right
 * edge after leaving the Cover through it. Both paths end in the dashed
 * "unresolved" motif: the path is illustrative topology, not a validated or
 * exploitable path.
 *
 * Coordinates are in each field's own viewBox. Layout reserves the areas the
 * Act II copy occupies (see `.act2` in globals.css). On desktop the whole
 * composition scales down to 1024px while the margin reference and the
 * "Illustrative topology" note keep their pixel size, so five prototype nodes
 * and five edges near those two labels are omitted: no drawing crosses type at
 * any desktop width. Decorative (aria-hidden); accent colours carry no meaning.
 */
import type { GraphFieldData } from "../components/GraphField";

export const problemFieldDesktop: GraphFieldData = {
  width: 1440,
  height: 880,
  // [x, y, radius, accent?]
  nodes: [
    [220, 16, 4.7],
    [438, 11, 3.4],
    [720, 54, 4.1],
    [925, 58, 3.7, "green"],
    [1019, 147, 3.2],
    [1417, 189, 4.7],
    [905, 281, 3.7],
    [989, 342, 3.1],
    [1061, 443, 3.6],
    [1293, 419, 3.2],
    [1391, 383, 4.1],
    [16, 532, 2.8],
    [1056, 467, 4.7],
    [1433, 486, 4.1],
    [68, 640, 4.8],
    [179, 600, 2.9],
    [506, 630, 3.7],
    [1386, 643, 3],
    [83, 695, 2.8],
    [202, 732, 4.1],
    [435, 708, 3.2, "indigo"],
    [431, 826, 3.2],
    [1032, 856, 4],
    [1163, 809, 4],
    [1312, 839, 2.7],
    [1391, 830, 4.1, "indigo"],
  ],
  // pairs of indexes into `nodes`
  edges: [
    [3, 4], [6, 7], [7, 8], [8, 12], [9, 10], [9, 13], [10, 13], [11, 14],
    [11, 18], [7, 12], [14, 18], [14, 15], [15, 19], [16, 20], [13, 17], [18, 19],
    [20, 21], [22, 23], [23, 24], [24, 25],
  ],
  path: {
    points: [[1226, 0], [1152, 150], [1262, 290], [1032, 406], [802, 450], [592, 422]],
    // dashed hand-off from the last path node to an open (dashed) ring, then a fading tail
    unresolved: { at: [424, 532], tail: [[318, 660], [262, 776]] },
  },
};

export const problemFieldMobile: GraphFieldData = {
  width: 390,
  height: 1120,
  // [x, y, radius, accent?]
  nodes: [
    [82, 31, 2.9],
    [200, 37, 2.8],
    [217, 0, 4.8],
    [292, 26, 2.6],
    [324, 100, 3],
    [343, 213, 3.1],
    [378, 309, 3.6],
    [372, 644, 2.7],
    [345, 711, 3.3, "indigo"],
    [373, 881, 3.1],
    [344, 965, 4.2],
    [330, 999, 3.9, "amber"],
    [335, 1065, 3.2],
  ],
  // pairs of indexes into `nodes`
  edges: [
    [1, 2], [1, 3], [2, 3], [3, 4], [5, 6], [7, 8], [9, 10], [10, 11],
    [11, 12], [10, 12],
  ],
  path: {
    points: [[404, 12], [334, 140], [372, 266], [316, 398], [364, 540], [330, 676]],
    // dashed hand-off from the last path node to an open (dashed) ring, then a fading tail
    unresolved: { at: [352, 796], tail: [[326, 928], [350, 1056]] },
  },
};
