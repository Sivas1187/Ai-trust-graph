[← Back to methodology index](../README.md)

# AI Trust Graph — Ontology Specification

*Version 3.0.0 | Canonical semantic companion for graph-based AI trust, authority, evidence, controls, paths and assurance*

> **DOCUMENT ROLE** Human-readable canonical ontology for methodology publication. It formalizes the classes, predicates, properties, states and semantic constraints already expressed across the AI Trust Graph methodology. A non-normative Phase 2 reference schema/query companion now exists, while approved normative machine-readable schemas and the executable conformance suite remain deferred.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Companion identifier | O1 - Ontology Specification |
| Authority and dependencies | Governed by [METHODOLOGY_MANIFEST.md](../METHODOLOGY_MANIFEST.md); this ontology formalizes semantics constrained by the Manifesto and Core Conceptual Model and does not publish an independent precedence chain |
| Product boundary | ExposureGraph product requirements, algorithms, connectors, implementation design, commercial logic and customer information are excluded |
| Phase boundary | Artifact #13 is non-normative reference material; approved normative RDF/OWL, SHACL, JSON Schema/property-graph bindings and executable conformance test vectors remain deferred |

Methodology doctrine: make the AI estate visible; make relationships explicit; bound authority; validate paths and controls; preserve evidence and uncertainty; enable accountable, defensible decisions.

# Contents

| **Section** | **Title** |
| --- | --- |
| 0 | Authority, scope and publication boundary |
| 1 | Ontology design doctrine |
| 2 | Top-level metamodel and common properties |
| 3 | Canonical entity ontology |
| 4 | Boundary, scope and context ontology |
| 5 | Identity, authority, delegation and actionability |
| 6 | AI behavior, data, retrieval and action surface |
| 7 | Trust, dependency and provider semantics |
| 8 | Canonical relationship ontology |
| 9 | Reachability, path, exposure and amplification |
| 10 | Evidence, assertion, control, finding and decision ontology |
| 11 | Lifecycle, state and enumeration ontology |
| 12 | Six-domain and maturity integration |
| 13 | Change, versioning, supersession and provenance |
| 14 | Extension and conformance model |
| 15 | Security and anti-error constraints |
| 16 | Ontology validation and release acceptance |
| Appendix A | Canonical entity registry |
| Appendix B | Exact control-library node compatibility registry |
| Appendix C | Canonical relationship registry |
| Appendix D | State and enumeration registry |
| Appendix E | Synthetic ontology patterns |
| Appendix F | Source and derivation register |
| Appendix G | Phase 2 implementation bindings (deferred) |

# 0.1 Purpose

This specification defines the canonical human-readable ontology for AI Trust Graph Methodology v1.0. It gives stable meaning to the entities, relationships, conditions, boundaries, paths, evidence objects and states required to represent and assess an enterprise AI ecosystem as an evidence-linked directed labelled multigraph.

The ontology is a methodology artifact, not a software architecture. It is designed so that assessors, architects, governance teams, researchers and future tool builders can use the same semantic vocabulary without making a specific graph database, serialization format, vendor product or implementation framework mandatory.

# 0.2 Authority and conflict rule

> **AUTHORITY RULE** The Manifesto establishes purpose and non-negotiable commitments. The Core Conceptual Model establishes canonical concept meaning. This Ontology Specification formalizes those meanings into controlled classes, predicates, properties and states. If this ontology appears to conflict with the Core Conceptual Model, the Core Conceptual Model prevails until the conflict is resolved through methodology governance.

Operational artifacts may specialize the ontology for assessment use, but they may not silently redefine ontology semantics. The Governance and Certification Model controls versioning, change approval, extension and release process; it does not override the semantic meaning of a canonical concept without a governed methodology change.

# 0.3 Phase 1 publication boundary

This document is sufficient as a human-readable ontology for Phase 1 GitHub methodology publication once the normal methodology release gates are closed.

Machine-readable ontology files, JSON objects, JSON Schema, RDF/OWL, SHACL, property-graph schemas, databases, APIs and executable test suites are Phase 2 engineering artifacts.

Phase 2 bindings MUST preserve the semantics in this document and MUST NOT become a hidden source of truth.

ExposureGraph remains a separate future product and is outside the public ontology boundary.

# 0.4 Normative language and semantic statuses

| **Term** | **Meaning** |
| --- | --- |
| MUST / MUST NOT | Required or prohibited for declared ontology conformance. |
| SHOULD / SHOULD NOT | Preferred unless a documented alternative preserves semantic intent. |
| MAY | Optional representation or implementation choice. |
| UNKNOWN | Evidence is insufficient or materially conflicting; not a safe, failed, zero or Not Applicable state. |
| CANDIDATE | Proposed object, relationship, path or assertion awaiting accountable review. |
| APPROVED | Accepted as current within stated scope, time and review conditions. |
| VALIDATED | Direct evidence or authorized testing supports the stated conclusion within scope and conditions. |

# 0.5 Protected boundary

The public ontology contains definitions, semantic constraints, controlled vocabularies, synthetic patterns and limitations. It excludes product requirements, connector designs, graph algorithms, proprietary ranking logic, implementation code, customer data, production configuration, commercial strategy and unpublished ExposureGraph design.

# 1.1 Representation model

AI Trust Graph represents the system as an evidence-linked directed labelled multigraph. A multigraph is required because two objects may be connected by multiple materially different relationships at the same time: for example, an agent may CONNECTS_TO a tool endpoint, AUTHENTICATES_AS a workload identity, be AUTHORIZED_TO execute a limited operation, and INVOKES that operation. Collapsing those edges into a generic connection destroys the semantics needed for assurance.

> **REASONING CHAIN** Objects -> Relationships -> Conditions -> Paths -> Authority & Influence -> Consequence -> Controls -> Evidence -> Decision

# 1.2 Semantic separation rules

Existence, reachability, authority, invocation and consequence are separate facts and MUST NOT be inferred from one another without an explicit relationship and evidence.

Trust is conditional reliance for a defined purpose; it is not a positive label, maturity score or permanent property.

Authority is effective or permitted capacity to access, influence or change a target; it is distinct from connectivity and observed use.

Evidence grade, confidence, control effectiveness, maturity, exposure and risk are separate dimensions.

A finding is an assessment conclusion; a decision is accountable disposition. Management acceptance MUST NOT rewrite the finding.

An AI-generated extraction, classification or inferred relationship creates a candidate assertion until accountable review.

# 1.3 Ontology design principles

| **Principle** | **Required interpretation** |
| --- | --- |
| Decision-led granularity | Represent enough detail to answer the decision and analyze material paths; do not maximize graph size for its own sake. |
| Stable identity | Instance identity must remain stable while names, owners, states and risk classifications change. |
| Typed direction | Every material relationship has a type and direction; inverse meaning is never assumed automatically. |
| Conditions first | Permissions, state, protocol, approval, time and other preconditions are explicit when they affect material reasoning. |
| Evidence-linked claims | Material objects, relationships and path conditions reference evidence and preserve confidence and review status. |
| Versioned state | Change creates a new state, version or supersession; completed analysis runs are not silently rewritten. |
| Visible uncertainty | UNKNOWN and conflict remain first-class until resolved. |
| Tool independence | No specific vendor, graph database, model provider or product is required to understand or apply the ontology. |
| Non-transitivity by default | Trust, authorization, approval and identity equivalence are not transitive unless a specific governed rule and evidence support it. |
| No hidden inference | A relationship type does not smuggle in authorization, exploitability, control effectiveness, compliance or certification. |

# 2.1 Ontology layers

| **Layer** | **Purpose** | **Examples** |
| --- | --- | --- |
| Context layer | Defines why and where the system exists and who is accountable. | AIUseCase, System, BusinessUnit, Environment, Jurisdiction |
| Identity and authority layer | Represents principals, grants, delegation, action scope and approval. | Identity, Role, Permission, AuthorityGrant, Delegation, Approval |
| Behavior layer | Represents model and agent behavior and the inputs that influence it. | Model, PromptAsset, Agent, Planner, Guardrail, Context |
| Data and knowledge layer | Represents data lineage, retrieval, memory and information movement. | Dataset, SourceRecord, Chunk, Embedding, VectorIndex, Retriever, Memory |
| Action surface layer | Represents callable capabilities and state-changing operations. | Tool, API, MCPServer, Operation, Workflow, Transaction |
| Engineering/runtime layer | Represents build, deployment, runtime and supply-chain context. | Artifact, Repository, Pipeline, Workload, Cluster, Configuration |
| Assurance/governance layer | Represents policy, controls, evidence, tests, findings and decisions. | Policy, Control, EvidenceItem, Assertion, Test, Finding, Decision |
| Path/resilience layer | Represents boundaries, conditions, paths, threats, incidents and recovery. | Boundary, Condition, Path, Threat, Incident, RecoveryPlan |

# 2.2 Common entity properties

| **Property** | **Requirement** |
| --- | --- |
| id | Stable identifier within the governed dataset or assessment record. |
| type | Canonical ontology type or declared extension type. |
| label | Human-readable name; not used as identity. |
| scope | Use case, environment, population, boundary or assessment scope in which the object is asserted. |
| version / state | Version and lifecycle state where material. |
| owner / accountability | Named role or actor where stewardship or decision accountability is material. |
| evidence references | Evidence supporting existence and material attributes. |
| confidence | Confidence in the assertion about the object, not a quality score for the object itself. |
| review status | Candidate, approved, rejected, modified or superseded for ontology assertions. |
| validity | Observed or effective period, expiry and supersession where material. |
| classification / sensitivity | Security, privacy, criticality or handling classification where relevant. |
| extensions | Namespaced attributes that do not redefine canonical meaning. |

# 2.3 Common relationship properties

| **Property** | **Requirement** |
| --- | --- |
| id | Stable relationship identifier. |
| type | Canonical predicate or governed extension predicate. |
| from / to | Typed directional endpoints. |
| conditions | Permissions, protocol, state, approval, timing, data or other prerequisites. |
| scope | Actions, resources, environments, populations and purposes covered. |
| evidence references | Sources supporting, disputing or qualifying the relationship. |
| confidence | Confidence in this relationship assertion. |
| review status | Candidate, approved, rejected, modified or superseded. |
| validity | First seen, last seen, effective period, expiry and supersession. |
| owner | Actor responsible for maintaining or reviewing the relationship when applicable. |

> **EDGE RULE** An edge without material conditions and evidence is a candidate description, not an approved fact. A graph connection never proves authorization, successful invocation or exploitability.

# 2.4 Class, instance and naming rules

Canonical entity type names use PascalCase in this human-readable specification; canonical predicates use UPPER_SNAKE_CASE.

A type is a semantic category; an instance is a concrete or asserted occurrence. For example, Model is a type while a particular deployed model version is an instance.

Actor and Identity MUST remain distinct even when one person has one identity. Model and ModelEndpoint MUST remain distinct. EvidenceItem and Assertion MUST remain distinct.

Contextual roles such as Target and Resource MAY be used as secondary classifications when a more specific underlying type is known; they should not erase that more specific type.

Instance identifiers should be opaque and stable. Names, owners, risk states and labels may change without changing identity.

No persistent URI namespace is established in Phase 1. A future machine-readable namespace MUST map unambiguously to the canonical names in this document.

| **Source wording** | **Canonical ontology term** | **Rule** |
| --- | --- | --- |
| Use case | AIUseCase | Current prose wording maps to the canonical class without changing meaning. |
| Model endpoint | ModelEndpoint | Space-separated CCM wording maps to the canonical class name. |
| Prompt asset | PromptAsset | Space-separated CCM wording maps to the canonical class name. |
| MCP capability | MCPCapability | Space-separated CCM wording maps to the canonical class name. |
| Source record | SourceRecord | Space-separated CCM wording maps to the canonical class name. |
| Endpoint | ModelEndpoint | Master Control Library compatibility label. |
| Prompt | PromptAsset | Master Control Library compatibility label. |
| Evidence | EvidenceItem | Control-library shorthand; EvidenceItem is the canonical evidence object. |
| Edge | RelationshipRecord | Operational shorthand for a reified relationship record where an edge must itself be treated as an object. |

# 2.5 Minimum structural and cardinality rules

| **Object** | **Minimum structural rule** |
| --- | --- |
| Relationship | Exactly one source, one target and one predicate per relationship record; materially different semantics require separate relationships. |
| Approved material relationship | Scope plus evidence, confidence, review state and validity as applicable. |
| AuthorityGrant | Grantor or authority source, capability, target, scope, conditions/duration and revocation path. |
| Path | Start condition, at least one traversal step, target, conditions, evidence/confidence and control/breakpoint context. |
| Evidence link | A specific EvidenceItem connected to a specific Assertion or result purpose; document volume is not a substitute for relevance. |
| Decision | An accountable decision owner/authority, disposition, rationale, conditions and review trigger where material. |
| Exception | Requirement, owner, scope, rationale, expiry and compensating control/monitoring where applicable. |
| Supersession | The successor and superseded record are both retained; history is not overwritten. |
| Condition | May be an inline relationship property; SHOULD be reified as a Condition object when shared, independently evidenced, governed or lifecycle-managed. |

# 2.6 Semantic distinctions that MUST remain explicit

| **Concept A** | **Concept B** | **Why they remain distinct** |
| --- | --- | --- |
| Actor | Identity | An actor is a human/organizational/machine-associated entity; an identity is the principal used for authentication and attribution. |
| Model | ModelEndpoint | A computational artifact is not the same as the serving interface, route, provider and runtime context through which it is accessed. |
| PromptAsset | Context | A governed versioned instruction/template is distinct from the runtime information assembled for a specific interaction. |
| AuthorityGrant | Delegation | A grant confers capability; delegation transfers bounded execution authority from a grantor to a delegate. |
| Approval | Decision | Approval is a decision subtype permitting or conditioning an action; not every decision is an approval. |
| Control | Safeguard | A control is an assurance objective/mechanism with assessed state; a safeguard may be one protective measure contributing to a control. |
| EvidenceItem | Assertion | Evidence is a source object; an assertion is the proposition the evidence supports, disputes or qualifies. |
| Finding | Decision | A finding states assessed condition; a decision records accountable disposition and cannot rewrite the finding. |
| Outcome | Consequence | Outcome is an observed/intended result; consequence is the material effect relevant to risk, safety, security or governance. |
| Connectivity | Authorization | Technical reachability does not confer permission. |
| Authorization | Invocation | Granted capability does not prove the action occurred. |
| Invocation | Consequence | A call does not prove successful or material effect. |

# 3. Canonical Entity Ontology

The ontology uses families to organize meaning without forcing every future implementation into a rigid inheritance engine. A family is semantic. Implementations may use classes, labels, tables or typed objects as long as canonical meaning, identity, scope, evidence and state are preserved.

# Purpose, scope and organizational context

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| AIUseCase | A bounded AI-enabled business, operational or technical use whose purpose, owner, decision context, scope and lifecycle can be assessed. | Canonical class |
| System | A bounded socio-technical configuration of actors, identities, AI components, data, tools, infrastructure, providers, controls and business processes. | Canonical class |
| AIService | An internal or third-party service delivering AI capability to one or more systems or use cases. | Canonical class |
| Application | A software application that consumes, hosts, orchestrates or exposes AI capability. | Canonical class |
| BusinessUnit | An organizational unit that owns, operates, consumes or is accountable for AI-related activity. | Canonical class |
| Environment | A deployment or operating context such as development, test, staging or production. | Canonical class |
| Platform | A shared technical platform providing services, runtimes, identity, data, tooling or AI capabilities. | Canonical class |
| Zone | A logical or physical segment with distinct reachability, trust or enforcement assumptions. | Canonical class |
| DiscoveryScope | The explicitly authorized population, sources, environments and exclusions for discovery activity. | Canonical class |
| Jurisdiction | A legal or regulatory jurisdiction relevant to the use case, data, provider, stakeholder or obligation. | Canonical class |
| Contract | A governed agreement defining responsibilities, service conditions, rights, obligations or evidence access. | Canonical class |

