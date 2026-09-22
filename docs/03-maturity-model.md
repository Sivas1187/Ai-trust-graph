[← Back to methodology index](../README.md)

# AI Trust Graph — Maturity Model

*Version 1.0 | Evidence-gated maturity across discovery, trust, authority, validation, governance and resilience*

> **PURPOSE** Define what increasing organizational capability looks like, how maturity is evidenced, how critical weaknesses constrain claims, and how domain-specific progress is represented without hiding uncertainty.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Depends on | AI Trust Graph Manifesto v1.0 and Core Conceptual Model v1.1 |
| Assessment unit | Enterprise, portfolio, business unit, platform, system or use case with explicit scope |
| Scale | M1 Initial; M2 Repeatable; M3 Defined; M4 Managed; M5 Adaptive |
| Product boundary | ExposureGraph implementation and commercial logic excluded |

# 0.1  Authority, scope and publication boundary

This model defines public maturity semantics for the AI Trust Graph methodology. It does not certify compliance, replace legal analysis, guarantee risk reduction, or prescribe one technology implementation.

Use of this model requires an explicit assessment boundary, period, evidence snapshot, decision purpose and applicable versions of the Manifesto, Core Conceptual Model, ontology and control library.

> **PUBLICATION SAFEGUARD** Complete employer, confidentiality, copyright, trademark, licence and third-party reference review before public release.

| **Boundary** | **Rule** |
| --- | --- |
| Public methodology | Level definitions, capability criteria, evidence gates, determination and reporting rules. |
| Private product | ExposureGraph algorithms, automation, ranking, connector design, roadmap and commercial packaging. |
| Assessment claim | Limited to the declared scope, evidence and review date. |
| No implied certification | A maturity result is an assessment conclusion, not statutory or standards certification. |

# 0.2  Position in the artifact stack

The Manifesto establishes why the methodology exists. The Core Conceptual Model defines its theory. This Maturity Model defines progressive capability states. Later artifacts translate these states into controls, tests, scoring and assessor procedures.

Maturity describes institutional capability and repeatability. It is not identical to risk, compliance, control effectiveness or evidence confidence.

> **CANONICAL ARTIFACT MAP** Repository-wide authority, dependency order, bundle versions and content pins are governed by [METHODOLOGY_MANIFEST.md](../METHODOLOGY_MANIFEST.md). This artifact does not define a competing precedence chain.

| **Concept** | **Distinct meaning** |
| --- | --- |
| Maturity | Institutionalized capability and repeatability within scope. |
| Control effectiveness | Whether a specific control operates as intended. |
| Risk | Potential consequence and uncertainty in context. |
| Compliance | Satisfaction of applicable legal or normative obligations. |
| Evidence confidence | Strength of support for a specific assertion. |

# 0.3  Design principles

The model is evidence-gated, domain-specific, path-aware and resistant to false precision. Organizations receive a maturity profile rather than one flattering number.

Progression is cumulative. Higher maturity builds on lower-level foundations. Where a lower-level prerequisite is absent, the capability cannot be rated at a higher level merely because advanced tooling exists.

| **Principle** | **Implication** |
| --- | --- |
| Evidence before claim | A level requires sufficient evidence, not aspiration or policy alone. |
| Cumulative progression | Higher levels include the material requirements of lower levels. |
| Critical-gate protection | A critical failure can cap a domain or overall claim. |
| Profile over average | Domain strengths and weaknesses remain visible. |
| UNKNOWN preserved | Insufficient evidence is not scored as mature or immature. |
| Scope fidelity | Results do not generalize beyond assessed systems and period. |
| Technology neutral | Equivalent outcomes may be achieved through different designs. |

# 0.4  Normative language and result states

MUST and MUST NOT define conformance requirements. SHOULD describes a preferred route that may be replaced by a documented equivalent. MAY describes an optional implementation choice.

UNKNOWN remains UNKNOWN until resolved by sufficient evidence and accountable review. UNKNOWN, Not Assessed, Not Applicable and Inconclusive are information states, not maturity levels. A maturity level is assigned only when the applicable criteria and evidence threshold are met.

| **State** | **Usage** |
| --- | --- |
| UNKNOWN | Evidence is insufficient or conflicting for a material assertion. |
| Not Assessed | The capability was out of assessment activity, though possibly in scope. |
| Not Applicable | Documented rationale shows the capability does not apply. |
| Inconclusive | Assessment activity occurred but cannot support a level. |
| Provisional | A draft rating awaits quality review or evidence closure. |
| Final within scope | Required review, evidence and gates are complete for the stated scope. |

# 1.1  M1 Initial

Capability is reactive, person-dependent or poorly bounded. Material assets, relationships, authority or control states may be UNKNOWN.

Ad hoc practices, inconsistent ownership, fragmented records and reliance on attestation.

> **EVIDENCE FLOOR** E1-E2 may describe current practice, but cannot support claims of operating effectiveness.

| **Required characteristic** | **Interpretation** |
| --- | --- |
| Institutionalization | Person-dependent |
| Coverage | Unbounded or unknown |
| Decision quality | Reactive |
| Assurance | Attestation-led |

# 1.2  M2 Repeatable

Basic ownership, registers and recurring procedures exist for selected high-priority scope. Execution remains uneven and may depend on manual coordination.

Documented recurring activities, named owners, initial thresholds, issue tracking and basic review cadence.

> **EVIDENCE FLOOR** E2-E3 normally supports design and claimed practice; material technical claims remain unverified.

| **Required characteristic** | **Interpretation** |
| --- | --- |
| Institutionalization | Recurring practice |
| Coverage | Priority scope |
| Decision quality | Repeatable |
| Assurance | Document-led |

# 1.3  M3 Defined

Enterprise or scoped standards, canonical records, decision rights and lifecycle gates are established and applied consistently.

Approved methods, integrated registers, defined graph semantics, role-based responsibilities and controlled exceptions.

> **EVIDENCE FLOOR** E3 plus representative E4 evidence supports implementation across sampled scope.

