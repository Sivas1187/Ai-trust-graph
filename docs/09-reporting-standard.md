[← Back to methodology index](../README.md)

# AI Trust Graph — Reporting Standard

*Version 1.1.0 | Comparable, evidence-linked and decision-ready reporting without unsupported precision*

> **PURPOSE** Define the mandatory report package, claim rules, presentation conventions, traceability, visual standards and release controls for every AI Trust Graph assessment.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Depends on | Artifacts #1-#8, especially Assessment Methodology v1.1.0 and Assessor Handbook v1.0 |
| Report package | Executive report; integrated assessment report; technical annex; evidence annex; machine-readable export |
| Canonical views | Scope; coverage; six-domain maturity; control scorecards; paths; findings; decisions; roadmap; limitations |
| Product boundary | ExposureGraph implementation, proprietary dashboards, algorithms, connectors and commercial templates excluded |

FOUNDATION

# 0.1  Authority and publication boundary

This standard governs how AI Trust Graph assessment results are communicated. It does not certify compliance, prove safety, create legal opinion or authorize disclosure of confidential evidence.

> **PUBLICATION SAFEGUARD** Complete employer, confidentiality, copyright, privacy, legal, licence, trademark and independent review before public release.

FOUNDATION

# 0.2  Artifact position and precedence

Reporting consumes approved results from the assessment run. It may explain but cannot redefine evidence grades, controls, path states, scoring formulas, maturity levels or critical gates.

> **CANONICAL ARTIFACT MAP** Repository-wide authority, dependency order, bundle versions and content pins are governed by [METHODOLOGY_MANIFEST.md](../METHODOLOGY_MANIFEST.md).

FOUNDATION

# 0.3  Reporting doctrine

Every report makes scope, coverage, evidence, uncertainty, critical gates and decision status visible at the point where a reader could otherwise overgeneralize.

FOUNDATION

# 0.4  Claim invariants

Canonical reporting invariants protect readers from false precision, scope inflation and hidden uncertainty.

| **ID** | **Invariant** |
| --- | --- |
| RPT-01 | No report claim exceeds the assessed scope, evidence period or confidence. |
| RPT-02 | Coverage and UNKNOWNs appear beside attainment and maturity. |
| RPT-03 | Critical gates appear before or with aggregate results. |
| RPT-04 | Maturity is not inferred from an average control score. |
| RPT-05 | Path topology is not labelled exploitable without validated conditions. |
| RPT-06 | Management acceptance does not change technical findings. |
| RPT-07 | A framework mapping is not reported as legal compliance. |
| RPT-08 | Point-in-time work is not described as continuous assurance. |
| RPT-09 | Sensitive evidence is protected without hiding material limitations. |
| RPT-10 | Superseded reports remain traceable and are not silently overwritten. |

FOUNDATION

# 0.5  Audience architecture

The package serves board, executive, governance, architecture, operations, assessor and regulator-facing needs through audience-specific views with a shared evidence base.

| **Audience** | **Primary decision need** |
| --- | --- |
| Board | Material exposure, accountability, risk appetite and remediation trajectory. |
| Executive | Six-domain profile, gates, major findings, decisions and roadmap. |
| Governance | Use-case, obligation, exception, maturity and assurance oversight. |
| Architecture and security | Graph, authority, paths, controls, evidence and technical actions. |
| Operations | Detection, containment, recovery, ownership and validation actions. |
| Assessor and reviewer | Full traceability, procedures, calculations and evidence limitations. |

FOUNDATION

# 0.6  Report package architecture

The minimum package includes an executive report, integrated report, technical annex, evidence annex and structured export where authorized.

| **Package component** | **Purpose** |
| --- | --- |
| Executive report | Decision-oriented summary with scope, gates and priorities. |
| Integrated report | Complete assessment narrative and canonical results. |
| Technical annex | Graph, controls, paths, tests and architecture detail. |
| Evidence annex | Evidence register extract, grades, coverage and conflicts. |
| Structured export | Machine-readable records using approved schemas. |

FOUNDATION

# 0.7  Assessment identity and versioning

Every report carries assessment ID, scope ID, run ID, artifact versions, graph snapshot, evidence date, review state and supersession link.

FOUNDATION

# 0.8  Result states and UNKNOWN

