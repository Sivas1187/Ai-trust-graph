[← Back to methodology index](../README.md)

# AI Trust Graph — Reference Graph Schema and Illustrative Query Library

*Phase 2 companion | Non-normative | Version 0.4.0 | Initiated 2026-09-23*

| **STATUS — READ BEFORE USING** This document is a **Phase 2, non-normative companion**. It does not redefine any concept, control, evidence grade, path state, scoring formula, maturity level or governance principle established in Artifacts #1-#12. It carries no conformance weight: none of the six conformance levels (L0-L5, Ontology Specification Appendix D.4) require it, and no conformance or certification claim depends on it. L4 Tool-compatible is currently unavailable until approved normative schemas and test vectors are published. This companion does not satisfy that gate. Its sole purpose is to make the ontology and control library easier to implement on **any** property-graph or RDF-reducible engine, without binding the methodology to one. If anything here appears to conflict with Artifacts #1-#12, those artifacts govern and this document is wrong. |
| --- |

## 0.1 Why this document exists, and why it didn't exist until now

The Ontology Specification (Artifact #12) deliberately deferred machine-readable bindings to a **Phase 2** it left unscheduled: *"A public methodology document can be conceptually and ontology-conformant without any machine-readable schema. Tool conformance is a later engineering and conformance activity"* (§14.2), and Appendix G listed a *"Machine-readable ontology (RDF/OWL, property-graph or equivalent)"* among the artifacts *"intentionally deferred."* That decision was correct at the time: Phase 1's job was to get the concepts right without binding them to an engine.

This document is the formal start of Phase 2. It is scoped narrowly and deliberately:

- It **consolidates** — not invents — the schema already implicit across Artifact #12 (the canonical entity and relationship registries, state namespaces and enumerations) and Artifact #5 (the exact graph nodes and relationships cited by all 72 controls).
- It adds an **illustrative query library** showing how an assessor or implementer might actually traverse the graph to answer the questions each of the 36 maturity capabilities asks — patterns, not requirements.
- It changes no methodology semantics. Every entity, relationship, state and control reference below is reproduced from, or directly derived from, Artifacts #5 and #12 — see §4 for the full source-derivation record.

## 0.2 Vendor-neutrality: GQL-style illustrative notation

The query library uses **illustrative GQL-style read patterns informed by ISO/IEC 39075:2024** and intentionally familiar to readers of openCypher-style property-graph languages. These examples have **not yet been parser- or conformance-tested against an approved normative GQL implementation**, so this document does not claim syntactic ISO/IEC 39075 conformance. The notation is used for readability and standards-oriented portability, not to bind the methodology to one vendor or engine.

Two things follow from that choice, and both matter for keeping this document honest about its own limits:

1. **This is not the only way to implement the ontology.** Every pattern below could equally be expressed in SPARQL over an RDF/OWL rendering of the same ontology, in Gremlin, in recursive SQL over an adjacency-list schema, or in a document store with application-level traversal. The GQL-style notation was chosen for readability and standards-oriented alignment, not because the methodology requires a graph database, still less a specific one.
2. **A query that runs is not a conclusion the methodology recognizes.** Every invariant in Artifact #12 §15 still applies to whatever engine executes these patterns: a `MATCH` that finds a path does not make that path `Exploitable` (ONT-INV-01, ONT-INV-12); a query returning zero rows for missing evidence must surface as `UNKNOWN`, never as a false negative (ONT-INV-06); machine execution cannot promote an AI-generated inference to an approved fact (ONT-INV-08). Anywhere a query below returns something that would feed an assessment conclusion, that result is a **candidate assertion for review**, not an approved finding, exactly as §10 of Artifact #12 requires.

## 0.3 What this document is not

It is not the ExposureGraph product, does not describe ExposureGraph's implementation, schema, algorithms or architecture, and creates no dependency between the open methodology and that separate future commercial product (Manifesto, Appendix B publication boundary; Ontology Specification, Product boundary gate). It is not a conformance requirement — an assessment can be fully L5 "Full-method conformant" (Ontology Specification, Appendix D.4) using a spreadsheet and a whiteboard. It is not a certification artifact and creates no certification state (Ontology Specification, Appendix D.5). And it is not exhaustive of every way to query the graph — it is exhaustive with respect to the methodology's own structure: every one of the 72 controls' graph vocabulary is accounted for (§2), and every one of the 36 maturity capabilities has at least one illustrative pattern (§3), with the one capability the Master Control Library itself does not map to a control (D4.6 — see Ontology Specification §12.3) called out rather than papered over.

## 0.4 Notation key

```
(n:Label {property: value})        a node, typed by canonical entity label, with illustrative properties
(n:Label:SecondLabel)              a node carrying more than one canonical label where the ontology treats one as a contextual role (e.g. :Target, :Resource)
-[:REL_TYPE]->                     a canonical relationship, directional per §8.2 of the Ontology Specification
-[r:REL_TYPE {property: value}]->  a relationship bound to a variable so its own properties (evidence, confidence, review status...) can be filtered or returned
MATCH ... WHERE ... RETURN         standard GQL/openCypher-style read pattern
OPTIONAL MATCH                     a traversal step that should not eliminate the row if absent — used throughout to surface UNKNOWN rather than silently drop it
```

Every node and relationship label used below appears in §1's schema tables, which are themselves reproduced from Ontology Specification Appendices A and C. No label is introduced here that is not already canonical.

## 1. Reference property-graph schema

### 1.1 Common node properties

Every canonical entity type below carries this common property set unless a more specific field list is noted. Reproduced from Ontology Specification §2.2.

| **Property** | **Requirement** |
| --- | --- |
| id | Stable identifier within the governed dataset or assessment record. |
| type | Canonical ontology type or declared extension type. |
| label | Human-readable name; not used as identity. |
| scope | Use case, environment, population, boundary or assessment scope in which the object is asserted. |
| version / state | Version and lifecycle state where material. |
| owner / accountability | Named role or actor where stewardship or decision accountability is material. |
| evidenceRefs | Evidence supporting existence and material attributes. |
| confidence | Confidence in the assertion about the object, not a quality score for the object itself. |
| reviewStatus | Candidate, approved, rejected, modified or superseded for ontology assertions. |
| validity | Observed or effective period, expiry and supersession where material. |
| classification | Security, privacy, criticality or handling classification where relevant. |
| extensions | Namespaced attributes that do not redefine canonical meaning. |

### 1.2 Common relationship properties

Every canonical relationship type below carries this common property set. Reproduced from Ontology Specification §2.3.

| **Property** | **Requirement** |
| --- | --- |
| id | Stable relationship identifier. |
| type | Canonical predicate or governed extension predicate. |
| from / to | Typed directional endpoints. |
| conditions | Permissions, protocol, state, approval, timing, data or other prerequisites. |
| scope | Actions, resources, environments, populations and purposes covered. |
| evidenceRefs | Sources supporting, disputing or qualifying the relationship. |
| confidence | Confidence in this relationship assertion. |
| reviewStatus | Candidate, approved, rejected, modified or superseded. |
| validity | First seen, last seen, effective period, expiry and supersession. |
| owner | Actor responsible for maintaining or reviewing the relationship when applicable. |

> **EDGE RULE (Ontology Specification §2.2)** An edge without material conditions and evidence is a candidate description, not an approved fact. A graph connection never proves authorization, successful invocation or exploitability.

### 1.3 Entity-specific field additions

A small number of entity types have explicit, canonically specified fields beyond the common set. These are reproduced from the sections of Artifact #12 named in the right-hand column; no fields are added here that are not already specified there.

| **Node label** | **Additional canonical fields** | **Source** |
| --- | --- | --- |
| Path | startCondition, traversal (ordered), conditions, boundaryCrossings, target, controls, pathRole, residualPath | Ontology Specification §9.2-§9.3 |
| AuthorityGrant | actingIdentity, capability, target, scope, conditions, duration, approval, reversibility, telemetry, revocation | Ontology Specification §5.1 |
| EvidenceItem | evidenceId, sourceSystem, acquisitionMethod, acquisitionDate, integrityHash, grade, corroboration, currentness, classification | Ontology Specification §10.2 |
| Assertion | proposition, supportedBy, disputedBy, qualifiedBy, reviewOutcome | Ontology Specification §10.3 |
| Finding | criteria, condition, cause, consequence, affectedObjects, evidenceRefs, confidence, remediationObjective | Ontology Specification §10.7 |
| Decision | owner, disposition, rationale, conditions, expiry, monitoring, reviewTrigger | Ontology Specification §10.7 |
| Exception | requirement, owner, rationale, scope, expiry, compensatingControls, monitoring | Ontology Specification §10.7 |
| Test | authorization, procedure, conditions, result, limitations, reviewer | Ontology Specification §10.7 |
| Tool / API / MCPCapability / Operation | operation, authentication, authorization, sideEffect, reversibility, approval, limits, telemetry, downstreamDependency | Ontology Specification §6.2 |

### 1.4 Canonical node-label registry

All 129 canonical entity types from Ontology Specification, Appendix A. Every "Graph nodes" label used anywhere in the 72 controls resolves to one of these (see §2 for the exact per-control mapping, and Appendix B of the Ontology Specification for the aggregate compatibility registry, including the four compatibility aliases — `Edge`→`RelationshipRecord`, `Endpoint`→`ModelEndpoint`, `Evidence`→`EvidenceItem`, `Prompt`→`PromptAsset` — that keep existing v1.0 control wording valid).

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

### 1.5 Canonical relationship-type registry

All 96 canonical relationship predicates from Ontology Specification, Appendix C. `Status` marks semantic origin only, not priority: `CORE` predicates originate in the Core Conceptual Model, `EVIDENCE` predicates in the Evidence Model, `OPERATIONAL` predicates were formalized from repeated Master Control Library usage.

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

> **DIRECTION RULE (Ontology Specification §8.2)** Predicates are directional. Implementations MAY materialize inverses for navigation, but inverse labels MUST NOT change canonical meaning. Notably: `DEPLOYED_TO` (deployed state) vs. `DEPLOYS_TO` (deployment action); `EXPOSES` (publication) vs. `EXPOSED_TO` (exposure state); `AUTHORIZED_TO` (capability grant) vs. `AUTHORIZED_BY` (permitting authority); `CONTROLS`/`CONTROLLED_BY` never imply operating effectiveness without evidence; `OBSERVED_BY`, `EVIDENCED_BY` and `MONITORED_BY` are distinct (visibility, assertion support, ongoing coverage, respectively).

### 1.6 State and enumeration value domains

Reproduced from Ontology Specification §9.3, §10.5, §10.6, §11.1-§11.3 and Appendix D. A machine-readable implementation MUST namespace these separately — the same field name must never be reused across incompatible state machines (ONT-INV-06, §11.1).

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

| **Evidence grade** | **Definition** | **Permitted use** |
| --- | --- | --- |
| E0 | No evidence. | UNKNOWN. |
| E1 | Inference or uncorroborated signal. | Candidate hypothesis only. |
| E2 | Owner or stakeholder attestation. | Claimed practice, not independently verified. |
| E3 | Approved documentary evidence. | Design or governance intent. |
| E4 | Corroborated technical evidence. | Implementation within observed scope. |
| E5 | Direct current technical evidence plus representative test or operating record. | Operating effectiveness within stated limits. |

| **Control conclusion state** | **Meaning** |
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

| **Maturity level** | **Name** | **Meaning** |
| --- | --- | --- |
| M1 | Initial | Capability is ad hoc, implicit or inconsistently evidenced. |
| M2 | Repeatable | Priority activities repeat with basic ownership and evidence. |
| M3 | Defined | Standardized capability, roles, criteria and evidence are defined. |
| M4 | Managed | Capability performance, coverage, control operation or variation is measured and validated. |
| M5 | Adaptive | Capability responds to change and learning through governed, evidence-backed adaptation. |

| **Confidence level** | **Meaning** |
| --- | --- |
| High | Current, relevant and corroborated evidence covers material scope; no unresolved conflict could change the conclusion. |
| Medium | Evidence supports the conclusion with bounded sampling, freshness, coverage or corroboration gaps. |
| Low | Conclusion relies materially on inference, attestation, narrow samples, stale evidence or unresolved conflict. |
| Not rated | Evidence cannot support a determinate confidence conclusion. |

| **Conformance level** | **Permitted meaning** |
| --- | --- |
| L0 Referenced | Uses AI Trust Graph terminology; no conformance claim. |
| L1 Method-compatible | Preserves semantics, IDs, result states and versions. |
| L2 Assessment-compatible | Executes required lifecycle and records. |
| L3 Reporting-compatible | Produces compliant report package. |
| L4 Tool-compatible | Reserved for tools; unavailable until approved normative schemas and test vectors are published. |
| L5 Full-method conformant | Combines applicable assessment, reporting, records and governance requirements. |

> **RESERVED, NON-OPERATIONAL (Ontology Specification, Appendix D.5)** Applicant, Under Evaluation, Certified, Conditioned, Suspended, Expired, Withdrawn and Revoked are reserved future certification states. They MUST NOT be interpreted as an operational AI Trust Graph certification program in v1.0, and no query in §3 below writes or evaluates them.

### 1.7 Six-domain and maturity-capability map

All 36 capability identifiers from Ontology Specification §12.2, used throughout §3 to cross-reference illustrative queries to the maturity capability they support.

| **Domain** | **Capabilities** |
| --- | --- |
| D1 — Discovery and AIBOM | D1.1 Discovery scope and source coverage · D1.2 Canonical inventory and ownership · D1.3 Shadow AI and unmanaged use · D1.4 AIBOM and dependency lineage · D1.5 Unknown, orphan and lifecycle management · D1.6 Discovery evidence and assurance |
| D2 — Trust and Privilege Paths | D2.1 Trust relationship representation · D2.2 Identity and privilege path analysis · D2.3 Boundary and provider trust · D2.4 Path identification and prioritization · D2.5 Control breakpoint analysis · D2.6 Trust graph quality and governance |
| D3 — Authority Governance | D3.1 Authority inventory and taxonomy · D3.2 Delegation and identity context · D3.3 Human approval and oversight · D3.4 Authority amplification control · D3.5 Revocation and containment · D3.6 Authority decision governance |
| D4 — AI Security Validation | D4.1 Validation strategy and scope · D4.2 Threat modeling and path hypotheses · D4.3 Rules of engagement and safety · D4.4 Control effectiveness testing · D4.5 Finding quality and closure · D4.6 Validation assurance and independence |
| D5 — AI Governance and Assurance | D5.1 Strategy, policy and risk appetite · D5.2 Use-case intake and tiering · D5.3 Decision rights and accountability · D5.4 Applicability and obligations · D5.5 Exceptions and risk acceptance · D5.6 Assurance, reporting and literacy |
| D6 — Operational Resilience | D6.1 Observability and attribution · D6.2 Detection and triage · D6.3 Containment and kill mechanisms · D6.4 Recovery, rollback and compensation · D6.5 Incident reconstruction and evidence · D6.6 Exercises, learning and resilience governance |

> Note (Ontology Specification §12.3): D4.6 is a canonical capability regardless of the separate control-mapping reconciliation required in the Master Control Library — no single control in the Master Control Library maps to it directly. §3.4's D4.6 pattern is accordingly framed generically rather than cited to a specific `ATG-VAL` control.

## 2. Exact control-to-graph cross-reference (all 72 controls)

This is the exhaustive, per-control complement to Ontology Specification Appendix B's aggregate compatibility registry: every one of the 72 Master Control Library controls, its exact `Graph nodes` and `Graph relationships` fields, reproduced verbatim from Artifact #5. Nothing is paraphrased or inferred — this table is generated directly from the canonical control text, so it cannot silently drift from it.


#### Discovery and AIBOM (`ATG-DIS`)

| **Control ID** | **Control name** | **Criticality** | **Maturity capability** | **Graph nodes** | **Graph relationships** |
| --- | --- | --- | --- | --- | --- |
| ATG-DIS-001 | Discovery scope and authorized boundaries | Important | D1.1 Discovery scope and source coverage | AIUseCase; BusinessUnit; Environment; Evidence | IN_SCOPE; OWNED_BY; EVIDENCED_BY |
| ATG-DIS-002 | Discovery source catalogue | Important | D1.1 Discovery scope and source coverage | DiscoverySource; Evidence; Provider | OBSERVED_BY; PROVIDED_BY; DEPENDS_ON |
| ATG-DIS-003 | Sanctioned AI service discovery | Important | D1.1 Discovery scope and source coverage | AIService; Application; Provider; Contract | APPROVED_BY; PROVIDED_BY; DEPLOYED_TO |
| ATG-DIS-004 | Shadow AI detection and triage | Critical | D1.3 Shadow AI and unmanaged use | ShadowAI; HumanIdentity; Provider; Evidence | SENDS_TO; USES; OBSERVED_BY; HAS_FINDING |
| ATG-DIS-005 | Canonical AI estate inventory | Systemic | D1.2 Canonical inventory and ownership | All canonical asset classes | IN_SCOPE; DEPENDS_ON; EVIDENCED_BY |
| ATG-DIS-006 | Asset identity and correlation | Important | D1.2 Canonical inventory and ownership | Asset; DiscoverySource; Evidence | SAME_AS_CANDIDATE; DERIVED_FROM; EVIDENCED_BY |
| ATG-DIS-007 | Business and technical ownership | Critical | D1.2 Canonical inventory and ownership | AIUseCase; Asset; BusinessOwner; TechnicalOwner | OWNED_BY; ACCOUNTABLE_TO |
| ATG-DIS-008 | AI Bill of Materials | Critical | D1.4 AIBOM and dependency lineage | AIBOM; Model; Prompt; Agent; Tool; Identity; Provider | CONTAINS; DEPENDS_ON; DEPLOYED_TO; DERIVED_FROM |
| ATG-DIS-009 | Dependency and provenance lineage | Important | D1.4 AIBOM and dependency lineage | Dataset; Artifact; Model; Prompt; Provider; Evidence | DERIVED_FROM; BUILT_FROM; PROVIDED_BY; EVIDENCED_BY |
| ATG-DIS-010 | AIBOM and inventory change detection | Critical | D1.4 AIBOM and dependency lineage | AIBOM; Asset; ChangeEvent; Test | CHANGED_TO; TRIGGERS; TESTED_BY; SUPERSEDES |
| ATG-DIS-011 | Orphan, dormant and exposed asset lifecycle | Important | D1.5 Unknown, orphan and lifecycle management | Asset; Identity; Endpoint; Exception | EXPOSED_TO; OWNED_BY; RETIRED_BY; HAS_EXCEPTION |
| ATG-DIS-012 | Discovery coverage assurance | Systemic | D1.6 Discovery evidence and assurance | DiscoveryScope; Evidence; Metric; Finding | MEASURES; OBSERVED_BY; HAS_FINDING |

#### Trust and Privilege Paths (`ATG-TRU`)

| **Control ID** | **Control name** | **Criticality** | **Maturity capability** | **Graph nodes** | **Graph relationships** |
| --- | --- | --- | --- | --- | --- |
| ATG-TRU-001 | Canonical trust relationship semantics | Systemic | D2.1 Trust relationship representation | All canonical graph nodes | TRUSTS; CONNECTS_TO; AUTHORIZED_TO; INVOKES; DEPENDS_ON |
| ATG-TRU-002 | Trust basis, scope and lifecycle | Critical | D2.1 Trust relationship representation | Actor; Provider; Identity; Data; Control | TRUSTS; APPROVED_BY; REVOKED_BY |
| ATG-TRU-003 | Human and workload identity path mapping | Critical | D2.2 Identity and privilege path analysis | HumanIdentity; WorkloadIdentity; Role; Permission; Tool | AUTHENTICATES_AS; ASSUMES_ROLE; AUTHORIZED_TO; INVOKES |
| ATG-TRU-004 | Delegation and privilege inheritance analysis | Critical | D2.2 Identity and privilege path analysis | Identity; Group; Role; Permission; Target | MEMBER_OF; ASSUMES_ROLE; DELEGATES_TO; AUTHORIZED_TO |
| ATG-TRU-005 | Trust boundary definition and enforcement | Critical | D2.3 Boundary and provider trust | Boundary; Zone; Identity; Data; Provider | CROSSES; CONNECTS_TO; SENDS_TO; AUTHORIZED_TO |
| ATG-TRU-006 | Provider trust and shared responsibility | Critical | D2.3 Boundary and provider trust | Provider; Contract; Control; Evidence | PROVIDED_BY; SUBJECT_TO; CONTROLS; EVIDENCED_BY |
| ATG-TRU-007 | Critical dependency and concentration analysis | Systemic | D2.3 Boundary and provider trust | Provider; Platform; Control; System; Path | DEPENDS_ON; PROVIDED_BY; BREAKS_PATH |
| ATG-TRU-008 | Material path construction | Systemic | D2.4 Path identification and prioritization | Path; Threat; Identity; Agent; Tool; Target | TRAVERSES; CROSSES; AUTHORIZED_TO; INVOKES |
| ATG-TRU-009 | Path condition and reachability validation | Critical | D2.4 Path identification and prioritization | Path; Condition; Evidence; Test | REQUIRES; EVIDENCED_BY; TESTED_BY; INVALIDATED_BY |
| ATG-TRU-010 | Control breakpoint mapping | Critical | D2.5 Control breakpoint analysis | Control; Path; Boundary; Evidence | CONTROLS; BREAKS_PATH; TESTED_BY; DEPENDS_ON |
| ATG-TRU-011 | Trust and privilege drift monitoring | Critical | D2.6 Trust graph quality and governance | GraphSnapshot; ChangeEvent; Edge; Evidence | CHANGED_TO; SUPERSEDES; TRIGGERS |
| ATG-TRU-012 | Trust graph quality and review governance | Systemic | D2.6 Trust graph quality and governance | GraphAssertion; Reviewer; Evidence; Decision | PROPOSED_BY; APPROVED_BY; REJECTED_BY; SUPERSEDES |

#### Authority Governance (`ATG-AUT`)

| **Control ID** | **Control name** | **Criticality** | **Maturity capability** | **Graph nodes** | **Graph relationships** |
| --- | --- | --- | --- | --- | --- |
| ATG-AUT-001 | Authority inventory and action taxonomy | Systemic | D3.1 Authority inventory and taxonomy | Actor; Identity; Agent; Tool; Target | AUTHORIZED_TO; INVOKES; TRIGGERS_ACTION |
| ATG-AUT-002 | Unique machine identity and attribution | Critical | D3.2 Delegation and identity context | HumanIdentity; WorkloadIdentity; Agent; Tool | AUTHENTICATES_AS; ACTS_FOR; INVOKES |
| ATG-AUT-003 | Least authority and bounded scope | Critical | D3.1 Authority inventory and taxonomy | Identity; Role; Permission; Resource | AUTHORIZED_TO; ASSUMES_ROLE; DENIED_BY |
| ATG-AUT-004 | Delegation and impersonation controls | Critical | D3.2 Delegation and identity context | Grantor; Delegate; Token; Target | DELEGATES_TO; ACTS_FOR; AUTHORIZED_TO |
| ATG-AUT-005 | Meaningful approval for consequential action | Critical | D3.3 Human approval and oversight | HumanApprover; BusinessAction; Agent; Transaction | APPROVED_BY; TRIGGERS_ACTION; BINDS_TO |
| ATG-AUT-006 | Tool, plugin and MCP allowlisting | Critical | D3.1 Authority inventory and taxonomy | Agent; Tool; Plugin; MCPServer; Operation | DISCOVERS; INVOKES; AUTHORIZED_TO |
| ATG-AUT-007 | Authority amplification assessment | Systemic | D3.4 Authority amplification control | Identity; Agent; Tool; Workflow; Path | AUTHORIZED_TO; INVOKES; AMPLIFIES; TRIGGERS_ACTION |
| ATG-AUT-008 | Resource, iteration and transaction limits | Critical | D3.4 Authority amplification control | Agent; Workflow; Budget; Transaction | LIMITED_BY; MONITORED_BY; TRIGGERS_ACTION |
| ATG-AUT-009 | Data disclosure and destination authority | Critical | D3.1 Authority inventory and taxonomy | Data; Output; Provider; Channel; Identity | SENDS_TO; DISCLOSES_TO; CONTROLLED_BY |
| ATG-AUT-010 | Environment and duty separation | Important | D3.6 Authority decision governance | Environment; Identity; Pipeline; Approver | SEGREGATED_FROM; DEPLOYS_TO; APPROVED_BY |
| ATG-AUT-011 | Authority revocation and end-to-end containment | Critical | D3.5 Revocation and containment | Identity; Session; Agent; Tool; Queue | REVOKED_BY; DISABLED_BY; CONTAINS |
| ATG-AUT-012 | Authority review, exception and recertification | Critical | D3.6 Authority decision governance | AuthorityGrant; Owner; Exception; Evidence | REVIEWED_BY; HAS_EXCEPTION; REVOKED_BY |

#### AI Security Validation (`ATG-VAL`)

| **Control ID** | **Control name** | **Criticality** | **Maturity capability** | **Graph nodes** | **Graph relationships** |
| --- | --- | --- | --- | --- | --- |
| ATG-VAL-001 | Risk-based AI security validation strategy | Systemic | D4.1 Validation strategy and scope | AIUseCase; System; Path; TestPlan | TESTED_BY; SUBJECT_TO; PRIORITIZED_BY |
| ATG-VAL-002 | Graph-based threat modelling | Critical | D4.2 Threat modeling and path hypotheses | Threat; Path; Boundary; Target; Control | THREATENS; TRAVERSES; MITIGATED_BY |
| ATG-VAL-003 | Validation rules of engagement | Critical | D4.3 Rules of engagement and safety | TestPlan; Tester; Environment; Evidence | AUTHORIZED_BY; TESTED_BY; EVIDENCED_BY |
| ATG-VAL-004 | Model security and robustness validation | Important | D4.1 Validation strategy and scope | Model; Endpoint; Dataset; Test | DEPLOYED_TO; TESTED_BY; DERIVED_FROM |
| ATG-VAL-005 | Prompt, context and output security testing | Critical | D4.2 Threat modeling and path hypotheses | Prompt; Context; Model; Output; Guardrail | INFLUENCES; RETURNS_TO; GUARDED_BY; TESTED_BY |
| ATG-VAL-006 | RAG, vector and memory security testing | Critical | D4.2 Threat modeling and path hypotheses | Source; Chunk; VectorIndex; Retriever; Memory | INDEXES; RETRIEVES_FROM; AUGMENTS; STORES_IN |
| ATG-VAL-007 | Agent and multi-agent security testing | Critical | D4.2 Threat modeling and path hypotheses | Agent; Planner; AgentMessage; Tool; HumanApprover | INSTRUCTS; SENDS_TO; INVOKES; APPROVED_BY |
| ATG-VAL-008 | MCP, plugin and tool security testing | Critical | D4.2 Threat modeling and path hypotheses | MCPClient; MCPServer; Tool; Operation; Identity | DISCOVERS; EXPOSES; INVOKES; AUTHORIZED_TO |
| ATG-VAL-009 | AI supply-chain and pipeline validation | Critical | D4.1 Validation strategy and scope | Repository; Pipeline; Artifact; Model; Prompt | BUILT_FROM; SIGNED_BY; DEPLOYS_TO; APPROVED_BY |
| ATG-VAL-010 | AI infrastructure and runtime validation | Important | D4.1 Validation strategy and scope | Workload; Cluster; Network; Endpoint; Secret | RUNS_ON; CONNECTS_TO; CAN_EGRESS_TO; MONITORED_BY |
| ATG-VAL-011 | Control-breakpoint effectiveness validation | Systemic | D4.4 Control effectiveness testing | Control; Path; Test; Evidence | BREAKS_PATH; TESTED_BY; EVIDENCED_BY |
| ATG-VAL-012 | Finding traceability and closure validation | Important | D4.5 Finding quality and closure | Finding; Control; Path; Evidence; Decision | HAS_FINDING; MITIGATED_BY; TESTED_BY; CLOSED_BY |

#### AI Governance and Assurance (`ATG-GOV`)

| **Control ID** | **Control name** | **Criticality** | **Maturity capability** | **Graph nodes** | **Graph relationships** |
| --- | --- | --- | --- | --- | --- |
| ATG-GOV-001 | Enterprise AI policy and acceptable use | Important | D5.1 Strategy, policy and risk appetite | Policy; Actor; AIUseCase; Exception | SUBJECT_TO; APPROVED_BY; HAS_EXCEPTION |
| ATG-GOV-002 | AI risk appetite and decision thresholds | Critical | D5.1 Strategy, policy and risk appetite | RiskAppetite; AIUseCase; Decision; Control | CLASSIFIED_AS; APPROVED_BY; REQUIRES |
| ATG-GOV-003 | AI governance operating model and accountability | Systemic | D5.3 Decision rights and accountability | Actor; Committee; Decision; AIUseCase | ACCOUNTABLE_TO; APPROVED_BY; CHALLENGED_BY |
| ATG-GOV-004 | AI use-case intake and registration | Critical | D5.2 Use-case intake and tiering | AIUseCase; Owner; Model; Data; Agent; Jurisdiction | OWNED_BY; USES; SUBJECT_TO; APPROVED_BY |
| ATG-GOV-005 | Impact, affected-stakeholder and misuse assessment | Critical | D5.2 Use-case intake and tiering | AIUseCase; AffectedStakeholder; Consequence; Safeguard | AFFECTS; EXCLUDED_FROM; MITIGATED_BY |
| ATG-GOV-006 | Prohibited and high-risk use screening | Critical | D5.4 Applicability and obligations | AIUseCase; Obligation; Jurisdiction; Decision | SUBJECT_TO; CLASSIFIED_AS; APPROVED_BY |
| ATG-GOV-007 | Regulatory role, jurisdiction and obligation mapping | Critical | D5.4 Applicability and obligations | Jurisdiction; RegulatoryRole; Obligation; AIUseCase; Control | SUBJECT_TO; MAPS_TO; EVIDENCED_BY |
| ATG-GOV-008 | Lifecycle approval and material-change governance | Critical | D5.3 Decision rights and accountability | ChangeEvent; AIUseCase; Artifact; Decision | TRIGGERS; APPROVED_BY; DEPLOYS_TO |
| ATG-GOV-009 | Exception and risk-acceptance governance | Critical | D5.5 Exceptions and risk acceptance | Exception; Decision; Control; Path | HAS_EXCEPTION; APPROVED_BY; MITIGATED_BY |
| ATG-GOV-010 | AI provider due diligence and contracting | Critical | D5.4 Applicability and obligations | Provider; Contract; Data; Control; Decision | PROVIDED_BY; SUBJECT_TO; CONTROLS |
| ATG-GOV-011 | Role-based AI literacy and competence | Important | D5.6 Assurance, reporting and literacy | Actor; Role; Training; Decision | REQUIRES; COMPLETED_BY; AUTHORIZED_TO |
| ATG-GOV-012 | Independent assurance and continuous review | Systemic | D5.6 Assurance, reporting and literacy | AssurancePlan; Reviewer; Finding; Control | REVIEWED_BY; HAS_FINDING; TESTED_BY |

#### Operational Resilience (`ATG-RES`)

| **Control ID** | **Control name** | **Criticality** | **Maturity capability** | **Graph nodes** | **Graph relationships** |
| --- | --- | --- | --- | --- | --- |
| ATG-RES-001 | AI activity telemetry coverage | Systemic | D6.1 Observability and attribution | AIEvent; Identity; Agent; Tool; Approval; Outcome | LOGS_TO; OBSERVED_BY; CORRELATES_TO |
| ATG-RES-002 | Action attribution and non-repudiation | Critical | D6.1 Observability and attribution | Actor; Identity; Agent; Action; Evidence | ACTS_FOR; TRIGGERS_ACTION; EVIDENCED_BY |
| ATG-RES-003 | AI-specific detection and alerting | Critical | D6.2 Detection and triage | AIEvent; Detection; Path; Identity; Agent | MONITORED_BY; TRIGGERS; HAS_FINDING |
| ATG-RES-004 | AI incident taxonomy and severity | Important | D6.2 Detection and triage | Incident; Threat; Path; Consequence | CLASSIFIED_AS; AFFECTS; TRIGGERS |
| ATG-RES-005 | Incident triage and decision coordination | Critical | D6.2 Detection and triage | Incident; Responder; Decision; Path; Evidence | TRIAGED_BY; ESCALATED_TO; AFFECTS |
| ATG-RES-006 | Graph-aware containment planning | Critical | D6.3 Containment and kill mechanisms | Incident; Agent; Tool; Identity; Queue; Provider | CONTAINED_BY; DEPENDS_ON; DISABLED_BY |
| ATG-RES-007 | Agent kill, pause and isolation | Critical | D6.3 Containment and kill mechanisms | Agent; Planner; Queue; Tool; Operator | DISABLED_BY; PAUSED_BY; INVOKES |
| ATG-RES-008 | Credential, token and delegation revocation | Critical | D6.3 Containment and kill mechanisms | Identity; Token; Session; Delegation | REVOKED_BY; AUTHENTICATES_AS; DELEGATES_TO |
| ATG-RES-009 | Safe rollback and configuration restoration | Important | D6.4 Recovery, rollback and compensation | Artifact; Configuration; Model; Prompt; ChangeEvent | SUPERSEDES; RESTORED_BY; TESTED_BY |
| ATG-RES-010 | Business recovery and compensation | Critical | D6.4 Recovery, rollback and compensation | BusinessAction; Transaction; Data; RecoveryPlan | RECOVERED_BY; COMPENSATED_BY; APPROVED_BY |
| ATG-RES-011 | Incident evidence preservation and reconstruction | Critical | D6.5 Incident reconstruction and evidence | Incident; Evidence; GraphSnapshot; Action | EVIDENCED_BY; OBSERVED_BY; CORRELATES_TO |
| ATG-RES-012 | Resilience exercises, learning and improvement | Systemic | D6.6 Exercises, learning and resilience governance | Exercise; IncidentScenario; Finding; Control; Path | TESTED_BY; HAS_FINDING; MITIGATED_BY |

## 3. Illustrative query library

One pattern per maturity capability (36, matching Ontology Specification §12.2), organized by domain, plus nine cross-cutting patterns that don't belong to a single domain. Every query cites the control(s) whose exact `Graph nodes`/`Graph relationships` fields (§2) it draws its vocabulary from. As §0.2 states: a result returned here is a candidate assertion for review, never an approved conclusion, and none of these patterns change what any control, capability or state means.

### 3.1 D1 — Discovery and AIBOM

#### D1.1 Discovery scope and source coverage
*Grounded in: ATG-DIS-001, ATG-DIS-002, ATG-DIS-003*

Declared scope against actual discovery-source coverage, so a reader can see what "in scope" rested on.

```
MATCH (uc:AIUseCase)-[:IN_SCOPE]->(env:Environment)
OPTIONAL MATCH (uc)-[:OWNED_BY]->(bu:BusinessUnit)
OPTIONAL MATCH (src:DiscoverySource)-[:OBSERVED_BY]->(ev:EvidenceItem)
WHERE src.scope = uc.id
RETURN uc.id, env.label, bu.label, count(src) AS sourcesInScope, count(ev) AS sourcesWithEvidence
```

#### D1.2 Canonical inventory and ownership
*Grounded in: ATG-DIS-005, ATG-DIS-006, ATG-DIS-007*

Assets missing a business or technical owner — a direct gap against D1.2's own criteria.

```
MATCH (a:Asset)
OPTIONAL MATCH (a)-[:OWNED_BY]->(bo:BusinessOwner)
OPTIONAL MATCH (a)-[:OWNED_BY]->(to:TechnicalOwner)
WHERE bo IS NULL OR to IS NULL
RETURN a.id, a.label, bo.label AS businessOwner, to.label AS technicalOwner
```

#### D1.3 Shadow AI and unmanaged use
*Grounded in: ATG-DIS-004*

Unsanctioned AI use sending data to a provider with no approval on record.

```
MATCH (h:HumanIdentity)-[:USES]->(s:ShadowAI)-[:SENDS_TO]->(p:Provider)
WHERE NOT (s)-[:APPROVED_BY]->(:Approval)
OPTIONAL MATCH (s)-[:OBSERVED_BY]->(ev:EvidenceItem)
RETURN h.id, s.label, p.label, ev.id AS evidenceItem, ev.grade AS evidenceGrade
```

A NULL grade means no linked evidence; it is not an E0 EvidenceItem and not a result state. Sufficiency is a reviewed component decision (Evidence Model §4.13), never a per-item grade threshold.

#### D1.4 AIBOM and dependency lineage
*Grounded in: ATG-DIS-008, ATG-DIS-009, ATG-DIS-010*

AIBOM components lacking recorded provenance or supporting evidence.

```
MATCH (bom:AIBOM)-[:CONTAINS]->(component)
WHERE component:Model OR component:PromptAsset OR component:Agent OR component:Tool
OPTIONAL MATCH (component)-[:DERIVED_FROM]->(source:Artifact)
OPTIONAL MATCH (component)-[:EVIDENCED_BY]->(ev:EvidenceItem)
RETURN bom.id, component.label, source.label AS provenance, ev.id AS evidenceItem, ev.grade AS evidenceGrade
```

A NULL grade means no linked evidence; it is not an E0 EvidenceItem and not a result state. Sufficiency is a reviewed component decision (Evidence Model §4.13), never a per-item grade threshold.

#### D1.5 Unknown, orphan and lifecycle management
*Grounded in: ATG-DIS-011*

Exposed assets with neither an owner nor an approved exception nor a retirement decision — the orphan case D1.5 exists to catch.

```
MATCH (a:Asset)-[:EXPOSED_TO]->(z:Zone)
WHERE NOT (a)-[:OWNED_BY]->(:Owner)
  AND NOT (a)-[:HAS_EXCEPTION]->(:Exception)
  AND NOT (a)-[:RETIRED_BY]->(:Decision)
RETURN a.id, a.label, z.label AS exposureContext
```

#### D1.6 Discovery evidence and assurance
*Grounded in: ATG-DIS-012*

Discovery coverage metric alongside any open findings against it — coverage and its limitations shown together, per RPT-02.

```
MATCH (scope:DiscoveryScope)
OPTIONAL MATCH (m:Metric)-[:MEASURES]->(scope)
OPTIONAL MATCH (scope)-[:HAS_FINDING]->(f:Finding)
RETURN scope.id, m.label AS coverageMetric, m.value AS coverageValue, collect(f.id) AS openFindings
```

### 3.2 D2 — Trust and Privilege Paths

#### D2.1 Trust relationship representation
*Grounded in: ATG-TRU-001, ATG-TRU-002*

Approved trust relationships and whether each has an evidenced revocation mechanism, consistent with the trust metamodel's requirement that every material `TRUSTS` relation record purpose, scope, owner and revocation.

```
MATCH (a:Actor)-[t:TRUSTS]->(target)
WHERE t.reviewStatus = 'Approved'
OPTIONAL MATCH (t)<-[:REVOKED_BY]-(mechanism)
RETURN a.id, target.label, t.scope, t.validity AS expiry, mechanism IS NOT NULL AS hasRevocationPath
```

#### D2.2 Identity and privilege path analysis
*Grounded in: ATG-TRU-003, ATG-TRU-004*

Privilege inherited through group and role membership, plus any direct delegation to the same target — the two routes D2.2 asks an assessor to distinguish.

```
MATCH (i:Identity)-[:MEMBER_OF]->(g:Group)-[:ASSUMES_ROLE]->(r:Role)-[:AUTHORIZED_TO]->(t:Target)
OPTIONAL MATCH (i)-[:DELEGATES_TO]->(delegate:Identity)-[:AUTHORIZED_TO]->(t)
RETURN i.id, g.label, r.label, t.label, delegate.id AS alsoReachableViaDelegation
```

#### D2.3 Boundary and provider trust
*Grounded in: ATG-TRU-005, ATG-TRU-006, ATG-TRU-007*

Provider boundary crossings without an identified governing control or supporting evidence.

```
MATCH (r)-[:CROSSES]->(b:Boundary {boundaryClass: 'Provider'})
MATCH (r)-[:SENDS_TO|CONNECTS_TO]->(p:Provider)
OPTIONAL MATCH (p)-[:SUBJECT_TO]->(c:Control)
OPTIONAL MATCH (c)-[:EVIDENCED_BY]->(ev:EvidenceItem)
RETURN p.id, b.label, c.id AS governingControl, ev.id AS evidenceItem, ev.grade AS evidenceGrade
```

A NULL grade means no linked evidence; it is not an E0 EvidenceItem and not a result state. Sufficiency is a reviewed component decision (Evidence Model §4.13), never a per-item grade threshold.

#### D2.4 Path identification and prioritization
*Grounded in: ATG-TRU-008, ATG-TRU-009*

Candidate and topological paths with their required conditions and the evidence grade behind each — deliberately not averaged into one number, per the Evidence Model's grade-is-support-not-a-score rule.

```
MATCH (p:Path)-[:TRAVERSES]->(step)
WHERE p.state IN ['Candidate', 'Topological', 'Plausible']
OPTIONAL MATCH (p)-[:REQUIRES]->(cond:Condition)
OPTIONAL MATCH (cond)-[:EVIDENCED_BY]->(ev:EvidenceItem)
RETURN p.id, p.state,
       collect(DISTINCT {condition: cond.label, evidenceItem: ev.id, evidenceGrade: ev.grade}) AS conditionEvidence
```

A NULL grade means no linked evidence; it is not an E0 EvidenceItem and not a result state. Sufficiency is a reviewed component decision (Evidence Model §4.13), never a per-item grade threshold.

#### D2.5 Control breakpoint analysis
*Grounded in: ATG-TRU-010*

Candidate breakpoints on a path and whether each has been tested — a breakpoint claim without a `Test` node behind it is design intent, not validated control.

```
MATCH (c:Control)-[:BREAKS_PATH]->(p:Path)
OPTIONAL MATCH (c)-[:TESTED_BY]->(t:Test)
RETURN p.id, c.id AS candidateBreakpoint, t.result AS testResult, t.conditions AS testConditions
```

#### D2.6 Trust graph quality and governance
*Grounded in: ATG-TRU-011, ATG-TRU-012*

Graph assertions still `Candidate` after proposal, and the snapshot lineage they belong to — drift and un-reviewed change in one view.

```
MATCH (ga:GraphAssertion)-[:PROPOSED_BY]->(source)
WHERE ga.reviewStatus = 'Candidate'
OPTIONAL MATCH (prior:GraphSnapshot)-[:SUPERSEDES]->(current:GraphSnapshot {relatedAssertion: ga.id})
RETURN ga.id, source.label AS proposedBy, ga.validity, prior.id AS priorSnapshot, current.id AS currentSnapshot
```

### 3.3 D3 — Authority Governance

#### D3.1 Authority inventory and taxonomy
*Grounded in: ATG-AUT-001, ATG-AUT-003, ATG-AUT-006, ATG-AUT-009*

The authority inventory itself: every identity's authorized action class, target and the role it came through.

```
MATCH (i:Identity)-[auth:AUTHORIZED_TO]->(t:Target)
OPTIONAL MATCH (i)-[:ASSUMES_ROLE]->(r:Role)
RETURN i.id, r.label AS viaRole, auth.scope AS actionClass, t.label AS target, auth.conditions
```

#### D3.2 Delegation and identity context
*Grounded in: ATG-AUT-002, ATG-AUT-004*

Delegation chains traced back to the accountable grantor — accountability that delegation transfers execution but never erases, per the ontology's accountability rule.

```
MATCH (g:Grantor)-[:DELEGATES_TO]->(d:Delegate)-[:ACTS_FOR]->(principal)
OPTIONAL MATCH (d)-[:AUTHORIZED_TO]->(t:Target)
RETURN g.id AS grantor, d.id AS delegate, principal.label AS actsFor, t.label AS target
```

#### D3.3 Human approval and oversight
*Grounded in: ATG-AUT-005*

Agent-triggered actions at a consequential actionability level (A3/A4) without a bound human approval.

```
MATCH (agent:Agent)-[:TRIGGERS_ACTION]->(ba:BusinessAction)
WHERE ba.actionabilityLevel IN ['A3', 'A4']
OPTIONAL MATCH (ba)-[:APPROVED_BY]->(h:HumanApprover)
RETURN agent.id, ba.id, ba.actionabilityLevel, h.id AS approver
```

#### D3.4 Authority amplification control
*Grounded in: ATG-AUT-007, ATG-AUT-008*

Workflows that amplify an identity's authorized scope, and whether a budget limit bounds them — amplification without a limit is exactly what D3.4 asks an assessor to find.

```
MATCH (i:Identity)-[:AUTHORIZED_TO]->(scope1)
MATCH (i)-[:INVOKES]->(w:Workflow)-[amp:AMPLIFIES]->(scope2)
WHERE scope2 <> scope1
OPTIONAL MATCH (w)-[:LIMITED_BY]->(b:Budget)
RETURN i.id, w.id, amp.scope AS amplificationDimension, b.label AS boundingBudget
```

#### D3.5 Revocation and containment
*Grounded in: ATG-AUT-011*

Identities with a recorded revocation whose sessions still show as active — revocation that hasn't propagated.

```
MATCH (i:Identity)-[:REVOKED_BY]->(mechanism)
MATCH (i)-[:CONTAINS]->(s:Session)
WHERE s.validity.expiry IS NULL
RETURN i.id, mechanism.label AS revocationMechanism, s.id AS stillActiveSession
```

#### D3.6 Authority decision governance
*Grounded in: ATG-AUT-010, ATG-AUT-012*

Authority grants overdue for periodic review, alongside any exception currently covering the gap.

```
MATCH (g:AuthorityGrant)-[:OWNED_BY]->(o:Owner)
OPTIONAL MATCH (g)-[rev:REVIEWED_BY]->(reviewer)
OPTIONAL MATCH (g)-[:HAS_EXCEPTION]->(ex:Exception)
WHERE rev IS NULL OR rev.validity.expiry < date()
RETURN g.id, o.id AS owner, rev.validity AS lastReview, ex.validity AS exceptionExpiry
```

### 3.4 D4 — AI Security Validation

#### D4.1 Validation strategy and scope
*Grounded in: ATG-VAL-001, ATG-VAL-004, ATG-VAL-009, ATG-VAL-010*

Prioritized paths per use case, joined to the test plan and test result that validate (or don't yet validate) them.

```
MATCH (uc:AIUseCase)-[:SUBJECT_TO]->(tp:TestPlan)
MATCH (p:Path)-[pri:PRIORITIZED_BY]->(tp)
OPTIONAL MATCH (p)-[:TESTED_BY]->(t:Test)
RETURN uc.id, tp.id, p.id AS path, pri.criterion AS priorityCriterion, t.result AS testResult
```

#### D4.2 Threat modeling and path hypotheses
*Grounded in: ATG-VAL-002, ATG-VAL-005, ATG-VAL-006, ATG-VAL-007, ATG-VAL-008*

Threat hypotheses against the AI-native attack surface — prompt/context, RAG/memory, agent orchestration, MCP/tool — and their currently mitigating controls.

```
MATCH (th:Threat)-[:THREATENS]->(target)
WHERE target:PromptAsset OR target:VectorIndex OR target:Agent OR target:MCPServer
OPTIONAL MATCH (th)-[:TRAVERSES]-(p:Path)
OPTIONAL MATCH (p)-[:MITIGATED_BY]->(c:Control)
RETURN th.id, labels(target) AS surfaceType, target.label, p.id AS hypothesizedPath, c.id AS mitigatingControl
```

#### D4.3 Rules of engagement and safety
*Grounded in: ATG-VAL-003*

Executed tests with no authorizing `TestPlan` behind them — a rules-of-engagement gap, not merely a documentation one.

```
MATCH (t:Test)
OPTIONAL MATCH (t)-[:AUTHORIZED_BY]->(tp:TestPlan)
WHERE tp IS NULL
RETURN t.id, t.procedure, t.conditions
```

#### D4.4 Control effectiveness testing
*Grounded in: ATG-VAL-011*

Claimed breakpoints with each linked test and its evidence items and grades — an inventory input for the reviewed operating-effectiveness sufficiency decision, which requires E5-quality evidence and, for Critical controls, representative E5 with path context (Evidence Model §4.4, A.3). It does not decide sufficiency.

```
MATCH (c:Control)-[:BREAKS_PATH]->(p:Path)
OPTIONAL MATCH (c)-[:TESTED_BY]->(t:Test)
OPTIONAL MATCH (t)-[:EVIDENCED_BY]->(ev:EvidenceItem)
RETURN c.id, c.criticality, p.id, t.id AS test, ev.id AS evidenceItem, ev.grade AS evidenceGrade
```

A NULL grade means no linked evidence; it is not an E0 EvidenceItem and not a result state. Sufficiency is a reviewed component decision (Evidence Model §4.13), never a per-item grade threshold.

#### D4.5 Finding quality and closure
*Grounded in: ATG-VAL-012*

Findings closed by decision without a retest of the control that was supposed to remediate them — closure without validation, which RPT-06 and the Evidence Model both treat as a reporting anti-pattern.

```
MATCH (f:Finding)-[:CLOSED_BY]->(d:Decision)
OPTIONAL MATCH (f)-[:MITIGATED_BY]->(c:Control)-[:TESTED_BY]->(retest:Test)
WHERE retest IS NULL
RETURN f.id, d.id AS closureDecision, c.id AS remediatingControl
```

#### D4.6 Validation assurance and independence
*Not directly mapped to an ATG-VAL control (Ontology Specification §12.3) — pattern grounded generically in the `Test`/`Reviewer`/`REVIEWED_BY` vocabulary common to §10.7's Test object and Appendix A/C.*

Tested objects whose review was not performed independently of the person who ran the test — the assurance-independence question D4.6 exists to ask, regardless of which specific control produced the test.

```
MATCH (obj)-[:TESTED_BY]->(t:Test)
OPTIONAL MATCH (t)-[:REVIEWED_BY]->(reviewer:Reviewer)
WHERE reviewer IS NULL OR reviewer.independent = false
RETURN obj.label AS testedObject, t.id AS test, reviewer.id AS reviewerId, coalesce(reviewer.independent, false) AS independenceConfirmed
```

### 3.5 D5 — AI Governance and Assurance

#### D5.1 Strategy, policy and risk appetite
*Grounded in: ATG-GOV-001, ATG-GOV-002*

Use cases whose risk classification requires a control that isn't yet linked to them.

```
MATCH (uc:AIUseCase)-[:CLASSIFIED_AS]->(ra:RiskAppetite)
MATCH (ra)-[:REQUIRES]->(c:Control)
WHERE NOT (uc)-[:SUBJECT_TO]->(c)
RETURN uc.id, ra.label AS riskTier, c.id AS missingRequiredControl
```

#### D5.2 Use-case intake and tiering
*Grounded in: ATG-GOV-004, ATG-GOV-005*

Use cases affecting a stakeholder through a consequence that has no recorded safeguard.

```
MATCH (uc:AIUseCase)-[:REQUIRES]->(cons:Consequence)-[:AFFECTS]->(s:AffectedStakeholder)
OPTIONAL MATCH (cons)-[:MITIGATED_BY]->(sg:Safeguard)
WHERE sg IS NULL
RETURN uc.id, s.id AS affectedStakeholder, cons.label AS unmitigatedConsequence
```

#### D5.3 Decision rights and accountability
*Grounded in: ATG-GOV-003, ATG-GOV-008*

Material change events deployed without a governance decision approving them.

```
MATCH (ce:ChangeEvent)-[:TRIGGERS]->(uc:AIUseCase)
OPTIONAL MATCH (ce)-[:APPROVED_BY]->(d:Decision)
WHERE d IS NULL
RETURN ce.id, uc.id AS affectedUseCase, ce.validity AS changeDate
```

#### D5.4 Applicability and obligations
*Grounded in: ATG-GOV-006, ATG-GOV-007, ATG-GOV-010*

Use-case-to-obligation mapping by jurisdiction, with the evidence grade behind each applicability determination — a mapping, per RPT-07 and MAPS_TO's own constraint, that is never itself a compliance claim.

```
MATCH (uc:AIUseCase)-[:SUBJECT_TO]->(ob:Obligation)-[:MAPS_TO]->(j:Jurisdiction)
OPTIONAL MATCH (ob)-[:EVIDENCED_BY]->(ev:EvidenceItem)
RETURN uc.id, j.label AS jurisdiction, ob.id AS obligation, ev.id AS evidenceItem, ev.grade AS applicabilityEvidenceGrade
```

A NULL grade means no linked evidence; it is not an E0 EvidenceItem and not a result state. Sufficiency is a reviewed component decision (Evidence Model §4.13), never a per-item grade threshold.

#### D5.5 Exceptions and risk acceptance
*Grounded in: ATG-GOV-009*

Exceptions approaching expiry with no compensating control behind them.

```
MATCH (obj)-[:HAS_EXCEPTION]->(ex:Exception)
WHERE ex.validity.expiry < date() + duration('P30D')
OPTIONAL MATCH (ex)-[:MITIGATED_BY]->(comp:Control)
RETURN obj.label, ex.id, ex.validity AS expiry, comp.id AS compensatingControl
```

#### D5.6 Assurance, reporting and literacy
*Grounded in: ATG-GOV-011, ATG-GOV-012*

Actors authorized for a role-gated action without the training that role requires.

```
MATCH (a:Actor)-[:ASSUMES_ROLE]->(r:Role)-[:REQUIRES]->(tr:Training)
WHERE NOT (a)-[:COMPLETED_BY]->(tr)
RETURN a.id, r.label AS role, tr.id AS missingTraining
```

### 3.6 D6 — Operational Resilience

#### D6.1 Observability and attribution
*Grounded in: ATG-RES-001, ATG-RES-002*

Reconstructing the actor accountable for a given outcome through the agent that triggered it.

```
MATCH (outcome:Outcome)<-[:AFFECTS]-(action:Action)<-[:TRIGGERS_ACTION]-(agent:Agent)
MATCH (agent)-[:ACTS_FOR]->(actor:Actor)
OPTIONAL MATCH (action)-[:EVIDENCED_BY]->(ev:EvidenceItem)
RETURN outcome.id, action.id, agent.id, actor.id AS accountableActor, ev.id AS attributionEvidence
```

#### D6.2 Detection and triage
*Grounded in: ATG-RES-003, ATG-RES-004, ATG-RES-005*

Detection-to-incident-to-triage chain and current escalation state, in one traversal.

```
MATCH (d:Detection)-[:TRIGGERS]->(i:Incident)
MATCH (i)-[:TRIAGED_BY]->(r:Responder)
OPTIONAL MATCH (i)-[:ESCALATED_TO]->(authority)
RETURN d.id, i.id, i.classification AS severity, r.id AS responder, authority.label AS escalatedTo
```

#### D6.3 Containment and kill mechanisms
*Grounded in: ATG-RES-006, ATG-RES-007, ATG-RES-008*

Whether a containment action reached every dependent identity and queued unit of work, not just the agent named in the incident.

```
MATCH (i:Incident)-[:CONTAINED_BY]->(action)
MATCH (agent:Agent)-[:DISABLED_BY|PAUSED_BY]->(action)
OPTIONAL MATCH (agent)-[:AUTHENTICATES_AS]->(id:Identity)-[:REVOKED_BY]->(rev)
OPTIONAL MATCH (agent)-[:INVOKES]->(q:Queue)
RETURN i.id, agent.id, rev IS NOT NULL AS identityRevoked, q.id AS queuedWorkPendingReview
```

#### D6.4 Recovery, rollback and compensation
*Grounded in: ATG-RES-009, ATG-RES-010*

Technical restoration events not yet matched to a validated business recovery plan — a gap D6.4 is specifically built to surface, since restoring a configuration is not the same as restoring the business.

```
MATCH (cfg:Configuration)-[:RESTORED_BY]->(action)
OPTIONAL MATCH (ba:BusinessAction)-[:RECOVERED_BY]->(rp:RecoveryPlan {relatedRestoration: action.id})
OPTIONAL MATCH (ba)-[:COMPENSATED_BY]->(comp)
RETURN cfg.id, action.id AS technicalRestoration, rp.id AS businessRecoveryPlan, comp.id AS compensatingAction
```

#### D6.5 Incident reconstruction and evidence
*Grounded in: ATG-RES-011*

Assembling the full evidence trail and graph snapshot behind a single incident, for post-incident reconstruction.

```
MATCH (i:Incident)-[:EVIDENCED_BY]->(ev:EvidenceItem)
OPTIONAL MATCH (i)-[:OBSERVED_BY]->(source)
OPTIONAL MATCH (gs:GraphSnapshot {relatedIncident: i.id})
RETURN i.id, collect(DISTINCT ev.id) AS evidenceItems, collect(DISTINCT source.label) AS observationSources, gs.id AS snapshot
```

#### D6.6 Exercises, learning and resilience governance
*Grounded in: ATG-RES-012*

Resilience-exercise findings that haven't yet driven a control change — an exercise that surfaces the same gap twice without one is the anti-pattern D6.6 is meant to catch.

```
MATCH (ex:Exercise)-[:TESTED_BY]->(scenario:IncidentScenario)
MATCH (ex)-[:HAS_FINDING]->(f:Finding)
OPTIONAL MATCH (f)-[:MITIGATED_BY]->(c:Control)
WHERE c IS NULL
RETURN ex.id, scenario.id, f.id AS openFinding
```


### 3.7 Cross-cutting patterns

These don't belong to one capability — they're the questions that recur across all six domains and appear repeatedly in the Reporting Standard and Assessor Handbook.

#### 3.7.1 Linked-evidence inventory for applicable controls
Applicable controls with no linked evidence — an inventory for review, never a pass or a zero. Absence of linked evidence is not itself UNKNOWN: the result state comes from the reviewed control assessment (Scoring Framework §1.5; Evidence Model §0.5, §4.13).

```
MATCH (c:Control)
WHERE c.applicability = 'Applicable'
OPTIONAL MATCH (c)-[:EVIDENCED_BY]->(ev:EvidenceItem)
WITH c, count(ev) AS evidenceCount
WHERE evidenceCount = 0
RETURN c.id, c.criticality, evidenceCount
```

#### 3.7.2 Critical and Systemic control linked-test-result inventory
Every Critical and Systemic control with each linked test and its recorded result — an inventory input for the critical-control disclosure that RPT-03 requires before, or alongside, any aggregate score. It lists linked test results only; it does not determine any control conclusion.

```
MATCH (c:Control)
WHERE c.criticality IN ['Critical', 'Systemic']
OPTIONAL MATCH (c)-[:TESTED_BY]->(t:Test)
RETURN c.id, c.criticality, t.id AS test, t.result AS testResult
ORDER BY c.criticality, c.id
```

A `Test.result` is not a ControlConclusionState. This query does not decide whether a control is `Verified Effective` or holds any other conclusion: the reviewed control conclusion comes from the control-assessment process governed by Scoring Framework §1.5 and cannot be derived from one Test result. `testResult` is NULL where the control has no linked test result. Absence of a value is not itself a canonical state, so NULL is never replaced with `Not Tested`, `UNKNOWN` or any other canonical state.

#### 3.7.3 Material path construction, end to end
A generic path traversal joined to its boundary crossings and candidate breakpoints — the pattern behind every domain-specific path query above.

```
MATCH (p:Path)-[:TRAVERSES]->(step)
OPTIONAL MATCH (p)-[:CROSSES]->(b:Boundary)
OPTIONAL MATCH (p)-[:BREAKS_PATH]-(c:Control)
WITH p, collect(DISTINCT step) AS steps, collect(DISTINCT b.boundaryClass) AS boundariesCrossed, collect(DISTINCT c.id) AS candidateBreakpoints
RETURN p.id, p.state, size(steps) AS stepCount, boundariesCrossed, candidateBreakpoints
ORDER BY size(boundariesCrossed) DESC
```

#### 3.7.4 Critical dependency and concentration analysis
Providers on which more than one system depends — the systemic-risk view ATG-TRU-007 asks for, generalized beyond Trust and Privilege Paths controls alone.

```
MATCH (p:Provider)<-[:DEPENDS_ON]-(system)
WITH p, count(DISTINCT system) AS dependentSystems
WHERE dependentSystems > 1
OPTIONAL MATCH (p)-[:SUBJECT_TO]->(c:Control)
RETURN p.id, dependentSystems, collect(DISTINCT c.id) AS governingControls
ORDER BY dependentSystems DESC
```

#### 3.7.5 Control criticality × linked test-result inventory
Counts of controls by criticality against each linked test result — an inventory input for Reporting Standard §3.8's critical-control view. It is not a control result-state matrix.

```
MATCH (c:Control)
OPTIONAL MATCH (c)-[:TESTED_BY]->(t:Test)
RETURN c.criticality, t.result AS testResult, count(DISTINCT c) AS controlCount
ORDER BY c.criticality, testResult
```

A control with several linked tests is counted once under each distinct test result. The NULL `testResult` group counts controls with no linked test result; it is reported as absent, never as `Not Tested`, `UNKNOWN` or any other canonical state. The critical-control view's verified, failed, UNKNOWN and Not Tested populations are assessment/reporting populations governed by the Scoring Framework and Reporting Standard; they are not `Test.result` values and are not all ControlConclusionState values. This query provides linked test-result inventory only. Control conclusions are reviewed under Scoring Framework §1.5, while scorecard populations are derived under the applicable scoring/reporting rules.

#### 3.7.6 Supersession and version lineage
Any object's full prior-version chain — the traceability SUPERSEDES exists to guarantee never gets silently overwritten (RPT-10, ONT-INV-15).

```
MATCH (current)-[:SUPERSEDES*1..]->(historical)
WITH current, collect(historical.id) AS priorVersions
RETURN current.id, current.version, priorVersions
ORDER BY size(priorVersions) DESC
```

#### 3.7.7 Maturity-capability linked-evidence inventory
Controls mapped to one maturity capability with each linked evidence item and its grade — an input to the reviewed, level-specific evidence expectations in the Maturity Model. Per-item grades are not compared with a floor here — parameterize `$capability` per capability ID.

```
MATCH (c:Control)
WHERE c.maturityCapability = $capability
OPTIONAL MATCH (c)-[:EVIDENCED_BY]->(ev:EvidenceItem)
RETURN c.id, c.maturityCapability, ev.id AS evidenceItem, ev.grade AS evidenceGrade
```

A NULL grade means no linked evidence; it is not an E0 EvidenceItem and not a result state. Sufficiency is a reviewed component decision (Evidence Model §4.13), never a per-item grade threshold.

#### 3.7.8 Boundary-crossing inventory
Every boundary class actually crossed by a material path, and how many paths cross each — the population behind Reporting Standard §6.9's graph-redaction and boundary disclosure requirements.

```
MATCH (p:Path)-[:CROSSES]->(b:Boundary)
RETURN b.boundaryClass, count(DISTINCT p) AS pathsCrossing
ORDER BY pathsCrossing DESC
```

#### 3.7.9 Authority amplification, graph-wide
Every point where an identity's authorized scope is amplified by an intermediate object — the generic form of D3.4's capability-specific query, run without restricting to workflows.

```
MATCH (i:Identity)-[:AUTHORIZED_TO]->(scope1)
MATCH (i)-[:INVOKES|DELEGATES_TO]->(intermediate)-[amp:AMPLIFIES]->(scope2)
RETURN i.id, intermediate.label, amp.scope AS amplificationDimension, scope1.label AS initialScope, scope2.label AS amplifiedScope
```

## 4. Source and derivation record

Everything in this document is reproduced from, or mechanically derived from, two existing canonical artifacts — nothing here originates independently of them.

| **Section** | **Source** | **How it was produced** |
| --- | --- | --- |
| §1.1-§1.2 Common properties | Ontology Specification §2.2, §2.3 | Reproduced verbatim. |
| §1.3 Entity-specific fields | Ontology Specification §5.1, §6.2, §9.2, §10.2, §10.3, §10.7 | Reproduced verbatim, collected into one table. |
| §1.4 Node-label registry | Ontology Specification, Appendix A | Reproduced verbatim (129 entries). |
| §1.5 Relationship-type registry | Ontology Specification, Appendix C | Reproduced verbatim (96 entries), plus the direction rule from §8.2. |
| §1.6 State/enumeration domains | Ontology Specification §9.3, §10.5, §10.6, §11.1-§11.3, Appendix D | Reproduced verbatim. |
| §1.7 Capability map | Ontology Specification §12.2 | Reproduced verbatim (36 entries). |
| §2 Control-to-graph cross-reference | Master Control Library, all 72 control records | Machine-extracted directly from each control's `Graph nodes` / `Graph relationships` / `Primary maturity mapping` / `Default criticality` fields — not retyped by hand, so it cannot silently drift from the canonical text. |
| §3 Illustrative queries | Derived | Each query's node and relationship vocabulary is drawn only from §2's cross-reference for the control(s) cited; the specific traversal pattern (which fields connect to which) is this document's own illustrative composition, consistent with — but not dictated by — the relationship registry's stated meanings and directions. |

## 5. Change control for this document

As a Phase 2 companion rather than one of the 12 core methodology artifacts, this document follows a lighter revision process: changes that only add illustrative queries or schema commentary do not require the change-proposal process in Governance & Certification Model §2.2, but any change that would alter which entity, relationship, state or control a query cites must be reviewed against §2's cross-reference for continued accuracy, and any future revision to the Ontology Specification's Appendix A/B/C or to the Master Control Library's 72 control records requires this document to be regenerated from the updated source, not hand-patched.

| **Field** | **Value** |
| --- | --- |
| Status | Phase 2, non-normative, initial publication |
| Depends on | Ontology Specification v3.0.0 (Artifact #12), Master Control Library v2.0.0 (Artifact #5) |
| Conformance weight | None — see §0 |
| Independent review | Not yet performed; recommended before this document is treated as a stable reference by implementers |
| Employer / IP / confidentiality review | Pending, same methodology-wide gate as Artifacts #1-#12 |

AI Trust Graph Reference Graph Schema and Illustrative Query Library | Phase 2 companion, v0.4.0 | Non-normative
