[← Back to methodology index](../README.md)

# AI Trust Graph — Master Control Library

*Version 1.0 | 72 graph-aware, evidence-gated controls across six methodology domains*

> **PURPOSE** Provide the canonical control objectives, assessment criteria, evidence expectations, validation procedures, maturity mappings and graph semantics used by AI Trust Graph assessments.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Canonical controls | 72 unique controls; 12 per domain |
| Depends on | Manifesto v1.0; Core Conceptual Model v1.1; Maturity Model v1.0; Scoring Framework v1.0 |
| Control families | ATG-DIS; ATG-TRU; ATG-AUT; ATG-VAL; ATG-GOV; ATG-RES |
| Product boundary | ExposureGraph design, algorithms and implementation excluded |

# 0.1  Authority, scope and publication boundary

This document is the canonical public control library for the AI Trust Graph methodology. It defines what must be assessed but does not prescribe one product, prove compliance, replace legal advice or authorize testing.

Every control conclusion is bounded by applicability, scope, environment, evidence, confidence, test authorization and assessment date.

> **PUBLICATION SAFEGUARD** Complete employer, confidentiality, copyright, trademark, licence and independent review before public release.

| **Boundary** | **Rule** |
| --- | --- |
| Public methodology | Control objectives, assessment criteria, evidence, tests, graph mappings and maturity intent. |
| Private implementation | ExposureGraph connectors, algorithms, rankings, customer data, source code and commercial design. |
| Authorized assessment | Testing follows approved rules of engagement and safe methods. |
| No certification | Control results do not by themselves establish compliance or certification. |

# 0.2  Position in the artifact stack

The Core Conceptual Model defines the meaning of trust, authority, evidence, path and control. The Maturity Model defines progressive organizational capability. The Scoring Framework defines how determinate results are measured. This library supplies the canonical controls that those artifacts assess.

The Assessor Handbook provides detailed execution workflows without redefining these controls.

> **CANONICAL ARTIFACT MAP** Repository-wide authority, dependency order, bundle versions and content pins are governed by [METHODOLOGY_MANIFEST.md](../METHODOLOGY_MANIFEST.md). This artifact does not define a competing precedence chain.

| **Artifact** | **Control-library dependency** |
| --- | --- |
| Conceptual Model | Canonical object, relationship, authority, path and evidence semantics. |
| Maturity Model | Six domains, 36 capabilities, cumulative levels and critical gates. |
| Scoring Framework | Control assurance, evidence caps, coverage, UNKNOWN handling and path triage. |
| Ontology | Canonical nodes, edges and extensions; reconciliation required. |
| Assessor Handbook | Sampling, testing, quality review and reporting procedures. |

# 0.3  Control-library design principles

The library consolidates overlapping technical, governance and assurance requirements into unique control objectives. It is intentionally smaller than a raw checklist while retaining end-to-end coverage.

Controls are outcome-based, technology-neutral, graph-aware, evidence-gated and designed to support both point-in-time and change-triggered assessment.

| **Principle** | **Implication** |
| --- | --- |
| One objective per control | Avoid compound controls whose parts cannot be scored independently. |
| Outcome before implementation | Permit equivalent architectures while preserving the required effect. |
| Evidence before effectiveness | Policy or interview evidence cannot prove technical operation. |
| Graph traceability | Controls identify relevant objects, relationships, boundaries or paths. |
| Critical-gate integrity | High-impact failures cannot be hidden by aggregate scores. |
| UNKNOWN preserved | Missing or conflicting evidence remains non-numeric. |
| Safe validation | Tests are authorized, proportionate and non-destructive by default. |
| Versioned governance | Changes include rationale, impact and migration guidance. |

# 0.4  Canonical control schema

Each control record uses the same schema so documents, spreadsheets, JSON and graph-backed tools can exchange results without changing meaning.

| **Field** | **Meaning** |
| --- | --- |
| Control ID and name | Stable identifier and unique objective. |
| Objective | Required outcome. |
| Criteria | Conditions used to assess design and implementation. |
| Applicability | Systems or circumstances to which the control applies. |
| Criticality | Standard, Important, Critical or Systemic. |
| Maturity mapping | Primary capability and progression supported. |
| Evidence expectation | Minimum sources and preferred evidence grade. |
| Validation procedure | Authorized assessment actions and expected result. |
| Graph mapping | Relevant nodes, relationships, boundaries or paths. |
| Failure pattern | How a material gap commonly appears. |
| Remediation outcome | Target condition, not vendor-specific instruction. |
| Crosswalk candidates | Indicative external frameworks requiring separate validation. |

# 0.5  Control identifiers and families

Control IDs are stable and must not be recycled. Retired IDs remain reserved. Extensions use a separate namespace and cannot masquerade as canonical controls.

| **Prefix** | **Domain** | **Control range** |
| --- | --- | --- |
| ATG-DIS | Discovery and AIBOM | 001-012 |
| ATG-TRU | Trust and Privilege Paths | 001-012 |
| ATG-AUT | Authority Governance | 001-012 |
| ATG-VAL | AI Security Validation | 001-012 |
| ATG-GOV | AI Governance and Assurance | 001-012 |
| ATG-RES | Operational Resilience | 001-012 |

# 0.6  Applicability and assessment profiles

Applicability is derived from purpose, architecture, data, identity, autonomy, tool access, providers, environment, consequence and obligations. It is not selected to improve a score.

Profiles may classify controls as mandatory, conditional or supplementary. Unresolved applicability prevents a final aggregate for the affected scope.

| **Profile** | **Typical use** |
| --- | --- |
| Enterprise baseline | All material enterprise AI use cases and shared platforms. |
| Agentic high-impact | Agents with write, approve, disclose, transact or destructive authority. |
| RAG and knowledge | Retrieval, vector, memory and source-governance controls. |
| AI engineering | Model, prompt, pipeline, artifact and supply-chain scope. |
| External provider | Hosted model, tool, data or orchestration dependencies. |
| Regulated decision | Use cases with applicable sector, legal or stakeholder-impact requirements. |

# 0.7  Criticality and gate semantics

Criticality describes the consequence of control failure in the assessed context. Canonical defaults may be increased or decreased only with documented rationale and reviewer approval.

Critical and Systemic controls require stronger evidence and may activate Maturity Model or Scoring Framework gates.

| **Class** | **Interpretation** |
| --- | --- |
| Standard | Failure affects a bounded local condition. |
| Important | Failure can expose a material relationship, dependency or control assumption. |
| Critical | Failure can enable a high-impact path, irreversible action or mandatory condition. |
| Systemic | Failure can affect multiple material paths, systems, tenants, providers or decisions. |

# 0.8  Evidence and conclusion doctrine

The library uses E0 to E5 evidence grades and the conclusion states Verified Effective; Implemented - Effectiveness Not Verified; Partially Implemented; Not Implemented; Not Applicable; Not Tested; UNKNOWN; and Inconclusive.

Every conclusion links to evidence, a reproducible procedure, affected graph objects or paths, confidence and limitations. UNKNOWN remains UNKNOWN until resolved.

| **Grade** | **Meaning** |
| --- | --- |
| E0 | No evidence. |
| E1 | Inference requiring validation. |
| E2 | Owner or stakeholder attestation. |
| E3 | Approved documentary evidence. |
| E4 | Corroborated technical evidence. |
| E5 | Direct current technical evidence plus representative test or operating record. |

# 0.9  Testing and rules of engagement

No control authorizes testing. Assessors require approved scope, identities, data, environments, prohibited actions, stop conditions, escalation and restoration procedures.

Validation is read-only or non-destructive by default. Tests involving write, deletion, transaction, disclosure, denial, model manipulation or production change require explicit authorization and controls.

> **SAFETY INVARIANT** A technically possible test is not automatically an authorized test.

# 0.10  Scoring and maturity linkage

Controls use the Scoring Framework 0-5 assurance scale only when determinate. Evidence caps and critical gates apply before aggregation. Maturity remains rule-based and cannot be inferred from average control scores.

Each control identifies a primary Maturity Model capability. Multiple controls may support one capability; one control result never establishes the full maturity level.

| **Control result** | **Maturity use** |
| --- | --- |
| 0-2 | Evidence of missing, ad hoc or partial capability. |
| 3 | Implementation support; operating effectiveness may remain unverified. |
| 4 | Verified operating evidence for the assessed control and scope. |
| 5 | Sustained adaptive operation for the control, not automatic M5 maturity. |
| UNKNOWN | No maturity credit or failure score; evidence gap remains visible. |
| Critical gate failure | Apply explicit cap or invalidation before maturity determination. |

# 0.11  Crosswalk and regulatory caution

Crosswalk candidates support navigation and evidence reuse. They do not establish one-to-one equivalence, compliance, legal applicability or certification.

Mappings require source version, reference, rationale, scope, reviewer and known gaps. Licensed or restricted text must not be copied without permission.

| **Candidate family** | **Use** |
| --- | --- |
| NIST AI RMF and GenAI Profile | Risk-management navigation. |
| ISO/IEC 42001 and ISO/IEC 23894 | Management-system and AI-risk navigation. |
| NIST CSF and SSDF | Cybersecurity and secure-development navigation. |
| CSA AI Controls Matrix | Cloud and AI control navigation. |
| MITRE ATLAS | Threat and technique navigation. |
| OWASP GenAI and Agentic guidance | Application, model, agent and tool risk navigation. |
| Jurisdiction and sector requirements | Only after fact-specific legal applicability review. |

# 0.12  Library coverage map

The 72 controls cover the six public methodology domains. More detailed technology packs may extend this baseline without redefining canonical objectives.

| **Domain** | **Control scope** |
| --- | --- |
| Discovery and AIBOM | Scope, sources, sanctioned and shadow AI, inventory, ownership, composition, change and coverage. |
| Trust and Privilege Paths | Relationship semantics, trust basis, privilege, boundaries, providers, paths, breakpoints and drift. |
| Authority Governance | Identity, action classes, least authority, delegation, approvals, tools, amplification, limits and revocation. |
| AI Security Validation | Strategy, threat models, safe testing, model, prompt, RAG, agent, MCP, supply chain, infrastructure and closure. |
| AI Governance and Assurance | Policy, risk appetite, operating model, intake, impact, applicability, decisions, exceptions, providers and assurance. |
| Operational Resilience | Telemetry, attribution, detection, incidents, containment, kill, revocation, rollback, recovery, forensics and exercises. |

# 1.0  Discovery and AIBOM

The Discovery and AIBOM family contains 12 canonical controls. Together they support Maturity Model domain D1 and must be applied according to scope, profile, applicability and critical gates.

| **Control ID** | **Control name** | **Default criticality** |
| --- | --- | --- |
| ATG-DIS-001 | Discovery scope and authorized boundaries | Important |
| ATG-DIS-002 | Discovery source catalogue | Important |
| ATG-DIS-003 | Sanctioned AI service discovery | Important |
| ATG-DIS-004 | Shadow AI detection and triage | Critical |
| ATG-DIS-005 | Canonical AI estate inventory | Systemic |
| ATG-DIS-006 | Asset identity and correlation | Important |
| ATG-DIS-007 | Business and technical ownership | Critical |
| ATG-DIS-008 | AI Bill of Materials | Critical |
| ATG-DIS-009 | Dependency and provenance lineage | Important |
| ATG-DIS-010 | AIBOM and inventory change detection | Critical |
| ATG-DIS-011 | Orphan, dormant and exposed asset lifecycle | Important |
| ATG-DIS-012 | Discovery coverage assurance | Systemic |

# ATG-DIS-001  Discovery scope and authorized boundaries

Define the business, technical, geographic, environmental and data boundaries within which AI discovery is authorized and expected to operate.

Scope register names business units, environments, populations, source systems, exclusions, collection authority, sensitive-data restrictions and review date.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All discovery programs and assessments. |
| Default criticality | Important |
| Primary maturity mapping | D1.1 Discovery scope and source coverage |
| Evidence expectation | Approved scope; source-owner approvals; data-flow and collection design; current review record. Preferred E3-E4. |
| Validation procedure | Inspect approval and exclusions; compare discovered sources and sampled assets with the scope; verify collection stays within authorization. |
| Graph nodes | AIUseCase; BusinessUnit; Environment; Evidence |
| Graph relationships | IN_SCOPE; OWNED_BY; EVIDENCED_BY |
| Failure pattern | Undefined denominator, undocumented exclusions or collection beyond authority. |
| Remediation outcome | Approve a versioned scope with named owners, exclusions, safety constraints and periodic review. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-DIS-002  Discovery source catalogue

Maintain a versioned catalogue of authorized discovery sources and the AI-relevant signals each source can provide.

