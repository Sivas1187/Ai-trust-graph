[← Back to methodology index](../README.md)

# AI Trust Graph — Assessment Methodology

*Version 1.0 | Repeatable, evidence-gated and graph-aware assessment from initiation through reassessment*

> **PURPOSE** Define the controlled lifecycle, methods, decision gates, records and quality assurance required to conduct a defensible AI Trust Graph assessment.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Depends on | Manifesto v1.0; Core Conceptual Model v1.1; Maturity Model v1.0; Scoring Framework v1.0; Master Control Library v1.0; Evidence Model v1.0 |
| Canonical lifecycle | Initiate; Scope; Discover; Model; Evidence; Controls; Paths; Maturity; Scoring; Findings; Decisions; Report; Reassess |
| Primary outputs | Assessment charter, scope baseline, graph snapshot, evidence register, control results, path records, maturity profile, findings, decisions and report |
| Product boundary | ExposureGraph implementation, connectors, algorithms and commercial workflows excluded |

# 0.1  Authority, scope and release boundary

This methodology defines how AI Trust Graph assessments are executed. It does not certify compliance, authorize intrusive testing, replace legal advice or guarantee complete discovery or risk elimination.

Every assessment is bounded by a written charter, assessment unit, population, period, evidence window, authorization and artifact versions.

> **PUBLICATION SAFEGUARD** Complete employer, confidentiality, copyright, privacy, legal, licence, trademark and independent methodology review before public release.

# 0.2  Methodology position and precedence

The Manifesto supplies commitments. The Core Conceptual Model supplies canonical meaning. The Maturity, Scoring, Control and Evidence artifacts supply operational rules. This document coordinates their use without redefining them.

When artifacts conflict, assessors stop the affected conclusion, preserve evidence and escalate through methodology governance.

> **CANONICAL ARTIFACT MAP** Repository-wide authority, dependency order, bundle versions and content pins are governed by [METHODOLOGY_MANIFEST.md](../METHODOLOGY_MANIFEST.md). This artifact does not define a competing precedence chain.

# 0.3  Assessment doctrine

An assessment is a controlled inquiry into an explicitly bounded AI-enabled system. It makes objects and relationships visible, validates authority and material paths, tests controls proportionately, preserves uncertainty and supports accountable decisions.

> **DOCTRINE** Scope before collection. Evidence before conclusion. Conditions before path claims. Tests before effectiveness. Gates before averages. Review before release.

# 0.4  Method invariants

The following invariants override deadlines, tooling convenience and dashboard aesthetics.

| **ID** | **Invariant** |
| --- | --- |
| ASM-INV-01 | Scope, population, period and exclusions precede assessment claims. |
| ASM-INV-02 | Automated discovery does not prove completeness. |
| ASM-INV-03 | A graph connection does not prove authorization, invocation or exploitability. |
| ASM-INV-04 | Documentation alone does not prove operating effectiveness. |
| ASM-INV-05 | UNKNOWN remains visible until sufficient evidence and review resolve it. |
| ASM-INV-06 | Critical gates apply before aggregation or maturity determination. |
| ASM-INV-07 | Maturity is rule-based and cannot be inferred from an average score. |
| ASM-INV-08 | Management acceptance changes disposition, not the technical result. |
| ASM-INV-09 | Findings close only after required implementation evidence and retest. |
| ASM-INV-10 | Completed assessment runs are not rewritten by later change. |

# 0.5  Normative result states

The method preserves UNKNOWN, Not Assessed, Not Applicable, Not Tested, Inconclusive, Provisional and Final within scope as distinct states.

UNKNOWN is neither a failed control nor a low-risk conclusion and must not disappear from coverage reporting.

| **State** | **Use** |
| --- | --- |
| UNKNOWN | Material evidence is absent, insufficient or conflicting. |
| Not Assessed | No assessment activity completed for the item. |
| Not Applicable | Approved rationale establishes non-applicability. |
| Not Tested | Required effectiveness test was not performed. |
| Inconclusive | Activity occurred but cannot support a determinate result. |
| Provisional | Result awaits evidence closure or quality review. |
| Final within scope | All required gates and approvals are complete for declared scope. |

# 0.6  Assessment roles

The methodology separates sponsorship, scope ownership, system ownership, assessment, technical testing, evidence custody, quality review, legal/privacy advice and decision authority.

| **Role** | **Primary accountability** |
| --- | --- |
| Sponsor | Decision purpose, resources and organizational authority. |
| Scope owner | Assessment boundary, population and exclusions. |
| System owner | System facts, access, evidence and remediation accountability. |
| Lead assessor | Method execution and integrated conclusion. |
| Technical validator | Authorized testing and reproducible evidence. |
| Evidence custodian | Protection, retention and traceability. |
| Quality reviewer | Independent challenge and release recommendation. |
| Decision authority | Risk, exception, acceptance and report approval. |

# 0.7  Independence and conflict management

Independence is proportionate to consequence and decision use. Assessors disclose prior design, implementation, commercial, reporting or operational interests that could influence judgment.

A conflict does not automatically invalidate work, but material conflicts require mitigation, additional review or reassignment.

# 0.8  Assessment records and audit trail

Every material activity produces a versioned record. Completed runs are immutable historical states; later evidence or changes create a new run, amendment or superseding conclusion.

| **Record** | **Minimum content** |
| --- | --- |
| Assessment charter | Purpose, unit, scope, authority, period and deliverables. |
| Scope baseline | Population, environments, exclusions and changes. |
| Graph snapshot | Objects, relationships, boundaries, paths and version. |
| Evidence register | Sources, grades, confidence, conflicts and traceability. |
| Control record | Applicability, design, implementation, operation and score. |
| Decision log | Gates, overrides, disputes, approvals and conditions. |
| Report package | Findings, profile, limitations, roadmap and sign-off. |

# 0.9  Authorization and safety

No methodology step authorizes collection, access, testing, exploitation, disclosure, change or disruption. Active validation requires written rules of engagement, safe data, test identities, stop conditions, restoration and escalation.