# Actors, accountability and organizational roles

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| Actor | A human, organizational or machine-associated entity capable of initiating, approving, influencing or being accountable for activity. | Canonical class |
| Provider | An internal or external party supplying a model, service, platform, tool, data source, infrastructure component or dependency. | Canonical class |
| AffectedStakeholder | A person or group whose rights, interests, safety, operations or outcomes may be affected by the AI-enabled system. | Canonical class |
| Committee | A collective governance or decision body with defined authority, quorum, scope and conflict rules. | Canonical class |
| Owner | A role-bearing actor accountable for stewardship of an object, decision, process or control. | Canonical class |
| BusinessOwner | An owner accountable for business purpose, impact, acceptance and business outcome. | Canonical class |
| TechnicalOwner | An owner accountable for technical implementation, operation or lifecycle stewardship. | Canonical class |
| Approver | An actor authorized to make a bounded approval decision. | Canonical class |
| HumanApprover | A human actor who performs a meaningful approval within defined information, independence, timing and stop conditions. | Canonical class |
| Reviewer | An actor authorized to challenge, verify or approve an assertion, assessment result or governance decision. | Canonical class |
| Tester | An actor authorized to perform defined validation or test procedures. | Canonical class |
| Responder | An actor assigned to detect, triage, contain, investigate or recover from an event or incident. | Canonical class |
| Operator | An actor responsible for operating or supervising a system, workflow or control. | Canonical class |
| Grantor | An actor or authority source that grants a bounded permission, role, delegation or capability. | Canonical class |
| Delegate | An actor or identity receiving bounded delegated authority while accountability remains traceable. | Canonical class |
| RegulatoryRole | A role representing a jurisdiction-specific responsibility or regulated function relevant to an obligation or decision. | Canonical class |

# Identity, access and authority

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| Identity | A principal or identity representation used for authentication, attribution, authorization or delegation. | Canonical class |
| HumanIdentity | An identity representing a human actor. | Canonical class |
| WorkloadIdentity | A non-human identity representing software, service, workload, agent or automation. | Canonical class |
| Role | A named bundle of responsibilities, entitlements or decision authorities that may be assigned or assumed. | Canonical class |
| Group | A membership construct through which roles, permissions or policies may be inherited. | Canonical class |
| Permission | A bounded entitlement to access, use, influence or modify a target under stated conditions. | Canonical class |
| Secret | A credential or confidential authentication material whose possession may enable identity or authority. | Canonical class |
| Token | A time- or scope-bounded credential or assertion used to establish identity, authorization or session state. | Canonical class |
| Session | A bounded runtime security context carrying identity, authorization, state and duration. | Canonical class |
| AuthorityGrant | A governed record that confers a capability to an identity, actor, agent, tool or workflow for a target and scope. | Canonical class |
| Delegation | A governed transfer of bounded execution authority from grantor to delegate, retaining conditions and accountability. | Canonical class |
| Approval | A bounded authorization decision that permits, conditions, rejects or stops a defined action or change. | Canonical class |

# AI behavior and decision influence

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| Model | A computational artifact that produces outputs from inputs according to learned, programmed or combined behavior. | Canonical class |
| ModelEndpoint | An addressable serving interface for a model with routing, provider, version and environment context. | Canonical class |
| PromptAsset | A versioned instruction, system prompt, template or contextual prompt artifact that can influence model or agent behavior. | Canonical class |
| Agent | A software entity that selects, sequences or executes steps toward an objective using models, tools, memory, rules or other agents. | Canonical class |
| Planner | A component that constructs or revises a sequence of actions or subgoals. | Canonical class |
| Evaluator | A component that assesses output, policy adherence, quality, risk, completion or another stated criterion. | Canonical class |
| Guardrail | A mechanism intended to constrain, filter, redirect, block or supervise input, output or action. | Canonical class |
| Context | Information supplied to influence interpretation, generation, retrieval, planning or action selection. | Canonical class |
| Output | A result produced by a model, agent, workflow or AI-enabled component. | Canonical class |
| AgentMessage | A message or structured exchange between agents, orchestration components or agent-adjacent systems. | Canonical class |

# Data, retrieval, memory and knowledge

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| Data | Governed information used, produced, transmitted, stored or inferred within the system. | Canonical class |
| Dataset | A bounded collection of data records used for training, tuning, evaluation, retrieval or operation. | Canonical class |
| Document | A document-like information object used as source, evidence, context or retrieval content. | Canonical class |
| Source | An originating system, record set, repository, human-provided source or external source from which data or evidence is obtained. | Canonical class |
| SourceRecord | An authoritative or governed record from a source system with owner, classification, entitlement, retention and lineage. | Canonical class |
| DiscoverySource | A source specifically authorized or used to discover AI assets, identities, services, dependencies or evidence. | Canonical class |
| Chunk | A bounded segment derived from a source record or document for retrieval or processing. | Canonical class |
| Embedding | A numerical representation derived from content using an embedding process or model; it is not equivalent to the source record. | Canonical class |
| Vector | A vector representation used for similarity, retrieval or other numerical comparison. An Embedding is a common Vector subtype, but the vector is not the source content itself. | Canonical class |
| VectorIndex | A governed index or store used to search or retrieve vectorized content, with namespace, tenancy, retention and security context. | Canonical class |
| Retriever | A component that selects information for context using queries, authorization context, filters, ranking and source scope. | Canonical class |
| Memory | Persisted conversational, semantic, episodic or workflow state that may influence future model, agent or workflow behavior. | Canonical class |

# Action surface and workflow execution

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| Tool | A callable capability through which a model, agent, application or workflow can observe, retrieve, transform or change external state. | Canonical class |
| Plugin | An extension that exposes one or more capabilities to an application, model, agent or workflow. | Canonical class |
| API | An interface exposing defined operations to callers under stated authentication, authorization and protocol conditions. | Canonical class |
| MCPClient | A client participating in Model Context Protocol interactions and capable of discovering or invoking exposed capabilities. | Canonical class |
| MCPServer | A service exposing Model Context Protocol resources, tools, prompts or operations to authorized clients. | Canonical class |
| MCPCapability | A discrete capability exposed through an MCP service, including its operation, schema, scope and side effects. | Canonical class |
| Operation | A callable technical operation with defined parameters, authorization, side effects and expected outcomes. | Canonical class |
| Workflow | An ordered or event-driven sequence of tasks, decisions, calls, approvals or actions. | Canonical class |
| Action | A discrete state-changing or decision-relevant act performed by a human or machine entity. | Canonical class |
| BusinessAction | An action that creates a business, operational, customer, financial, legal or organizational effect. | Canonical class |
| Transaction | An action with bounded transactional effect, value, commit semantics or externally significant outcome. | Canonical class |
| Queue | A persistent or transient mechanism that buffers, sequences or retries work and may amplify scale, delay or persistence. | Canonical class |
| Channel | A destination or transport channel through which data, outputs, notifications or actions are sent. | Canonical class |
| Budget | A bounded resource, value, iteration, time or transaction allowance used to constrain execution. | Canonical class |

# Engineering, runtime and supply chain

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| Asset | A generic governed object of value or operational relevance; use a more specific subtype where semantics matter. | Canonical class |
| Artifact | A versioned technical artifact such as model package, prompt package, code bundle, container, configuration bundle or build output. | Canonical class |
| Repository | A controlled source repository storing code, prompts, configuration, models, artifacts or related metadata. | Canonical class |
| Pipeline | A build, training, evaluation, release, deployment or data-processing pipeline. | Canonical class |
| Workload | A deployed compute workload that executes application, model, agent, service or supporting function. | Canonical class |
| Cluster | A managed grouping of compute resources that provides execution, orchestration or isolation. | Canonical class |
| Compute | A compute resource or execution substrate used by system components. | Canonical class |
| Network | A network, logical fabric or connectivity domain used to route communication. | Canonical class |
| Configuration | A versioned set of technical settings that affects behavior, security, deployment or operation. | Canonical class |
| Resource | A generic targetable resource when a more specific class is not available or material. | Canonical class |
| Target | A contextual role identifying the object, process, action or outcome that a path, authority or threat can reach. | Canonical class |

# Assurance, governance and evidence

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| Policy | An approved rule, principle or requirement governing behavior, use, control, decision or lifecycle activity. | Canonical class |
| RiskAppetite | A governed expression of acceptable exposure, consequence, tolerance or decision threshold for defined contexts. | Canonical class |
| Obligation | A requirement arising from law, regulation, contract, policy, commitment or another governed source. | Canonical class |
| Exception | A time-bounded, approved deviation from a requirement with owner, rationale, conditions, compensating controls and expiry. | Canonical class |
| Decision | An accountable disposition that approves, rejects, conditions, accepts, defers, escalates or otherwise governs a matter. | Canonical class |
| Control | A governed objective and mechanism intended to prevent, constrain, detect, contain, recover from or provide assurance over a material condition or path. | Canonical class |
| Safeguard | A protective measure or condition that may implement or contribute to one or more controls. | Canonical class |
| EvidenceItem | A versioned source object that supports, disputes, qualifies or bounds an assertion within stated scope, time and conditions. | Canonical class |
| Assertion | A precisely stated proposition that can be supported, disputed, qualified, reviewed and superseded. | Canonical class |
| GraphAssertion | An assertion specifically about an object, relationship, boundary, path, condition or graph state. | Canonical class |
| Test | A record of an authorized procedure, conditions, execution, result and limitations used to validate behavior or control operation. | Canonical class |
| TestPlan | A governed plan defining validation scope, authorization, procedures, safety constraints, expected evidence and decision use. | Canonical class |
| Finding | An evidence-linked assessment conclusion stating criteria, condition, cause, consequence, affected objects or paths, confidence and remediation objective. | Canonical class |
| Metric | A defined measurement with numerator, denominator or scale, method, population, period and interpretation. | Canonical class |
| AssurancePlan | A planned set of assurance activities, evidence needs, review responsibilities, cadence and triggers. | Canonical class |
| Training | A competence-development or awareness activity with defined audience, objective, evidence and completion status. | Canonical class |
| AIBOM | A versioned AI bill of materials describing material AI, data, prompt, agent, tool, identity, provider, runtime and dependency composition. | Canonical class |

# Graph, boundary, path and consequence

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| Boundary | A first-class object representing a material change in trust assumption, ownership, policy, enforcement, residency, privilege or consequence. | Canonical class |
| Condition | A prerequisite or state that must hold for a relationship, authorization, path step, control claim or decision to be valid. | Canonical class |
| RelationshipRecord | A reified record of a typed directional relationship and its conditions, scope, evidence, confidence, review status and validity. | Canonical class |
| Path | An ordered explanatory sequence from a defined start condition to a defined target, with traversal, conditions, boundary crossings, controls, evidence and residual route. | Canonical class |
| GraphSnapshot | A versioned graph state representing approved and candidate objects, relationships, boundaries and paths for an analysis run. | Canonical class |
| Consequence | The material effect produced if relevant conditions and progression occur. | Canonical class |
| Outcome | An observed or intended result of an action, workflow, decision, control or incident; it may or may not be materially adverse. | Canonical class |

# Operations, resilience, threat and change

| **Type** | **Canonical meaning** | **Treatment** |
| --- | --- | --- |
| AIEvent | A time-bounded event associated with AI use, model/agent behavior, identity, tool invocation, approval, output or outcome. | Canonical class |
| ChangeEvent | A recorded material change to architecture, data, model, prompt, agent, tool, identity, provider, workflow, policy or control. | Canonical class |
| Detection | A detection rule, alert, signal or analytic result identifying behavior or conditions requiring triage. | Canonical class |
| Threat | A threat actor, behavior, misuse, failure mode or adversarial condition capable of causing a material consequence. | Canonical class |
| Incident | A governed record of a realized or suspected event requiring coordinated investigation, containment, recovery or reporting. | Canonical class |
| IncidentScenario | A defined scenario used for planning, testing or exercising incident response and resilience. | Canonical class |
| RecoveryPlan | A governed plan for restoring acceptable technical or business state after failure, compromise or unsafe action. | Canonical class |
| Exercise | A controlled rehearsal or simulation used to validate readiness, roles, controls, containment, recovery or decision processes. | Canonical class |
| ShadowAI | An observed AI use, service or capability operating outside the currently sanctioned inventory or governance path; status must be evidenced rather than assumed. | Canonical class |

# 4.1 Boundary as a first-class object

A boundary represents a material change in trust assumption, ownership, policy, enforcement, residency, privilege or consequence. It is not merely a line on an architecture diagram. Each material crossing identifies source and target zones, the crossing relationship, expected enforcement, applicable policy and evidence.

| **Boundary class** | **Examples** | **Why material** |
| --- | --- | --- |
| Network | Internet, partner network, segmented zone | Changes reachability and enforcement. |
| Identity | Tenant, role, federation, privilege boundary | Changes principal, assurance or entitlement. |
| Data | Classification, residency, purpose or tenancy | Changes handling, authorization or disclosure obligations. |
| Provider | Model, embedding, evaluation or managed service provider | Changes control ownership, evidence access and shared responsibility. |
| Runtime | Host, cluster, namespace or execution domain | Changes isolation and execution context. |
| Human decision | Approval, override, exception or risk acceptance | Changes accountable authority. |
| Consequence | Financial, safety, regulated or irreversible action boundary | Changes impact and control expectation. |

# 4.2 Scope objects and exclusions

Scope is a governed assertion. It follows the decision and plausible impact, not only administrative ownership. IN_SCOPE and EXCLUDED_FROM relationships may be used to make scope explicit. Exclusions MUST retain rationale, reviewer and consequence for interpretation. Discovery completion MUST NOT be represented as estate completeness unless coverage is independently justified.

# 4.3 Context dimensions

| **Dimension** | **Ontology treatment** |
| --- | --- |
| Environment | Represent explicitly when permissions, data, controls or deployment state differ. |
| Population | Record when sampling, coverage or conclusions depend on a defined population. |
| Period | Associate observations and conclusions with the evidence period represented. |
| Use case | Connect objects to the decision purpose and accountable business context. |
| Jurisdiction | Connect obligations and regulatory roles only where applicability has been established. |
| Provider responsibility | Represent shared-responsibility boundaries rather than attributing all controls to one party. |

# 5.1 Authority metamodel

Authority is the effective or permitted capacity of an actor, identity, application, agent, tool or workflow to access, influence or change a target. A material authority assertion records the acting identity, capability, target, scope, conditions, duration, approval, reversibility, telemetry and revocation.

| **Authority field** | **Required meaning** |
| --- | --- |
| Acting identity | Principal used or expected to be used for the action. |
| Capability | Action class available to the actor or machine entity. |
| Target | Resource, data, person, system, workflow or outcome affected. |
| Scope | Allowed resources, values, context, population and environment. |
| Conditions | Authentication, policy, state, approval or event prerequisites. |
| Duration | Standing, session, task, transaction or time-bounded grant. |
| Approval | Human or machine gate and evidence of enforcement. |
| Reversibility | Preview, undo, compensation or recovery properties. |
| Telemetry | Ability to attribute and reconstruct grant and use. |
| Revocation | Mechanism and evidence for effective withdrawal. |

# 5.2 Authority action taxonomy

