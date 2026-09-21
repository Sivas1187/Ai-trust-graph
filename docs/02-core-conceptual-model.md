[← Back to methodology index](README.md)

# AI Trust Graph — Core Conceptual Model

*Version 1.1 | Refactored theory of graph-based AI trust, authority, exposure, evidence and control*

> **DOCUMENT ROLE** The authoritative semantic layer between the AI Trust Graph Manifesto and the canonical ontology. It defines what the concepts mean, why a graph is required, and how the concepts constrain assessment artifacts and compatible tooling.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Supersedes | Core Conceptual Model v1.0 |
| Refactor objective | Remove structural repetition; elevate graph theory, emergent risk and authority amplification. |
| Product boundary | ExposureGraph product design and implementation remain excluded. |
| Release condition | Employer, IP, confidentiality, trademark, copyright, license and independent methodology review. |

# 0.1  Release boundary and publication controls

This document is designed for public methodological use, not as a software specification, product requirements document, legal opinion or certification standard. Public release depends on confirmed ownership and permission to publish every included element.

Content derived from employer systems, client work, internal methods or third-party material must be rewritten, attributed, removed or withheld as required. Possession of a file does not establish publication rights.

> **PROTECTED BOUNDARY** ExposureGraph requirements, algorithms, connectors, ranking logic, source code, roadmap, pricing, customer information and production implementation details are out of scope.

| **Decision** | **Canonical position** |
| --- | --- |
| Public | Definitions, theory, invariants, assessment semantics, synthetic examples and limitations. |
| Private | Product design, implementation, unpublished algorithms, commercial strategy and confidential evidence. |
| Release authority | Named maintainer plus mandatory legal, employer and IP approvals. |
| Tool independence | Readers must be able to understand and apply the theory without a commercial platform. |

# 0.2  Document authority, precedence and change

The Core Conceptual Model is the authoritative semantic layer of the AI Trust Graph methodology. It constrains the ontology, domain guides, controls, tests, scoring model, assessor handbook, reports and compatible tools.

When artifacts disagree, maintainers first preserve the Manifesto commitments, then apply this model, and finally update lower-level artifacts through versioned change. A product implementation must not become the hidden source of truth.

> **PRECEDENCE** Manifesto -> Core Conceptual Model -> Ontology -> Domain Guides -> Controls and Tests -> Maturity and Scoring -> Assessor Handbook -> Reports and Tooling

| **Artifact** | **Authority** |
| --- | --- |
| Manifesto | Purpose, values and public commitments. |
| Conceptual model | Canonical meanings, relationships and reasoning rules. |
| Ontology | Machine-representable classes, properties and edges. |
| Assessment artifacts | Operational application of the theory. |
| Compatible tooling | Implementation that declares and preserves conformance. |

# 0.3  Abstract and central thesis

Enterprise AI is a connected socio-technical system of actors, identities, models, agents, prompts, retrieval components, tools, data, infrastructure, providers, controls and business processes. Material risk often emerges from their interaction rather than from an isolated defect.

The AI Trust Graph represents the system as an evidence-linked directed labelled multigraph. This makes reliance, authority, influence, dependency, reachability, exposure, control coverage and uncertainty explicit enough to support defensible decisions.

The graph is not the outcome. It is a reasoning substrate that explains what exists, what can act, what can be reached, how consequence propagates, which control interrupts a material path, and what evidence supports each assertion.

> **CENTRAL THESIS** System assurance improves when relationships and conditions are represented with the same discipline as assets and controls.

# 0.4  What changed in version 1.1

Version 1.1 is a conceptual refactor of v1.0. It removes repeated property tables, consolidates common invariants, and replaces template-heavy treatment with theory-led chapters.

The refactor also elevates three concepts that define the methodology: graph-theoretic foundations, emergent system risk and authority amplification. These concepts now explain why the method requires a graph and why component-by-component assurance is insufficient.

| **Change** | **Effect** |
| --- | --- |
| Repeated object, edge, trust, authority and evidence tables | Replaced by one canonical metamodel for each concept family. |
| Repeated anti-error statements | Consolidated into a master invariant catalogue. |
| Implicit graph rationale | Elevated into a dedicated graph-theory part. |
| Scattered amplification references | Elevated into a dedicated authority-amplification part. |
| Nominal 100-page target | Replaced by a leaner theory-driven structure; page count no longer drives content. |

# 0.5  Contents I

The page ranges in this version are intentionally compact. Each part contains a conceptual argument followed by canonical implications rather than a repeated page template.

| **Part** | **Subject** | **Pages** |
| --- | --- | --- |
| I | Foundation and method architecture | 1-10 |
| II | Graph-theoretic foundations | 11-20 |
| III | Emergent risk theory | 21-27 |
| IV | System and object metamodel | 28-35 |
| V | Relationship and trust metamodel | 36-44 |

# 0.6  Contents II

Normative terms, canonical identifiers and evidence grades must be preserved when converted to Markdown or referenced by lower-level artifacts.

| **Part** | **Subject** | **Pages** |
| --- | --- | --- |
| VI | Authority and amplification theory | 45-57 |
| VII | Reachability, exposure and path theory | 58-65 |
| VIII | Evidence, control and assessment semantics | 66-72 |
| IX | Domain integration, conformance and release | 73-79 |

# 0.7  Reader pathways

Executives should focus on the central thesis, emergent risk, authority amplification, exposure and decision outputs. Architects should read the graph, relationship and authority parts in sequence. Assessors should prioritize evidence, control and lifecycle semantics.

Developers and tool builders must treat examples as informative. Canonical definitions and invariants take precedence over convenient implementation choices.

| **Reader** | **Recommended path** |
| --- | --- |
| Executive | Abstract, emergent risk, amplification, exposure and limitations. |
| Security or AI architect | Graph foundations, metamodels, path theory and invariants. |
| Assessor or auditor | Evidence, control state, lifecycle and domain integration. |
| Developer | Canonical object and relationship semantics, conformance and extensions. |
| Contributor | Precedence, normative language, change governance and release criteria. |

# 0.8  Normative language

The terms MUST, MUST NOT, SHOULD, SHOULD NOT, MAY and UNKNOWN carry controlled meanings. Normative force applies only within the declared conformance scope of the public methodology.

UNKNOWN is a valid information state. It is neither a control failure nor a low-risk value. An assessor may prioritize an Unknown using potential materiality, but must not silently convert it into a fact.