| **Required characteristic** | **Interpretation** |
| --- | --- |
| Institutionalization | Defined standard |
| Coverage | Defined scope |
| Decision quality | Governed |
| Assurance | Implementation-led |

# 1.4  M4 Managed

Capability performance, control operation, coverage, exceptions and material paths are measured and actively managed using current evidence.

Metrics with denominators, tested controls, graph/path analysis, trend review and risk-based assurance.

> **EVIDENCE FLOOR** Representative E4-E5 evidence supports operation; critical controls have test evidence.

| **Required characteristic** | **Interpretation** |
| --- | --- |
| Institutionalization | Measured operation |
| Coverage | Measured scope |
| Decision quality | Evidence-managed |
| Assurance | Validation-led |

# 1.5  M5 Adaptive

Capability continuously senses material change, learns from outcomes and adjusts controls or decisions with governed automation and independent challenge.

Change-triggered reassessment, validated automation, predictive indicators, simulation, tested resilience and feedback into design.

> **EVIDENCE FLOOR** Current E5 evidence demonstrates repeated operation and adaptation; automation decisions remain reviewable.

| **Required characteristic** | **Interpretation** |
| --- | --- |
| Institutionalization | Adaptive learning |
| Coverage | Continuously monitored scope |
| Decision quality | Change-adaptive |
| Assurance | Outcome-and-change-led |

# 1.6  Cumulative and non-compensating logic

A higher-level feature does not compensate for a missing lower-level foundation. For example, continuous telemetry does not create M5 maturity if assets lack accountable ownership or if authority boundaries are undefined.

Assessment therefore uses a cumulative test for each capability and a critical-gate test for each domain. Scores may support analysis later, but the level determination remains rule-based.

| **Rule** | **Effect** |
| --- | --- |
| Cumulative test | All applicable material criteria at the claimed level and prerequisites are satisfied. |
| Material exception | A bounded exception may be accepted only with owner, rationale, compensating control, expiry and evidence. |
| Critical failure | Caps the domain at the stated level regardless of other strengths. |
| Partial coverage | Reported as a split profile or lower level, not averaged into a higher claim. |
| Advanced pilot | Reported as an emerging practice, not enterprise maturity. |

# 1.7  Evidence gates and confidence

Evidence grade and maturity level answer different questions. Evidence grade describes support for an assertion; maturity describes institutional capability. A mature claim requires evidence appropriate to the claim.

Policy, interviews and screenshots may support design or claimed practice. They do not by themselves prove operating effectiveness, sustained coverage, tested containment or adaptive behavior.

| **Claim** | **Minimum expected support** |
| --- | --- |
| M1 characterization | E1-E2 plus explicit UNKNOWNs and scope limitations. |
| M2 recurring practice | E2-E3 showing repeated execution for defined priority scope. |
| M3 defined implementation | E3 with representative E4 corroboration across sampled scope. |
| M4 managed operation | E4-E5 for critical controls, metrics and path conclusions. |
| M5 adaptive operation | Repeated E5 evidence, change records, outcome review and validated automation. |

# 1.8  Critical gates

Critical gates prevent a high average from masking a foundational failure. Gates are evaluated for applicability and materiality, then reported separately from capability maturity.

Domain-specific gates appear later. The following universal gates apply whenever material to the assessment scope.

| **Gate** | **Potential cap** |
| --- | --- |
| No accountable owner for a material AI system or high-impact decision | Overall/domain maturity cannot exceed M1 for affected scope. |
| Acting identity or effective authority for high-impact action is UNKNOWN | Authority domain cannot exceed M1; affected system claim remains provisional. |
| No evidence-backed inventory denominator or scope | Discovery cannot exceed M2. |
| No technically enforceable approval or containment for irreversible high-impact action | Authority/resilience cannot exceed M2. |
| Material path called controlled without representative validation | Validation cannot exceed M2. |
| Point-in-time evidence represented as continuous assurance | Overall adaptive claim prohibited. |
| Unresolved compliance applicability represented as compliant | Governance claim invalidated, not merely reduced. |

# 1.9  Assessment unit and profile

A maturity result applies to a declared assessment unit. The unit may be an enterprise, portfolio, business unit, platform, system or use case. Mixed populations should be stratified when practices or risk materially differ.

The primary output is a six-domain profile plus capability-level results, confidence, gates, exceptions and evidence coverage.

| **Profile element** | **Required content** |
| --- | --- |
| Assessment unit | Named boundary, environments, population and period. |
| Domain level | M1-M5 or a non-level result state. |
| Capability distribution | Strongest sustained level for each capability. |
| Evidence confidence | Quality and coverage supporting the result. |
| Critical gates | Open, passed, not applicable or unresolved. |
| Exceptions | Scope, owner, expiry and compensating controls. |
| Target profile | Risk- and strategy-based target, not automatically M5. |

# 2.0  Discovery and AIBOM

Make the AI estate, ownership, dependencies, shadow AI and composition measurable.

For Discovery and AIBOM, the domain result is the highest common level sustained by its applicable capabilities after evidence and critical-gate review; capability variation remains explicit.

| **Capability** | **What it measures** |
| --- | --- |
| D1.1 | Discovery scope and source coverage |
| D1.2 | Canonical inventory and ownership |
| D1.3 | Shadow AI and unmanaged use |
| D1.4 | AIBOM and dependency lineage |
| D1.5 | Unknown, orphan and lifecycle management |
| D1.6 | Discovery evidence and assurance |

# 2.1  D1.1 Discovery scope and source coverage

D1.1 evaluates discovery scope and source coverage within the declared Discovery and AIBOM scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Known scope and signals are ad hoc. |
| M2 Repeatable | Priority sources and business areas are inventoried manually. |
| M3 Defined | Authorized source catalogue and recurring discovery process cover defined scope. |
| M4 Managed | Coverage denominators, blind spots, freshness and detection performance are measured. |
| M5 Adaptive | Change-aware multi-source discovery adapts to new services and validates coverage continuously. |

# 2.2  D1.2 Canonical inventory and ownership