> **SAFETY INVARIANT** A technically possible test is not automatically authorized.

# 0.10  Tool independence and automation boundary

The methodology can be executed using documents, spreadsheets, graph stores or compatible platforms. Tool output remains proposed until evidence, scope, method and review support acceptance.

Commercial implementation may automate work but cannot become the hidden source of canonical meaning.

# 0.11  Assessment lifecycle overview

The lifecycle contains thirteen controlled phases. Phases may iterate, but required gates cannot be skipped merely because information was available earlier.

| **Phase** | **Primary outcome** |
| --- | --- |
| 1 Initiate | Approved charter and decision purpose. |
| 2 Scope | Versioned boundary and population. |
| 3 Discover | Measured estate and blind spots. |
| 4 Model | Reviewed graph snapshot. |
| 5 Evidence | Graded and traceable evidence set. |
| 6 Controls | Applicability and control results. |
| 7 Paths | Validated material path portfolio. |
| 8 Maturity | Six-domain capability profile. |
| 9 Scoring | Transparent scorecards and coverage. |
| 10 Findings | Evidence-linked gaps and remediation objectives. |
| 11 Decisions | Approved gates, exceptions and dispositions. |
| 12 Report | Quality-reviewed decision package. |
| 13 Reassess | Trigger-based new or updated run. |

# 0.11.1  Conceptual-to-execution lifecycle crosswalk

The Core Conceptual Model expresses the method as six conceptual stages. This Assessment Methodology expands those stages into thirteen execution phases with operational gates. The two views are complementary, not competing lifecycle definitions; the mapping is intentionally many-to-many where evidence or validation spans more than one conceptual stage.

| **Core Conceptual Model stage** | **Primary execution phases** | **Crosswalk note** |
| --- | --- | --- |
| 1 Frame and scope | 1 Initiate; 2 Scope | Establish decision purpose, authorization, boundaries, owners, population and constraints. |
| 2 Discover and register | 3 Discover; 5 Evidence | Identify the estate and begin evidence lineage; evidence collection continues throughout later phases. |
| 3 Construct and approve graph | 4 Model; 5 Evidence | Normalize graph objects, relationships, boundaries and reviewed evidence-linked assertions. |
| 4 Analyze trust, authority and paths | 6 Controls; 7 Paths; 8 Maturity; 9 Scoring | Evaluate control state, material paths, capability maturity and transparent decision measures. |
| 5 Validate and decide | 6 Controls; 7 Paths; 10 Findings; 11 Decisions; 12 Report | Validate controls and paths, issue bounded findings, record accountable decisions and release reviewed conclusions. |
| 6 Monitor and reassess | 13 Reassess | Change, drift, incidents, remediation and expiry trigger a new or updated versioned assessment run; monitoring operates between runs as defined by the applicable controls. |

> **CROSSWALK RULE** The six-stage conceptual view defines reasoning intent. The thirteen-phase execution view defines fieldwork and gates. Neither may be used to skip a requirement in the other.

# 0.12  Exit criteria overview

Each phase has entry conditions, mandatory activities, outputs, decision gates and quality checks. An incomplete phase may proceed only under an approved limitation that does not invalidate downstream work.

| **Gate test** | **Rule** |
| --- | --- |
| Completeness | Mandatory outputs exist or limitations are explicitly approved. |
| Evidence | Assertions meet artifact-specific sufficiency. |
| Safety | Collection and testing remained within authorization. |
| Traceability | Inputs and decisions can be reconstructed. |
| Critical gates | Open conditions are applied before progression. |
| Quality | Required reviewer has challenged the work. |
| Decision | Named authority accepts the next phase or bounded limitation. |

# 1.1  Baseline assessment

Establish the first defensible view of scope, graph, controls, evidence, maturity and material paths.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | New program, portfolio or system without a current ATG assessment. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned baseline assessment record with limitations and next trigger. |

# 1.2  Periodic reassessment

Re-evaluate a stable scope at an approved cadence while preserving comparable prior results.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | Scheduled assurance where change rate and consequence permit periodic review. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned periodic reassessment record with limitations and next trigger. |

# 1.3  Material-change assessment

Assess the consequences of model, prompt, data, tool, identity, provider, autonomy, geography, purpose or architecture change.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | Before release or immediately after unplanned material change. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned material-change assessment record with limitations and next trigger. |

# 1.4  High-impact deep dive

Increase evidence, testing, independence and path analysis for systems with significant consequence or authority.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | Regulated, safety, financial, privileged, irreversible or broad-impact use. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned high-impact deep dive record with limitations and next trigger. |

# 1.5  Incident-driven assessment

Reconstruct changed facts, affected paths, control failures and recovery evidence after an event.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | Security, privacy, safety, provider, model, data or authority incident. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned incident-driven assessment record with limitations and next trigger. |

# 1.6  Third-party and provider assessment

Examine service-specific responsibility, configuration, evidence access, data handling, resilience and concentration.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | External model, platform, tool, data, hosting, annotation or orchestration dependency. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned third-party and provider assessment record with limitations and next trigger. |

# 1.7  Portfolio assessment

Profile multiple use cases or systems while preserving materially different populations and avoiding misleading averages.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | Investment, governance, assurance planning or shared-platform risk. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned portfolio assessment record with limitations and next trigger. |

# 1.8  Pre-deployment readiness assessment

Determine whether evidence, controls, testing, approvals and containment are sufficient for the requested release.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | Pilot, production launch or material autonomy expansion. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned pre-deployment readiness assessment record with limitations and next trigger. |

# 1.9  Continuous or event-driven assessment

Use approved automated signals and triggers to refresh evidence and initiate human review of material change.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | Dynamic estates with measured coverage and governed automation. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned continuous or event-driven assessment record with limitations and next trigger. |

# 1.10  Regulatory or obligation-focused assessment

Evaluate fact-specific obligations and related controls without representing framework mapping as compliance proof.