| **Term** | **Meaning** |
| --- | --- |
| MUST / MUST NOT | Required or prohibited for stated conformance. |
| SHOULD / SHOULD NOT | Preferred unless a documented alternative preserves intent. |
| MAY | Optional capability or implementation choice. |
| UNKNOWN | Evidence is insufficient or conflict is unresolved. |
| CANDIDATE | Proposed object, relationship or conclusion awaiting review. |
| VALIDATED | Conditions and evidence support the stated conclusion within scope. |

# 0.9  Master invariant catalogue

This catalogue consolidates anti-error rules that v1.0 repeated throughout object, relationship, trust, authority, path and evidence sections. Later chapters reference these invariants rather than restating them.

| **ID** | **Invariant** |
| --- | --- |
| INV-01 | A graph connection does not by itself prove authorization, successful invocation or exploitability. |
| INV-02 | An approved assertion must identify evidence, confidence, review status and relevant scope. |
| INV-03 | AI-generated inference cannot overwrite an approved fact; it creates a proposed version. |
| INV-04 | UNKNOWN remains visible until resolved by evidence and accountable review. |
| INV-05 | Documentation alone does not demonstrate technical operating effectiveness. |
| INV-06 | A control is effective only within the conditions and scope validated. |
| INV-07 | A domain score cannot hide a failed critical gate. |
| INV-08 | Material authority must identify actor or identity, capability, target, scope, conditions and revocation. |
| INV-09 | Mappings to standards do not constitute legal opinion, certification or compliance proof. |
| INV-10 | Completed analysis runs are versioned; later change does not rewrite prior conclusions. |

# 0.10  Theory map

The model follows a single reasoning chain. Objects create a system description. Relationships establish how the objects interact. Paths combine relationships under conditions. Authority and influence explain how consequences can be caused. Evidence and controls determine what can be concluded.

This chain is the intellectual spine of the methodology and the foundation for later maturity and scoring models.

> **REASONING CHAIN** Objects -> Relationships -> Conditions -> Paths -> Authority and Influence -> Consequence -> Controls -> Evidence -> Decision

| **Question** | **Concept** |
| --- | --- |
| What exists? | Objects and system boundary. |
| How is it connected? | Typed directional relationships. |
| What must be true? | Preconditions and state. |
| What can happen next? | Reachability and path analysis. |
| Who or what can cause it? | Authority, influence and actionability. |
| Why does it matter? | Target criticality and consequence. |
| What interrupts it? | Control breakpoint and resilience. |
| What can we defend? | Evidence, confidence and accountable decision. |

# 1.1  Why a graph is necessary

An inventory answers which entities are known. A graph adds the relationships, direction, conditions and evidence needed to explain how the entities jointly create exposure or control. A spreadsheet can store relationships, but the graph model makes their semantics and traversal explicit.

Architecture diagrams are useful views, but they often omit effective identity, delegated authority, retrieval context, provider boundaries and evidence lineage. AI Trust Graph treats a diagram as one evidence source, not as the complete model.

| **Representation** | **Primary strength** |
| --- | --- |
| Inventory | Known objects and attributes. |
| CMDB | Managed configuration items and operational relationships. |
| Diagram | Human-readable architectural view. |
| Trust graph | Typed, directional, evidence-linked relationships and paths for defined decisions. |

# 1.2  Directed labelled multigraph

The canonical representation is a directed labelled multigraph. Direction matters because access, invocation, data movement, reliance and control do not imply their reverse. Labels matter because connectivity, authority, retrieval and trust have different semantics.

Multiple edges may connect the same pair of objects because one relationship can be network connectivity, another can be authorization, and another can be evidence-backed invocation. Collapsing them would destroy meaning.

> **GRAPH IMPLICATION** Represent direction and relationship type explicitly; do not flatten distinct semantics.

# 1.3  Nodes as assessment claims

A node is not merely a visual shape. It is a typed claim that an assessment object exists within a defined scope and state. Its identity, evidence, confidence and lifecycle determine whether it is a candidate, approved fact or retired historical object.

Node granularity follows the decision. A model provider may be one node for an executive exposure review and several endpoint, account and region nodes for a technical path analysis.

> **GRAPH IMPLICATION** Choose node granularity according to the decision and preserve evidence-backed identity.

# 1.4  Edges as conditional assertions

An edge asserts that a relationship exists between compatible objects. The edge includes direction, type, scope, conditions, evidence, confidence and validity. This prevents unqualified arrows from being treated as technical facts.

Conditions may include identity, permission, protocol, approval, tenant, environment, time, data classification or system state. A missing material condition is recorded as UNKNOWN rather than omitted.

> **GRAPH IMPLICATION** An edge without conditions and evidence remains a candidate description, not an approved fact.

# 1.5  Paths as explanatory structures

A path is an ordered sequence of nodes and edges from a defined start condition to a defined target. It explains how a consequence becomes reachable rather than merely stating that two endpoints are connected.

Path analysis is scenario-bound. The same graph can support multiple paths with different start conditions, required permissions, controls and residual risk.

> **GRAPH IMPLICATION** A path explains plausible progression under stated conditions; it does not automatically prove exploitability.

# 1.6  Graph locality and systemic consequence

Local properties describe one node or edge. System consequence often depends on a larger subgraph. A read-only retriever may seem low risk locally, yet its output can influence an agent that can invoke a consequential tool.

The methodology therefore separates local condition, path condition and system-level consequence. No one of these can substitute for the others.

> **GRAPH IMPLICATION** System consequence may emerge from an innocuous local configuration combined with downstream authority.

# 1.7  Propagation and inheritance

Privileges, identities, trust assumptions, data influence and provider dependence may propagate through intermediate objects. Propagation is never assumed universal; it is governed by the semantics and conditions of each edge.

Inheritance describes effective transfer through roles, groups, federation, workloads or chains of delegation. Propagation describes how a property or effect can continue along a compatible path.

> **GRAPH IMPLICATION** Every propagation step must be semantically compatible and supported or marked UNKNOWN.

# 1.8  Graph cuts and control breakpoints

A graph cut is a set of relationships or objects whose removal disconnects a defined start condition from a target. In the methodology, a control breakpoint is the practical location where an effective control can stop, constrain, detect or contain a material path.

The lowest-cost cut is not automatically the best remediation. Feasibility, ownership, control independence, resilience, user impact and residual paths must also be considered.

> **GRAPH IMPLICATION** Prioritize controls at high-leverage breakpoints while checking residual and alternate paths.

# 1.9  Graph drift and temporal state

A trust graph is a versioned representation of an observed or approved state. Graph drift is a material difference between that state and a later state. Drift may arise from a new identity, changed tool binding, provider route, prompt, model, data source or control.

