[← Back to methodology index](../README.md)

# AI Trust Graph — Evidence Model

*Version 1.0 | Provenance, quality, sufficiency, confidence, lineage, conflict and graph traceability*

> **PURPOSE** Define what counts as evidence, what each evidence grade can support, how evidence is governed through its lifecycle, and how every material AI Trust Graph assertion remains defensible and reviewable.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Depends on | Manifesto v1.0; Core Conceptual Model v1.1; Maturity Model v1.0; Scoring Framework v1.0; Master Control Library v1.0 |
| Canonical scale | E0 No evidence through E5 direct current technical evidence with representative test or operating record |
| Primary objects | Evidence Item; Assertion; Source; Collection; Transformation; Review; Conflict; Decision; Retention Event |
| Product boundary | ExposureGraph implementation, connectors, scoring algorithms and commercial logic excluded |

# 0.1  Authority, scope and publication boundary

This model is the authoritative public standard for evidence semantics within AI Trust Graph assessments. It does not authorize collection, waive confidentiality, create legal privilege, prove compliance or replace professional judgment.

Evidence handling must follow applicable law, contract, organizational policy, assessment authorization and the sensitivity of the source.

> **PUBLICATION SAFEGUARD** Complete employer, confidentiality, copyright, privacy, legal-hold, licence and intellectual-property review before public release.

# 0.2  Position in the artifact stack

The Core Conceptual Model defines evidence as a versioned source object that supports, disputes or bounds an assertion. The Maturity Model sets evidence floors. The Scoring Framework caps conclusions by evidence support. The Master Control Library defines evidence expectations for controls.

This artifact consolidates those dependencies into one canonical evidence discipline for the future Assessment Methodology and Assessor Handbook.

> **DEPENDENCY CHAIN** Manifesto -> Core Conceptual Model -> Maturity -> Scoring -> Controls -> Evidence Model -> Assessment Methodology -> Assessor Handbook

# 0.3  Evidence model thesis

Evidence is not a document count. It is a governed relationship between a source and a precisely stated assertion within defined scope, time, conditions and limitations.

The model separates evidence grade, evidence quality, assertion confidence, coverage and reviewer decision because combining them creates false certainty.

> **CENTRAL THESIS** An assertion is defensible only when the evidence chain explains what was observed, how it was obtained, what it supports, what it does not support, and who approved the conclusion.

# 0.4  Evidence invariants

The following rules govern every evidence object and derived conclusion.

| **ID** | **Invariant** |
| --- | --- |
| EVI-01 | Evidence grade describes support, not whether the observed state is good or bad. |
| EVI-02 | Documentation alone cannot prove technical operating effectiveness. |
| EVI-03 | Evidence supports only the stated scope, period and conditions. |
| EVI-04 | UNKNOWN must not be converted to zero, pass, fail or Not Applicable. |
| EVI-05 | Inference cannot overwrite approved fact; it creates a proposed version. |
| EVI-06 | Conflicting evidence remains visible until resolved or bounded. |
| EVI-07 | Screenshots require source, date, scope and integrity context. |
| EVI-08 | Collection completion does not prove estate completeness. |
| EVI-09 | Evidence age is risk-based and change-triggered, not universally fixed. |
| EVI-10 | Every material conclusion identifies evidence, confidence, procedure and limitations. |

# 0.5  Normative states

UNKNOWN, Not Assessed, Not Tested, Not Applicable and Inconclusive are distinct states. They do not become numeric evidence grades or control scores.

UNKNOWN remains visible until sufficient evidence and accountable review resolve the material assertion.

| **State** | **Meaning** |
| --- | --- |
| UNKNOWN | Evidence is absent, insufficient or materially conflicting. |
| Not Assessed | No assessment activity was performed for the item. |
| Not Tested | Testing required for a stronger conclusion was not performed. |
| Not Applicable | Approved rationale establishes that the criterion does not apply. |
| Inconclusive | Activity occurred but cannot support a determinate conclusion. |
| Provisional | Conclusion awaits required review or evidence closure. |
| Final within scope | Review and evidence gates are complete for declared scope. |

# 0.6  Roles and separation of duties

Evidence governance distinguishes source owner, collector, custodian, assessor, reviewer, approver, legal/privacy adviser and decision owner. One person may hold multiple roles only where independence requirements permit and conflicts are disclosed.

| **Role** | **Accountability** |
| --- | --- |
| Source owner | Authoritative ownership and lawful availability of source data. |
| Collector | Authorized acquisition and initial collection record. |
| Custodian | Protection, retention, access and integrity of evidence. |
| Assessor | Interpretation against criteria and procedure. |
| Reviewer | Challenge of relevance, sufficiency, conflict and conclusion. |
| Decision owner | Accepts disposition, conditions and residual uncertainty. |

# 0.7  Evidence object metamodel

Every evidence item has stable identity, source, collection context, scope, period, integrity reference, transformation history, sensitivity, retention, review status, grade, limitations and linked assertions.