| **Class** | **Meaning** | **Typical concern** |
| --- | --- | --- |
| Observe | View signals, metadata or state. | Confidentiality, surveillance and inference. |
| Read | Access governed content or state. | Unauthorized disclosure or aggregation. |
| Retrieve | Select information for context or response. | Authorization context, oversharing and poisoning. |
| Infer | Derive classifications, predictions or conclusions. | Sensitive inference and unreviewed decision influence. |
| Recommend | Propose an action or decision. | Automation bias, default effect and weak review. |
| Approve | Authorize change, exception, release or transaction. | Accountability and enforceable delegation. |
| Execute | Invoke an operation or workflow. | Side effects, containment and attribution. |
| Modify | Change data, configuration, prompt, model or permission. | Integrity, change control and rollback. |
| Delete | Remove data, configuration or state. | Irreversibility, retention and recovery. |
| Disclose | Transmit information to a party or channel. | Privacy, confidentiality and purpose limitation. |
| Transact | Create binding financial, legal, safety or operational outcome. | Value limit, approval, non-repudiation and recovery. |

# 5.3 Actionability scale

| **Level** | **Actionability** | **Human role** |
| --- | --- | --- |
| A0 | Informational output only. | Consumes information. |
| A1 | Advisory recommendation. | Chooses whether and how to act. |
| A2 | Assisted execution with explicit confirmation. | Reviews proposed action before execution. |
| A3 | Semi-autonomous execution within bounded scope. | Sets policy, supervises and handles exceptions. |
| A4 | Autonomous execution with no normal pre-action approval. | Defines boundaries, monitors and can contain or revoke. |

# 5.4 Delegation and accountability

> **ACCOUNTABILITY RULE** Delegation may transfer execution authority, but it does not erase accountable ownership of the grant or decision. AI recommendation is not approval, and a user click is not necessarily meaningful oversight.

# 5.5 Authority amplification

| **Amplification type** | **Ontology question** |
| --- | --- |
| Identity | Does a downstream principal obtain broader privilege or attribution than the initiating actor? |
| Tool | Does callable capability exceed the apparent task, target scope or downstream privilege? |
| Data | Does aggregation, retrieval, memory or inference create a more sensitive or actionable information set? |
| Workflow | Do chaining, retries, parallel execution or defaults increase scale, persistence or consequence? |
| Temporal | Do standing privilege, long-lived credentials, memory or unattended operation extend opportunity? |
| Trust | Is upstream reliance accepted downstream for a broader purpose or higher consequence? |
| Blast radius | Can one identity, provider, tool, pipeline, prompt or control dependency affect many assets, users or decisions? |

# 6.1 AI-native behavioral separation

Model, ModelEndpoint, PromptAsset, Agent, Planner, Evaluator and Guardrail remain separate object types because they influence behavior, action selection, routing, validation and ownership differently. A generic AIComponent label may be used for convenience only when the assessment does not require the lost distinction.

# 6.2 Action surface

Tools, plugins, APIs, MCP capabilities, operations and workflows are the action surface through which AI behavior can create external effect. The existence of a tool binding is treated as a potential authority grant, not merely as a user-interface feature.

| **Required property** | **Meaning** |
| --- | --- |
| operation | What the capability can do. |
| authentication | Which identity/session establishes the caller. |
| authorization | Which scope, targets and actions are permitted. |
| side effect | What state can change if invocation succeeds. |
| reversibility | Whether preview, undo, compensation or rollback exists. |
| approval | Which decision gate is required and how it is enforced. |
| limits | Rate, value, iteration, resource or target constraints. |
| telemetry | How invocation, parameters, identity and outcome are reconstructed. |
| downstream dependency | Which systems, credentials or providers influence effect. |

# 6.3 Data, retrieval and memory lineage

Data lineage SHOULD connect governed sources to chunks, embeddings, vector indexes, retrieval results, prompts, memory and outputs where evidence permits. An embedding is not the original record and a vector index is not equivalent to its source system. Retrieval authorization, user-context preservation, filters, tenancy, ranking, metadata, caching and evidence of returned scope remain explicit.

> **DATA RULE** A data path may increase sensitivity or actionability even when each individual source is permitted. Data amplification and disclosure authority must therefore be assessed at the path level.

# 7.1 Trust metamodel

Trust is conditional reliance by one entity on another entity, assertion, output, dependency or control for a defined purpose. TRUSTS is non-transitive by default. Every material trust relation records purpose, basis, scope, owner, transitivity rule if any, expiry, revocation and evidence.

| **Dimension** | **Required question** |
| --- | --- |
| Purpose | For which decision or operation is reliance accepted? |
| Basis | What mechanism, evidence or accountable decision supports reliance? |
| Scope | Which assets, actions, data, users and environments are covered? |
| Owner | Who grants, reviews and revokes the trust? |
| Transitivity | May reliance flow through intermediaries, and under what explicit constraints? |
| Expiry | When does trust lapse or require revalidation? |
| Revocation | How is reliance withdrawn and the effect verified? |
| Evidence | Which current sources support the assertion? |

# 7.2 Trust dynamics

| **Dynamic** | **Trigger** | **Ontology implication** |
| --- | --- | --- |
| Inheritance | Role, group, federation, workload or delegation | Represent the chain; do not assume safety because each intermediate grant is individually valid. |
| Amplification | Downstream privilege, data, autonomy or consequence | Identify the step where effective power increases. |
| Drift | Architecture, identity, tool, data or policy change | Create a new graph state and reassess affected paths. |
| Decay | Evidence age or reduced representativeness | Reduce confidence or require refreshed evidence. |
| Revocation | Withdrawal of reliance or authority | Verify effective removal and downstream effect. |
| Collapse | Critical provider, control or dependency failure | Reassess dependent assumptions and containment. |

# 7.3 Provider and shared responsibility

PROVIDED_BY and DEPENDS_ON must not collapse provider ownership, customer responsibility and evidence access into one relationship. Provider boundaries should make control ownership, contractual commitments, operational dependency, data movement, identity boundary and evidence limitations explicit.

# 8.1 Relationship families

The Core Conceptual Model defines a compact set of core predicates. The Master Control Library uses a richer operational vocabulary. This ontology preserves both: core predicates remain foundational, while operational predicates formalize recurring control semantics without changing the Core Conceptual Model.

| **Predicate** | **Status** | **Family** | **Canonical meaning** | **Inference / constraint** |
| --- | --- | --- | --- | --- |
| ACCOUNTABLE_TO | OPERATIONAL | Governance & accountability | Links an object, role, action or decision to the actor or body ultimately accountable for it. | Accountability is not erased by delegation or execution transfer. |
| ACTS_FOR | OPERATIONAL | Identity & authority | States that an actor, agent or identity performs an action on behalf of another actor, identity or principal. | Preserve initiator, delegate and attribution; do not infer unlimited authority. |
| AFFECTS | OPERATIONAL | Consequence & impact | Links a threat, incident, action, finding or decision to a stakeholder, asset, process or outcome materially affected. | Effect direction and scope must be stated. |
| AMPLIFIES | OPERATIONAL | Authority & exposure | States that a relationship, condition or component increases effective reach, authority, scale, persistence or consequence. | Requires an explicit amplification dimension and evidence; it is not synonymous with vulnerability. |
| APPROVED_BY | CORE | Governance & decision | Links an action, relationship, use case, change or decision to its accountable approval. | Approval must be meaningful, in scope and evidenced. |
| ASSUMES_ROLE | CORE | Identity & authority | States that an identity obtains the entitlements associated with a role under defined conditions. | Do not infer all role permissions without validating effective grant and conditions. |
| AUGMENTS | OPERATIONAL | Data & behavior | States that one object adds context, data or capability to another, such as retrieval augmenting a prompt or model context. | Augmentation does not imply trustworthiness or authorization. |
| AUTHENTICATES_AS | CORE | Identity & authority | States that an actor, agent, application or workload establishes a session or request using a particular identity. | Authentication does not imply authorization. |
| AUTHORIZED_BY | OPERATIONAL | Identity & authority | Links an activity or procedure to the authority or approval that permits it, such as a test authorized by rules of engagement. | Distinct from AUTHORIZED_TO, which represents granted capability. |
| AUTHORIZED_TO | CORE | Identity & authority | States that an identity or actor is granted a defined action or capability on a target under stated scope and conditions. | Authorization does not prove invocation or successful effect. |
| BINDS_TO | OPERATIONAL | Identity & authority | Links an approval, grant, identity or policy decision to the action, object or scope it technically binds. | Use only where binding is enforceable or explicitly identified as design intent. |
| BREAKS_PATH | CORE | Control & assurance | Links a control or intervention to a path it prevents, constrains, detects or contains. | Effectiveness must be validated before claiming the path is controlled. |
| BUILT_FROM | OPERATIONAL | Supply chain & provenance | States that an artifact, model, package or release is assembled from named source components or upstream artifacts. | Preserve provenance and version; does not imply trust in inputs. |
| CAN_EGRESS_TO | OPERATIONAL | Connectivity & data movement | States that a runtime or network object can send traffic or data to a destination under current technical conditions. | Reachability is not authorization and does not prove data was sent. |
| CHALLENGED_BY | OPERATIONAL | Governance & review | Links a decision, conclusion or governance action to an independent or second-person challenge. | Challenge does not automatically invalidate the original result. |
| CHANGED_TO | OPERATIONAL | Lifecycle & change | Links a prior object, relationship or state to a materially changed successor state. | Historical state remains traceable; use SUPERSEDES when the successor becomes the approved current record. |
| CLASSIFIED_AS | OPERATIONAL | Classification & governance | Assigns a governed classification, tier, severity or category to an object or event. | Classification must identify scheme/version and must not imply compliance. |
| CLOSED_BY | OPERATIONAL | Finding & remediation | Links a finding to the evidence-backed action or decision that closes it. | Closure requires current evidence and, where relevant, retest; acceptance alone is insufficient. |
| COMPENSATED_BY | OPERATIONAL | Resilience & recovery | Links an adverse effect or unavailable primary recovery route to a compensating business or technical action. | Compensation is not restoration; residual consequence remains explicit. |
| COMPLETED_BY | OPERATIONAL | Competence & governance | Links a required activity, training or assurance task to the actor or evidence establishing completion. | Completion does not by itself prove competence or effectiveness. |
| CONNECTS_TO | CORE | Connectivity & deployment | Represents network or logical connectivity from source to target. | Does not imply authentication, authorization, invocation or exploitability. |
| CONTAINED_BY | OPERATIONAL | Resilience & response | Links an incident, path, action or effect to the control or action that limits its continuation or spread. | Containment must distinguish prevention from post-event limitation. |
| CONTAINS | OPERATIONAL | Composition & scope | States that a container, system, bill of materials, scope or grouping includes another object. | Containment is contextual and does not imply technical hosting unless HOSTED_ON/RUNS_ON applies. |
| CONTROLLED_BY | OPERATIONAL | Control & assurance | States that an object, action, data flow or behavior is governed or constrained by a control. | Directional counterpart of control coverage; effectiveness still requires evidence. |
| CONTROLS | CORE | Control & assurance | States that a control covers or constrains a node, relationship, boundary or path. | Coverage does not establish operating effectiveness. |
| CORRELATES_TO | OPERATIONAL | Evidence & telemetry | Links events, records or evidence items that have an evidenced correlation useful for attribution or reconstruction. | Correlation is not identity equivalence or causation. |
| CORROBORATES | EVIDENCE | Evidence relation | Independent evidence supports the same material assertion. | Independence and common-source dependence must be assessed. |
| CROSSES | CORE | Boundary & trust | States that a relationship or path traverses a defined boundary. | The boundary type, source/target zones and enforcement expectation must be recorded. |
| DELEGATES_TO | CORE | Identity & authority | States that a grantor transfers bounded authority to a delegate. | Delegation retains grantor, scope, conditions, duration, approval and revocation semantics. |
| DENIED_BY | OPERATIONAL | Identity & control | Links a requested or potential action to the control, policy or authorization decision that prevents it. | A design denial is not an operating denial unless technically evidenced. |
| DEPENDS_ON | CORE | Dependency & trust | States that the source relies on the target for operation, security, availability, integrity or function. | Dependency may create correlated failure; trust is not implied unless TRUSTS is also stated. |
| DEPLOYED_TO | OPERATIONAL | Deployment state | States that a service, application, artifact or component exists in or is deployed to an environment or target. | Represents deployed state, not the deployment action. |
| DEPLOYS_TO | OPERATIONAL | Deployment action | States that a pipeline, change or release process deploys an artifact or change into an environment or target. | Distinct from DEPLOYED_TO: this is an action/process relationship. |
| DERIVED_FROM | CORE | Provenance & lineage | States that an artifact, evidence item or assertion was produced from another source through a recorded transformation. | Derivation does not imply semantic equivalence, correctness or trust. |
| DISABLED_BY | OPERATIONAL | Authority & containment | Links a capability, agent, tool, action surface or authority to the mechanism that disables it. | Distinguish disablement from revocation, pause and containment. |
| DISCLOSES_TO | OPERATIONAL | Data & authority | States that data or output is disclosed to a party, channel, provider or destination. | Must identify disclosure purpose, scope, authority and conditions where material. |
| DISCOVERS | OPERATIONAL | Discovery & capability | States that a source, client or process enumerates or identifies an object or capability. | Discovery does not imply approval, authorization or completeness. |
| DISPUTES | EVIDENCE | Evidence relation | Evidence contradicts a material part of an assertion. | Conflicting evidence remains visible until reviewed. |
| DUPLICATES | EVIDENCE | Evidence relation | Two evidence items represent the same source content or collection event. | Duplicates do not increase corroboration or evidence strength. |
| ESCALATED_TO | OPERATIONAL | Incident & governance | Links an issue, incident, decision or uncertainty to a higher or specialized decision authority. | Escalation preserves prior state and rationale. |
| EVIDENCED_BY | OPERATIONAL | Evidence & assurance | Links an object, relationship, path, control result or finding to one or more evidence items. | Evidence strength is evaluated separately through grade, quality and confidence. |
| EXCLUDED_FROM | OPERATIONAL | Scope & applicability | States that an object, stakeholder, scenario or requirement is excluded from a declared scope or assessment population. | Exclusion requires rationale and must remain visible in limitations. |
| EXPOSED_TO | OPERATIONAL | Exposure state | States that an asset, identity, endpoint or resource is reachable or exposed to a named source, population, network or threat context. | Exposure is not equivalent to exploitability or authorization. |
| EXPOSES | CORE | Connectivity & action surface | States that a component publishes an interface, tool, resource, endpoint or capability. | Publication does not prove authorization or safe use. |
| GUARDED_BY | OPERATIONAL | Control & behavior | Links a prompt, context, output, action or component to a guardrail or protective mechanism. | Guardrail presence does not prove effective enforcement. |
| HAS_EXCEPTION | OPERATIONAL | Governance & exception | Links an object, control, grant or requirement to an approved exception record. | Exception must carry owner, rationale, scope, expiry and compensating controls. |
| HAS_FINDING | OPERATIONAL | Assessment & assurance | Links an assessed object, path, control, incident or scope to an evidence-backed finding. | A finding remains distinct from its management decision or treatment. |
| HOSTED_ON | CORE | Connectivity & deployment | States that a software, service or component is hosted or executed on a platform, runtime or infrastructure target. | Hosting does not imply ownership or trust. |
| INDEXES | OPERATIONAL | Data & retrieval | States that an index or indexing process represents or indexes a source, dataset, chunk or embedding collection. | Index membership does not prove source authorization or freshness. |
| INFLUENCES | CORE | Behavior & trust | States that a source affects behavior, selection or output without necessarily granting access or action authority. | Influence must not be conflated with authorization or causation unless evidenced. |
| INSTRUCTS | OPERATIONAL | Behavior & orchestration | States that one actor, agent, prompt or component directs another component toward an objective or action. | Instruction does not prove execution or authority. |
| INVALIDATED_BY | OPERATIONAL | Path & evidence | Links a relationship, path or conclusion to evidence or a condition that disproves a required step. | Invalidation is scoped to the affected assertion and does not erase history. |
| INVOKES | CORE | Invocation & action | States that a source calls a tool, API, workflow, model endpoint or capability. | Invocation is distinct from ability to invoke, successful completion and resulting consequence. |
| IN_SCOPE | OPERATIONAL | Scope & applicability | States that an object, population, environment or relationship falls within a declared scope. | Scope must identify version/period and exclusions. |
| LIMITED_BY | OPERATIONAL | Authority & control | Links authority, action or resource consumption to a constraint such as value, rate, time, scope, iteration or budget limit. | Limit existence does not prove enforcement. |
| LOGS_TO | OPERATIONAL | Observability & evidence | States that an event source emits or records telemetry to a logging, evidence or monitoring destination. | Logging does not prove completeness, integrity or correlation. |
| MAPS_TO | CORE | Mapping & external reference | Links a canonical concept or control to an external taxonomy, requirement or reference. | Mapping is not legal compliance, equivalence or certification. |
| MEASURES | OPERATIONAL | Metrics & assurance | Links a metric or measurement activity to the object, population, control or property it measures. | Measurement requires defined method, denominator/scale and period. |
| MEMBER_OF | OPERATIONAL | Identity & grouping | States that an identity, actor or object belongs to a group or grouping construct. | Membership may enable inheritance only when an explicit inheritance rule is evidenced. |
| MITIGATED_BY | OPERATIONAL | Risk & treatment | Links a threat, finding, consequence or exposure to a control or treatment intended to reduce it. | Mitigation does not imply closure or effectiveness without evidence. |
| MONITORED_BY | OPERATIONAL | Observability & control | Links an object, path, limit or behavior to ongoing monitoring or detection coverage. | Monitoring coverage and freshness must be measured before continuous-assurance claims. |
| OBSERVED_BY | CORE | Evidence & observation | States that an object, relationship or event is directly or indirectly observed by an evidence source. | Observation does not imply approval or truth beyond source limitations. |
| OWNED_BY | OPERATIONAL | Ownership & stewardship | Links an object to its designated owner or steward. | Ownership is distinct from technical operation, approval and ultimate accountability. |
| PAUSED_BY | OPERATIONAL | Authority & containment | Links an agent, workflow or action sequence to a mechanism that temporarily pauses execution. | Pause preserves the possibility of resumption and is distinct from revocation. |
| PRIORITIZED_BY | OPERATIONAL | Assessment & governance | Links a validation activity, path, finding or treatment to a prioritization criterion or decision. | Priority must identify decision purpose and must not masquerade as probability. |
| PROPOSED_BY | OPERATIONAL | Graph governance | Links a candidate object, relationship, path or assertion to its proposing source, tool or reviewer. | Proposal remains candidate until accountable review. |
| PROVIDED_BY | CORE | Dependency & provider | States that an object, service, capability or source is supplied by a provider. | Provider relationship must not hide shared-responsibility boundaries. |
| QUALIFIES | EVIDENCE | Evidence relation | Evidence narrows the scope, period, conditions or confidence of an assertion. | Qualification must not be discarded when summarizing the conclusion. |
| READS_FROM | CORE | Data & retrieval | States that an entity reads stored content or state from a target. | Read capability must remain distinct from authorization and observed use. |
| RECOVERED_BY | OPERATIONAL | Resilience & recovery | Links an affected service, process or outcome to the recovery plan or action that restores acceptable business operation. | Broader than technical RESTORED_BY and may include alternate modes. |
| REJECTED_BY | OPERATIONAL | Graph governance | Links a candidate assertion, object, relationship or decision proposal to the reviewer or decision that rejects it. | Rejection retains the historical candidate record. |
| REQUIRES | OPERATIONAL | Dependency & condition | States that an object, activity, obligation, path step or decision requires another condition, capability, evidence item or prerequisite. | Requirement does not prove the prerequisite is satisfied. |
| RESTORED_BY | OPERATIONAL | Resilience & recovery | Links a technical object or configuration to the action or mechanism that restores a prior or acceptable technical state. | Restoration must identify validated state and may still leave business recovery work. |
| RETIRED_BY | OPERATIONAL | Lifecycle | Links an asset, identity, endpoint or artifact to the decision or action that retires it from current use. | Retired history remains traceable. |
| RETRIEVES_FROM | CORE | Data & retrieval | States that a retriever, model, agent or application selects information from a source, index, memory or store. | Retrieval must preserve authorization context and does not imply unrestricted read access. |
| RETURNS_TO | OPERATIONAL | Invocation & data flow | States that a called component returns output or result to a caller, workflow, agent or channel. | Return direction and content scope should be evidenced where material. |
| REVIEWED_BY | OPERATIONAL | Governance & assurance | Links an object, result, exception, grant or report to a reviewer. | Review role, independence and outcome must be distinguishable. |
| REVOKED_BY | CORE | Authority & trust | Links a grant, trust, session, token, binding or authority to the mechanism or decision that withdraws it. | Effective removal should be evidenced, including downstream impact. |
| RUNS_ON | OPERATIONAL | Runtime | States that a workload, application, model service or component executes on a compute, cluster, platform or runtime target. | Runtime placement does not imply security or ownership. |
| SAME_AS_CANDIDATE | OPERATIONAL | Identity correlation | States that two discovered records may represent the same underlying object and require review. | Never treat as identity equivalence until approved correlation. |
| SEGREGATED_FROM | OPERATIONAL | Segregation & control | States that two environments, duties, identities or resources are intentionally separated by policy and/or technical control. | Segregation effectiveness requires evidence of enforcement. |
| SENDS_TO | CORE | Data movement | States that a source transmits data, prompt, context, output or payload to a destination. | Transmission does not imply authorization, disclosure approval or receipt. |
| SIGNED_BY | OPERATIONAL | Supply chain & integrity | Links an artifact or record to the identity, key or signing mechanism attesting to integrity or provenance. | Signature validates only the property and trust chain actually checked. |
| STORES_IN | OPERATIONAL | Data & persistence | States that data, memory, output or evidence is persisted in a storage target. | Retention, purpose, isolation and deletion requirements remain separate. |
| SUBJECT_TO | OPERATIONAL | Governance & obligation | States that an object, use case, provider, decision or process is governed by a policy, obligation, jurisdiction or requirement. | Applicability must be evidenced; mapping alone is insufficient. |
| SUPERSEDES | EVIDENCE | Versioning & history | States that a newer approved record replaces an older current record while preserving the older record as history. | Supersession never silently rewrites prior analysis runs. |
| SUPPORTS | EVIDENCE | Evidence relation | Evidence provides relevant support for an assertion. | Support is scoped and does not imply the assertion is approved. |
| TESTED_BY | CORE | Control & validation | Links a control, behavior, path, object or assertion to an authorized test. | Testing scope, conditions, procedure and limitations must be preserved. |
| THREATENS | OPERATIONAL | Threat & risk | Links a threat or misuse scenario to a target, path, control objective or consequence it may adversely affect. | Threat relationship is scenario-based, not proof of exploitability. |
| TRAVERSES | OPERATIONAL | Path & graph | Links a path or threat scenario to an ordered node, relationship or boundary it traverses. | Traversal order and conditions are material. |
| TRIAGED_BY | OPERATIONAL | Incident & operations | Links an event, detection, finding or incident to the process or actor that triages it. | Triage decision and severity rationale must remain traceable. |
| TRIGGERS | OPERATIONAL | Causality & workflow | States that an event, condition or change causes a subsequent process, review, alert or action to begin. | A trigger is not necessarily an authority grant. |
| TRIGGERS_ACTION | CORE | Invocation & consequence | States that an entity or event directly causes a defined technical or business action. | Must distinguish trigger from authority, successful effect and consequence. |
| TRUSTS | CORE | Trust & dependency | Represents conditional reliance by one entity on another entity, assertion, output, dependency or control for a defined purpose. | Trust is purpose-, scope-, evidence-, owner- and lifecycle-bounded; non-transitive by default. |
| USES | OPERATIONAL | Usage & dependency | States that an actor, use case, application or process uses a service, tool, model, data source or other object. | Usage does not imply approval or authorization. |
| WRITES_TO | CORE | Data & action | States that an entity can or does mutate content or state in a target. | Write authority and actual mutation are distinct; conditions and evidence matter. |