D1.2 evaluates canonical inventory and ownership within the declared Discovery and AIBOM scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Records are fragmented; ownership often UNKNOWN. |
| M2 Repeatable | Priority assets have basic records and named contacts. |
| M3 Defined | Canonical IDs, types, environments, owners, criticality and lifecycle are defined. |
| M4 Managed | Ownership and inventory quality are corroborated, sampled and measured. |
| M5 Adaptive | Correlation and attribution adapt to change with reviewed automation and confidence queues. |

# 2.3  D1.3 Shadow AI and unmanaged use

D1.3 evaluates shadow ai and unmanaged use within the declared Discovery and AIBOM scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Unapproved use is handled reactively. |
| M2 Repeatable | Selected network, procurement or reporting signals are reviewed. |
| M3 Defined | Authorized multi-source detection and proportionate triage are defined. |
| M4 Managed | Detection, false positives, containment and approved alternatives are measured. |
| M5 Adaptive | Emerging-use signals trigger adaptive policy, education, approvals and reassessment. |

# 2.4  D1.4 AIBOM and dependency lineage

D1.4 evaluates aibom and dependency lineage within the declared Discovery and AIBOM scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Composition is undocumented or model-only. |
| M2 Repeatable | Material systems have partial manual component lists. |
| M3 Defined | Versioned AIBOM covers model, data, prompt, agent, tool, identity, provider and runtime dependencies. |
| M4 Managed | AIBOM is reconciled with deployed artifacts and differences are investigated. |
| M5 Adaptive | Material composition change is detected, validated and linked to tests and decisions. |

# 2.5  D1.5 Unknown, orphan and lifecycle management

D1.5 evaluates unknown, orphan and lifecycle management within the declared Discovery and AIBOM scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Unknown and orphan assets accumulate without ownership. |
| M2 Repeatable | Priority orphan records are manually resolved. |
| M3 Defined | Ageing, transfer, exception and retirement processes are defined. |
| M4 Managed | Orphan, stale, exposed and dormant assets are measured and tracked to closure. |
| M5 Adaptive | Lifecycle actions are change-driven, validated and feed discovery-quality improvement. |

# 2.6  D1.6 Discovery evidence and assurance

D1.6 evaluates discovery evidence and assurance within the declared Discovery and AIBOM scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Inventory relies mainly on questionnaires. |
| M2 Repeatable | Owners periodically attest selected records. |
| M3 Defined | Evidence lineage, confidence and review status are defined for inventory assertions. |
| M4 Managed | Independent samples test coverage, attribution and freshness. |
| M5 Adaptive | Discovery assurance learns from misses, incidents and seeded tests and adjusts source strategy. |

# 2.7  D1 Critical gates and evidence

These gates protect the integrity of the Discovery and AIBOM maturity claim. Applicability and materiality must be documented.

| **Critical condition** | **Effect** |
| --- | --- |
| No defined assessment scope or inventory denominator | Cap at M1. |
| Material production systems lack owner or environment | Affected scope cap at M1. |
| Claims of continuous discovery without freshness and coverage evidence | M5 prohibited. |

# 3.0  Trust and Privilege Paths

Represent and analyze trust, dependency, identity inheritance, boundaries and material paths.

For Trust and Privilege Paths, the domain result is the highest common level sustained by its applicable capabilities after evidence and critical-gate review; capability variation remains explicit.

| **Capability** | **What it measures** |
| --- | --- |
| D2.1 | Trust relationship representation |
| D2.2 | Identity and privilege path analysis |
| D2.3 | Boundary and provider trust |
| D2.4 | Path identification and prioritization |
| D2.5 | Control breakpoint analysis |
| D2.6 | Trust graph quality and governance |

# 3.1  D2.1 Trust relationship representation

D2.1 evaluates trust relationship representation within the declared Trust and Privilege Paths scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Trust is described informally or assumed. |
| M2 Repeatable | Priority systems document selected dependencies and trust boundaries. |
| M3 Defined | Canonical typed relationships include basis, scope, owner, conditions and evidence. |
| M4 Managed | Material trust paths and boundary crossings are measured and reviewed. |
| M5 Adaptive | Trust drift and inherited-risk signals trigger adaptive reassessment. |

# 3.2  D2.2 Identity and privilege path analysis

D2.2 evaluates identity and privilege path analysis within the declared Trust and Privilege Paths scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Access is reviewed object by object. |
| M2 Repeatable | Priority privileged identities and roles are listed. |
| M3 Defined | Identity, role, delegation and effective permission relationships are graph-linked. |
| M4 Managed | Direct, inherited and chained privilege paths to high-value targets are validated. |
| M5 Adaptive | Privilege-path change and abnormal propagation are continuously assessed. |

# 3.3  D2.3 Boundary and provider trust

D2.3 evaluates boundary and provider trust within the declared Trust and Privilege Paths scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Provider and tenant boundaries are implicit. |
| M2 Repeatable | Major external providers and network boundaries are recorded. |
| M3 Defined | Identity, data, runtime, provider and consequence boundaries have owners and policy. |
| M4 Managed | Cross-boundary paths, enforcement and evidence discontinuities are tested. |
| M5 Adaptive | Provider and boundary changes update trust decisions and resilience scenarios automatically with review. |

# 3.4  D2.4 Path identification and prioritization

D2.4 evaluates path identification and prioritization within the declared Trust and Privilege Paths scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Findings are isolated lists. |
| M2 Repeatable | Analysts manually identify obvious paths. |
| M3 Defined | Path records include start, traversal, conditions, target, evidence and controls. |
| M4 Managed | Material paths are prioritized by authority, consequence, evidence and breakpoints. |
| M5 Adaptive | Path analytics learn from incidents, validation and graph drift without hiding uncertainty. |

# 3.5  D2.5 Control breakpoint analysis

D2.5 evaluates control breakpoint analysis within the declared Trust and Privilege Paths scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Controls are mapped to assets or frameworks only. |
| M2 Repeatable | Selected findings identify likely mitigations. |
| M3 Defined | Controls map to nodes, relationships, boundaries or paths. |
| M4 Managed | Breakpoint effectiveness and residual or alternate paths are validated. |
| M5 Adaptive | Optimization compares control leverage, resilience, feasibility and emergent alternate paths. |