| **Field family** | **Minimum elements** |
| --- | --- |
| Identity | evidence_id, title, type, source_system, owner. |
| Context | scope, environment, population, period, version. |
| Acquisition | collector, method, date, authorization, query or procedure. |
| Integrity | hash/signature, original reference, custody and transformation. |
| Quality | grade, relevance, currentness, corroboration, representativeness. |
| Protection | classification, privacy, access, retention, legal hold. |
| Review | reviewer, outcome, conflicts, limitations and supersession. |
| Traceability | supported/disputed assertions, controls, paths, findings and decisions. |

# 0.8  Assertion metamodel

An assertion is a precise proposition about an object, relationship, condition, path, control, finding or decision. It records subject, predicate, object/value, scope, time, conditions, source links, confidence, review status and supersession.

| **Assertion field** | **Requirement** |
| --- | --- |
| Statement | One testable proposition without hidden compound claims. |
| Subject and relation | Canonical graph object and relationship where applicable. |
| Scope | Asset, environment, population, use case and boundary. |
| Temporal context | Observed period, valid time and review trigger. |
| Conditions | Identity, state, configuration, protocol, approval or workflow. |
| Evidence links | Supporting, disputing and qualifying evidence. |
| Confidence | High, Medium, Low or Not rated with rationale. |
| Review state | Candidate, approved, rejected, modified or superseded. |

# 0.9  Evidence relationships

Evidence may support, dispute, qualify, supersede, derive from, corroborate or duplicate another assertion or evidence item. Relationship type and direction must be explicit.

| **Relationship** | **Meaning** |
| --- | --- |
| SUPPORTS | Evidence provides relevant support for the assertion. |
| DISPUTES | Evidence contradicts a material part of the assertion. |
| QUALIFIES | Evidence narrows scope, period, conditions or confidence. |
| CORROBORATES | Independent evidence supports the same material assertion. |
| DERIVED_FROM | Evidence or assertion results from a recorded transformation. |
| SUPERSEDES | New approved state replaces a prior current state without erasing history. |
| DUPLICATES | Items represent the same source content or collection event. |

# 0.10  No-hallucination and AI inference boundary

AI-generated extraction, classification, summarization and hypothesis generation may accelerate review, but cannot silently become approved fact. Model output creates a proposed assertion with source traceability and review state.

# 0.11  Collection authority and minimization

Collection must be authorized, proportionate to the assessment question and limited to necessary data. Credentials, secrets, personal data, client information and privileged material require additional controls and role validation.

# 0.12  Evidence architecture map

The evidence lifecycle proceeds from question and assertion design through source selection, authorized collection, integrity capture, normalization, grading, corroboration, review, decision, retention, expiry and supersession.

> **EVIDENCE CHAIN** Decision question -> Assertion -> Source -> Collection -> Integrity -> Transformation -> Grade -> Corroboration -> Confidence -> Review -> Decision -> Retention or supersession

# 1.1  E0 No evidence

No source is available or the supplied item cannot be linked to the assertion.

The only defensible conclusion is UNKNOWN or Not Tested. E0 is not evidence that the control is absent.

| **Dimension** | **Required interpretation** |
| --- | --- |
| Source | Identify origin and authoritative context. |
| Assertion | State precisely what the grade supports. |
| Scope | Name assets, environment, population and period. |
| Limit | Do not generalize beyond the observed conditions. |
| Review | Record assessor and reviewer decision. |
| Upgrade path | Identify corroboration or testing needed for stronger support. |

# 1.2  E1 Inference or uncorroborated signal

A hypothesis is derived from incomplete, indirect, automated or unverified information.

E1 can prioritize investigation and create candidate graph assertions, but cannot establish implementation or operating effectiveness.

| **Dimension** | **Required interpretation** |
| --- | --- |
| Source | Identify origin and authoritative context. |
| Assertion | State precisely what the grade supports. |
| Scope | Name assets, environment, population and period. |
| Limit | Do not generalize beyond the observed conditions. |
| Review | Record assessor and reviewer decision. |
| Upgrade path | Identify corroboration or testing needed for stronger support. |

# 1.3  E2 Attestation

An accountable person states that a condition or practice exists.

E2 supports claimed practice and context. It is vulnerable to memory, interpretation, incentives and incomplete visibility and therefore needs corroboration for material technical claims.

| **Dimension** | **Required interpretation** |
| --- | --- |
| Source | Identify origin and authoritative context. |
| Assertion | State precisely what the grade supports. |
| Scope | Name assets, environment, population and period. |
| Limit | Do not generalize beyond the observed conditions. |
| Review | Record assessor and reviewer decision. |
| Upgrade path | Identify corroboration or testing needed for stronger support. |

# 1.4  E3 Approved documentary evidence

A governed document records approved design, policy, architecture, procedure, contract or decision.

E3 can support design intent and governance state. It does not alone prove actual configuration, runtime behavior or sustained operation.

| **Dimension** | **Required interpretation** |
| --- | --- |
| Source | Identify origin and authoritative context. |
| Assertion | State precisely what the grade supports. |
| Scope | Name assets, environment, population and period. |
| Limit | Do not generalize beyond the observed conditions. |
| Review | Record assessor and reviewer decision. |
| Upgrade path | Identify corroboration or testing needed for stronger support. |

# 1.5  E4 Corroborated technical evidence

