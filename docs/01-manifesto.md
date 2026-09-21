[← Back to methodology index](../README.md)

# AI Trust Graph — Manifesto

*A graph-driven, evidence-based doctrine for governing trust, authority, exposure, security and resilience across enterprise AI ecosystems*

> **CORE PROPOSITION** AI risk is not located only inside a model. It emerges through relationships among identities, agents, tools, data, prompts, models, infrastructure, providers, controls and business actions. These relationships must be made visible, evidenced and governed as a connected system.

| **Document** | AI Trust Graph Manifesto |
| --- | --- |
| **Version** | 1.0 |
| **Status** | Public-release candidate |
| **Author** | Siva Sethumadhavan |
| **Publication boundary** | Methodology only. ExposureGraph product materials excluded. |

**Publication notice**

Before public release, complete employer, confidentiality, trademark, copyright, license and third-party reference review. Remove proprietary branding, client information and any material not owned or licensed for publication.

# 1. Purpose of this manifesto

This manifesto establishes the philosophy, public positioning and non-negotiable principles of the AI Trust Graph Methodology. It is not the detailed control catalog, scoring engine, assessor handbook or software specification. Its role is to create a stable conceptual center for those later artifacts.

> **METHODOLOGY BOUNDARY** AI Trust Graph defines how an enterprise AI ecosystem is represented, reasoned about and assessed. ExposureGraph may operationalize parts of the methodology as a platform, but its product architecture, algorithms, roadmap and implementation details remain outside this public document.

## 1.1 Intended audiences

Chief information security officers, technology risk leaders and AI governance executives.

Enterprise, cloud, security, data, platform and AI architects.

AI assurance, internal audit, compliance and independent assessment professionals.

Developers, researchers and community contributors building compatible tooling or extensions.

## 1.2 What this manifesto commits to

System-level reasoning rather than model-only review.

Evidence-linked assertions rather than confidence by documentation volume.

Explicit authority boundaries rather than vague human oversight statements.

Path-based security analysis rather than isolated misconfiguration lists.

Transparent uncertainty rather than fabricated completeness.

Human-approved facts and accountable decisions rather than unreviewed automation.

# 2. The problem we are solving

AI systems increasingly combine models with retrieval, memory, identity, APIs, agents, orchestration, software pipelines, cloud services, third parties and business workflows. A risk may begin in one component and become material only through a sequence of relationships. Asset registers, questionnaires and control checklists can describe individual components while still missing the path that connects an input to a privileged or high-impact outcome.

## 2.1 The limits of component-by-component assurance

| **Conventional view** | **Unanswered question** | **Trust-graph response** |
| --- | --- | --- |
| Model inventory | What can this model or agent reach through tools, identities and integrations? | Represent reachability and authority as typed, directed relationships. |
| Policy review | Is the stated policy enforced at each material boundary? | Link controls and current evidence to nodes, edges and paths. |
| Point-in-time test | What changed after deployment? | Track lifecycle, evidence currency, graph drift and reassessment triggers. |
| Finding list | Which remediation breaks the greatest number of material paths? | Locate control breakpoints and compare residual paths. |
| Human oversight statement | Which actions require approval, and is approval technically enforced? | Model approval, delegation, action scope, reversibility and override evidence. |

## 2.2 The core risk thesis

The methodology treats enterprise AI risk as a property of interconnected authority, influence and dependency. A model response alone may be harmless. The same response can become high impact when an agent authenticates through a privileged identity, retrieves restricted data, invokes a write-capable tool, crosses a trust boundary or initiates an irreversible action.

# 3. Our declaration

**1. AI security is a systems problem**

We assess the complete AI-enabled operating environment, not only the foundation model or application interface.

**2. Trust must be represented**

Trust grants, inherited privileges, delegation, dependencies and implicit assumptions must become explicit and reviewable.

**3. Authority must be bounded**

Every agent, identity, tool and automation must have a defined action scope, approval model, lifetime and revocation path.

**4. Evidence must carry weight**

Assertions require provenance, confidence, currency and validation state. Unknown remains Unknown.

**5. Paths matter more than isolated defects**

Material risk is often created by combinations. Analysis must identify start conditions, traversal steps, boundary crossings, targets and controls.