Temporal analysis compares evidence-backed snapshots. It does not rewrite the prior graph and does not imply continuous observation unless measurement actually exists.

> **GRAPH IMPLICATION** Version snapshots and reassess after changes that can alter material paths.

# 1.10  Graph inference and human approval

Automated systems may propose classes, relationships, paths and control mappings. Proposed graph content remains distinct from observed and approved content. Confidence helps order review but does not confer truth.

Human approval is required for material facts, findings, exceptions and risk decisions. The model stores the proposal, reviewer, decision, rationale and supersession history.

> **GRAPH IMPLICATION** Inference accelerates review; accountable approval determines accepted state.

# 2.1  Emergent risk thesis

System risk is not equal to a simple sum of component risks. A component can satisfy its local controls and still participate in an unsafe end-to-end behavior because relationships create new reach, authority or influence.

Risk(System) is a function of components, relationships, conditions, paths, controls, evidence and consequence.

> **DECISION IMPLICATION** For emergent risk thesis, the assessment must distinguish the local condition, the relationship that composes it, and the system consequence that follows.

# 2.2  Composition risk

Composition risk arises when individually acceptable components interact in a way that violates an assumption made by one or more component owners. Examples include identity context lost across retrieval, a model output routed into a write-capable tool, or a provider boundary that changes data handling.

Composition review tests assumptions at integration points, not only component certifications.

> **DECISION IMPLICATION** For composition risk, the assessment must distinguish the local condition, the relationship that composes it, and the system consequence that follows.

# 2.3  Semantic mismatch

A semantic mismatch occurs when two connected components assign different meaning to identity, authorization, approval, data classification, confidence or error. The interface may function technically while the control intent fails.

The graph records both the technical edge and the governance condition it is expected to preserve.

> **DECISION IMPLICATION** For semantic mismatch, the assessment must distinguish the local condition, the relationship that composes it, and the system consequence that follows.

# 2.4  Control gap emergence

A control gap may emerge between components when each owner assumes the other enforces a requirement. This is common at provider, identity, retrieval, orchestration and human-approval boundaries.

Boundary analysis identifies owner, enforcement point, evidence and failure mode for each material requirement.

> **DECISION IMPLICATION** For control gap emergence, the assessment must distinguish the local condition, the relationship that composes it, and the system consequence that follows.

# 2.5  Latent consequence

A path may remain dormant until a particular input, identity, state, provider change or workflow condition activates it. Latency does not remove exposure; it changes the scenario and evidence needed to assess it.

Start conditions and activation conditions remain distinct in the path record.

> **DECISION IMPLICATION** For latent consequence, the assessment must distinguish the local condition, the relationship that composes it, and the system consequence that follows.

# 2.6  Cascading failure

Dependencies can transmit failure across agents, models, providers, tools, data and controls. A shared identity or logging dependency can cause correlated loss of prevention, detection and attribution.

Resilience analysis identifies common dependencies and tests containment beyond the initial component.

> **DECISION IMPLICATION** For cascading failure, the assessment must distinguish the local condition, the relationship that composes it, and the system consequence that follows.

# 2.7  Emergent risk decision rule

A component-level conclusion must not be projected to the system without path-based analysis of material relationships and conditions. Conversely, a system-level scenario must not be attributed to a component without evidence of its role.

Findings distinguish local weakness, integration weakness and systemic consequence.

> **DECISION IMPLICATION** For emergent risk decision rule, the assessment must distinguish the local condition, the relationship that composes it, and the system consequence that follows.

# 3.1  Enterprise AI system and system-of-interest

An enterprise AI system is a bounded collection of human and machine actors, identities, applications, models, agents, prompts, retrieval components, data, tools, pipelines, infrastructure, providers, controls and business processes that together influence decisions or actions.

The system-of-interest is the focal configuration assessed for a defined decision. Scope identifies environments, versions, use cases, users, affected stakeholders, external dependencies and the time represented by evidence.

> **SCOPE PRINCIPLE** Scope follows the decision and plausible impact, not only administrative ownership.

# 3.2  Boundary metamodel

A boundary is a first-class object representing a change in trust assumption, ownership, policy, enforcement, residency, privilege or consequence. It is not merely a line on a diagram.

Each material crossing identifies source and target zones, the relationship crossing the boundary, the expected enforcement point, applicable policy and evidence.

| **Boundary class** | **Examples** | **Why material** |
| --- | --- | --- |
| Network | Internet, partner, segmented zone | Changes reachability and enforcement. |
| Identity | Tenant, role, federation, privilege | Changes principal, assurance or entitlement. |
| Data | Classification, residency, purpose | Changes handling and disclosure obligations. |
| Provider | Model, embedding, evaluation service | Changes control ownership and evidence. |
| Runtime | Host, cluster, namespace | Changes isolation and execution context. |
| Human decision | Approval, override, risk acceptance | Changes accountable authority. |
| Consequence | Financial, safety, regulated action | Changes impact and control expectation. |

# 3.3  Canonical object families

Objects are organized into families so the ontology can remain coherent while supporting extension. A family is conceptual, not necessarily an inheritance structure in every implementation.

| **Family** | **Canonical objects** | **Primary questions** |
| --- | --- | --- |
| Purpose and accountability | Use case, actor, owner, decision | Why does it exist and who is accountable? |
| Identity and access | Identity, role, permission, secret | Who or what acts, and under which grant? |
| AI behavior | Model, endpoint, prompt, agent, planner, guardrail | What influences behavior and selection? |
| Data and retrieval | Dataset, document, chunk, vector, retriever, memory | What information is used, stored or disclosed? |
| Action surface | Tool, plugin, MCP capability, API, workflow | What can cause a state change? |
| Engineering and runtime | Application, pipeline, artifact, compute, network | How is it built, deployed and operated? |
| Assurance | Control, evidence, test, finding, decision | What supports the conclusion and response? |

# 3.4  Object identity, granularity and lifecycle

Object identity must remain stable within a dataset and must not encode a conclusion likely to change. Granularity is chosen according to the decision while preserving enough detail to represent material relationships and controls.

Lifecycle separates candidate, approved, rejected, modified, retired and superseded states. An object can remain historically valid for one analysis run after being retired from the current estate.

| **Rule** | **Implication** |
| --- | --- |
| Stable identifier | Names, owners and risk states may change without changing identity. |
| Decision-led granularity | Model detail must be sufficient for the material path, not maximized by default. |
| Versioned state | Changes create a new state or supersession, not silent replacement. |
| Evidence linkage | Existence and material attributes reference supporting sources. |
| UNKNOWN ownership | Accepted as a visible state and remediation need, not guessed. |