Technical evidence from authoritative sources is supported by an independent source, consistent observation or reproducible inspection.

E4 can support implementation or operation within observed scope when current, relevant and representative.

| **Dimension** | **Required interpretation** |
| --- | --- |
| Source | Identify origin and authoritative context. |
| Assertion | State precisely what the grade supports. |
| Scope | Name assets, environment, population and period. |
| Limit | Do not generalize beyond the observed conditions. |
| Review | Record assessor and reviewer decision. |
| Upgrade path | Identify corroboration or testing needed for stronger support. |

# 1.6  E5 Direct technical and representative evidence

Current direct technical evidence is combined with a representative test or operating record that demonstrates the claimed behavior under stated conditions.

E5 may support verified effectiveness or adaptive operation, but only for the tested scope, period and conditions.

| **Dimension** | **Required interpretation** |
| --- | --- |
| Source | Identify origin and authoritative context. |
| Assertion | State precisely what the grade supports. |
| Scope | Name assets, environment, population and period. |
| Limit | Do not generalize beyond the observed conditions. |
| Review | Record assessor and reviewer decision. |
| Upgrade path | Identify corroboration or testing needed for stronger support. |

# 1.7  Grade assignment decision tree

Grade the evidence item itself before using it to support a conclusion. The same source may support different assertions at different strength depending on relevance and scope.

| **Question** | **Outcome** |
| --- | --- |
| No usable source? | E0. |
| Indirect or machine-proposed signal only? | E1. |
| Human claim without independent corroboration? | E2. |
| Approved governed document? | E3. |
| Technical source corroborated independently? | E4. |
| Direct current technical source plus representative test/operating record? | E5. |

# 1.8  Grade does not equal truth

A high grade can confirm an adverse state, and a low grade can weakly suggest a favorable state. Grade measures evidentiary support, not desirability, safety or compliance.

> **ANTI-ERROR RULE** Never add evidence grade to control effectiveness, severity, maturity or risk as if they were the same quantity.

# 1.9  Evidence bundles

An evidence bundle groups complementary items supporting one material assertion while retaining each item's identity, grade and limitations. The bundle does not automatically inherit the highest member grade.

Bundle review evaluates independence, consistency, scope overlap, common-source dependence and whether the combined items close material gaps.

| **Bundle pattern** | **Interpretation** |
| --- | --- |
| E3 design + E4 configuration | Can support designed and implemented status within scope. |
| E3 procedure + E5 test | Can support operating effectiveness if test is representative. |
| Multiple E2 attestations | May improve context but remain subject to common bias. |
| Two exports from same backend | May not be independent corroboration. |
| E4 point-in-time + historical operating records | Can support a bounded operating-period conclusion. |
| Conflicting E4 and E5 | Requires conflict analysis; do not average grades. |

# 1.10  Evidence-grade upgrade and downgrade

Grades may change when provenance, corroboration, test representativeness or integrity is added or disproved. Grade changes create a new reviewed version and retain the prior decision trail.

| **Change** | **Effect** |
| --- | --- |
| Source authenticated | May improve provenance, not automatically the grade. |
| Independent technical corroboration | May support E4. |
| Representative test added | May support E5. |
| Material scope mismatch discovered | Downgrade support for affected assertion. |
| Integrity failure | Invalidate or downgrade evidence. |
| Material system change | Evidence may become stale or no longer representative. |

# 2.1  Relevance

Relevance measures how directly the evidence addresses the exact assertion. A technically strong source can be irrelevant to a different version, environment, identity or control condition.

Reviewer identifies the supported proposition and any unsupported inference.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for relevance to support the assertion? |
| Failure signal | What weakness in relevance could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the relevance gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.2  Provenance

Provenance records origin, source owner, system of record, acquisition method and authority.

Reviewer can trace the item to its authoritative source and distinguish original from copy or summary.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for provenance to support the assertion? |
| Failure signal | What weakness in provenance could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the provenance gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.3  Integrity and authenticity

Integrity addresses whether evidence is complete, unaltered and attributable to the claimed source.

Hashes, signatures, immutable references, access controls, custody or reproducible retrieval may support integrity proportionately.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for integrity and authenticity to support the assertion? |
| Failure signal | What weakness in integrity and authenticity could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the integrity and authenticity gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.4  Currentness and temporal fit

Currentness asks whether the evidence represents the relevant assessment period and remains valid after material change.

Age is evaluated using change rate, criticality, source type and event triggers rather than one arbitrary expiry.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for currentness and temporal fit to support the assertion? |
| Failure signal | What weakness in currentness and temporal fit could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the currentness and temporal fit gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.5  Scope and specificity

Scope identifies assets, versions, environments, tenants, populations, time and conditions represented.

Broad conclusions require evidence whose coverage matches the claim or a clearly justified sampling approach.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for scope and specificity to support the assertion? |
| Failure signal | What weakness in scope and specificity could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the scope and specificity gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.6  Corroboration and independence

Corroboration uses materially independent sources or procedures to support the same assertion.

Two views generated from one underlying record may improve convenience but not independence.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for corroboration and independence to support the assertion? |
| Failure signal | What weakness in corroboration and independence could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the corroboration and independence gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.7  Representativeness