# 3.6  D2.6 Trust graph quality and governance

D2.6 evaluates trust graph quality and governance within the declared Trust and Privilege Paths scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Graph content is unreviewed or tool-generated. |
| M2 Repeatable | Analysts review selected graph outputs manually. |
| M3 Defined | Candidate, approved and rejected assertions follow controlled review and versioning. |
| M4 Managed | Coverage, confidence, stale edges, conflicts and reviewer quality are measured. |
| M5 Adaptive | Graph quality adapts through regression tests, community governance and observed false-positive or missed-path learning. |

# 3.7  D2 Critical gates and evidence

These gates protect the integrity of the Trust and Privilege Paths maturity claim. Applicability and materiality must be documented.

| **Critical condition** | **Effect** |
| --- | --- |
| Material path asserted from topology alone | Path conclusion invalid. |
| Trust relationships lack basis, scope or evidence | Cap at M2. |
| Controlled path without validation and residual-path review | M4-M5 prohibited. |

# 4.0  Authority Governance

Bound what humans and machine actors can access, infer, approve, execute, modify, disclose or transact.

For Authority Governance, the domain result is the highest common level sustained by its applicable capabilities after evidence and critical-gate review; capability variation remains explicit.

| **Capability** | **What it measures** |
| --- | --- |
| D3.1 | Authority inventory and taxonomy |
| D3.2 | Delegation and identity context |
| D3.3 | Human approval and oversight |
| D3.4 | Authority amplification control |
| D3.5 | Revocation and containment |
| D3.6 | Authority decision governance |

# 4.1  D3.1 Authority inventory and taxonomy

D3.1 evaluates authority inventory and taxonomy within the declared Authority Governance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Effective authority is UNKNOWN or inferred from job titles. |
| M2 Repeatable | Priority tools and permissions are manually documented. |
| M3 Defined | Canonical action classes, targets, scope, conditions, duration and identities are registered. |
| M4 Managed | Effective authority is validated against runtime, permissions and representative actions. |
| M5 Adaptive | Authority changes and amplification are continuously detected and governed. |

# 4.2  D3.2 Delegation and identity context

D3.2 evaluates delegation and identity context within the declared Authority Governance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Delegation is implicit or uses shared identity. |
| M2 Repeatable | Basic service accounts and approval roles are documented. |
| M3 Defined | Grantor, delegate, scope, duration, approval and revocation are defined; user context rules are explicit. |
| M4 Managed | Delegation chains and identity preservation are tested across tool and retrieval paths. |
| M5 Adaptive | Policy adapts to observed delegation drift, misuse and agent composition changes. |

# 4.3  D3.3 Human approval and oversight

D3.3 evaluates human approval and oversight within the declared Authority Governance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Human oversight is a policy statement. |
| M2 Repeatable | Manual approval exists for selected high-risk actions. |
| M3 Defined | Approval criteria, authority, evidence, conflict handling and technical enforcement are designed. |
| M4 Managed | Meaningful oversight is tested for information quality, decision freedom, timing and stop capability. |
| M5 Adaptive | Oversight design adapts using outcome, override, exception and automation-bias evidence. |

# 4.4  D3.4 Authority amplification control

D3.4 evaluates authority amplification control within the declared Authority Governance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Amplification is not assessed. |
| M2 Repeatable | Obvious privileged-tool risks are reviewed manually. |
| M3 Defined | Identity, tool, data, workflow, temporal, trust and blast-radius amplification are assessed. |
| M4 Managed | Amplification transitions, guardrails, limits and residual paths are validated. |
| M5 Adaptive | Adaptive constraints respond to changing fan-out, value, state and consequence. |

# 4.5  D3.5 Revocation and containment

D3.5 evaluates revocation and containment within the declared Authority Governance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Removal depends on manual account changes. |
| M2 Repeatable | Basic token or account revocation procedures exist. |
| M3 Defined | Revocation, tool disconnection, session invalidation and kill mechanisms are defined by authority class. |
| M4 Managed | High-impact revocation and containment are tested with evidence of effective removal. |
| M5 Adaptive | Change-aware containment is rehearsed, monitored and improved from exercises and incidents. |

# 4.6  D3.6 Authority decision governance

D3.6 evaluates authority decision governance within the declared Authority Governance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Owners and exceptions are unclear. |
| M2 Repeatable | Selected grants have named approvers. |
| M3 Defined | Decision rights, exceptions, expiry, compensating controls and recertification are standardized. |
| M4 Managed | Grant quality, exception age, policy violations and recertification are measured. |
| M5 Adaptive | Decision policy adapts to amplification, incidents, outcomes and changing risk appetite. |

# 4.7  D3 Critical gates and evidence

These gates protect the integrity of the Authority Governance maturity claim. Applicability and materiality must be documented.

| **Critical condition** | **Effect** |
| --- | --- |
| High-impact acting identity or authority UNKNOWN | Cap at M1. |
| Irreversible action lacks enforceable approval or containment | Cap at M2. |
| Adaptive authority without reviewable policy and evidence | M5 prohibited. |

# 5.0  AI Security Validation

Validate architecture, controls and material paths through authorized, reproducible and safe testing.

For AI Security Validation, the domain result is the highest common level sustained by its applicable capabilities after evidence and critical-gate review; capability variation remains explicit.

| **Capability** | **What it measures** |
| --- | --- |
| D4.1 | Validation strategy and scope |
| D4.2 | Threat modeling and path hypotheses |
| D4.3 | Rules of engagement and safety |
| D4.4 | Control effectiveness testing |
| D4.5 | Finding quality and closure |
| D4.6 | Validation assurance and independence |

# 5.1  D4.1 Validation strategy and scope