# 3.5  AI-native behavioral objects

AI-native objects require separate representation because they influence behavior, action selection and context in different ways. Combining them into a generic "AI component" would hide ownership and control boundaries.

| **Object** | **Canonical distinction** |
| --- | --- |
| Model | Computational artifact producing outputs from inputs. |
| Model endpoint | Addressable serving interface with routing and provider context. |
| Prompt asset | Versioned instruction or context template. |
| Agent | Software entity selecting or executing steps toward an objective. |
| Planner | Component constructing or revising a sequence of actions. |
| Evaluator | Component assessing output, policy, quality or task completion. |
| Guardrail | Mechanism intended to constrain input, output or action. |
| Memory | Persisted conversational, semantic, episodic or workflow state. |

# 3.6  Action-surface objects

Tools, plugins, APIs, workflow actions and MCP capabilities form the action surface through which AI behavior can produce external effect. Their descriptions may also influence model behavior and must be treated as untrusted input where applicable.

An action-surface object is characterized by operation, authentication, scope, side effect, reversibility, approval, rate or value limit, telemetry and downstream dependency.

> **SEPARATION RULE** The capability definition, its network reachability, granted authority and actual invocation are different concepts and require different relationships.

# 3.7  Data, retrieval and memory objects

Data lineage must connect governed sources to chunks, embeddings, vector indexes, retrieval results, prompts, memory and outputs where evidence permits. An embedding is not the original record, and a vector index is not equivalent to its source system.

Retrieval security includes backend authorization, user-context preservation, filtering, tenant isolation, ranking, metadata, caching and evidence of returned scope.

| **Object** | **Material properties** |
| --- | --- |
| Source record | Owner, classification, purpose, retention, entitlement. |
| Chunk | Source lineage, transformation, scope, version. |
| Embedding | Model, source reference, creation time, sensitivity. |
| Vector index | Namespace, tenant isolation, encryption, retention. |
| Retriever | Authorization context, filters, ranking, source scope. |
| Memory | Subject, persistence, isolation, expiry, deletion, influence. |

# 3.8  Assurance objects

Evidence, control, test, finding and decision are separate objects. Evidence supports or disputes assertions. A control expresses intended risk treatment. A test records a procedure and result. A finding states an assessed condition. A decision records accountable disposition.

This separation prevents observations, interpretations and management choices from being collapsed into a single status field.

| **Object** | **Must contain** |
| --- | --- |
| Evidence | Source, provenance, scope, date, integrity, quality, sensitivity. |
| Control | Objective, owner, mechanism, state, dependencies, evidence. |
| Test | Authorization, procedure, conditions, result, limitations. |
| Finding | Criteria, condition, cause, affected path, consequence, confidence. |
| Decision | Owner, disposition, rationale, conditions, expiry, review trigger. |

# 4.1  Canonical relationship metamodel

A relationship is a typed, directional assertion between compatible objects under stated conditions. Common properties are defined once here and inherited by every canonical or approved extension edge.

Version 1.1 removes the repeated edge-property table that appeared on each relationship page in v1.0.

| **Property** | **Meaning** |
| --- | --- |
| id | Stable relationship identifier. |
| type | Canonical or declared extension relationship. |
| from / to | Typed and directional endpoints. |
| conditions | Permissions, protocol, state, approval and other prerequisites. |
| scope | Actions, data, resources, environments and populations covered. |
| evidence references | Sources supporting or disputing the assertion. |
| confidence | Confidence in this specific relationship. |
| review status | Candidate, approved, rejected or modified. |
| validity | First seen, last seen, expiry and supersession. |

# 4.2  Connectivity and deployment relationships

Connectivity and deployment relationships inherit the common relationship metamodel and add conditions specific to this family. Classification does not change direction, relax evidence requirements or permit unsupported inference.

| **Relationship** | **Canonical meaning** |
| --- | --- |
| CONNECTS_TO | Network or logical connectivity; not authorization. |
| EXPOSES | Publishes an interface, tool, resource or capability. |
| HOSTED_ON | Deployment or execution location. |
| CROSSES | A relationship crossing a defined boundary. |

# 4.3  Identity and authority relationships

Identity and authority relationships inherit the common relationship metamodel and add conditions specific to this family. Classification does not change direction, relax evidence requirements or permit unsupported inference.

| **Relationship** | **Canonical meaning** |
| --- | --- |
| AUTHENTICATES_AS | Actor, application or agent uses an identity. |
| AUTHORIZED_TO | Identity is granted actions on a target under conditions. |
| ASSUMES_ROLE | Identity obtains permissions associated with a role. |
| DELEGATES_TO | Grantor transfers bounded authority to a delegate. |

# 4.4  Invocation and action relationships

Invocation and action relationships inherit the common relationship metamodel and add conditions specific to this family. Classification does not change direction, relax evidence requirements or permit unsupported inference.

| **Relationship** | **Canonical meaning** |
| --- | --- |
| INVOKES | Calls an API, tool, workflow, model endpoint or capability. |
| TRIGGERS_ACTION | Causes a business or technical action. |
| APPROVED_BY | Action, use case or decision receives accountable approval. |
| REVOKED_BY | Grant, session, binding or authority is withdrawn. |

# 4.5  Data and influence relationships

Data and influence relationships inherit the common relationship metamodel and add conditions specific to this family. Classification does not change direction, relax evidence requirements or permit unsupported inference.

| **Relationship** | **Canonical meaning** |
| --- | --- |
| READS_FROM | Reads stored content or state. |
| WRITES_TO | Mutates content or state. |
| RETRIEVES_FROM | Selects information for context or response. |
| SENDS_TO | Transfers prompt, context, output or data. |
| INFLUENCES | Affects behavior or selection without necessarily granting access. |

# 4.6  Dependency and trust relationships

Dependency and trust relationships inherit the common relationship metamodel and add conditions specific to this family. Classification does not change direction, relax evidence requirements or permit unsupported inference.

| **Relationship** | **Canonical meaning** |
| --- | --- |
| DEPENDS_ON | Source relies on target for operation, security or function. |
| TRUSTS | Conditional reliance for a defined purpose. |
| PROVIDED_BY | Object or service is supplied by a provider. |
| DERIVED_FROM | Artifact or assertion is produced from another source. |

# 4.7  Control and evidence relationships

Control and evidence relationships inherit the common relationship metamodel and add conditions specific to this family. Classification does not change direction, relax evidence requirements or permit unsupported inference.