Catalogue records source owner, connector or collection method, signal types, coverage, freshness, reliability, limitations, retention and dependencies.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Where AI estate visibility depends on multiple enterprise sources. |
| Default criticality | Important |
| Primary maturity mapping | D1.1 Discovery scope and source coverage |
| Evidence expectation | Source catalogue; access approvals; sample exports; freshness logs; source-quality review. Preferred E3-E4. |
| Validation procedure | Sample sources; reproduce one signal from origin; test freshness and identify blind spots or duplicate feeds. |
| Graph nodes | DiscoverySource; Evidence; Provider |
| Graph relationships | OBSERVED_BY; PROVIDED_BY; DEPENDS_ON |
| Failure pattern | Unowned feeds, stale extracts or vague statements that a connector covers everything. |
| Remediation outcome | Establish source ownership, freshness thresholds, failure monitoring and documented limitations. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-DIS-003  Sanctioned AI service discovery

Identify approved AI services, applications and platforms from governance, procurement, cloud, identity and administrative records.

Approved services reconcile to use-case intake, contracts, tenants, owners, environments and deployed endpoints.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Enterprises using internal or third-party AI services. |
| Default criticality | Important |
| Primary maturity mapping | D1.1 Discovery scope and source coverage |
| Evidence expectation | Service catalogue; procurement records; cloud/SaaS exports; identity applications; owner confirmation. Preferred E4. |
| Validation procedure | Reconcile at least two independent sources; sample approved services to confirm tenant, owner, endpoint and status. |
| Graph nodes | AIService; Application; Provider; Contract |
| Graph relationships | APPROVED_BY; PROVIDED_BY; DEPLOYED_TO |
| Failure pattern | Governance register lists a service but active tenants, endpoints or owners differ. |
| Remediation outcome | Reconcile approved records with technical inventory and resolve mismatches through ownership workflow. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-DIS-004  Shadow AI detection and triage

Detect and proportionately triage unapproved AI SaaS, APIs, local models, plugins, browser tools and embedded AI usage.

Signals are reviewed by business purpose, data sensitivity, provider, identity, frequency, exposure and approved alternatives; actions are recorded.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Organizations with employee, developer or third-party access to unmanaged AI. |
| Default criticality | Critical |
| Primary maturity mapping | D1.3 Shadow AI and unmanaged use |
| Evidence expectation | Authorized proxy/CASB/DLP/endpoint/procurement signals; triage records; decisions; containment evidence. Preferred E4-E5. |
| Validation procedure | Use approved benign markers or known test services; verify detection, attribution, triage, escalation and disposition. |
| Graph nodes | ShadowAI; HumanIdentity; Provider; Evidence |
| Graph relationships | SENDS_TO; USES; OBSERVED_BY; HAS_FINDING |
| Failure pattern | No visibility, blanket blocking without triage, or sensitive uploads not investigated. |
| Remediation outcome | Implement multi-source detection, risk-based triage, approved alternatives and evidence-backed closure. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-DIS-005  Canonical AI estate inventory

Maintain a canonical inventory of AI use cases, applications, models, endpoints, agents, prompts, retrievers, vector stores, memory, tools, MCP services, identities, pipelines, runtimes and providers.

Records have stable IDs, types, environment, lifecycle status, criticality, evidence references and timestamps.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All material AI systems and dependencies. |
| Default criticality | Systemic |
| Primary maturity mapping | D1.2 Canonical inventory and ownership |
| Evidence expectation | Inventory export; schema; source lineage; deduplication decisions; sample source corroboration. Preferred E4. |
| Validation procedure | Sample records across object families; verify identity, environment, state and evidence against source systems. |
| Graph nodes | All canonical asset classes |
| Graph relationships | IN_SCOPE; DEPENDS_ON; EVIDENCED_BY |
| Failure pattern | Model-only register, duplicates, orphan records or no environment and lifecycle state. |
| Remediation outcome | Adopt canonical object types, stable identifiers, correlation rules and versioned lifecycle states. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-DIS-006  Asset identity and correlation

Correlate signals referring to the same AI asset without merging distinct environments, tenants, versions or owners.

Correlation rules preserve source identifiers, merge rationale, confidence, human review and reversible decisions.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Multi-source discovery and federated estates. |
| Default criticality | Important |
| Primary maturity mapping | D1.2 Canonical inventory and ownership |
| Evidence expectation | Correlation rules; candidate matches; reviewer decisions; source identifiers; regression tests. Preferred E4. |
| Validation procedure | Seed duplicate and near-duplicate records; verify expected merge, non-merge and review-queue behavior. |
| Graph nodes | Asset; DiscoverySource; Evidence |
| Graph relationships | SAME_AS_CANDIDATE; DERIVED_FROM; EVIDENCED_BY |
| Failure pattern | Production and test endpoints merged, or one service split into untraceable duplicates. |
| Remediation outcome | Use deterministic keys where possible, confidence-based candidate matching and reviewed merge history. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-DIS-007  Business and technical ownership

Assign and periodically validate accountable business and technical owners for every material AI use case and component.

Ownership includes responsibility for purpose, evidence, monitoring, exceptions, incidents, remediation and retirement; UNKNOWN ownership is visible.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All material AI use cases, platforms and dependencies. |
| Default criticality | Critical |
| Primary maturity mapping | D1.2 Canonical inventory and ownership |
| Evidence expectation | Ownership records; role acknowledgement; HR/application corroboration; recertification and transfer history. Preferred E3-E4. |
| Validation procedure | Sample high-impact and low-confidence assets; verify owners acknowledge scope and departed owners are resolved. |
| Graph nodes | AIUseCase; Asset; BusinessOwner; TechnicalOwner |
| Graph relationships | OWNED_BY; ACCOUNTABLE_TO |
| Failure pattern | Generic mailboxes, departed owners, inferred ownership presented as fact or no transfer process. |
| Remediation outcome | Assign named accountable roles and implement evidence-backed recertification and transfer workflow. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-DIS-008  AI Bill of Materials

Maintain a versioned AIBOM for each material AI system covering model, data, software, prompt, agent, tool, MCP, vector, identity, guardrail, provider and runtime dependencies.

AIBOM components link to deployed versions, sources, integrity references, owners, environment and dependency relationships.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material production or high-impact AI systems. |
| Default criticality | Critical |
| Primary maturity mapping | D1.4 AIBOM and dependency lineage |
| Evidence expectation | AIBOM; deployment manifests; registries; hashes; repository and runtime evidence. Preferred E4-E5. |
| Validation procedure | Select production systems; reconstruct composition from independent sources; compare with AIBOM and investigate differences. |
| Graph nodes | AIBOM; Model; Prompt; Agent; Tool; Identity; Provider |
| Graph relationships | CONTAINS; DEPENDS_ON; DEPLOYED_TO; DERIVED_FROM |
| Failure pattern | Static spreadsheet, missing behavior-shaping assets or mismatch with deployed composition. |
| Remediation outcome | Generate and reconcile versioned AIBOM records from authoritative engineering and runtime sources. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST SSDF; SLSA; mappings are indicative and require versioned validation. |

# ATG-DIS-009  Dependency and provenance lineage

Trace material assets and assertions to their sources, transformations, providers and downstream consumers.

Lineage preserves source ID, transformation, version, timestamp, integrity reference, approval and affected dependencies.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Data, model, prompt, artifact and provider chains. |
| Default criticality | Important |
| Primary maturity mapping | D1.4 AIBOM and dependency lineage |
| Evidence expectation | Lineage graph; source metadata; transformation records; signed artifacts; approvals. Preferred E4. |
| Validation procedure | Select representative components and reconstruct origin-to-deployment lineage; identify breaks and unsupported claims. |
| Graph nodes | Dataset; Artifact; Model; Prompt; Provider; Evidence |
| Graph relationships | DERIVED_FROM; BUILT_FROM; PROVIDED_BY; EVIDENCED_BY |
| Failure pattern | Unknown origin, unverifiable transformation or downstream use not linked to approved source. |
| Remediation outcome | Establish versioned lineage records and integrity references across build, deployment and runtime. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST SSDF; mappings are indicative and require versioned validation. |

# ATG-DIS-010  AIBOM and inventory change detection

Detect material changes to AI assets, composition, identities, tools, data, providers and relationships and trigger reassessment.

Version differences link changed elements to approver, deployment, risk review, tests and resulting graph updates.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Systems subject to model, prompt, tool, provider or configuration change. |
| Default criticality | Critical |
| Primary maturity mapping | D1.4 AIBOM and dependency lineage |
| Evidence expectation | Version diffs; deployment events; change tickets; reassessment and regression evidence. Preferred E4-E5. |
| Validation procedure | Introduce or inspect an approved sample change; verify detection, correlation, review, test and graph update. |
| Graph nodes | AIBOM; Asset; ChangeEvent; Test |
| Graph relationships | CHANGED_TO; TRIGGERS; TESTED_BY; SUPERSEDES |
| Failure pattern | Production composition changes while inventory, risk decision and tests remain unchanged. |
| Remediation outcome | Integrate change events with AIBOM diff, risk gates, graph updates and targeted regression validation. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST SSDF; mappings are indicative and require versioned validation. |

# ATG-DIS-011  Orphan, dormant and exposed asset lifecycle

Identify and resolve unowned, inactive, duplicate, obsolete or unnecessarily exposed AI assets and dependencies.

Ageing, last-use, ownership, exposure, exception, transfer, retirement and evidence-retention criteria are defined.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All discovered AI assets and identities. |
| Default criticality | Important |
| Primary maturity mapping | D1.5 Unknown, orphan and lifecycle management |
| Evidence expectation | Ageing reports; exposure findings; usage evidence; decommission or exception records. Preferred E4. |
| Validation procedure | Query dormant and unowned records; validate shutdown, transfer, isolation or approved exception through source evidence. |
| Graph nodes | Asset; Identity; Endpoint; Exception |
| Graph relationships | EXPOSED_TO; OWNED_BY; RETIRED_BY; HAS_EXCEPTION |
| Failure pattern | Old endpoints, vector stores or identities remain reachable and unowned. |
| Remediation outcome | Automate lifecycle alerts and enforce evidence-backed transfer, isolation or decommissioning. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST CSF; mappings are indicative and require versioned validation. |

# ATG-DIS-012  Discovery coverage assurance

Measure discovery coverage, blind spots, freshness, attribution quality and missed-asset performance against a defined scope.

Metrics retain numerator, denominator, source coverage, stale evidence, UNKNOWN assets, confidence and limitations.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All enterprise or portfolio discovery programs. |
| Default criticality | Systemic |
| Primary maturity mapping | D1.6 Discovery evidence and assurance |
| Evidence expectation | Coverage dashboard; denominator definition; seeded tests; independent samples; missed-asset analysis. Preferred E4-E5. |
| Validation procedure | Reconcile independent samples or known test assets; verify detection, deduplication, ownership and freshness outcomes. |
| Graph nodes | DiscoveryScope; Evidence; Metric; Finding |
| Graph relationships | MEASURES; OBSERVED_BY; HAS_FINDING |
| Failure pattern | Claims of complete discovery without a denominator, blind-spot analysis or independent sample. |
| Remediation outcome | Report scoped coverage and continuously improve sources using misses, incidents and seeded validation. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# 2.0  Trust and Privilege Paths

The Trust and Privilege Paths family contains 12 canonical controls. Together they support Maturity Model domain D2 and must be applied according to scope, profile, applicability and critical gates.

| **Control ID** | **Control name** | **Default criticality** |
| --- | --- | --- |
| ATG-TRU-001 | Canonical trust relationship semantics | Systemic |
| ATG-TRU-002 | Trust basis, scope and lifecycle | Critical |
| ATG-TRU-003 | Human and workload identity path mapping | Critical |
| ATG-TRU-004 | Delegation and privilege inheritance analysis | Critical |
| ATG-TRU-005 | Trust boundary definition and enforcement | Critical |
| ATG-TRU-006 | Provider trust and shared responsibility | Critical |
| ATG-TRU-007 | Critical dependency and concentration analysis | Systemic |
| ATG-TRU-008 | Material path construction | Systemic |
| ATG-TRU-009 | Path condition and reachability validation | Critical |
| ATG-TRU-010 | Control breakpoint mapping | Critical |
| ATG-TRU-011 | Trust and privilege drift monitoring | Critical |
| ATG-TRU-012 | Trust graph quality and review governance | Systemic |

# ATG-TRU-001  Canonical trust relationship semantics

Represent material trust, access, dependency, invocation, data movement and control relationships using approved typed and directional semantics.