D4.1 evaluates validation strategy and scope within the declared AI Security Validation scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Testing is ad hoc or model-only. |
| M2 Repeatable | Annual or pre-launch checklists cover selected systems. |
| M3 Defined | Risk-based validation spans models, agents, RAG, MCP, tools, identity, infrastructure and supply chain. |
| M4 Managed | Coverage follows material paths, authority and critical controls with measured gaps. |
| M5 Adaptive | Validation priorities adapt to threats, change, incidents and observed control drift. |

# 5.2  D4.2 Threat modeling and path hypotheses

D4.2 evaluates threat modeling and path hypotheses within the declared AI Security Validation scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Threats are generic lists. |
| M2 Repeatable | Workshops identify selected misuse cases. |
| M3 Defined | System-specific threats map to graph objects, start conditions, paths and consequences. |
| M4 Managed | Hypotheses are prioritized and validated against current evidence and architecture. |
| M5 Adaptive | Threat models update from telemetry, emerging techniques and graph change with human review. |

# 5.3  D4.3 Rules of engagement and safety

D4.3 evaluates rules of engagement and safety within the declared AI Security Validation scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Testing authority and safety are inconsistent. |
| M2 Repeatable | Basic written authorization exists for major tests. |
| M3 Defined | Scope, identities, data, prohibited actions, stop conditions and restoration are standardized. |
| M4 Managed | Adherence, exceptions, unintended effects and environment isolation are monitored. |
| M5 Adaptive | Safety controls and test environments improve from exercises, incidents and near misses. |

# 5.4  D4.4 Control effectiveness testing

D4.4 evaluates control effectiveness testing within the declared AI Security Validation scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Policy or configuration review is treated as effectiveness. |
| M2 Repeatable | Selected controls receive manual checks. |
| M3 Defined | Design, implementation, operation and validation states are separated with reproducible procedures. |
| M4 Managed | Critical breakpoints have representative E5 tests and residual-path analysis. |
| M5 Adaptive | Regression, simulation and controlled automation adapt tests after material change. |

# 5.5  D4.5 Finding quality and closure

D4.5 evaluates finding quality and closure within the declared AI Security Validation scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Findings are narrative and weakly evidenced. |
| M2 Repeatable | Templates and severity labels are used. |
| M3 Defined | Findings link criteria, condition, cause, path, evidence, confidence and remediation objective. |
| M4 Managed | Closure requires current implementation evidence and independent retest. |
| M5 Adaptive | Recurring causes and failed remediations change design standards and validation strategy. |

# 5.6  D4.6 Validation assurance and independence

D4.6 evaluates validation assurance and independence within the declared AI Security Validation scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Developers self-assess their own systems. |
| M2 Repeatable | Independent review occurs for selected high-risk launches. |
| M3 Defined | Independence, competence, quality review and retained test records follow defined policy. |
| M4 Managed | Assessor performance, coverage and reproducibility are measured. |
| M5 Adaptive | Independent challenge and cross-team calibration continuously improve methods and thresholds. |

# 5.7  D4 Critical gates and evidence

These gates protect the integrity of the AI Security Validation maturity claim. Applicability and materiality must be documented.

| **Critical condition** | **Effect** |
| --- | --- |
| Testing lacks authorization or safety constraints | Validation result invalid. |
| Operating effectiveness claimed from policy/interview evidence | Cap at M2. |
| Closure without representative retest | Closed status invalid. |

# 6.0  AI Governance and Assurance

Connect purpose, accountability, risk tiering, policy, obligations, decisions, exceptions and evidence.

For AI Governance and Assurance, the domain result is the highest common level sustained by its applicable capabilities after evidence and critical-gate review; capability variation remains explicit.

| **Capability** | **What it measures** |
| --- | --- |
| D5.1 | Strategy, policy and risk appetite |
| D5.2 | Use-case intake and tiering |
| D5.3 | Decision rights and accountability |
| D5.4 | Applicability and obligations |
| D5.5 | Exceptions and risk acceptance |
| D5.6 | Assurance, reporting and literacy |

# 6.1  D5.1 Strategy, policy and risk appetite

D5.1 evaluates strategy, policy and risk appetite within the declared AI Governance and Assurance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | AI use is reactive and governed by generic policy. |
| M2 Repeatable | Basic acceptable-use policy and leadership ownership exist. |
| M3 Defined | Risk appetite, prohibited use, autonomy, impact and evidence thresholds are defined. |
| M4 Managed | Decisions and exceptions are measured against thresholds and actual system behavior. |
| M5 Adaptive | Policy and appetite adapt to outcomes, incidents, regulation and portfolio change. |

# 6.2  D5.2 Use-case intake and tiering

D5.2 evaluates use-case intake and tiering within the declared AI Governance and Assurance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Use cases are discovered after deployment. |
| M2 Repeatable | Major projects register before launch. |
| M3 Defined | All material pilots and production uses have purpose, owner, affected stakeholders, risk tier and approval. |
| M4 Managed | Registers reconcile with discovery; tiering accuracy and change triggers are tested. |
| M5 Adaptive | Intake adapts to new AI forms, observed misuse and evolving obligations. |

# 6.3  D5.3 Decision rights and accountability

D5.3 evaluates decision rights and accountability within the declared AI Governance and Assurance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Responsibilities overlap or remain informal. |
| M2 Repeatable | Committees and owners exist for selected use cases. |
| M3 Defined | Business, technical, data, security, privacy, legal, operations and validation decisions are assigned. |
| M4 Managed | Decision quality, conditions, conflicts, delays and closure are measured. |
| M5 Adaptive | Operating model adapts using outcome reviews and independent challenge. |

# 6.4  D5.4 Applicability and obligations

D5.4 evaluates applicability and obligations within the declared AI Governance and Assurance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Framework mappings are treated as compliance. |
| M2 Repeatable | Legal review occurs for selected high-risk uses. |
| M3 Defined | Roles, jurisdictions, sectors, effective dates and obligations are recorded by use case and entity. |
| M4 Managed | Applicability is validated against contracts, data flows, deployment and users. |
| M5 Adaptive | Change in law, provider, geography or purpose triggers governed reassessment. |

# 6.5  D5.5 Exceptions and risk acceptance