Representativeness asks whether observations or tests meaningfully support the stated population and operating conditions.

Sample size alone is insufficient without population, selection method, period and limitations.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for representativeness to support the assertion? |
| Failure signal | What weakness in representativeness could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the representativeness gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.8  Completeness and context

Completeness asks whether material fields, exceptions, failures and contextual conditions are present.

A cropped screenshot or filtered export may omit facts that reverse the interpretation.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for completeness and context to support the assertion? |
| Failure signal | What weakness in completeness and context could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the completeness and context gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.9  Consistency and reproducibility

Consistency compares evidence across time, sources and repeated procedures. Reproducibility allows another qualified reviewer to reconstruct the result.

A repeatable query or test records inputs, environment, versions and relevant parameters.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for consistency and reproducibility to support the assertion? |
| Failure signal | What weakness in consistency and reproducibility could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the consistency and reproducibility gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 2.10  Sensitivity and handling fitness

Handling fitness ensures the evidence can be used, shared, retained and reviewed without exceeding authorization or exposing protected information.

Classification, minimization, redaction, access, encryption, retention and legal hold are proportionate to content.

| **Review field** | **Question** |
| --- | --- |
| Pass condition | What must be true for sensitivity and handling fitness to support the assertion? |
| Failure signal | What weakness in sensitivity and handling fitness could materially alter the conclusion? |
| Mitigation | What additional source, collection or limitation addresses the sensitivity and handling fitness gap? |
| Decision effect | Does the gap reduce scope, confidence, grade or make the result Inconclusive? |

# 3.1  Evidence planning

Translate each assessment criterion into testable assertions, likely sources, minimum grade, collection authority, expected gaps and reviewer.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Output | Evidence plan linked to control, path or decision. |
| Gate | No collection before scope and handling authorization. |

# 3.2  Source selection

Prioritize authoritative and direct sources while preserving independent corroboration and known limitations.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Preference | System of record, signed artifact, configuration, runtime trace, approved decision. |
| Caution | Marketing material, copied screenshots, memory-based claim and model summary. |

# 3.3  Authorized collection

Record collector, date, method, query, identity, scope, source state, approvals and any effect on the environment.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Default | Read-only, minimized and reproducible collection. |
| Exception | Active test or sensitive collection requires explicit authority and safeguards. |

# 3.4  Collection metadata

Capture context needed to interpret the item later, including timezone, environment, tenant, version, filter, export completeness and source owner.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Risk | Evidence without context may be strong technically but unusable for the claim. |
| Control | Mandatory metadata validation before review. |

# 3.5  Integrity capture

Preserve original reference, hash or signature where proportionate and record custody, copying, extraction and storage.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Goal | Detect unapproved alteration and retain trace to origin. |
| Limit | A hash proves sameness, not truth or relevance. |

# 3.6  Normalization and transformation

Transform evidence only through documented, reproducible steps while retaining the original and transformation lineage.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Examples | Parsing, redaction, timezone normalization, field mapping and aggregation. |
| Rule | Transformation cannot silently remove contradictory or qualifying content. |

# 3.7  Classification and protection

Classify evidence for confidentiality, privacy, privilege, export, client, regulatory and security sensitivity.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Controls | Least privilege, encryption, segregation, access logging and approved sharing. |
| Minimization | Retain only information necessary for the assessment and required record. |

# 3.8  Review and grade assignment

Reviewer checks source, assertion fit, quality dimensions, grade, conflicts, limitations and downstream use.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Outcome | Accepted, accepted with limitation, disputed, rejected or superseded. |
| Separation | Collector and reviewer independence is risk-based and disclosed. |

# 3.9  Assertion linkage

Link evidence to every material node, relationship, path condition, control state, finding and decision it supports or disputes.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Requirement | One evidence item may link to many assertions, but each link states its purpose. |
| Prohibition | No generic evidence folder treated as blanket proof. |

# 3.10  Retention and legal hold

Apply retention, deletion, preservation and legal-hold requirements based on evidence type, decision importance, contract and law.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Record | Retention basis, owner, expiry, hold, disposal and confirmation. |
| Caution | Deletion cannot proceed where an authorized hold applies. |

# 3.11  Expiry and change-triggered reassessment

Reassess evidence after material changes to system, model, prompt, identity, tool, data, provider, control, threat or obligation.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Result | Current, stale, superseded or invalid for the assertion. |
| No overclaim | Point-in-time evidence cannot become continuous assurance without measured coverage. |

# 3.12  Supersession and disposal

Preserve historical reasoning when evidence is replaced; dispose only under approved retention and documented destruction.

| **Lifecycle element** | **Canonical requirement** |
| --- | --- |
| Supersession | New evidence links to prior item and explains changed conclusion. |
| Disposal | Record authority, method, date and affected references. |

# 4.1  Sufficiency principle

Evidence is sufficient only for a specific conclusion. Sufficiency considers grade, quality, coverage, corroboration, materiality, test requirement and unresolved conflict.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Claim-specific evidence basis. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for sufficiency principle. |

# 4.2  Design sufficiency