| **Relationship** | **Canonical meaning** |
| --- | --- |
| CONTROLS | Control covers a node, edge, boundary or path. |
| BREAKS_PATH | Validated or proposed intervention affects a path. |
| OBSERVED_BY | Object or relationship is observed by evidence. |
| TESTED_BY | Control or behavior is assessed by a test. |
| MAPS_TO | Justified mapping to an external taxonomy or requirement. |

# 4.8  Trust metamodel

Trust is conditional reliance by one entity on another entity, assertion, output, dependency or control for a defined purpose. It is not a positive label, a permanent property or a substitute for evidence.

The trust metamodel is defined once in v1.1. Trust inheritance, amplification, drift and revocation use this shared structure without repeating the same dimensional table.

| **Dimension** | **Required question** |
| --- | --- |
| Purpose | For which decision or operation is reliance accepted? |
| Basis | What mechanism, evidence or accountable decision supports reliance? |
| Scope | Which assets, actions, data, users and environments are covered? |
| Owner | Who grants, reviews and revokes the trust? |
| Transitivity | May reliance flow through intermediaries, and under what constraints? |
| Expiry | When does the trust lapse or require revalidation? |
| Revocation | How is reliance withdrawn and the effect verified? |
| Evidence | Which current sources support the assertion? |

# 4.9  Trust dynamics

Trust can be granted, inherited, amplified, degraded, revoked or collapsed. These dynamics describe change in the relationship or its confidence rather than a change in the definition of trust.

Inheritance follows compatible relationships. Amplification increases effective reach, authority or consequence. Drift changes the actual state. Decay reduces confidence as evidence ages. Collapse invalidates dependent assumptions after a critical failure.

| **Dynamic** | **Trigger** | **Assessment implication** |
| --- | --- | --- |
| Inheritance | Role, group, federation, workload or delegation | Represent as a path; do not assume safety from valid intermediate grants. |
| Amplification | Downstream privilege, data, autonomy or consequence | Identify the step and control boundary where effective power increases. |
| Drift | Architecture, identity, tool, data or policy change | Create a new graph state and reassess affected paths. |
| Decay | Evidence age or reduced representativeness | Lower confidence or require renewed evidence. |
| Revocation | Accountable withdrawal of reliance or authority | Verify effective removal and downstream impact. |
| Collapse | Critical provider, control or dependency failure | Analyze cascading invalidation and containment. |

# 5.1  Authority metamodel

Authority is the effective or permitted capacity of an actor, identity, application, agent, tool or workflow to access, influence or change a target. It is distinct from network connectivity, abstract capability and observed invocation.

Version 1.1 defines authority fields once and uses a compact taxonomy for action classes.

| **Field** | **Required meaning** |
| --- | --- |
| acting identity | Principal used or expected to be used for the action. |
| capability | Action class available to the actor or machine entity. |
| target | Resource, data, person, system, workflow or outcome affected. |
| scope | Allowed resources, values, context, population and environment. |
| conditions | Authentication, state, policy, approval or event prerequisites. |
| duration | Standing, session, task, transaction or time-bound grant. |
| approval | Human or machine gate and evidence of enforcement. |
| reversibility | Preview, undo, compensation or recovery properties. |
| telemetry | Attribution and reconstruction of grant and use. |
| revocation | Mechanism and evidence for effective withdrawal. |

# 5.2  Authority taxonomy

Authority classes describe the kind of consequence an entity can cause. They are not maturity levels and should not be ranked without considering target, scope, conditions and criticality.

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

# 5.3  Actionability and autonomy

Actionability describes how directly an output can produce a state change and how much human intervention remains meaningful. Autonomy describes the degree to which a system selects and executes steps without contemporaneous human direction.

Neither class is derived from a vendor label. Effective workflow behavior, defaults, time pressure, batch or value limit, approval independence, reversibility and exception handling determine the classification.

| **Level** | **Actionability** | **Human role** |
| --- | --- | --- |
| A0 | Informational output only. | Consumes information. |
| A1 | Advisory recommendation. | Chooses whether and how to act. |
| A2 | Assisted execution with explicit confirmation. | Reviews proposed action before execution. |
| A3 | Semi-autonomous execution within bounded scope. | Sets policy, supervises and handles exceptions. |
| A4 | Autonomous execution with no normal pre-action approval. | Defines boundaries, monitors and can contain or revoke. |

# 5.4  Authority amplification thesis

Authority amplification occurs when a path gives an entity greater effective power, reach, speed, scale or consequence than a local grant suggests. Amplification is a system property, not necessarily a misconfiguration of one component.

The assessment locates the step where effective authority increases and identifies which control should constrain it.

| **Review lens** | **Distinct question** |
| --- | --- |
| Master test | Compare effective authority before and after each material transition; identify the breakpoint and evidence. |
| Control boundary | Which independent control limits authority amplification thesis before consequence becomes material? |
| Evidence threshold | What current evidence confirms the grant, transition and residual effect for authority amplification thesis? |

# 5.5  Identity amplification

Identity amplification occurs when a shared, privileged, federated or impersonated identity gives downstream operations more privilege or broader attribution than the initiating actor possesses.

Preserve user context where required, isolate workload identities and verify delegation rather than inheriting ambient privilege.

| **Review lens** | **Distinct question** |
| --- | --- |
| Identity focus | Compare initiating identity with downstream principal, inherited privilege and attribution. |
| Control boundary | Which independent control limits identity amplification before consequence becomes material? |
| Evidence threshold | What current evidence confirms the grant, transition and residual effect for identity amplification? |

# 5.6  Tool amplification

Tool amplification occurs when a model or agent can invoke a capability whose side effects, target scope or downstream privilege exceed the apparent task.

Treat tool binding as an authority grant, not as a user-interface convenience.

| **Review lens** | **Distinct question** |
| --- | --- |
| Tool focus | Compare the requested task with callable operations, side effects, target scope and downstream credentials. |
| Control boundary | Which independent control limits tool amplification before consequence becomes material? |
| Evidence threshold | What current evidence confirms the grant, transition and residual effect for tool amplification? |

# 5.7  Data amplification

Data amplification occurs when aggregation, retrieval, memory or inference creates a more sensitive or actionable information set than any single source.

Assess combined visibility, inferred sensitivity, retrieval scope and disclosure authority.

| **Review lens** | **Distinct question** |
| --- | --- |
| Data focus | Compare source sensitivity with aggregated, retrieved, inferred and disclosable information. |
| Control boundary | Which independent control limits data amplification before consequence becomes material? |
| Evidence threshold | What current evidence confirms the grant, transition and residual effect for data amplification? |