D5.5 evaluates exceptions and risk acceptance within the declared AI Governance and Assurance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Waivers are informal or permanent. |
| M2 Repeatable | Basic exception records and approvers exist. |
| M3 Defined | Scope, rationale, residual risk, compensating controls, authority, expiry and remediation are mandatory. |
| M4 Managed | Age, concentration, repeated causes and compensating-control operation are measured. |
| M5 Adaptive | Exception intelligence drives policy, architecture and control redesign. |

# 6.6  D5.6 Assurance, reporting and literacy

D5.6 evaluates assurance, reporting and literacy within the declared AI Governance and Assurance scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Reporting is activity-based and training generic. |
| M2 Repeatable | Selected dashboards and awareness courses exist. |
| M3 Defined | Assurance plans, role-based literacy and standard decision reports are defined. |
| M4 Managed | Executives receive evidence, gates, trends, confidence and limitations; competence is assessed. |
| M5 Adaptive | Assurance and learning adapt to decisions, incidents, role performance and portfolio risk. |

# 6.7  D5 Critical gates and evidence

These gates protect the integrity of the AI Governance and Assurance maturity claim. Applicability and materiality must be documented.

| **Critical condition** | **Effect** |
| --- | --- |
| Material use case has no accountable owner | Cap at M1. |
| Compliance claimed from framework mapping alone | Governance claim invalid. |
| High-risk exception lacks authority, expiry or compensating control | Cap at M2. |

# 7.0  Operational Resilience

Observe, contain, investigate, recover and learn from AI failure, compromise and unsafe action.

For Operational Resilience, the domain result is the highest common level sustained by its applicable capabilities after evidence and critical-gate review; capability variation remains explicit.

| **Capability** | **What it measures** |
| --- | --- |
| D6.1 | Observability and attribution |
| D6.2 | Detection and triage |
| D6.3 | Containment and kill mechanisms |
| D6.4 | Recovery, rollback and compensation |
| D6.5 | Incident reconstruction and evidence |
| D6.6 | Exercises, learning and resilience governance |

# 7.1  D6.1 Observability and attribution

D6.1 evaluates observability and attribution within the declared Operational Resilience scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Material AI actions cannot be reconstructed. |
| M2 Repeatable | Basic application and provider logging exists. |
| M3 Defined | Prompt, retrieval, identity, tool, approval, action and outcome telemetry requirements are defined. |
| M4 Managed | Coverage, integrity, retention, detection and attribution are validated for material paths. |
| M5 Adaptive | Telemetry adapts to new agents, tools and failure modes; blind spots trigger control redesign. |

# 7.2  D6.2 Detection and triage

D6.2 evaluates detection and triage within the declared Operational Resilience scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | AI-specific events rely on user reports. |
| M2 Repeatable | Selected alerts and support procedures exist. |
| M3 Defined | AI event taxonomy, severity, ownership and triage playbooks are integrated with incident response. |
| M4 Managed | Detection quality, false positives, time to triage and material-path coverage are measured. |
| M5 Adaptive | Detection adapts using incidents, threat intelligence, simulation and graph drift. |

# 7.3  D6.3 Containment and kill mechanisms

D6.3 evaluates containment and kill mechanisms within the declared Operational Resilience scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Containment is improvised during incidents. |
| M2 Repeatable | Manual account disablement or service shutdown is documented. |
| M3 Defined | Agent, identity, tool, provider, data and workflow containment options are defined and authorized. |
| M4 Managed | High-impact containment is tested for speed, completeness, independence and side effects. |
| M5 Adaptive | Containment automatically proposes or enforces bounded actions under governed policy and review. |

# 7.4  D6.4 Recovery, rollback and compensation

D6.4 evaluates recovery, rollback and compensation within the declared Operational Resilience scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Recovery focuses only on infrastructure uptime. |
| M2 Repeatable | Backups and manual rollback exist for selected components. |
| M3 Defined | Recovery covers data, prompts, models, permissions, queues, transactions and business state. |
| M4 Managed | Recovery objectives, integrity, rollback and compensation are tested end to end. |
| M5 Adaptive | Recovery strategies adapt to dependency change, exercise results and residual systemic risk. |

# 7.5  D6.5 Incident reconstruction and evidence

D6.5 evaluates incident reconstruction and evidence within the declared Operational Resilience scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Evidence is incomplete or collected manually after the event. |
| M2 Repeatable | Major incidents retain selected logs and decisions. |
| M3 Defined | Versioned graph, evidence, timeline, identities, actions, approvals and affected assets are reconstructable. |
| M4 Managed | Reconstruction completeness and chain of custody are tested in exercises and incidents. |
| M5 Adaptive | Forensic readiness evolves with new architectures, providers and legal requirements. |

# 7.6  D6.6 Exercises, learning and resilience governance

D6.6 evaluates exercises, learning and resilience governance within the declared Operational Resilience scope. Its result is cumulative, evidence-gated and constrained by applicable critical gates.

| **Level** | **Capability descriptor** |
| --- | --- |
| M1 Initial | Exercises are rare and technical only. |
| M2 Repeatable | Tabletops cover selected high-risk scenarios. |
| M3 Defined | Scenario library covers misuse, compromise, provider outage, unsafe action and control failure with owners. |
| M4 Managed | Exercises measure containment, recovery, decisions, communications and residual paths. |
| M5 Adaptive | Lessons systematically update architecture, policy, training, controls, graph assumptions and target maturity. |

# 7.7  D6 Critical gates and evidence

These gates protect the integrity of the Operational Resilience maturity claim. Applicability and materiality must be documented.

| **Critical condition** | **Effect** |
| --- | --- |
| Material actions cannot be attributed or reconstructed | Cap at M1. |
| High-impact action has no tested containment | Cap at M2. |
| Adaptive resilience claimed without repeated exercises and current evidence | M5 prohibited. |

# 8.1  Capability-level determination

Each capability is assessed from M1 upward. The assigned level is the highest level for which all applicable material criteria and prerequisites are supported. Criteria at higher levels may be recorded as emerging strengths without raising the result.