Design adequacy normally requires approved intent, scope, owner, mechanism, dependencies, exception handling and review. E3 may support design when current and relevant.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Current E3 plus scope and approval. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for design sufficiency. |

# 4.3  Implementation sufficiency

Implementation requires evidence from the configured or deployed environment. E4 is normally needed for a material implementation claim.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Representative E4 from deployed configuration. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for implementation sufficiency. |

# 4.4  Operating-effectiveness sufficiency

Effectiveness requires current evidence that the control operated as intended under representative conditions. E5 is expected for critical claims.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | E5 test or operating record. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for operating-effectiveness sufficiency. |

# 4.5  Adaptive-operation sufficiency

Adaptive claims require repeated current evidence of change detection, governed adjustment, outcome review and reviewable automation.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Repeated E5 across material changes. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for adaptive-operation sufficiency. |

# 4.6  Graph-node sufficiency

A node assertion requires typed identity, scope, lifecycle state and evidence that the represented object exists in the declared context.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Evidence-backed identity and scope. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for graph-node sufficiency. |

# 4.7  Graph-edge sufficiency

An edge requires compatible endpoints, direction, type, scope, conditions, validity, source and confidence; connectivity cannot prove authorization.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Evidence-backed relationship and conditions. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for graph-edge sufficiency. |

# 4.8  Path sufficiency

A material path requires evidence for each consequential relationship and condition. Unsupported conditions remain UNKNOWN and constrain the path state.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Evidence for every material step or explicit UNKNOWN. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for path sufficiency. |

# 4.9  Finding sufficiency

A finding requires criteria, condition, cause, affected objects or paths, consequence, evidence, confidence, limitation and remediation objective.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Traceable evidence and reproducible procedure. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for finding sufficiency. |

# 4.10  Decision sufficiency

An approval, exception or risk acceptance requires authorized owner, decision context, evidence considered, rationale, conditions, expiry and review trigger.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Authorized decision record with evidence and expiry. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for decision sufficiency. |

# 4.11  Confidence determination

Confidence is High, Medium, Low or Not rated based on support for the specific conclusion, not a simple count or formula.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Quality, coverage, corroboration and conflict review. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for confidence determination. |

# 4.12  Critical evidence gates

Missing evidence for acting identity, irreversible action, critical containment, material path or compliance applicability can cap or invalidate downstream claims.

| **Decision element** | **Rule** |
| --- | --- |
| Minimum support | Required evidence must be present before strong claim. |
| Failure treatment | Narrow the claim, lower confidence, preserve UNKNOWN, mark Inconclusive or activate a gate as appropriate. |
| Reviewer record | Document why the evidence is sufficient or insufficient for critical evidence gates. |

# 5.1  Conflict taxonomy

Conflicts include source disagreement, temporal mismatch, scope mismatch, version mismatch, control-design divergence, technical-versus-attested contradiction and reviewer disagreement.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by conflict taxonomy. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 5.2  Source precedence

No universal source wins. Directness, authority, currentness, integrity, scope and relevance determine which assertion a source can support.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by source precedence. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 5.3  Policy versus configuration

Policy establishes intended state; configuration establishes observed implementation. A mismatch is evidence of divergence, not a reason to choose one and discard the other.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by policy versus configuration. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 5.4  Configuration versus runtime

Configuration may permit or prevent behavior, while runtime evidence shows observed use. Both are needed when the conclusion concerns effective capability and operation.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by configuration versus runtime. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 5.5  Attestation versus technical evidence

Attestation supplies context and explanation. When material technical evidence disagrees, preserve both and investigate rather than averaging or silently overriding.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by attestation versus technical evidence. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 5.6  Temporal conflict

Evidence from different periods may each be correct. Determine whether the system changed and version assertions rather than labelling one source false.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by temporal conflict. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 5.7  Scope conflict

Evidence from development, one tenant or one population cannot support production, enterprise or cross-tenant claims without justified representativeness.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by scope conflict. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 5.8  Reviewer disagreement

Material review disagreement is recorded with criterion, evidence interpretation, decision authority and unresolved limitation.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by reviewer disagreement. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 5.9  Conflict resolution workflow

Identify exact propositions, compare quality dimensions, seek independent corroboration, decide within authority, retain both sources and record the effect on confidence and conclusions.

| **Resolution step** | **Required action** |
| --- | --- |
| State the conflict | Identify the exact assertion implicated by conflict resolution workflow. |
| Preserve sources | Retain supporting, disputing and qualifying evidence. |
| Assess quality | Compare relevance, provenance, integrity, time and scope. |
| Corroborate | Obtain an independent source or representative test where material. |
| Decide | Approve, modify, reject, narrow or leave Inconclusive. |
| Trace | Record rationale, reviewer, supersession and downstream impact. |

# 6.1  Interview and attestation evidence

Useful for context, ownership, rationale and claimed practice. Record participant role, date, questions, scope, conflicts and whether the statement was reviewed.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of interview and attestation evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.2  Policy, standard and procedure evidence

Supports approved intent, responsibilities and required process when current, in scope and formally approved.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of policy, standard and procedure evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.3  Architecture and design evidence

Supports intended components, flows, boundaries and controls but must be reconciled with deployed technical state.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of architecture and design evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.4  Configuration and administrative evidence

