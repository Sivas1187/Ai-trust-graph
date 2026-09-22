[← Back to methodology index](../README.md)

# AI Trust Graph — Assessor Handbook

*Version 1.0 | Practical execution, control interpretation, path validation, findings, calibration and quality review*

> **PURPOSE** Operationalize the AI Trust Graph Assessment Methodology so qualified assessors can produce consistent, evidence-backed and reviewable results without redefining the canonical artifacts.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Depends on | Artifacts #1-#7, especially Assessment Methodology v1.0, Evidence Model v1.0 and Master Control Library v1.0 |
| Primary users | Associate assessors, assessors, senior assessors, lead assessors, principal reviewers and technical validators |
| Coverage | Competency, fieldwork, six domain playbooks, 72 control guides, evidence, paths, maturity, findings, calibration and QA |
| Product boundary | ExposureGraph implementation, proprietary automation, algorithms and commercial delivery model excluded |

FOUNDATION

# 0.1  Authority and handbook boundary

This handbook explains how assessors apply the canonical methodology. It may clarify workflow and judgment but cannot change control objectives, evidence grades, scoring formulas, maturity criteria or graph semantics.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Use | Field execution, coaching, calibration and quality review. |
| Not use | Certification claim, legal opinion, testing authorization or product specification. |
| Release | Employer, IP, confidentiality, licence and independent review required. |

FOUNDATION

# 0.2  Artifact precedence

When guidance appears inconsistent, assessors stop the affected conclusion and use the canonical authority/dependency map in [METHODOLOGY_MANIFEST.md](../METHODOLOGY_MANIFEST.md). The handbook cannot override a canonical semantic or normative artifact.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Assessor action | Pause affected conclusion and record the interpretive question. |
| Reviewer action | Resolve through methodology governance. |
| History | Do not silently rewrite completed assessment runs. |

FOUNDATION

# 0.3  Assessor doctrine

The assessor makes claims no stronger than the scope, evidence, conditions and review can support. Professional skepticism is balanced with fairness, reproducibility and transparent limitations.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Doctrine | Scope before collection; evidence before conclusion; conditions before paths; tests before effectiveness; gates before averages; review before release. |

FOUNDATION

# 0.4  Ethical conduct

Assessors protect confidentiality, minimize collection, remain within authorization, disclose conflicts, avoid advocacy for preferred technology and distinguish facts from interpretation.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Prohibited | Fabrication, selective omission, coercive interview, unsafe test, score negotiation and undisclosed conflict. |
| Required | Integrity, competence, care, neutrality, traceability and escalation. |

FOUNDATION

# 0.5  Professional skepticism

Challenge both favorable and adverse claims. Seek corroboration proportionate to consequence and treat missing evidence as uncertainty rather than proof of failure or safety.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Strong practice | Test the assertion that could change the decision. |
| Weak practice | Collect documents until the folder appears complete. |

FOUNDATION

# 0.6  Role boundaries

Lead assessors integrate the conclusion; technical validators perform authorized tests; evidence custodians protect sources; reviewers challenge sufficiency; decision owners approve disposition.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Independence | Increase separation for critical controls, high-impact paths and conflicted owners. |
| Escalation | Stop when authorization, safety, competence or evidence handling is inadequate. |

FOUNDATION

# 0.7  Assessor workpapers

Every conclusion is reconstructable from charter, scope, inquiry, source, procedure, evidence, interpretation, result, review note and resolution.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Minimum | Stable IDs, dates, versions, scope, reviewer and limitation. |
| No blanket proof | A generic evidence folder is not an assertion link. |

FOUNDATION

# 0.8  Result-state discipline

UNKNOWN, Not Assessed, Not Applicable, Not Tested, Inconclusive, Provisional and Final within scope remain distinct throughout fieldwork and reporting.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Rule | UNKNOWN remains visible; never convert it to zero or hide it from coverage. |
| Rule | Not Applicable requires approved rationale. |
| Rule | Not Tested cannot support operating effectiveness. |

FOUNDATION

# 0.9  Safety and authorization

No playbook authorizes access or testing. Use approved rules of engagement, test identities, safe data, stop conditions, restoration and escalation.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Default | Read-only and non-destructive. |
| Additional approval | Write, delete, transact, disclose, deny, manipulate or change production. |

FOUNDATION

# 0.10  Handbook anti-errors

Common errors are controlled through explicit questions, evidence expectations, negative tests, calibration and second-person review.

| **Handbook rule** | **Operational direction** |
| --- | --- |
| Highest-risk errors | Policy equals effective; topology equals exploitable; acceptance equals closure; tool result equals fact; pilot equals enterprise maturity. |

COMPETENCY MODEL

# 1.1  A1 Associate Assessor

Supports evidence indexing, interviews, inventories and workpapers under supervision.

Cannot independently approve applicability, critical findings, maturity or path state.

| **Competency** | **Expected demonstration** |
| --- | --- |
| Methodology | Applies approved artifact versions without redefining them. |
| Evidence | Grades sources and bounds conclusions. |
| Graph | Distinguishes objects, edges, conditions and paths. |
| Controls | Separates design, implementation and operation. |
| Judgment | Records rationale, uncertainty and escalation. |
| Quality | Produces reproducible workpapers and addresses review. |

COMPETENCY MODEL

# 1.2  A2 Assessor

Executes defined control and evidence procedures for bounded scope.

Requires review for critical controls, material paths and exceptions.

| **Competency** | **Expected demonstration** |
| --- | --- |
| Methodology | Applies approved artifact versions without redefining them. |
| Evidence | Grades sources and bounds conclusions. |
| Graph | Distinguishes objects, edges, conditions and paths. |
| Controls | Separates design, implementation and operation. |
| Judgment | Records rationale, uncertainty and escalation. |
| Quality | Produces reproducible workpapers and addresses review. |

COMPETENCY MODEL

# 1.3  A3 Senior Assessor

Leads domain fieldwork, resolves routine evidence conflict and drafts integrated findings.

May recommend but not independently approve final assessment release.

| **Competency** | **Expected demonstration** |
| --- | --- |
| Methodology | Applies approved artifact versions without redefining them. |
| Evidence | Grades sources and bounds conclusions. |
| Graph | Distinguishes objects, edges, conditions and paths. |
| Controls | Separates design, implementation and operation. |
| Judgment | Records rationale, uncertainty and escalation. |
| Quality | Produces reproducible workpapers and addresses review. |

COMPETENCY MODEL

# 1.4  A4 Lead Assessor

Owns scope integration, methodology adherence, conclusions, quality response and report package.

Must obtain independent review for high-impact or conflicted engagements.

| **Competency** | **Expected demonstration** |
| --- | --- |
| Methodology | Applies approved artifact versions without redefining them. |
| Evidence | Grades sources and bounds conclusions. |
| Graph | Distinguishes objects, edges, conditions and paths. |
| Controls | Separates design, implementation and operation. |
| Judgment | Records rationale, uncertainty and escalation. |
| Quality | Produces reproducible workpapers and addresses review. |

COMPETENCY MODEL

# 1.5  A5 Principal Reviewer

Challenges methodology, critical gates, path claims, scoring, maturity, independence and release.

Does not replace authorized business, legal or risk decision owners.

| **Competency** | **Expected demonstration** |
| --- | --- |
| Methodology | Applies approved artifact versions without redefining them. |
| Evidence | Grades sources and bounds conclusions. |
| Graph | Distinguishes objects, edges, conditions and paths. |
| Controls | Separates design, implementation and operation. |
| Judgment | Records rationale, uncertainty and escalation. |
| Quality | Produces reproducible workpapers and addresses review. |

COMPETENCY MODEL

# 1.6  Competency domains

Qualification is multidimensional; tenure or certification alone does not establish readiness.

| **Domain** | **Evidence of competence** |
| --- | --- |
| AI systems | Models, prompts, RAG, agents, tools, MCP, pipelines and providers. |
| Cybersecurity | Identity, authorization, network, data, supply chain, detection and resilience. |
| Governance | Risk, obligations, decisions, exceptions, accountability and assurance. |
| Graph reasoning | Typed relationships, conditions, authority, reachability, breakpoints and drift. |
| Assessment | Interviewing, sampling, testing, evidence, findings and review. |
| Communication | Clear, neutral, audience-appropriate and limitation-aware reporting. |

COMPETENCY MODEL

# 1.7  Authorization matrix

Engagement leadership assigns activities based on demonstrated competence, independence and safety authorization.

| **Activity** | **Minimum expected role** |
| --- | --- |
| Evidence indexing and source checks | A1 supervised. |
| Standard control assessment | A2 with review. |
| Critical control testing | A3 plus authorized technical validator. |
| Material path conclusion | A3 draft; A4 approval; principal review when critical. |
| Maturity and scoring integration | A4. |
| Final quality release | A5 or independent equivalent. |
| Legal applicability decision | Authorized legal professional, not assessor alone. |

COMPETENCY MODEL

# 1.8  Continuing competence

Assessors maintain current competence through calibration, supervised fieldwork, method updates, incident lessons and reassessment after material methodology change.

| **Trigger** | **Required action** |
| --- | --- |
| New artifact version | Delta training and case calibration. |
| New technical domain | Supervised work or specialist support. |
| Material quality failure | Root-cause review and targeted requalification. |
| Extended inactivity | Refresher and observed case. |
| Repeated variance | Calibration before independent assignment. |
FIELDWORK PLAYBOOK

# 2.1  Pre-engagement readiness

Confirm charter, roles, conflicts, access, handling, applicable versions, do-not-test boundaries and expected decisions.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision pre-engagement readiness supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.2  Opening meeting

Explain purpose, scope, evidence rules, UNKNOWN treatment, requests, communication, escalation and provisional nature of fieldwork.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision opening meeting supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.3  Request-list design

Request evidence by assertion and control need; avoid generic data dumps and identify preferred source, period, population and format.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision request-list design supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.4  Interview planning