Each approved relationship has stable ID, compatible endpoints, direction, scope, conditions, evidence, confidence, owner and validity.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All graph-backed AI assessments. |
| Default criticality | Systemic |
| Primary maturity mapping | D2.1 Trust relationship representation |
| Evidence expectation | Ontology/schema; edge records; evidence links; reviewer decisions; validation samples. Preferred E3-E4. |
| Validation procedure | Sample relationships; verify direction, type, endpoint compatibility, conditions and source support. |
| Graph nodes | All canonical graph nodes |
| Graph relationships | TRUSTS; CONNECTS_TO; AUTHORIZED_TO; INVOKES; DEPENDS_ON |
| Failure pattern | Unqualified arrows, reversed direction, generic connected-to labels or unsupported approved edges. |
| Remediation outcome | Use canonical edge families, candidate review and versioned relationship governance. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-TRU-002  Trust basis, scope and lifecycle

Document why reliance is accepted, for which purpose and scope, by whom, until when and how it is revoked.

Trust records include basis, owner, assets, actions, data, environment, transitivity, expiry, review trigger and evidence.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material provider, identity, data, model, tool and control reliance. |
| Default criticality | Critical |
| Primary maturity mapping | D2.1 Trust relationship representation |
| Evidence expectation | Trust decision record; approvals; contracts or technical mechanism; review and revocation evidence. Preferred E3-E4. |
| Validation procedure | Trace selected trust grants from decision to enforcement and expiry; verify scope is not broader than approval. |
| Graph nodes | Actor; Provider; Identity; Data; Control |
| Graph relationships | TRUSTS; APPROVED_BY; REVOKED_BY |
| Failure pattern | "Trusted system" labels with no purpose, basis, limit, owner or expiry. |
| Remediation outcome | Create bounded trust decisions linked to enforcement, evidence, review and revocation. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-TRU-003  Human and workload identity path mapping

Map effective human, workload, service, device and federated identities across AI applications, agents, tools and resources.

Identity paths include authentication, role assumption, effective permission, delegation, secret use and actor-subject attribution.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Systems with machine identities, delegation or privileged access. |
| Default criticality | Critical |
| Primary maturity mapping | D2.2 Identity and privilege path analysis |
| Evidence expectation | IAM exports; tokens or claims; role grants; runtime traces; identity-owner records. Preferred E4-E5. |
| Validation procedure | Trace representative user and workload actions end to end; validate effective identity and permission at each step. |
| Graph nodes | HumanIdentity; WorkloadIdentity; Role; Permission; Tool |
| Graph relationships | AUTHENTICATES_AS; ASSUMES_ROLE; AUTHORIZED_TO; INVOKES |
| Failure pattern | Questionnaire says read-only while downstream identity has write or administrative rights. |
| Remediation outcome | Represent and validate effective identity paths and preserve actor-subject context across boundaries. |
| Crosswalk candidates | NIST CSF; ISO 27001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-TRU-004  Delegation and privilege inheritance analysis

Identify direct, inherited, group-based, federated, workload and delegated privilege reaching material AI targets.

Analysis records grant source, intermediary steps, conditions, duration, transitivity, target and revocation.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Privileged AI platforms, agents, pipelines and shared services. |
| Default criticality | Critical |
| Primary maturity mapping | D2.2 Identity and privilege path analysis |
| Evidence expectation | Group and role membership; delegation policies; permission evaluation; representative access tests. Preferred E4-E5. |
| Validation procedure | Query and validate direct and indirect routes to selected high-value targets; compare intended and effective privilege. |
| Graph nodes | Identity; Group; Role; Permission; Target |
| Graph relationships | MEMBER_OF; ASSUMES_ROLE; DELEGATES_TO; AUTHORIZED_TO |
| Failure pattern | No owner understands inherited privilege or delegation expands rights beyond the initiating actor. |
| Remediation outcome | Reduce inherited privilege, constrain delegation and retain evidence of effective permission paths. |
| Crosswalk candidates | NIST CSF; ISO 27001; MITRE ATLAS; mappings are indicative and require versioned validation. |

# ATG-TRU-005  Trust boundary definition and enforcement

Define identity, data, provider, runtime, network, human-decision and consequence boundaries and the enforcement expected at each crossing.

Boundary records include owner, members, ingress and egress relationships, policy, enforcement point, evidence and exception.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All material AI systems and external dependencies. |
| Default criticality | Critical |
| Primary maturity mapping | D2.3 Boundary and provider trust |
| Evidence expectation | Boundary register; architecture; IAM/network/data controls; runtime evidence; tests. Preferred E3-E5. |
| Validation procedure | Select material crossings; verify expected identity, policy, data and approval semantics are preserved and enforced. |
| Graph nodes | Boundary; Zone; Identity; Data; Provider |
| Graph relationships | CROSSES; CONNECTS_TO; SENDS_TO; AUTHORIZED_TO |
| Failure pattern | Diagram boundary has no owner or technical enforcement, or user context is lost at crossing. |
| Remediation outcome | Make boundaries first-class records and validate controls at every material crossing. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST CSF; mappings are indicative and require versioned validation. |

# ATG-TRU-006  Provider trust and shared responsibility

Define and evidence customer and provider responsibilities for security, privacy, identity, monitoring, incidents, resilience and assurance.

Responsibility matrix links service, contract, technical configuration, control owner, evidence source and unresolved gap.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | External model, SaaS, tool, data, hosting and annotation providers. |
| Default criticality | Critical |
| Primary maturity mapping | D2.3 Boundary and provider trust |
| Evidence expectation | Contracts; responsibility matrix; provider reports; admin settings; data flows; owner review. Preferred E3-E4. |
| Validation procedure | Sample critical responsibilities; compare contract, configuration and operating procedure; identify assumed controls without evidence. |
| Graph nodes | Provider; Contract; Control; Evidence |
| Graph relationships | PROVIDED_BY; SUBJECT_TO; CONTROLS; EVIDENCED_BY |
| Failure pattern | Critical control is assumed provider-owned but contract, configuration and evidence do not support it. |
| Remediation outcome | Establish service-specific responsibility, configuration validation, evidence access and gap ownership. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-TRU-007  Critical dependency and concentration analysis

Identify common providers, identities, pipelines, models, tools, data sources and controls whose failure can affect multiple material systems or paths.

Dependency analysis includes fan-out, substitutability, recovery, evidence continuity, concentration threshold and owner.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Shared AI platforms and third-party concentration. |
| Default criticality | Systemic |
| Primary maturity mapping | D2.3 Boundary and provider trust |
| Evidence expectation | Dependency graph; service inventory; contracts; failure scenarios; recovery and exit tests. Preferred E4-E5. |
| Validation procedure | Select high-fan-out dependencies; validate affected systems, alternate routes, containment and recovery assumptions. |
| Graph nodes | Provider; Platform; Control; System; Path |
| Graph relationships | DEPENDS_ON; PROVIDED_BY; BREAKS_PATH |
| Failure pattern | Single provider or identity failure invalidates multiple controls without recognized systemic exposure. |
| Remediation outcome | Define concentration thresholds, alternate capability, containment and tested recovery or exit options. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST CSF; mappings are indicative and require versioned validation. |

# ATG-TRU-008  Material path construction

Construct ordered, evidence-linked paths from plausible start conditions to sensitive targets or consequential outcomes.

Path records include start, traversal, conditions, boundaries, authority changes, target, consequence, controls, evidence, confidence and residual path.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Threat, misuse, failure and authority analysis. |
| Default criticality | Systemic |
| Primary maturity mapping | D2.4 Path identification and prioritization |
| Evidence expectation | Graph snapshot; path query; edge evidence; scenario assumptions; reviewer approval. Preferred E4. |
| Validation procedure | Reconstruct selected paths step by step; confirm each relationship and condition or mark it UNKNOWN. |
| Graph nodes | Path; Threat; Identity; Agent; Tool; Target |
| Graph relationships | TRAVERSES; CROSSES; AUTHORIZED_TO; INVOKES |
| Failure pattern | List of connected nodes called an attack path without permissions, state or conditions. |
| Remediation outcome | Use canonical path records and retain uncertainty, scope and validation state for every material step. |
| Crosswalk candidates | NIST AI RMF; MITRE ATLAS; OWASP GenAI; mappings are indicative and require versioned validation. |

# ATG-TRU-009  Path condition and reachability validation

Validate identity, permission, protocol, state, data, approval and workflow prerequisites for paths prioritized as material.

Validation distinguishes Candidate, Topological, Plausible, Validated, Exploitable, Controlled and Invalidated states.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material security, trust and authority paths. |
| Default criticality | Critical |
| Primary maturity mapping | D2.4 Path identification and prioritization |
| Evidence expectation | Read-only queries; configuration; IAM results; runtime traces; authorized test outcomes. Preferred E4-E5. |
| Validation procedure | Test or corroborate each material condition using safe methods; downgrade or invalidate unsupported paths. |
| Graph nodes | Path; Condition; Evidence; Test |
| Graph relationships | REQUIRES; EVIDENCED_BY; TESTED_BY; INVALIDATED_BY |
| Failure pattern | Topology alone is reported as exploitable or a missing permission is silently assumed. |
| Remediation outcome | Apply condition-level evidence and controlled validation before assigning stronger path states. |
| Crosswalk candidates | MITRE ATLAS; OWASP GenAI; NIST AI RMF; mappings are indicative and require versioned validation. |

# ATG-TRU-010  Control breakpoint mapping

Map preventive, detective, containment, corrective and recovery controls to the nodes, relationships, boundaries or paths they are intended to affect.

Breakpoint record states mechanism, owner, dependency, test, evidence, expected path effect and alternate routes.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material paths and critical controls. |
| Default criticality | Critical |
| Primary maturity mapping | D2.5 Control breakpoint analysis |
| Evidence expectation | Control design; configuration; test evidence; path before/after analysis; owner decision. Preferred E4-E5. |
| Validation procedure | For selected paths, verify the control acts at the claimed location and assess residual or alternate routes. |
| Graph nodes | Control; Path; Boundary; Evidence |
| Graph relationships | CONTROLS; BREAKS_PATH; TESTED_BY; DEPENDS_ON |
| Failure pattern | Controls mapped to framework rows but not to the path conditions they should interrupt. |
| Remediation outcome | Link controls to explicit path steps and validate breakpoint effect and residual exposure. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; MITRE ATLAS; mappings are indicative and require versioned validation. |

# ATG-TRU-011  Trust and privilege drift monitoring

Detect material change in approved trust, identity, permission, provider, tool, data and boundary relationships.

Baseline and change events identify added, removed or modified edges, evidence freshness, owner and reassessment status.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Dynamic AI systems, cloud permissions and external integrations. |
| Default criticality | Critical |
| Primary maturity mapping | D2.6 Trust graph quality and governance |
| Evidence expectation | Versioned graph snapshots; IAM/config changes; provider events; alerts; review records. Preferred E4-E5. |
| Validation procedure | Inspect representative material changes; confirm alert, impact analysis, decision and affected-path reassessment. |
| Graph nodes | GraphSnapshot; ChangeEvent; Edge; Evidence |
| Graph relationships | CHANGED_TO; SUPERSEDES; TRIGGERS |
| Failure pattern | Permissions or tool bindings change while trust decisions and path analyses remain stale. |
| Remediation outcome | Implement change-aware relationship monitoring and risk-based reassessment with reviewed updates. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST CSF; mappings are indicative and require versioned validation. |

# ATG-TRU-012  Trust graph quality and review governance

Govern candidate, approved, rejected, modified, stale and superseded graph assertions through versioned human review.

Quality measures include coverage, confidence, evidence currency, conflicts, invalid edges, reviewer decisions and regression tests.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All AI Trust Graph datasets and compatible tooling. |
| Default criticality | Systemic |
| Primary maturity mapping | D2.6 Trust graph quality and governance |
| Evidence expectation | Review queue; decision log; quality dashboard; regression tests; version history. Preferred E3-E5. |
| Validation procedure | Sample automated and manual assertions; reproduce evidence, review state and supersession; test known invalid cases. |
| Graph nodes | GraphAssertion; Reviewer; Evidence; Decision |
| Graph relationships | PROPOSED_BY; APPROVED_BY; REJECTED_BY; SUPERSEDES |
| Failure pattern | Tool-generated edges become facts without review or prior findings are silently rewritten. |
| Remediation outcome | Separate proposed from approved truth and use governed review, regression and immutable analysis runs. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# 3.0  Authority Governance

The Authority Governance family contains 12 canonical controls. Together they support Maturity Model domain D3 and must be applied according to scope, profile, applicability and critical gates.

| **Control ID** | **Control name** | **Default criticality** |
| --- | --- | --- |
| ATG-AUT-001 | Authority inventory and action taxonomy | Systemic |
| ATG-AUT-002 | Unique machine identity and attribution | Critical |
| ATG-AUT-003 | Least authority and bounded scope | Critical |
| ATG-AUT-004 | Delegation and impersonation controls | Critical |
| ATG-AUT-005 | Meaningful approval for consequential action | Critical |
| ATG-AUT-006 | Tool, plugin and MCP allowlisting | Critical |
| ATG-AUT-007 | Authority amplification assessment | Systemic |
| ATG-AUT-008 | Resource, iteration and transaction limits | Critical |
| ATG-AUT-009 | Data disclosure and destination authority | Critical |
| ATG-AUT-010 | Environment and duty separation | Important |
| ATG-AUT-011 | Authority revocation and end-to-end containment | Critical |
| ATG-AUT-012 | Authority review, exception and recertification | Critical |