# 8.2 Direction and inverse handling

Predicates are directional. Implementations MAY materialize inverses for navigation, but inverse labels MUST NOT change the canonical meaning.

DEPLOYED_TO and DEPLOYS_TO are intentionally distinct: the former describes deployed state; the latter describes the deployment action or process.

EXPOSES and EXPOSED_TO are intentionally distinct: the former describes publication of an interface/capability; the latter describes an asset exposure state relative to a source or context.

AUTHORIZED_TO and AUTHORIZED_BY are intentionally distinct: the former is a capability grant; the latter identifies the authority permitting an activity or procedure.

CONTROLS and CONTROLLED_BY may express opposite navigation directions, but they never imply operating effectiveness without evidence.

OBSERVED_BY, EVIDENCED_BY and MONITORED_BY are distinct: observation records visibility, evidence supports an assertion, and monitoring represents ongoing coverage.

EVIDENCED_BY is a traceability predicate from an assessed object/result to evidence. SUPPORTS, DISPUTES and QUALIFIES remain the authoritative Evidence Model predicates for the evidence-to-assertion reasoning relationship.

# 9.1 Reachability forms

| **Form** | **Meaning** |
| --- | --- |
| Direct | One material relationship from start to target. |
| Indirect | A route through one intermediate object. |
| Chained | A multistep route requiring ordered conditions. |
| Inherited | A route created by role, group, workload or dependency. |
| Delegated | A route created by explicit or implicit authority transfer. |
| Unknown | A potentially material route lacks sufficient evidence. |

# 9.2 Path metamodel

| **Field** | **Required content** |
| --- | --- |
| path identifier | Stable identifier for one analysis run. |
| start condition | Foothold, input, identity, failure or unsafe state. |
| traversal | Ordered nodes and relationships. |
| conditions | Permissions, protocol, state, data, approval and timing. |
| boundary crossings | Identity, trust, data, provider or consequence changes. |
| target | Named resource, action, process or stakeholder outcome. |
| controls | Existing, missing and proposed breakpoints. |
| evidence and confidence | Support and uncertainty for every material step. |
| residual path | Route remaining after an intervention. |

# 9.3 Path validation state and path role

Path validation state and path role are separate semantic dimensions.

| **Path validation state** | **Permitted conclusion** |
| --- | --- |
| Candidate | A hypothesized sequence requires review. |
| Topological | A traversal exists in the represented graph. |
| Plausible | Required conditions are supported or explicitly UNKNOWN. |
| Validated | Authorized testing or direct evidence confirms the scoped progression. |
| Exploitable | Evidence demonstrates a security exploit path within stated conditions. |
| Controlled | Validated controls prevent, constrain, detect or contain the path as claimed. |
| Invalidated | Evidence disproves a required step or condition. |

| **Path role** | **Meaning** |
| --- | --- |
| Primary | Principal path selected for the current analysis or decision. |
| Alternate | Different route reaching the same or equivalent target. |
| Residual | Route remaining after an existing or proposed intervention. |

A path with role Residual MUST retain an independent PathState. Residual therefore does not imply Plausible, Validated, Exploitable, Controlled or any other validation conclusion.

> **PATH RULE** Topological connectivity is never sufficient to label a path exploitable. Identity, permission, protocol, state, data, workflow and other material preconditions must be evidenced or explicitly UNKNOWN.

# 9.4 Exposure semantics

Exposure is the assessed opportunity for threat, misuse, failure or unauthorized influence to reach a material target through current relationships. Exposure is not synonymous with vulnerability, likelihood or residual risk. The ontology therefore represents exposure through path state, authority, consequence, boundaries, controls, evidence and detectability rather than through a universal probability field.

# 9.5 Control breakpoints

A control breakpoint is a node, relationship or boundary where an effective control can materially stop, constrain, detect or contain a path. Breakpoint analysis must consider alternate and residual paths, control independence, ownership, operational feasibility and resilience.

# 10.1 Evidence chain

> **EVIDENCE CHAIN** Decision question -> Assertion -> Source -> Collection -> Integrity -> Transformation -> Grade -> Corroboration -> Confidence -> Review -> Decision

# 10.2 Evidence item

| **Field family** | **Minimum elements** |
| --- | --- |
| Identity | evidence_id, title, type, source system, owner. |
| Context | scope, environment, population, period, version. |
| Acquisition | collector, method, date, authorization, query or procedure. |
| Integrity | hash/signature where relevant, original reference, custody and transformation. |
| Quality | grade, relevance, currentness, corroboration, representativeness. |
| Protection | classification, privacy, access, retention and legal hold as applicable. |
| Review | reviewer, outcome, conflicts, limitations and supersession. |
| Traceability | supported/disputed assertions, controls, paths, findings and decisions. |

# 10.3 Assertion

| **Assertion field** | **Requirement** |
| --- | --- |
| Statement | One testable proposition without hidden compound claims. |
| Subject and relation | Canonical object and relationship where applicable. |
| Scope | Asset, environment, population, use case and boundary. |
| Temporal context | Observed period, valid time and review trigger. |
| Conditions | Identity, state, configuration, protocol, approval or workflow. |
| Evidence links | Supporting, disputing and qualifying evidence. |
| Confidence | High, Medium, Low or Not rated with rationale. |
| Assertion review state | Candidate, approved, rejected, modified or superseded. |

# 10.4 Evidence relations

| **Predicate** | **Meaning** |
| --- | --- |
| SUPPORTS | Evidence provides relevant support for an assertion. |
| DISPUTES | Evidence contradicts a material part of an assertion. |
| QUALIFIES | Evidence narrows the scope, period, conditions or confidence of an assertion. |
| CORROBORATES | Independent evidence supports the same material assertion. |
| DERIVED_FROM | States that an artifact, evidence item or assertion was produced from another source through a recorded transformation. |
| SUPERSEDES | States that a newer approved record replaces an older current record while preserving the older record as history. |
| DUPLICATES | Two evidence items represent the same source content or collection event. |

# 10.5 Evidence grades

| **Grade** | **Definition** | **Permitted use** |
| --- | --- | --- |
| E0 | No evidence. | UNKNOWN. |
| E1 | Inference or uncorroborated signal. | Candidate hypothesis only. |
| E2 | Owner or stakeholder attestation. | Claimed practice, not independently verified. |
| E3 | Approved documentary evidence. | Design or governance intent. |
| E4 | Corroborated technical evidence. | Implementation within observed scope. |
| E5 | Direct current technical evidence plus representative test or operating record. | Operating effectiveness within stated limits. |

> **EVIDENCE RULE** Evidence grade describes support, not whether the observed state is good or bad. Evidence grade MUST NOT be added to control effectiveness, maturity, severity or risk as though they were the same quantity.

# 10.6 Control conclusion states

| **Conclusion** | **Meaning** |
| --- | --- |
| Verified Effective | Current evidence and representative validation support operation within scope. |
| Implemented - Effectiveness Not Verified | Implementation evidence exists; operating effect was not validated. |
| Implemented - Effectiveness Limited | Implementation is established within the assessed scope; operating effectiveness has been assessed, but the evidence-supported operating-effectiveness result is below the level required for Verified Effective. |
| Partially Implemented | Required elements or scope are incomplete. |
| Not Implemented | Required control is absent in the assessed scope. |
| Not Applicable | Documented rationale shows the control does not apply. |
| Not Tested | Testing was not performed or authorized. |
| UNKNOWN | Evidence is insufficient or conflicting. |
| Inconclusive | Testing or evidence cannot support a determinate conclusion. |