# 5.8  Workflow amplification

Workflow amplification occurs when defaults, queues, approvals, retries or parallel execution increase scale, persistence or consequence.

Review workflow semantics, batch and value limits, idempotency, compensation and exception handling.

| **Review lens** | **Distinct question** |
| --- | --- |
| Workflow focus | Compare single-step intent with queueing, retries, parallelism, defaults and value limits. |
| Control boundary | Which independent control limits workflow amplification before consequence becomes material? |
| Evidence threshold | What current evidence confirms the grant, transition and residual effect for workflow amplification? |

# 5.9  Temporal amplification

Temporal amplification occurs when standing privilege, long-lived credentials, persistent memory or unattended operation extends opportunity beyond the intended task.

Bound duration, expire capability, rotate credentials and trigger reassessment after material state change.

| **Review lens** | **Distinct question** |
| --- | --- |
| Time focus | Compare task duration with credential lifetime, memory persistence and unattended operation. |
| Control boundary | Which independent control limits temporal amplification before consequence becomes material? |
| Evidence threshold | What current evidence confirms the grant, transition and residual effect for temporal amplification? |

# 5.10  Trust amplification

Trust amplification occurs when an upstream assertion is accepted by downstream components with broader purpose, higher consequence or weaker validation.

Record the trust basis and scope at each step rather than assuming transitive equivalence.

| **Review lens** | **Distinct question** |
| --- | --- |
| Trust focus | Compare the upstream trust purpose with the broader downstream use and consequence. |
| Control boundary | Which independent control limits trust amplification before consequence becomes material? |
| Evidence threshold | What current evidence confirms the grant, transition and residual effect for trust amplification? |

# 5.11  Blast-radius amplification

Blast-radius amplification occurs when one identity, provider, tool, pipeline, prompt or control dependency affects many assets, tenants, users or decisions.

Identify fan-out, common dependencies and containment boundaries before assessing residual consequence.

| **Review lens** | **Distinct question** |
| --- | --- |
| Blast-radius focus | Compare one initiating dependency with the number of affected assets, tenants, users and decisions. |
| Control boundary | Which independent control limits blast-radius amplification before consequence becomes material? |
| Evidence threshold | What current evidence confirms the grant, transition and residual effect for blast-radius amplification? |

# 5.12  Delegation, approval and accountability

Delegation transfers bounded authority from a grantor to a delegate while preserving accountability and conditions. Approval is meaningful only when the reviewer has sufficient information, decision freedom, competence, time and an enforceable ability to stop the action.

An AI recommendation is not an approval. A button click is not necessarily meaningful human oversight. The model records the grantor, delegate, capability, target, scope, duration, approval evidence, revocation and exceptions.

> **ACCOUNTABILITY RULE** Delegation may transfer execution authority, but it does not erase accountable ownership of the grant or decision.

# 5.13  Revocation, containment and recovery

Revocation removes an identity, token, permission, tool binding, workflow grant or approval. Containment limits ongoing effect. Recovery restores an acceptable state. These are related but distinct control outcomes.

High-impact authority should have a tested revocation path, independent containment option, evidence of effect, and recovery or compensation procedure proportionate to consequence.

| **Outcome** | **Question** |
| --- | --- |
| Revoke | Can the ability to act be removed quickly and completely? |
| Contain | Can active or queued effects be isolated or stopped? |
| Recover | Can data, configuration, service or business state be restored? |
| Attribute | Can the initiating identity, decision and action sequence be reconstructed? |
| Reassess | Which graph relationships and paths changed after the event? |

# 6.1  Reachability model

Reachability is the existence of a technically and contextually plausible route from a start condition to a target. Direct, indirect, chained, inherited and delegated routes are represented separately where they depend on different conditions.

A route remains UNKNOWN when evidence cannot establish a required identity, permission, protocol, state, data or workflow condition. Connectivity alone is insufficient.

| **Reachability form** | **Meaning** |
| --- | --- |
| Direct | One material relationship from start to target. |
| Indirect | A route through one intermediate object. |
| Chained | A multistep route requiring ordered conditions. |
| Inherited | A route created by role, group, workload or dependency. |
| Delegated | A route created by an explicit or implicit authority transfer. |
| Unknown | A potentially material route lacks sufficient evidence. |

# 6.2  Path metamodel

A path is an ordered sequence from a defined start condition to a defined target. It is an explanatory object with conditions and evidence, not merely a graph traversal result.

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

# 6.3  Path state taxonomy

Path labels describe the strength of support and validation. They must not be used interchangeably because they support different decisions.

| **State** | **Permitted conclusion** |
| --- | --- |
| Candidate | A hypothesized sequence requires review. |
| Topological | A traversal exists in the represented graph. |
| Plausible | Required conditions are supported or explicitly UNKNOWN. |
| Validated | Authorized testing or direct evidence confirms the scoped progression. |
| Exploitable | Evidence demonstrates a security exploit path within stated conditions. |
| Controlled | Validated controls prevent, constrain, detect or contain the path as claimed. |
| Residual | A route remains after existing or proposed intervention. |
| Invalidated | Evidence disproves a required step or condition. |

# 6.4  Exposure model

Exposure is the assessed opportunity for a threat, misuse, failure or unauthorized influence to reach a material target through current relationships. It is not synonymous with vulnerability, likelihood or residual risk.

Version 1.1 deliberately avoids one mandatory arithmetic formula. The future scoring model must define weights, gates, uncertainty treatment and decision thresholds transparently.

| **Dimension** | **Interpretation** |
| --- | --- |
| Reachability | Can a plausible route reach the target? |
| Authority | What action or influence is possible along the route? |
| Criticality | What business, safety, legal, operational or security consequence matters? |
| Boundaries | Which trust, identity, data, provider or consequence boundaries are crossed? |
| Controls | What prevents, constrains, detects or contains progression? |
| Evidence | How strongly are the relationships and controls supported? |
| Detectability | Can material use, misuse or failure be observed and attributed? |

# 6.5  Target and consequence

A target is the resource, action, process, decision, safety function or stakeholder outcome reached by a path. A consequence is the effect produced if the path conditions are satisfied. The target and consequence must be recorded separately.

A critical asset does not automatically make every path critical. Materiality depends on the action available, data affected, control state, scale, reversibility and decision context.

> **DECISION RULE** Prioritize the paths whose consequence exceeds risk appetite or a mandatory threshold, while preserving uncertainty and evidence limits.

# 6.6  Control breakpoint theory