# ATG-AUT-001  Authority inventory and action taxonomy

Register effective authority for humans, identities, applications, agents, tools and workflows using canonical action classes.

Records identify acting identity, capability, target, scope, conditions, duration, approval, reversibility, telemetry and revocation.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Systems that access, infer, recommend, approve, execute, modify, delete, disclose or transact. |
| Default criticality | Systemic |
| Primary maturity mapping | D3.1 Authority inventory and taxonomy |
| Evidence expectation | Authority register; IAM/tool configuration; workflow definition; runtime corroboration. Preferred E4. |
| Validation procedure | Sample high-impact actors; enumerate and validate effective actions and targets rather than relying on role names. |
| Graph nodes | Actor; Identity; Agent; Tool; Target |
| Graph relationships | AUTHORIZED_TO; INVOKES; TRIGGERS_ACTION |
| Failure pattern | Authority is inferred from job title or application description while effective permissions differ. |
| Remediation outcome | Create a canonical authority register derived from effective technical and workflow grants. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST CSF; mappings are indicative and require versioned validation. |

# ATG-AUT-002  Unique machine identity and attribution

Use distinct workload or service identities for material agents, applications, tools and pipelines and retain attribution to the initiating actor where required.

Identity lifecycle, issuer, authentication, owner, assurance, environment, session and actor-subject chain are defined.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material machine actions and privileged integrations. |
| Default criticality | Critical |
| Primary maturity mapping | D3.2 Delegation and identity context |
| Evidence expectation | Identity inventory; claims; workload configuration; runtime traces; revocation records. Preferred E4-E5. |
| Validation procedure | Trace representative actions from human or trigger through workload identity to target and verify unique attribution. |
| Graph nodes | HumanIdentity; WorkloadIdentity; Agent; Tool |
| Graph relationships | AUTHENTICATES_AS; ACTS_FOR; INVOKES |
| Failure pattern | Shared service account obscures which agent, user or workflow caused the action. |
| Remediation outcome | Issue scoped machine identities and preserve actor-subject context in authorization and telemetry. |
| Crosswalk candidates | NIST CSF; ISO 27001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-AUT-003  Least authority and bounded scope

Grant only the actions, resources, data, environments and duration necessary for the approved task.

Grants use explicit allowlists, scoped roles, resource conditions, time limits, value limits and environment separation.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All identities, agents, tools and automated workflows. |
| Default criticality | Critical |
| Primary maturity mapping | D3.1 Authority inventory and taxonomy |
| Evidence expectation | Permission exports; policies; tool bindings; role design; access reviews; negative tests. Preferred E4-E5. |
| Validation procedure | Enumerate effective permissions and attempt approved negative cases using representative identities in safe scope. |
| Graph nodes | Identity; Role; Permission; Resource |
| Graph relationships | AUTHORIZED_TO; ASSUMES_ROLE; DENIED_BY |
| Failure pattern | Agent described as read-only but its workload identity can write, delete or administer downstream resources. |
| Remediation outcome | Reduce effective grants to task-specific actions and resources with independently enforced conditions. |
| Crosswalk candidates | NIST CSF; ISO 27001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-AUT-004  Delegation and impersonation controls

Make delegation explicit, bounded and attributable, and prevent confused-deputy or silent privilege escalation.

Delegation records grantor, delegate, audience, scope, duration, user consent or approval, actor-subject chain and revocation.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Token exchange, on-behalf-of flows, impersonation and agent delegation. |
| Default criticality | Critical |
| Primary maturity mapping | D3.2 Delegation and identity context |
| Evidence expectation | Token claims; delegation policy; consent and approval; runtime trace; negative test. Preferred E4-E5. |
| Validation procedure | Test altered audience, excess scope, replay and loss of initiating identity within authorized environment. |
| Graph nodes | Grantor; Delegate; Token; Target |
| Graph relationships | DELEGATES_TO; ACTS_FOR; AUTHORIZED_TO |
| Failure pattern | Agent acts as a user with broader rights or downstream service cannot distinguish actor and subject. |
| Remediation outcome | Use constrained delegation, audience binding, minimum scopes and preserved identity chain. |
| Crosswalk candidates | NIST CSF; ISO 27001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-AUT-005  Meaningful approval for consequential action

Require technically enforceable and transaction-bound approval before financial, legal, destructive, privileged, regulated or externally visible actions.

Approver has authority, adequate information, independence, decision freedom, time and ability to reject; approval binds exact action and parameters.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | High-impact or irreversible actions. |
| Default criticality | Critical |
| Primary maturity mapping | D3.3 Human approval and oversight |
| Evidence expectation | Workflow and policy; approval record; transaction binding; bypass, replay and mutation tests. Preferred E5. |
| Validation procedure | Attempt action without approval, replay prior approval and modify parameters after approval using safe authorized tests. |
| Graph nodes | HumanApprover; BusinessAction; Agent; Transaction |
| Graph relationships | APPROVED_BY; TRIGGERS_ACTION; BINDS_TO |
| Failure pattern | Rubber-stamp prompt, self-approval, approval after action or approval not bound to final parameters. |
| Remediation outcome | Implement independent pre-action approval bound to identity, target, parameters, value and expiry. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; OWASP Agentic; mappings are indicative and require versioned validation. |

# ATG-AUT-006  Tool, plugin and MCP allowlisting

Permit agents and applications to discover or invoke only approved tools, plugins, MCP capabilities and operations required for the task.

Allowlist is bound to identity, environment, capability, operation, target, version and approval; dynamic discovery is constrained.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Agentic, plugin and MCP-enabled systems. |
| Default criticality | Critical |
| Primary maturity mapping | D3.1 Authority inventory and taxonomy |
| Evidence expectation | Tool registry; server capability list; identity policy; bindings; negative tests; change approval. Preferred E4-E5. |
| Validation procedure | Enumerate visible and callable capabilities; attempt an unapproved operation; confirm denial and alert. |
| Graph nodes | Agent; Tool; Plugin; MCPServer; Operation |
| Graph relationships | DISCOVERS; INVOKES; AUTHORIZED_TO |
| Failure pattern | Dynamic discovery exposes additional tools or operation descriptions silently expand authority. |
| Remediation outcome | Use approved registries, explicit per-agent capability allowlists and change-triggered review. |
| Crosswalk candidates | OWASP Agentic; MITRE ATLAS; NIST AI RMF; mappings are indicative and require versioned validation. |

# ATG-AUT-007  Authority amplification assessment

Assess where identity, tool, data, workflow, temporal, trust or fan-out transitions increase effective authority or consequence.

Analysis compares authority before and after each transition and records control boundary, evidence, target expansion and residual path.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | High-impact agents, shared platforms, chained tools and delegated workflows. |
| Default criticality | Systemic |
| Primary maturity mapping | D3.4 Authority amplification control |
| Evidence expectation | Authority graph; path analysis; tool scopes; workflow behavior; tests and scenario results. Preferred E4-E5. |
| Validation procedure | Select material paths; identify the amplification step; validate effective downstream action and limiting controls. |
| Graph nodes | Identity; Agent; Tool; Workflow; Path |
| Graph relationships | AUTHORIZED_TO; INVOKES; AMPLIFIES; TRIGGERS_ACTION |
| Failure pattern | Individually valid grants compose into broad execution, disclosure or transaction capability not reviewed as a system. |
| Remediation outcome | Constrain amplification at identity, tool, workflow and consequence boundaries and validate residual authority. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; OWASP Agentic; mappings are indicative and require versioned validation. |

# ATG-AUT-008  Resource, iteration and transaction limits

Apply hard limits to agent steps, duration, tokens, cost, retries, concurrency, data volume, transactions and cumulative value.

Limits are enforced outside model instructions, scoped by identity and task, monitored, alerting and resistant to reset or parallel bypass.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Autonomous or repetitive AI workflows. |
| Default criticality | Critical |
| Primary maturity mapping | D3.4 Authority amplification control |
| Evidence expectation | Runtime configuration; policy enforcement; budget records; loop and concurrency tests; alerts. Preferred E4-E5. |
| Validation procedure | Trigger safe loops, retries or parallel calls; verify limit, stop, attribution and alert behavior. |
| Graph nodes | Agent; Workflow; Budget; Transaction |
| Graph relationships | LIMITED_BY; MONITORED_BY; TRIGGERS_ACTION |
| Failure pattern | Unbounded recursion, denial-of-wallet or repeated low-value actions bypass cumulative threshold. |
| Remediation outcome | Enforce independent budgets, circuit breakers, cumulative limits and reviewable exceptions. |
| Crosswalk candidates | OWASP Agentic; NIST AI RMF; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-AUT-009  Data disclosure and destination authority

Control which data classifications and generated or inferred information may be sent to users, providers, tools, channels or public destinations.

Policy includes recipient, purpose, classification, residency, provider retention, channel, redaction, approval and logging.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Prompt, retrieval, output, memory, logs and tool payloads. |
| Default criticality | Critical |
| Primary maturity mapping | D3.1 Authority inventory and taxonomy |
| Evidence expectation | DLP policy; destination allowlist; provider settings; data classification; authorized tests. Preferred E4-E5. |
| Validation procedure | Use approved synthetic sensitive markers to verify block, redaction, approval, destination control and incident workflow. |
| Graph nodes | Data; Output; Provider; Channel; Identity |
| Graph relationships | SENDS_TO; DISCLOSES_TO; CONTROLLED_BY |
| Failure pattern | Restricted information is inferable or generated and then sent through an allowed channel without classification control. |
| Remediation outcome | Apply classification-aware destination policy to source, retrieved, inferred and generated information. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; ISO 27001; mappings are indicative and require versioned validation. |

# ATG-AUT-010  Environment and duty separation

Separate development, test and production authority and prevent creators from unilaterally approving high-risk releases, exceptions or validation outcomes.

Roles, tenants, identities, secrets, deployment gates and emergency elevation are segregated and reviewed.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material AI engineering and operations. |
| Default criticality | Important |
| Primary maturity mapping | D3.6 Authority decision governance |
| Evidence expectation | RACI; IAM roles; pipeline gates; environment configuration; access and elevation logs. Preferred E3-E5. |
| Validation procedure | Query cross-environment permissions and sample release, exception and validation decisions for conflicts. |
| Graph nodes | Environment; Identity; Pipeline; Approver |
| Graph relationships | SEGREGATED_FROM; DEPLOYS_TO; APPROVED_BY |
| Failure pattern | Developer notebook or pipeline has direct production authority and the creator approves own critical change. |
| Remediation outcome | Implement technical environment separation, independent gates and time-bound controlled elevation. |
| Crosswalk candidates | NIST SSDF; ISO 27001; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-AUT-011  Authority revocation and end-to-end containment

Rapidly remove identities, sessions, tokens, tool bindings, queued actions and delegated grants for material actors and agents.

Revocation identifies authorized operators, triggers, scope, dependencies, expected time, verification and recovery implications.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | High-impact agents, compromised identities and provider integrations. |
| Default criticality | Critical |
| Primary maturity mapping | D3.5 Revocation and containment |
| Evidence expectation | Revocation procedure; identity/tool configuration; queue state; exercise and runtime evidence. Preferred E5. |
| Validation procedure | Run a safe authorized revocation exercise; verify active sessions, queues, downstream tokens and tools can no longer act. |
| Graph nodes | Identity; Session; Agent; Tool; Queue |
| Graph relationships | REVOKED_BY; DISABLED_BY; CONTAINS |
| Failure pattern | Front end is stopped while tokens, queued work or downstream tool access remain active. |
| Remediation outcome | Implement graph-aware revocation covering every dependent grant and verify effective removal. |
| Crosswalk candidates | NIST CSF; ISO 27001; OWASP Agentic; mappings are indicative and require versioned validation. |

# ATG-AUT-012  Authority review, exception and recertification

Periodically and event-driven review material authority, delegations, approvals, exceptions and dormant grants.

