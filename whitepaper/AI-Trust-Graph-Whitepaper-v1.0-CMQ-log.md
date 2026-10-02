# AI Trust Graph Whitepaper v1.0 — Canonical Methodology Questions Log

**Purpose:** Record methodology questions surfaced during review without silently changing canonical semantics in the whitepaper.

**Baseline:** methodology bundle 1.0-rc.4, content snapshot 26 September 2026; manifest blob `79e0e15b8b2260487e2e220bb24f4d9f0ccf275a`.

| ID | Question | Owner disposition | Whitepaper treatment |
|---|---|---|---|
| CMQ-1 | Legacy RA-case PEI/maturity validity under rc.4 | OPEN | RA-01 is historical narrative context only; legacy values are not presented as current rc.4 results. |
| CMQ-2 | Seven-step vs canonical nine-step reasoning chain | CLOSED | Artifacts #2/#12 govern; the paper uses the canonical nine-step chain. |
| CMQ-3 | Breakpoint wording differs across artifacts: #1 §4, #1 App. A ("node, edge or boundary … material path"), and #2 §6.6 / #12 | OPEN | The paper uses the Core Conceptual Model/Ontology definition: stop, constrain, detect or contain. |
| CMQ-4 | Trust-definition / non-transitivity authority between #2 and #12 | OPEN | The paper attributes non-transitivity to the Ontology and does not reconcile canon. |
| CMQ-5 | E0 as no-source condition vs explicitly recorded E0 evidence basis | OPEN | The paper states both rules separately and attributes them to the owning artifacts. |
| CMQ-6 | UNKNOWN wording/exclusion-list differences | OPEN | The paper uses the #6/#12 result-state definition and preserves state distinctions. |
| CMQ-7 | Artifact #6 internal state/enum inconsistencies | OPEN | No whitepaper repair attempted. |
| CMQ-8 | PEI sensitivity analysis required before public use (#4 §6.5) | AUTHOR ANALYSIS COMPLETE; GOVERNANCE DECISION PENDING | Author-performed analysis completed 2026-10-02 (`analysis/pei-sensitivity/`); the paper summarizes it in §10.4, states it is not independent review, and states that no governance decision is recorded at the pinned manifest. If the owner records a decision in the manifest before publication, the paper's manifest pin, Publication status and [ATG-M] must be updated to that manifest. |
| CMQ-9 | Probabilistic/stochastic controls | OPEN | Listed as a limitation (§13.5) and a research direction (§14.4); no score mapping invented. |
| CMQ-10 | Runtime-composed agent paths | OPEN | Listed as a limitation (§13.5) and a research direction (§14.3); no new canonical unit of analysis created. |
| CMQ-11 | Stale/conflicting governance records | OPEN — REPO HYGIENE | Separate governance cleanup. |
| CMQ-12 | Doctrine wording variants | OPEN — LOW PRIORITY | The paper does not redefine doctrine. |
| CMQ-13 | Licence for the whitepaper; LICENSE scope does not cover `whitepaper/` | DECIDED: CC BY 4.0 (author, 2026-10-02); legal approval pending | The paper carries its own CC BY 4.0 notice with the trademark reservation; legal approval of the licence/trademark position remains a pending manifest §6 gate. Extending the LICENSE scope is a separate repository change. |
| CMQ-14 | `ROADMAP.md` calls "no overall trust score" permanent; #4 §5.8 allows a future composite under conditions | OPEN | The paper follows #4 §5.8. |
| CMQ-15 | Whether reporting should flag PEI paths whose band changes with a one-point move (band-edge sensitivity found in the analysis) | OPEN | Mentioned as a governance question (§14.6); no reporting rule created. |
| CMQ-16 | Which other weighted formulas in #4 need §6.5 analysis before public use | OPEN | The paper presents only PEI; the analysis covers PEI only. |
| CMQ-17 | Manifesto working definition of Authority (#1 App. A, a list of capacities) differs from #2/#12 ("effective or permitted capacity … to access, influence or change a target") | OPEN | The paper and its glossary use the #2/#12 definition, which governs conceptual semantics under the Manifest. |
| CMQ-18 | Manifesto App. A working vocabulary differs from #2 for Actionability (#2 §5.3), Reachability (#2 §6.1), Residual path (#2 §6.7) and Graph drift (#2 §1.9), and #6 §2.4 uses "Currentness" where #1 uses "Evidence currency" | OPEN | The glossary and body quote the governing artifact; Manifesto-only terms are quoted from #1 App. A. |

## Release discipline

The whitepaper may be published as version 1.0 once: (1) the owner decides whether to record the sensitivity analysis in the manifest before publication (CMQ-8); if so, the paper is re-pinned to that manifest first; (2) the targeted review of the v1.0 changes passes; and (3) the designed PDF's text matches the final Markdown. The methodology itself remains a public-release candidate with the manifest §6 gates pending, as the paper states.