UNKNOWN remains visible and non-numeric. Not Assessed, Not Applicable, Not Tested, Inconclusive, Provisional and Final within scope remain distinct.

| **State** | **Reporting rule** |
| --- | --- |
| UNKNOWN | Show reason, materiality, owner and next evidence action. |
| Not Assessed | Show scope impact and affected claims. |
| Not Applicable | Show approved rationale and reviewer. |
| Not Tested | Do not claim operating effectiveness. |
| Inconclusive | Explain activity and unresolved limitation. |
| Provisional | Watermark or label until required review completes. |
| Final within scope | State exact scope and approval date. |

FOUNDATION

# 0.9  Confidentiality and distribution

Reports are classified, minimized, access-controlled and distributed by audience need. Sensitive evidence references may be abstracted without removing the limitation.

FOUNDATION

# 0.10  Accessibility and readability

Reports use semantic headings, readable tables, sufficient contrast, descriptive labels, alternative text for meaningful visuals and plain-language explanations.

FOUNDATION

# 0.11  No hidden methodology

A reader can understand the scope, method, formula version, evidence basis and limitations without access to proprietary tooling.

FOUNDATION

# 0.12  Release states

Draft, fact-validation, quality-review, decision-review, final within scope, superseded and withdrawn are controlled report states.

| **State** | **Permitted use** |
| --- | --- |
| Draft | Internal working review only. |
| Fact validation | Owner review of factual accuracy, not score negotiation. |
| Quality review | Independent methodology and consistency challenge. |
| Decision review | Authorized disposition and conditional approval. |
| Final within scope | Approved release to named audience. |
| Superseded | Historical record linked to current report. |
| Withdrawn | Use prohibited; reason and replacement stated. |

CANONICAL REPORT STRUCTURE

# 1.1  Cover and classification

Display title, assessment unit, report state, classification, date, version and approved audience.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why cover and classification is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.2  Document control

List report ID, run ID, scope ID, artifact versions, authors, reviewers, approvers, distributions and supersession.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why document control is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.3  Executive conclusion

State the decision-relevant conclusion, six-domain profile, critical gates, confidence and immediate decisions without unsupported adjectives.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why executive conclusion is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.4  Assessment purpose

Explain the question, intended use, audience and prohibited uses.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why assessment purpose is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.5  Scope and boundaries

Describe unit, population, environments, geography, period, evidence window, interfaces and exclusions.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why scope and boundaries is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.6  Method and limitations

Identify assessment type, applicable methodology versions, procedures, sampling and known limitations.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why method and limitations is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.7  Estate and AIBOM view

Report asset, ownership and composition coverage, blind spots, stale records, shadow AI and major dependencies.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why estate and aibom view is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.8  Trust and boundary view

Summarize material relationships, identity routes, providers, trust bases, boundaries and graph-quality limitations.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why trust and boundary view is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.9  Authority view

Show acting identities, consequential actions, delegation, approvals, amplification, limits and revocation.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why authority view is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.10  Control assessment view

Present applicability, design, implementation, operating state, evidence, confidence, criticality and findings.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why control assessment view is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.11  Path portfolio view

Present eligible path population, states, evidence, confidence, bands, breakpoints and residual routes.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why path portfolio view is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.12  Maturity profile

Report six-domain vector, capability variation, gates, evidence confidence, current and target levels.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why maturity profile is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.13  Scorecards and coverage

Present control attainment, verified-control rate, evidence coverage, UNKNOWN, Not Tested and Inconclusive with denominators.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why scorecards and coverage is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.14  Findings and decisions

Separate technical results from management dispositions, exceptions, conditions and expiry.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why findings and decisions is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.15  Roadmap

Sequence prerequisite and critical-gate closure with owners, target outcomes, evidence deliverables, dependencies and validation.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why roadmap is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |

CANONICAL REPORT STRUCTURE

# 1.16  Limitations and sign-off

State excluded claims, unresolved uncertainty, review status, approvals and next reassessment trigger.

| **Required field** | **Reporting requirement** |
| --- | --- |
| Purpose | Explain why limitations and sign-off is included and which decision it supports. |
| Source | Reference approved assessment records, not recollection. |
| Scope | Bind statements to population, environment and period. |
| Uncertainty | Show confidence, UNKNOWNs and material limitations. |
| Traceability | Provide IDs or annex references. |
| Review | Record factual, quality and decision approval as applicable. |
EXECUTIVE REPORTING