Review considers actual use, owner, necessity, amplification, expiry, policy violations, changed role and unresolved path exposure.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Standing or privileged AI authority. |
| Default criticality | Critical |
| Primary maturity mapping | D3.6 Authority decision governance |
| Evidence expectation | Access review; usage evidence; exception register; owner attestation; removal and escalation records. Preferred E3-E4. |
| Validation procedure | Sample high-impact and dormant grants; verify reviewer competence, evidence, removal and exception expiry. |
| Graph nodes | AuthorityGrant; Owner; Exception; Evidence |
| Graph relationships | REVIEWED_BY; HAS_EXCEPTION; REVOKED_BY |
| Failure pattern | Permanent access, low-level approval, stale ownership or exceptions without expiry and compensating controls. |
| Remediation outcome | Use risk-based recertification with effective-use evidence, expiry, independent challenge and closure tracking. |
| Crosswalk candidates | NIST CSF; ISO 27001; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# 4.0  AI Security Validation

The AI Security Validation family contains 12 canonical controls. Together they support Maturity Model domain D4 and must be applied according to scope, profile, applicability and critical gates.

| **Control ID** | **Control name** | **Default criticality** |
| --- | --- | --- |
| ATG-VAL-001 | Risk-based AI security validation strategy | Systemic |
| ATG-VAL-002 | Graph-based threat modelling | Critical |
| ATG-VAL-003 | Validation rules of engagement | Critical |
| ATG-VAL-004 | Model security and robustness validation | Important |
| ATG-VAL-005 | Prompt, context and output security testing | Critical |
| ATG-VAL-006 | RAG, vector and memory security testing | Critical |
| ATG-VAL-007 | Agent and multi-agent security testing | Critical |
| ATG-VAL-008 | MCP, plugin and tool security testing | Critical |
| ATG-VAL-009 | AI supply-chain and pipeline validation | Critical |
| ATG-VAL-010 | AI infrastructure and runtime validation | Important |
| ATG-VAL-011 | Control-breakpoint effectiveness validation | Systemic |
| ATG-VAL-012 | Finding traceability and closure validation | Important |

# ATG-VAL-001  Risk-based AI security validation strategy

Maintain an approved strategy that prioritizes validation by use case, path, authority, data, criticality, change and threat.

Strategy covers models, prompts, RAG, agents, MCP, tools, identity, infrastructure, engineering, providers and resilience.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All material AI portfolios and systems. |
| Default criticality | Systemic |
| Primary maturity mapping | D4.1 Validation strategy and scope |
| Evidence expectation | Validation policy; inventory/risk inputs; assurance plan; coverage and exception records. Preferred E3-E4. |
| Validation procedure | Trace selected high-impact systems from risk classification to validation scope, tests, findings and review cadence. |
| Graph nodes | AIUseCase; System; Path; TestPlan |
| Graph relationships | TESTED_BY; SUBJECT_TO; PRIORITIZED_BY |
| Failure pattern | Annual checklist ignores new agents, trust paths or material changes. |
| Remediation outcome | Adopt path- and change-aware validation planning with measured coverage and independent review. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; MITRE ATLAS; mappings are indicative and require versioned validation. |

# ATG-VAL-002  Graph-based threat modelling

Develop system-specific threat and misuse hypotheses linked to graph objects, relationships, boundaries, start conditions and consequences.

Threat model covers malicious, accidental, provider, insider, dependency and unsafe-autonomy scenarios with assumptions and controls.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material AI applications and platforms. |
| Default criticality | Critical |
| Primary maturity mapping | D4.2 Threat modeling and path hypotheses |
| Evidence expectation | Threat model; architecture/graph snapshot; scenario records; reviewer decisions. Preferred E3-E4. |
| Validation procedure | Select scenarios; verify they map to current graph, effective authority, material targets and testable controls. |
| Graph nodes | Threat; Path; Boundary; Target; Control |
| Graph relationships | THREATENS; TRAVERSES; MITIGATED_BY |
| Failure pattern | Generic threat list not connected to actual identities, tools, data or deployment. |
| Remediation outcome | Create graph-grounded hypotheses and update them after material change, incident and new technique. |
| Crosswalk candidates | MITRE ATLAS; OWASP GenAI; NIST AI RMF; mappings are indicative and require versioned validation. |

# ATG-VAL-003  Validation rules of engagement

Authorize and govern validation through explicit scope, identities, data, environments, prohibited actions, stop conditions and restoration.

ROE identifies owner, tester, windows, communications, escalation, evidence handling, safety constraints and third-party permissions.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All active security testing and red teaming. |
| Default criticality | Critical |
| Primary maturity mapping | D4.3 Rules of engagement and safety |
| Evidence expectation | Signed authorization; scope; test identities; data plan; stop and recovery procedures; completion record. Preferred E3-E5. |
| Validation procedure | Inspect representative tests; confirm activities stayed within authorization and evidence and restoration were completed. |
| Graph nodes | TestPlan; Tester; Environment; Evidence |
| Graph relationships | AUTHORIZED_BY; TESTED_BY; EVIDENCED_BY |
| Failure pattern | Testing begins from verbal approval, uses production data unnecessarily or lacks stop conditions. |
| Remediation outcome | Use formal ROE and safety review proportionate to potential system and business consequence. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST SP 800-115; mappings are indicative and require versioned validation. |

# ATG-VAL-004  Model security and robustness validation

Validate model provenance, integrity, task suitability, abuse resistance, failure behavior and deployment-specific limitations.

Tests use representative datasets and conditions, versioned model/endpoints, approved thresholds, subgroup/failure analysis and limitation records.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Deployed foundation, fine-tuned, adapted, embedding and guardrail models. |
| Default criticality | Important |
| Primary maturity mapping | D4.1 Validation strategy and scope |
| Evidence expectation | Model card; registry and hash; evaluation datasets; test results; deployment version. Preferred E4-E5. |
| Validation procedure | Reproduce selected evaluations and failure cases; verify endpoint/model version and acceptance criteria. |
| Graph nodes | Model; Endpoint; Dataset; Test |
| Graph relationships | DEPLOYED_TO; TESTED_BY; DERIVED_FROM |
| Failure pattern | Generic vendor benchmark or wrong model version used as deployment assurance. |
| Remediation outcome | Perform deployment-specific model validation with traceable versions, representative tests and approved limits. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; MITRE ATLAS; mappings are indicative and require versioned validation. |

# ATG-VAL-005  Prompt, context and output security testing

Test resistance to instruction manipulation, context confusion, sensitive disclosure, unsafe output and downstream output handling.

Coverage includes system/developer prompts, indirect input, tool descriptions, memory, output schemas, encoding and multi-turn behavior.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | AI applications using prompts or generated outputs. |
| Default criticality | Critical |
| Primary maturity mapping | D4.2 Threat modeling and path hypotheses |
| Evidence expectation | Prompt assets; test corpus; traces; guardrail configuration; findings and retest. Preferred E4-E5. |
| Validation procedure | Execute approved benign and adversarial cases; validate policy boundaries, output handling and residual failure modes. |
| Graph nodes | Prompt; Context; Model; Output; Guardrail |
| Graph relationships | INFLUENCES; RETURNS_TO; GUARDED_BY; TESTED_BY |
| Failure pattern | One-shot prompt test misses indirect, encoded, multi-turn or tool-mediated manipulation. |
| Remediation outcome | Use versioned scenario suites across context sources and validate independent downstream controls. |
| Crosswalk candidates | OWASP GenAI; MITRE ATLAS; NIST AI RMF; mappings are indicative and require versioned validation. |

# ATG-VAL-006  RAG, vector and memory security testing

Validate source authorization, ingestion integrity, chunk/vector isolation, retrieval filtering, grounding, over-retrieval and memory lifecycle.

Tests cover cross-user or tenant access, poisoned sources, broad queries, citation support, cache, memory influence and deletion.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | RAG, enterprise search, vector and memory-enabled systems. |
| Default criticality | Critical |
| Primary maturity mapping | D4.2 Threat modeling and path hypotheses |
| Evidence expectation | Source ACLs; index configuration; retrieval traces; synthetic markers; deletion and negative tests. Preferred E4-E5. |
| Validation procedure | Use approved synthetic records to test isolation, retrieval authorization, poisoning detection, grounding and deletion. |
| Graph nodes | Source; Chunk; VectorIndex; Retriever; Memory |
| Graph relationships | INDEXES; RETRIEVES_FROM; AUGMENTS; STORES_IN |
| Failure pattern | Metadata filter substitutes for source authorization, or deleted source persists in vector/cache/memory. |
| Remediation outcome | Enforce source-context authorization, lineage, isolation, integrity and verified lifecycle across retrieval layers. |
| Crosswalk candidates | OWASP GenAI; MITRE ATLAS; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-VAL-007  Agent and multi-agent security testing

Validate goal boundaries, planning, tool choice, inter-agent trust, resource limits, approval, failure handling and containment.

Tests cover out-of-scope goals, delegated messages, loops, retries, memory, identity, conflicting agents and high-impact actions.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Agentic and multi-agent systems. |
| Default criticality | Critical |
| Primary maturity mapping | D4.2 Threat modeling and path hypotheses |
| Evidence expectation | Agent definitions; traces; tool policies; delegation graph; approval and kill tests. Preferred E5. |
| Validation procedure | Attempt approved out-of-scope tasks, excessive iterations, unauthorized delegation and consequential actions in controlled conditions. |
| Graph nodes | Agent; Planner; AgentMessage; Tool; HumanApprover |
| Graph relationships | INSTRUCTS; SENDS_TO; INVOKES; APPROVED_BY |
| Failure pattern | Agent self-expands scope, chains tools without approval or continues after stop. |
| Remediation outcome | Use bounded goals, per-agent identity, tool policy, resource limits, meaningful approval and tested containment. |
| Crosswalk candidates | OWASP Agentic; NIST AI RMF; MITRE ATLAS; mappings are indicative and require versioned validation. |

# ATG-VAL-008  MCP, plugin and tool security testing

Validate capability discovery, authentication, authorization, descriptions, operation schemas, downstream actions and change control for tools and MCP services.

Tests cover unauthorized enumeration, tool poisoning, parameter tampering, confused deputy, broad scopes, server change and output trust.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | MCP clients/servers, plugins, agent skills and APIs. |
| Default criticality | Critical |
| Primary maturity mapping | D4.2 Threat modeling and path hypotheses |
| Evidence expectation | Registries; server/tool definitions; auth config; operation traces; negative tests; version/change records. Preferred E4-E5. |
| Validation procedure | Enumerate effective capabilities and test denied operations, tampered parameters and unsafe description influence within authorization. |
| Graph nodes | MCPClient; MCPServer; Tool; Operation; Identity |
| Graph relationships | DISCOVERS; EXPOSES; INVOKES; AUTHORIZED_TO |
| Failure pattern | Server exposes more tools than approved or model trusts malicious description as policy. |
| Remediation outcome | Validate capabilities independently, constrain operations and require reviewed registration and change. |
| Crosswalk candidates | OWASP Agentic; MITRE ATLAS; NIST AI RMF; mappings are indicative and require versioned validation. |

# ATG-VAL-009  AI supply-chain and pipeline validation

Validate provenance, integrity, approval and separation for models, datasets, prompts, code, packages, tools, containers and deployment workflows.

Controls cover trusted sources, signing, dependency review, secrets, isolated build, admission, release approval and artifact-to-runtime traceability.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | AI engineering, MLOps, LLMOps and CI/CD. |
| Default criticality | Critical |
| Primary maturity mapping | D4.1 Validation strategy and scope |
| Evidence expectation | Repositories; SBOM/AIBOM; signatures; pipeline policy; build and deployment logs; test evidence. Preferred E4-E5. |
| Validation procedure | Trace selected release from source to runtime; verify integrity, approvals, dependency policy and environment separation. |
| Graph nodes | Repository; Pipeline; Artifact; Model; Prompt |
| Graph relationships | BUILT_FROM; SIGNED_BY; DEPLOYS_TO; APPROVED_BY |
| Failure pattern | Unsigned or untraceable prompt/model/tool reaches production outside approved pipeline. |
| Remediation outcome | Use controlled sources, signed artifacts, isolated pipelines, policy gates and deployment reconciliation. |
| Crosswalk candidates | NIST SSDF; SLSA; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-VAL-010  AI infrastructure and runtime validation

Validate workload hardening, segmentation, private access, egress, secrets, isolation, patching, capacity and runtime detection.

Testing reflects actual model, agent, RAG and tool environments and includes cloud, container, serverless, endpoint and provider boundaries.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | AI runtime and supporting infrastructure. |
| Default criticality | Important |
| Primary maturity mapping | D4.1 Validation strategy and scope |
| Evidence expectation | Cloud/runtime configuration; network paths; workload identity; vulnerability and runtime evidence. Preferred E4-E5. |
| Validation procedure | Inspect representative workloads and perform authorized reachability, configuration and isolation tests. |
| Graph nodes | Workload; Cluster; Network; Endpoint; Secret |
| Graph relationships | RUNS_ON; CONNECTS_TO; CAN_EGRESS_TO; MONITORED_BY |
| Failure pattern | Public endpoint, broad egress, privileged runtime or shared secret creates unintended paths. |
| Remediation outcome | Apply hardened baselines, segmented identity-aware access, controlled egress and runtime assurance. |
| Crosswalk candidates | NIST CSF; ISO 27001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-VAL-011  Control-breakpoint effectiveness validation

