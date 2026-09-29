# AI Trust Graph Website Governance

## Purpose

The website is the public explanation, navigation and visualization layer for AI Trust Graph. It is not a second source of methodology truth.

## Canonical-source rule

The canonical methodology remains the repository artifacts and the authority/dependency model in `METHODOLOGY_MANIFEST.md`.

The website MAY:
- explain canonical concepts in simpler language;
- visualize relationships already defined by the methodology;
- provide navigation into canonical artifacts;
- use synthetic examples that are clearly labelled illustrative;
- present current release-candidate status and review invitations.

The website MUST NOT:
- create new methodology semantics;
- silently rename domains, controls, states, evidence grades, maturity levels or path concepts;
- alter scoring, PEI or evidence-sufficiency logic;
- collapse UNKNOWN, Not Assessed, Not Applicable, Not Tested or Inconclusive;
- imply certification, accreditation, endorsement, legal assurance or guaranteed safety/compliance;
- imply independent validation gates are complete before evidence is recorded through methodology governance;
- turn a non-normative implementation example into a normative requirement.

## Status visibility

Until the methodology governance gates are closed, every major methodology page MUST make it possible for a reader to discover that AI Trust Graph is a **public-release candidate**.

The homepage MUST not imply that v1.0 is a finalized independent standard.

## Product boundary

AI Trust Graph is a public methodology.

ATG Workbench is a separate implementation/prototype layer and MUST be labelled accordingly if referenced.

ExposureGraph remains outside the public methodology. Its implementation, algorithms, connectors, commercial workflows and product architecture MUST NOT be introduced into the methodology website.

## Website-to-source traceability

Every methodology concept page SHOULD link to the relevant canonical artifact.

Website copy that materially summarizes a normative rule SHOULD identify the source artifact and section in the page metadata/content map.

If website wording and a canonical artifact conflict, the canonical artifact wins and the website is corrected.

## Change discipline

Changes limited to:
- layout;
- visual design;
- navigation;
- accessibility;
- performance;
- non-semantic copy editing

may follow the website engineering workflow.

Changes that alter methodology meaning MUST first be approved under Artifact #11 governance and merged into the canonical artifacts before the website reflects them.

## Synthetic examples

Examples used on the website MUST be synthetic and MUST NOT be represented as facts about a real organization, product, provider or customer.

## Security and privacy

The initial site SHOULD be static and collect no sensitive assessment data.

Any future forms or analytics MUST be reviewed separately for privacy, security and retention implications.

## Publication principle

The website may simplify presentation, but it must never simplify methodology semantics.