| **Method element** | **Requirement** |
| --- | --- |
| Trigger | When a named jurisdiction, role, sector or obligation has been legally validated as applicable. |
| Minimum scope | Declare assessment unit, population, environment and evidence period. |
| Depth | Set by consequence, authority, change, obligations and uncertainty. |
| Independence | Increase for high-impact decisions and conflicted first-line ownership. |
| Output | Issue a versioned regulatory or obligation-focused assessment record with limitations and next trigger. |

# Phase 1 — Initiate

# 2.1  Charter and decision purpose

Charter and decision purpose is the controlled initiate activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to charter and decision purpose are approved or limitations are recorded. |
| Mandatory action | Define why the assessment exists, who will use it, what decision it supports and which artifact versions apply. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for charter and decision purpose. |
| Quality challenge | Independent or second-person review tests whether charter and decision purpose is complete, safe and traceable. |
| Exit result | Versioned charter and decision purpose output approved, rejected, conditioned or left Inconclusive. |

# 2.2  Stakeholder and role mobilization

Stakeholder and role mobilization is the controlled initiate activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to stakeholder and role mobilization are approved or limitations are recorded. |
| Mandatory action | Identify owners, assessors, reviewers, advisers, testers and decision authorities; record conflicts and delegated authority. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for stakeholder and role mobilization. |
| Quality challenge | Independent or second-person review tests whether stakeholder and role mobilization is complete, safe and traceable. |
| Exit result | Versioned stakeholder and role mobilization output approved, rejected, conditioned or left Inconclusive. |

# 2.3  Engagement risk and authorization

Engagement risk and authorization is the controlled initiate activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to engagement risk and authorization are approved or limitations are recorded. |
| Mandatory action | Confirm confidentiality, source access, test authority, safety constraints, third-party permission, legal or privacy escalation and evidence handling. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for engagement risk and authorization. |
| Quality challenge | Independent or second-person review tests whether engagement risk and authorization is complete, safe and traceable. |
| Exit result | Versioned engagement risk and authorization output approved, rejected, conditioned or left Inconclusive. |

# 2.4  Initiation gate

Initiation gate is the controlled initiate activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to initiation gate are approved or limitations are recorded. |
| Mandatory action | Approve charter, roles, authority, methodology versions, deliverables, limitations and stop conditions before collection. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for initiation gate. |
| Quality challenge | Independent or second-person review tests whether initiation gate is complete, safe and traceable. |
| Exit result | Versioned initiation gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 2 — Scope

# 3.1  Assessment unit selection

Assessment unit selection is the controlled scope activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to assessment unit selection are approved or limitations are recorded. |
| Mandatory action | Select enterprise, portfolio, business unit, platform, system, use case, provider or path as the unit and state the decision boundary. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for assessment unit selection. |
| Quality challenge | Independent or second-person review tests whether assessment unit selection is complete, safe and traceable. |
| Exit result | Versioned assessment unit selection output approved, rejected, conditioned or left Inconclusive. |

# 3.2  Population and denominator

Population and denominator is the controlled scope activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to population and denominator are approved or limitations are recorded. |
| Mandatory action | Define in-scope assets, environments, users, identities, providers, data, tools, controls, paths and time period with authoritative sources. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for population and denominator. |
| Quality challenge | Independent or second-person review tests whether population and denominator is complete, safe and traceable. |
| Exit result | Versioned population and denominator output approved, rejected, conditioned or left Inconclusive. |

# 3.3  Exclusions and assumptions

Exclusions and assumptions is the controlled scope activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to exclusions and assumptions are approved or limitations are recorded. |
| Mandatory action | Record exclusions, rationale, owner, consequence, compensating activity, expiry and whether the exclusion limits headline claims. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for exclusions and assumptions. |
| Quality challenge | Independent or second-person review tests whether exclusions and assumptions is complete, safe and traceable. |
| Exit result | Versioned exclusions and assumptions output approved, rejected, conditioned or left Inconclusive. |

# 3.4  Scope baseline gate

Scope baseline gate is the controlled scope activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to scope baseline gate are approved or limitations are recorded. |
| Mandatory action | Freeze a versioned scope baseline and change-control method; unresolved material scope prevents final assurance. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for scope baseline gate. |
| Quality challenge | Independent or second-person review tests whether scope baseline gate is complete, safe and traceable. |
| Exit result | Versioned scope baseline gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 3 — Discover

# 4.1  Authorized source plan

Authorized source plan is the controlled discover activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to authorized source plan are approved or limitations are recorded. |
| Mandatory action | Catalogue governance, procurement, cloud, SaaS, identity, code, pipeline, runtime, network, endpoint and provider sources plus coverage limits. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for authorized source plan. |
| Quality challenge | Independent or second-person review tests whether authorized source plan is complete, safe and traceable. |
| Exit result | Versioned authorized source plan output approved, rejected, conditioned or left Inconclusive. |

# 4.2  Sanctioned and shadow AI discovery

Sanctioned and shadow AI discovery is the controlled discover activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to sanctioned and shadow ai discovery are approved or limitations are recorded. |
| Mandatory action | Identify approved and unmanaged AI services, local models, agents, plugins, APIs and embedded capabilities using proportionate authorized signals. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for sanctioned and shadow ai discovery. |
| Quality challenge | Independent or second-person review tests whether sanctioned and shadow ai discovery is complete, safe and traceable. |
| Exit result | Versioned sanctioned and shadow ai discovery output approved, rejected, conditioned or left Inconclusive. |

# 4.3  Inventory, ownership and AIBOM

Inventory, ownership and AIBOM is the controlled discover activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to inventory, ownership and aibom are approved or limitations are recorded. |
| Mandatory action | Create or reconcile canonical records, ownership and composition for use cases, models, prompts, RAG, agents, tools, identities, providers and runtime. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for inventory, ownership and aibom. |
| Quality challenge | Independent or second-person review tests whether inventory, ownership and aibom is complete, safe and traceable. |
| Exit result | Versioned inventory, ownership and aibom output approved, rejected, conditioned or left Inconclusive. |

# 4.4  Discovery gate