Where evidence is insufficient, assign UNKNOWN or Inconclusive rather than forcing M1. M1 is a positive characterization of an initial capability state, not a synonym for missing information.

| **Step** | **Determination action** |
| --- | --- |
| 1 | Confirm scope, applicability and materiality. |
| 2 | Collect and grade evidence for each level criterion. |
| 3 | Test cumulative prerequisites from M1 upward. |
| 4 | Apply capability and domain critical gates. |
| 5 | Record the highest sustained level, confidence and exceptions. |
| 6 | Quality-review the rationale and evidence traceability. |

# 8.2  Domain-level determination

The domain result is the highest common level sustained by all applicable mandatory capabilities after gate review. This conservative rule protects against averaging away a material weakness.

An organization may additionally report a capability distribution, such as four capabilities at M4 and two at M2. The domain result remains M2 unless an approved profile method is explicitly used for a non-conformance analysis.

> **NO AVERAGING RULE** Arithmetic averages may support planning, but they must not replace the rule-based domain maturity result.

| **Condition** | **Treatment** |
| --- | --- |
| One applicable capability lower than the rest | Domain level equals the lower sustained level. |
| Capability not applicable | Exclude only with documented rationale and approval. |
| Capability not assessed | Domain result is provisional or Inconclusive. |
| Critical gate open | Apply stated cap or invalidate the claim. |
| Material scope differs | Create separate profiles rather than blend populations. |

# 8.3  Overall maturity profile

The preferred executive result is a six-domain vector, not one aggregate maturity number. This preserves the distinction between visibility, trust analysis, authority control, validation, governance and resilience.

If a sponsor requires an overall label, report the minimum domain level across applicable domains and accompany it with the full profile, confidence and critical gates. The overall label must not be used to claim that every system shares the same maturity.

| **Output** | **Example format** |
| --- | --- |
| Domain vector | D1 M3 │ D2 M2 │ D3 M2 │ D4 M3 │ D5 M3 │ D6 M2 |
| Confidence | High, Medium or Low with defined evidence rationale. |
| Evidence coverage | Measured denominator and material gaps. |
| Critical gates | Open, passed, not applicable or unresolved. |
| Target profile | Risk-based target by domain and date. |
| Overall label if required | Minimum applicable domain level, clearly described as conservative. |

# 8.4  Confidence and evidence coverage

Confidence is assigned to the maturity conclusion based on relevance, quality, corroboration, currentness, scope coverage and review. It is not calculated solely from document count.

A high-confidence M2 result is more defensible than a low-confidence M4 claim. Reports must show the confidence and evidence limitations beside the maturity level.

| **Confidence** | **Minimum interpretation** |
| --- | --- |
| High | Material criteria are supported by current, corroborated evidence across defined coverage; critical claims include E4-E5 evidence. |
| Medium | Most material criteria are supported, but sampling, freshness or corroboration has bounded gaps. |
| Low | Conclusion relies heavily on attestation, limited samples, stale evidence or unresolved conflicts. |
| Not rated | Evidence cannot support a maturity conclusion. |

# 8.5  Target maturity and proportionality

M5 is not automatically the appropriate target. Target maturity should reflect consequence, authority, regulatory obligations, threat exposure, change rate, operational dependency and strategic importance.

Lower-risk use cases may need well-evidenced M2 or M3 practices, while systems with autonomous high-impact authority may require M4 or M5 capabilities in authority, validation and resilience.

| **Driver** | **Target effect** |
| --- | --- |
| High actionability or autonomy | Higher authority, validation and resilience target. |
| Sensitive or regulated data | Higher discovery, governance and evidence target. |
| Rapid architecture or provider change | Higher monitoring and change-triggered reassessment target. |
| Irreversible or high-value transaction | Higher approval, containment and recovery target. |
| Limited experiment with bounded data and no action | Proportionate lower target may be defensible with strict scope. |

# 8.6  Roadmap construction

Roadmaps close prerequisite and critical-gate gaps before optimizing advanced capabilities. The sequence should improve decision quality and reduce material path exposure rather than maximize the number of activities.

Each initiative links to a capability criterion, accountable owner, evidence deliverable, dependency, target state and validation method.

| **Roadmap field** | **Required content** |
| --- | --- |
| Gap | Current level, unmet criterion and affected scope. |
| Priority | Critical gate, material path, obligation or strategic dependency. |
| Outcome | Target capability and decision improvement. |
| Owner | Accountable individual or role with authority. |
| Evidence | What will demonstrate implementation and operation. |
| Validation | How effectiveness and residual paths will be checked. |
| Dependency | People, process, identity, data, tool, provider or platform prerequisite. |

# 8.7  Reporting standard

A maturity report must allow an independent reader to understand what was assessed, what evidence supported the result, what remained UNKNOWN, which gates applied and what improvement is recommended.

Visual heatmaps may be used, but colors and averages cannot replace the written rationale and evidence traceability.

| **Required section** | **Minimum content** |
| --- | --- |
| Executive conclusion | Decision context, six-domain profile, confidence and major gates. |
| Scope and method | Assessment unit, period, exclusions, versions and evidence approach. |
| Domain results | Capability levels, rationale, evidence and exceptions. |
| Critical gates | Status, consequence and required closure. |
| Evidence coverage | Denominators, samples, freshness and blind spots. |
| Target profile | Risk-based target and rationale. |
| Roadmap | Sequenced initiatives, owner, evidence and validation. |
| Limitations | No overclaim of compliance, completeness or continuous assurance. |

# 8.8  Calibration and quality assurance

Assessors must calibrate interpretation across engagements and reviewers. Calibration uses synthetic cases, evidence examples, disputed ratings and documented decisions. It does not use a hidden answer key that conflicts with the public criteria.

Quality review checks scope fidelity, cumulative logic, evidence sufficiency, gate application, consistency across domains and absence of unsupported precision.