# 2.1  Board summary

Lead with material exposure, accountable decisions, critical gates, trend and remediation confidence rather than technical inventory.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for board summary. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.2  Executive one-page view

Show six-domain maturity, top critical paths, critical-control status, coverage, major decisions and roadmap milestones.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for executive one-page view. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.3  Decision request

State exact decision, authority, alternatives, evidence, uncertainty, conditions and consequence of delay.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for decision request. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.4  Critical-gate disclosure

Present every open universal or domain gate before aggregate scores and explain the cap or invalidation.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for critical-gate disclosure. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.5  Coverage disclosure

Pair every attainment or verified-rate result with denominator, determinate coverage, UNKNOWN and Not Tested.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for coverage disclosure. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.6  Trend disclosure

Explain scope, library, formula or evidence changes that affect comparability before presenting movement.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for trend disclosure. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.7  Target-state narrative

Explain why the target is proportionate; do not assume every domain must reach M5.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for target-state narrative. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.8  Roadmap confidence

Differentiate approved, funded, underway, implemented and validated remediation states.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for roadmap confidence. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.9  Residual uncertainty

Summarize material facts that remain UNKNOWN and decisions that cannot yet be supported.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for residual uncertainty. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

EXECUTIVE REPORTING

# 2.10  Executive prohibited shortcuts

Do not use one trustworthiness number, traffic-light-only reporting, hidden exclusions, unlabeled provisional results or compliance claims from mappings.

| **Executive element** | **Standard** |
| --- | --- |
| Headline | Use neutral decision language for executive prohibited shortcuts. |
| Metric | Show numerator, denominator and period. |
| Gate | Display material cap or blocker. |
| Confidence | State High, Medium, Low or Not rated where applicable. |
| Action | Name owner, authority, evidence and due decision. |
| Caveat | Place limitation beside the claim, not only in an appendix. |

CANONICAL RESULT PRESENTATION

# 3.1  Scope coverage

Report assessed, determinate and excluded populations using named authoritative denominators.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for scope coverage. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.2  Discovery coverage

Report source coverage, asset attribution, ownership, AIBOM reconciliation, blind spots and freshness.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for discovery coverage. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.3  Control assurance

Show component state, supported 0-5 score, evidence grade, confidence, test state, criticality and applicable gate.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for control assurance. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.4  Domain Control Attainment

Show the published formula, the finalized numeric control population used as the denominator (Scoring Framework §3.4) and determinate coverage beside the percentage.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for domain control attainment. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.5  Verified-Control Rate

Show applicable denominator and controls with finalized final supported overall 4 or 5, whose operating effectiveness is supported by E5-quality evidence (Scoring Framework §3.5).

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for verified-control rate. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.6  UNKNOWN and Inconclusive

Show count, rate, affected critical controls and potential decision impact without assigning failure score.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for unknown and inconclusive. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.7  Technical-evidence coverage

Show applicable controls qualifying under Scoring Framework §2.5 and clearly state the population; merely linked E4-E5 evidence and design-only evidence do not qualify.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for technical-evidence coverage. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.8  Critical-control view

Separate applicable, verified, failed, UNKNOWN, Not Tested and gate-affected critical or systemic controls.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for critical-control view. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.9  Maturity vector

Present D1 through D6 as M1-M5 or non-level state with confidence and gates.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for maturity vector. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.10  Capability distribution

Show each capability level and emerging practice without averaging to determine the domain level.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for capability distribution. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.11  Path state

Label Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated precisely.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for path state. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.12  Path Exposure Index

Show component values, formula version, band, override, evidence and confidence; never label PEI probability.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for path exposure index. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.13  Critical path override

State triggering condition, minimum band, reviewer and decision response.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for critical path override. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.14  Residual path

Show current and validated post-control condition; proposed remediation does not lower current exposure.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for residual path. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.15  Evidence grade

Report E0-E5 as support strength, not control quality or severity.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for evidence grade. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.16  Confidence

Report High, Medium, Low or Not rated with rationale specific to the conclusion.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for confidence. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.17  Exception status

Show scope, rationale, approver, residual exposure, compensating control, expiry and retest.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for exception status. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |

CANONICAL RESULT PRESENTATION