Discovery gate is the controlled discover activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to discovery gate are approved or limitations are recorded. |
| Mandatory action | Report source coverage, asset attribution, freshness, duplicates, blind spots and UNKNOWNs against the declared denominator. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for discovery gate. |
| Quality challenge | Independent or second-person review tests whether discovery gate is complete, safe and traceable. |
| Exit result | Versioned discovery gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 4 — Model

# 5.1  Canonical object and relationship mapping

Canonical object and relationship mapping is the controlled model activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to canonical object and relationship mapping are approved or limitations are recorded. |
| Mandatory action | Represent typed objects and directional relationships with scope, conditions, evidence, confidence, owner and validity. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for canonical object and relationship mapping. |
| Quality challenge | Independent or second-person review tests whether canonical object and relationship mapping is complete, safe and traceable. |
| Exit result | Versioned canonical object and relationship mapping output approved, rejected, conditioned or left Inconclusive. |

# 5.2  Boundary and authority modelling

Boundary and authority modelling is the controlled model activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to boundary and authority modelling are approved or limitations are recorded. |
| Mandatory action | Make identity, data, provider, runtime, governance and consequence boundaries explicit; map effective actions and delegation. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for boundary and authority modelling. |
| Quality challenge | Independent or second-person review tests whether boundary and authority modelling is complete, safe and traceable. |
| Exit result | Versioned boundary and authority modelling output approved, rejected, conditioned or left Inconclusive. |

# 5.3  Path candidate generation

Path candidate generation is the controlled model activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to path candidate generation are approved or limitations are recorded. |
| Mandatory action | Generate bounded candidate paths from threat, misuse, failure, authority and business scenarios without calling topology exploitable. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for path candidate generation. |
| Quality challenge | Independent or second-person review tests whether path candidate generation is complete, safe and traceable. |
| Exit result | Versioned path candidate generation output approved, rejected, conditioned or left Inconclusive. |

# 5.4  Graph approval gate

Graph approval gate is the controlled model activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to graph approval gate are approved or limitations are recorded. |
| Mandatory action | Review proposed facts, reject unsupported edges, preserve UNKNOWN conditions and approve a versioned graph snapshot. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for graph approval gate. |
| Quality challenge | Independent or second-person review tests whether graph approval gate is complete, safe and traceable. |
| Exit result | Versioned graph approval gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 5 — Evidence

# 6.1  Evidence plan and assertion design

Evidence plan and assertion design is the controlled evidence activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to evidence plan and assertion design are approved or limitations are recorded. |
| Mandatory action | Translate each control, graph fact, path condition and maturity criterion into precise assertions and minimum evidence needs. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for evidence plan and assertion design. |
| Quality challenge | Independent or second-person review tests whether evidence plan and assertion design is complete, safe and traceable. |
| Exit result | Versioned evidence plan and assertion design output approved, rejected, conditioned or left Inconclusive. |

# 6.2  Authorized collection and protection

Authorized collection and protection is the controlled evidence activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to authorized collection and protection are approved or limitations are recorded. |
| Mandatory action | Collect proportionately; preserve source, query, date, scope, integrity, sensitivity, custody, transformation and retention. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for authorized collection and protection. |
| Quality challenge | Independent or second-person review tests whether authorized collection and protection is complete, safe and traceable. |
| Exit result | Versioned authorized collection and protection output approved, rejected, conditioned or left Inconclusive. |

# 6.3  Grade, corroborate and resolve conflict

Grade, corroborate and resolve conflict is the controlled evidence activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to grade, corroborate and resolve conflict are approved or limitations are recorded. |
| Mandatory action | Assign E0-E5, evaluate quality dimensions, preserve disputes, determine confidence and narrow claims where evidence does not fit. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for grade, corroborate and resolve conflict. |
| Quality challenge | Independent or second-person review tests whether grade, corroborate and resolve conflict is complete, safe and traceable. |
| Exit result | Versioned grade, corroborate and resolve conflict output approved, rejected, conditioned or left Inconclusive. |

# 6.4  Evidence sufficiency gate

Evidence sufficiency gate is the controlled evidence activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to evidence sufficiency gate are approved or limitations are recorded. |
| Mandatory action | Approve evidence register, material conflicts, coverage, stale items, missing E4-E5 support and limitations before strong conclusions. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for evidence sufficiency gate. |
| Quality challenge | Independent or second-person review tests whether evidence sufficiency gate is complete, safe and traceable. |
| Exit result | Versioned evidence sufficiency gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 6 — Controls

# 7.1  Applicability and profile

Applicability and profile is the controlled controls activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to applicability and profile are approved or limitations are recorded. |
| Mandatory action | Choose mandatory, conditional or supplementary controls from the Master Control Library based on architecture, authority, data, provider, consequence and obligations. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for applicability and profile. |
| Quality challenge | Independent or second-person review tests whether applicability and profile is complete, safe and traceable. |
| Exit result | Versioned applicability and profile output approved, rejected, conditioned or left Inconclusive. |

# 7.2  Design and implementation assessment

Design and implementation assessment is the controlled controls activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to design and implementation assessment are approved or limitations are recorded. |
| Mandatory action | Assess approved intent and deployed state separately using current scoped evidence; preserve Not Applicable and UNKNOWN rationale. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for design and implementation assessment. |
| Quality challenge | Independent or second-person review tests whether design and implementation assessment is complete, safe and traceable. |
| Exit result | Versioned design and implementation assessment output approved, rejected, conditioned or left Inconclusive. |

# 7.3  Operating-effectiveness validation

Operating-effectiveness validation is the controlled controls activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to operating-effectiveness validation are approved or limitations are recorded. |
| Mandatory action | Test critical and material controls using authorized representative procedures and analyze dependencies, failure conditions and bypass. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for operating-effectiveness validation. |
| Quality challenge | Independent or second-person review tests whether operating-effectiveness validation is complete, safe and traceable. |
| Exit result | Versioned operating-effectiveness validation output approved, rejected, conditioned or left Inconclusive. |

# 7.4  Control determination gate

