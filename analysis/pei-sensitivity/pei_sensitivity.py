#!/usr/bin/env python3
"""
PEI sensitivity analysis for AI Trust Graph methodology bundle 1.0-rc.4.

Implements the path-formula tests of Scoring Framework (Artifact #4) §6.5
"Sensitivity analysis" against the canonical Path Exposure Index:

    PEI = 4 x Consequence + 3 x Reachability + 3 x Authority
          + 2 x Amplification + 3 x Control Resistance

with the canonical component scales (Artifact #4 §§4.3-4.7), the band
thresholds (§4.10) and the calibration vectors of Artifact #10 Appendix B.1-B.2.

Non-normative. The analysis describes the arithmetic behaviour of the
published formula over its whole determinate input space. It does not change
the formula, weights, bands, overrides or any canonical rule, and it is not
field calibration or inter-assessor validation.

Run:  python3 pei_sensitivity.py            (writes RESULTS.md next to this file)
Pure Python 3, no dependencies; deterministic output.
"""

from __future__ import annotations

import itertools
import os
from collections import Counter

# ---------------------------------------------------------------- canon

COMPONENTS = ["C", "R", "A", "Am", "CR"]
NAMES = {
    "C": "Consequence",
    "R": "Reachability",
    "A": "Authority",
    "Am": "Amplification",
    "CR": "Control Resistance",
}
# Artifact #4 §4.9 weights.
WEIGHTS = {"C": 4, "R": 3, "A": 3, "Am": 2, "CR": 3}
# Artifact #4 §§4.3-4.7 scales for a determinate eligible active path.
# Reachability has no numeric zero state for an eligible active path (§4.4).
SCALES = {
    "C": range(1, 6),
    "R": range(1, 5),
    "A": range(0, 5),
    "Am": range(0, 4),
    "CR": range(0, 5),
}
# Artifact #4 §4.10 bands: lower bound of Moderate, High, Critical.
CUTS = (20, 35, 50)
BAND_NAMES = ["Low", "Moderate", "High", "Critical"]

# Artifact #10 Appendix B.1 / B.2 calibration vectors (determinate ones).
CALIBRATION = {
    "P-CAL-01": ((1, 1, 0, 0, 0), 7, "Low"),
    "P-CAL-02": ((1, 1, 1, 0, 3), 19, "Low"),
    "P-CAL-03": ((1, 1, 1, 2, 2), 20, "Moderate"),
    "P-CAL-04": ((1, 2, 3, 3, 3), 34, "Moderate"),
    "P-CAL-05": ((1, 2, 3, 2, 4), 35, "High"),
    "P-CAL-06": ((3, 3, 4, 2, 4), 49, "High"),
    "P-CAL-07": ((2, 4, 4, 3, 4), 50, "Critical"),
    "P-CAL-08": ((5, 4, 4, 3, 4), 62, "Critical"),
    "P-CAL-11 current": ((3, 3, 3, 3, 3), 45, "High"),
    "P-CAL-11 residual": ((3, 3, 1, 1, 0), 26, "Moderate"),
    "P-CAL-12 primary": ((3, 2, 0, 0, 0), 18, "Low"),
    "P-CAL-12 alternate": ((3, 2, 3, 1, 3), 38, "High"),
}
# P-CAL-09: C=4, R=UNKNOWN, A=3, Am=2, CR=2 -> no point PEI; range 38-47.
PCAL09 = {"C": 4, "A": 3, "Am": 2, "CR": 2}

# ---------------------------------------------------------------- helpers


def pei(v, w=WEIGHTS):
    return sum(w[c] * x for c, x in zip(COMPONENTS, v))


def band(score, cuts=CUTS):
    b = 0
    for cut in cuts:
        if score >= cut:
            b += 1
    return b


UNIVERSE = list(itertools.product(*(SCALES[c] for c in COMPONENTS)))
BASE = [pei(v) for v in UNIVERSE]
BASE_BAND = [band(s) for s in BASE]
N = len(UNIVERSE)


def pct(x, n):
    return f"{100.0 * x / n:.1f}%"