These values form the ControlConclusionState namespace (§11.1). Enumeration order does not imply an ordinal score. A conclusion is a reviewed determination; it is not derived from the control-assurance score. A finalized record MUST satisfy the compatibility rule in Scoring Framework §1.5. ControlConclusionState Not Tested, the operating-effectiveness component condition Not Tested (Scoring Framework §1.5) and AssessmentResultState Not Tested are distinct.

# 10.7 Finding and decision separation

| **Object** | **Canonical minimum** |
| --- | --- |
| Finding | Criteria, condition, cause, affected objects/paths, consequence, evidence, confidence, limitation, remediation objective. |
| Decision | Owner, disposition, rationale, conditions, expiry, monitoring and review trigger. |
| Exception | Requirement deviated from, owner, rationale, scope, expiry, compensating controls, monitoring and reassessment. |
| Test | Authorization, procedure, conditions, result, evidence, limitations and reviewer. |

# 11.1 State namespaces

State labels are deliberately namespaced by object type. The same field name MUST NOT be reused for incompatible state machines in a machine-readable implementation. In particular, assertion review state, assessment result state, control conclusion state, report release state and artifact lifecycle state are distinct.

| **State namespace** | **Values** |
| --- | --- |
| EntityLifecycleState | Candidate; Approved; Rejected; Modified; Retired; Superseded |
| AssertionReviewState | Candidate; Approved; Rejected; Modified; Superseded |
| AssessmentResultState | UNKNOWN; Not Assessed; Not Tested; Not Applicable; Inconclusive; Provisional; Final within scope |
| ControlConclusionState | Verified Effective; Implemented - Effectiveness Not Verified; Implemented - Effectiveness Limited; Partially Implemented; Not Implemented; Not Applicable; Not Tested; UNKNOWN; Inconclusive |
| PathState | Candidate; Topological; Plausible; Validated; Exploitable; Controlled; Invalidated |
| PathRole | Primary; Alternate; Residual |
| ReportReleaseState | Draft; Fact validation; Quality review; Decision review; Final within scope; Superseded; Withdrawn |
| ArtifactLifecycleState | Draft; Consultation; Candidate; Approved; Deprecated; Withdrawn; Superseded |
| ConformanceStatus | Candidate; Conformant; Suspended; Expired; Withdrawn |
| EvidenceCurrentness | Current; Stale; Superseded; Invalid |

# 11.2 Maturity levels

| **Level** | **Name** | **Ontology meaning** |
| --- | --- | --- |
| M1 | Initial | Capability is ad hoc, implicit or inconsistently evidenced. |
| M2 | Repeatable | Priority activities repeat with basic ownership and evidence. |
| M3 | Defined | Standardized capability, roles, criteria and evidence are defined. |
| M4 | Managed | Capability performance, coverage, control operation or variation is measured and validated. |
| M5 | Adaptive | Capability responds to change and learning through governed, evidence-backed adaptation. |

# 11.3 Confidence

| **Level** | **Meaning** |
| --- | --- |
| High | Current, relevant and corroborated evidence covers material scope; no unresolved conflict could change the conclusion. |
| Medium | Evidence supports the conclusion with bounded sampling, freshness, coverage or corroboration gaps. |
| Low | Conclusion relies materially on inference, attestation, narrow samples, stale evidence or unresolved conflict. |
| Not rated | Evidence cannot support a determinate confidence conclusion. |

# 12. Six-Domain and Maturity Integration

| **ID** | **Domain** | **Ontology contribution** |
| --- | --- | --- |
| D1 | Discovery and AIBOM | Establish measurable estate, ownership, dependencies, shadow AI and AI-native bills of materials. |
| D2 | Trust and Privilege Paths | Represent trust, dependency, identity inheritance, boundaries and material paths. The label is a methodology domain label and does not create a product requirement. |
| D3 | Authority Governance | Define and review effective access, inference, approval, action, delegation, limits and revocation. |
| D4 | AI Security Validation | Validate architecture, paths and controls against authorized realistic scenarios. |
| D5 | AI Governance and Assurance | Connect ownership, risk appetite, obligations, lifecycle decisions, exceptions and evidence. |
| D6 | Operational Resilience | Prepare for failure, compromise, unsafe action, containment, recovery and learning. |

# 12.2 Capability identifiers

| **Capability** | **Name** |
| --- | --- |
| D1.1 | Discovery scope and source coverage |
| D1.2 | Canonical inventory and ownership |
| D1.3 | Shadow AI and unmanaged use |
| D1.4 | AIBOM and dependency lineage |
| D1.5 | Unknown, orphan and lifecycle management |
| D1.6 | Discovery evidence and assurance |
| D2.1 | Trust relationship representation |
| D2.2 | Identity and privilege path analysis |
| D2.3 | Boundary and provider trust |
| D2.4 | Path identification and prioritization |
| D2.5 | Control breakpoint analysis |
| D2.6 | Trust graph quality and governance |
| D3.1 | Authority inventory and taxonomy |
| D3.2 | Delegation and identity context |
| D3.3 | Human approval and oversight |
| D3.4 | Authority amplification control |
| D3.5 | Revocation and containment |
| D3.6 | Authority decision governance |
| D4.1 | Validation strategy and scope |
| D4.2 | Threat modeling and path hypotheses |
| D4.3 | Rules of engagement and safety |
| D4.4 | Control effectiveness testing |
| D4.5 | Finding quality and closure |
| D4.6 | Validation assurance and independence |
| D5.1 | Strategy, policy and risk appetite |
| D5.2 | Use-case intake and tiering |
| D5.3 | Decision rights and accountability |
| D5.4 | Applicability and obligations |
| D5.5 | Exceptions and risk acceptance |
| D5.6 | Assurance, reporting and literacy |
| D6.1 | Observability and attribution |
| D6.2 | Detection and triage |
| D6.3 | Containment and kill mechanisms |
| D6.4 | Recovery, rollback and compensation |
| D6.5 | Incident reconstruction and evidence |
| D6.6 | Exercises, learning and resilience governance |

# 12.3 Integration rules

All six domains reason over one versioned graph and MUST NOT maintain incompatible definitions for the same object, relationship, evidence grade or state.

Domain-specific types MAY extend the ontology through a governed namespace, but canonical semantics remain unchanged.

Maturity is a rule-based capability conclusion; it is not inferred from average control scores or graph size.

The ontology records capability and control linkage but does not itself redefine scoring formulas or maturity criteria.

D4.6 is represented as a canonical capability regardless of the separate control-mapping reconciliation required in the Master Control Library.

# 13.1 Immutable historical truth

A completed analysis run is a versioned record of applicable methodology and ontology versions, scope, evidence snapshot, graph snapshot, procedures, findings, control states, paths, decisions and limitations. Later change creates a new run or superseding record; it does not rewrite the earlier conclusion.

# 13.2 Change events

| **Change type** | **Likely ontology effect** |
| --- | --- |
| New tool or action | New authority, invocation route and consequence. |
| New identity or role | New reachability, delegation or attribution. |
| Prompt, planner or agent change | Changed behavior, influence or action selection. |
| Provider or route change | New trust, data and evidence boundary. |
| Control configuration change | Changed breakpoint effect or assurance state. |
| Evidence expiry | Reduced confidence without necessarily changing system state. |
| Retirement | Current-state removal while historical state remains valid for prior runs. |

# 13.3 Provenance and supersession rules

DERIVED_FROM records provenance without implying equivalence.

CHANGED_TO records a material successor state even before formal approval.

SUPERSEDES identifies the new approved current record and preserves historical lineage.

SAME_AS_CANDIDATE is never upgraded to identity equivalence without accountable review.

Candidate AI-generated assertions MUST retain the source material and review outcome.

# 14.1 Extension rule

Organizations and sectors may add types, predicates, properties and enumerations where the canonical ontology is insufficient. Extensions MUST use a distinct namespace, define purpose and semantics, identify owner and version, state compatibility with canonical concepts, include evidence and test cases, and provide migration/deprecation rules. Extensions MUST NOT reuse a canonical name for a different meaning.

| **Extension field** | **Requirement** |
| --- | --- |
| Namespace | Distinct non-canonical identifier. |
| Decision purpose | Why the canonical ontology is insufficient. |
| Definition | Complete semantic definition and intended endpoints. |
| Data requirements | Required properties and treatment of missing values. |
| Compatibility | Relationship to canonical types/predicates and any conversion rule. |
| Validation | Synthetic and field examples, including negative cases. |
| Governance | Owner, review, version, deprecation and migration. |

# 14.2 Ontology conformance

| **Conformance class** | **Requirement** |
| --- | --- |
| Conceptual | Uses canonical definitions and invariants without contradiction. |
| Ontology | Uses canonical types and predicates or declared extensions. |
| Assessment | Applies lifecycle gates, evidence states and conclusion limits. |
| Control | Links controls to graph context, evidence and validation state. |
| Reporting | Discloses scope, evidence, UNKNOWNs, confidence and limitations. |
| Tool | Preserves review state and does not transform inference into approved fact. |
| Extension | Uses namespace, definition, owner, compatibility and migration rule. |

> **PHASE 1 RULE** A public methodology document can be conceptually and ontology-conformant without any machine-readable schema. Tool conformance is a later engineering and conformance activity.

# 15. Security and Anti-Error Constraints

| **ID** | **Invariant** |
| --- | --- |
| ONT-INV-01 | A graph connection does not prove authorization, invocation or exploitability. |
| ONT-INV-02 | Material relationships carry direction, conditions, scope, evidence, confidence, review state and validity as applicable. |
| ONT-INV-03 | Authentication does not imply authorization; authorization does not imply invocation; invocation does not imply successful effect. |
| ONT-INV-04 | Trust is non-transitive by default and must have purpose, scope, basis, owner, lifecycle and evidence. |
| ONT-INV-05 | Material authority identifies acting identity, capability, target, scope, conditions, duration and revocation. |
| ONT-INV-06 | UNKNOWN is preserved and is not converted to zero, safe, failed, passed or Not Applicable. |
| ONT-INV-07 | Evidence grade, confidence, control effectiveness, maturity, path exposure and risk remain separate dimensions. |
| ONT-INV-08 | AI-generated inference cannot overwrite an approved fact; it creates a candidate assertion or new proposed version. |
| ONT-INV-09 | Documentation alone does not prove technical operating effectiveness. |
| ONT-INV-10 | A control is effective only within the validated scope and conditions. |
| ONT-INV-11 | A finding is not changed by management acceptance; treatment decisions are separate objects. |
| ONT-INV-12 | A path state cannot advance solely because a graph traversal exists. |
| ONT-INV-13 | Boundary crossings that materially change trust, identity, data, provider, runtime or consequence are explicit. |
| ONT-INV-14 | Mappings to standards or obligations do not constitute legal opinion, certification or compliance proof. |
| ONT-INV-15 | Completed analysis runs and superseded records remain traceable and are not silently overwritten. |
| ONT-INV-16 | Machine-readable bindings may optimize storage or navigation but may not change canonical meaning. |
| ONT-INV-17 | Product implementation details and proprietary algorithms are not canonical ontology semantics. |
| ONT-INV-18 | A certification state is not created by an assessment, report, score or ontology relationship. |
| ONT-INV-19 | Continuous assurance is not asserted without measured monitoring coverage, current evidence and review. |
| ONT-INV-20 | Extensions are explicit, namespaced and governed; they do not redefine canonical identifiers. |

# 16.1 Internal semantic validation

| **Gate** | **Acceptance criterion** |
| --- | --- |
| Manifesto alignment | No contradiction with system-level reasoning, evidence discipline, authority boundaries, path analysis, human accountability or product separation. |
| CCM alignment | Every core entity/relationship concept preserves Core Conceptual Model v3.0.0 meaning and invariants. |
| Control vocabulary coverage | Every graph node and relationship label used by the 72 controls is either canonical, explicitly mapped or identified as a non-class scope macro. |
| Evidence integrity | E0-E5, assertion semantics, evidence relations and confidence remain distinct and consistent. |
| State integrity | Incompatible state machines are namespaced and UNKNOWN remains non-numeric. |
| Path integrity | Path states and exploitability constraints are preserved exactly. |
| Authority integrity | Connectivity, capability, authority, invocation and consequence remain distinct. |
| Maturity integrity | M1-M5 and all 36 capability identifiers are preserved without deriving maturity from graph size or averages. |
| Product boundary | No ExposureGraph implementation detail is required to apply the ontology. |
| Phase boundary | No machine-readable engineering artifact is required for Phase 1 methodology comprehension or application. |
| Certification boundary | Ontology does not authorize certification, accreditation, legal compliance or safety claims. |
| Publication hygiene | No client data, secrets, internal source filenames or proprietary implementation details are embedded. |

# 16.2 External release gates

This specification may be internally complete while the overall public release remains subject to the methodology-wide external gates already defined elsewhere: independent methodology/security review, employer/IP/confidentiality clearance, licence decision and trademark/naming decision. Those gates are not replaced by this ontology.

# Appendix A. Canonical Entity Registry