Supports implementation claims when collected from authoritative systems with scope, filters, versions and integrity context.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of configuration and administrative evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.5  Runtime and telemetry evidence

Supports observed behavior, frequency, identity, sequence and outcome when logs are complete, correlated, protected and representative.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of runtime and telemetry evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.6  Test and experiment evidence

Supports behavior under specified conditions when authorized, reproducible, safe, representative and linked to versions and environment.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of test and experiment evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.7  Code, pipeline and artifact evidence

Supports provenance, design and deployment when repository, commit, build, signature, artifact and runtime identity are traceable.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of code, pipeline and artifact evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.8  Provider and third-party evidence

Supports supplier assertions only for the named service, period, configuration and responsibility; marketing claims require corroboration.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of provider and third-party evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.9  Contractual and legal evidence

Supports obligations, rights, roles and decisions when executed, current, applicable and validated by authorized professionals.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of contractual and legal evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 6.10  Incident and exercise evidence

Supports failure, detection, containment, recovery and learning conclusions when timelines, actions, versions, graph context and outcomes are reconstructable.

| **Quality focus** | **Required check** |
| --- | --- |
| Authenticity | Confirm the origin and authority of incident and exercise evidence. |
| Scope | Identify service, asset, environment, population and period. |
| Limitation | State what this evidence type cannot prove by itself. |
| Corroboration | Name the complementary source or procedure needed for material claims. |
| Handling | Apply classification, minimization, access and retention requirements. |

# 7.1  Evidence for nodes

Node evidence proves existence, identity, type, scope and lifecycle state without assuming every attribute is equally supported.

| **Required link** | **Evidence discipline** |
| --- | --- |
| Source | Identify the source supporting evidence for nodes. |
| Assertion | State exactly what is supported or disputed. |
| Conditions | Record environment, identity, version, time and relevant state. |
| Review | Separate machine proposal from approved assessment truth. |
| Change | Version updates and preserve prior analysis runs. |

# 7.2  Evidence for relationships

Relationship evidence supports direction, endpoints, type, conditions, scope, validity and observed or approved state.

| **Required link** | **Evidence discipline** |
| --- | --- |
| Source | Identify the source supporting evidence for relationships. |
| Assertion | State exactly what is supported or disputed. |
| Conditions | Record environment, identity, version, time and relevant state. |
| Review | Separate machine proposal from approved assessment truth. |
| Change | Version updates and preserve prior analysis runs. |

# 7.3  Evidence for boundaries

Boundary evidence identifies the change in ownership, identity, trust, data, runtime, provider or consequence and the expected enforcement.

| **Required link** | **Evidence discipline** |
| --- | --- |
| Source | Identify the source supporting evidence for boundaries. |
| Assertion | State exactly what is supported or disputed. |
| Conditions | Record environment, identity, version, time and relevant state. |
| Review | Separate machine proposal from approved assessment truth. |
| Change | Version updates and preserve prior analysis runs. |

# 7.4  Evidence for paths

Path evidence is composed step by step and records unsupported transitions, validation state, controls and residual routes.

| **Required link** | **Evidence discipline** |
| --- | --- |
| Source | Identify the source supporting evidence for paths. |
| Assertion | State exactly what is supported or disputed. |
| Conditions | Record environment, identity, version, time and relevant state. |
| Review | Separate machine proposal from approved assessment truth. |
| Change | Version updates and preserve prior analysis runs. |

# 7.5  Evidence for controls

Control evidence separates design, implementation, operation and validation and records dependencies and breakpoint effect.

| **Required link** | **Evidence discipline** |
| --- | --- |
| Source | Identify the source supporting evidence for controls. |
| Assertion | State exactly what is supported or disputed. |
| Conditions | Record environment, identity, version, time and relevant state. |
| Review | Separate machine proposal from approved assessment truth. |
| Change | Version updates and preserve prior analysis runs. |

# 7.6  Evidence for findings and decisions

Findings and decisions link to the evidence considered, confidence, limitations, owner and supersession history.

| **Required link** | **Evidence discipline** |
| --- | --- |
| Source | Identify the source supporting evidence for findings and decisions. |
| Assertion | State exactly what is supported or disputed. |
| Conditions | Record environment, identity, version, time and relevant state. |
| Review | Separate machine proposal from approved assessment truth. |
| Change | Version updates and preserve prior analysis runs. |

# 7.7  Automated evidence collection

Automation may improve consistency and freshness but must record connector scope, identity, permissions, query, failures, normalization and blind spots.

| **Required link** | **Evidence discipline** |
| --- | --- |
| Source | Identify the source supporting automated evidence collection. |
| Assertion | State exactly what is supported or disputed. |
| Conditions | Record environment, identity, version, time and relevant state. |
| Review | Separate machine proposal from approved assessment truth. |
| Change | Version updates and preserve prior analysis runs. |

# 7.8  AI-assisted evidence analysis

AI may extract, classify, summarize, compare or propose assertions. The system retains source passages, model/version, prompt or method, confidence, reviewer and prohibited autonomous decisions.