def kendall_tau_b(x, y):
    """Kendall tau-b over paired lists (O(n^2), exact, handles ties)."""
    n = len(x)
    conc = disc = tx = ty = 0
    for i in range(n):
        xi, yi = x[i], y[i]
        for j in range(i + 1, n):
            dx = xi - x[j]
            dy = yi - y[j]
            if dx == 0 and dy == 0:
                continue
            if dx == 0:
                tx += 1
            elif dy == 0:
                ty += 1
            elif (dx > 0) == (dy > 0):
                conc += 1
            else:
                disc += 1
    denom = ((conc + disc + tx) * (conc + disc + ty)) ** 0.5
    return (conc - disc) / denom if denom else 1.0


def reversals(new_scores):
    """Pairs ordered by baseline band whose new PEI order inverts.

    'Cross-band reversal': baseline bands differ by >= 1 and the new PEI of
    the higher-band path is strictly lower than that of the lower-band path.
    'Major reversal': same, with baseline bands differing by >= 2.
    """
    # Group by baseline band; compare min/max per band to stay O(n log n)-ish.
    cross = major = 0
    by_band = {b: [] for b in range(4)}
    for s_new, b in zip(new_scores, BASE_BAND):
        by_band[b].append(s_new)
    for b in by_band:
        by_band[b].sort()
    # Count pairs (hi in band bh, lo in band bl, bh > bl) with new(hi) < new(lo).
    import bisect

    for bh in range(4):
        for bl in range(bh):
            lo_sorted = by_band[bl]
            cnt = 0
            for s in by_band[bh]:
                # number of lo with new score > s
                cnt += len(lo_sorted) - bisect.bisect_right(lo_sorted, s)
            cross += cnt
            if bh - bl >= 2:
                major += cnt
    return cross, major


def scenario(weights=WEIGHTS, cuts=CUTS):
    scores = [pei(v, weights) for v in UNIVERSE]
    bands = [band(s, cuts) for s in scores]
    changed = sum(1 for a, b in zip(BASE_BAND, bands) if a != b)
    jump = max(abs(a - b) for a, b in zip(BASE_BAND, bands))
    cross, major = reversals(scores)
    return scores, bands, changed, jump, cross, major


def inverted_pairs(new_scores):
    """All vector pairs whose strict baseline order is strictly inverted."""
    inv = 0
    n = len(new_scores)
    for i in range(n):
        bi, ni = BASE[i], new_scores[i]
        for j in range(i + 1, n):
            db = bi - BASE[j]
            dn = ni - new_scores[j]
            if (db > 0 and dn < 0) or (db < 0 and dn > 0):
                inv += 1
    return inv


def max_relative_shift(weights):
    """Largest change in the PEI difference of any pair under new weights.

    The difference between two vectors changes by sum_c (w'_c - w_c)(x_c - y_c),
    so its maximum is sum_c |w'_c - w_c| * (scale span of c).
    """
    return sum(abs(weights[c] - WEIGHTS[c]) * (max(SCALES[c]) - min(SCALES[c])) for c in COMPONENTS)


# ---------------------------------------------------------------- tests

out = []
w = out.append

w("# PEI sensitivity analysis: results")
w("")
w("Generated by `pei_sensitivity.py` (deterministic). Methodology bundle 1.0-rc.4.")
w("Non-normative analysis of the published formula; it changes no canonical rule.")
w("")
w("## 0. Input space")
w("")
w(f"Every determinate eligible active vector on the canonical scales: {N} vectors "
  "(Consequence 1-5, Reachability 1-4, Authority 0-4, Amplification 0-3, Control Resistance 0-4).")
w("The enumeration is uniform over the scales. It describes the geometry of the formula, "
  "not the distribution of real paths, which is unknown until field calibration.")
w("")
dist = Counter(BASE_BAND)
w("| Band | PEI range | Vectors | Share |")
w("| --- | --- | ---: | ---: |")
ranges = ["7-19", "20-34", "35-49", "50-62"]
for b in range(4):
    w(f"| {BAND_NAMES[b]} | {ranges[b]} | {dist[b]} | {pct(dist[b], N)} |")
w(f"| Total | 7-62 | {N} | 100.0% |")
w("")
assert min(BASE) == 7 and max(BASE) == 62, "range check failed"