Test whether critical controls actually prevent, constrain, detect or contain the material paths they claim to address.

Procedure states path, breakpoint, preconditions, test identity, expected result, alternate routes, evidence and limitations.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Critical and Systemic controls on material paths. |
| Default criticality | Systemic |
| Primary maturity mapping | D4.4 Control effectiveness testing |
| Evidence expectation | Control design; graph path; current configuration; representative test; residual-path analysis. Preferred E5. |
| Validation procedure | Execute authorized path-focused tests; confirm the breakpoint effect and search for residual or alternate routes. |
| Graph nodes | Control; Path; Test; Evidence |
| Graph relationships | BREAKS_PATH; TESTED_BY; EVIDENCED_BY |
| Failure pattern | Control passes isolated unit test but does not interrupt the end-to-end path. |
| Remediation outcome | Validate controls in path context and retain evidence of residual and alternate routes. |
| Crosswalk candidates | NIST AI RMF; MITRE ATLAS; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-VAL-012  Finding traceability and closure validation

Issue findings with criteria, condition, cause, affected objects and paths, consequence, evidence, confidence, owner and remediation objective; close only after retest.

Closure preserves prior result, implementation evidence, representative retest, residual path, reviewer and decision.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All AI security validation findings. |
| Default criticality | Important |
| Primary maturity mapping | D4.5 Finding quality and closure |
| Evidence expectation | Finding record; evidence; affected graph references; remediation and independent retest. Preferred E3-E5. |
| Validation procedure | Sample findings from issue to closure; verify score did not change from plan or acceptance alone and residual exposure was reassessed. |
| Graph nodes | Finding; Control; Path; Evidence; Decision |
| Graph relationships | HAS_FINDING; MITIGATED_BY; TESTED_BY; CLOSED_BY |
| Failure pattern | Generic recommendation, no graph traceability or closure based on screenshot and owner statement. |
| Remediation outcome | Use evidence-linked findings and independent closure validation with residual-path review. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# 5.0  AI Governance and Assurance

The AI Governance and Assurance family contains 12 canonical controls. Together they support Maturity Model domain D5 and must be applied according to scope, profile, applicability and critical gates.

| **Control ID** | **Control name** | **Default criticality** |
| --- | --- | --- |
| ATG-GOV-001 | Enterprise AI policy and acceptable use | Important |
| ATG-GOV-002 | AI risk appetite and decision thresholds | Critical |
| ATG-GOV-003 | AI governance operating model and accountability | Systemic |
| ATG-GOV-004 | AI use-case intake and registration | Critical |
| ATG-GOV-005 | Impact, affected-stakeholder and misuse assessment | Critical |
| ATG-GOV-006 | Prohibited and high-risk use screening | Critical |
| ATG-GOV-007 | Regulatory role, jurisdiction and obligation mapping | Critical |
| ATG-GOV-008 | Lifecycle approval and material-change governance | Critical |
| ATG-GOV-009 | Exception and risk-acceptance governance | Critical |
| ATG-GOV-010 | AI provider due diligence and contracting | Critical |
| ATG-GOV-011 | Role-based AI literacy and competence | Important |
| ATG-GOV-012 | Independent assurance and continuous review | Systemic |

# ATG-GOV-001  Enterprise AI policy and acceptable use

Maintain an approved policy defining permitted, restricted and prohibited AI use, lifecycle obligations, roles, data handling and exception process.

Policy covers employees, contractors, builders, third parties, sanctioned and shadow AI, models, agents, tools and public outputs.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Enterprise use of AI. |
| Default criticality | Important |
| Primary maturity mapping | D5.1 Strategy, policy and risk appetite |
| Evidence expectation | Approved policy; communication; review history; acceptance/awareness and exception records. Preferred E3. |
| Validation procedure | Compare policy scope with discovered estate and sample user/builder understanding and one exception. |
| Graph nodes | Policy; Actor; AIUseCase; Exception |
| Graph relationships | SUBJECT_TO; APPROVED_BY; HAS_EXCEPTION |
| Failure pattern | Draft-only policy, model-only scope, expired review or no exception route. |
| Remediation outcome | Adopt risk-based policy with measurable boundaries, roles, review and time-bound exception workflow. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-GOV-002  AI risk appetite and decision thresholds

Define tolerances and escalation thresholds for impact, data, autonomy, authority, public exposure, irreversible action, providers and evidence.

Thresholds link use-case tiering, approval authority, required controls, validation depth, exceptions and target maturity.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Enterprise or portfolio AI governance. |
| Default criticality | Critical |
| Primary maturity mapping | D5.1 Strategy, policy and risk appetite |
| Evidence expectation | Risk appetite; thresholds; decision matrix; sampled decisions and exceptions. Preferred E3-E4. |
| Validation procedure | Sample high-impact and borderline uses; verify the actual decision follows approved thresholds and evidence requirements. |
| Graph nodes | RiskAppetite; AIUseCase; Decision; Control |
| Graph relationships | CLASSIFIED_AS; APPROVED_BY; REQUIRES |
| Failure pattern | Generic ethics principles with no measurable threshold or inconsistent approval. |
| Remediation outcome | Define measurable thresholds and bind them to intake, release, validation and escalation gates. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; ISO/IEC 23894; mappings are indicative and require versioned validation. |

# ATG-GOV-003  AI governance operating model and accountability

Assign business, product, model, data, security, privacy, legal, operations, validation and risk-acceptance decision rights.

Operating model separates first-line ownership, independent challenge and assurance; conflicts and delegated authority are documented.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Enterprise and business-unit AI governance. |
| Default criticality | Systemic |
| Primary maturity mapping | D5.3 Decision rights and accountability |
| Evidence expectation | RACI; committee charters; role appointments; decisions; conflict and escalation records. Preferred E3-E4. |
| Validation procedure | Trace representative use-case, model, data, agent, exception and risk decisions to authorized roles. |
| Graph nodes | Actor; Committee; Decision; AIUseCase |
| Graph relationships | ACCOUNTABLE_TO; APPROVED_BY; CHALLENGED_BY |
| Failure pattern | Committee lacks authority, responsibilities overlap or creator approves own high-risk work. |
| Remediation outcome | Establish federated decision rights, independent challenge, conflict management and accountable owners. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-GOV-004  AI use-case intake and registration

Register production, pilot and material experimental AI use cases before access, funding, procurement or deployment.

Register includes purpose, owner, users, affected stakeholders, models, data, agents/tools, geography, environment, authority and lifecycle.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | All material AI use cases. |
| Default criticality | Critical |
| Primary maturity mapping | D5.2 Use-case intake and tiering |
| Evidence expectation | Use-case register; intake form; approvals; reconciliation with discovery, procurement and deployment. Preferred E3-E4. |
| Validation procedure | Sample discovered services and deployments; verify registration timing, completeness and unresolved shadow use. |
| Graph nodes | AIUseCase; Owner; Model; Data; Agent; Jurisdiction |
| Graph relationships | OWNED_BY; USES; SUBJECT_TO; APPROVED_BY |
| Failure pattern | Unregistered pilots, post-deployment intake or material fields missing. |
| Remediation outcome | Make registration a prerequisite and reconcile regularly with technical discovery. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; ISO/IEC 23894; mappings are indicative and require versioned validation. |

# ATG-GOV-005  Impact, affected-stakeholder and misuse assessment

Assess intended use, excluded use, foreseeable misuse, affected stakeholders, consequence, reversibility and safeguards.

Assessment covers financial, safety, legal, employment, access, customer, social, operational, confidentiality and integrity impacts as applicable.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | New and materially changed AI use cases. |
| Default criticality | Critical |
| Primary maturity mapping | D5.2 Use-case intake and tiering |
| Evidence expectation | Impact assessment; user journeys; misuse scenarios; stakeholder review; decisions and safeguards. Preferred E3-E4. |
| Validation procedure | Compare documented use and misuse with actual features, authority, users, logs and downstream decisions. |
| Graph nodes | AIUseCase; AffectedStakeholder; Consequence; Safeguard |
| Graph relationships | AFFECTS; EXCLUDED_FROM; MITIGATED_BY |
| Failure pattern | Technology-only assessment omits affected individuals, downstream use or irreversible consequence. |
| Remediation outcome | Use structured impact and misuse analysis linked to design, controls, monitoring and approval. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; ISO/IEC 23894; mappings are indicative and require versioned validation. |

# ATG-GOV-006  Prohibited and high-risk use screening

Screen use cases before build, procurement and material change for prohibited practices, enhanced obligations and mandatory escalation.

Screening records facts, jurisdiction, role, criteria source, reviewer, uncertainty, effective date and decision.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Use cases potentially subject to legal, sector or policy restrictions. |
| Default criticality | Critical |
| Primary maturity mapping | D5.4 Applicability and obligations |
| Evidence expectation | Screening record; legal or policy input; use-case facts; decision and reassessment trigger. Preferred E3. |
| Validation procedure | Sample high-impact uses and changes; verify screening was timely, fact-specific and reflected observed capability. |
| Graph nodes | AIUseCase; Obligation; Jurisdiction; Decision |
| Graph relationships | SUBJECT_TO; CLASSIFIED_AS; APPROVED_BY |
| Failure pattern | Late screening, unsupported conclusion or no rescreen after autonomy, purpose or geography change. |
| Remediation outcome | Embed current, fact-specific screening in intake and change governance with uncertainty escalation. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; applicable jurisdiction review; mappings are indicative and require versioned validation. |

# ATG-GOV-007  Regulatory role, jurisdiction and obligation mapping

Determine applicable legal entity, provider/deployer role, jurisdiction, sector, population, effective date and obligation for each material use case.

Obligations map to facts, owners, controls, evidence and legal validation status; unresolved applicability remains visible.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Regulated, cross-border or high-impact AI. |
| Default criticality | Critical |
| Primary maturity mapping | D5.4 Applicability and obligations |
| Evidence expectation | Versioned applicability analysis; contracts; data flows; deployment and user facts; legal review. Preferred E3-E4. |
| Validation procedure | Trace selected obligation from source and fact pattern to use case, control, evidence and decision; verify currency. |
| Graph nodes | Jurisdiction; RegulatoryRole; Obligation; AIUseCase; Control |
| Graph relationships | SUBJECT_TO; MAPS_TO; EVIDENCED_BY |
| Failure pattern | Generic global mapping with no entity, role, geography or effective-date analysis. |
| Remediation outcome | Create versioned, fact-specific applicability records with legal validation and change triggers. |
| Crosswalk candidates | ISO/IEC 42001; NIST AI RMF; jurisdiction-specific sources; mappings are indicative and require versioned validation. |

# ATG-GOV-008  Lifecycle approval and material-change governance

Apply risk-based gates to design, data, model, prompt, agent, tool, provider, release and retirement changes.

Gates define evidence, validators, decision rights, conditions, exceptions, deployment block and post-approval monitoring.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material AI lifecycle decisions. |
| Default criticality | Critical |
| Primary maturity mapping | D5.3 Decision rights and accountability |
| Evidence expectation | Lifecycle process; change events; approval and conditions; deployment evidence; reassessment. Preferred E3-E5. |
| Validation procedure | Sample model, prompt, tool, data or provider changes; verify reassessment and approval occurred before production effect. |
| Graph nodes | ChangeEvent; AIUseCase; Artifact; Decision |
| Graph relationships | TRIGGERS; APPROVED_BY; DEPLOYS_TO |
| Failure pattern | Major capability change deployed under an old assessment or conditions remain untracked. |
| Remediation outcome | Integrate material-change triggers with evidence gates, independent review and deployment enforcement. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; NIST SSDF; mappings are indicative and require versioned validation. |

# ATG-GOV-009  Exception and risk-acceptance governance

Ensure exceptions are reasoned, authorized at the correct level, time-bound, transparent and supported by compensating controls and remediation.

Record scope, rationale, affected controls/paths, residual exposure, approver, conflicts, expiry, owner, milestones and retest.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Departures from policy, control or target state. |
| Default criticality | Critical |
| Primary maturity mapping | D5.5 Exceptions and risk acceptance |
| Evidence expectation | Exception register; approval; compensating-control evidence; expiry alerts; closure or renewal. Preferred E3-E5. |
| Validation procedure | Sample high-risk exceptions; verify authority, validity, evidence, compensating operation and expiry disposition. |
| Graph nodes | Exception; Decision; Control; Path |
| Graph relationships | HAS_EXCEPTION; APPROVED_BY; MITIGATED_BY |
| Failure pattern | Permanent waiver, low-level approval, no expiry or compensating control not tested. |
| Remediation outcome | Use tiered approval, explicit path impact, expiry, evidence and independent closure review. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-GOV-010  AI provider due diligence and contracting