**6. Controls must break paths**

A control is valuable when it verifiably prevents, detects, constrains or contains a material path.

**7. Autonomy requires containment**

Higher autonomy and actionability require stronger identity isolation, approvals, telemetry, rollback and kill-switch capabilities.

**8. Human judgment remains accountable**

AI may propose relationships and findings, but material facts, risk acceptance and high-impact decisions require accountable human approval.

**9. Transparency outranks false precision**

Scores and diagrams must expose assumptions, exclusions, stale evidence and low-confidence relationships.

**10. The methodology complements standards**

The framework links architecture and evidence to applicable standards. It does not replace legal analysis, certification or mandated sector requirements.

# 4. The AI Trust Graph model

The canonical representation is a directed, labelled multigraph. Nodes represent assets or assessment objects. Edges represent relationships such as access, authorization, invocation, retrieval, data movement, dependency, deployment, trust and control coverage. Every material node and edge should carry evidence references and confidence.

| **Element** | **Methodological meaning** | **Minimum discipline** |
| --- | --- | --- |
| Node | A typed asset, actor, identity, AI component, data resource, control, evidence object or finding. | Stable identifier, type, environment, criticality, ownership where known, evidence, confidence and status. |
| Edge | A directional relationship that can enable access, influence, authority, movement, dependency or control. | Typed endpoints, direction, scope or action, evidence, confidence and relevant conditions. |
| Boundary | A first-class perimeter across which assumptions, ownership, policy or enforcement changes. | Owner, members, ingress and egress relationships, policy, enforcement and evidence. |
| Path | An ordered sequence from a plausible start condition to a material target or outcome. | Preconditions, traversal steps, boundary crossings, controls, evidence, confidence and residual path. |
| Control breakpoint | A control attached to a node, edge or path that constrains material progression. | Design intent, implementation status, operating evidence, test result and residual risk. |
| Evidence | A source object supporting or disputing an assertion. | Source, owner, date, scope, integrity, freshness and quality classification. |

> **INVARIANT** A topological connection is not automatically an exploitable path. Required permissions, protocols, state and preconditions must be evidenced or explicitly marked Unknown.

# 5. Trust and authority

## 5.1 Trust is a governed relationship

Trust is not a positive label. It is a conditional relationship by which one entity accepts an identity, assertion, output, dependency, data source, tool, provider or control as sufficient for a defined purpose. Trust must have a basis, scope, owner, lifecycle, evidence and revocation condition.

| **Trust behavior** | **Meaning** |
| --- | --- |
| Grant | Authority or reliance is explicitly established. |
| Delegation | An entity allows another entity to act within a defined scope. |
| Inheritance | Trust or privilege flows through a role, group, workload or dependency. |
| Amplification | A downstream relationship increases reach, privilege, impact or autonomy. |
| Drift | The actual trust relationship changes from the approved or evidenced state. |
| Decay | Confidence reduces as evidence ages or conditions change. |
| Collapse | A critical relationship, control or provider failure invalidates multiple dependent assumptions. |
| Revocation | Trust, identity, access or authority is withdrawn and the effect is verified. |

## 5.2 Authority is more than access

Authority includes the ability to read, retrieve, infer, recommend, approve, invoke, modify, deploy, transact, disclose, delete or otherwise affect a system or stakeholder. The methodology distinguishes access from action, and action from consequence.

Identity used to act.

Resource or data that can be reached.

Tool, API or workflow that can be invoked.

Action class and scope.

Human approval or policy gate.

Degree of reversibility.

Maximum plausible blast radius.

Telemetry, attribution and revocation mechanism.

# 6. The six assessment domains

The public methodology is organized into six connected domains. These are not separate products. They are assessment lenses that populate and reason over the same AI Trust Graph.