# Calibration recomputation.
w("## 1. Calibration vectors (Artifact #10 B.1-B.2) recomputed")
w("")
w("| Vector | C/R/A/Am/CR | Expected | Recomputed | Band | Match |")
w("| --- | --- | ---: | ---: | --- | --- |")
all_ok = True
for name, (v, exp, expband) in CALIBRATION.items():
    s = pei(v)
    ok = s == exp and BAND_NAMES[band(s)] == expband
    all_ok &= ok
    w(f"| {name} | {'/'.join(map(str, v))} | {exp} | {s} | {BAND_NAMES[band(s)]} | {'yes' if ok else 'NO'} |")
lo = 4 * PCAL09["C"] + 3 * 1 + 3 * PCAL09["A"] + 2 * PCAL09["Am"] + 3 * PCAL09["CR"]
hi = lo + 3 * 3
w(f"| P-CAL-09 | 4/UNKNOWN/3/2/2 | range 38-47 | range {lo}-{hi} | no point PEI | {'yes' if (lo, hi) == (38, 47) else 'NO'} |")
w("")
w(f"All calibration vectors recompute exactly: **{'yes' if all_ok and (lo, hi) == (38, 47) else 'NO'}**.")
w("")

# Test 1: one-point component change.
w("## 2. Test: one-point component change (§6.5 'Does the band change disproportionately?')")
w("")
w("Each vector, each component moved one scale point up or down where the scale allows. "
  "A one-point move changes PEI by exactly that component's weight.")
w("")
w("| Component (weight) | One-point moves | Moves that change band | Share | Largest band jump |")
w("| --- | ---: | ---: | ---: | ---: |")
tot_moves = tot_flip = 0
max_jump_t1 = 0
flip_vectors = set()
for ci, c in enumerate(COMPONENTS):
    moves = flips = 0
    jmax = 0
    for vi, v in enumerate(UNIVERSE):
        for d in (-1, 1):
            nv = list(v)
            nv[ci] += d
            if nv[ci] not in SCALES[c]:
                continue
            moves += 1
            nb = band(pei(nv))
            j = abs(nb - BASE_BAND[vi])
            if j:
                flips += 1
                flip_vectors.add(vi)
            jmax = max(jmax, j)
    tot_moves += moves
    tot_flip += flips
    max_jump_t1 = max(max_jump_t1, jmax)
    w(f"| {NAMES[c]} ({WEIGHTS[c]}) | {moves} | {flips} | {pct(flips, moves)} | {jmax} |")
w(f"| All | {tot_moves} | {tot_flip} | {pct(tot_flip, tot_moves)} | {max_jump_t1} |")
w("")
w(f"Vectors for which at least one single one-point move changes the band (boundary-adjacent): "
  f"**{len(flip_vectors)} of {N} ({pct(len(flip_vectors), N)})**.")
w("")
# Boundary distance.
dist_to_cut = Counter()
for s in BASE:
    # Smallest PEI change (up or down) that moves the vector into another band.
    d = min(s - c + 1 if s >= c else c - s for c in CUTS)
    dist_to_cut[min(d, 6)] += 1
w("Smallest change in PEI points that would move each vector into another band:")
w("")
w("| PEI points to the nearest band change | Vectors | Share |")
w("| --- | ---: | ---: |")
for k in range(1, 7):
    label = f"{k}" if k < 6 else "6 or more"
    w(f"| {label} | {dist_to_cut[k]} | {pct(dist_to_cut[k], N)} |")
w("")
w("For comparison, the smallest one-point component move changes PEI by 2 (Amplification) and the largest by 4 (Consequence). "
  "Skipping a band needs a change of at least 16 points (the narrowest band is 13 points wide), and a one-point change "
  "in every component at once changes PEI by at most 15, so no such change can move a path by more than one band. "
  "That bound is arithmetic, not empirical.")
w("")

# Worst-case reviewer variance: every component off by up to one point.
w("Worst case for one-point assessor variance (the Artifact #10 B.4 tolerance): every component "
  "may differ by up to one point in either direction at the same time (up to 3^5 = 243 variants per vector).")