# 3.18  Finding status

Use Open, In treatment, Implemented pending validation, Closed validated, Accepted with expiry or Withdrawn with rationale.

| **Presentation field** | **Required content** |
| --- | --- |
| Label | Use the canonical name for finding status. |
| Definition | State what the measure does and does not mean. |
| Denominator | Show applicable population where numeric. |
| Evidence | Reference supporting records and period. |
| Confidence | State limitations and review state. |
| Gate | Show any cap, invalidation or override. |
| Comparison | Use only like-for-like scope and version. |
DOMAIN REPORTING

# 4.1  Discovery and AIBOM: Estate scope and sources

This view reports estate scope and sources for the Discovery and AIBOM domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable discovery and aibom population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-DIS controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.2  Discovery and AIBOM: Inventory, ownership and AIBOM

This view reports inventory, ownership and AIBOM for the Discovery and AIBOM domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable discovery and aibom population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-DIS controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.3  Discovery and AIBOM: Blind spots, shadow AI and assurance

This view reports blind spots, shadow AI and assurance for the Discovery and AIBOM domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable discovery and aibom population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-DIS controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.4  Trust and Privilege Paths: Trust relationships and boundaries

This view reports trust relationships and boundaries for the Trust and Privilege Paths domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable trust and privilege paths population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-TRU controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.5  Trust and Privilege Paths: Identity and privilege paths

This view reports identity and privilege paths for the Trust and Privilege Paths domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable trust and privilege paths population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-TRU controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.6  Trust and Privilege Paths: Breakpoints, drift and graph quality

This view reports breakpoints, drift and graph quality for the Trust and Privilege Paths domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable trust and privilege paths population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-TRU controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.7  Authority Governance: Authority inventory and delegation

This view reports authority inventory and delegation for the Authority Governance domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable authority governance population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-AUT controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.8  Authority Governance: Approval, amplification and limits

This view reports approval, amplification and limits for the Authority Governance domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable authority governance population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-AUT controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.9  Authority Governance: Revocation, exceptions and recertification

This view reports revocation, exceptions and recertification for the Authority Governance domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable authority governance population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-AUT controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.10  AI Security Validation: Validation strategy and coverage

This view reports validation strategy and coverage for the AI Security Validation domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable ai security validation population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-VAL controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.11  AI Security Validation: Threat hypotheses and control tests

This view reports threat hypotheses and control tests for the AI Security Validation domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable ai security validation population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-VAL controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.12  AI Security Validation: Findings, retest and independence

This view reports findings, retest and independence for the AI Security Validation domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable ai security validation population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-VAL controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.13  AI Governance and Assurance: Policy, appetite and operating model

This view reports policy, appetite and operating model for the AI Governance and Assurance domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable ai governance and assurance population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-GOV controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.14  AI Governance and Assurance: Use-case, impact and obligations

This view reports use-case, impact and obligations for the AI Governance and Assurance domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable ai governance and assurance population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-GOV controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.15  AI Governance and Assurance: Exceptions, provider assurance and literacy

This view reports exceptions, provider assurance and literacy for the AI Governance and Assurance domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable ai governance and assurance population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-GOV controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.16  Operational Resilience: Telemetry, attribution and detection

This view reports telemetry, attribution and detection for the Operational Resilience domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable operational resilience population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-RES controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.17  Operational Resilience: Containment, kill and revocation

This view reports containment, kill and revocation for the Operational Resilience domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable operational resilience population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-RES controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |

DOMAIN REPORTING

# 4.18  Operational Resilience: Recovery, forensics and exercises

This view reports recovery, forensics and exercises for the Operational Resilience domain using canonical metrics, evidence, gates and limitations.

| **Domain field** | **Required report content** |
| --- | --- |
| Scope | Declare the applicable operational resilience population. |
| Maturity | Current level, confidence, capability variation and target. |
| Controls | Summarize applicable ATG-RES controls and critical states. |
| Evidence | Show grade mix, technical coverage, conflicts and stale items. |
| Paths | Identify material paths and validated breakpoints where relevant. |
| Findings | List priorities, owners, decisions and validation status. |
| Limitations | State blind spots and non-generalizable results. |
FINDING REPORTING

# 5.1  Finding taxonomy