| **Domain** | **Purpose** | **Representative outputs** |
| --- | --- | --- |
| 1. Discovery and AIBOM | Establish the measurable AI estate, ownership, dependencies, shadow AI and AI-native bills of materials. | AI asset register, shadow AI register, AIBOM, evidence coverage and unknowns backlog. |
| 2. Trust and CloudHound | Model cloud-native and AI trust relationships, privilege inheritance, boundaries and attacker-relevant paths. | Trust graph, privilege paths, boundary map, high-value target paths and breakpoint candidates. |
| 3. Authority Governance | Define what humans, agents, models, tools and integrations are allowed to access, retrieve, invoke, change or approve. | Authority matrix, action boundary map, approval checkpoints, delegation and revocation design. |
| 4. AI Security Validation | Test whether architecture and controls actually prevent, detect or contain realistic misuse and attack scenarios. | Validation results, control effectiveness, attack-path tests, evidence pack and residual paths. |
| 5. AI Governance and Assurance | Connect ownership, risk tiering, policy, lifecycle decisions, obligations and evidence to the technical system. | Governance model, decision records, applicability matrix, exceptions and assurance trail. |
| 6. Operational Resilience | Prepare for AI failure, compromise, unsafe action and dependency outage. | Containment playbooks, kill-switch tests, rollback evidence, incident scenarios and recovery readiness. |

# 7. Assessment lifecycle

The methodology follows an evidence-led lifecycle. Each phase has an explicit gate. Incomplete evidence does not become assumed effectiveness.

Frame the decision: Define the business decision, scope, systems, jurisdictions, stakeholders, risk appetite and assurance claim.

Discover the estate: Collect authorized evidence, identify assets, owners, providers, identities, data sources and dependencies, and register unknowns.

Construct the graph: Create typed nodes, edges, boundaries and evidence links. Separate observed facts from proposed or inferred relationships.

Classify trust and authority: Record access, action scope, autonomy, approval, reversibility, inherited privilege and material targets.

Analyze paths: Identify plausible paths from start conditions to sensitive data, privileged actions, operational disruption or stakeholder impact.

Validate controls: Test whether controls block, constrain, detect or contain the path. Preserve test conditions and limitations.

Decide and prioritize: Issue evidence-backed findings, risk decisions, breakpoint recommendations and a sequenced remediation plan.

Monitor change: Track evidence freshness, architecture change, trust drift, exceptions, recurring weaknesses and reassessment triggers.

> **RELEASE GATE** An assessment conclusion must state scope, exclusions, evidence quality, unknowns, validation status and the decision it supports. It must not imply certification, legal compliance or complete discovery unless those claims are independently justified.

# 8. Evidence and confidence doctrine

Evidence is a first-class object. The methodology distinguishes existence, design, implementation and operating effectiveness. Policy or interview evidence may support intent or ownership, but cannot by itself demonstrate that a technical control is operating effectively.

| **Evidence tier** | **Definition** | **Permitted conclusion** |
| --- | --- | --- |
| E0 | No evidence. | Unknown. |
| E1 | Inference or uncorroborated signal requiring validation. | Candidate relationship or hypothesis only. |
| E2 | Owner or stakeholder attestation. | Claimed practice, not independently verified. |
| E3 | Approved documentary evidence. | Design or governance intent may be supported. |
| E4 | Corroborated technical evidence. | Implementation may be supported within the observed scope. |
| E5 | Direct, current technical evidence plus representative test or operating record. | Operating effectiveness may be concluded within stated limits. |

## 8.1 Confidence rules

Confidence is attached to the specific assertion, not the document as a whole.

Confidence does not substitute for missing evidence.

AI-generated inferences remain proposed until reviewed.

Stale evidence reduces confidence and may trigger reassessment.

Conflicting evidence is preserved and resolved through an explicit decision record.

Completed analysis runs are versioned so later changes do not rewrite prior findings.

# 9. Control and validation doctrine

The methodology evaluates controls in the context of the graph. Each control should state what it protects, which relationship or path it constrains, what evidence supports it, how it is tested and what residual path remains after intervention.

| **Control question** | **Required answer** |
| --- | --- |
| Which risk or path is addressed? | Named start condition, traversal or target. |
| Where is the control applied? | Specific node, edge, boundary or path. |
| What is the mechanism? | Preventive, detective, responsive, corrective or recovery. |
| What proves design? | Approved requirement, architecture, policy or configuration intent. |
| What proves operation? | Current configuration, telemetry, sample, event or controlled test. |
| What breaks if it fails? | Dependent paths, downstream controls and blast radius. |
| How is it bypassed or degraded? | Known assumptions, exceptions, drift and failure conditions. |
| How is closure verified? | Independent retest with current evidence and recorded residual risk. |