w("")
jump_hist = Counter()
any_change = 0
for vi, v in enumerate(UNIVERSE):
    bset = set()
    for deltas in itertools.product((-1, 0, 1), repeat=5):
        nv = [x + d for x, d in zip(v, deltas)]
        if all(nv[i] in SCALES[c] for i, c in enumerate(COMPONENTS)):
            bset.add(band(pei(nv)))
    spread = max(bset) - min(bset)
    jump_hist[max(abs(b - BASE_BAND[vi]) for b in bset)] += 1
    any_change += 1 if spread else 0
w("| Largest band change reachable within one point per component | Vectors | Share |")
w("| --- | ---: | ---: |")
for k in sorted(jump_hist):
    w(f"| {k} | {jump_hist[k]} | {pct(jump_hist[k], N)} |")
w("")

# Test 2: weight alternatives.
w("## 3. Test: weight alternatives (§6.5 'Do priorities depend primarily on one chosen weight?')")
w("")
w("Band thresholds are held at the canonical 20 / 35 / 50 so that each row shows the effect of the "
  "weight change alone. 'Cross-band reversal': two paths in different baseline bands whose PEI order "
  "inverts. 'Major reversal': the same for paths two or more baseline bands apart. Kendall tau-b compares "
  "the full ordering of all vectors with the baseline ordering (1.000 = identical).")
w("")
total_cross_pairs = 0
for bh in range(4):
    for bl in range(bh):
        total_cross_pairs += dist[bh] * dist[bl]
total_major_pairs = 0
for bh in range(4):
    for bl in range(bh - 1):
        total_major_pairs += dist[bh] * dist[bl]
min_gap_two_bands = min(abs(BASE[i] - BASE[j]) for i in range(N) for j in range(N) if abs(BASE_BAND[i] - BASE_BAND[j]) >= 2)
total_pairs = N * (N - 1) // 2
w(f"Baseline: {total_cross_pairs:,} cross-band pairs, of which {total_major_pairs:,} are two or more bands apart. "
  f"Two paths two or more bands apart differ by at least {min_gap_two_bands} PEI points, so a weight alternative can "
  f"reverse such a pair only if it can shift a pair's PEI difference by more than {min_gap_two_bands} points. The "
  "'largest relative shift' column gives that bound for each alternative: where it is below the gap, a major reversal "
  "is arithmetically impossible, so a zero in the 'Major reversals' column is a property of the formula, not an empirical finding.")
w("")
w("| Weight alternative | Band changes | Largest band jump | Pairs whose order inverts (all pairs) | Cross-band reversals | Major reversals | Largest relative shift (points) | Kendall tau-b |")
w("| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |")
alts = []
for c in COMPONENTS:
    for d in (-1, 1):
        nw = dict(WEIGHTS)
        nw[c] += d
        alts.append((f"{NAMES[c]} {WEIGHTS[c]}->{nw[c]}", nw))
alts.append(("All equal (3,3,3,3,3)", {c: 3 for c in COMPONENTS}))
for c in COMPONENTS:
    nw = dict(WEIGHTS)
    nw[c] = 0
    alts.append((f"Drop {NAMES[c]} (weight 0)", nw))
summary_weights = []
for label, nw in alts:
    scores, bands, changed, jump, cross, major = scenario(nw)
    tau = kendall_tau_b(BASE, scores)
    inv = inverted_pairs(scores)
    shift = max_relative_shift(nw)
    summary_weights.append((label, changed, jump, cross, major, tau))
    w(f"| {label} | {changed} ({pct(changed, N)}) | {jump} | {inv:,} ({pct(inv, total_pairs)}) | "
      f"{cross:,} ({pct(cross, total_cross_pairs)}) | {major:,} | {shift} | {tau:.3f} |")
w("")
w("'Drop' rows are diagnostic only: they show how much each component carries, not a reasonable alternative. "
  "Band thresholds stay at 20 / 35 / 50 although the PEI range shifts under some alternatives (for example 6-60 with "
  "equal weights), so 'Band changes' mixes the effect of reweighting with that range shift.")
w("")

# Variance share.
w("Share of PEI variance carried by each weighted component over the uniform input space "
  "(components are independent in the enumeration, so shares add to 100%):")
w("")


def var(scale):
    xs = list(scale)
    m = sum(xs) / len(xs)
    return sum((x - m) ** 2 for x in xs) / len(xs)