Use Observation, Evidence Gap, Control Deficiency, Path Exposure, Governance Exception, Nonconformity or Risk Statement consistently.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write finding taxonomy in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.2  Finding title

Use specific condition and affected context, avoiding sensational or vague language.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write finding title in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.3  Criteria

Reference the exact applicable control, method requirement, policy or legally validated obligation.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write criteria in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.4  Condition

State evidenced facts, scope, period and result state.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write condition in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.5  Cause

Separate immediate cause, systemic cause and contributing relationship.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write cause in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.6  Consequence

Explain plausible material outcome without presenting possibility as occurrence.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write consequence in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.7  Evidence and confidence

List relevant evidence, grade, conflicts, confidence and limitations.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write evidence and confidence in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.8  Remediation objective

Describe target outcome and affected control or path, not one vendor product by default.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write remediation objective in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.9  Disposition

Show owner, action, decision, conditions, milestones, expiry and validation requirement.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write disposition in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

FINDING REPORTING

# 5.10  Closure

Close only after implementation evidence, appropriate retest and residual-path review.

| **Finding field** | **Standard** |
| --- | --- |
| Statement | Write closure in neutral, testable language. |
| Traceability | Link control, evidence, graph objects and paths. |
| Scope | Specify affected population and period. |
| Uncertainty | State confidence and UNKNOWNs. |
| Decision | Separate technical conclusion from acceptance or deferral. |
| Status | Use canonical state and retain history. |

VISUAL REPORTING

# 6.1  Visual grammar

Use consistent colors, labels, symbols, scales and legends across all outputs.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of visual grammar. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.2  Color use

Never rely on color alone; combine label, pattern, value and explanation.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of color use. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.3  Maturity heatmap

Display domain and capability levels with gates and confidence; do not average cells into maturity.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of maturity heatmap. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.4  Control matrix

Show criticality, result state, score, evidence, confidence and finding link.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of control matrix. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.5  Path diagram

Show direction, typed edges, conditions, boundaries, controls, evidence and residual route.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of path diagram. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.6  Coverage chart

Display numerator, denominator, UNKNOWN, Not Tested and excluded population.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of coverage chart. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.7  Trend chart

Annotate scope, evidence, library or formula changes that break comparability.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of trend chart. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.8  Roadmap view

Distinguish prerequisite, gate closure, implementation, validation and sustained operation.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of roadmap view. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.9  Graph redaction

Remove or abstract secrets, personal data, exploit details and confidential topology while preserving decision meaning.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of graph redaction. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |

VISUAL REPORTING

# 6.10  Accessible alternatives

Provide text summaries and data tables for charts, diagrams and heatmaps.

| **Visual check** | **Requirement** |
| --- | --- |
| Title | Explain the decision purpose of accessible alternatives. |
| Scale | Label units, categories and direction. |
| Denominator | Include population and period. |
| Legend | Define colors, symbols and states. |
| Uncertainty | Show UNKNOWN, confidence and limitations. |
| Accessibility | Provide non-visual equivalent. |
| Security | Review disclosure and redaction. |
EVIDENCE AND DISTRIBUTION

# 7.1  Evidence citation

Use stable evidence IDs and assertion links; avoid embedding unnecessary sensitive content in the main report.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what evidence citation information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.2  Evidence annex

Include authorized register extract with grade, source type, date, scope, review, conflicts and limitations.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what evidence annex information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.3  Sensitive evidence

Use controlled references, redaction and access segmentation while stating how withholding affects confidence.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what sensitive evidence information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.4  Personal data

Minimize names and identifiers; use roles or pseudonyms unless identity is necessary and authorized.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what personal data information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.5  Secrets and vulnerabilities

Do not reproduce credentials, tokens, exploit payloads or unnecessary technical details in general distribution.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what secrets and vulnerabilities information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.6  Third-party restrictions

Respect contractual, copyright, provider and client restrictions on reports and evidence.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what third-party restrictions information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.7  Legal privilege and hold

Do not label material privileged without authorized advice; preserve evidence where legal hold applies.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what legal privilege and hold information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.8  Distribution matrix

Map audience to report package, classification, permitted use, storage and onward-sharing restrictions.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what distribution matrix information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.9  Retention and disposal

State report owner, retention basis, expiry, hold and approved disposal process.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what retention and disposal information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