| **Canonical type** | **Family** | **Definition** |
| --- | --- | --- |
| Action | Action surface and workflow execution | A discrete state-changing or decision-relevant act performed by a human or machine entity. |
| Actor | Actors, accountability and organizational roles | A human, organizational or machine-associated entity capable of initiating, approving, influencing or being accountable for activity. |
| AffectedStakeholder | Actors, accountability and organizational roles | A person or group whose rights, interests, safety, operations or outcomes may be affected by the AI-enabled system. |
| Agent | AI behavior and decision influence | A software entity that selects, sequences or executes steps toward an objective using models, tools, memory, rules or other agents. |
| AgentMessage | AI behavior and decision influence | A message or structured exchange between agents, orchestration components or agent-adjacent systems. |
| AIBOM | Assurance, governance and evidence | A versioned AI bill of materials describing material AI, data, prompt, agent, tool, identity, provider, runtime and dependency composition. |
| AIEvent | Operations, resilience, threat and change | A time-bounded event associated with AI use, model/agent behavior, identity, tool invocation, approval, output or outcome. |
| AIService | Purpose, scope and organizational context | An internal or third-party service delivering AI capability to one or more systems or use cases. |
| AIUseCase | Purpose, scope and organizational context | A bounded AI-enabled business, operational or technical use whose purpose, owner, decision context, scope and lifecycle can be assessed. |
| API | Action surface and workflow execution | An interface exposing defined operations to callers under stated authentication, authorization and protocol conditions. |
| Application | Purpose, scope and organizational context | A software application that consumes, hosts, orchestrates or exposes AI capability. |
| Approval | Identity, access and authority | A bounded authorization decision that permits, conditions, rejects or stops a defined action or change. |
| Approver | Actors, accountability and organizational roles | An actor authorized to make a bounded approval decision. |
| Artifact | Engineering, runtime and supply chain | A versioned technical artifact such as model package, prompt package, code bundle, container, configuration bundle or build output. |
| Assertion | Assurance, governance and evidence | A precisely stated proposition that can be supported, disputed, qualified, reviewed and superseded. |
| Asset | Engineering, runtime and supply chain | A generic governed object of value or operational relevance; use a more specific subtype where semantics matter. |
| AssurancePlan | Assurance, governance and evidence | A planned set of assurance activities, evidence needs, review responsibilities, cadence and triggers. |
| AuthorityGrant | Identity, access and authority | A governed record that confers a capability to an identity, actor, agent, tool or workflow for a target and scope. |
| Boundary | Graph, boundary, path and consequence | A first-class object representing a material change in trust assumption, ownership, policy, enforcement, residency, privilege or consequence. |
| Budget | Action surface and workflow execution | A bounded resource, value, iteration, time or transaction allowance used to constrain execution. |
| BusinessAction | Action surface and workflow execution | An action that creates a business, operational, customer, financial, legal or organizational effect. |
| BusinessOwner | Actors, accountability and organizational roles | An owner accountable for business purpose, impact, acceptance and business outcome. |
| BusinessUnit | Purpose, scope and organizational context | An organizational unit that owns, operates, consumes or is accountable for AI-related activity. |
| ChangeEvent | Operations, resilience, threat and change | A recorded material change to architecture, data, model, prompt, agent, tool, identity, provider, workflow, policy or control. |
| Channel | Action surface and workflow execution | A destination or transport channel through which data, outputs, notifications or actions are sent. |
| Chunk | Data, retrieval, memory and knowledge | A bounded segment derived from a source record or document for retrieval or processing. |
| Cluster | Engineering, runtime and supply chain | A managed grouping of compute resources that provides execution, orchestration or isolation. |
| Committee | Actors, accountability and organizational roles | A collective governance or decision body with defined authority, quorum, scope and conflict rules. |
| Compute | Engineering, runtime and supply chain | A compute resource or execution substrate used by system components. |
| Condition | Graph, boundary, path and consequence | A prerequisite or state that must hold for a relationship, authorization, path step, control claim or decision to be valid. |
| Configuration | Engineering, runtime and supply chain | A versioned set of technical settings that affects behavior, security, deployment or operation. |
| Consequence | Graph, boundary, path and consequence | The material effect produced if relevant conditions and progression occur. |
| Context | AI behavior and decision influence | Information supplied to influence interpretation, generation, retrieval, planning or action selection. |
| Contract | Purpose, scope and organizational context | A governed agreement defining responsibilities, service conditions, rights, obligations or evidence access. |
| Control | Assurance, governance and evidence | A governed objective and mechanism intended to prevent, constrain, detect, contain, recover from or provide assurance over a material condition or path. |
| Data | Data, retrieval, memory and knowledge | Governed information used, produced, transmitted, stored or inferred within the system. |
| Dataset | Data, retrieval, memory and knowledge | A bounded collection of data records used for training, tuning, evaluation, retrieval or operation. |
| Decision | Assurance, governance and evidence | An accountable disposition that approves, rejects, conditions, accepts, defers, escalates or otherwise governs a matter. |
| Delegate | Actors, accountability and organizational roles | An actor or identity receiving bounded delegated authority while accountability remains traceable. |
| Delegation | Identity, access and authority | A governed transfer of bounded execution authority from grantor to delegate, retaining conditions and accountability. |
| Detection | Operations, resilience, threat and change | A detection rule, alert, signal or analytic result identifying behavior or conditions requiring triage. |
| DiscoveryScope | Purpose, scope and organizational context | The explicitly authorized population, sources, environments and exclusions for discovery activity. |
| DiscoverySource | Data, retrieval, memory and knowledge | A source specifically authorized or used to discover AI assets, identities, services, dependencies or evidence. |
| Document | Data, retrieval, memory and knowledge | A document-like information object used as source, evidence, context or retrieval content. |
| Embedding | Data, retrieval, memory and knowledge | A numerical representation derived from content using an embedding process or model; it is not equivalent to the source record. |
| Environment | Purpose, scope and organizational context | A deployment or operating context such as development, test, staging or production. |
| Evaluator | AI behavior and decision influence | A component that assesses output, policy adherence, quality, risk, completion or another stated criterion. |
| EvidenceItem | Assurance, governance and evidence | A versioned source object that supports, disputes, qualifies or bounds an assertion within stated scope, time and conditions. |
| Exception | Assurance, governance and evidence | A time-bounded, approved deviation from a requirement with owner, rationale, conditions, compensating controls and expiry. |
| Exercise | Operations, resilience, threat and change | A controlled rehearsal or simulation used to validate readiness, roles, controls, containment, recovery or decision processes. |
| Finding | Assurance, governance and evidence | An evidence-linked assessment conclusion stating criteria, condition, cause, consequence, affected objects or paths, confidence and remediation objective. |
| Grantor | Actors, accountability and organizational roles | An actor or authority source that grants a bounded permission, role, delegation or capability. |
| GraphAssertion | Assurance, governance and evidence | An assertion specifically about an object, relationship, boundary, path, condition or graph state. |
| GraphSnapshot | Graph, boundary, path and consequence | A versioned graph state representing approved and candidate objects, relationships, boundaries and paths for an analysis run. |
| Group | Identity, access and authority | A membership construct through which roles, permissions or policies may be inherited. |
| Guardrail | AI behavior and decision influence | A mechanism intended to constrain, filter, redirect, block or supervise input, output or action. |
| HumanApprover | Actors, accountability and organizational roles | A human actor who performs a meaningful approval within defined information, independence, timing and stop conditions. |
| HumanIdentity | Identity, access and authority | An identity representing a human actor. |
| Identity | Identity, access and authority | A principal or identity representation used for authentication, attribution, authorization or delegation. |
| Incident | Operations, resilience, threat and change | A governed record of a realized or suspected event requiring coordinated investigation, containment, recovery or reporting. |
| IncidentScenario | Operations, resilience, threat and change | A defined scenario used for planning, testing or exercising incident response and resilience. |
| Jurisdiction | Purpose, scope and organizational context | A legal or regulatory jurisdiction relevant to the use case, data, provider, stakeholder or obligation. |
| MCPCapability | Action surface and workflow execution | A discrete capability exposed through an MCP service, including its operation, schema, scope and side effects. |
| MCPClient | Action surface and workflow execution | A client participating in Model Context Protocol interactions and capable of discovering or invoking exposed capabilities. |
| MCPServer | Action surface and workflow execution | A service exposing Model Context Protocol resources, tools, prompts or operations to authorized clients. |
| Memory | Data, retrieval, memory and knowledge | Persisted conversational, semantic, episodic or workflow state that may influence future model, agent or workflow behavior. |
| Metric | Assurance, governance and evidence | A defined measurement with numerator, denominator or scale, method, population, period and interpretation. |
| Model | AI behavior and decision influence | A computational artifact that produces outputs from inputs according to learned, programmed or combined behavior. |
| ModelEndpoint | AI behavior and decision influence | An addressable serving interface for a model with routing, provider, version and environment context. |
| Network | Engineering, runtime and supply chain | A network, logical fabric or connectivity domain used to route communication. |
| Obligation | Assurance, governance and evidence | A requirement arising from law, regulation, contract, policy, commitment or another governed source. |
| Operation | Action surface and workflow execution | A callable technical operation with defined parameters, authorization, side effects and expected outcomes. |
| Operator | Actors, accountability and organizational roles | An actor responsible for operating or supervising a system, workflow or control. |
| Outcome | Graph, boundary, path and consequence | An observed or intended result of an action, workflow, decision, control or incident; it may or may not be materially adverse. |
| Output | AI behavior and decision influence | A result produced by a model, agent, workflow or AI-enabled component. |
| Owner | Actors, accountability and organizational roles | A role-bearing actor accountable for stewardship of an object, decision, process or control. |
| Path | Graph, boundary, path and consequence | An ordered explanatory sequence from a defined start condition to a defined target, with traversal, conditions, boundary crossings, controls, evidence and residual route. |
| Permission | Identity, access and authority | A bounded entitlement to access, use, influence or modify a target under stated conditions. |
| Pipeline | Engineering, runtime and supply chain | A build, training, evaluation, release, deployment or data-processing pipeline. |
| Planner | AI behavior and decision influence | A component that constructs or revises a sequence of actions or subgoals. |
| Platform | Purpose, scope and organizational context | A shared technical platform providing services, runtimes, identity, data, tooling or AI capabilities. |
| Plugin | Action surface and workflow execution | An extension that exposes one or more capabilities to an application, model, agent or workflow. |
| Policy | Assurance, governance and evidence | An approved rule, principle or requirement governing behavior, use, control, decision or lifecycle activity. |
| PromptAsset | AI behavior and decision influence | A versioned instruction, system prompt, template or contextual prompt artifact that can influence model or agent behavior. |
| Provider | Actors, accountability and organizational roles | An internal or external party supplying a model, service, platform, tool, data source, infrastructure component or dependency. |
| Queue | Action surface and workflow execution | A persistent or transient mechanism that buffers, sequences or retries work and may amplify scale, delay or persistence. |
| RecoveryPlan | Operations, resilience, threat and change | A governed plan for restoring acceptable technical or business state after failure, compromise or unsafe action. |
| RegulatoryRole | Actors, accountability and organizational roles | A role representing a jurisdiction-specific responsibility or regulated function relevant to an obligation or decision. |
| RelationshipRecord | Graph, boundary, path and consequence | A reified record of a typed directional relationship and its conditions, scope, evidence, confidence, review status and validity. |
| Repository | Engineering, runtime and supply chain | A controlled source repository storing code, prompts, configuration, models, artifacts or related metadata. |
| Resource | Engineering, runtime and supply chain | A generic targetable resource when a more specific class is not available or material. |
| Responder | Actors, accountability and organizational roles | An actor assigned to detect, triage, contain, investigate or recover from an event or incident. |
| Retriever | Data, retrieval, memory and knowledge | A component that selects information for context using queries, authorization context, filters, ranking and source scope. |
| Reviewer | Actors, accountability and organizational roles | An actor authorized to challenge, verify or approve an assertion, assessment result or governance decision. |
| RiskAppetite | Assurance, governance and evidence | A governed expression of acceptable exposure, consequence, tolerance or decision threshold for defined contexts. |
| Role | Identity, access and authority | A named bundle of responsibilities, entitlements or decision authorities that may be assigned or assumed. |
| Safeguard | Assurance, governance and evidence | A protective measure or condition that may implement or contribute to one or more controls. |
| Secret | Identity, access and authority | A credential or confidential authentication material whose possession may enable identity or authority. |
| Session | Identity, access and authority | A bounded runtime security context carrying identity, authorization, state and duration. |
| ShadowAI | Operations, resilience, threat and change | An observed AI use, service or capability operating outside the currently sanctioned inventory or governance path; status must be evidenced rather than assumed. |
| Source | Data, retrieval, memory and knowledge | An originating system, record set, repository, human-provided source or external source from which data or evidence is obtained. |
| SourceRecord | Data, retrieval, memory and knowledge | An authoritative or governed record from a source system with owner, classification, entitlement, retention and lineage. |
| System | Purpose, scope and organizational context | A bounded socio-technical configuration of actors, identities, AI components, data, tools, infrastructure, providers, controls and business processes. |
| Target | Engineering, runtime and supply chain | A contextual role identifying the object, process, action or outcome that a path, authority or threat can reach. |
| TechnicalOwner | Actors, accountability and organizational roles | An owner accountable for technical implementation, operation or lifecycle stewardship. |
| Test | Assurance, governance and evidence | A record of an authorized procedure, conditions, execution, result and limitations used to validate behavior or control operation. |
| Tester | Actors, accountability and organizational roles | An actor authorized to perform defined validation or test procedures. |
| TestPlan | Assurance, governance and evidence | A governed plan defining validation scope, authorization, procedures, safety constraints, expected evidence and decision use. |
| Threat | Operations, resilience, threat and change | A threat actor, behavior, misuse, failure mode or adversarial condition capable of causing a material consequence. |
| Token | Identity, access and authority | A time- or scope-bounded credential or assertion used to establish identity, authorization or session state. |
| Tool | Action surface and workflow execution | A callable capability through which a model, agent, application or workflow can observe, retrieve, transform or change external state. |
| Training | Assurance, governance and evidence | A competence-development or awareness activity with defined audience, objective, evidence and completion status. |
| Transaction | Action surface and workflow execution | An action with bounded transactional effect, value, commit semantics or externally significant outcome. |
| Vector | Data, retrieval, memory and knowledge | A vector representation used for similarity, retrieval or other numerical comparison. An Embedding is a common Vector subtype, but the vector is not the source content itself. |
| VectorIndex | Data, retrieval, memory and knowledge | A governed index or store used to search or retrieve vectorized content, with namespace, tenancy, retention and security context. |
| Workflow | Action surface and workflow execution | An ordered or event-driven sequence of tasks, decisions, calls, approvals or actions. |
| Workload | Engineering, runtime and supply chain | A deployed compute workload that executes application, model, agent, service or supporting function. |
| WorkloadIdentity | Identity, access and authority | A non-human identity representing software, service, workload, agent or automation. |
| Zone | Purpose, scope and organizational context | A logical or physical segment with distinct reachability, trust or enforcement assumptions. |

# Appendix B. Exact Control-Library Node Compatibility Registry

The Master Control Library uses the following exact graph-node labels. This registry ensures that Phase 1 ontology publication can account for every current control label without pretending that every label is a distinct top-level class.

| **Source label** | **Ontology target** | **Treatment** | **Control uses** | **Rule** |
| --- | --- | --- | --- | --- |
| Action | Action | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Actor | Actor | Canonical / preserved | 6 | Use canonical meaning defined in this ontology. |
| AffectedStakeholder | AffectedStakeholder | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Agent | Agent | Canonical / preserved | 16 | Use canonical meaning defined in this ontology. |
| AgentMessage | AgentMessage | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| AIBOM | AIBOM | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| AIEvent | AIEvent | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| AIService | AIService | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| AIUseCase | AIUseCase | Canonical / preserved | 11 | Use canonical meaning defined in this ontology. |
| All canonical asset classes | SCOPE-MACRO | Scope macro - not a class | 1 | Collection expression used by controls; implementations expand it to the applicable canonical population. |
| All canonical graph nodes | SCOPE-MACRO | Scope macro - not a class | 1 | Collection expression used by controls; implementations expand it to the applicable canonical population. |
| Application | Application | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Approval | Approval | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Approver | Approver | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Artifact | Artifact | Canonical / preserved | 4 | Use canonical meaning defined in this ontology. |
| Asset | Asset | Canonical / preserved | 4 | Use canonical meaning defined in this ontology. |
| AssurancePlan | AssurancePlan | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| AuthorityGrant | AuthorityGrant | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Boundary | Boundary | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| Budget | Budget | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| BusinessAction | BusinessAction | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| BusinessOwner | BusinessOwner | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| BusinessUnit | BusinessUnit | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| ChangeEvent | ChangeEvent | Canonical / preserved | 4 | Use canonical meaning defined in this ontology. |
| Channel | Channel | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Chunk | Chunk | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Cluster | Cluster | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Committee | Committee | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Condition | Condition | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Configuration | Configuration | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Consequence | Consequence | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Context | Context | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Contract | Contract | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| Control | Control | Canonical / preserved | 13 | Use canonical meaning defined in this ontology. |
| Data | Data | Canonical / preserved | 6 | Use canonical meaning defined in this ontology. |
| Dataset | Dataset | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Decision | Decision | Canonical / preserved | 10 | Use canonical meaning defined in this ontology. |
| Delegate | Delegate | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Delegation | Delegation | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Detection | Detection | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| DiscoveryScope | DiscoveryScope | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| DiscoverySource | DiscoverySource | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Edge | RelationshipRecord | Compatibility alias | 1 | Maps to canonical type RelationshipRecord; existing v1.0 control wording remains valid. |
| Endpoint | ModelEndpoint | Compatibility alias | 3 | Maps to canonical type ModelEndpoint; existing v1.0 control wording remains valid. |
| Environment | Environment | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| Evidence | EvidenceItem | Compatibility alias | 18 | Maps to canonical type EvidenceItem; existing v1.0 control wording remains valid. |
| Exception | Exception | Canonical / preserved | 4 | Use canonical meaning defined in this ontology. |
| Exercise | Exercise | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Finding | Finding | Canonical / preserved | 4 | Use canonical meaning defined in this ontology. |
| Grantor | Grantor | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| GraphAssertion | GraphAssertion | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| GraphSnapshot | GraphSnapshot | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Group | Group | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Guardrail | Guardrail | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| HumanApprover | HumanApprover | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| HumanIdentity | HumanIdentity | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| Identity | Identity | Canonical / preserved | 18 | Use canonical meaning defined in this ontology. |
| Incident | Incident | Canonical / preserved | 4 | Use canonical meaning defined in this ontology. |
| IncidentScenario | IncidentScenario | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Jurisdiction | Jurisdiction | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| MCPClient | MCPClient | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| MCPServer | MCPServer | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Memory | Memory | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Metric | Metric | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Model | Model | Canonical / preserved | 7 | Use canonical meaning defined in this ontology. |
| Network | Network | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Obligation | Obligation | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Operation | Operation | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Operator | Operator | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Outcome | Outcome | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Output | Output | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Owner | Owner | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Path | Path | Canonical / preserved | 14 | Use canonical meaning defined in this ontology. |
| Permission | Permission | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| Pipeline | Pipeline | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Planner | Planner | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Platform | Platform | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Plugin | Plugin | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Policy | Policy | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Prompt | PromptAsset | Compatibility alias | 5 | Maps to canonical type PromptAsset; existing v1.0 control wording remains valid. |
| Provider | Provider | Canonical / preserved | 12 | Use canonical meaning defined in this ontology. |
| Queue | Queue | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| RecoveryPlan | RecoveryPlan | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| RegulatoryRole | RegulatoryRole | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Repository | Repository | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Resource | Resource | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Responder | Responder | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Retriever | Retriever | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Reviewer | Reviewer | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| RiskAppetite | RiskAppetite | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Role | Role | Canonical / preserved | 4 | Use canonical meaning defined in this ontology. |
| Safeguard | Safeguard | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Secret | Secret | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Session | Session | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| ShadowAI | ShadowAI | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Source | Source | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| System | System | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Target | Target | Canonical / preserved | 5 | Use canonical meaning defined in this ontology. |
| TechnicalOwner | TechnicalOwner | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Test | Test | Canonical / preserved | 4 | Use canonical meaning defined in this ontology. |
| Tester | Tester | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| TestPlan | TestPlan | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Threat | Threat | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| Token | Token | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Tool | Tool | Canonical / preserved | 13 | Use canonical meaning defined in this ontology. |
| Training | Training | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Transaction | Transaction | Canonical / preserved | 3 | Use canonical meaning defined in this ontology. |
| VectorIndex | VectorIndex | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| Workflow | Workflow | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Workload | Workload | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |
| WorkloadIdentity | WorkloadIdentity | Canonical / preserved | 2 | Use canonical meaning defined in this ontology. |
| Zone | Zone | Canonical / preserved | 1 | Use canonical meaning defined in this ontology. |