A control breakpoint is a node, relationship or boundary where an effective control can materially stop, constrain, detect or contain a path. Breakpoint analysis asks where intervention produces the greatest defensible reduction in material exposure.

Breakpoint selection also considers feasibility, ownership, control independence, user impact, operational resilience and alternate routes.

| **Breakpoint question** | **Purpose** |
| --- | --- |
| Where does authority increase? | Target the transition that creates new capability. |
| Where is context lost? | Restore identity, policy or data semantics. |
| Where do paths converge? | Apply a high-leverage shared control. |
| Where does consequence become irreversible? | Require approval, preview or compensation before the boundary. |
| Where can containment act independently? | Avoid dependence on the compromised component. |
| What residual path remains? | Prevent false closure after one intervention. |

# 6.7  Residual and alternate paths

A residual path remains after an existing or proposed intervention. An alternate path reaches the same or equivalent target through a different route. Both are necessary to avoid overvaluing one control change.

Simulation may propose path reduction, but closure requires implementation evidence and retest within the relevant environment and conditions.

> **CLOSURE RULE** A finding closes only when the control state and affected path are reassessed with current evidence.

# 6.8  Change-triggered path reassessment

Material changes in identity, permission, prompt, model, agent, tool, retriever, data source, memory, provider, pipeline, network or control may alter path validity. Reassessment scope follows the affected subgraph and dependent paths.

Reassessment triggers should be risk-based and evidence-backed. Continuous assurance must not be claimed when monitoring coverage or connector freshness is incomplete.

| **Change** | **Likely effect** |
| --- | --- |
| New tool or action | New authority and consequence. |
| New identity or role | New reachability or attribution. |
| Prompt or planner change | Changed behavioral influence or action selection. |
| Provider or route change | New trust, data and evidence boundary. |
| Control configuration change | Changed breakpoint effectiveness. |
| Evidence expiry | Reduced confidence without necessarily changing system state. |

EVIDENCE, CONTROL AND ASSESSMENT SEMANTICS

# 7.1  Evidence and confidence metamodel

Evidence is a versioned source object supporting, disputing or bounding an assertion. Confidence expresses belief in a specific assertion given the available evidence and review. Evidence grade and confidence are related but not interchangeable.

| **Evidence dimension** | **Required question** |
| --- | --- |
| Provenance | Where did the evidence originate and who controls it? |
| Scope | Which objects, environments, dates and populations does it represent? |
| Integrity | How is tampering, transformation or extraction risk addressed? |
| Currency | When was it captured and what changed since? |
| Corroboration | Which independent source or test supports it? |
| Sensitivity | How must it be protected and retained? |
| Review | Who accepted, disputed or limited the conclusion? |
| Limitation | What conclusion can it not support? |

EVIDENCE, CONTROL AND ASSESSMENT SEMANTICS

# 7.2  Evidence grades E0-E5

Evidence grades describe strength of support, not control quality or risk. A high evidence grade can confirm an adverse state; a low grade limits confidence in any conclusion.

| **Grade** | **Definition** | **Permitted use** |
| --- | --- | --- |
| E0 | No evidence. | UNKNOWN. |
| E1 | Inference or uncorroborated signal. | Candidate hypothesis only. |
| E2 | Owner or stakeholder attestation. | Claimed practice, not independently verified. |
| E3 | Approved documentary evidence. | Design or governance intent. |
| E4 | Corroborated technical evidence. | Implementation within observed scope. |
| E5 | Direct current technical evidence plus representative test or operating record. | Operating effectiveness within stated limits. |

EVIDENCE, CONTROL AND ASSESSMENT SEMANTICS

# 7.3  Control state and dependency

A control is assessed through separate design, implementation, operation and validation states. Dependencies on identity, telemetry, people, process, provider or configuration are represented explicitly because a dependent control may fail when its prerequisite fails.

| **Conclusion** | **Meaning** |
| --- | --- |
| Verified Effective | Current evidence and representative validation support operation within scope. |
| Implemented - Effectiveness Not Verified | Implementation evidence exists; operating effect was not validated. |
| Partially Implemented | Required elements or scope are incomplete. |
| Not Implemented | Required control is absent in the assessed scope. |
| Not Applicable | Documented rationale shows the control does not apply. |
| Not Tested | Testing was not performed or authorized. |
| Unknown | Evidence is insufficient or conflicting. |
| Inconclusive | Testing or evidence cannot support a determinate conclusion. |

EVIDENCE, CONTROL AND ASSESSMENT SEMANTICS

# 7.4  Finding and decision semantics

A finding is an evidence-linked assessment conclusion. A decision is accountable disposition. Keeping them separate prevents management acceptance or remediation preference from changing the assessed condition.

Findings identify criteria, condition, cause, affected objects and paths, consequence, evidence, confidence, limitation and remediation objective. Decisions identify owner, treatment, rationale, conditions, expiry and review trigger.

> **NO-HALLUCINATION RULE** Every material conclusion links to evidence, a reproducible assessment procedure, affected graph objects or paths, and an explicit confidence statement.

EVIDENCE, CONTROL AND ASSESSMENT SEMANTICS

# 7.5  Assessment lifecycle

The lifecycle transforms a decision question into a versioned evidence-backed assessment. Each phase has an exit gate and may retain UNKNOWNs rather than forcing apparent completion.

| **Phase** | **Primary purpose** | **Exit gate** |
| --- | --- | --- |
| 1 Frame and scope | Decision, system, rules, evidence and assurance claim. | Scope, authority, owners and safety constraints approved. |
| 2 Discover and register | Create candidate objects, AIBOM and evidence lineage. | Measured coverage and discovery limitations documented. |
| 3 Construct and approve graph | Normalize objects, relationships, boundaries and evidence. | Material assertions have review status and confidence. |
| 4 Analyze trust, authority and paths | Identify material routes, amplification and breakpoints. | Conditions, uncertainty and controls are explicit. |
| 5 Validate and decide | Test controls, issue findings and record decisions. | Conclusions stay within tested scope. |
| 6 Monitor and reassess | Track change, drift, incidents, remediation and retirement. | Triggers, owners and retained records are defined. |

EVIDENCE, CONTROL AND ASSESSMENT SEMANTICS

# 7.6  Quality gates and critical gates

A quality gate determines whether an assessment phase has sufficient scope, evidence and review to proceed. A critical gate represents a condition whose failure caps or invalidates an outcome irrespective of average scoring.

Examples include absence of ownership, inability to identify the acting identity for a high-impact action, no testable containment, or no evidence that user authorization is preserved during restricted retrieval.

> **SCORING CONSTRAINT** A future maturity or risk score must preserve critical-gate failures visibly and cannot average them away.