| **Required link** | **Evidence discipline** |
| --- | --- |
| Source | Identify the source supporting ai-assisted evidence analysis. |
| Assertion | State exactly what is supported or disputed. |
| Conditions | Record environment, identity, version, time and relevant state. |
| Review | Separate machine proposal from approved assessment truth. |
| Change | Version updates and preserve prior analysis runs. |

# 8.1  Evidence register

Maintain a controlled register of evidence identity, source, grade, owner, scope, dates, integrity, sensitivity, review, limitations and linked assertions.

| **Operational question** | **Required output** |
| --- | --- |
| Owner | Who is accountable for evidence register? |
| Measure | What numerator, denominator, period and limitation are reported? |
| Trigger | Which change, expiry, conflict or incident requires action? |
| Evidence | What proves the operation itself is effective? |
| Review | Who independently checks the result and closure? |

# 8.2  Evidence coverage metrics

Report assessment coverage, determinate coverage, E4-E5 coverage, critical-control validation coverage, stale evidence and unresolved conflict with visible denominators.

| **Operational question** | **Required output** |
| --- | --- |
| Owner | Who is accountable for evidence coverage metrics? |
| Measure | What numerator, denominator, period and limitation are reported? |
| Trigger | Which change, expiry, conflict or incident requires action? |
| Evidence | What proves the operation itself is effective? |
| Review | Who independently checks the result and closure? |

# 8.3  Evidence freshness metrics

Track items past review threshold, invalidated by material change, awaiting renewal or blocked by provider and source-access limitations.

| **Operational question** | **Required output** |
| --- | --- |
| Owner | Who is accountable for evidence freshness metrics? |
| Measure | What numerator, denominator, period and limitation are reported? |
| Trigger | Which change, expiry, conflict or incident requires action? |
| Evidence | What proves the operation itself is effective? |
| Review | Who independently checks the result and closure? |

# 8.4  Evidence quality assurance

Sample evidence links and reproduce collection, grade, scope, conclusion and retention decisions through independent or second-person review.

| **Operational question** | **Required output** |
| --- | --- |
| Owner | Who is accountable for evidence quality assurance? |
| Measure | What numerator, denominator, period and limitation are reported? |
| Trigger | Which change, expiry, conflict or incident requires action? |
| Evidence | What proves the operation itself is effective? |
| Review | Who independently checks the result and closure? |

# 8.5  Evidence access governance

Use least privilege, role separation, access logging, periodic review and rapid revocation for evidence repositories and exports.

| **Operational question** | **Required output** |
| --- | --- |
| Owner | Who is accountable for evidence access governance? |
| Measure | What numerator, denominator, period and limitation are reported? |
| Trigger | Which change, expiry, conflict or incident requires action? |
| Evidence | What proves the operation itself is effective? |
| Review | Who independently checks the result and closure? |

# 8.6  Evidence incident response

Respond to loss, unauthorized access, tampering, misclassification, over-retention or corrupted lineage and reassess dependent assertions.

| **Operational question** | **Required output** |
| --- | --- |
| Owner | Who is accountable for evidence incident response? |
| Measure | What numerator, denominator, period and limitation are reported? |
| Trigger | Which change, expiry, conflict or incident requires action? |
| Evidence | What proves the operation itself is effective? |
| Review | Who independently checks the result and closure? |

# 8.7  Evidence portability and exit

Export evidence metadata, links, grades, review history and lineage without dependence on a commercial platform where authorization permits.

| **Operational question** | **Required output** |
| --- | --- |
| Owner | Who is accountable for evidence portability and exit? |
| Measure | What numerator, denominator, period and limitation are reported? |
| Trigger | Which change, expiry, conflict or incident requires action? |
| Evidence | What proves the operation itself is effective? |
| Review | Who independently checks the result and closure? |

# 8.8  Evidence maturity linkage

Evidence practices support all six maturity domains; higher maturity requires measured coverage, representative technical evidence and change-aware reassessment.

| **Operational question** | **Required output** |
| --- | --- |
| Owner | Who is accountable for evidence maturity linkage? |
| Measure | What numerator, denominator, period and limitation are reported? |
| Trigger | Which change, expiry, conflict or incident requires action? |
| Evidence | What proves the operation itself is effective? |
| Review | Who independently checks the result and closure? |

# A.1  Canonical evidence register schema

Minimum fields enable consistent document, spreadsheet, JSON and graph implementation.

| **Field group** | **Fields** |
| --- | --- |
| Identity | evidence_id, title, type, source_system, source_owner. |
| Collection | collector, method, query/procedure, date, authorization. |
| Context | scope, environment, population, period, versions, conditions. |
| Integrity | original reference, hash/signature, custody, transformations. |
| Quality | grade, relevance, currentness, corroboration, representativeness. |
| Protection | classification, privacy, access, retention, legal hold. |
| Review | reviewer, outcome, confidence impact, conflicts, limitations. |
| Traceability | assertions, controls, graph objects, paths, findings, decisions. |

# A.2  Assertion and evidence-link schema

Each link records why one evidence item supports, disputes or qualifies one assertion.