Use role-specific questions, known hypotheses and contradiction prompts; distinguish statement, interpretation and evidence lead.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision interview planning supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.5  Interview execution

Ask open questions, then test specifics, examples, failed cases, changes, exceptions and source systems without leading the respondent.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision interview execution supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.6  Technical walkthrough

Trace a representative action across user, identity, prompt, retrieval, model, agent, tool, approval, target, telemetry and outcome.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision technical walkthrough supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.7  Sampling

Declare population, selection method, size, period, rationale and limitation; do not extrapolate beyond support.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision sampling supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.8  Daily synthesis

Reconcile new facts with graph, evidence, controls, paths, UNKNOWNs and request list while preserving conflicts.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision daily synthesis supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.9  Issue validation

Share factual condition and evidence with accountable owner; do not negotiate away criteria, scoring or path state.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision issue validation supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.10  Escalation

Escalate unsafe conditions, unauthorized access, evidence tampering, severe path, legal uncertainty, independence problem or blocked critical evidence.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision escalation supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.11  Closeout meeting

Present scope, coverage, unresolved facts, critical gates, provisional conclusions, owner responses and next review steps.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision closeout meeting supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

FIELDWORK PLAYBOOK

# 2.12  Workpaper closure

Ensure every result has criteria, procedure, evidence, conclusion, confidence, reviewer and resolution before final release.

| **Fieldwork question** | **Assessor action** |
| --- | --- |
| Purpose | State what decision workpaper closure supports. |
| Preparation | Identify inputs, owner, scope and authorization. |
| Execution | Record actual work performed, not planned work. |
| Evidence | Link sources and limitations. |
| Quality | Obtain challenge proportionate to consequence. |
| Exit | Mark complete, conditioned, blocked or Inconclusive. |

DOMAIN PLAYBOOKS

# 3.1.1  Discovery and AIBOM: assessment objective

Establish a measurable estate, ownership, composition, source coverage and blind spots.

| **Assessor focus** | **Required examination** |
| --- | --- |
| Scope | Declare the applicable discovery and aibom population and exclusions. |
| Graph | Identify canonical objects, relationships, boundaries and paths for discovery and aibom. |
| Evidence | Prefer current authoritative and technical sources. |
| Controls | Apply ATG-DIS-001 through ATG-DIS-012. |
| Output | Record coverage, UNKNOWNs, gates, findings and domain conclusion. |

DOMAIN PLAYBOOKS

# 3.1.2  Discovery and AIBOM: interview and evidence prompts

Use these prompts to test understanding and direct evidence collection without treating answers as proof.

| **Prompt** | **Assessor use** |
| --- | --- |
| What authoritative sources define the population? | Seek source, example, exception, failed case and recent change. |
| Which sanctioned and shadow AI signals are absent? | Seek source, example, exception, failed case and recent change. |
| Can sampled assets be reconciled to owners and deployed composition? | Seek source, example, exception, failed case and recent change. |
| What evidence supports coverage and freshness? | Seek source, example, exception, failed case and recent change. |

DOMAIN PLAYBOOKS

# 3.1.3  Discovery and AIBOM: anti-patterns and review

Challenge patterns that create an inflated conclusion or conceal uncertainty.

| **Anti-pattern** | **Review response** |
| --- | --- |
| Questionnaire-only inventory | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Model-only AIBOM | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Inferred owner presented as fact | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Claim of completeness without denominator | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |

DOMAIN PLAYBOOKS

# 3.2.1  Trust and Privilege Paths: assessment objective

Explain typed directional relationships, boundaries, reliance, effective identity routes, material paths and breakpoints.

| **Assessor focus** | **Required examination** |
| --- | --- |
| Scope | Declare the applicable trust and privilege paths population and exclusions. |
| Graph | Identify canonical objects, relationships, boundaries and paths for trust and privilege paths. |
| Evidence | Prefer current authoritative and technical sources. |
| Controls | Apply ATG-TRU-001 through ATG-TRU-012. |
| Output | Record coverage, UNKNOWNs, gates, findings and domain conclusion. |

DOMAIN PLAYBOOKS

# 3.2.2  Trust and Privilege Paths: interview and evidence prompts

Use these prompts to test understanding and direct evidence collection without treating answers as proof.

| **Prompt** | **Assessor use** |
| --- | --- |
| What does each edge mean and under which conditions? | Seek source, example, exception, failed case and recent change. |
| Which trust basis, owner, scope and expiry apply? | Seek source, example, exception, failed case and recent change. |
| Can inherited or delegated privilege reach a material target? | Seek source, example, exception, failed case and recent change. |
| Which control demonstrably breaks the path? | Seek source, example, exception, failed case and recent change. |

DOMAIN PLAYBOOKS

# 3.2.3  Trust and Privilege Paths: anti-patterns and review

Challenge patterns that create an inflated conclusion or conceal uncertainty.

| **Anti-pattern** | **Review response** |
| --- | --- |
| Unqualified connection | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Reversed edge direction | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Topology called exploitable | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Control mapped to framework but not path | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |

DOMAIN PLAYBOOKS

# 3.3.1  Authority Governance: assessment objective

Determine who or what can act, on which target, under what conditions, with what amplification and revocation.

| **Assessor focus** | **Required examination** |
| --- | --- |
| Scope | Declare the applicable authority governance population and exclusions. |
| Graph | Identify canonical objects, relationships, boundaries and paths for authority governance. |
| Evidence | Prefer current authoritative and technical sources. |
| Controls | Apply ATG-AUT-001 through ATG-AUT-012. |
| Output | Record coverage, UNKNOWNs, gates, findings and domain conclusion. |

DOMAIN PLAYBOOKS

# 3.3.2  Authority Governance: interview and evidence prompts

Use these prompts to test understanding and direct evidence collection without treating answers as proof.

| **Prompt** | **Assessor use** |
| --- | --- |
| Which identity performs the final action? | Seek source, example, exception, failed case and recent change. |
| Does delegation preserve actor and subject? | Seek source, example, exception, failed case and recent change. |
| Is approval bound to exact parameters? | Seek source, example, exception, failed case and recent change. |
| Can authority be revoked end to end? | Seek source, example, exception, failed case and recent change. |

DOMAIN PLAYBOOKS

# 3.3.3  Authority Governance: anti-patterns and review

Challenge patterns that create an inflated conclusion or conceal uncertainty.

| **Anti-pattern** | **Review response** |
| --- | --- |
| Role name substituted for effective permission | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Shared machine identity | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Rubber-stamp approval | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Front-end stop with active downstream tokens | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |

DOMAIN PLAYBOOKS

# 3.4.1  AI Security Validation: assessment objective

Validate system-specific threats and control breakpoints across model, prompt, RAG, agents, MCP, pipeline and runtime.

| **Assessor focus** | **Required examination** |
| --- | --- |
| Scope | Declare the applicable ai security validation population and exclusions. |
| Graph | Identify canonical objects, relationships, boundaries and paths for ai security validation. |
| Evidence | Prefer current authoritative and technical sources. |
| Controls | Apply ATG-VAL-001 through ATG-VAL-012. |
| Output | Record coverage, UNKNOWNs, gates, findings and domain conclusion. |

DOMAIN PLAYBOOKS

# 3.4.2  AI Security Validation: interview and evidence prompts

Use these prompts to test understanding and direct evidence collection without treating answers as proof.

| **Prompt** | **Assessor use** |
| --- | --- |
| Which graph-grounded hypothesis is tested? | Seek source, example, exception, failed case and recent change. |
| Is the procedure authorized and representative? | Seek source, example, exception, failed case and recent change. |
| What failure condition or bypass is explored? | Seek source, example, exception, failed case and recent change. |
| Was closure independently retested? | Seek source, example, exception, failed case and recent change. |

DOMAIN PLAYBOOKS

# 3.4.3  AI Security Validation: anti-patterns and review

Challenge patterns that create an inflated conclusion or conceal uncertainty.

| **Anti-pattern** | **Review response** |
| --- | --- |
| Generic checklist | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| One-shot prompt test | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Wrong model/version | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Screenshot closure without residual path | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |

DOMAIN PLAYBOOKS

# 3.5.1  AI Governance and Assurance: assessment objective

Assess policy, intake, impact, obligations, decisions, exceptions, providers, competence and independent challenge.

| **Assessor focus** | **Required examination** |
| --- | --- |
| Scope | Declare the applicable ai governance and assurance population and exclusions. |
| Graph | Identify canonical objects, relationships, boundaries and paths for ai governance and assurance. |
| Evidence | Prefer current authoritative and technical sources. |
| Controls | Apply ATG-GOV-001 through ATG-GOV-012. |
| Output | Record coverage, UNKNOWNs, gates, findings and domain conclusion. |

DOMAIN PLAYBOOKS

# 3.5.2  AI Governance and Assurance: interview and evidence prompts

Use these prompts to test understanding and direct evidence collection without treating answers as proof.

| **Prompt** | **Assessor use** |
| --- | --- |
| Is the use case registered before deployment? | Seek source, example, exception, failed case and recent change. |
| Do thresholds drive actual decisions? | Seek source, example, exception, failed case and recent change. |
| Is applicability fact-specific and legally validated? | Seek source, example, exception, failed case and recent change. |
| Are exceptions time-bound and evidenced? | Seek source, example, exception, failed case and recent change. |

DOMAIN PLAYBOOKS

# 3.5.3  AI Governance and Assurance: anti-patterns and review

Challenge patterns that create an inflated conclusion or conceal uncertainty.

| **Anti-pattern** | **Review response** |
| --- | --- |
| Policy with no threshold | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Post-deployment intake | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Framework mapping called compliance | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Permanent waiver | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |

DOMAIN PLAYBOOKS

# 3.6.1  Operational Resilience: assessment objective

Assess telemetry, attribution, detection, triage, containment, revocation, rollback, recovery, forensics and learning.