# Appendix C. Canonical Relationship Registry

Every relationship used by the Core Conceptual Model, Master Control Library or Evidence Model is represented below. Status indicates semantic origin, not priority: CORE predicates originate in the Core Conceptual Model; EVIDENCE predicates originate in the Evidence Model; OPERATIONAL predicates are formalized from repeated control-library usage.

| **Predicate** | **Status** | **Family** | **Meaning** | **Constraint** |
| --- | --- | --- | --- | --- |
| ACCOUNTABLE_TO | OPERATIONAL | Governance & accountability | Links an object, role, action or decision to the actor or body ultimately accountable for it. | Accountability is not erased by delegation or execution transfer. |
| ACTS_FOR | OPERATIONAL | Identity & authority | States that an actor, agent or identity performs an action on behalf of another actor, identity or principal. | Preserve initiator, delegate and attribution; do not infer unlimited authority. |
| AFFECTS | OPERATIONAL | Consequence & impact | Links a threat, incident, action, finding or decision to a stakeholder, asset, process or outcome materially affected. | Effect direction and scope must be stated. |
| AMPLIFIES | OPERATIONAL | Authority & exposure | States that a relationship, condition or component increases effective reach, authority, scale, persistence or consequence. | Requires an explicit amplification dimension and evidence; it is not synonymous with vulnerability. |
| APPROVED_BY | CORE | Governance & decision | Links an action, relationship, use case, change or decision to its accountable approval. | Approval must be meaningful, in scope and evidenced. |
| ASSUMES_ROLE | CORE | Identity & authority | States that an identity obtains the entitlements associated with a role under defined conditions. | Do not infer all role permissions without validating effective grant and conditions. |
| AUGMENTS | OPERATIONAL | Data & behavior | States that one object adds context, data or capability to another, such as retrieval augmenting a prompt or model context. | Augmentation does not imply trustworthiness or authorization. |
| AUTHENTICATES_AS | CORE | Identity & authority | States that an actor, agent, application or workload establishes a session or request using a particular identity. | Authentication does not imply authorization. |
| AUTHORIZED_BY | OPERATIONAL | Identity & authority | Links an activity or procedure to the authority or approval that permits it, such as a test authorized by rules of engagement. | Distinct from AUTHORIZED_TO, which represents granted capability. |
| AUTHORIZED_TO | CORE | Identity & authority | States that an identity or actor is granted a defined action or capability on a target under stated scope and conditions. | Authorization does not prove invocation or successful effect. |
| BINDS_TO | OPERATIONAL | Identity & authority | Links an approval, grant, identity or policy decision to the action, object or scope it technically binds. | Use only where binding is enforceable or explicitly identified as design intent. |
| BREAKS_PATH | CORE | Control & assurance | Links a control or intervention to a path it prevents, constrains, detects or contains. | Effectiveness must be validated before claiming the path is controlled. |
| BUILT_FROM | OPERATIONAL | Supply chain & provenance | States that an artifact, model, package or release is assembled from named source components or upstream artifacts. | Preserve provenance and version; does not imply trust in inputs. |
| CAN_EGRESS_TO | OPERATIONAL | Connectivity & data movement | States that a runtime or network object can send traffic or data to a destination under current technical conditions. | Reachability is not authorization and does not prove data was sent. |
| CHALLENGED_BY | OPERATIONAL | Governance & review | Links a decision, conclusion or governance action to an independent or second-person challenge. | Challenge does not automatically invalidate the original result. |
| CHANGED_TO | OPERATIONAL | Lifecycle & change | Links a prior object, relationship or state to a materially changed successor state. | Historical state remains traceable; use SUPERSEDES when the successor becomes the approved current record. |
| CLASSIFIED_AS | OPERATIONAL | Classification & governance | Assigns a governed classification, tier, severity or category to an object or event. | Classification must identify scheme/version and must not imply compliance. |
| CLOSED_BY | OPERATIONAL | Finding & remediation | Links a finding to the evidence-backed action or decision that closes it. | Closure requires current evidence and, where relevant, retest; acceptance alone is insufficient. |
| COMPENSATED_BY | OPERATIONAL | Resilience & recovery | Links an adverse effect or unavailable primary recovery route to a compensating business or technical action. | Compensation is not restoration; residual consequence remains explicit. |
| COMPLETED_BY | OPERATIONAL | Competence & governance | Links a required activity, training or assurance task to the actor or evidence establishing completion. | Completion does not by itself prove competence or effectiveness. |
| CONNECTS_TO | CORE | Connectivity & deployment | Represents network or logical connectivity from source to target. | Does not imply authentication, authorization, invocation or exploitability. |
| CONTAINED_BY | OPERATIONAL | Resilience & response | Links an incident, path, action or effect to the control or action that limits its continuation or spread. | Containment must distinguish prevention from post-event limitation. |
| CONTAINS | OPERATIONAL | Composition & scope | States that a container, system, bill of materials, scope or grouping includes another object. | Containment is contextual and does not imply technical hosting unless HOSTED_ON/RUNS_ON applies. |
| CONTROLLED_BY | OPERATIONAL | Control & assurance | States that an object, action, data flow or behavior is governed or constrained by a control. | Directional counterpart of control coverage; effectiveness still requires evidence. |
| CONTROLS | CORE | Control & assurance | States that a control covers or constrains a node, relationship, boundary or path. | Coverage does not establish operating effectiveness. |
| CORRELATES_TO | OPERATIONAL | Evidence & telemetry | Links events, records or evidence items that have an evidenced correlation useful for attribution or reconstruction. | Correlation is not identity equivalence or causation. |
| CORROBORATES | EVIDENCE | Evidence relation | Independent evidence supports the same material assertion. | Independence and common-source dependence must be assessed. |
| CROSSES | CORE | Boundary & trust | States that a relationship or path traverses a defined boundary. | The boundary type, source/target zones and enforcement expectation must be recorded. |
| DELEGATES_TO | CORE | Identity & authority | States that a grantor transfers bounded authority to a delegate. | Delegation retains grantor, scope, conditions, duration, approval and revocation semantics. |
| DENIED_BY | OPERATIONAL | Identity & control | Links a requested or potential action to the control, policy or authorization decision that prevents it. | A design denial is not an operating denial unless technically evidenced. |
| DEPENDS_ON | CORE | Dependency & trust | States that the source relies on the target for operation, security, availability, integrity or function. | Dependency may create correlated failure; trust is not implied unless TRUSTS is also stated. |
| DEPLOYED_TO | OPERATIONAL | Deployment state | States that a service, application, artifact or component exists in or is deployed to an environment or target. | Represents deployed state, not the deployment action. |
| DEPLOYS_TO | OPERATIONAL | Deployment action | States that a pipeline, change or release process deploys an artifact or change into an environment or target. | Distinct from DEPLOYED_TO: this is an action/process relationship. |
| DERIVED_FROM | CORE | Provenance & lineage | States that an artifact, evidence item or assertion was produced from another source through a recorded transformation. | Derivation does not imply semantic equivalence, correctness or trust. |
| DISABLED_BY | OPERATIONAL | Authority & containment | Links a capability, agent, tool, action surface or authority to the mechanism that disables it. | Distinguish disablement from revocation, pause and containment. |
| DISCLOSES_TO | OPERATIONAL | Data & authority | States that data or output is disclosed to a party, channel, provider or destination. | Must identify disclosure purpose, scope, authority and conditions where material. |
| DISCOVERS | OPERATIONAL | Discovery & capability | States that a source, client or process enumerates or identifies an object or capability. | Discovery does not imply approval, authorization or completeness. |
| DISPUTES | EVIDENCE | Evidence relation | Evidence contradicts a material part of an assertion. | Conflicting evidence remains visible until reviewed. |
| DUPLICATES | EVIDENCE | Evidence relation | Two evidence items represent the same source content or collection event. | Duplicates do not increase corroboration or evidence strength. |
| ESCALATED_TO | OPERATIONAL | Incident & governance | Links an issue, incident, decision or uncertainty to a higher or specialized decision authority. | Escalation preserves prior state and rationale. |
| EVIDENCED_BY | OPERATIONAL | Evidence & assurance | Links an object, relationship, path, control result or finding to one or more evidence items. | Evidence strength is evaluated separately through grade, quality and confidence. |
| EXCLUDED_FROM | OPERATIONAL | Scope & applicability | States that an object, stakeholder, scenario or requirement is excluded from a declared scope or assessment population. | Exclusion requires rationale and must remain visible in limitations. |
| EXPOSED_TO | OPERATIONAL | Exposure state | States that an asset, identity, endpoint or resource is reachable or exposed to a named source, population, network or threat context. | Exposure is not equivalent to exploitability or authorization. |
| EXPOSES | CORE | Connectivity & action surface | States that a component publishes an interface, tool, resource, endpoint or capability. | Publication does not prove authorization or safe use. |
| GUARDED_BY | OPERATIONAL | Control & behavior | Links a prompt, context, output, action or component to a guardrail or protective mechanism. | Guardrail presence does not prove effective enforcement. |
| HAS_EXCEPTION | OPERATIONAL | Governance & exception | Links an object, control, grant or requirement to an approved exception record. | Exception must carry owner, rationale, scope, expiry and compensating controls. |
| HAS_FINDING | OPERATIONAL | Assessment & assurance | Links an assessed object, path, control, incident or scope to an evidence-backed finding. | A finding remains distinct from its management decision or treatment. |
| HOSTED_ON | CORE | Connectivity & deployment | States that a software, service or component is hosted or executed on a platform, runtime or infrastructure target. | Hosting does not imply ownership or trust. |
| INDEXES | OPERATIONAL | Data & retrieval | States that an index or indexing process represents or indexes a source, dataset, chunk or embedding collection. | Index membership does not prove source authorization or freshness. |
| INFLUENCES | CORE | Behavior & trust | States that a source affects behavior, selection or output without necessarily granting access or action authority. | Influence must not be conflated with authorization or causation unless evidenced. |
| INSTRUCTS | OPERATIONAL | Behavior & orchestration | States that one actor, agent, prompt or component directs another component toward an objective or action. | Instruction does not prove execution or authority. |
| INVALIDATED_BY | OPERATIONAL | Path & evidence | Links a relationship, path or conclusion to evidence or a condition that disproves a required step. | Invalidation is scoped to the affected assertion and does not erase history. |
| INVOKES | CORE | Invocation & action | States that a source calls a tool, API, workflow, model endpoint or capability. | Invocation is distinct from ability to invoke, successful completion and resulting consequence. |
| IN_SCOPE | OPERATIONAL | Scope & applicability | States that an object, population, environment or relationship falls within a declared scope. | Scope must identify version/period and exclusions. |
| LIMITED_BY | OPERATIONAL | Authority & control | Links authority, action or resource consumption to a constraint such as value, rate, time, scope, iteration or budget limit. | Limit existence does not prove enforcement. |
| LOGS_TO | OPERATIONAL | Observability & evidence | States that an event source emits or records telemetry to a logging, evidence or monitoring destination. | Logging does not prove completeness, integrity or correlation. |
| MAPS_TO | CORE | Mapping & external reference | Links a canonical concept or control to an external taxonomy, requirement or reference. | Mapping is not legal compliance, equivalence or certification. |
| MEASURES | OPERATIONAL | Metrics & assurance | Links a metric or measurement activity to the object, population, control or property it measures. | Measurement requires defined method, denominator/scale and period. |
| MEMBER_OF | OPERATIONAL | Identity & grouping | States that an identity, actor or object belongs to a group or grouping construct. | Membership may enable inheritance only when an explicit inheritance rule is evidenced. |
| MITIGATED_BY | OPERATIONAL | Risk & treatment | Links a threat, finding, consequence or exposure to a control or treatment intended to reduce it. | Mitigation does not imply closure or effectiveness without evidence. |
| MONITORED_BY | OPERATIONAL | Observability & control | Links an object, path, limit or behavior to ongoing monitoring or detection coverage. | Monitoring coverage and freshness must be measured before continuous-assurance claims. |
| OBSERVED_BY | CORE | Evidence & observation | States that an object, relationship or event is directly or indirectly observed by an evidence source. | Observation does not imply approval or truth beyond source limitations. |
| OWNED_BY | OPERATIONAL | Ownership & stewardship | Links an object to its designated owner or steward. | Ownership is distinct from technical operation, approval and ultimate accountability. |
| PAUSED_BY | OPERATIONAL | Authority & containment | Links an agent, workflow or action sequence to a mechanism that temporarily pauses execution. | Pause preserves the possibility of resumption and is distinct from revocation. |
| PRIORITIZED_BY | OPERATIONAL | Assessment & governance | Links a validation activity, path, finding or treatment to a prioritization criterion or decision. | Priority must identify decision purpose and must not masquerade as probability. |
| PROPOSED_BY | OPERATIONAL | Graph governance | Links a candidate object, relationship, path or assertion to its proposing source, tool or reviewer. | Proposal remains candidate until accountable review. |
| PROVIDED_BY | CORE | Dependency & provider | States that an object, service, capability or source is supplied by a provider. | Provider relationship must not hide shared-responsibility boundaries. |
| QUALIFIES | EVIDENCE | Evidence relation | Evidence narrows the scope, period, conditions or confidence of an assertion. | Qualification must not be discarded when summarizing the conclusion. |
| READS_FROM | CORE | Data & retrieval | States that an entity reads stored content or state from a target. | Read capability must remain distinct from authorization and observed use. |
| RECOVERED_BY | OPERATIONAL | Resilience & recovery | Links an affected service, process or outcome to the recovery plan or action that restores acceptable business operation. | Broader than technical RESTORED_BY and may include alternate modes. |
| REJECTED_BY | OPERATIONAL | Graph governance | Links a candidate assertion, object, relationship or decision proposal to the reviewer or decision that rejects it. | Rejection retains the historical candidate record. |
| REQUIRES | OPERATIONAL | Dependency & condition | States that an object, activity, obligation, path step or decision requires another condition, capability, evidence item or prerequisite. | Requirement does not prove the prerequisite is satisfied. |
| RESTORED_BY | OPERATIONAL | Resilience & recovery | Links a technical object or configuration to the action or mechanism that restores a prior or acceptable technical state. | Restoration must identify validated state and may still leave business recovery work. |
| RETIRED_BY | OPERATIONAL | Lifecycle | Links an asset, identity, endpoint or artifact to the decision or action that retires it from current use. | Retired history remains traceable. |
| RETRIEVES_FROM | CORE | Data & retrieval | States that a retriever, model, agent or application selects information from a source, index, memory or store. | Retrieval must preserve authorization context and does not imply unrestricted read access. |
| RETURNS_TO | OPERATIONAL | Invocation & data flow | States that a called component returns output or result to a caller, workflow, agent or channel. | Return direction and content scope should be evidenced where material. |
| REVIEWED_BY | OPERATIONAL | Governance & assurance | Links an object, result, exception, grant or report to a reviewer. | Review role, independence and outcome must be distinguishable. |
| REVOKED_BY | CORE | Authority & trust | Links a grant, trust, session, token, binding or authority to the mechanism or decision that withdraws it. | Effective removal should be evidenced, including downstream impact. |
| RUNS_ON | OPERATIONAL | Runtime | States that a workload, application, model service or component executes on a compute, cluster, platform or runtime target. | Runtime placement does not imply security or ownership. |
| SAME_AS_CANDIDATE | OPERATIONAL | Identity correlation | States that two discovered records may represent the same underlying object and require review. | Never treat as identity equivalence until approved correlation. |
| SEGREGATED_FROM | OPERATIONAL | Segregation & control | States that two environments, duties, identities or resources are intentionally separated by policy and/or technical control. | Segregation effectiveness requires evidence of enforcement. |
| SENDS_TO | CORE | Data movement | States that a source transmits data, prompt, context, output or payload to a destination. | Transmission does not imply authorization, disclosure approval or receipt. |
| SIGNED_BY | OPERATIONAL | Supply chain & integrity | Links an artifact or record to the identity, key or signing mechanism attesting to integrity or provenance. | Signature validates only the property and trust chain actually checked. |
| STORES_IN | OPERATIONAL | Data & persistence | States that data, memory, output or evidence is persisted in a storage target. | Retention, purpose, isolation and deletion requirements remain separate. |
| SUBJECT_TO | OPERATIONAL | Governance & obligation | States that an object, use case, provider, decision or process is governed by a policy, obligation, jurisdiction or requirement. | Applicability must be evidenced; mapping alone is insufficient. |
| SUPERSEDES | EVIDENCE | Versioning & history | States that a newer approved record replaces an older current record while preserving the older record as history. | Supersession never silently rewrites prior analysis runs. |
| SUPPORTS | EVIDENCE | Evidence relation | Evidence provides relevant support for an assertion. | Support is scoped and does not imply the assertion is approved. |
| TESTED_BY | CORE | Control & validation | Links a control, behavior, path, object or assertion to an authorized test. | Testing scope, conditions, procedure and limitations must be preserved. |
| THREATENS | OPERATIONAL | Threat & risk | Links a threat or misuse scenario to a target, path, control objective or consequence it may adversely affect. | Threat relationship is scenario-based, not proof of exploitability. |
| TRAVERSES | OPERATIONAL | Path & graph | Links a path or threat scenario to an ordered node, relationship or boundary it traverses. | Traversal order and conditions are material. |
| TRIAGED_BY | OPERATIONAL | Incident & operations | Links an event, detection, finding or incident to the process or actor that triages it. | Triage decision and severity rationale must remain traceable. |
| TRIGGERS | OPERATIONAL | Causality & workflow | States that an event, condition or change causes a subsequent process, review, alert or action to begin. | A trigger is not necessarily an authority grant. |
| TRIGGERS_ACTION | CORE | Invocation & consequence | States that an entity or event directly causes a defined technical or business action. | Must distinguish trigger from authority, successful effect and consequence. |
| TRUSTS | CORE | Trust & dependency | Represents conditional reliance by one entity on another entity, assertion, output, dependency or control for a defined purpose. | Trust is purpose-, scope-, evidence-, owner- and lifecycle-bounded; non-transitive by default. |
| USES | OPERATIONAL | Usage & dependency | States that an actor, use case, application or process uses a service, tool, model, data source or other object. | Usage does not imply approval or authorization. |
| WRITES_TO | CORE | Data & action | States that an entity can or does mutate content or state in a target. | Write authority and actual mutation are distinct; conditions and evidence matter. |