EVIDENCE AND DISTRIBUTION

# 7.10  Breach and correction

Escalate unauthorized disclosure, factual error, integrity issue or misclassification and assess dependent conclusions.

| **Control question** | **Required action** |
| --- | --- |
| Need | Determine what breach and correction information the audience requires. |
| Minimization | Exclude data not needed for the decision. |
| Protection | Apply classification, access and encryption. |
| Traceability | Retain authorized evidence link and report version. |
| Limitation | Disclose effect of redaction or unavailable source. |
| Review | Obtain privacy, legal or security review where applicable. |

QUALITY AND RELEASE

# 8.1  Factual validation

Owners validate factual statements and source accuracy without negotiating methodology or scores.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for factual validation. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.2  Evidence QA

Reviewer samples evidence links, grades, conflicts, currentness and conclusion support.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for evidence qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.3  Graph QA

Reviewer checks node identity, edge direction, conditions, path state and redaction.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for graph qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.4  Control QA

Reviewer checks applicability, component results, evidence caps, gates and findings.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for control qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.5  Maturity QA

Reviewer checks cumulative criteria, evidence floors, capability variation and target rationale.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for maturity qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.6  Scoring QA

Recalculate formulas, denominators, bands, overrides and version references.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for scoring qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.7  Finding QA

Check taxonomy, duplicates, criteria, condition, cause, consequence, evidence, action and status.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for finding qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.8  Executive-claim QA

Challenge unsupported adjectives, hidden caveats, traffic-light simplification and decision ambiguity.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for executive-claim qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.9  Confidentiality QA

Review classification, personal data, secrets, third-party content, redaction and audience.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for confidentiality qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.10  Accessibility QA

Check heading structure, table headers, contrast, reading order, alt text and text alternatives.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for accessibility qa. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.11  Approval and release

Record lead assessor, quality reviewer, decision authority, distribution owner and release date.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for approval and release. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |

QUALITY AND RELEASE

# 8.12  Correction and supersession

Issue versioned correction or replacement, identify changed conclusions and prevent reliance on obsolete copies.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Role, competence and independence. |
| Object | Exact report element reviewed for correction and supersession. |
| Procedure | Trace, reperformance, recalculation or challenge. |
| Issue | Gap and affected downstream claim. |
| Resolution | Change, rationale, evidence and owner. |
| Status | Open, resolved, accepted limitation or blocker. |
REPORTING ANTI-PATTERNS

# 9.1  One-number trust score

Reject opaque enterprise trustworthiness scores; use six-domain scorecards and visible gates.

| **Reviewer challenge** | **Required response** |
| --- | --- |
| What could be misunderstood? | Identify reader risk created by one-number trust score. |
| Which fact is hidden? | Restore scope, denominator, evidence, confidence or gate. |
| Which label is wrong? | Apply canonical term and definition. |
| What action follows? | State accountable decision and evidence needed. |
| Can the claim stand alone? | Ensure nearby caveat prevents overgeneralization. |

REPORTING ANTI-PATTERNS

# 9.2  Traffic-light only

Require definitions, evidence, denominator, confidence and action beyond color.

| **Reviewer challenge** | **Required response** |
| --- | --- |
| What could be misunderstood? | Identify reader risk created by traffic-light only. |
| Which fact is hidden? | Restore scope, denominator, evidence, confidence or gate. |
| Which label is wrong? | Apply canonical term and definition. |
| What action follows? | State accountable decision and evidence needed. |
| Can the claim stand alone? | Ensure nearby caveat prevents overgeneralization. |

REPORTING ANTI-PATTERNS

# 9.3  Hidden denominator

Do not show 90 percent attainment without assessed and applicable populations.

| **Reviewer challenge** | **Required response** |
| --- | --- |
| What could be misunderstood? | Identify reader risk created by hidden denominator. |
| Which fact is hidden? | Restore scope, denominator, evidence, confidence or gate. |
| Which label is wrong? | Apply canonical term and definition. |
| What action follows? | State accountable decision and evidence needed. |
| Can the claim stand alone? | Ensure nearby caveat prevents overgeneralization. |

REPORTING ANTI-PATTERNS

# 9.4  Severity without evidence

Do not present a potential consequence as validated exploitability or occurrence.