Control determination gate is the controlled controls activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to control determination gate are approved or limitations are recorded. |
| Mandatory action | Apply component minimum, evidence cap and critical gates; record confidence, coverage, findings and affected graph references. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for control determination gate. |
| Quality challenge | Independent or second-person review tests whether control determination gate is complete, safe and traceable. |
| Exit result | Versioned control determination gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 7 — Paths

# 8.1  Material-path selection

Material-path selection is the controlled paths activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to material-path selection are approved or limitations are recorded. |
| Mandatory action | Select paths based on consequence, target criticality, authority, reachability, amplification, observed events and stakeholder concern. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for material-path selection. |
| Quality challenge | Independent or second-person review tests whether material-path selection is complete, safe and traceable. |
| Exit result | Versioned material-path selection output approved, rejected, conditioned or left Inconclusive. |

# 8.2  Condition validation

Condition validation is the controlled paths activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to condition validation are approved or limitations are recorded. |
| Mandatory action | Validate identities, permissions, protocols, state, data, approvals, workflow and boundary conditions step by step. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for condition validation. |
| Quality challenge | Independent or second-person review tests whether condition validation is complete, safe and traceable. |
| Exit result | Versioned condition validation output approved, rejected, conditioned or left Inconclusive. |

# 8.3  Breakpoint and residual-path validation

Breakpoint and residual-path validation is the controlled paths activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to breakpoint and residual-path validation are approved or limitations are recorded. |
| Mandatory action | Test whether preventive, detective, containment, corrective and recovery controls affect the claimed step and identify alternate routes. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for breakpoint and residual-path validation. |
| Quality challenge | Independent or second-person review tests whether breakpoint and residual-path validation is complete, safe and traceable. |
| Exit result | Versioned breakpoint and residual-path validation output approved, rejected, conditioned or left Inconclusive. |

# 8.4  Path conclusion gate

Path conclusion gate is the controlled paths activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to path conclusion gate are approved or limitations are recorded. |
| Mandatory action | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated state with evidence and confidence. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for path conclusion gate. |
| Quality challenge | Independent or second-person review tests whether path conclusion gate is complete, safe and traceable. |
| Exit result | Versioned path conclusion gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 8 — Maturity

# 9.1  Capability-level assessment

Capability-level assessment is the controlled maturity activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to capability-level assessment are approved or limitations are recorded. |
| Mandatory action | Evaluate all applicable criteria from M1 upward for each of the 36 capabilities; higher strengths cannot replace unmet prerequisites. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for capability-level assessment. |
| Quality challenge | Independent or second-person review tests whether capability-level assessment is complete, safe and traceable. |
| Exit result | Versioned capability-level assessment output approved, rejected, conditioned or left Inconclusive. |

# 9.2  Domain determination

Domain determination is the controlled maturity activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to domain determination are approved or limitations are recorded. |
| Mandatory action | Assign the highest common sustained level across applicable mandatory capabilities after critical-gate review. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for domain determination. |
| Quality challenge | Independent or second-person review tests whether domain determination is complete, safe and traceable. |
| Exit result | Versioned domain determination output approved, rejected, conditioned or left Inconclusive. |

# 9.3  Target maturity

Target maturity is the controlled maturity activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to target maturity are approved or limitations are recorded. |
| Mandatory action | Set proportionate target by consequence, authority, obligations, change rate, strategic importance and operational dependency. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for target maturity. |
| Quality challenge | Independent or second-person review tests whether target maturity is complete, safe and traceable. |
| Exit result | Versioned target maturity output approved, rejected, conditioned or left Inconclusive. |

# 9.4  Maturity approval gate

Maturity approval gate is the controlled maturity activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to maturity approval gate are approved or limitations are recorded. |
| Mandatory action | Approve the six-domain vector, capability distribution, confidence, evidence coverage, gates, exceptions and target profile. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for maturity approval gate. |
| Quality challenge | Independent or second-person review tests whether maturity approval gate is complete, safe and traceable. |
| Exit result | Versioned maturity approval gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 9 — Scoring

# 10.1  Control score calculation

Control score calculation is the controlled scoring activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to control score calculation are approved or limitations are recorded. |
| Mandatory action | Use design, implementation and operating-effectiveness components, evidence caps and gates only for determinate controls. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for control score calculation. |
| Quality challenge | Independent or second-person review tests whether control score calculation is complete, safe and traceable. |
| Exit result | Versioned control score calculation output approved, rejected, conditioned or left Inconclusive. |

# 10.2  Coverage and uncertainty calculation

Coverage and uncertainty calculation is the controlled scoring activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to coverage and uncertainty calculation are approved or limitations are recorded. |
| Mandatory action | Show applicable denominators, determinate coverage, technical-evidence coverage, UNKNOWN, Not Tested, Inconclusive and stale evidence. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for coverage and uncertainty calculation. |
| Quality challenge | Independent or second-person review tests whether coverage and uncertainty calculation is complete, safe and traceable. |
| Exit result | Versioned coverage and uncertainty calculation output approved, rejected, conditioned or left Inconclusive. |

# 10.3  Path triage and domain scorecards

Path triage and domain scorecards is the controlled scoring activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to path triage and domain scorecards are approved or limitations are recorded. |
| Mandatory action | Apply the published Path Exposure Index only to eligible paths and report six transparent domain scorecards instead of one trust number. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for path triage and domain scorecards. |
| Quality challenge | Independent or second-person review tests whether path triage and domain scorecards is complete, safe and traceable. |
| Exit result | Versioned path triage and domain scorecards output approved, rejected, conditioned or left Inconclusive. |

# 10.4  Scoring quality gate

Scoring quality gate is the controlled scoring activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to scoring quality gate are approved or limitations are recorded. |
| Mandatory action | Recalculate formulas, verify version, preserve raw inputs, review overrides and prohibit claims of safety, compliance or certification. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for scoring quality gate. |
| Quality challenge | Independent or second-person review tests whether scoring quality gate is complete, safe and traceable. |
| Exit result | Versioned scoring quality gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 10 — Findings