Perform service-specific due diligence and contractual review for model, SaaS, tool, data, hosting, annotation and integration providers.

Review security, privacy, training/retention, deletion, residency, subprocessors, incidents, audit, IP, resilience, exit and shared responsibility.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material external AI providers. |
| Default criticality | Critical |
| Primary maturity mapping | D5.4 Applicability and obligations |
| Evidence expectation | Due diligence; contract; provider evidence; configuration; risk decision; remediation and review. Preferred E3-E4. |
| Validation procedure | Sample providers; compare contract, technical settings, actual data flow and unresolved findings. |
| Graph nodes | Provider; Contract; Data; Control; Decision |
| Graph relationships | PROVIDED_BY; SUBJECT_TO; CONTROLS |
| Failure pattern | Marketing assurance differs from contract or tenant configuration, or provider evidence is not service-specific. |
| Remediation outcome | Align contract, configuration, responsibility, evidence access, incident and exit requirements to actual use. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-GOV-011  Role-based AI literacy and competence

Provide and assess role-specific competence for users, developers, approvers, validators, operators, executives and responders.

Learning covers acceptable use, data, prompt/RAG/agent risks, authority, testing, escalation, incident and role decisions; competence is evaluated.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Personnel involved in material AI use or oversight. |
| Default criticality | Important |
| Primary maturity mapping | D5.6 Assurance, reporting and literacy |
| Evidence expectation | Curriculum; role mapping; completion; assessments; scenarios; refresher and exception records. Preferred E3-E4. |
| Validation procedure | Sample role holders; inspect learning and test practical understanding of decisions and escalation. |
| Graph nodes | Actor; Role; Training; Decision |
| Graph relationships | REQUIRES; COMPLETED_BY; AUTHORIZED_TO |
| Failure pattern | Generic awareness course with no role-specific scenarios or competence check. |
| Remediation outcome | Implement role-based learning, assessments, simulations and refresh triggered by material change. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-GOV-012  Independent assurance and continuous review

Plan risk-based independent assurance and review controls, mappings, tests, maturity and decisions after change, incident or recurring weakness.

Assurance defines independence, competence, scope, evidence, quality review, reporting, issue tracking and follow-up.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material AI portfolios, shared platforms and high-impact systems. |
| Default criticality | Systemic |
| Primary maturity mapping | D5.6 Assurance, reporting and literacy |
| Evidence expectation | Assurance plan; reviewer independence; reports; quality review; findings and closure. Preferred E3-E5. |
| Validation procedure | Sample high-risk systems and recurring issues; verify assurance depth, challenge, retained evidence and remediation validation. |
| Graph nodes | AssurancePlan; Reviewer; Finding; Control |
| Graph relationships | REVIEWED_BY; HAS_FINDING; TESTED_BY |
| Failure pattern | Self-assessment only, conflict of interest, policy-only review or recurring gaps without method change. |
| Remediation outcome | Establish independent challenge and use outcomes to improve policy, controls, tests and target maturity. |
| Crosswalk candidates | NIST AI RMF; ISO/IEC 42001; CSA AICM; mappings are indicative and require versioned validation. |

# 6.0  Operational Resilience

The Operational Resilience family contains 12 canonical controls. Together they support Maturity Model domain D6 and must be applied according to scope, profile, applicability and critical gates.

| **Control ID** | **Control name** | **Default criticality** |
| --- | --- | --- |
| ATG-RES-001 | AI activity telemetry coverage | Systemic |
| ATG-RES-002 | Action attribution and non-repudiation | Critical |
| ATG-RES-003 | AI-specific detection and alerting | Critical |
| ATG-RES-004 | AI incident taxonomy and severity | Important |
| ATG-RES-005 | Incident triage and decision coordination | Critical |
| ATG-RES-006 | Graph-aware containment planning | Critical |
| ATG-RES-007 | Agent kill, pause and isolation | Critical |
| ATG-RES-008 | Credential, token and delegation revocation | Critical |
| ATG-RES-009 | Safe rollback and configuration restoration | Important |
| ATG-RES-010 | Business recovery and compensation | Critical |
| ATG-RES-011 | Incident evidence preservation and reconstruction | Critical |
| ATG-RES-012 | Resilience exercises, learning and improvement | Systemic |

# ATG-RES-001  AI activity telemetry coverage

Capture sufficient telemetry to reconstruct material prompts, context, retrieval, model/agent decisions, identity use, tool calls, approvals, actions and outcomes.

Requirements define event schema, source, time synchronization, identity, correlation, retention, integrity, privacy and availability.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material AI systems and high-impact workflows. |
| Default criticality | Systemic |
| Primary maturity mapping | D6.1 Observability and attribution |
| Evidence expectation | Logging architecture; source configuration; sample events; coverage map; retention and integrity evidence. Preferred E4-E5. |
| Validation procedure | Trace selected material actions across components and identify missing events, context or correlation. |
| Graph nodes | AIEvent; Identity; Agent; Tool; Approval; Outcome |
| Graph relationships | LOGS_TO; OBSERVED_BY; CORRELATES_TO |
| Failure pattern | Application logs exist but initiating identity, retrieved context, tool parameters or approval cannot be reconstructed. |
| Remediation outcome | Implement end-to-end event correlation and measured telemetry coverage for material paths. |
| Crosswalk candidates | NIST CSF; ISO 27001; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-RES-002  Action attribution and non-repudiation

Attribute each material AI action to the initiating actor, machine identity, model/agent version, tool, approval and target.

Attribution resists shared identities, timestamp gaps, mutable records and loss of actor-subject context.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Consequential, privileged, regulated or externally visible actions. |
| Default criticality | Critical |
| Primary maturity mapping | D6.1 Observability and attribution |
| Evidence expectation | Identity claims; signed or integrity-protected events; transaction records; correlation and review. Preferred E5. |
| Validation procedure | Reconstruct representative actions and verify actor, subject, machine principal, decision, parameters and outcome. |
| Graph nodes | Actor; Identity; Agent; Action; Evidence |
| Graph relationships | ACTS_FOR; TRIGGERS_ACTION; EVIDENCED_BY |
| Failure pattern | Log shows service account action but cannot identify initiating user, agent version or approval. |
| Remediation outcome | Preserve actor-subject chain and integrity-protected action records across every material boundary. |
| Crosswalk candidates | NIST CSF; ISO 27001; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-RES-003  AI-specific detection and alerting

Detect material AI misuse, unsafe action, identity anomaly, tool abuse, data disclosure, control bypass, drift and provider events.

Detection rules link event patterns to assets, paths, severity, owner, evidence and response; blind spots and false positives are measured.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material AI systems and shared services. |
| Default criticality | Critical |
| Primary maturity mapping | D6.2 Detection and triage |
| Evidence expectation | Detection catalogue; rule logic; telemetry mapping; alerts; tuning; seeded tests. Preferred E4-E5. |
| Validation procedure | Run approved benign simulations or replay representative events; verify alert, attribution, severity and routing. |
| Graph nodes | AIEvent; Detection; Path; Identity; Agent |
| Graph relationships | MONITORED_BY; TRIGGERS; HAS_FINDING |
| Failure pattern | Generic application alerts miss prompt, retrieval, agent, tool or approval anomalies. |
| Remediation outcome | Implement graph-aware detections tied to material behaviors, identities, boundaries and response actions. |
| Crosswalk candidates | NIST CSF; MITRE ATLAS; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-RES-004  AI incident taxonomy and severity

Define AI-specific incident categories, severity and escalation for data leakage, unsafe action, model compromise, poisoning, prompt attack, tool misuse, provider failure and control collapse.

Severity considers consequence, authority, reachability, amplification, affected stakeholders, obligations, confidence and containment.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Enterprise incident management involving AI. |
| Default criticality | Important |
| Primary maturity mapping | D6.2 Detection and triage |
| Evidence expectation | Incident taxonomy; severity matrix; playbooks; examples; governance approval and review. Preferred E3-E4. |
| Validation procedure | Classify synthetic scenarios and sampled incidents; compare decisions across responders and resolve ambiguity. |
| Graph nodes | Incident; Threat; Path; Consequence |
| Graph relationships | CLASSIFIED_AS; AFFECTS; TRIGGERS |
| Failure pattern | Generic cyber taxonomy cannot represent unsafe autonomous action or provider/model failure. |
| Remediation outcome | Integrate AI-specific scenarios, graph context and consequence into incident classification and escalation. |
| Crosswalk candidates | NIST CSF; ISO 27001; NIST AI RMF; mappings are indicative and require versioned validation. |

# ATG-RES-005  Incident triage and decision coordination

Triage AI events using current asset, identity, authority, path, data, provider and evidence context and coordinate accountable decisions.

Playbooks identify roles, investigation questions, containment authority, legal/privacy escalation, communications and decision log.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | AI alerts and incidents. |
| Default criticality | Critical |
| Primary maturity mapping | D6.2 Detection and triage |
| Evidence expectation | Triage records; graph/context access; decision log; escalation and communication evidence. Preferred E3-E5. |
| Validation procedure | Run a tabletop or sample incident; verify responders identify affected paths, authority, data, owner and required decisions. |
| Graph nodes | Incident; Responder; Decision; Path; Evidence |
| Graph relationships | TRIAGED_BY; ESCALATED_TO; AFFECTS |
| Failure pattern | Triage focuses on front-end symptom and misses downstream identity, tools, data or queued actions. |
| Remediation outcome | Use graph-informed triage with cross-functional decision rights and retained rationale. |
| Crosswalk candidates | NIST CSF; ISO 27001; NIST AI RMF; mappings are indicative and require versioned validation. |

# ATG-RES-006  Graph-aware containment planning

Define containment options across models, agents, prompts, tools, routes, providers, data flows, identities, queues and downstream business actions.

Plan states authorized operators, triggers, sequence, dependencies, expected effect, side effects, verification and fallback.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | High-impact AI systems and critical shared dependencies. |
| Default criticality | Critical |
| Primary maturity mapping | D6.3 Containment and kill mechanisms |
| Evidence expectation | Containment playbook; graph dependencies; control configuration; exercise results. Preferred E3-E5. |
| Validation procedure | For selected scenarios, trace containment sequence and verify it addresses every active path and dependency. |
| Graph nodes | Incident; Agent; Tool; Identity; Queue; Provider |
| Graph relationships | CONTAINED_BY; DEPENDS_ON; DISABLED_BY |
| Failure pattern | Stopping user interface leaves API, token, queue, tool or provider path active. |
| Remediation outcome | Design containment from complete dependency and authority paths and verify end-to-end effect. |
| Crosswalk candidates | NIST CSF; ISO 27001; OWASP Agentic; mappings are indicative and require versioned validation. |

# ATG-RES-007  Agent kill, pause and isolation

Provide authorized mechanisms to stop, pause or isolate agents and prevent new planning, tool invocation, messaging and queued execution.

Mechanism covers coordinator, workers, sessions, queues, scheduled jobs, memory writes and tool channels and reports state.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Agentic and multi-agent systems. |
| Default criticality | Critical |
| Primary maturity mapping | D6.3 Containment and kill mechanisms |
| Evidence expectation | Kill/pause design; operator roles; system state; exercise and verification evidence. Preferred E5. |
| Validation procedure | Perform safe exercise; verify current and queued work stops, new actions are denied and operator can confirm containment. |
| Graph nodes | Agent; Planner; Queue; Tool; Operator |
| Graph relationships | DISABLED_BY; PAUSED_BY; INVOKES |
| Failure pattern | UI stop hides activity while worker agents, retries or queues continue. |
| Remediation outcome | Implement coordinated kill and isolation across agent runtime, orchestration and action surfaces. |
| Crosswalk candidates | OWASP Agentic; NIST AI RMF; NIST CSF; mappings are indicative and require versioned validation. |

# ATG-RES-008  Credential, token and delegation revocation

Rapidly revoke compromised or unsafe AI identities, secrets, tokens, sessions, consent and delegated authority.

Revocation propagates to active sessions, caches, downstream services and refresh paths and is verified.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Machine identities, delegated access and provider integrations. |
| Default criticality | Critical |
| Primary maturity mapping | D6.3 Containment and kill mechanisms |
| Evidence expectation | IAM procedures; token/session configuration; audit events; revocation exercise. Preferred E5. |
| Validation procedure | Revoke approved test identity or session and verify all downstream and refreshed access fails. |
| Graph nodes | Identity; Token; Session; Delegation |
| Graph relationships | REVOKED_BY; AUTHENTICATES_AS; DELEGATES_TO |
| Failure pattern | Credential disabled but existing sessions, refresh tokens or delegated grants remain effective. |
| Remediation outcome | Implement end-to-end revocation and verify effective denial across all dependent paths. |
| Crosswalk candidates | NIST CSF; ISO 27001; CSA AICM; mappings are indicative and require versioned validation. |