EVIDENCE, CONTROL AND ASSESSMENT SEMANTICS

# 7.7  Analysis-run record and reproducibility

An analysis run is a versioned record of methodology and ontology versions, scope, evidence snapshot, graph snapshot, procedures, findings, control states, residual paths, decisions and limitations.

Reproducibility means another qualified reviewer can understand how the conclusion was reached using the retained record. It does not require identical outputs after the environment or evidence changes.

| **Record element** | **Minimum content** |
| --- | --- |
| Run identity | Stable identifier, date and applicable versions. |
| Scope | System, environments, period, use cases and exclusions. |
| Evidence snapshot | Sources, capture date, quality, retention and access control. |
| Graph snapshot | Approved and candidate objects, edges, boundaries and paths. |
| Procedure | Queries, interviews, inspections and authorized tests. |
| Results | Findings, confidence, control states and residual paths. |
| Decisions | Approval, exception, risk acceptance and supersession links. |

# 8.1  Six integrated assessment domains

The six domains are coordinated assessment lenses over one graph. They are not separate products and should not maintain incompatible definitions, evidence grades or scoring assumptions.

| **Domain** | **Purpose** | **Representative outputs** |
| --- | --- | --- |
| Discovery and AIBOM | Establish measurable estate, ownership, dependencies and shadow AI. | Asset register, AIBOM, evidence coverage, UNKNOWN backlog. |
| Trust and CloudHound | Model cloud and AI trust, identity inheritance and attacker-relevant paths. | Trust graph, privilege paths, boundary map, breakpoint candidates. |
| Authority Governance | Define and review effective access, inference, approval and action. | Authority matrix, approval boundaries, delegation and revocation. |
| AI Security Validation | Test architecture and controls against realistic scenarios. | Authorized tests, control state, findings and residual paths. |
| AI Governance and Assurance | Connect ownership, risk tier, policy, obligations and evidence. | Decision records, applicability, exceptions and assurance trail. |
| Operational Resilience | Prepare for failure, compromise, containment and recovery. | Playbooks, kill-switch tests, rollback and recovery evidence. |

# 8.2  Cross-domain integration rules

Every domain contributes objects, relationships, boundaries, controls, evidence or paths to the same versioned assessment state. Domain-specific terminology may extend but must not contradict the canonical concepts.

A domain conclusion should identify affected graph objects or paths, evidence, confidence and critical gates. Domain outputs become inputs to other domains through explicit records rather than informal narrative transfer.

| **Integration** | **Required behavior** |
| --- | --- |
| Discovery -> all domains | Publishes coverage, ownership, AIBOM, evidence and UNKNOWNs. |
| Trust -> authority and validation | Provides relationships, boundaries and candidate paths. |
| Authority -> governance and resilience | Provides grants, action classes, approval, revocation and amplification. |
| Validation -> assurance | Provides current control and path evidence. |
| Governance -> all domains | Provides purpose, risk appetite, decisions, exceptions and obligations. |
| Resilience -> validation and governance | Provides containment, recovery, incident and rehearsal evidence. |

# 8.3  Conformance classes

Conformance is declared by scope. A document may be conceptually conformant without being ontology-conformant; a tool may implement the ontology while failing assessment or reporting conformance.

| **Conformance class** | **Requirement** |
| --- | --- |
| Conceptual | Uses canonical definitions and invariants without contradiction. |
| Ontology | Uses canonical types and properties or declared extensions. |
| Assessment | Applies lifecycle gates, evidence states and conclusion limits. |
| Control | Links controls to graph context, evidence and validation state. |
| Reporting | Discloses scope, evidence, UNKNOWNs, confidence and limitations. |
| Tool | Preserves review state and does not transform inference into fact. |
| Extension | Uses a namespace, definition, owner, compatibility and migration rule. |

# 8.4  Known limitations

The methodology improves system reasoning but does not guarantee complete discovery, prove exploitability from topology, replace penetration testing or model evaluation, provide legal advice, certify compliance, or make point-in-time evidence permanently current.

Graph quality is bounded by scope, evidence, ontology fitness, review quality and the state represented. Tooling can increase scale and consistency but cannot eliminate judgment, missing evidence or changing context.

| **Limitation** | **Required disclosure** |
| --- | --- |
| Completeness | Measured coverage and discovery blind spots. |
| Exploitability | Conditions and validation state of each path. |
| Compliance | Mappings are aids, not legal conclusions. |
| Scoring | No normative risk formula exists in this document. |
| Automation | Material inference requires human review. |
| Change | Results may become stale after material system change. |
| Generality | Sector and use-case requirements may require extensions. |

# 8.5  v1.1 release acceptance checklist

Version 1.1 is a release candidate, not an approved public release. The following gates must close before GitHub publication.

| **Gate** | **Acceptance criterion** |
| --- | --- |
| Semantic integrity | No contradiction with the Manifesto or canonical ontology. |
| Refactor integrity | No missing concept introduced by removing repeated v1.0 structures. |
| Normative clarity | MUST, SHOULD, MAY and UNKNOWN usage is deliberate. |
| Traceability | Canonical terms map to ontology, controls and examples. |
| Independent review | Architecture, AI security and methodology reviews recorded. |
| IP and confidentiality | Ownership and publication permissions confirmed. |
| License and trademark | Documentation license and naming decision approved. |
| Repository quality | Markdown, links, changelog, contributing, code of conduct and security policy validated. |
| Safety | No secrets, client data, destructive procedure or exploitable environment detail. |

# 8.6  Final doctrine and approval record

This version replaces the template-heavy v1.0 structure with a consolidated theory model. It elevates graph theory, emergent risk and authority amplification while preserving the evidence discipline, UNKNOWN state, control semantics and six-domain architecture.

The public methodology must remain usable without ExposureGraph. A platform may operationalize the method, but canonical concepts belong in the public methodology and change through its governance process.

> **AI TRUST GRAPH DOCTRINE** Make the AI estate visible. Make relationships explicit. Bound authority. Explain emergent and amplified consequence. Validate paths and controls. Preserve evidence and uncertainty. Enable accountable, defensible decisions.

| **Approval role** | **Status** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Architecture review | Internal author-review completed; independent review pending. |
| AI security review | Internal author-review completed; independent review pending. |
| Methodology review | Independent review pending. |
| Employer / IP review | Pending. |
| License and trademark approval | Pending. |
| Public release | Not approved until mandatory gates close. |

AI Trust Graph Core Conceptual Model  |  Version 1.1  |  Refactored public-release candidate