# 11.1  Issue qualification

Issue qualification is the controlled findings activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to issue qualification are approved or limitations are recorded. |
| Mandatory action | Differentiate observation, evidence gap, control deficiency, path exposure, governance exception, nonconformity and risk statement. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for issue qualification. |
| Quality challenge | Independent or second-person review tests whether issue qualification is complete, safe and traceable. |
| Exit result | Versioned issue qualification output approved, rejected, conditioned or left Inconclusive. |

# 11.2  Finding construction

Finding construction is the controlled findings activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to finding construction are approved or limitations are recorded. |
| Mandatory action | Record criteria, condition, cause, affected objects and paths, consequence, evidence, confidence, scope, owner and remediation objective. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for finding construction. |
| Quality challenge | Independent or second-person review tests whether finding construction is complete, safe and traceable. |
| Exit result | Versioned finding construction output approved, rejected, conditioned or left Inconclusive. |

# 11.3  Prioritization and treatment

Prioritization and treatment is the controlled findings activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to prioritization and treatment are approved or limitations are recorded. |
| Mandatory action | Use critical gates, path exposure, obligations, blast radius, reversibility, exploitability evidence and decision context without hiding uncertainty. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for prioritization and treatment. |
| Quality challenge | Independent or second-person review tests whether prioritization and treatment is complete, safe and traceable. |
| Exit result | Versioned prioritization and treatment output approved, rejected, conditioned or left Inconclusive. |

# 11.4  Finding release gate

Finding release gate is the controlled findings activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to finding release gate are approved or limitations are recorded. |
| Mandatory action | Peer-review factual accuracy, duplicate issues, causal logic, severity, remediation feasibility and traceability before issuance. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for finding release gate. |
| Quality challenge | Independent or second-person review tests whether finding release gate is complete, safe and traceable. |
| Exit result | Versioned finding release gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 11 — Decisions

# 12.1  Risk and issue disposition

Risk and issue disposition is the controlled decisions activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to risk and issue disposition are approved or limitations are recorded. |
| Mandatory action | Record treat, avoid, transfer, accept, defer or gather evidence as a decision, not as a modification of technical facts. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for risk and issue disposition. |
| Quality challenge | Independent or second-person review tests whether risk and issue disposition is complete, safe and traceable. |
| Exit result | Versioned risk and issue disposition output approved, rejected, conditioned or left Inconclusive. |

# 12.2  Exception governance

Exception governance is the controlled decisions activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to exception governance are approved or limitations are recorded. |
| Mandatory action | Require authorized approver, scope, rationale, residual exposure, compensating controls, milestones, expiry and reassessment trigger. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for exception governance. |
| Quality challenge | Independent or second-person review tests whether exception governance is complete, safe and traceable. |
| Exit result | Versioned exception governance output approved, rejected, conditioned or left Inconclusive. |

# 12.3  Dispute and override resolution

Dispute and override resolution is the controlled decisions activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to dispute and override resolution are approved or limitations are recorded. |
| Mandatory action | Preserve calculated and assessor results, evidence, reviewer disagreement, resolution authority and downstream effect. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for dispute and override resolution. |
| Quality challenge | Independent or second-person review tests whether dispute and override resolution is complete, safe and traceable. |
| Exit result | Versioned dispute and override resolution output approved, rejected, conditioned or left Inconclusive. |

# 12.4  Decision gate

Decision gate is the controlled decisions activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to decision gate are approved or limitations are recorded. |
| Mandatory action | Approve dispositions, unresolved critical items, conditional release, escalation and report limitations through named authority. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for decision gate. |
| Quality challenge | Independent or second-person review tests whether decision gate is complete, safe and traceable. |
| Exit result | Versioned decision gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 12 — Report

# 13.1  Audience and claim design

Audience and claim design is the controlled report activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to audience and claim design are approved or limitations are recorded. |
| Mandatory action | Tailor executive, governance, architecture, assessor and technical views while retaining scope, coverage, confidence and gates. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for audience and claim design. |
| Quality challenge | Independent or second-person review tests whether audience and claim design is complete, safe and traceable. |
| Exit result | Versioned audience and claim design output approved, rejected, conditioned or left Inconclusive. |

# 13.2  Integrated assessment narrative

Integrated assessment narrative is the controlled report activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to integrated assessment narrative are approved or limitations are recorded. |
| Mandatory action | Explain estate, relationships, authority, paths, controls, evidence, maturity, scores, findings and decisions without unsupported precision. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for integrated assessment narrative. |
| Quality challenge | Independent or second-person review tests whether integrated assessment narrative is complete, safe and traceable. |
| Exit result | Versioned integrated assessment narrative output approved, rejected, conditioned or left Inconclusive. |

# 13.3  Roadmap and validation plan

Roadmap and validation plan is the controlled report activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to roadmap and validation plan are approved or limitations are recorded. |
| Mandatory action | Sequence prerequisite and gate closure, assign owners, define evidence deliverables, dependencies, target state and retest. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for roadmap and validation plan. |
| Quality challenge | Independent or second-person review tests whether roadmap and validation plan is complete, safe and traceable. |
| Exit result | Versioned roadmap and validation plan output approved, rejected, conditioned or left Inconclusive. |

# 13.4  Report release gate

Report release gate is the controlled report activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to report release gate are approved or limitations are recorded. |
| Mandatory action | Quality reviewer confirms traceability, consistency, confidentiality, caveats, approvals and absence of prohibited claims. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for report release gate. |
| Quality challenge | Independent or second-person review tests whether report release gate is complete, safe and traceable. |
| Exit result | Versioned report release gate output approved, rejected, conditioned or left Inconclusive. |

# Phase 13 — Reassess

# 14.1  Trigger monitoring

Trigger monitoring is the controlled reassess activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to trigger monitoring are approved or limitations are recorded. |
| Mandatory action | Monitor model, prompt, data, identity, tool, provider, authority, architecture, threat, incident, obligation and ownership change. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for trigger monitoring. |
| Quality challenge | Independent or second-person review tests whether trigger monitoring is complete, safe and traceable. |
| Exit result | Versioned trigger monitoring output approved, rejected, conditioned or left Inconclusive. |