| **Assessor focus** | **Required examination** |
| --- | --- |
| Scope | Declare the applicable operational resilience population and exclusions. |
| Graph | Identify canonical objects, relationships, boundaries and paths for operational resilience. |
| Evidence | Prefer current authoritative and technical sources. |
| Controls | Apply ATG-RES-001 through ATG-RES-012. |
| Output | Record coverage, UNKNOWNs, gates, findings and domain conclusion. |

DOMAIN PLAYBOOKS

# 3.6.2  Operational Resilience: interview and evidence prompts

Use these prompts to test understanding and direct evidence collection without treating answers as proof.

| **Prompt** | **Assessor use** |
| --- | --- |
| Can one material action be reconstructed end to end? | Seek source, example, exception, failed case and recent change. |
| Does detection cover AI-specific behavior? | Seek source, example, exception, failed case and recent change. |
| Can queued and delegated actions be stopped? | Seek source, example, exception, failed case and recent change. |
| Does recovery reconcile business state? | Seek source, example, exception, failed case and recent change. |

DOMAIN PLAYBOOKS

# 3.6.3  Operational Resilience: anti-patterns and review

Challenge patterns that create an inflated conclusion or conceal uncertainty.

| **Anti-pattern** | **Review response** |
| --- | --- |
| Application log without actor chain | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Generic cyber alert only | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| UI stop mistaken for containment | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
| Technical recovery without transaction reconciliation | Identify affected assertion, evidence gap, scope impact and corrective fieldwork. |
72-CONTROL FIELD GUIDE

# ATG-DIS-001  Discovery scope and authorized boundaries

This field guide helps the assessor evaluate discovery scope and authorized boundaries without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for discovery scope and authorized boundaries in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting discovery scope and authorized boundaries. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for discovery scope and authorized boundaries. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to discovery scope and authorized boundaries scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for discovery scope and authorized boundaries. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat discovery scope and authorized boundaries. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for discovery scope and authorized boundaries are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for discovery scope and authorized boundaries from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-002  Discovery source catalogue

This field guide helps the assessor evaluate discovery source catalogue without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for discovery source catalogue in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting discovery source catalogue. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for discovery source catalogue. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to discovery source catalogue scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for discovery source catalogue. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat discovery source catalogue. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for discovery source catalogue are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for discovery source catalogue from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-003  Sanctioned AI service discovery

This field guide helps the assessor evaluate sanctioned AI service discovery without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for sanctioned AI service discovery in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting sanctioned AI service discovery. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for sanctioned AI service discovery. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to sanctioned AI service discovery scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for sanctioned AI service discovery. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat sanctioned AI service discovery. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for sanctioned AI service discovery are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for sanctioned AI service discovery from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-004  Shadow AI detection and triage

This field guide helps the assessor evaluate shadow AI detection and triage without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for shadow AI detection and triage in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting shadow AI detection and triage. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for shadow AI detection and triage. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to shadow AI detection and triage scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for shadow AI detection and triage. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat shadow AI detection and triage. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for shadow AI detection and triage are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for shadow AI detection and triage from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-005  Canonical AI estate inventory

This field guide helps the assessor evaluate canonical AI estate inventory without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for canonical AI estate inventory in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting canonical AI estate inventory. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for canonical AI estate inventory. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to canonical AI estate inventory scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for canonical AI estate inventory. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat canonical AI estate inventory. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for canonical AI estate inventory are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for canonical AI estate inventory from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-006  Asset identity and correlation

This field guide helps the assessor evaluate asset identity and correlation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for asset identity and correlation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting asset identity and correlation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for asset identity and correlation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to asset identity and correlation scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for asset identity and correlation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat asset identity and correlation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for asset identity and correlation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for asset identity and correlation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-007  Business and technical ownership

This field guide helps the assessor evaluate business and technical ownership without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for business and technical ownership in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting business and technical ownership. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for business and technical ownership. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to business and technical ownership scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for business and technical ownership. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat business and technical ownership. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for business and technical ownership are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for business and technical ownership from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-008  AI Bill of Materials

This field guide helps the assessor evaluate aI Bill of Materials without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI Bill of Materials in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI Bill of Materials. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for aI Bill of Materials. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI Bill of Materials scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for aI Bill of Materials. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI Bill of Materials. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI Bill of Materials are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI Bill of Materials from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-009  Dependency and provenance lineage

This field guide helps the assessor evaluate dependency and provenance lineage without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for dependency and provenance lineage in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting dependency and provenance lineage. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for dependency and provenance lineage. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to dependency and provenance lineage scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for dependency and provenance lineage. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat dependency and provenance lineage. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for dependency and provenance lineage are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for dependency and provenance lineage from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-010  AIBOM and inventory change detection

This field guide helps the assessor evaluate aIBOM and inventory change detection without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aIBOM and inventory change detection in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aIBOM and inventory change detection. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for aIBOM and inventory change detection. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aIBOM and inventory change detection scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for aIBOM and inventory change detection. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aIBOM and inventory change detection. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aIBOM and inventory change detection are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aIBOM and inventory change detection from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-011  Orphan, dormant and exposed asset lifecycle

This field guide helps the assessor evaluate orphan, dormant and exposed asset lifecycle without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for orphan, dormant and exposed asset lifecycle in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting orphan, dormant and exposed asset lifecycle. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for orphan, dormant and exposed asset lifecycle. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to orphan, dormant and exposed asset lifecycle scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for orphan, dormant and exposed asset lifecycle. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat orphan, dormant and exposed asset lifecycle. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for orphan, dormant and exposed asset lifecycle are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for orphan, dormant and exposed asset lifecycle from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-DIS-012  Discovery coverage assurance

This field guide helps the assessor evaluate discovery coverage assurance without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for discovery coverage assurance in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting discovery coverage assurance. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconcile the claimed state for discovery coverage assurance. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to discovery coverage assurance scope. |
| Validation move | Use an authorized representative procedure to reconcile implementation, operating condition and graph context for discovery coverage assurance. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat discovery coverage assurance. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for discovery coverage assurance are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for discovery coverage assurance from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-001  Canonical trust relationship semantics

This field guide helps the assessor evaluate canonical trust relationship semantics without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for canonical trust relationship semantics in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting canonical trust relationship semantics. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for canonical trust relationship semantics. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to canonical trust relationship semantics scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for canonical trust relationship semantics. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat canonical trust relationship semantics. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for canonical trust relationship semantics are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for canonical trust relationship semantics from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-002  Trust basis, scope and lifecycle

This field guide helps the assessor evaluate trust basis, scope and lifecycle without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for trust basis, scope and lifecycle in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting trust basis, scope and lifecycle. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for trust basis, scope and lifecycle. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to trust basis, scope and lifecycle scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for trust basis, scope and lifecycle. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat trust basis, scope and lifecycle. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for trust basis, scope and lifecycle are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for trust basis, scope and lifecycle from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-003  Human and workload identity path mapping

This field guide helps the assessor evaluate human and workload identity path mapping without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for human and workload identity path mapping in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting human and workload identity path mapping. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for human and workload identity path mapping. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to human and workload identity path mapping scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for human and workload identity path mapping. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat human and workload identity path mapping. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for human and workload identity path mapping are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for human and workload identity path mapping from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-004  Delegation and privilege inheritance analysis

This field guide helps the assessor evaluate delegation and privilege inheritance analysis without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for delegation and privilege inheritance analysis in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting delegation and privilege inheritance analysis. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for delegation and privilege inheritance analysis. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to delegation and privilege inheritance analysis scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for delegation and privilege inheritance analysis. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat delegation and privilege inheritance analysis. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for delegation and privilege inheritance analysis are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for delegation and privilege inheritance analysis from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-005  Trust boundary definition and enforcement

This field guide helps the assessor evaluate trust boundary definition and enforcement without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for trust boundary definition and enforcement in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting trust boundary definition and enforcement. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for trust boundary definition and enforcement. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to trust boundary definition and enforcement scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for trust boundary definition and enforcement. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat trust boundary definition and enforcement. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for trust boundary definition and enforcement are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for trust boundary definition and enforcement from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-006  Provider trust and shared responsibility

This field guide helps the assessor evaluate provider trust and shared responsibility without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for provider trust and shared responsibility in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting provider trust and shared responsibility. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for provider trust and shared responsibility. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to provider trust and shared responsibility scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for provider trust and shared responsibility. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat provider trust and shared responsibility. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for provider trust and shared responsibility are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for provider trust and shared responsibility from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-007  Critical dependency and concentration analysis

This field guide helps the assessor evaluate critical dependency and concentration analysis without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for critical dependency and concentration analysis in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting critical dependency and concentration analysis. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for critical dependency and concentration analysis. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to critical dependency and concentration analysis scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for critical dependency and concentration analysis. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat critical dependency and concentration analysis. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for critical dependency and concentration analysis are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for critical dependency and concentration analysis from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-008  Material path construction

This field guide helps the assessor evaluate material path construction without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for material path construction in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting material path construction. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for material path construction. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to material path construction scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for material path construction. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat material path construction. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for material path construction are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for material path construction from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-009  Path condition and reachability validation

This field guide helps the assessor evaluate path condition and reachability validation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for path condition and reachability validation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting path condition and reachability validation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for path condition and reachability validation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to path condition and reachability validation scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for path condition and reachability validation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat path condition and reachability validation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for path condition and reachability validation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for path condition and reachability validation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-010  Control breakpoint mapping

This field guide helps the assessor evaluate control breakpoint mapping without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for control breakpoint mapping in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting control breakpoint mapping. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for control breakpoint mapping. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to control breakpoint mapping scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for control breakpoint mapping. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat control breakpoint mapping. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for control breakpoint mapping are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for control breakpoint mapping from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-011  Trust and privilege drift monitoring