contrib = {c: WEIGHTS[c] ** 2 * var(SCALES[c]) for c in COMPONENTS}
tv = sum(contrib.values())
w("| Component | Weight | Scale | Variance share |")
w("| --- | ---: | --- | ---: |")
for c in COMPONENTS:
    s = SCALES[c]
    w(f"| {NAMES[c]} | {WEIGHTS[c]} | {s.start}-{s.stop - 1} | {100 * contrib[c] / tv:.1f}% |")
w("")

# Test 3: thresholds.
w("## 4. Test: threshold alternatives")
w("")
w("Each band edge moved by one or two points, singly and all together, with canonical weights.")
w("")
w("| Threshold alternative (Moderate / High / Critical lower bounds) | Band changes | Share |")
w("| --- | ---: | ---: |")
th_alts = []
for i in range(3):
    for d in (-2, -1, 1, 2):
        cuts = list(CUTS)
        cuts[i] += d
        th_alts.append(tuple(cuts))
for d in (-2, -1, 1, 2):
    th_alts.append(tuple(c + d for c in CUTS))
for cuts in th_alts:
    changed = sum(1 for s, b in zip(BASE, BASE_BAND) if band(s, cuts) != b)
    w(f"| {cuts[0]} / {cuts[1]} / {cuts[2]} | {changed} | {pct(changed, N)} |")
w("")
w("Threshold moves change band membership but never the PEI order, so they cause no ranking reversals.")
w("")

# Test 4: evidence downgrade.
w("## 5. Test: evidence downgrade (§6.5 'Does confidence change without pretending consequence changed?')")
w("")
w("Structural checks on the published rules, plus the width of the provisional range when one "
  "component becomes UNKNOWN (Artifact #4 §§4.4, 4.8; Artifact #10 P-CAL-09).")
w("")
w("- Confidence is not a PEI input: the formula has five components and no confidence term (§4.9); "
  "low confidence keeps the band provisional (§4.8). A confidence downgrade therefore cannot change Consequence. "
  "Some component descriptors are themselves defined by evidence (for example Control Resistance 0, 'Validated block', "
  "and Reachability 3, 'Short validated route'), so weaker evidence can legitimately change those ratings; that is a "
  "rescoring of the evidenced scenario, not a change in consequence.")
w("- An UNKNOWN component removes the point PEI; a bounded provisional range MAY be shown (§§4.4, 4.8).")
w("")
w("| Component set to UNKNOWN | Provisional range width (points) | Combinations of the other four components whose range spans more than one band | Share |")
w("| --- | ---: | ---: | ---: |")
for ci, c in enumerate(COMPONENTS):
    width = WEIGHTS[c] * (max(SCALES[c]) - min(SCALES[c]))
    seen = set()
    multi = 0
    total = 0
    for v in UNIVERSE:
        key = tuple(x for i, x in enumerate(v) if i != ci)
        if key in seen:
            continue
        seen.add(key)
        total += 1
        bs = set()
        for x in SCALES[c]:
            nv = list(v)
            nv[ci] = x
            bs.add(band(pei(nv)))
        multi += 1 if len(bs) > 1 else 0
    w(f"| {NAMES[c]} | {width} | {multi} of {total} | {pct(multi, total)} |")
w("")

# Not applicable / not desk-testable.
w("## 6. §6.5 tests outside a desk analysis of the path formula")
w("")
w("| §6.5 test | Status for PEI |")
w("| --- | --- |")
w("| Coverage expansion | Applies to aggregates (coverage, attainment), not to the path formula. Not tested here. |")
w("| Gate activation | §6.5 asks whether cap logic prevents average masking, which concerns aggregates and maturity. The nearest "
  "path-formula analogue (an interpretation, not a §6.5 definition) is that critical overrides set a minimum band and take "
  "precedence over the arithmetic (§§4.10-4.11), so no PEI value can lower an override floor. Not tested numerically here. |")
w("| Reviewer variation | Requires independent assessors (Artifact #10 B.4). Section 2 gives only the arithmetic "
  "bound for one-point variance; the inter-assessor study remains a pending external gate. |")
w("")

path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "RESULTS.md")
with open(path, "w", encoding="utf-8") as fh:
    fh.write("\n".join(out) + "\n")
print(f"wrote {path}")