| **Reviewer challenge** | **Required response** |
| --- | --- |
| What could be misunderstood? | Identify reader risk created by severity without evidence. |
| Which fact is hidden? | Restore scope, denominator, evidence, confidence or gate. |
| Which label is wrong? | Apply canonical term and definition. |
| What action follows? | State accountable decision and evidence needed. |
| Can the claim stand alone? | Ensure nearby caveat prevents overgeneralization. |

REPORTING ANTI-PATTERNS

# 9.5  Compliance overclaim

Do not translate an indicative crosswalk into compliance status.

| **Reviewer challenge** | **Required response** |
| --- | --- |
| What could be misunderstood? | Identify reader risk created by compliance overclaim. |
| Which fact is hidden? | Restore scope, denominator, evidence, confidence or gate. |
| Which label is wrong? | Apply canonical term and definition. |
| What action follows? | State accountable decision and evidence needed. |
| Can the claim stand alone? | Ensure nearby caveat prevents overgeneralization. |

REPORTING ANTI-PATTERNS

# 9.6  Accepted equals resolved

Maintain open technical state when management accepts or defers treatment.

| **Reviewer challenge** | **Required response** |
| --- | --- |
| What could be misunderstood? | Identify reader risk created by accepted equals resolved. |
| Which fact is hidden? | Restore scope, denominator, evidence, confidence or gate. |
| Which label is wrong? | Apply canonical term and definition. |
| What action follows? | State accountable decision and evidence needed. |
| Can the claim stand alone? | Ensure nearby caveat prevents overgeneralization. |

REPORTING ANTI-PATTERNS

# 9.7  Future control lowers current exposure

Distinguish planned future state from validated residual state.

| **Reviewer challenge** | **Required response** |
| --- | --- |
| What could be misunderstood? | Identify reader risk created by future control lowers current exposure. |
| Which fact is hidden? | Restore scope, denominator, evidence, confidence or gate. |
| Which label is wrong? | Apply canonical term and definition. |
| What action follows? | State accountable decision and evidence needed. |
| Can the claim stand alone? | Ensure nearby caveat prevents overgeneralization. |

REPORTING ANTI-PATTERNS

# 9.8  Executive caveat burial

Place material limitations beside the affected headline and metric.

| **Reviewer challenge** | **Required response** |
| --- | --- |
| What could be misunderstood? | Identify reader risk created by executive caveat burial. |
| Which fact is hidden? | Restore scope, denominator, evidence, confidence or gate. |
| Which label is wrong? | Apply canonical term and definition. |
| What action follows? | State accountable decision and evidence needed. |
| Can the claim stand alone? | Ensure nearby caveat prevents overgeneralization. |

APPENDIX

# A.1  Executive report template

This appendix defines the canonical executive report template for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Header | Report ID, state, classification, unit, date and audience. |
| Headline | Decision conclusion with scope and confidence. |
| Profile | Six-domain maturity, gates and coverage. |
| Priorities | Critical paths, controls, findings and decisions. |
| Roadmap | Owners, milestones, evidence and validation. |
| Limitations | Material exclusions, UNKNOWNs and prohibited uses. |

APPENDIX

# A.2  Integrated report template

This appendix defines the canonical integrated report template for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Purpose | Decision, audience and permitted use. |
| Scope | Population, period, exclusions and versions. |
| Method | Assessment type, procedures and limitations. |
| Results | Estate, graph, controls, paths, maturity and scorecards. |
| Findings | Evidence, confidence, owner and disposition. |
| Appendices | Technical, evidence, calculations and approvals. |

APPENDIX

# A.3  Technical annex template

This appendix defines the canonical technical annex template for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Architecture | Components, identities, data, providers and environments. |
| Graph | Nodes, edges, boundaries, paths and snapshot. |
| Controls | Applicability, tests, results and evidence. |
| Paths | Conditions, authority, breakpoints and residual routes. |
| Validation | ROE, procedures, versions and limitations. |
| Actions | Technical target outcomes and retest. |

APPENDIX

# A.4  Evidence annex template

This appendix defines the canonical evidence annex template for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Register | Evidence ID, type, source, date and owner. |
| Quality | Grade, currentness, scope and corroboration. |
| Links | Assertions, controls, paths, findings and decisions. |
| Conflicts | Supporting, disputing and qualifying sources. |
| Protection | Classification, access, retention and redaction. |
| Limitations | Unavailable, stale or restricted evidence. |