This field guide helps the assessor evaluate trust and privilege drift monitoring without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for trust and privilege drift monitoring in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting trust and privilege drift monitoring. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for trust and privilege drift monitoring. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to trust and privilege drift monitoring scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for trust and privilege drift monitoring. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat trust and privilege drift monitoring. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for trust and privilege drift monitoring are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for trust and privilege drift monitoring from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-TRU-012  Trust graph quality and review governance

This field guide helps the assessor evaluate trust graph quality and review governance without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for trust graph quality and review governance in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting trust graph quality and review governance. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to trace the claimed state for trust graph quality and review governance. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to trust graph quality and review governance scope. |
| Validation move | Use an authorized representative procedure to trace implementation, operating condition and graph context for trust graph quality and review governance. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat trust graph quality and review governance. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for trust graph quality and review governance are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for trust graph quality and review governance from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-001  Authority inventory and action taxonomy

This field guide helps the assessor evaluate authority inventory and action taxonomy without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for authority inventory and action taxonomy in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting authority inventory and action taxonomy. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for authority inventory and action taxonomy. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to authority inventory and action taxonomy scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for authority inventory and action taxonomy. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat authority inventory and action taxonomy. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for authority inventory and action taxonomy are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for authority inventory and action taxonomy from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-002  Unique machine identity and attribution

This field guide helps the assessor evaluate unique machine identity and attribution without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for unique machine identity and attribution in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting unique machine identity and attribution. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for unique machine identity and attribution. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to unique machine identity and attribution scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for unique machine identity and attribution. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat unique machine identity and attribution. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for unique machine identity and attribution are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for unique machine identity and attribution from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-003  Least authority and bounded scope

This field guide helps the assessor evaluate least authority and bounded scope without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for least authority and bounded scope in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting least authority and bounded scope. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for least authority and bounded scope. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to least authority and bounded scope scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for least authority and bounded scope. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat least authority and bounded scope. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for least authority and bounded scope are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for least authority and bounded scope from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-004  Delegation and impersonation controls

This field guide helps the assessor evaluate delegation and impersonation controls without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for delegation and impersonation controls in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting delegation and impersonation controls. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for delegation and impersonation controls. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to delegation and impersonation controls scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for delegation and impersonation controls. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat delegation and impersonation controls. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for delegation and impersonation controls are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for delegation and impersonation controls from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-005  Meaningful approval for consequential action

This field guide helps the assessor evaluate meaningful approval for consequential action without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for meaningful approval for consequential action in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting meaningful approval for consequential action. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for meaningful approval for consequential action. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to meaningful approval for consequential action scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for meaningful approval for consequential action. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat meaningful approval for consequential action. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for meaningful approval for consequential action are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for meaningful approval for consequential action from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-006  Tool, plugin and MCP allowlisting

This field guide helps the assessor evaluate tool, plugin and MCP allowlisting without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for tool, plugin and MCP allowlisting in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting tool, plugin and MCP allowlisting. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for tool, plugin and MCP allowlisting. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to tool, plugin and MCP allowlisting scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for tool, plugin and MCP allowlisting. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat tool, plugin and MCP allowlisting. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for tool, plugin and MCP allowlisting are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for tool, plugin and MCP allowlisting from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-007  Authority amplification assessment

This field guide helps the assessor evaluate authority amplification assessment without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for authority amplification assessment in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting authority amplification assessment. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for authority amplification assessment. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to authority amplification assessment scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for authority amplification assessment. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat authority amplification assessment. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for authority amplification assessment are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for authority amplification assessment from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-008  Resource, iteration and transaction limits

This field guide helps the assessor evaluate resource, iteration and transaction limits without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for resource, iteration and transaction limits in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting resource, iteration and transaction limits. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for resource, iteration and transaction limits. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to resource, iteration and transaction limits scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for resource, iteration and transaction limits. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat resource, iteration and transaction limits. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for resource, iteration and transaction limits are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for resource, iteration and transaction limits from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-009  Data disclosure and destination authority

This field guide helps the assessor evaluate data disclosure and destination authority without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for data disclosure and destination authority in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting data disclosure and destination authority. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for data disclosure and destination authority. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to data disclosure and destination authority scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for data disclosure and destination authority. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat data disclosure and destination authority. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for data disclosure and destination authority are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for data disclosure and destination authority from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-010  Environment and duty separation

This field guide helps the assessor evaluate environment and duty separation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for environment and duty separation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting environment and duty separation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for environment and duty separation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to environment and duty separation scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for environment and duty separation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat environment and duty separation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for environment and duty separation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for environment and duty separation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-011  Authority revocation and end-to-end containment

This field guide helps the assessor evaluate authority revocation and end-to-end containment without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for authority revocation and end-to-end containment in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting authority revocation and end-to-end containment. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for authority revocation and end-to-end containment. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to authority revocation and end-to-end containment scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for authority revocation and end-to-end containment. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat authority revocation and end-to-end containment. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for authority revocation and end-to-end containment are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for authority revocation and end-to-end containment from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-AUT-012  Authority review, exception and recertification

This field guide helps the assessor evaluate authority review, exception and recertification without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for authority review, exception and recertification in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting authority review, exception and recertification. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to enumerate the claimed state for authority review, exception and recertification. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to authority review, exception and recertification scope. |
| Validation move | Use an authorized representative procedure to enumerate implementation, operating condition and graph context for authority review, exception and recertification. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat authority review, exception and recertification. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for authority review, exception and recertification are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for authority review, exception and recertification from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-001  Risk-based AI security validation strategy

This field guide helps the assessor evaluate risk-based AI security validation strategy without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for risk-based AI security validation strategy in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting risk-based AI security validation strategy. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for risk-based AI security validation strategy. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to risk-based AI security validation strategy scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for risk-based AI security validation strategy. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat risk-based AI security validation strategy. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for risk-based AI security validation strategy are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for risk-based AI security validation strategy from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-002  Graph-based threat modelling

This field guide helps the assessor evaluate graph-based threat modelling without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for graph-based threat modelling in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting graph-based threat modelling. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for graph-based threat modelling. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to graph-based threat modelling scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for graph-based threat modelling. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat graph-based threat modelling. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for graph-based threat modelling are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for graph-based threat modelling from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-003  Validation rules of engagement

This field guide helps the assessor evaluate validation rules of engagement without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for validation rules of engagement in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting validation rules of engagement. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for validation rules of engagement. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to validation rules of engagement scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for validation rules of engagement. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat validation rules of engagement. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for validation rules of engagement are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for validation rules of engagement from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-004  Model security and robustness validation

This field guide helps the assessor evaluate model security and robustness validation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for model security and robustness validation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting model security and robustness validation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for model security and robustness validation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to model security and robustness validation scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for model security and robustness validation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat model security and robustness validation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for model security and robustness validation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for model security and robustness validation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-005  Prompt, context and output security testing

This field guide helps the assessor evaluate prompt, context and output security testing without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for prompt, context and output security testing in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting prompt, context and output security testing. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for prompt, context and output security testing. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to prompt, context and output security testing scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for prompt, context and output security testing. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat prompt, context and output security testing. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for prompt, context and output security testing are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for prompt, context and output security testing from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-006  RAG, vector and memory security testing

This field guide helps the assessor evaluate rAG, vector and memory security testing without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for rAG, vector and memory security testing in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting rAG, vector and memory security testing. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for rAG, vector and memory security testing. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to rAG, vector and memory security testing scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for rAG, vector and memory security testing. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat rAG, vector and memory security testing. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for rAG, vector and memory security testing are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for rAG, vector and memory security testing from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-007  Agent and multi-agent security testing

This field guide helps the assessor evaluate agent and multi-agent security testing without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for agent and multi-agent security testing in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting agent and multi-agent security testing. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for agent and multi-agent security testing. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to agent and multi-agent security testing scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for agent and multi-agent security testing. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat agent and multi-agent security testing. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for agent and multi-agent security testing are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for agent and multi-agent security testing from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-008  MCP, plugin and tool security testing

This field guide helps the assessor evaluate mCP, plugin and tool security testing without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for mCP, plugin and tool security testing in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting mCP, plugin and tool security testing. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for mCP, plugin and tool security testing. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to mCP, plugin and tool security testing scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for mCP, plugin and tool security testing. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat mCP, plugin and tool security testing. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for mCP, plugin and tool security testing are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for mCP, plugin and tool security testing from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-009  AI supply-chain and pipeline validation

This field guide helps the assessor evaluate aI supply-chain and pipeline validation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI supply-chain and pipeline validation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI supply-chain and pipeline validation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for aI supply-chain and pipeline validation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI supply-chain and pipeline validation scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for aI supply-chain and pipeline validation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI supply-chain and pipeline validation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI supply-chain and pipeline validation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI supply-chain and pipeline validation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-010  AI infrastructure and runtime validation

This field guide helps the assessor evaluate aI infrastructure and runtime validation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI infrastructure and runtime validation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI infrastructure and runtime validation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for aI infrastructure and runtime validation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI infrastructure and runtime validation scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for aI infrastructure and runtime validation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI infrastructure and runtime validation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI infrastructure and runtime validation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI infrastructure and runtime validation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-011  Control-breakpoint effectiveness validation

This field guide helps the assessor evaluate control-breakpoint effectiveness validation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for control-breakpoint effectiveness validation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting control-breakpoint effectiveness validation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for control-breakpoint effectiveness validation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to control-breakpoint effectiveness validation scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for control-breakpoint effectiveness validation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat control-breakpoint effectiveness validation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for control-breakpoint effectiveness validation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for control-breakpoint effectiveness validation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-VAL-012  Finding traceability and closure validation

This field guide helps the assessor evaluate finding traceability and closure validation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for finding traceability and closure validation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting finding traceability and closure validation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to test the claimed state for finding traceability and closure validation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to finding traceability and closure validation scope. |
| Validation move | Use an authorized representative procedure to test implementation, operating condition and graph context for finding traceability and closure validation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat finding traceability and closure validation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for finding traceability and closure validation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for finding traceability and closure validation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-001  Enterprise AI policy and acceptable use