# D.1 Assessment result states

| **State** | **Meaning** |
| --- | --- |
| UNKNOWN | Evidence is absent, insufficient or materially conflicting. |
| Not Assessed | No assessment activity was performed for the item. |
| Not Tested | Testing required for a stronger conclusion was not performed. |
| Not Applicable | Approved rationale establishes that the criterion does not apply. |
| Inconclusive | Activity occurred but cannot support a determinate conclusion. |
| Provisional | Conclusion awaits required review or evidence closure. |
| Final within scope | Review and evidence gates are complete for declared scope. |

# D.2 Report release states

| **State** | **Permitted use** |
| --- | --- |
| Draft | Internal working review only. |
| Fact validation | Owner review of factual accuracy, not score negotiation. |
| Quality review | Independent methodology and consistency challenge. |
| Decision review | Authorized disposition and conditional approval. |
| Final within scope | Approved release to named audience. |
| Superseded | Historical record linked to current report. |
| Withdrawn | Use prohibited; reason and replacement stated. |

# D.3 Artifact lifecycle states

| **State** | **Meaning** |
| --- | --- |
| Draft | Working material; no reliance. |
| Consultation | Published for comment; not approved. |
| Candidate | Review-complete candidate awaiting release gates. |
| Approved | Authoritative for declared version and date. |
| Deprecated | Still available; replacement and transition published. |
| Withdrawn | Use prohibited; reason published. |
| Superseded | Historical version replaced but retained. |

# D.4 Conformance levels

| **Level** | **Permitted meaning** |
| --- | --- |
| L0 Referenced | Uses AI Trust Graph terminology; no conformance claim. |
| L1 Method-compatible | Preserves semantics, IDs, result states and versions. |
| L2 Assessment-compatible | Executes required lifecycle and records. |
| L3 Reporting-compatible | Produces compliant report package. |
| L4 Tool-compatible | Reserved for tools; unavailable until approved normative schemas and test vectors are published. |
| L5 Full-method conformant | Combines applicable assessment, reporting, records and governance requirements for declared non-tool scope; does not imply L4 tool conformance. |

> **CURRENT RELEASE GATE** L4 Tool-compatible MUST NOT be claimed for the current public-release candidate. Artifact #13 is non-normative and does not satisfy the missing normative schema/test-vector requirement.

# D.5 Future certification states - reserved, non-operational

The Governance and Certification Model defines potential certification states for a future separately validated scheme. They are included here only as reserved governance vocabulary and MUST NOT be interpreted as an operational AI Trust Graph certification program in v1.0.

| **State** | **Meaning** |
| --- | --- |
| Applicant | Application received; no certified claim. |
| Under Evaluation | Evaluation active; no certified claim. |
| Certified | Reserved future state: valid only within a separately published scheme, scope and dates. |
| Conditioned | Reserved future state: valid only with explicit scheme conditions. |
| Suspended | Reserved future state: claim/mark use restricted or stopped. |
| Expired | Reserved future state: term ended without current certification. |
| Withdrawn | Reserved future state: holder or body ended certification. |
| Revoked | Reserved future state: certification removed for cause. |

# E.1 Agent delegated action

HumanIdentity -> AUTHENTICATES_AS -> Identity -> DELEGATES_TO -> Agent -> INVOKES -> Tool -> TRIGGERS_ACTION -> BusinessAction -> AFFECTS -> Outcome

Shows identity, delegation, invocation and consequence as separate facts. APPROVED_BY, LIMITED_BY and EVIDENCED_BY may constrain the path.

# E.2 RAG retrieval

HumanIdentity -> AUTHENTICATES_AS -> Application -> INVOKES -> Retriever -> RETRIEVES_FROM -> VectorIndex -> DERIVED_FROM -> Chunk -> DERIVED_FROM -> SourceRecord

Authorization context and source lineage remain explicit; retrieval does not imply unrestricted READS_FROM authority.

# E.3 Provider trust boundary

AIService -> PROVIDED_BY -> Provider; AIUseCase -> DEPENDS_ON -> AIService; relationship -> CROSSES -> Boundary; AIUseCase -> TRUSTS -> Provider

Provider reliance is conditional and does not collapse shared responsibility or evidence limitations.

# E.4 Supply-chain deployment

Repository -> BUILT_FROM -> Artifact; Artifact -> SIGNED_BY -> Identity; Pipeline -> DEPLOYS_TO -> Environment; Artifact -> DEPLOYED_TO -> Environment

Distinguishes provenance, signature, deployment process and deployed state.

# E.5 Evidence to decision

EvidenceItem -> SUPPORTS -> Assertion; Assertion -> EVIDENCED_BY -> EvidenceItem; Finding -> EVIDENCED_BY -> EvidenceItem; Decision -> APPROVED_BY -> Approver

Evidence, assertion, finding and management decision remain separate objects.

# E.6 Incident containment

AIEvent -> TRIGGERS -> Detection -> HAS_FINDING -> Finding; Incident -> TRIAGED_BY -> Responder; Path -> CONTAINED_BY -> Control; System -> RECOVERED_BY -> RecoveryPlan

Separates telemetry, detection, finding, incident, containment and recovery.

# Appendix F. Source and Derivation Register

| **Source artifact** | **Ontology use** |
| --- | --- |
| AI Trust Graph Manifesto v1.0 | Purpose, graph proposition, trust/authority doctrine, evidence-first commitments, product boundary. |
| Core Conceptual Model v3.0.0 | Authoritative semantic theory, object families, core predicates, trust/authority/path/evidence metamodels and invariants. |
| Maturity Model v1.0 | M1-M5 scale, six domains, 36 capability identifiers, evidence-gated maturity semantics. |
| Scoring Framework v3.0.0 | Assessment states, scoring-record identity fields, confidence/coverage/path state treatment and separation rules. |
| Master Control Library v2.0.0 | 72-control graph vocabulary, operational node labels, operational predicates, evidence and validation contexts. |
| Evidence Model v2.0.0 | EvidenceItem/Assertion object model, E0-E5, evidence relationships, conflict, provenance and review states. |
| Assessment Methodology v1.1.0 | Assessment lifecycle, graph construction, path/controls/finding/decision records and quality gates. |
| Assessor Handbook v1.0 | Execution roles, field interpretation, calibration and anti-error constraints. |
| Reporting Standard v1.1.0 | Report state machine, canonical report records and machine-readable export minimum semantics. |
| Reference Assessment Repository v2.0.0 | Synthetic use of graph objects, paths, evidence and result patterns. |
| Governance and Certification Model v1.0 | Artifact governance, extensions, conformance vocabulary and future certification-readiness boundaries. |

This public derivation register deliberately avoids internal source filenames, client information and proprietary precursor implementation details. Publication provenance should remain sufficient to explain methodology lineage without exposing material that is not intended for public release.

# Appendix G. Phase 2 Implementation Bindings

> **PHASE 2 STATUS UPDATE (2026-09-23)** Phase 2 has formally begun. The first Phase 2 artifact — a non-normative "Reference Graph Schema and Illustrative Query Library" (repository `docs/13-reference-graph-schema-and-query-library.md`) — consolidates this ontology's Appendix A (entity registry), Appendix C (relationship registry) and state/enumeration domains into a property-graph schema, cross-references it against the exact `Graph nodes`/`Graph relationships` fields of all 72 Master Control Library controls, and adds an illustrative query library expressed in GQL (ISO/IEC 39075), one pattern per maturity capability. It changes no canonical meaning; see REVIEW_FINDINGS.md, finding R-13, for the full record of what was opened, why, and what it does and does not carry. The remaining rows below are still deferred.

The following artifacts remain intentionally deferred. Their absence does not make the Phase 1 methodology ontology semantically incomplete, provided this human-readable specification is published and the methodology release gates are satisfied.

| **Future artifact** | **Purpose** | **Dependency on this ontology** | **Status** |
| --- | --- | --- | --- |
| Machine-readable ontology | RDF/OWL, property-graph or equivalent semantic representation. | MUST preserve canonical classes, predicates, direction, conditions and state semantics. | Partially addressed (non-normative) by the Phase 2 reference schema above; a formal RDF/OWL or property-graph engine binding remains deferred. |
| Assessment data model | Normalized assessment-run, scope, evidence, path, finding and decision records. | MUST use state namespaces and version/supersession rules. | Deferred. |
| JSON / schema objects | Portable validation of records and exports. | MUST NOT invent new semantic truth or collapse UNKNOWN states. | Deferred. |
| Machine-readable control catalog | Structured form of the 72 controls. | MUST preserve control IDs, objectives, mappings, evidence expectations and graph semantics. | Partially addressed (non-normative) by the Phase 2 reference schema's §2 control-to-graph cross-reference; a full structured catalog (all control fields, not only graph vocabulary) remains deferred. |
| Tool conformance suite | Synthetic positive, negative, boundary, conflict, stale, UNKNOWN and supersession vectors. | MUST test semantic preservation and prohibited inference. | Deferred. |
| Synthetic dataset pack | Reusable graph/evidence examples for testing and education. | MUST be fictional, safe and traceable to canonical ontology concepts. | Deferred. |

> **IMPLEMENTATION BOUNDARY** Phase 2 tooling may make the ontology executable. It may not make the tooling authoritative. Canonical meaning remains in the governed public methodology. This boundary applies to every Phase 2 artifact, opened or still deferred, without exception.

# Final Ontology Doctrine

> **AI TRUST GRAPH ONTOLOGY DOCTRINE** Represent the system, not just the model. Keep identity, authority, invocation and consequence distinct. Treat trust as conditional reliance. Make boundaries and path conditions explicit. Link material assertions to evidence. Preserve UNKNOWN. Separate findings from decisions. Version change instead of rewriting history. Keep the methodology independent of any product or implementation.

| **Field** | **Value** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Internal architecture review | Completed for this ontology draft |
| Internal AI security review | Completed for this ontology draft |
| Internal semantic consistency review | Completed for this ontology draft |
| Independent external review | Pending methodology-wide external review |
| Employer / IP / confidentiality review | Pending methodology-wide release gate |
| Licence and trademark decision | Pending methodology-wide release gate |
| Operational certification | Not established by this document |

AI Trust Graph Ontology Specification  |  Version 3.0.0  |  Public-release candidate