# 10. Security and resilience principles

**Least authority**

Agents, tools and identities receive only the minimum actions, data and duration required.

**Independent enforcement**

Critical constraints are not dependent solely on the model following instructions.

**Approval before consequence**

Irreversible, privileged, regulated or high-impact actions require explicit and technically enforceable approval.

**Complete traceability**

Material prompts, retrievals, tool calls, identity use, outputs, approvals and actions are reconstructable.

**Containment by design**

Systems provide tested mechanisms to disable agents, revoke sessions, isolate workloads, suspend integrations and restrict data.

**Reversible operation**

Where practical, actions support preview, bounded execution, rollback and safe recovery.

**Change-aware assurance**

Material changes in models, prompts, tools, identities, data, providers or pipelines trigger reassessment.

**Safe validation**

Testing is authorized, scoped, non-destructive by default and conducted with rules of engagement and controlled identities.

# 11. Claims we will not make

Credibility requires disciplined boundaries. Public materials, assessments and compatible tools must not overstate what the methodology proves.

A graph is complete merely because data collection completed.

A reachable path is exploitable without evidenced preconditions.

A control is effective because a policy exists or an owner says it is used.

A framework mapping proves legal or regulatory compliance.

A maturity or risk score is objective without transparent rules, evidence and uncertainty.

AI-generated findings are authoritative without human review.

A point-in-time result remains current after material change.

The methodology replaces penetration testing, model evaluation, legal advice, certification or sector-specific assurance.

# 12. Open methodology and protected product boundary

| **Publish in the methodology repository** | **Keep private unless separately approved** |
| --- | --- |
| Manifesto, whitepaper and glossary. | ExposureGraph product requirements, roadmap and architecture. |
| Canonical ontology and public schema. | Proprietary ingestion, inference, ranking and analytics implementations. |
| Domain guides, controls, evidence model and test descriptions. | Client data, production connectors and operational configuration. |
| Maturity and scoring rules selected for transparent public use. | Commercial packaging, pricing, sales strategy and unreleased differentiators. |
| Synthetic examples and sanitized sample assessments. | Employer or client materials, confidential branding and protected third-party content. |
| Contribution, versioning, security and release governance. | Secrets, keys, environments, accounts and non-public vulnerability information. |

> **OPEN-CORE PRINCIPLE** The public methodology should be sufficiently complete for an independent assessor to understand and apply it. The commercial platform may improve scale, automation, analytics and workflow, but must not be required to interpret the public doctrine.

# 13. Methodology governance

AI Trust Graph should evolve through controlled, transparent releases. Changes to core semantics require compatibility and migration consideration because control mappings, examples and tools may depend on them.

Use semantic versions for methodology and ontology releases.

Maintain a changelog with rationale, impact and migration guidance.

Require evidence and review for new node types, edge types, path rules and control mappings.

Separate normative requirements from implementation guidance and examples.

Record known limitations, disputed concepts and deferred decisions.

Use public issues and contribution guidance, with named maintainers and conflict-of-interest expectations.

Establish a security disclosure route before accepting code or live connectors.

# 14. What good looks like

The methodology succeeds when it improves decisions, not when it produces the largest graph or the highest document count.

| **Outcome** | **Evidence of value** |
| --- | --- |
| Visibility | Material AI assets, owners, identities, dependencies and unknowns are explicit. |
| Decision quality | Leaders understand which paths matter and why. |
| Control leverage | Remediation is prioritized at breakpoints that reduce multiple exposures. |
| Accountability | Trust grants, authority, approvals, exceptions and acceptance decisions have owners. |
| Assurance quality | Findings are traceable to current evidence, scope and test results. |
| Resilience | High-impact AI actions can be observed, contained, revoked and recovered. |
| Interoperability | The methodology can map to relevant standards without becoming a duplicate checklist. |
| Integrity | Uncertainty, exclusions, stale evidence and limitations remain visible. |

# 15. Community and practitioner commitment