This field guide helps the assessor evaluate enterprise AI policy and acceptable use without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for enterprise AI policy and acceptable use in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting enterprise AI policy and acceptable use. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for enterprise AI policy and acceptable use. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to enterprise AI policy and acceptable use scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for enterprise AI policy and acceptable use. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat enterprise AI policy and acceptable use. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for enterprise AI policy and acceptable use are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for enterprise AI policy and acceptable use from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-002  AI risk appetite and decision thresholds

This field guide helps the assessor evaluate aI risk appetite and decision thresholds without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI risk appetite and decision thresholds in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI risk appetite and decision thresholds. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for aI risk appetite and decision thresholds. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI risk appetite and decision thresholds scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for aI risk appetite and decision thresholds. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI risk appetite and decision thresholds. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI risk appetite and decision thresholds are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI risk appetite and decision thresholds from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-003  AI governance operating model and accountability

This field guide helps the assessor evaluate aI governance operating model and accountability without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI governance operating model and accountability in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI governance operating model and accountability. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for aI governance operating model and accountability. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI governance operating model and accountability scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for aI governance operating model and accountability. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI governance operating model and accountability. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI governance operating model and accountability are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI governance operating model and accountability from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-004  AI use-case intake and registration

This field guide helps the assessor evaluate aI use-case intake and registration without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI use-case intake and registration in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI use-case intake and registration. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for aI use-case intake and registration. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI use-case intake and registration scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for aI use-case intake and registration. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI use-case intake and registration. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI use-case intake and registration are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI use-case intake and registration from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-005  Impact, affected-stakeholder and misuse assessment

This field guide helps the assessor evaluate impact, affected-stakeholder and misuse assessment without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for impact, affected-stakeholder and misuse assessment in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting impact, affected-stakeholder and misuse assessment. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for impact, affected-stakeholder and misuse assessment. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to impact, affected-stakeholder and misuse assessment scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for impact, affected-stakeholder and misuse assessment. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat impact, affected-stakeholder and misuse assessment. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for impact, affected-stakeholder and misuse assessment are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for impact, affected-stakeholder and misuse assessment from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-006  Prohibited and high-risk use screening

This field guide helps the assessor evaluate prohibited and high-risk use screening without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for prohibited and high-risk use screening in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting prohibited and high-risk use screening. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for prohibited and high-risk use screening. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to prohibited and high-risk use screening scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for prohibited and high-risk use screening. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat prohibited and high-risk use screening. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for prohibited and high-risk use screening are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for prohibited and high-risk use screening from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-007  Regulatory role, jurisdiction and obligation mapping

This field guide helps the assessor evaluate regulatory role, jurisdiction and obligation mapping without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for regulatory role, jurisdiction and obligation mapping in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting regulatory role, jurisdiction and obligation mapping. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for regulatory role, jurisdiction and obligation mapping. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to regulatory role, jurisdiction and obligation mapping scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for regulatory role, jurisdiction and obligation mapping. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat regulatory role, jurisdiction and obligation mapping. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for regulatory role, jurisdiction and obligation mapping are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for regulatory role, jurisdiction and obligation mapping from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-008  Lifecycle approval and material-change governance

This field guide helps the assessor evaluate lifecycle approval and material-change governance without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for lifecycle approval and material-change governance in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting lifecycle approval and material-change governance. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for lifecycle approval and material-change governance. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to lifecycle approval and material-change governance scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for lifecycle approval and material-change governance. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat lifecycle approval and material-change governance. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for lifecycle approval and material-change governance are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for lifecycle approval and material-change governance from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-009  Exception and risk-acceptance governance

This field guide helps the assessor evaluate exception and risk-acceptance governance without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for exception and risk-acceptance governance in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting exception and risk-acceptance governance. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for exception and risk-acceptance governance. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to exception and risk-acceptance governance scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for exception and risk-acceptance governance. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat exception and risk-acceptance governance. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for exception and risk-acceptance governance are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for exception and risk-acceptance governance from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-010  AI provider due diligence and contracting

This field guide helps the assessor evaluate aI provider due diligence and contracting without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI provider due diligence and contracting in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI provider due diligence and contracting. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for aI provider due diligence and contracting. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI provider due diligence and contracting scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for aI provider due diligence and contracting. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI provider due diligence and contracting. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI provider due diligence and contracting are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI provider due diligence and contracting from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-011  Role-based AI literacy and competence

This field guide helps the assessor evaluate role-based AI literacy and competence without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for role-based AI literacy and competence in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting role-based AI literacy and competence. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for role-based AI literacy and competence. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to role-based AI literacy and competence scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for role-based AI literacy and competence. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat role-based AI literacy and competence. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for role-based AI literacy and competence are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for role-based AI literacy and competence from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-GOV-012  Independent assurance and continuous review

This field guide helps the assessor evaluate independent assurance and continuous review without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for independent assurance and continuous review in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting independent assurance and continuous review. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to verify the claimed state for independent assurance and continuous review. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to independent assurance and continuous review scope. |
| Validation move | Use an authorized representative procedure to verify implementation, operating condition and graph context for independent assurance and continuous review. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat independent assurance and continuous review. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for independent assurance and continuous review are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for independent assurance and continuous review from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-001  AI activity telemetry coverage

This field guide helps the assessor evaluate aI activity telemetry coverage without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI activity telemetry coverage in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI activity telemetry coverage. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for aI activity telemetry coverage. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI activity telemetry coverage scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for aI activity telemetry coverage. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI activity telemetry coverage. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI activity telemetry coverage are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI activity telemetry coverage from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-002  Action attribution and non-repudiation

This field guide helps the assessor evaluate action attribution and non-repudiation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for action attribution and non-repudiation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting action attribution and non-repudiation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for action attribution and non-repudiation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to action attribution and non-repudiation scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for action attribution and non-repudiation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat action attribution and non-repudiation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for action attribution and non-repudiation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for action attribution and non-repudiation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-003  AI-specific detection and alerting

This field guide helps the assessor evaluate aI-specific detection and alerting without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI-specific detection and alerting in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI-specific detection and alerting. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for aI-specific detection and alerting. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI-specific detection and alerting scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for aI-specific detection and alerting. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI-specific detection and alerting. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI-specific detection and alerting are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI-specific detection and alerting from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-004  AI incident taxonomy and severity

This field guide helps the assessor evaluate aI incident taxonomy and severity without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for aI incident taxonomy and severity in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting aI incident taxonomy and severity. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for aI incident taxonomy and severity. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to aI incident taxonomy and severity scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for aI incident taxonomy and severity. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat aI incident taxonomy and severity. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for aI incident taxonomy and severity are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for aI incident taxonomy and severity from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-005  Incident triage and decision coordination

This field guide helps the assessor evaluate incident triage and decision coordination without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for incident triage and decision coordination in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting incident triage and decision coordination. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for incident triage and decision coordination. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to incident triage and decision coordination scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for incident triage and decision coordination. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat incident triage and decision coordination. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for incident triage and decision coordination are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for incident triage and decision coordination from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-006  Graph-aware containment planning

This field guide helps the assessor evaluate graph-aware containment planning without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for graph-aware containment planning in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting graph-aware containment planning. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for graph-aware containment planning. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to graph-aware containment planning scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for graph-aware containment planning. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat graph-aware containment planning. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for graph-aware containment planning are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for graph-aware containment planning from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-007  Agent kill, pause and isolation

This field guide helps the assessor evaluate agent kill, pause and isolation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for agent kill, pause and isolation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting agent kill, pause and isolation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for agent kill, pause and isolation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to agent kill, pause and isolation scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for agent kill, pause and isolation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat agent kill, pause and isolation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for agent kill, pause and isolation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for agent kill, pause and isolation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-008  Credential, token and delegation revocation

This field guide helps the assessor evaluate credential, token and delegation revocation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for credential, token and delegation revocation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting credential, token and delegation revocation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for credential, token and delegation revocation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to credential, token and delegation revocation scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for credential, token and delegation revocation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat credential, token and delegation revocation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for credential, token and delegation revocation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for credential, token and delegation revocation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-009  Safe rollback and configuration restoration

This field guide helps the assessor evaluate safe rollback and configuration restoration without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for safe rollback and configuration restoration in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting safe rollback and configuration restoration. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for safe rollback and configuration restoration. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to safe rollback and configuration restoration scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for safe rollback and configuration restoration. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat safe rollback and configuration restoration. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for safe rollback and configuration restoration are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for safe rollback and configuration restoration from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-010  Business recovery and compensation

This field guide helps the assessor evaluate business recovery and compensation without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for business recovery and compensation in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting business recovery and compensation. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for business recovery and compensation. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to business recovery and compensation scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for business recovery and compensation. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat business recovery and compensation. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for business recovery and compensation are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for business recovery and compensation from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-011  Incident evidence preservation and reconstruction

This field guide helps the assessor evaluate incident evidence preservation and reconstruction without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for incident evidence preservation and reconstruction in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting incident evidence preservation and reconstruction. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for incident evidence preservation and reconstruction. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to incident evidence preservation and reconstruction scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for incident evidence preservation and reconstruction. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat incident evidence preservation and reconstruction. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for incident evidence preservation and reconstruction are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for incident evidence preservation and reconstruction from the workpaper? |

72-CONTROL FIELD GUIDE

# ATG-RES-012  Resilience exercises, learning and improvement

This field guide helps the assessor evaluate resilience exercises, learning and improvement without changing the canonical objective in the Master Control Library. Read the official control record first and use this page as execution guidance.