| **Link field** | **Meaning** |
| --- | --- |
| link_id | Stable relationship identifier. |
| evidence_id | Source evidence item. |
| assertion_id | Precisely stated proposition. |
| relationship | SUPPORTS, DISPUTES, QUALIFIES, CORROBORATES or SUPERSEDES. |
| scope and conditions | Boundaries of the support. |
| reviewer and date | Accountable approval. |
| limitations | Known uncertainty or non-coverage. |

# A.3  Evidence sufficiency matrix

Canonical minimum expectations align evidence to assessment claims.

| **Claim** | **Normal minimum** |
| --- | --- |
| Claimed practice | E2 with scope and accountable source. |
| Approved design | Current relevant E3. |
| Implemented configuration | Representative E4. |
| Operating effectiveness | E5 or approved equivalent direct operating evidence. |
| Critical control effectiveness | Representative E5 with path context. |
| Adaptive operation | Repeated E5 across material changes. |
| Compliance conclusion | Separate legal applicability and evidence; framework mapping alone is insufficient. |

# A.4  Confidence rubric

Confidence remains separate from grade and scoring.

| **Level** | **Rule** |
| --- | --- |
| High | Current, relevant, corroborated evidence covers material scope; no unresolved conflict could change the conclusion. |
| Medium | Evidence supports the conclusion with bounded sampling, freshness, coverage or corroboration gaps. |
| Low | Conclusion relies materially on inference, attestation, narrow samples, stale evidence or unresolved conflict. |
| Not rated | Evidence cannot support a determinate conclusion. |

# A.5  Anti-gaming rules

Evidence governance must resist practices that make assurance appear stronger than the underlying support.

| **Gaming pattern** | **Required response** |
| --- | --- |
| Document volume | Measure relevance and sufficiency, not page count. |
| Screenshot dumping | Require source, context, date, integrity and assertion link. |
| Cherry-picked success | Define population and preserve failures and exceptions. |
| Multiple copies | Detect duplicates and common-source dependence. |
| Stale certification | Restrict claim to service, period, scope and responsibility. |
| AI summary as fact | Retain source passages and human approval. |
| Missing UNKNOWNs | Restore uncertainty register and coverage impact. |
| After-the-fact evidence | Record timing and do not rewrite prior assessment state. |

# A.6  Known limitations

The model cannot guarantee source truth, complete discovery, legal admissibility, statistical representativeness, absence of deception or permanent currency.

| **Limitation** | **Required treatment** |
| --- | --- |
| Source deception | Corroborate and test material assertions. |
| Provider opacity | Preserve UNKNOWN and limit assurance. |
| Rapid change | Use event-driven reassessment. |
| Sampling uncertainty | State population, method and limitations. |
| Legal sensitivity | Use authorized legal/privacy review. |
| Tool dependence | Preserve exportable evidence records. |
| Human judgment | Calibrate and independently review material conclusions. |

# A.7  Source and derivation register

This model consolidates evidence semantics already embedded across the AI Trust Graph artifacts and assessment toolkit.

| **Source artifact** | **Use** |
| --- | --- |
| Core Conceptual Model v1.1 | Evidence object, quality, confidence, graph linkage and invariants. |
| Maturity Model v1.0 | Evidence floors, gates, coverage and adaptive claims. |
| Scoring Framework v1.0 | Evidence caps, confidence, UNKNOWN and coverage rules. |
| Master Control Library v1.0 | Control-specific evidence and validation expectations. |
| AI Security Assessment Toolkit | E0-E5 grades, evidence register fields and no-hallucination discipline. |

# A.8  v1.0 release acceptance checklist

Every gate must close before public GitHub release.

| **Gate** | **Acceptance criterion** |
| --- | --- |
| Semantic integrity | No contradiction with predecessor artifacts. |
| Grade integrity | E0-E5 meanings and sufficiency rules are internally consistent. |
| UNKNOWN integrity | No process converts uncertainty into a numeric status. |
| Lifecycle completeness | Plan, collect, protect, review, retain, expire and supersede are covered. |
| Graph traceability | Nodes, edges, paths, controls, findings and decisions are supported. |
| Conflict handling | Contradictions remain visible and governed. |
| Automation safety | AI inference remains proposed until accountable review. |
| Independent review | Architecture, AI security and evidence-method reviews recorded. |
| IP and privacy | Publication rights and sensitive-information controls confirmed. |
| Repository quality | Markdown, schemas, examples, changelog and contribution files validated. |

# A.9  Final doctrine and approval record

The AI Trust Graph Evidence Model makes every material conclusion traceable to sources, conditions, review and limitations while preserving uncertainty and historical state.

> **EVIDENCE DOCTRINE** State the assertion. Use the strongest appropriate source. Preserve provenance. Bound scope and time. Separate grade from confidence. Resolve conflicts visibly. Never erase UNKNOWN.

| **Approval role** | **Status** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Chief product architecture review | Internal author-loop completed; independent review pending. |
| AI security architecture review | Internal author-loop completed; independent review pending. |
| Evidence-method review | Independent validation pending. |
| Employer / IP / confidentiality review | Pending. |
| Licence and trademark approval | Pending. |
| Public release | Not approved until mandatory gates close. |

AI Trust Graph Evidence Model | Version 1.0 | Public-release candidate