Practitioners adopting AI Trust Graph commit to use the methodology responsibly, disclose limitations, preserve evidence integrity, protect confidential information, avoid unsupported claims and place accountable human judgment over automated certainty.

> **THE COMMITMENT** Make the AI estate visible. Make trust explicit. Bound authority. Validate controls. Preserve evidence. Expose uncertainty. Design for containment. Enable defensible decisions.

# Appendix A. Canonical vocabulary

| **Term** | **Working definition** |
| --- | --- |
| AI asset | Any model, application, agent, prompt, retriever, vector store, model endpoint, tool, MCP service, data source, identity, pipeline, runtime or provider dependency that influences AI behavior or impact. |
| Trust grant | An explicit or implicit basis on which one entity accepts another entity, assertion, output or dependency for a defined purpose. |
| Authority | The capacity to access, retrieve, infer, recommend, approve, invoke, modify, deploy, transact, disclose or delete. |
| Influence | The ability to affect behavior or output without necessarily possessing formal access or execution authority. |
| Reachability | The existence of a technically and contextually plausible route between a start condition and a target. |
| Actionability | The degree to which an entity can cause a state change or consequential outcome. |
| Exposure path | An ordered sequence of evidenced or explicitly uncertain relationships by which compromise, misuse or failure can reach a material target. |
| Material path | A path whose plausible outcome can exceed a defined impact, risk appetite or regulatory threshold. |
| Control breakpoint | A node, edge or boundary at which an effective control can stop, constrain, detect or contain a material path. |
| Graph drift | A material difference between the approved or previously observed graph and the current state. |
| Residual path | The remaining route and conditions after a proposed or implemented control intervention. |
| Evidence currency | The degree to which evidence remains timely and representative of the assessed state. |

# Appendix B. v1.0 publication acceptance criteria

| **Gate** | **Acceptance criterion** |
| --- | --- |
| Content integrity | Manifesto aligns with the whitepaper, ontology, domain guides, control library, evidence model, maturity model and assessor handbook. |
| Public boundary | No ExposureGraph product architecture, confidential client information or unapproved employer content is included. |
| Legal and IP review | Ownership, employer obligations, third-party references, trademarks and license are approved. |
| Terminology | Canonical terms and identifiers are consistent across all repository artifacts. |
| Traceability | Examples and controls use valid ontology classes, edges, evidence states and path semantics. |
| Usability | An independent reader can understand the problem, principles, domains, lifecycle, limitations and intended use. |
| Quality | No unsupported claims, fabricated mappings, broken references or unresolved placeholders remain. |
| Governance | Repository includes license, code of conduct, contribution guide, security policy, changelog and release process. |

# Appendix C. Source and derivation note

This manifesto consolidates concepts already present across the author's AI Trust Graph methodology, trust graph ontology, AI security assessment and trust validation toolkit, AI Trust Governance framework, CloudHound methodology, AIBOM and graph-based architecture review materials. It intentionally avoids ExposureGraph product implementation content. Before public release, every source must be reviewed for ownership, confidentiality, licensing and permitted reuse.

> **EDITORIAL REDACTION — PUBLICATION-BOUNDARY COMPLIANCE.** The source draft named specific internal, pre-existing working files (employer/consulting-style methodology drafts, an internal ontology file, an internal toolkit spreadsheet, and internal product-methodology documents) as "internal consolidation sources reviewed for this draft." Per this Manifesto's own rules in §12 ("Open methodology and protected product boundary") and Appendix B ("Public boundary: No ExposureGraph product architecture, confidential client information or unapproved employer content is included"), the literal filenames of unreleased internal source material must not appear in a public repository — doing so would itself be a publication-boundary violation and could reference material whose ownership, employer status, or licensing has not been cleared. This list has therefore been removed from the public artifact rather than silently left in place. **This is a redaction of internal file references for publication-boundary compliance, not a change to methodology semantics, terminology, or doctrine — no concept, principle, or declaration in this Manifesto has been altered.** See `REVIEW_FINDINGS.md`, finding R-01, for the full rationale, and confirm with legal/employer/IP review (Appendix B) before final release whether any derivation acknowledgment is appropriate in its place.

---

AI Trust Graph Manifesto  |  Version 1.0  |  September 2026