| **Assessor lens** | **Field guidance** |
| --- | --- |
| Intent test | Explain the control outcome for resilience exercises, learning and improvement in one sentence and identify the decision it protects. |
| Interview prompt | Ask the accountable owner to describe a recent normal case, failed case, exception and change affecting resilience exercises, learning and improvement. |
| Preferred evidence | Obtain current authoritative records and technical or operating evidence that allow the assessor to reconstruct the claimed state for resilience exercises, learning and improvement. |
| Weak evidence | Policy-only, attestation-only, copied screenshot or generic provider material not bound to resilience exercises, learning and improvement scope. |
| Validation move | Use an authorized representative procedure to reconstruct implementation, operating condition and graph context for resilience exercises, learning and improvement. |
| Negative test | Identify one plausible bypass, missing condition, stale state or alternate path that could defeat resilience exercises, learning and improvement. |
| Scoring caution | Separate design, implementation and operating effectiveness; apply evidence cap and critical gates. |
| Finding cue | Draft only when criteria, evidenced condition, affected objects or paths and consequence for resilience exercises, learning and improvement are clear. |
| Reviewer challenge | Could another qualified assessor reproduce the conclusion for resilience exercises, learning and improvement from the workpaper? |
EVIDENCE INTERPRETATION

# 5.1  Policy and procedure

Use to support approved intent and responsibilities; reconcile to deployed state and operating records.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.2  Interview and attestation

Use for context and claimed practice; record role and scope; normally E2 until corroborated.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.3  Screenshot

Accept only with source, date, environment, scope, uncropped context and integrity explanation.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.4  Configuration export

Confirm system of record, tenant, filter, timestamp, inherited settings, completeness and independent corroboration.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.5  Runtime log and trace

Check event coverage, identity correlation, time synchronization, retention, integrity and representative period.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.6  Test evidence

Confirm authorization, procedure, version, environment, identity, expected result, actual result and restoration.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.7  Provider report

Bind service, period, responsibility and customer configuration; do not generalize beyond stated scope.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.8  Conflicting evidence

Preserve both sources, state exact proposition, compare quality, corroborate and record resolution or Inconclusive.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.9  Evidence freshness

Consider change rate, criticality and trigger events; avoid universal expiry unsupported by context.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

EVIDENCE INTERPRETATION

# 5.10  Evidence bundle

Assess independence and coverage; multiple items from one source do not automatically create corroboration.

| **Reviewer question** | **Pass condition** |
| --- | --- |
| Assertion | The source is linked to one precise proposition. |
| Grade | E0-E5 reflects source strength, not desired conclusion. |
| Quality | Relevance, provenance, integrity, currentness, scope and representativeness are reviewed. |
| Conflict | Disputing and qualifying evidence remains visible. |
| Confidence | Conclusion confidence is distinct from evidence grade. |
| Limit | Unsupported generalization is explicitly prohibited. |

PATH ASSESSMENT

# 6.1  Trust path

Trace reliance, assumptions, boundaries and evidence from source condition to target.

| **Path element** | **Assessor method** |
| --- | --- |
| Start condition | Define actor, access, state and initial capability. |
| Traversal | Verify every typed directional relationship. |
| Conditions | Record permission, protocol, data, approval, workflow, time and environment. |
| Authority | Identify effective action and amplification. |
| Target and consequence | State bounded material outcome. |
| Breakpoint | Map and test claimed control effect. |
| Residual | Check alternate and post-control routes. |
| State | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated with confidence. |

PATH ASSESSMENT

# 6.2  Identity and privilege path

Trace authentication, group, role, delegation, token and effective permission.

| **Path element** | **Assessor method** |
| --- | --- |
| Start condition | Define actor, access, state and initial capability. |
| Traversal | Verify every typed directional relationship. |
| Conditions | Record permission, protocol, data, approval, workflow, time and environment. |
| Authority | Identify effective action and amplification. |
| Target and consequence | State bounded material outcome. |
| Breakpoint | Map and test claimed control effect. |
| Residual | Check alternate and post-control routes. |
| State | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated with confidence. |

PATH ASSESSMENT

# 6.3  Authority-amplification path

Compare effective actionability before and after identity, tool, data, workflow or fan-out transition.

| **Path element** | **Assessor method** |
| --- | --- |
| Start condition | Define actor, access, state and initial capability. |
| Traversal | Verify every typed directional relationship. |
| Conditions | Record permission, protocol, data, approval, workflow, time and environment. |
| Authority | Identify effective action and amplification. |
| Target and consequence | State bounded material outcome. |
| Breakpoint | Map and test claimed control effect. |
| Residual | Check alternate and post-control routes. |
| State | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated with confidence. |

PATH ASSESSMENT

# 6.4  Agent and tool path

Trace goal, planner, agent, message, tool discovery, invocation, approval, action and outcome.

| **Path element** | **Assessor method** |
| --- | --- |
| Start condition | Define actor, access, state and initial capability. |
| Traversal | Verify every typed directional relationship. |
| Conditions | Record permission, protocol, data, approval, workflow, time and environment. |
| Authority | Identify effective action and amplification. |
| Target and consequence | State bounded material outcome. |
| Breakpoint | Map and test claimed control effect. |
| Residual | Check alternate and post-control routes. |
| State | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated with confidence. |

PATH ASSESSMENT

# 6.5  RAG and influence path

Trace source, ingestion, chunk, vector, retrieval, prompt influence, model output and downstream action.

| **Path element** | **Assessor method** |
| --- | --- |
| Start condition | Define actor, access, state and initial capability. |
| Traversal | Verify every typed directional relationship. |
| Conditions | Record permission, protocol, data, approval, workflow, time and environment. |
| Authority | Identify effective action and amplification. |
| Target and consequence | State bounded material outcome. |
| Breakpoint | Map and test claimed control effect. |
| Residual | Check alternate and post-control routes. |
| State | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated with confidence. |

PATH ASSESSMENT

# 6.6  Provider path

Trace customer-provider boundary, data movement, identity, shared responsibility, service dependency and exit.

| **Path element** | **Assessor method** |
| --- | --- |
| Start condition | Define actor, access, state and initial capability. |
| Traversal | Verify every typed directional relationship. |
| Conditions | Record permission, protocol, data, approval, workflow, time and environment. |
| Authority | Identify effective action and amplification. |
| Target and consequence | State bounded material outcome. |
| Breakpoint | Map and test claimed control effect. |
| Residual | Check alternate and post-control routes. |
| State | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated with confidence. |

PATH ASSESSMENT

# 6.7  Containment path

Trace detection, authority, kill, revocation, queue, downstream token, verification and residual route.

| **Path element** | **Assessor method** |
| --- | --- |
| Start condition | Define actor, access, state and initial capability. |
| Traversal | Verify every typed directional relationship. |
| Conditions | Record permission, protocol, data, approval, workflow, time and environment. |
| Authority | Identify effective action and amplification. |
| Target and consequence | State bounded material outcome. |
| Breakpoint | Map and test claimed control effect. |
| Residual | Check alternate and post-control routes. |
| State | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated with confidence. |

PATH ASSESSMENT

# 6.8  Recovery path

Trace rollback, data state, business transaction, compensation, evidence and return-to-service decision.

| **Path element** | **Assessor method** |
| --- | --- |
| Start condition | Define actor, access, state and initial capability. |
| Traversal | Verify every typed directional relationship. |
| Conditions | Record permission, protocol, data, approval, workflow, time and environment. |
| Authority | Identify effective action and amplification. |
| Target and consequence | State bounded material outcome. |
| Breakpoint | Map and test claimed control effect. |
| Residual | Check alternate and post-control routes. |
| State | Assign Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated with confidence. |
MATURITY CALIBRATION

# 7.1  M1 Initial

Ad hoc, person-dependent, fragmented and materially UNKNOWN.

| **Calibration lens** | **Assessor test** |
| --- | --- |
| Prerequisites | Verify all applicable lower-level requirements before M1 Initial. |
| Evidence | Apply the Maturity Model evidence floor; aspiration and pilot do not qualify. |
| Coverage | Confirm the result applies to the declared population. |
| Critical gates | Apply caps before level assignment. |
| Variation | Report capability distribution instead of averaging. |
| Emerging practice | Record higher-level strength without upgrading the whole capability. |

MATURITY CALIBRATION

# 7.2  M2 Repeatable

Recurring priority-scope practice with named owners and basic records.

| **Calibration lens** | **Assessor test** |
| --- | --- |
| Prerequisites | Verify all applicable lower-level requirements before M2 Repeatable. |
| Evidence | Apply the Maturity Model evidence floor; aspiration and pilot do not qualify. |
| Coverage | Confirm the result applies to the declared population. |
| Critical gates | Apply caps before level assignment. |
| Variation | Report capability distribution instead of averaging. |
| Emerging practice | Record higher-level strength without upgrading the whole capability. |

MATURITY CALIBRATION

# 7.3  M3 Defined

Approved standard applied consistently across defined scope with representative technical corroboration.

| **Calibration lens** | **Assessor test** |
| --- | --- |
| Prerequisites | Verify all applicable lower-level requirements before M3 Defined. |
| Evidence | Apply the Maturity Model evidence floor; aspiration and pilot do not qualify. |
| Coverage | Confirm the result applies to the declared population. |
| Critical gates | Apply caps before level assignment. |
| Variation | Report capability distribution instead of averaging. |
| Emerging practice | Record higher-level strength without upgrading the whole capability. |

MATURITY CALIBRATION

# 7.4  M4 Managed

Measured operation, tested critical controls, denominators, trends and active path management.

| **Calibration lens** | **Assessor test** |
| --- | --- |
| Prerequisites | Verify all applicable lower-level requirements before M4 Managed. |
| Evidence | Apply the Maturity Model evidence floor; aspiration and pilot do not qualify. |
| Coverage | Confirm the result applies to the declared population. |
| Critical gates | Apply caps before level assignment. |
| Variation | Report capability distribution instead of averaging. |
| Emerging practice | Record higher-level strength without upgrading the whole capability. |

MATURITY CALIBRATION

# 7.5  M5 Adaptive