# ATG-RES-009  Safe rollback and configuration restoration

Restore approved model, prompt, tool, policy, routing, identity and configuration states after unsafe or defective change.

Rollback uses versioned known-good artifacts, approvals, integrity checks, dependency compatibility, state handling and post-restore validation.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Changeable AI production systems. |
| Default criticality | Important |
| Primary maturity mapping | D6.4 Recovery, rollback and compensation |
| Evidence expectation | Version history; signed artifacts; rollback runbook; exercise; post-restore test. Preferred E4-E5. |
| Validation procedure | Perform controlled rollback or inspect recent example; verify integrity, dependencies, state and validation before service resumption. |
| Graph nodes | Artifact; Configuration; Model; Prompt; ChangeEvent |
| Graph relationships | SUPERSEDES; RESTORED_BY; TESTED_BY |
| Failure pattern | Rollback restores code but leaves prompt, model, tool or permission mismatch. |
| Remediation outcome | Maintain complete known-good system state and validate restoration across dependent components. |
| Crosswalk candidates | NIST CSF; NIST SSDF; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-RES-010  Business recovery and compensation

Recover data, service and business state and compensate for erroneous, duplicated, irreversible or externally visible AI actions where possible.

Plans define recovery objectives, data integrity, transaction reconciliation, customer or stakeholder handling, compensation authority and evidence.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | AI systems capable of consequential action or service dependency. |
| Default criticality | Critical |
| Primary maturity mapping | D6.4 Recovery, rollback and compensation |
| Evidence expectation | Business continuity plan; transaction/state records; recovery tests; compensation decisions. Preferred E3-E5. |
| Validation procedure | Exercise representative failure; verify technical recovery, business reconciliation, decision authority and residual impact. |
| Graph nodes | BusinessAction; Transaction; Data; RecoveryPlan |
| Graph relationships | RECOVERED_BY; COMPENSATED_BY; APPROVED_BY |
| Failure pattern | Infrastructure returns but incorrect transactions, disclosures or decisions remain unresolved. |
| Remediation outcome | Integrate technical recovery with business-state reconciliation, compensation and accountable communication. |
| Crosswalk candidates | NIST CSF; ISO 22301; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-RES-011  Incident evidence preservation and reconstruction

Preserve versions, prompts, context, retrieval, identities, plans, tool calls, approvals, actions, outputs and provider records needed to reconstruct an incident.

Evidence handling includes timestamps, integrity, access, chain of custody, retention, sensitivity, legal hold and known gaps.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material AI incidents and investigations. |
| Default criticality | Critical |
| Primary maturity mapping | D6.5 Incident reconstruction and evidence |
| Evidence expectation | Forensic schema; immutable references; retention; chain of custody; reconstruction exercise. Preferred E4-E5. |
| Validation procedure | Reconstruct a synthetic or approved historical incident and identify missing evidence and unverifiable transitions. |
| Graph nodes | Incident; Evidence; GraphSnapshot; Action |
| Graph relationships | EVIDENCED_BY; OBSERVED_BY; CORRELATES_TO |
| Failure pattern | Model version, retrieved context, agent plan, tool parameters or approval is unavailable. |
| Remediation outcome | Adopt AI forensic schema and preserve evidence sufficient for path, authority and decision reconstruction. |
| Crosswalk candidates | NIST CSF; ISO 27001; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# ATG-RES-012  Resilience exercises, learning and improvement

Exercise misuse, compromise, unsafe action, provider outage, identity failure, control collapse and recovery, then convert lessons into governed improvements.

Exercises measure detection, decisions, containment, revocation, recovery, communications, evidence and residual paths; actions have owners and retest.

| **Control field** | **Canonical requirement** |
| --- | --- |
| Applicability | Material AI systems, providers and shared platforms. |
| Default criticality | Systemic |
| Primary maturity mapping | D6.6 Exercises, learning and resilience governance |
| Evidence expectation | Scenario library; exercise records; metrics; findings; action closure and regression tests. Preferred E3-E5. |
| Validation procedure | Review exercises and sampled action closure; verify lessons changed architecture, controls, tests, training or graph assumptions. |
| Graph nodes | Exercise; IncidentScenario; Finding; Control; Path |
| Graph relationships | TESTED_BY; HAS_FINDING; MITIGATED_BY |
| Failure pattern | Tabletop ends with minutes but no control change, owner, retest or path reassessment. |
| Remediation outcome | Use graph-based exercises and track lessons through implementation, validation and updated resilience targets. |
| Crosswalk candidates | NIST CSF; ISO 22301; ISO/IEC 42001; mappings are indicative and require versioned validation. |

# A.1  Control coverage and uniqueness audit

The library contains 72 stable canonical controls. Each ID and name is unique. Similar themes are separated only where the control effect, evidence or test is materially different.

| **Family** | **Count** | **Primary distinction** |
| --- | --- | --- |
| ATG-DIS | 12 | Discovery and AIBOM |
| ATG-TRU | 12 | Trust and Privilege Paths |
| ATG-AUT | 12 | Authority Governance |
| ATG-VAL | 12 | AI Security Validation |
| ATG-GOV | 12 | AI Governance and Assurance |
| ATG-RES | 12 | Operational Resilience |
| Total | 72 | Six integrated domains |

# A.2  Control assessment record

The following fields form the minimum record for one control assessment.

| **Field group** | **Minimum fields** |
| --- | --- |
| Identity | run_id, scope_id, control_id, profile_version. |
| Applicability | state, rationale, reviewer, affected population. |
| Control states | design, implementation, effectiveness and overall supported score. |
| Evidence | IDs, grades, source, date, scope, limitations and confidence. |
| Testing | procedure, authorization, environment, result and limitations. |
| Graph context | nodes, relationships, boundaries, paths and breakpoint. |
| Finding | condition, cause, consequence, owner and remediation objective. |
| Decision | accept, treat, transfer, avoid or defer; authority and expiry. |
| Review | assessor, quality reviewer, date and supersession. |

# A.3  Control conclusion and scoring rules

The control library uses the Scoring Framework without modification. UNKNOWN and non-numeric states remain visible and are not treated as zero.

| **Rule** | **Application** |
| --- | --- |
| Component scores | Assess design, implementation and operating effectiveness separately. |
| Overall score | Minimum of determinate components after evidence cap and gate. |
| E0 | UNKNOWN or Not Tested; no numeric score. |
| Not Tested | May retain design/implementation; effectiveness remains non-numeric. |
| Critical control | Requires evidence and testing proportionate to consequence. |
| Management acceptance | Changes disposition, not technical control score. |
| Closure | Requires current implementation evidence and representative retest. |

# A.4  Maturity traceability matrix

Each control identifies its primary Maturity Model capability. Secondary mappings may be added as versioned crosswalks after reconciliation.

| **Domain** | **Capabilities supported** |
| --- | --- |
| D1 | D1.1-D1.6 discovery scope, inventory, shadow AI, AIBOM, lifecycle and assurance. |
| D2 | D2.1-D2.6 trust representation, identity paths, boundaries, path analysis, breakpoints and graph governance. |
| D3 | D3.1-D3.6 authority taxonomy, delegation, oversight, amplification, revocation and decisions. |
| D4 | D4.1-D4.6 validation strategy, threat models, safe testing, effectiveness, findings and independence. |
| D5 | D5.1-D5.6 policy, intake, accountability, obligations, exceptions and assurance. |
| D6 | D6.1-D6.6 observability, detection, containment, recovery, reconstruction and exercises. |

# A.5  Extension and deprecation governance

Extensions use a distinct namespace, definition, owner, rationale, evidence, test, mapping and migration rule. They must not redefine canonical control semantics or reuse canonical IDs.

A canonical control may be clarified in a patch release, enhanced compatibly in a minor release, or changed incompatibly only in a major release. Retired IDs remain reserved.

| **Change** | **Required treatment** |
| --- | --- |
| Clarification | No semantic change; update examples and changelog. |
| Compatible enhancement | Minor version; document assessment impact. |
| Breaking change | Major version; migration and scoring impact required. |
| New canonical control | Uniqueness review, maturity mapping, tests and public rationale. |
| Deprecation | Replacement, transition period and historical traceability. |
| Extension promotion | Evidence of use, differentiation, compatibility and independent review. |

# A.6  Anti-duplication and anti-gaming rules

Control libraries become unusable when the same requirement is repeated under different labels or when broad controls are split merely to inflate completion. This library prohibits both practices.

| **Risk** | **Rule** |
| --- | --- |
| Duplicate objective | Merge unless evidence, test or control effect is materially distinct. |
| Compound objective | Split when components can fail or score independently. |
| Policy inflation | Do not score operation from policy or attestation. |
| Selective applicability | Require documented profile and reviewer decision. |
| Evidence flooding | Assess relevance, currentness, scope and corroboration, not count. |
| Average masking | Apply critical gates and critical-control scorecard. |
| Tool substitution | Technology purchase does not establish implementation or effect. |
| Control count marketing | Coverage and decision value outrank library size. |

# A.7  Known limitations

This library cannot guarantee complete risk coverage, fit every technology or sector without extension, prove legal compliance, replace threat modelling or testing, or remain current after material change.

Control quality depends on scope, applicability, evidence, assessor competence, ontology alignment and disciplined use of the Maturity and Scoring artifacts.

| **Limitation** | **Required response** |
| --- | --- |
| Technology evolution | Use governed extension and scheduled review. |
| Legal applicability | Obtain fact-specific legal validation. |
| Point-in-time state | Version runs and reassess after material change. |
| Sampling | Disclose population, method and blind spots. |
| Control interaction | Assess dependencies, paths and systemic failure. |
| Provider opacity | Preserve UNKNOWN and limit assurance claim. |
| Cross-framework mapping | Publish rationale and gaps; avoid equivalence claims. |

# A.8  Source and derivation register

The library consolidates concepts in the AI Trust Graph artifacts and the existing evidence-led 15-domain assessment toolkit into six canonical methodology families. It does not reproduce restricted standards text.

| **Source** | **Use** |
| --- | --- |
| AI Trust Graph Manifesto v1.0 | Principles, evidence discipline, six domains and public boundary. |
| AI Trust Graph Core Conceptual Model v1.1 | Canonical concepts, relationships, authority, paths and invariants. |
| AI Trust Graph Maturity Model v1.0 | Capabilities, maturity progression and critical gates. |
| AI Trust Graph Scoring Framework v1.0 | Control scoring, evidence caps, coverage, UNKNOWN and path triage. |
| AI Security Assessment Toolkit, 15 Domains | Detailed control themes, evidence, test methods, graph mappings and gaps. |
| Ontology and any future Extension guides | Final semantic reconciliation required before public release; extension guides are not core v1.0 artifacts. |

# A.9  v1.0 release acceptance checklist

All mandatory gates below must close before GitHub publication.

| **Gate** | **Acceptance criterion** |
| --- | --- |
| Semantic integrity | No contradiction with Manifesto, Core Conceptual Model, Maturity or Scoring artifacts. |
| Control uniqueness | All 72 IDs and objectives are unique; no hidden duplicate requirement. |
| Coverage | Six domains and 36 maturity capabilities have mapped control support. |
| Evidence integrity | Each control defines evidence and safe validation expectations. |
| Graph traceability | Every control maps to relevant nodes and relationships. |
| Criticality | Critical and Systemic defaults are reviewed against gate logic. |
| Crosswalk validation | Mappings are versioned, sourced and do not imply compliance. |
| Independent review | Product architecture, AI security and control-method reviews recorded. |
| IP and confidentiality | Ownership and publication permission confirmed. |
| Repository quality | Markdown, machine-readable register, changelog, contribution and security files complete. |

# A.10  Final doctrine and approval record

The AI Trust Graph Master Control Library translates theory, maturity and scoring into assessable requirements without becoming a vendor checklist or obscuring uncertainty. Controls are designed to be applied in graph context, supported by evidence and validated against material paths.

The document is ready for controlled review. Public release remains subject to independent expert, employer, IP, confidentiality, licence and trademark approvals.

> **CONTROL DOCTRINE** Define one objective. Scope applicability. Map the graph. Require evidence. Validate safely. Protect critical gates. Preserve UNKNOWN. Close only after retest.

| **Approval role** | **Status** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Chief product architecture review | Internal author-loop completed; independent review pending. |
| AI security architecture review | Internal author-loop completed; independent review pending. |
| Control-method review | Independent validation pending. |
| Employer / IP review | Pending. |
| Licence and trademark approval | Pending. |
| Public release | Not approved until mandatory gates close. |

AI Trust Graph Master Control Library | Version 1.0 | Public-release candidate