# 14.2  Impact triage

Impact triage is the controlled reassess activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to impact triage are approved or limitations are recorded. |
| Mandatory action | Determine affected objects, relationships, controls, evidence, paths, maturity, scores, decisions and report statements. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for impact triage. |
| Quality challenge | Independent or second-person review tests whether impact triage is complete, safe and traceable. |
| Exit result | Versioned impact triage output approved, rejected, conditioned or left Inconclusive. |

# 14.3  New run or amendment

New run or amendment is the controlled reassess activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to new run or amendment are approved or limitations are recorded. |
| Mandatory action | Create a new run for material state change; use bounded amendment only when prior scope and conclusions remain valid. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for new run or amendment. |
| Quality challenge | Independent or second-person review tests whether new run or amendment is complete, safe and traceable. |
| Exit result | Versioned new run or amendment output approved, rejected, conditioned or left Inconclusive. |

# 14.4  Closure and continuity gate

Closure and continuity gate is the controlled reassess activity that advances the assessment only when its entry condition, evidence record, quality challenge and exit result are satisfied.

| **Method field** | **Canonical requirement** |
| --- | --- |
| Entry condition | Prior phase outputs relevant to closure and continuity gate are approved or limitations are recorded. |
| Mandatory action | Link prior and current states, preserve historical conclusions, validate remediations and define the next review trigger. |
| Evidence record | Retain source, method, owner, date, scope, decision and limitations for closure and continuity gate. |
| Quality challenge | Independent or second-person review tests whether closure and continuity gate is complete, safe and traceable. |
| Exit result | Versioned closure and continuity gate output approved, rejected, conditioned or left Inconclusive. |

# 15.1  Interview method

Use a structured hypothesis and evidence agenda. Record role, scope, questions, statements, contradictions and follow-up; attestation remains E2 unless corroborated.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by interview method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.2  Document-review method

Check approval, version, owner, scope, currentness and implementation linkage; document existence does not prove operation.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by document-review method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.3  Technical-query method

Use authorized read-only identity and reproducible query where possible; record filters, tenant, environment, timestamp, completeness and errors.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by technical-query method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.4  Sampling method

Define population, selection, size, period and limitations. Risk-based, random, stratified, judgmental or complete sampling must be labelled accurately.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by sampling method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.5  Walkthrough method

Trace one representative transaction or lifecycle event across identity, data, model, agent, tool, approval, action and telemetry.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by walkthrough method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.6  Configuration-review method

Compare intended baseline, effective configuration, inherited settings, exceptions and runtime state for the exact environment and version.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by configuration-review method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.7  Safe active-test method

Execute only under approved rules of engagement, with test identity/data, expected outcome, stop conditions, restoration and evidence capture.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by safe active-test method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.8  Negative-test method

Attempt explicitly denied or out-of-scope behavior using authorized safe scenarios to validate enforcement and alerting.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by negative-test method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.9  Tabletop and simulation method

Exercise decisions, communications, containment, recovery and evidence using a realistic graph-grounded scenario without unsafe production effects.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by tabletop and simulation method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 15.10  Provider-evidence method

Bind attestations, reports, contracts, configurations and responsibilities to the exact service, tenant, period and customer control context.

| **Required record** | **Method requirement** |
| --- | --- |
| Objective | State the assertion tested by provider-evidence method. |
| Authorization | Confirm access, safety and data boundaries. |
| Procedure | Record repeatable steps and variants. |
| Evidence | Identify source, grade, scope and integrity. |
| Limitations | State what the method cannot establish. |
| Review | Obtain required technical or quality review. |

# 16.1  Observation and evidence gap

An observation is a factual condition without necessarily implying deficiency. An evidence gap identifies insufficient support for a material assertion.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Observation and evidence gap is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.2  Control deficiency

A control deficiency exists when applicable design, implementation or operation does not meet the canonical control objective.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Control deficiency is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.3  Path exposure

A path exposure describes a plausible or validated sequence to a material target under stated conditions, controls, evidence and confidence.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Path exposure is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.4  Nonconformity and compliance caution

Use nonconformity only against a defined applicable criterion. Do not call a framework mapping a legal compliance breach without authorized validation.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Nonconformity and compliance caution is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.5  Root-cause analysis

Distinguish immediate condition, systemic cause, contributing relationships, governance assumption and failed detection or containment.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Root-cause analysis is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.6  Remediation design

Define the target outcome and affected path or control; avoid vendor prescriptions unless implementation choice is in assessment scope.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Remediation design is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.7  Retest and closure

Require implementation evidence, representative retest, residual-path review, owner, date and independent closure where critical.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Retest and closure is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.8  Peer calibration

Assessors independently evaluate synthetic or approved cases, compare criteria and evidence interpretation, and retain unresolved disagreement.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Peer calibration is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.9  Quality-review protocol

Review scope fidelity, evidence sufficiency, method adherence, calculation, gates, consistency, claims, confidentiality and traceability.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Quality-review protocol is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# 16.10  Method exception

A deviation from this methodology requires rationale, authority, affected outputs, compensating review, expiry and transparent disclosure.

| **QA question** | **Pass condition** |
| --- | --- |
| Definition | Method exception is not conflated with a different result state. |
| Evidence | Material statements are linked to sufficient scoped evidence. |
| Graph context | Affected objects, relationships or paths are identified where relevant. |
| Decision effect | Gates, scores, maturity, findings and reporting are updated consistently. |
| Review | Reviewer can reconstruct and challenge the conclusion. |

# A.1  Assessment charter template

The charter controls purpose, authorization and decision use before work begins.

| **Field** | **Required content** |
| --- | --- |
| Decision purpose | Question, intended users and permitted use. |
| Assessment unit | Named boundary and population. |
| Scope | Environments, period, evidence window and exclusions. |
| Authority | Collection, access, testing and data-handling approvals. |
| Roles | Sponsor, owners, assessors, reviewers and decision authority. |
| Artifacts | Applicable versions of methodology components. |
| Deliverables | Required outputs, gates and release conditions. |