Repeated change-aware operation, governed adaptation, outcome learning and reviewable automation.

| **Calibration lens** | **Assessor test** |
| --- | --- |
| Prerequisites | Verify all applicable lower-level requirements before M5 Adaptive. |
| Evidence | Apply the Maturity Model evidence floor; aspiration and pilot do not qualify. |
| Coverage | Confirm the result applies to the declared population. |
| Critical gates | Apply caps before level assignment. |
| Variation | Report capability distribution instead of averaging. |
| Emerging practice | Record higher-level strength without upgrading the whole capability. |

MATURITY CALIBRATION

# 7.6  Maturity false positives

Advanced tooling, isolated pilots, policy volume, one successful test, high control average and frequent dashboards do not independently establish maturity.

| **False signal** | **Correct interpretation** |
| --- | --- |
| Automation | Capability only if governed, evidenced and repeatable. |
| Pilot | Emerging practice, not organization-wide level. |
| Average | Descriptive metric, not maturity determination. |
| Certification | External scope may not match assessed capability. |
| Telemetry | Does not compensate for missing ownership or authority boundaries. |

MATURITY CALIBRATION

# 7.7  Maturity review checklist

Principal review challenges cumulative criteria, evidence floors, scope, gates, exceptions and target proportionality.

| **Question** | **Required answer** |
| --- | --- |
| What is the assessment unit? | Named population and period. |
| Which criteria are unmet? | Explicit prerequisite gaps. |
| What supports the level? | Evidence-linked capability records. |
| What caps the result? | Applicable critical gates. |
| What varies? | Capability and domain distribution. |
| Why this target? | Decision-context rationale, not automatic M5. |

FINDING WRITING

# 8.1  Observation

State an evidenced condition without implying deficiency unless criteria establish one.

| **Finding component** | **Writing rule** |
| --- | --- |
| Criteria | Quote or paraphrase the applicable canonical requirement accurately. |
| Condition | State observed scope, period and evidence. |
| Cause | Separate immediate and systemic contributors. |
| Consequence | Explain affected objects, paths and decision relevance. |
| Uncertainty | State confidence, UNKNOWNs and limitations. |
| Action | Name outcome, owner, evidence deliverable and retest. |

FINDING WRITING

# 8.2  Evidence gap

State the material assertion that cannot be supported and how that limits conclusions.

| **Finding component** | **Writing rule** |
| --- | --- |
| Criteria | Quote or paraphrase the applicable canonical requirement accurately. |
| Condition | State observed scope, period and evidence. |
| Cause | Separate immediate and systemic contributors. |
| Consequence | Explain affected objects, paths and decision relevance. |
| Uncertainty | State confidence, UNKNOWNs and limitations. |
| Action | Name outcome, owner, evidence deliverable and retest. |

FINDING WRITING

# 8.3  Control deficiency

State applicable objective, failed design/implementation/operation and affected scope.

| **Finding component** | **Writing rule** |
| --- | --- |
| Criteria | Quote or paraphrase the applicable canonical requirement accurately. |
| Condition | State observed scope, period and evidence. |
| Cause | Separate immediate and systemic contributors. |
| Consequence | Explain affected objects, paths and decision relevance. |
| Uncertainty | State confidence, UNKNOWNs and limitations. |
| Action | Name outcome, owner, evidence deliverable and retest. |

FINDING WRITING

# 8.4  Path exposure

State start, conditions, traversals, authority, target, controls, evidence and confidence.

| **Finding component** | **Writing rule** |
| --- | --- |
| Criteria | Quote or paraphrase the applicable canonical requirement accurately. |
| Condition | State observed scope, period and evidence. |
| Cause | Separate immediate and systemic contributors. |
| Consequence | Explain affected objects, paths and decision relevance. |
| Uncertainty | State confidence, UNKNOWNs and limitations. |
| Action | Name outcome, owner, evidence deliverable and retest. |

FINDING WRITING

# 8.5  Nonconformity

Use only against a defined applicable criterion; obtain legal validation for compliance claims.

| **Finding component** | **Writing rule** |
| --- | --- |
| Criteria | Quote or paraphrase the applicable canonical requirement accurately. |
| Condition | State observed scope, period and evidence. |
| Cause | Separate immediate and systemic contributors. |
| Consequence | Explain affected objects, paths and decision relevance. |
| Uncertainty | State confidence, UNKNOWNs and limitations. |
| Action | Name outcome, owner, evidence deliverable and retest. |

FINDING WRITING

# 8.6  Risk statement

Describe uncertain potential consequence in context without presenting an exposure index as probability.

| **Finding component** | **Writing rule** |
| --- | --- |
| Criteria | Quote or paraphrase the applicable canonical requirement accurately. |
| Condition | State observed scope, period and evidence. |
| Cause | Separate immediate and systemic contributors. |
| Consequence | Explain affected objects, paths and decision relevance. |
| Uncertainty | State confidence, UNKNOWNs and limitations. |
| Action | Name outcome, owner, evidence deliverable and retest. |

FINDING WRITING

# 8.7  Remediation objective

Define target outcome and path/control effect, not an unreviewed vendor prescription.

| **Finding component** | **Writing rule** |
| --- | --- |
| Criteria | Quote or paraphrase the applicable canonical requirement accurately. |
| Condition | State observed scope, period and evidence. |
| Cause | Separate immediate and systemic contributors. |
| Consequence | Explain affected objects, paths and decision relevance. |
| Uncertainty | State confidence, UNKNOWNs and limitations. |
| Action | Name outcome, owner, evidence deliverable and retest. |

FINDING WRITING

# 8.8  Closure statement

Reference implementation evidence, retest, residual path, reviewer and date; acceptance alone does not close.

| **Finding component** | **Writing rule** |
| --- | --- |
| Criteria | Quote or paraphrase the applicable canonical requirement accurately. |
| Condition | State observed scope, period and evidence. |
| Cause | Separate immediate and systemic contributors. |
| Consequence | Explain affected objects, paths and decision relevance. |
| Uncertainty | State confidence, UNKNOWNs and limitations. |
| Action | Name outcome, owner, evidence deliverable and retest. |

CALIBRATION CASES

# 9.1  Case: policy without operation

Approved policy exists; no technical evidence or representative test.

| **Calibration item** | **Expected treatment** |
| --- | --- |
| Correct result | Design may be supported by E3; operating effectiveness is Not Tested; no score above implementation-supported cap. |
| Common error | Select the most flattering source or collapse distinct states. |
| Required workpaper | Assertion, sources, scope, grade, confidence, result and reviewer rationale. |
| Variance review | Compare assessor decisions and isolate criterion or evidence-interpretation difference. |

CALIBRATION CASES

# 9.2  Case: high score, low coverage

All four assessed controls score 5; six applicable controls are UNKNOWN.

| **Calibration item** | **Expected treatment** |
| --- | --- |
| Correct result | Attainment may be high for determinate controls, but coverage is 40%; broad assurance is not supported. |
| Common error | Select the most flattering source or collapse distinct states. |
| Required workpaper | Assertion, sources, scope, grade, confidence, result and reviewer rationale. |
| Variance review | Compare assessor decisions and isolate criterion or evidence-interpretation difference. |

CALIBRATION CASES

# 9.3  Case: connected but not reachable

Graph shows an agent-tool-target chain; permission and approval conditions are absent.

| **Calibration item** | **Expected treatment** |
| --- | --- |
| Correct result | Path remains Candidate or Topological; do not claim Plausible, Validated or Exploitable. |
| Common error | Select the most flattering source or collapse distinct states. |
| Required workpaper | Assertion, sources, scope, grade, confidence, result and reviewer rationale. |
| Variance review | Compare assessor decisions and isolate criterion or evidence-interpretation difference. |

CALIBRATION CASES

# 9.4  Case: approval not transaction-bound

Human clicks approve before final action parameters can change.

| **Calibration item** | **Expected treatment** |
| --- | --- |
| Correct result | Approval design is inadequate for consequential action; validate mutation and replay conditions. |
| Common error | Select the most flattering source or collapse distinct states. |
| Required workpaper | Assertion, sources, scope, grade, confidence, result and reviewer rationale. |
| Variance review | Compare assessor decisions and isolate criterion or evidence-interpretation difference. |

CALIBRATION CASES

# 9.5  Case: automated inventory claim

Collectors completed successfully for configured sources.

| **Calibration item** | **Expected treatment** |
| --- | --- |
| Correct result | Report source coverage and blind spots; completion does not prove full estate discovery. |
| Common error | Select the most flattering source or collapse distinct states. |
| Required workpaper | Assertion, sources, scope, grade, confidence, result and reviewer rationale. |
| Variance review | Compare assessor decisions and isolate criterion or evidence-interpretation difference. |

CALIBRATION CASES

# 9.6  Case: accepted critical finding

Management accepts exposure while remediation is deferred.

| **Calibration item** | **Expected treatment** |
| --- | --- |
| Correct result | Technical control/path result remains unchanged; decision log records acceptance, authority, expiry and conditions. |
| Common error | Select the most flattering source or collapse distinct states. |
| Required workpaper | Assertion, sources, scope, grade, confidence, result and reviewer rationale. |
| Variance review | Compare assessor decisions and isolate criterion or evidence-interpretation difference. |

CALIBRATION CASES

# 9.7  Case: adaptive pilot

One team demonstrates automated change-triggered reassessment.

| **Calibration item** | **Expected treatment** |
| --- | --- |
| Correct result | Record emerging M5 practice; do not assign enterprise M5 without cumulative and representative evidence. |
| Common error | Select the most flattering source or collapse distinct states. |
| Required workpaper | Assertion, sources, scope, grade, confidence, result and reviewer rationale. |
| Variance review | Compare assessor decisions and isolate criterion or evidence-interpretation difference. |

CALIBRATION CASES

# 9.8  Case: provider assurance conflict

Provider report indicates control operation; tenant configuration shows the feature disabled.