APPENDIX

# A.5  Finding-record template

This appendix defines the canonical finding-record template for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Identity | Finding ID, title, taxonomy and status. |
| Criteria | Applicable canonical requirement. |
| Condition | Evidenced fact and scope. |
| Cause | Immediate and systemic contributors. |
| Consequence | Material outcome and uncertainty. |
| Evidence | IDs, grades, confidence and limits. |
| Treatment | Owner, objective, milestones, expiry and retest. |

APPENDIX

# A.6  Path-record template

This appendix defines the canonical path-record template for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Identity | Path ID, state, snapshot and reviewer. |
| Start | Actor, access, state and capability. |
| Traversal | Ordered typed relationships and boundaries. |
| Conditions | Permissions, protocol, data, approval and workflow. |
| Authority | Action and amplification. |
| Target | Asset, action and consequence. |
| Controls | Breakpoints, tests and residual routes. |
| Evidence | Sources, confidence, band and override. |

APPENDIX

# A.7  Decision-record template

This appendix defines the canonical decision-record template for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Question | Exact decision and intended effect. |
| Authority | Approver and delegated basis. |
| Inputs | Evidence, findings, gates and alternatives. |
| Outcome | Approve, reject, condition, accept, defer or escalate. |
| Conditions | Owner, milestone, expiry and monitoring. |
| Traceability | Report, run and supersession links. |

APPENDIX

# A.8  Roadmap template

This appendix defines the canonical roadmap template for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Gap | Current result, unmet criterion and scope. |
| Priority | Gate, path, obligation or strategic driver. |
| Outcome | Target capability or control effect. |
| Owner | Accountable role. |
| Dependency | People, process, data, identity, platform or provider. |
| Evidence | Proof of implementation and operation. |
| Validation | Retest and residual-path method. |

APPENDIX

# A.9  Machine-readable export minimum

This appendix defines the canonical machine-readable export minimum for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Identity | report_id, run_id, scope_id and versions. |
| Results | control, maturity, scorecard and path records. |
| Evidence | references, grades, confidence and coverage. |
| Findings | taxonomy, status, owner and disposition. |
| Gates | status, cap, rationale and resolution. |
| Lineage | source records, review and supersession. |

APPENDIX

# A.10  Prohibited claims register

This appendix defines the canonical prohibited claims register for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Trustworthy percentage | No universal validated composite. |
| Compliant from mapping | Mapping is not legal conclusion. |
| Secure or safe | Assessment cannot prove absence of failure. |
| Complete estate | Use scoped measured coverage. |
| Exploitable path from topology | Require validated conditions. |
| Continuous assurance | Require demonstrated continuous coverage and review. |
| Certified by report | No certification scheme is created here. |

APPENDIX

# A.11  Release acceptance checklist

This appendix defines the canonical release acceptance checklist for consistent assessment reporting.

| **Field** | **Required content** |
| --- | --- |
| Semantic integrity | No contradiction with artifacts #1-#8. |
| Package completeness | Executive, integrated, technical, evidence and structured outputs defined. |
| Claim integrity | Scope, coverage, UNKNOWN, confidence and gates visible. |
| Metric integrity | Formulas, denominators, labels and examples verified. |
| Visual integrity | Accessible, consistent and non-misleading. |
| Security | Classification, redaction and distribution reviewed. |
| Independent review | Architecture, AI security and reporting-method reviews recorded. |
| IP and licence | Publication rights, licence and trademark approved. |

APPENDIX

# A.12  Final doctrine and approval record

This appendix defines the canonical final doctrine and approval record for consistent assessment reporting.

> **REPORTING DOCTRINE** State the scope. Show the denominator. Preserve UNKNOWN. Put gates before averages. Separate facts from decisions. Make every claim traceable.

| **Field** | **Required content** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Chief product architecture review | Internal author-loop completed; independent review pending. |
| AI security architecture review | Internal author-loop completed; independent review pending. |
| Reporting-method review | Independent validation pending. |
| Employer / IP / confidentiality review | Pending. |
| Licence and trademark approval | Pending. |
| Public release | Not approved until mandatory gates close. |

AI Trust Graph Reporting Standard | Version 1.1.0 | Public-release candidate