| **QA question** | **Pass condition** |
| --- | --- |
| Scope | Every claim maps to the declared unit and period. |
| Maturity logic | Higher levels do not bypass lower-level prerequisites. |
| Evidence | Key assertions have appropriate evidence and confidence. |
| Gates | All applicable critical gates are explicitly resolved. |
| Consistency | Comparable evidence receives comparable interpretation. |
| Independence | Material conflicts and self-assessment limitations are disclosed. |
| Traceability | A reviewer can reproduce the rationale from retained records. |

# A.1  Maturity assessment record

The following fields form the minimum record for one capability-level conclusion.

| **Field** | **Required value** |
| --- | --- |
| Assessment ID | Stable identifier. |
| Assessment unit | Scope, environment, population and period. |
| Domain / capability | Canonical identifiers and names. |
| Applicability | Applicable, not applicable or unresolved with rationale. |
| Current level | M1-M5 or non-level result state. |
| Target level | Risk-based target and rationale. |
| Criteria met | Level-specific criteria and prerequisite trace. |
| Evidence | References, grades, freshness and coverage. |
| Critical gates | Status and applied cap. |
| Confidence | High, Medium, Low or Not rated. |
| Exceptions | Owner, scope, expiry and compensating controls. |
| Reviewer | Assessor and quality reviewer decision record. |

# A.2  Canonical glossary

These terms align the Maturity Model with the Manifesto and Core Conceptual Model.

| **Term** | **Meaning** |
| --- | --- |
| Capability | A coherent organizational ability assessed through progressive criteria. |
| Maturity level | Highest cumulative state supported for a capability within scope. |
| Critical gate | Condition that caps or invalidates a maturity claim. |
| Evidence grade | Strength of support for an assertion, E0-E5. |
| Confidence | Belief in the maturity conclusion given evidence and review. |
| Coverage | Measured portion and materiality of in-scope population represented. |
| Target maturity | Risk- and strategy-based desired state, not automatically M5. |
| Adaptive | Change-aware capability that learns and adjusts under governed control. |
| Profile | Set of domain and capability results preserving variation. |
| UNKNOWN | Valid state when evidence is insufficient or conflicting. |

# A.3  Anti-gaming rules

The maturity model must resist behaviors that create a polished score without equivalent capability.

| **Gaming pattern** | **Required response** |
| --- | --- |
| Policy-only inflation | Cap claims requiring implementation or operating evidence. |
| Pilot inflation | Report advanced practice as emerging, not enterprise level. |
| Selective scope | Disclose excluded systems and create separate profiles. |
| Average masking | Use cumulative and minimum-level rules. |
| Tool substitution | Do not infer maturity from technology purchase or deployment. |
| Evidence flooding | Evaluate relevance, quality, currentness and coverage, not volume. |
| Temporary compliance sprint | Require repeated operation appropriate to the claimed level. |
| Unresolved UNKNOWNs omitted | Restore UNKNOWNs and assess potential materiality. |
| Self-certification language | State assessor role and limits; do not imply independent certification. |

# A.4  Interoperability and mapping rules

The model may be mapped to external frameworks to support navigation and evidence reuse. Mappings are contextual aids and must not be treated as equivalence, certification or legal conclusions.

Each mapping records source, target, rationale, scope, version, reviewer and known gaps. A maturity level cannot be inferred solely from another framework rating.

> **MAPPING RULE** Map requirements and evidence explicitly; do not translate labels by similarity alone.

# A.5  Known limitations

Maturity models simplify complex organizations. This model cannot guarantee complete discovery, predict every incident, prove legal compliance, replace threat modeling or testing, or make results permanent after change.

Results depend on scope, evidence, assessor competence, ontology fitness, sampling and organizational candor. Comparative benchmarking requires equivalent scopes and calibrated methods.

| **Limitation** | **Disclosure** |
| --- | --- |
| Point in time | State the evidence period and change triggers. |
| Sampling | State population, sample and material blind spots. |
| Subjectivity | Use calibration, evidence and quality review. |
| Cross-organization comparison | Avoid ranking unlike scopes or risk contexts. |
| Technology change | Reassess affected capabilities and paths. |
| Legal interpretation | Obtain appropriate legal validation. |
| Risk reduction | Validate control operation and outcomes separately from maturity. |

# A.6  v1.0 release acceptance checklist

This artifact is a public-release candidate. All gates below must close before GitHub publication.

| **Gate** | **Acceptance criterion** |
| --- | --- |
| Semantic integrity | No contradiction with the Manifesto or Core Conceptual Model. |
| Completeness | All six domains, 36 capabilities, five levels, evidence and gates are defined. |
| Determination integrity | Cumulative, non-compensating and UNKNOWN rules are unambiguous. |
| Anti-gaming | Policy, pilot, tool and averaging inflation are explicitly prevented. |
| Traceability | Capabilities can map to controls, evidence and assessor procedures. |
| Independent review | Product architecture, AI security and methodology reviews recorded. |
| IP and confidentiality | Ownership and publication permission confirmed. |
| License and trademark | Documentation licence and naming decision approved. |
| Repository quality | Markdown, navigation, changelog and contribution files validated. |
| Safety | No client data, secrets or exploitable environment details included. |

# A.7  Final doctrine and approval record

The AI Trust Graph Maturity Model measures institutional capability without confusing maturity with risk, compliance or control effectiveness. It preserves domain variation, requires evidence appropriate to the claim, and prevents critical weaknesses from being averaged away.

The model is ready for controlled review. Public release remains subject to independent expert, employer, intellectual-property, confidentiality, licence and trademark approvals.

> **MATURITY DOCTRINE** Define the scope. Preserve UNKNOWN. Build cumulatively. Require evidence. Protect critical gates. Report the profile. Target proportionately. Validate improvement.

| **Approval role** | **Status** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Chief product architecture review | Internal author-loop completed; independent review pending. |
| AI security architecture review | Internal author-loop completed; independent review pending. |
| Third-party methodology review | Pending external reviewer. |
| Employer / IP review | Pending. |
| Licence and trademark approval | Pending. |
| Public release | Not approved until mandatory gates close. |

AI Trust Graph Maturity Model  |  Version 1.0  |  Public-release candidate
