[← Back to methodology index](README.md)

# Contributing to AI Trust Graph

Thank you for your interest in improving AI Trust Graph. This is a **constitutional methodology**, not a wiki: some parts of it are easy to improve with a normal pull request, and some parts require the formal change-control process defined in [Artifact #11 — Governance & Certification Model](docs/11-governance-and-certification-model.md) before anything gets merged. This guide tells you which is which.

## Before you propose anything

Read the [Manifesto](docs/01-manifesto.md), the [Core Conceptual Model](docs/02-core-conceptual-model.md), and the [Ontology Specification](docs/12-ontology-specification.md) first — in that order, despite the Ontology Specification being filed as Artifact #12 (see the README's "Reading order" note). Most well-intentioned proposals that get rejected are rejected because they re-invent a distinction the methodology already makes deliberately — for example, re-introducing a single overall trust score, collapsing `UNKNOWN` into a numeric default, treating a topological graph connection as proof of exploitability, or proposing a new canonical entity type or relationship predicate that the Ontology Specification's Appendix A/C registries already define under a different name. Section 0 of most artifacts states the relevant invariants explicitly; check there first.

Also check [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md). Several open findings there already describe known inconsistencies the maintainers are aware of and welcome help resolving — that's a good place to start if you want to contribute but don't have your own idea yet.

## What kind of change are you proposing?

Per Artifact #11 §2.2, every artifact falls into one of these classes, and the class determines who has to approve a change to it:

| Class | Examples in this repo | Approval needed |
| --- | --- | --- |
| Constitutional | Governance & Certification Model | Highest threshold: Governance Council plus Technical Architecture Board |
| Semantic | Core Conceptual Model, Ontology Specification | Technical Architecture Board plus Council |
| Normative | Maturity Model, Scoring Framework, Master Control Library, Evidence Model, Assessment Methodology, Reporting Standard | Technical boards plus Council |
| Operational | Assessor Handbook | Scheme owner plus QA |
| Illustrative | Reference Assessment Repository | Maintainer plus independent calibration review |
| Machine-readable | (future schemas, test vectors) | Technical board plus conformance tests |
| Extension | (future sector/technology extensions) | Extension panel plus compatibility review |

In today's pre-governance-launch reality, "Governance Council" and "Technical Architecture Board" are not yet standing bodies with appointed members — until they are, the methodology author reviews all proposed changes directly, applying the same rigor those bodies are specified to apply. This will change as the governance model in Artifact #11 becomes operational; see [ROADMAP.md](ROADMAP.md).

## The kinds of contributions welcome right now

**Always welcome, low-ceremony:**
- Typo fixes, broken links, formatting corrections, and other patch-level changes that don't touch meaning (Artifact #11 §2.3, "Patch" tier).
- New synthetic reference cases for the Reference Assessment Repository, provided they follow the existing ten-section case anatomy (§0.4 of that artifact) and are clearly fictional.
- Tooling that helps *validate* the methodology (conformance test vectors, linting for the canonical result states, schema drafts) without changing the methodology itself.

**Welcome, but goes through review:**
- Clarifications to existing wording that don't change the underlying rule.
- New illustrative material — examples, diagrams, worked calculations — that demonstrates existing rules rather than introducing new ones.
- Proposals to resolve an open item in [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md).

**Requires a formal change proposal (Artifact #11 §2.4) before any pull request:**
- Any change to a canonical term, control ID, evidence grade, maturity level, result state, or scoring formula.
- Any new control, domain, or path state.
- Any change to what a report is permitted to claim (Reporting Standard §9, the anti-pattern list).
- Anything that touches the ExposureGraph product boundary — see below.

A formal change proposal states, per §2.4: the problem, supporting evidence, who's affected, alternatives considered, dependencies, a migration plan, risks, security implications, and the requested release class (major/minor/patch per §2.3). Open an issue using this structure before opening a pull request for anything in this category — a PR that changes normative content without a preceding proposal will be closed, not merged, however good the change is.

## The one hard boundary: ExposureGraph

**ExposureGraph is a separate, future commercial product and must never become part of this public methodology.** Do not submit:
- Any ExposureGraph implementation detail, architecture, or proprietary algorithm.
- Any content that only makes sense in the context of a specific commercial tool.
- Vendor- or tool-specific requirements dressed up as methodology (the methodology must stay tool-independent and vendor-neutral).

If you're not sure whether something crosses this line, ask in your issue before writing the content.

## Style for methodology text

- Match the existing register: precise, declarative, evidence-oriented. Avoid marketing language ("best-in-class," "seamless," "cutting-edge").
- Use the canonical result states (`UNKNOWN`, `Not Assessed`, `Not Applicable`, `Not Tested`, `Inconclusive`, `Provisional`, `Final within scope`) exactly as defined — never invent a synonym or a numeric substitute for them.
- New controls follow the `ATG-<DOMAIN>-NNN` numbering scheme and the nine-row assessor-lens template used throughout the Assessor Handbook.
- Tables use GitHub-flavored Markdown; keep column headers bolded as `**Header**` to match the existing corpus.

## Reporting a security issue

There is currently no `SECURITY.md` in this repository — see [REVIEW_FINDINGS.md, R-08](REVIEW_FINDINGS.md#r-08--governance-required-repository-files-not-present-blocking). Until one exists, do not open a public issue for anything you believe is a genuine vulnerability disclosure concern (as opposed to a methodology gap) — this applies to security issues in any future tooling built alongside the methodology, not to the methodology's subject matter itself, which is inherently about discussing AI security weaknesses in the abstract.

## Code of conduct

All contributions are governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