# A.2  Scope baseline schema

The scope baseline is the denominator for every coverage and conclusion claim.

| **Field** | **Required content** |
| --- | --- |
| scope_id | Stable identifier and version. |
| Unit | Enterprise, portfolio, system, use case, provider or path. |
| Population | Assets, identities, data, providers, controls and paths. |
| Boundaries | Business, technical, geographic, environmental and temporal. |
| Exclusions | Rationale, owner, expiry and claim limitation. |
| Sources | Authoritative denominators and coverage assumptions. |
| Changes | Version history and approval. |

# A.3  Assessment run schema

The run schema preserves reproducibility and historical state.

| **Field** | **Required content** |
| --- | --- |
| Identity | run_id, scope_id, methodology_versions. |
| Status | planned, active, paused, provisional, quality-reviewed, final or superseded. |
| Inputs | graph snapshot, evidence snapshot, controls, profiles and formulas. |
| Outputs | results, paths, maturity, scorecards, findings and decisions. |
| Review | assessor, reviewers, approvals and conflicts. |
| Temporal | start, evidence period, decision date and next trigger. |
| Linkage | prior run, amendments and supersession. |

# A.4  Finding schema

Findings remain evidence-linked, graph-aware and independently reviewable.

| **Field** | **Required content** |
| --- | --- |
| Identity | finding_id, title, type and status. |
| Criteria | Canonical control, method, policy or applicable obligation. |
| Condition | Observed and evidenced state. |
| Cause | Immediate and systemic contributors. |
| Context | Affected objects, relationships, paths and scope. |
| Consequence | Material outcome and uncertainty. |
| Evidence | References, grade, confidence and limitations. |
| Treatment | Owner, objective, milestones, evidence and retest. |

# A.5  Decision-log schema

Decisions are governed records, not edits to technical facts.

| **Field** | **Required content** |
| --- | --- |
| decision_id | Stable identifier. |
| Question | Exact decision being made. |
| Authority | Approver and delegated basis. |
| Inputs | Evidence, findings, paths, gates and alternatives. |
| Outcome | Approved, rejected, conditioned, accepted, deferred or escalated. |
| Conditions | Actions, owners, dates, expiry and monitoring. |
| Conflicts | Disclosures and challenge. |
| Supersession | Prior and later decisions. |

# A.6  Assessment report minimum content

The report package supports action without hiding limitations.

| **Field** | **Required content** |
| --- | --- |
| Executive conclusion | Six-domain profile, critical gates, confidence and key decisions. |
| Scope and method | Unit, population, period, exclusions, versions and procedures. |
| Estate and graph | Coverage, objects, relationships, boundaries and material paths. |
| Controls and evidence | Results, evidence grades, test coverage and uncertainty. |
| Maturity and scoring | Rule-based levels, scorecards, denominators and limitations. |
| Findings and decisions | Priorities, owners, dispositions and exceptions. |
| Roadmap | Prerequisites, target states, evidence and validation. |
| Limitations | No overclaim of completeness, compliance, safety or continuity. |

# A.7  Anti-gaming rules

The methodology resists behaviors that manufacture a stronger result than the evidence supports.

| **Field** | **Required content** |
| --- | --- |
| Selective scope | Disclose exclusions and prohibit generalization. |
| UNKNOWN suppression | Show uncertainty and coverage beside attainment. |
| Policy-only assurance | Require implementation and operating evidence. |
| Topology inflation | Validate conditions before stronger path state. |
| Average masking | Apply critical gates before aggregation. |
| Pilot inflation | Do not represent a pilot as enterprise maturity. |
| Acceptance reclassification | Do not reduce technical result because risk is accepted. |
| Premature closure | Require implementation and retest. |
| Tool authority | Do not treat platform output as automatically approved fact. |

# A.8  Known limitations

The method improves consistency but cannot eliminate uncertainty or professional judgment.

| **Field** | **Required content** |
| --- | --- |
| Discovery completeness | Use measured coverage and preserve blind spots. |
| Assessor judgment | Use calibration, evidence and review. |
| Rapid change | Trigger reassessment and version runs. |
| Provider opacity | Limit conclusions and retain UNKNOWN. |
| Statistical claims | Use qualified methods beyond this baseline where required. |
| Legal conclusions | Obtain authorized fact-specific advice. |
| Cross-organization comparison | Avoid ranking unlike scopes and methods. |

# A.9  Release acceptance checklist

All mandatory gates must close before public GitHub release.

| **Field** | **Required content** |
| --- | --- |
| Semantic integrity | No contradiction with artifacts #1-#6. |
| Lifecycle completeness | All thirteen phases have inputs, outputs and gates. |
| Safety | No control or method authorizes unsafe testing. |
| Evidence integrity | E0-E5, confidence, conflict and UNKNOWN are preserved. |
| Graph integrity | Nodes, edges, boundaries and paths use canonical semantics. |
| Determination integrity | Maturity, scoring and critical gates remain distinct. |
| QA | Independent methodology and AI security reviews recorded. |
| IP and confidentiality | Publication rights and sensitive content cleared. |
| Repository quality | Markdown, templates, schemas, changelog and contribution files validated. |

# A.10  Final doctrine and approval record

The Assessment Methodology converts the preceding artifacts into a controlled, repeatable and defensible operating process.

> **ASSESSMENT DOCTRINE** Scope before collection. Evidence before conclusion. Conditions before paths. Tests before effectiveness. Gates before averages. Review before release.

| **Field** | **Required content** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Chief product architecture review | Internal author-loop completed; independent review pending. |
| AI security architecture review | Internal author-loop completed; independent review pending. |
| Assessment-method review | Independent validation pending. |
| Employer / IP / confidentiality review | Pending. |
| Licence and trademark approval | Pending. |
| Public release | Not approved until mandatory gates close. |

AI Trust Graph Assessment Methodology | Version 1.0 | Public-release candidate