| **Calibration item** | **Expected treatment** |
| --- | --- |
| Correct result | Preserve conflict, scope each source, investigate responsibility and avoid averaging evidence. |
| Common error | Select the most flattering source or collapse distinct states. |
| Required workpaper | Assertion, sources, scope, grade, confidence, result and reviewer rationale. |
| Variance review | Compare assessor decisions and isolate criterion or evidence-interpretation difference. |
QUALITY ASSURANCE

# 10.1  Quality-review sequence

Review scope, evidence, graph, controls, paths, maturity, scoring, findings, decisions and report claims in dependency order.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Competence, independence and role. |
| Item | Exact workpaper, result or claim reviewed. |
| Procedure | Recalculation, reperformance, trace or challenge completed. |
| Issue | Gap, severity and affected downstream output. |
| Resolution | Change, rationale, owner and evidence. |
| Status | Open, resolved, accepted limitation or release blocker. |

QUALITY ASSURANCE

# 10.2  Scope QA

Confirm denominator, exclusions, period, changes and claim boundaries.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Competence, independence and role. |
| Item | Exact workpaper, result or claim reviewed. |
| Procedure | Recalculation, reperformance, trace or challenge completed. |
| Issue | Gap, severity and affected downstream output. |
| Resolution | Change, rationale, owner and evidence. |
| Status | Open, resolved, accepted limitation or release blocker. |

QUALITY ASSURANCE

# 10.3  Evidence QA

Reperform samples, grade sources, inspect conflicts and test conclusion support.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Competence, independence and role. |
| Item | Exact workpaper, result or claim reviewed. |
| Procedure | Recalculation, reperformance, trace or challenge completed. |
| Issue | Gap, severity and affected downstream output. |
| Resolution | Change, rationale, owner and evidence. |
| Status | Open, resolved, accepted limitation or release blocker. |

QUALITY ASSURANCE

# 10.4  Graph and path QA

Verify direction, type, conditions, authority, path state, breakpoints and residual routes.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Competence, independence and role. |
| Item | Exact workpaper, result or claim reviewed. |
| Procedure | Recalculation, reperformance, trace or challenge completed. |
| Issue | Gap, severity and affected downstream output. |
| Resolution | Change, rationale, owner and evidence. |
| Status | Open, resolved, accepted limitation or release blocker. |

QUALITY ASSURANCE

# 10.5  Control and score QA

Check applicability, component results, evidence cap, gates, denominator and overrides.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Competence, independence and role. |
| Item | Exact workpaper, result or claim reviewed. |
| Procedure | Recalculation, reperformance, trace or challenge completed. |
| Issue | Gap, severity and affected downstream output. |
| Resolution | Change, rationale, owner and evidence. |
| Status | Open, resolved, accepted limitation or release blocker. |

QUALITY ASSURANCE

# 10.6  Maturity QA

Check cumulative criteria, evidence floor, capability variation and critical caps.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Competence, independence and role. |
| Item | Exact workpaper, result or claim reviewed. |
| Procedure | Recalculation, reperformance, trace or challenge completed. |
| Issue | Gap, severity and affected downstream output. |
| Resolution | Change, rationale, owner and evidence. |
| Status | Open, resolved, accepted limitation or release blocker. |

QUALITY ASSURANCE

# 10.7  Finding and report QA

Check definitions, duplicates, factual accuracy, cause, consequence, actionability and prohibited claims.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Competence, independence and role. |
| Item | Exact workpaper, result or claim reviewed. |
| Procedure | Recalculation, reperformance, trace or challenge completed. |
| Issue | Gap, severity and affected downstream output. |
| Resolution | Change, rationale, owner and evidence. |
| Status | Open, resolved, accepted limitation or release blocker. |

QUALITY ASSURANCE

# 10.8  Reviewer disposition

Resolve, condition, return, reject or recommend release with an auditable review record.

| **QA record** | **Required entry** |
| --- | --- |
| Reviewer | Competence, independence and role. |
| Item | Exact workpaper, result or claim reviewed. |
| Procedure | Recalculation, reperformance, trace or challenge completed. |
| Issue | Gap, severity and affected downstream output. |
| Resolution | Change, rationale, owner and evidence. |
| Status | Open, resolved, accepted limitation or release blocker. |

APPENDIX

# A.1  Assessor checklist

This appendix provides a controlled reusable reference for assessor checklist.

| **Field** | **Required content** |
| --- | --- |
| Before fieldwork | Charter, scope, conflicts, authorization, handling and artifact versions. |
| During fieldwork | Assertions, evidence, graph context, UNKNOWNs, daily synthesis and escalation. |
| Before conclusions | Applicability, tests, evidence caps, critical gates and coverage. |
| Before report | Reperformance, cross-artifact consistency, confidentiality and approvals. |

APPENDIX

# A.2  Interview note schema

This appendix provides a controlled reusable reference for interview note schema.

| **Field** | **Required content** |
| --- | --- |
| Identity | interview_id, date, participants and roles. |
| Scope | Topics, systems, environment and period. |
| Statements | Direct factual notes and assessor interpretation separated. |
| Evidence leads | Sources, owners and due dates. |
| Conflicts | Contradictions and follow-up. |
| Review | Participant validation where appropriate and assessor approval. |

APPENDIX

# A.3  Test record schema

This appendix provides a controlled reusable reference for test record schema.

| **Field** | **Required content** |
| --- | --- |
| Authorization | ROE reference, identity, environment and prohibited actions. |
| Objective | Assertion, control or path condition. |
| Procedure | Repeatable steps, tools and parameters. |
| Versions | System, model, prompt, data, agent, tool and configuration. |
| Result | Expected, observed, evidence and limitations. |
| Safety | Stop, restoration, incident and communication. |
| Review | Validator and quality reviewer. |

APPENDIX

# A.4  Calibration record

This appendix provides a controlled reusable reference for calibration record.

| **Field** | **Required content** |
| --- | --- |
| Case | Stable synthetic or approved case ID. |
| Inputs | Scope, graph, controls, evidence and decisions. |
| Independent results | Assessor ratings and rationale. |
| Variance | Exact criterion, evidence or scope disagreement. |
| Resolution | Canonical guidance or open issue. |
| Regression | Retest after method change. |

APPENDIX

# A.5  Assessor anti-pattern register

This appendix provides a controlled reusable reference for assessor anti-pattern register.

| **Field** | **Required content** |
| --- | --- |
| Policy equals effective | Separate design from operation. |
| Screenshot equals proof | Require source, context and integrity. |
| Connection equals path | Validate conditions and authority. |
| Tool output equals truth | Retain proposal and accountable review. |
| Average equals maturity | Use cumulative criteria and gates. |
| Acceptance equals closure | Preserve result and require retest. |
| No evidence equals failure | Use UNKNOWN or Not Tested. |
| Pilot equals enterprise | Report scope-limited emerging practice. |

APPENDIX

# A.6  Prohibited claims

This appendix provides a controlled reusable reference for prohibited claims.

| **Field** | **Required content** |
| --- | --- |
| Complete AI estate | Use measured scoped coverage. |
| Secure or safe because score is high | Scores do not prove absence of failure. |
| Compliant from mapping | Obtain fact-specific legal validation. |
| Exploitable from topology | Require validated conditions. |
| Continuous assurance from periodic pull | Require measured continuous coverage. |
| Certified by handbook | No certification scheme is established here. |

APPENDIX

# A.7  Known limitations

This appendix provides a controlled reusable reference for known limitations.

| **Field** | **Required content** |
| --- | --- |
| Human judgment | Calibration reduces but does not eliminate variance. |
| Technology change | Refresh playbooks and competence. |
| Provider opacity | Preserve UNKNOWN and limit conclusions. |
| Sampling | State population, method and limitations. |
| Legal interpretation | Use authorized specialists. |
| Handbook scope | Canonical artifacts override operational examples. |

APPENDIX

# A.8  Source and derivation register

This appendix provides a controlled reusable reference for source and derivation register.

| **Field** | **Required content** |
| --- | --- |
| Core Conceptual Model v1.1 | Graph, authority, evidence and invariant semantics. |
| Maturity Model v1.0 | Cumulative levels, evidence floors and gates. |
| Scoring Framework v1.0 | Control, coverage, confidence and path scoring. |
| Master Control Library v1.0 | 72 control objectives and validation expectations. |
| Evidence Model v1.0 | Evidence grades, quality, conflicts and lifecycle. |
| Assessment Methodology v1.0 | Thirteen phases, records, gates and QA. |

APPENDIX

# A.9  Release acceptance checklist

This appendix provides a controlled reusable reference for release acceptance checklist.

| **Field** | **Required content** |
| --- | --- |
| Semantic integrity | No contradiction with artifacts #1-#7. |
| Coverage | Competence, fieldwork, domains, 72 controls, evidence, paths, maturity, findings and QA. |
| Uniqueness | No duplicated control guide or long repeated block. |
| Safety | No procedure independently authorizes testing. |
| Calibration | Cases and reviewer variance process included. |
| Independent review | Architecture, AI security and assessor-method reviews recorded. |
| IP and confidentiality | Publication rights and sensitive content cleared. |
| Repository quality | Markdown, templates, schemas, changelog and contribution files validated. |

APPENDIX

# A.10  Final doctrine and approval record

This appendix provides a controlled reusable reference for final doctrine and approval record.

> **ASSESSOR DOCTRINE** Be precise. Be fair. Preserve uncertainty. Follow authorization. Test conditions. Protect critical gates. Make every conclusion reproducible.

| **Field** | **Required content** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Chief product architecture review | Internal author-loop completed; independent review pending. |
| AI security architecture review | Internal author-loop completed; independent review pending. |
| Assessor-method review | Independent validation pending. |
| Employer / IP / confidentiality review | Pending. |
| Licence and trademark approval | Pending. |
| Public release | Not approved until mandatory gates close. |

AI Trust Graph Assessor Handbook | Version 1.0 | Public-release candidate
