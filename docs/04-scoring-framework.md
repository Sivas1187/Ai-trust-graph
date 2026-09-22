[← Back to methodology index](../README.md)

# AI Trust Graph — Scoring Framework

*Version 1.0 | Separate measures for control state, evidence, confidence, coverage, maturity and path exposure*

> **PURPOSE** Convert evidence-backed assessment results into transparent, reproducible decision measures without hiding critical failures, UNKNOWNs, weak coverage or domain variation.

| **Field** | **Value** |
| --- | --- |
| Status | Public-release candidate |
| Author | Siva Sethumadhavan |
| Depends on | Manifesto v1.0; Core Conceptual Model v1.1; Maturity Model v1.0 |
| Primary outputs | Control score, evidence grade, confidence, coverage, domain scorecard, maturity profile and path-exposure band |
| Prohibited shortcut | One opaque enterprise trust score presented without its component measures |
| Product boundary | ExposureGraph algorithms, ranking and implementation logic excluded |

# 0.1  Authority, scope and publication boundary

This framework defines public scoring semantics for AI Trust Graph assessments. It is decision support, not certification, legal opinion, actuarial prediction or proof that an organization is secure.

Every score is bounded by an assessment unit, period, evidence snapshot, methodology version and reviewer status.

> **PUBLICATION SAFEGUARD** Complete employer, confidentiality, copyright, trademark, licence and independent review before public release.

| **Boundary** | **Rule** |
| --- | --- |
| Public | Scales, formulas, gates, confidence and reporting rules. |
| Private | Product algorithms, implementation code, ranking optimization and customer data. |
| Assessment result | Applies only to the stated scope and evidence period. |
| No implied compliance | Framework mappings do not establish legal compliance. |

# 0.2  Position in the artifact stack

The Manifesto defines commitments. The Core Conceptual Model defines semantics. The Maturity Model defines progressive capability. This framework defines how assessment observations are expressed numerically or ordinally without redefining maturity.

The Master Control Library will supply canonical controls. The Assessor Handbook will define execution and calibration procedures.

> **CANONICAL ARTIFACT MAP** Repository-wide authority, dependency order, bundle versions and content pins are governed by [METHODOLOGY_MANIFEST.md](../METHODOLOGY_MANIFEST.md). This artifact does not define a competing precedence chain.

| **Artifact** | **Scoring dependency** |
| --- | --- |
| Conceptual model | Objects, paths, authority, evidence and control invariants. |
| Maturity model | Rule-based M1-M5 capability result; not replaced by averages. |
| Control library | Control criteria, applicability, criticality and evidence. |
| Assessor handbook | Sampling, testing, review and dispute resolution. |
| Reporting standard | Audience-specific presentation and limitation language. |

# 0.3  Why scoring is separated

A single number collapses distinct questions: whether controls exist, whether they work, how much evidence exists, how much scope was assessed, how mature the organization is and how material a path may be.

This framework keeps those questions separate and combines them only where the combination has a defined decision purpose.

| **Question** | **Primary measure** |
| --- | --- |
| Is the control designed and operating? | Control-assurance score, 0-5. |
| What supports the conclusion? | Evidence grade, E0-E5. |
| How reliable is the conclusion? | Confidence, High/Medium/Low/Not rated. |
| How much of the scope is represented? | Coverage percentage plus denominator. |
| How institutionalized is capability? | Maturity M1-M5, rule-based. |
| Which path needs priority? | Path-exposure band and component profile. |
| What should leadership see? | Six-domain scorecard, not an opaque total. |

# 0.4  Scoring invariants

These invariants are mandatory and override convenience, dashboard aesthetics and tool defaults.

| **ID** | **Invariant** |
| --- | --- |
| SC-INV-01 | UNKNOWN is not zero, weak, safe or effective. |
| SC-INV-02 | Evidence grade and confidence are not added to control effectiveness. |
| SC-INV-03 | Maturity remains cumulative and rule-based; averages do not determine it. |
| SC-INV-04 | Critical gates cap or invalidate a result before aggregation. |
| SC-INV-05 | Excluded and Not Applicable items require explicit rationale. |
| SC-INV-06 | Coverage includes a visible denominator and unresolved population. |
| SC-INV-07 | Severity and confidence remain separate. |
| SC-INV-08 | A topological path does not receive exploitability credit without validated conditions. |
| SC-INV-09 | Scores are versioned and do not rewrite prior assessment runs. |
| SC-INV-10 | No composite score may be labelled compliant, safe, trustworthy or certified. |

# 0.5  Normative result states

Numeric control scores are used only when the control state is determinate. Non-numeric states remain reportable and visible.

| **State** | **Numeric treatment** | **Reporting treatment** |
| --- | --- | --- |
| Not Assessed | No numeric value. | Included in assessment-scope gap. |
| UNKNOWN | No numeric value. | Included in uncertainty and evidence-gap counts. |
| Inconclusive | No numeric value. | Included in inconclusive count with reason. |
| Not Tested | No numeric value for effectiveness. | May retain a design score if separately supported. |
| Not Applicable | Excluded from denominator only with approved rationale. | Reported with rationale and reviewer. |
| Determinate 0-5 | Included in applicable scored denominator. | Reported with evidence, confidence and limitations. |

# 0.6  Measurement architecture

The framework uses layered measures. Each layer can be inspected independently and traced to source records.

> **SCORING CHAIN** Assessment assertion -> Control state -> Evidence grade -> Confidence -> Coverage -> Capability/domain scorecard -> Maturity profile -> Path-exposure and decision

| **Layer** | **Output** | **Never infer** |
| --- | --- | --- |
| Assertion | Observed, user-provided, inferred, potential or UNKNOWN state. | Truth from model confidence. |
| Control | Design and effectiveness result, plus 0-5 score if determinate. | Effectiveness from policy alone. |
| Evidence | E0-E5 and source attributes. | Risk from evidence weakness alone. |
| Coverage | Measured denominator and assessed proportion. | Completeness from collection completion. |
| Maturity | M1-M5 cumulative result. | Maturity from average control score. |
| Path | Exposure band and component profile. | Exploitability from topology. |
| Executive | Six-domain scorecard and gates. | One universal trustworthiness number. |

# 0.7  Assessment unit and denominator

Every calculation declares what population it represents. Typical units include enterprise, portfolio, business unit, platform, system, use case, path, control set or evidence set.

Where populations differ materially by environment, autonomy, data, provider or criticality, create separate scorecards instead of blending them.

| **Denominator** | **Required definition** |
| --- | --- |
| Control denominator | Applicable canonical controls for the declared scope and profile. |
| Asset denominator | Defined inventory population and sources used to estimate completeness. |
| Path denominator | Material candidate or approved paths included in the analysis. |
| Evidence denominator | Material assertions requiring support. |
| Maturity denominator | Applicable mandatory capabilities in the Maturity Model. |
| Time denominator | Period represented by monitoring, testing or samples. |

# 0.8  Versioning and reproducibility

A scoring run records methodology, ontology, maturity model, control library, formula version, data snapshot, reviewer decisions and exclusions.

Reproducibility means another qualified reviewer can reconstruct the calculation and rationale. It does not mean a later run must produce the same result after the system or evidence changes.

| **Run field** | **Minimum value** |
| --- | --- |
| run_id | Stable identifier. |
| scope_version | Assessment boundary and population version. |
| method_versions | Artifact and formula versions. |
| evidence_snapshot | Sources, dates, grades and coverage. |
| score_inputs | Control states, paths, gates and overrides. |
| review_state | Provisional, quality-reviewed or final within scope. |
| supersession | Link to prior and later runs without rewriting history. |

# 0.9  Assessor judgment and overrides

Judgment is allowed only through defined fields and documented rationale. A score override cannot erase the original calculated result.

Material overrides require evidence, named approver, reason, expiry or review trigger, and impact on downstream reporting.

| **Override type** | **Permitted use** |
| --- | --- |
| Applicability | Include or exclude a control with evidence-backed rationale. |
| Criticality | Change a control or path criticality for specific context. |
| Formula exception | Use an approved alternative when the standard formula is unsuitable. |
| Data correction | Correct a source or calculation error with audit trail. |
| Management acceptance | Does not change the assessment score; changes disposition only. |
| Confidence adjustment | Reflect documented evidence conflict or sampling limitation. |

# 0.10  Anti-gaming doctrine

Scores must resist policy-only inflation, selective scope, evidence flooding, pilot inflation, average masking, hidden UNKNOWNs and technology-purchase substitution.

| **Gaming pattern** | **Framework response** |
| --- | --- |
| Exclude difficult systems | Disclose exclusion and prohibit enterprise generalization. |
| Mark UNKNOWN as zero | Reject; UNKNOWN remains non-numeric and visible. |
| Ignore UNKNOWN in headline | Show assessed coverage and uncertainty beside attainment. |
| Average away critical failure | Apply gate before aggregation. |
| Use high maturity pilot | Report as emerging practice, not organization maturity. |
| Treat tool deployment as control effectiveness | Require operating evidence and representative tests. |
| Increase evidence count | Assess relevance, currentness, scope and corroboration. |
| Management acceptance lowers risk score | Acceptance changes disposition, not assessed exposure. |

# 1.1  Control-assurance scale

Control-assurance scale is one component of the control record. It must be accompanied by evidence, confidence, scope, test status and applicable gates.

| **Score** | **Label** | **Definition** |
| --- | --- | --- |
| 0 | Confirmed absent | No control and no credible plan after scope and evidence check. |
| 1 | Initial / ad hoc | Inconsistent, person-dependent or unsupported by repeatable evidence. |
| 2 | Partially designed | Some required elements exist, but material design gaps remain. |
| 3 | Implemented | Implemented in scope, but operating effectiveness or coverage is not fully verified. |
| 4 | Verified effective | Design and operation are supported by sufficient current evidence and representative testing. |
| 5 | Adaptive / continuously assured | Effective control is monitored or automated, responds to material change and retains reviewable evidence. |

# 1.2  Design score

Design score is one component of the control record. It must be accompanied by evidence, confidence, scope, test status and applicable gates.

| **Score** | **Label** | **Definition** |
| --- | --- | --- |
| 0 | Absent | No applicable design or credible requirement. |
| 1 | Informal | Intent exists but is not consistently defined. |
| 2 | Partial | Some elements, roles or boundaries are defined; material gaps remain. |
| 3 | Adequate | Design addresses criterion and relevant scope. |
| 4 | Strong | Design addresses dependencies, bypass, exceptions and failure conditions. |
| 5 | Adaptive design | Design criteria update through change, outcomes and independent challenge. |

# 1.3  Implementation score

Implementation score is one component of the control record. It must be accompanied by evidence, confidence, scope, test status and applicable gates.

| **Score** | **Label** | **Definition** |
| --- | --- | --- |
| 0 | Not implemented | Confirmed absent in assessed scope. |
| 1 | Isolated | Implemented by individuals or isolated systems. |
| 2 | Partial coverage | Implemented for part of applicable scope. |
| 3 | Implemented | Implemented across defined applicable scope. |
| 4 | Measured implementation | Coverage, configuration and exceptions are measured. |
| 5 | Change-aware implementation | Implementation adapts through governed, validated change mechanisms. |

# 1.4  Operating-effectiveness score

Operating-effectiveness score is one component of the control record. It must be accompanied by evidence, confidence, scope, test status and applicable gates.

| **Score** | **Label** | **Definition** |
| --- | --- | --- |
| 0 | Ineffective | Representative evidence shows failure or absence. |
| 1 | Unreliable | Operation is inconsistent or person-dependent. |
| 2 | Partially effective | Some operation supported; material failures or gaps remain. |
| 3 | Operating | Recent evidence supports operation, with bounded limitations. |
| 4 | Verified effective | Representative tests and current evidence support intended effect. |
| 5 | Adaptive effectiveness | Sustained operation, change response and regression assurance are evidenced. |

# 1.5  Overall control-assurance score

The overall 0-5 control-assurance score is the minimum of available determinate design, implementation and operating-effectiveness components after evidence-cap and critical-gate review. This conservative rule prevents strong design from masking weak operation.

If operating effectiveness was not tested, the overall score cannot exceed 3. If implementation is UNKNOWN, no overall numeric score is issued.

> **FORMULA** Control Assurance Score = minimum of applicable determinate component scores, then apply evidence cap and critical gate.

| **Condition** | **Treatment** |
| --- | --- |
| All three components determinate | Use the minimum, with rationale. |
| Operating effectiveness Not Tested | Cap overall at 3 and show Not Tested. |
| Design determinate, implementation UNKNOWN | No overall numeric score. |
| Confirmed absent applicable control | Overall score 0. |
| Not Applicable | Exclude only with approved rationale. |
| Material critical-gate failure | Apply the gate cap or invalidate score. |

# 1.6  Control criticality

Control criticality describes the consequence of control failure in the assessed context. It is independent of how well the control is implemented.

| **Class** | **Definition** | **Use** |
| --- | --- | --- |
| Standard | Failure affects a bounded local condition. | Normal quality review. |
| Important | Failure can expose a material relationship or control dependency. | Enhanced evidence or testing. |
| Critical | Failure can enable a high-impact path, irreversible action or mandatory requirement. | E5 evidence expected for score 4-5; gate may apply. |
| Systemic | Failure can affect multiple material paths, tenants, systems or decisions. | Independent validation and resilience analysis required. |

# 1.7  Applicability and profiles

Applicability is determined from use case, architecture, authority, data, provider, jurisdiction, environment and assessment profile. It is not selected to improve a score.

Profile definitions are versioned and list mandatory, conditional and supplementary controls.

| **State** | **Denominator treatment** |
| --- | --- |
| Mandatory and applicable | Included. |
| Conditional and condition met | Included. |
| Conditional and condition not met | Excluded with recorded condition. |
| Supplementary selected | Included in supplementary scorecard. |
| Not Applicable | Excluded after documented review. |
| Unresolved applicability | No final aggregate; report provisional or Inconclusive. |

# 1.8  Evidence-supported score cap

The evidence cap limits the strongest control conclusion the available evidence can support. It does not convert evidence quality into effectiveness.

The underlying assessor observation remains visible even when the supported score is capped.

| **Evidence** | **Maximum supported control score** | **Reason** |
| --- | --- | --- |
| E0 | No numeric score | No evidence; result is UNKNOWN or Not Tested. |
| E1 | 1 provisional | Inference supports a hypothesis, not implementation. |
| E2 | 2 provisional | Attestation supports claimed practice, not technical operation. |
| E3 | 3 | Approved documentation can support design and implementation intent. |
| E4 | 4 | Corroborated technical evidence can support verified operation in observed scope. |
| E5 | 5 | Direct current technical and representative test or operating evidence can support adaptive or continuously assured claims. |

# 1.9  Control score examples

The examples are synthetic and demonstrate calculation logic only.

| **Scenario** | **Design** | **Implementation** | **Operation** | **Evidence** | **Result** |
| --- | --- | --- | --- | --- | --- |
| Policy approved; no configuration evidence | 3 | UNKNOWN | Not Tested | E3 | No overall numeric score. |
| Configuration implemented; no test | 3 | 3 | Not Tested | E4 | 3, operation Not Tested. |
| Representative test passes; current evidence | 4 | 4 | 4 | E5 | 4. |
| Adaptive policy engine observed once | 5 | 4 | 4 | E5 | 4; adaptive claim not yet sustained. |
| Critical control fails one representative test | 4 | 4 | 0 | E5 | 0 plus critical-gate review. |

# 1.10  Control closure and score change

A remediation does not improve a score until implementation and required retest are evidenced. Management acceptance, planned action or target date does not change the assessed control score.

Score change records retain prior value, new value, evidence, reviewer, date, reason and affected paths.

> **CLOSURE RULE** Close the finding only after current implementation evidence and representative retest support the intended control effect and residual path is reassessed.

# 2.1  Evidence grades E0-E5

Evidence grade describes the source strength for an assertion, not the quality of the control or severity of risk.

| **Grade** | **Definition** | **Permitted conclusion** |
| --- | --- | --- |
| E0 | No evidence. | UNKNOWN or Not Tested. |
| E1 | Inference or uncorroborated signal. | Candidate hypothesis. |
| E2 | Owner or stakeholder attestation. | Claimed practice. |
| E3 | Approved documentary evidence. | Design or governance intent. |
| E4 | Corroborated technical evidence. | Implementation or operation within observed scope. |
| E5 | Direct current technical evidence plus representative test or operating record. | Operating effectiveness within stated limits. |

# 2.2  Evidence quality dimensions

Evidence grade is supplemented by quality dimensions because two sources in the same grade may differ materially.

| **Dimension** | **Review question** |
| --- | --- |
| Relevance | Does the source directly support the assertion? |
| Provenance | Where did it originate, and who controls it? |
| Integrity | Can extraction, transformation or tampering be assessed? |
| Currentness | Does it still represent the assessed state? |
| Scope | Which systems, environments, periods and population does it cover? |
| Corroboration | Is it supported by an independent source or test? |
| Representativeness | Does the sample support the stated population? |
| Limitations | What conclusion can it not support? |

# 2.3  Confidence scale

Confidence is attached to a specific conclusion after evidence quality, conflict, sampling and reviewer judgment. It is not a numerical multiplier in v1.0.

| **Confidence** | **Definition** |
| --- | --- |
| High | Current, relevant and corroborated evidence covers the material scope; no unresolved conflict would change the result. |
| Medium | Evidence supports the result, but bounded gaps in sample, freshness, scope or corroboration remain. |
| Low | Result relies materially on attestation, inference, narrow sample, stale evidence or unresolved conflict. |
| Not rated | Evidence cannot support a determinate conclusion. |

# 2.4  Confidence decision rules

Confidence is determined by rule-guided review rather than adding evidence attributes into a pseudo-precise number.

| **Condition** | **Maximum confidence** |
| --- | --- |
| Material assertion supported only by E1-E2 | Low. |
| E3 plus representative E4, bounded gaps | Medium. |
| Current E4-E5 across material scope with corroboration | High. |
| Material contradiction unresolved | Low or Not rated. |
| Evidence stale after material change | Low or Not rated. |
| Sample denominator undefined | Low. |
| Reviewer conflict unresolved | Provisional; not final. |

# 2.5  Coverage measures

Coverage reports how much of the declared population was represented. Coverage never proves completeness and must identify the denominator.

| **Measure** | **Formula** |
| --- | --- |
| Assessment coverage | Applicable items with determinate or non-determinate assessment activity / all applicable items. |
| Determinate coverage | Applicable items with numeric determinate result / all applicable items. |
| Technical-evidence coverage | Applicable items supported by E4-E5 / all applicable items. |
| Critical-control validation coverage | Critical applicable controls with representative tests / all critical applicable controls. |
| Asset attribution coverage | In-scope assets with validated owner / in-scope discovered assets. |
| Path validation coverage | Material paths validated or invalidated / material paths selected for validation. |

# 2.6  Coverage display rules

Coverage is displayed beside attainment. A high control average with low determinate coverage must not be presented as strong assurance.

| **Display** | **Required companion** |
| --- | --- |
| Average control score | Determinate coverage, UNKNOWN count and critical gates. |
| Verified-effective percentage | Applicable denominator and E4-E5 coverage. |
| Maturity profile | Evidence confidence and not-assessed capabilities. |
| Residual-risk count | Path-selection method and unassessed material targets. |
| Continuous-assurance claim | Source freshness, monitoring coverage and reassessment triggers. |

# 2.7  Uncertainty register

Every scoring run carries an uncertainty register for UNKNOWN, Inconclusive, stale, conflicting and out-of-scope items.

Uncertainty can increase review priority, but it must not be silently converted into adverse or positive control scores.

| **Uncertainty type** | **Treatment** |
| --- | --- |
| UNKNOWN fact | Record potential materiality and validation owner. |
| Conflicting evidence | Preserve sources and decision needed. |
| Stale evidence | Reduce confidence or reopen assessment. |
| Unmeasured population | Disclose absent denominator; limit coverage claim. |
| Unvalidated path condition | Keep path Candidate or Plausible, not Exploitable. |
| Unresolved applicability | Prevent final domain aggregation. |

# 2.8  Evidence conflict resolution

Conflicts are resolved through a decision record, not by selecting the source that gives the preferred score.

| **Step** | **Required action** |
| --- | --- |
| 1 | Identify exact assertions in conflict. |
| 2 | Compare provenance, scope, date, integrity and directness. |
| 3 | Seek independent technical corroboration where material. |
| 4 | Retain both sources and reviewer rationale. |
| 5 | Set confidence and score state consistent with unresolved limitations. |
| 6 | Record supersession only when the prior assertion is demonstrably replaced. |

# 2.9  Sampling and representativeness

Sampling supports a stated population only when the population, selection method, period and limitations are explicit.

This framework does not prescribe statistical confidence intervals. Where statistical assurance is claimed, an appropriately qualified method must be applied and documented.

| **Sampling field** | **Required value** |
| --- | --- |
| Population | Defined universe and source. |
| Selection method | Risk-based, random, stratified, judgmental or complete. |
| Sample size | Exact number and rationale. |
| Period | Time represented. |
| Exceptions | Nature and rate, without extrapolation unless justified. |
| Limitations | What the sample cannot support. |

# 2.10  Evidence aging and rescoring

Evidence validity depends on change rate, criticality and source type. A fixed universal expiry is not imposed.

Material change can invalidate a score before a nominal review date. Rescoring creates a new run or version and preserves the prior result.

> **CHANGE RULE** Reassess when the model, prompt, identity, tool, data, provider, pipeline, runtime, policy, control or relevant threat condition changes materially.

# 3.1  Maturity score relationship

Maturity M1-M5 remains the result produced by the Maturity Model using cumulative criteria and critical gates. It is not calculated from average control scores.

Control scores may provide supporting evidence for maturity criteria but cannot bypass missing institutional prerequisites.

> **NON-SUBSTITUTION RULE** A domain average of 4.2 does not mean M4. M4 requires the complete applicable M4 maturity criteria and evidence gates.

# 3.2  Capability attainment view

For planning only, a capability attainment view may show how many criteria are met at each maturity level. It is supplementary and cannot determine the maturity level.

| **View** | **Formula / rule** |
| --- | --- |
| Criteria completion | Met applicable criteria / all applicable criteria at the selected level. |
| Evidence readiness | Criteria with sufficient evidence / criteria requiring evidence. |
| Gate readiness | Passed applicable gates / applicable gates. |
| Emerging strengths | Higher-level criteria evidenced above the current maturity level. |
| Blocking prerequisites | Lower-level criteria preventing progression. |

# 3.3  Six-domain scorecard

The executive scorecard displays one row for each canonical domain: Discovery and AIBOM; Trust and Privilege Paths; Authority Governance; AI Security Validation; AI Governance and Assurance; Operational Resilience.

| **Field** | **Required output** |
| --- | --- |
| Maturity | M1-M5 or non-level state. |
| Control attainment | Average only across determinate applicable scores. |
| Determinate coverage | Percentage and denominator. |
| E4-E5 coverage | Technical-evidence proportion and denominator. |
| Confidence | High, Medium, Low or Not rated. |
| Critical gates | Open, passed, not applicable or unresolved. |
| High/Critical paths | Count only from defined assessed path population. |
| Target state | Risk-based target and date. |

# 3.4  Domain control attainment

Domain Control Attainment (DCA) is the mean of determinate applicable control-assurance scores divided by 5 and expressed as a percentage. It describes scored control performance only.

DCA is always accompanied by determinate coverage and gate status. Items with UNKNOWN or Not Assessed state are excluded from the arithmetic but remain visible in coverage.

> **FORMULA** DCA = 100 x sum of determinate control scores / (5 x number of determinate applicable controls).

| **Example** | **Result** |
| --- | --- |
| Eight applicable controls; six determinate scores total 21 | DCA = 70%; determinate coverage = 75% (6/8). |
| Four determinate controls all score 5; six UNKNOWN | DCA = 100%; determinate coverage = 40%; assurance claim remains weak. |
| Critical gate open | DCA may be shown, but domain conclusion is capped or invalidated. |

# 3.5  Verified-control rate

Verified-Control Rate (VCR) shows the proportion of applicable controls scoring 4 or 5 with sufficient E4-E5 evidence.

Controls scoring 4 or 5 without the required evidence are capped before this rate is calculated.

> **FORMULA** VCR = applicable controls with evidence-supported score 4 or 5 / all applicable controls.

| **Companion measure** | **Why required** |
| --- | --- |
| E4-E5 evidence coverage | Shows technical support across the population. |
| Critical-control VCR | Highlights validation of high-leverage controls. |
| UNKNOWN count | Prevents uncertainty from disappearing. |
| Not Tested count | Shows limits on effectiveness claims. |

# 3.6  Unknown and inconclusive rates

Uncertainty rates quantify assessment limitations without treating them as failures.

| **Measure** | **Formula** |
| --- | --- |
| UNKNOWN rate | Applicable controls with UNKNOWN state / all applicable controls. |
| Inconclusive rate | Applicable controls with Inconclusive state / all applicable controls. |
| Not Tested rate | Applicable controls requiring effectiveness testing but not tested / such controls. |
| Stale evidence rate | Applicable material assertions with stale evidence / applicable material assertions. |
| Open evidence conflict rate | Material assertions with unresolved conflict / material assertions reviewed. |

# 3.7  Critical-control scorecard

Critical and systemic controls receive a dedicated view. Their performance must not be blended into standard controls only.

| **Metric** | **Treatment** |
| --- | --- |
| Critical controls applicable | Exact denominator. |
| Verified effective | Score 4-5 with required E5 or approved equivalent evidence. |
| Failed | Score 0-2 or critical test failure. |
| Not Tested / UNKNOWN | Separate counts and affected paths. |
| Critical gates | Cap or invalidation applied before executive conclusion. |
| Residual paths | Paths remaining after control operation or remediation. |

# 3.8  Discovery scorecard

Inventory attribution, AIBOM, source coverage, shadow AI and evidence quality. Metrics require declared denominators and do not by themselves define maturity.

| **Metric** | **Reporting rule** |
| --- | --- |
| Asset attribution coverage | Define numerator, denominator, period, evidence and limitation. |
| Source coverage | Define numerator, denominator, period, evidence and limitation. |
| AIBOM reconciliation rate | Define numerator, denominator, period, evidence and limitation. |
| Stale/orphan rate | Define numerator, denominator, period, evidence and limitation. |
| UNKNOWN ownership rate | Define numerator, denominator, period, evidence and limitation. |

# 3.9  Trust scorecard

Trust relationships, identity paths, boundaries, material paths and breakpoints. Metrics require declared denominators and do not by themselves define maturity.

| **Metric** | **Reporting rule** |
| --- | --- |
| Approved-edge coverage | Define numerator, denominator, period, evidence and limitation. |
| Material-path validation coverage | Define numerator, denominator, period, evidence and limitation. |
| Stale-edge rate | Define numerator, denominator, period, evidence and limitation. |
| High-value target path count | Define numerator, denominator, period, evidence and limitation. |
| Breakpoint validation coverage | Define numerator, denominator, period, evidence and limitation. |

# 3.10  Authority scorecard

Authority inventory, delegation, approval, amplification, revocation and exceptions. Metrics require declared denominators and do not by themselves define maturity.

| **Metric** | **Reporting rule** |
| --- | --- |
| High-impact authority coverage | Define numerator, denominator, period, evidence and limitation. |
| Validated delegation coverage | Define numerator, denominator, period, evidence and limitation. |
| Enforceable approval coverage | Define numerator, denominator, period, evidence and limitation. |
| Revocation test coverage | Define numerator, denominator, period, evidence and limitation. |
| Amplification-path count | Define numerator, denominator, period, evidence and limitation. |

# 3.11  Security-validation scorecard

Threat hypotheses, safe tests, control effectiveness, findings and closure. Metrics require declared denominators and do not by themselves define maturity.

| **Metric** | **Reporting rule** |
| --- | --- |
| Material-path test coverage | Define numerator, denominator, period, evidence and limitation. |
| Critical-control VCR | Define numerator, denominator, period, evidence and limitation. |
| Finding evidence completeness | Define numerator, denominator, period, evidence and limitation. |
| Independent retest rate | Define numerator, denominator, period, evidence and limitation. |
| Recurring failure rate | Define numerator, denominator, period, evidence and limitation. |

# 3.12  Governance scorecard

Use-case ownership, tiering, decisions, obligations, exceptions and assurance. Metrics require declared denominators and do not by themselves define maturity.

| **Metric** | **Reporting rule** |
| --- | --- |
| Registered-use coverage | Define numerator, denominator, period, evidence and limitation. |
| Owner coverage | Define numerator, denominator, period, evidence and limitation. |
| Decision-condition closure | Define numerator, denominator, period, evidence and limitation. |
| Expired-exception rate | Define numerator, denominator, period, evidence and limitation. |
| Applicability validation coverage | Define numerator, denominator, period, evidence and limitation. |

# 3.13  Resilience scorecard

Observability, detection, containment, reconstruction, recovery and exercises. Metrics require declared denominators and do not by themselves define maturity.

| **Metric** | **Reporting rule** |
| --- | --- |
| Attribution coverage | Define numerator, denominator, period, evidence and limitation. |
| Containment test coverage | Define numerator, denominator, period, evidence and limitation. |
| Recovery objective achievement | Define numerator, denominator, period, evidence and limitation. |
| Incident reconstruction completeness | Define numerator, denominator, period, evidence and limitation. |
| Exercise action closure | Define numerator, denominator, period, evidence and limitation. |

# 4.1  Path-scoring purpose

Path scoring prioritizes analyst attention and remediation. It does not prove exploitability, probability or loss.

The primary output is an ordinal exposure band with a component profile, conditions, controls, evidence and confidence.

> **PATH PRINCIPLE** Score the evidenced path scenario, not the technology name or number of graph hops.

# 4.2  Path eligibility

Only paths with a defined start condition, target, traversals, material conditions and evidence state are eligible for scoring. Candidate topology without conditions remains unscored or receives a provisional profile.

| **Path state** | **Scoring treatment** |
| --- | --- |
| Candidate | No final band; profile missing conditions. |
| Topological | No exploitability conclusion; optional provisional profile. |
| Plausible | Exposure band permitted only when all numeric PEI components are determinate; otherwise retain a provisional component profile or bounded range and surface UNKNOWN explicitly. |
| Validated | Exposure band supported within tested conditions. |
| Exploitable | Only when evidence demonstrates exploit progression. |
| Controlled | Band reflects validated breakpoint and residual path. |
| Invalidated | No active exposure band; retain historical record. |

# 4.3  Consequence scale

Consequence scale is one component of the path profile. Assessors select the descriptor that best matches scoped evidence and record rationale.

| **Value** | **Label** | **Descriptor** |
| --- | --- | --- |
| 1 | Limited | Localized and readily reversible. |
| 2 | Meaningful | Noticeable operational, confidentiality or integrity impact. |
| 3 | Material | Business, customer, legal, security or service consequence exceeds normal tolerance. |
| 4 | Severe | Major privilege, sensitive data, regulated decision or significant disruption. |
| 5 | Critical | Catastrophic safety, systemic, irreversible, binding or existential consequence. |

# 4.4  Reachability scale

Reachability scale is one component of the path profile. Assessors select the descriptor that best matches scoped evidence and record rationale.

| **Value** | **Label** | **Descriptor** |
| --- | --- | --- |
| 1 | Remote | Multiple restrictive conditions or unlikely access prerequisites. |
| 2 | Conditional | Plausible with identifiable permissions, state or user action. |
| 3 | Direct | Short validated route with available access or invocation. |
| 4 | Persistent / broad | Standing, repeated, inherited or broadly available route. |

Reachability has no numeric zero state for an eligible active path.

| **Non-numeric reachability outcome** | **Required treatment** |
| --- | --- |
| UNKNOWN | Do not substitute zero. Final PEI is prohibited until the material reachability condition is resolved. A bounded provisional PEI range MAY be shown if every other component is determinate and the range assumptions are explicit. |
| Disproved | Set the affected path to Invalidated. Do not retain an active PEI for that path. |

# 4.5  Authority-actionability scale

Authority-actionability scale is one component of the path profile. Assessors select the descriptor that best matches scoped evidence and record rationale.

| **Value** | **Label** | **Descriptor** |
| --- | --- | --- |
| 0 | No action | Information does not produce controlled target effect. |
| 1 | Observe / read | View or access within bounded scope. |
| 2 | Infer / recommend | Derive or influence a decision without direct execution. |
| 3 | Assisted execute | Action requires meaningful confirmation or bounded workflow. |
| 4 | Autonomous / consequential | Execute, approve, modify, delete, disclose or transact with limited contemporaneous review. |

# 4.6  Boundary-amplification scale

Boundary-amplification scale is one component of the path profile. Assessors select the descriptor that best matches scoped evidence and record rationale.

| **Value** | **Label** | **Descriptor** |
| --- | --- | --- |
| 0 | None evidenced | No material amplification identified. |
| 1 | Local | One bounded transition increases access or influence. |
| 2 | Material | Identity, tool, data, workflow or trust transition increases effective power. |
| 3 | Systemic | Fan-out, persistence, shared privilege or dependency expands blast radius materially. |

# 4.7  Control-resistance scale

Control-resistance scale is one component of the path profile. Assessors select the descriptor that best matches scoped evidence and record rationale.

| **Value** | **Label** | **Descriptor** |
| --- | --- | --- |
| 0 | Validated block | Representative evidence shows the path is broken under assessed conditions. |
| 1 | Strong constraint | Independent controls materially constrain progression; residual route is narrow. |
| 2 | Partial constraint | Controls exist but coverage, independence or operation has limitations. |
| 3 | Weak constraint | Control is bypassable, untested, person-dependent or late in the path. |
| 4 | No credible breakpoint | No validated control prevents or contains progression. |

# 4.8  Evidence uncertainty for paths

Uncertainty is displayed separately and can trigger escalation. It is not added to path severity as if uncertainty were damage.

| **State** | **Treatment** |
| --- | --- |
| High confidence | Band may be final within scope. |
| Medium confidence | Band is final with bounded limitations or provisional as policy requires. |
| Low confidence | Band remains provisional; prioritize validation if potential consequence is material. |
| UNKNOWN material condition | Do not claim validated or exploitable. If the UNKNOWN affects a numeric PEI component, do not publish a final point PEI; retain the component as UNKNOWN and show an explicit bounded range only when decision-useful. |
| Conflicting evidence | Retain conflict; no final exploitability claim. |

# 4.9  Path Exposure Index for triage

For triage only, a Path Exposure Index (PEI) may be calculated from consequence, reachability, authority-actionability, boundary-amplification and control-resistance components.

The arithmetic improves consistency but does not create probability. The component profile remains the authoritative explanation.

> **FORMULA** PEI = 4 x Consequence + 3 x Reachability + 3 x Authority + 2 x Amplification + 3 x Control Resistance. Range: 7 to 62 for determinate eligible active paths. UNKNOWN is never encoded as zero; an invalidated path has no active PEI.

| **Component** | **Weight** | **Rationale** |
| --- | --- | --- |
| Consequence | 4 | Decision materiality is primary. |
| Reachability | 3 | Path plausibility materially affects urgency. |
| Authority | 3 | Effective action determines potential outcome. |
| Amplification | 2 | Systemic propagation increases concern. |
| Control resistance | 3 | Weak or absent breakpoints increase residual exposure. |

# 4.10  PEI bands and overrides

Bands are triage categories and require calibration using synthetic and field cases. The synthetic calibration suite in the Reference Assessment Repository exercises every band boundary, UNKNOWN, Invalidated, residual and alternate-path treatment. Field and inter-assessor calibration remain mandatory before any claim of validated predictive performance. Critical overrides take precedence over the arithmetic.

| **PEI** | **Band** | **Decision use** |
| --- | --- | --- |
| 7-19 | Low | Track in normal analysis cycle. |
| 20-34 | Moderate | Prioritize validation and bounded remediation. |
| 35-49 | High | Management oversight, near-term treatment and test plan. |
| 50-62 | Critical | Immediate authorized escalation, containment or decision review as applicable. |

# 4.11  Path critical overrides

An override may raise the triage band when a condition is intrinsically material and not well represented by the weighted sum.

| **Condition** | **Minimum band** |
| --- | --- |
| Credible route to irreversible safety-critical or binding transaction without enforceable approval | Critical. |
| Standing privileged autonomous action across multiple material targets | Critical. |
| Validated unrestricted disclosure of highly sensitive data | Critical. |
| Material regulated action with unresolved authorization or oversight | High pending legal/context review. |
| No tested containment for a credible severe path | High. |
| Evidence conflict that could conceal critical consequence | High-priority validation; band remains provisional. |

# 4.12  Residual path and control effect

Residual exposure is assessed by rescoring the path after a control intervention using evidenced changed conditions. Planned remediation does not reduce the current score.

Path Reduction Delta supports comparison but does not equal risk reduction unless the changed control and residual path are validated.

> **FORMULA** Path Reduction Delta = Current PEI - validated post-intervention PEI.

| **Scenario** | **Treatment** |
| --- | --- |
| Proposed control only | Future-state simulation; current PEI unchanged. |
| Implemented, not tested | Future-state provisional; current residual continues. |
| Representative test confirms breakpoint | Recalculate residual path and issue new run. |
| Alternate path emerges | Score separately and revise control-leverage claim. |

# 5.1  Aggregate score rules

Aggregation is permitted only for a defined decision and compatible population. Every aggregate exposes coverage, confidence and critical gates.

Averages are descriptive statistics, not maturity levels, compliance conclusions or proof of systemic safety.

| **Aggregate** | **Permitted** |
| --- | --- |
| Control attainment | Yes, across determinate compatible controls with coverage. |
| Verified-control rate | Yes, across applicable controls with evidence cap. |
| Maturity average | No for level determination. |
| Domain vector | Yes; preferred executive maturity view. |
| Overall trustworthiness score | No in v1.0. |
| Path portfolio distribution | Yes, with defined path-selection method. |
| Risk acceptance score reduction | No; acceptance changes disposition only. |

# 5.2  Weighted controls

Optional control weighting may distinguish Standard, Important, Critical and Systemic controls for planning views. Weighting never replaces critical gates.

Weights must be predeclared in an assessment profile and cannot be changed after results are known without an override record.

| **Class** | **Default planning weight** |
| --- | --- |
| Standard | 1 |
| Important | 2 |
| Critical | 3 |
| Systemic | 4 |

# 5.3  Weighted Control Attainment

Weighted Control Attainment (WCA) is optional and supplements the unweighted DCA. It emphasizes critical controls but can still hide a gate, so gates and critical-control scorecards remain mandatory.

> **FORMULA** WCA = 100 x sum(weight x determinate score) / [5 x sum(weights for determinate applicable controls)].

| **Required companion** | **Reason** |
| --- | --- |
| Determinate weighted coverage | Shows how much weighted population was scored. |
| Critical gates | Prevents weighted compensation. |
| Unweighted DCA | Shows sensitivity to control weights. |
| Weight profile version | Supports reproducibility. |

# 5.4  Portfolio path distribution

A path portfolio is summarized by counts and proportions in Low, Moderate, High and Critical bands, along with validation state and confidence.

Path counts depend on discovery and analysis coverage. They must not be compared across periods or systems without considering changed denominators and selection methods.

| **Metric** | **Required context** |
| --- | --- |
| Paths by band | Total selected paths and selection criteria. |
| Validated paths | Number and percentage with representative evidence. |
| Critical targets represented | Defined high-value target population. |
| Controlled paths | Breakpoint validation and residual path. |
| New/closed paths | Change reason, graph version and evidence date. |

# 5.5  Trend analysis

Trend compares like-for-like scopes and formula versions. If coverage expands, report the effect rather than implying performance deteriorated or improved solely from changed discovery.

| **Trend issue** | **Treatment** |
| --- | --- |
| Scope changed | Show restated comparable subset and expanded total separately. |
| Control library changed | Map old to new controls and disclose break in series. |
| Evidence aged | Show confidence/coverage change separately from control change. |
| Path selection changed | Do not compare raw counts without normalization and explanation. |
| Formula version changed | Recalculate only if preserved inputs support it; retain original result. |

# 5.6  Target score and risk appetite

Targets should be tied to required decisions and risk appetite. A universal target of 100% or score 5 is neither necessary nor credible for every control.

Critical and systemic controls may require score 4 or 5, while standard controls may have proportionate targets consistent with maturity and risk context.

| **Target field** | **Required rationale** |
| --- | --- |
| Control target | Criticality, consequence and evidence expectation. |
| Coverage target | Population and material blind spots. |
| Maturity target | Capability need by domain and use case. |
| Path target | Breakpoint and acceptable residual condition. |
| Confidence target | Evidence quality and review need. |
| Time horizon | Change dependency and validation milestone. |

# 5.7  Executive trust and authority views

The terms Trust Score and Authority Score may be used only as labels for transparent scorecards, not as opaque composite numbers.

Each scorecard displays maturity, control attainment, coverage, confidence, critical gates, path bands and material UNKNOWNs.

| **View** | **Mandatory components** |
| --- | --- |
| Trust Scorecard | D2 maturity; DCA; approved-edge coverage; path validation; gates; confidence. |
| Authority Scorecard | D3 maturity; DCA; high-impact authority coverage; revocation tests; amplification paths; gates. |
| Security Scorecard | D4 maturity; critical-control VCR; path-test coverage; open high/critical findings. |
| Governance Scorecard | D5 maturity; owner/use-case coverage; decisions; obligations; exceptions. |
| Resilience Scorecard | D6 maturity; observability; containment; recovery tests; reconstruction. |
| Discovery Scorecard | D1 maturity; source, asset, owner and AIBOM coverage; blind spots. |

# 5.8  No overall trust score in v1.0

Version 1.0 intentionally does not publish a single overall AI Trust Graph score. The current evidence base does not justify reducing trust, authority, security, governance, resilience, uncertainty and maturity into one universal number.

A future composite may be proposed only after field calibration, sensitivity analysis, independent review, misuse analysis and public formula governance.

> **SHREWD-REVIEW DECISION** A transparent six-domain profile is more defensible than an impressive but misleading 87/100 trust score.

# 5.9  Decision thresholds and escalation

Thresholds translate scores into authorized action. They are profile-specific and approved before assessment results are known.

| **Trigger** | **Example response** |
| --- | --- |
| Critical path or override | Immediate authorized escalation and containment review. |
| Critical control score 0-2 | Named owner, management oversight and urgent validation/treatment. |
| Critical gate open | Cap or invalidate domain outcome. |
| Low confidence with potential severe consequence | Prioritize evidence and validation. |
| High UNKNOWN rate | Limit assurance claim and expand discovery/evidence work. |
| Repeated score regression | Root-cause and change-governance review. |

# 6.1  Synthetic worked example: control

A synthetic high-impact agent approval control is designed adequately (4), implemented across production scope (4), and passes representative bypass and transaction-binding tests (4). Evidence is E5 and confidence is High.

The control-assurance score is 4. It is not 5 because sustained adaptive operation and change-triggered assurance were not demonstrated.

| **Element** | **Value** |
| --- | --- |
| Design | 4 |
| Implementation | 4 |
| Operating effectiveness | 4 |
| Evidence cap | E5 permits up to 5 |
| Critical gate | Passed |
| Final score | 4 |
| Confidence | High |
| Limitation | Adaptive operation not established. |

# 6.2  Synthetic worked example: coverage

A domain has ten applicable controls. Six have determinate scores totaling 24, two are UNKNOWN, one is Not Tested and one is Inconclusive.

DCA is 80% because 24 / (5 x 6) = 0.80. Determinate coverage is 60%. The result must be displayed as 80% attainment at 60% determinate coverage, not simply 80%.

| **Metric** | **Value** |
| --- | --- |
| Applicable controls | 10 |
| Determinate controls | 6 |
| DCA | 80% |
| Determinate coverage | 60% |
| UNKNOWN | 2 |
| Not Tested | 1 |
| Inconclusive | 1 |
| Executive interpretation | Strong scored controls, insufficient coverage for broad assurance. |

# 6.3  Synthetic worked example: path

A plausible agent path reaches a sensitive transaction target. Consequence = 4, Reachability = 3, Authority = 4, Amplification = 2, Control Resistance = 3.

PEI = 4x4 + 3x3 + 3x4 + 2x2 + 3x3 = 50, therefore Critical. The band remains provisional if material conditions are not validated.

| **Component** | **Value** | **Contribution** |
| --- | --- | --- |
| Consequence | 4 | 16 |
| Reachability | 3 | 9 |
| Authority | 4 | 12 |
| Amplification | 2 | 4 |
| Control resistance | 3 | 9 |
| Total |  | 50, Critical |

# 6.4  Synthetic worked example: critical gate

An authority domain has DCA 88% and determinate coverage 92%, but a material autonomous transaction has no technically enforceable approval or tested containment.

The maturity and domain conclusion are capped according to the Maturity Model gate. The DCA remains visible as a descriptive metric but cannot override the critical condition.

> **CORRECT CONCLUSION** High average control attainment with a foundational authority gate open. Treat the gate; do not market the domain as strong.

# 6.5  Sensitivity analysis

Before public use of weighted or path formulas, reviewers test how reasonable changes in component ratings, weights and thresholds affect bands and priorities.

If small arbitrary changes cause major ranking reversals, use the component profile and expert review rather than presenting the index as stable.

| **Test** | **Question** |
| --- | --- |
| One-point component change | Does the band change disproportionately? |
| Weight alternatives | Do priorities depend primarily on one chosen weight? |
| Evidence downgrade | Does confidence change without pretending consequence changed? |
| Coverage expansion | Does aggregate meaning survive newly discovered weak items? |
| Gate activation | Does cap logic reliably prevent average masking? |
| Reviewer variation | Can calibrated reviewers reproduce component ratings? |

# 6.6  Calibration protocol

Calibration uses synthetic cases and approved historical records where legally and ethically permitted. Reviewers score independently, compare rationale, resolve ambiguity and update guidance through governance.

Calibration targets interpretation consistency, not forced consensus. Material disagreement remains documented.

| **Calibration record** | **Required content** |
| --- | --- |
| Case ID | Stable synthetic or approved case. |
| Inputs | Scope, assertions, evidence, controls and paths. |
| Independent ratings | Scores, states and rationales by reviewer. |
| Disagreement | Exact criterion or evidence interpretation. |
| Decision | Resolved guidance or open issue. |
| Regression | Retest after framework changes. |

# 6.7  Scoring QA checklist

Every final scoring run passes the following review.

| **Gate** | **Pass condition** |
| --- | --- |
| Scope | Unit, denominator, period and exclusions defined. |
| States | UNKNOWN and non-numeric states preserved. |
| Control score | Component minimum, evidence cap and gates applied. |
| Maturity | Rule-based result not inferred from average. |
| Coverage | Displayed beside attainment. |
| Path | Conditions, evidence, confidence and override reviewed. |
| Aggregation | Compatible population and declared purpose. |
| Reproducibility | Formula version, inputs and reviewer trace retained. |
| Claims | No compliance, safety or continuous-assurance overclaim. |

# 6.8  Scoring record schema

The scoring record is designed for tables, JSON or graph-backed implementation without making tooling mandatory.

| **Field group** | **Minimum fields** |
| --- | --- |
| Identity | run_id, scope_id, object/control/path_id, formula_version. |
| State | applicability, assessment_state, review_state. |
| Scores | design, implementation, effectiveness, final_supported_score. |
| Evidence | evidence_ids, highest_grade, quality limits, currentness. |
| Confidence | level, rationale, conflicts. |
| Coverage | numerator, denominator, population, sample. |
| Gates | gate_id, status, cap, rationale. |
| Path | component values, PEI, band, override, residual. |
| Review | assessor, reviewer, decision date, supersession. |

# A.1  Formula register

All formulas used in v1.0 are listed here; unlisted implementation formulas are non-conformant unless declared as extensions.

| **ID** | **Formula** | **Purpose** |
| --- | --- | --- |
| F-01 | DCA = 100 x sum(scores) / [5 x determinate applicable controls] | Determinate control attainment. |
| F-02 | VCR = evidence-supported score 4-5 controls / all applicable controls | Verified-control coverage. |
| F-03 | Coverage = qualified numerator / declared applicable denominator | Scope visibility. |
| F-04 | WCA = 100 x sum(weight x score) / [5 x sum(weights)] | Optional weighted planning view. |
| F-05 | PEI = 4C + 3R + 3A + 2Am + 3CR | Path triage; C consequence, R reachability, A authority, Am amplification, CR control resistance. |
| F-06 | Path Reduction Delta = current PEI - validated residual PEI | Intervention comparison. |

# A.2  Canonical output labels

Labels are controlled to prevent similar numbers from being misrepresented.

| **Label** | **Permitted meaning** |
| --- | --- |
| Control Assurance Score | Evidence-supported 0-5 control result. |
| Domain Control Attainment | Average determinate control score converted to percent. |
| Verified-Control Rate | Applicable controls scoring 4-5 with sufficient evidence. |
| Determinate Coverage | Applicable controls with numeric result. |
| Maturity Level | Rule-based M1-M5 capability or domain result. |
| Path Exposure Index | Triage index, not probability. |
| Path Exposure Band | Low, Moderate, High or Critical triage category. |
| Confidence | High, Medium, Low or Not rated. |
| Trust/Authority Scorecard | Transparent multi-measure profile, not one score. |

# A.3  Prohibited labels and claims

The following claims are prohibited unless a separate authorized basis exists.

| **Prohibited wording** | **Reason** |
| --- | --- |
| 87% trustworthy | No validated universal trustworthiness formula. |
| Compliant score | Maturity and controls do not prove legal compliance. |
| Secure because score exceeds threshold | Score does not prove absence of vulnerability or unsafe behavior. |
| Zero risk | Uncertainty and change remain. |
| 100% discovery | Collection completion does not prove complete estate. |
| Continuous assurance | Requires evidenced monitoring coverage and current validation. |
| Exploitable path from graph connection | Topology alone is insufficient. |
| Certified by AI Trust Graph | No certification scheme is defined in v1.0. |

# A.4  Extension governance

Organizations may extend profiles, weights and metrics when the canonical measures do not address a decision. Extensions use a namespace, version, definition, rationale, formula, test cases and migration rule.

Extensions must not reuse canonical labels for different meanings or silently alter standard results.

| **Extension field** | **Requirement** |
| --- | --- |
| Namespace | Distinct identifier. |
| Decision purpose | Why canonical outputs are insufficient. |
| Formula and scale | Complete transparent specification. |
| Data requirements | Inputs, evidence and treatment of missing values. |
| Sensitivity | Behavior under reasonable parameter changes. |
| Validation | Synthetic and field calibration. |
| Compatibility | Relationship to canonical output. |
| Governance | Owner, review, version and deprecation. |

# A.5  Known limitations

This framework improves transparency but cannot turn ordinal judgments into objective probabilities, guarantee complete discovery, eliminate assessor judgment, predict loss, prove compliance or remain current after material change.

Indexes and thresholds require field calibration. Cross-organization benchmarking requires equivalent scope, profile, evidence, formula version and review quality.

| **Limitation** | **Required response** |
| --- | --- |
| Ordinal input | Do not claim interval precision. |
| Weight choice | Publish weights and sensitivity. |
| Coverage bias | Show denominator and uncertainty. |
| Assessor variation | Calibrate and quality-review. |
| Temporal drift | Version runs and reassess after change. |
| Unknown dependencies | Preserve UNKNOWN and prioritize validation. |
| Benchmark misuse | Avoid ranking unlike systems or organizations. |

# A.6  Source and derivation register

The framework consolidates and formalizes scoring concepts from the methodology artifacts and evidence-led assessment toolkit. It intentionally avoids copying restricted standards text.

| **Source artifact** | **Use** |
| --- | --- |
| AI Trust Graph Manifesto v1.0 | Claims discipline, transparency and public boundary. |
| AI Trust Graph Core Conceptual Model v1.1 | Evidence, control, path, authority and invariant semantics. |
| AI Trust Graph Maturity Model v1.0 | Cumulative maturity, gates and six-domain profile. |
| AI Security Assessment Toolkit, 15 Domains | 0-5 assessor scale, E0-E5 evidence grades, control states and risk bands. |
| Canonical ontology and future control library | Identifiers, applicability and traceability; reconciliation required before release. |

# A.7  v1.0 release acceptance checklist

This artifact is a public-release candidate.

| **Gate** | **Acceptance criterion** |
| --- | --- |
| Semantic integrity | No contradiction with approved predecessor artifacts. |
| Formula integrity | All formulas, ranges and examples independently recalculated. |
| Unknown integrity | No formula treats UNKNOWN as zero or excludes it invisibly. |
| Gate integrity | Critical controls and gates cannot be averaged away. |
| Claims integrity | No score implies safety, compliance or certification. |
| Calibration | Synthetic cases and sensitivity analysis reviewed. |
| Traceability | Inputs map to controls, evidence, paths and maturity capabilities. |
| Independent review | Product, AI security and scoring-method review recorded. |
| IP and licence | Ownership, publication rights, licence and trademark approved. |
| Repository quality | Markdown, formula tests, changelog and contribution files complete. |

# A.8  Final doctrine and approval record

The AI Trust Graph Scoring Framework expresses assessment evidence without sacrificing uncertainty, path context or critical-gate discipline. It uses numbers where they improve consistency and refuses numbers where they would create false authority.

The framework is ready for controlled review. Public release remains subject to independent expert, employer, IP, confidentiality, licence and trademark approval.

> **SCORING DOCTRINE** Separate the questions. Preserve UNKNOWN. Cap claims by evidence. Show coverage. Protect critical gates. Keep maturity rule-based. Score paths transparently. Never hide the profile behind one number.

| **Approval role** | **Status** |
| --- | --- |
| Methodology author | Siva Sethumadhavan |
| Chief product architecture review | Internal author-loop completed; independent review pending. |
| AI security architecture review | Internal author-loop completed; independent review pending. |
| Scoring-method review | Independent validation pending. |
| Employer / IP review | Pending. |
| Licence and trademark approval | Pending. |
| Public release | Not approved until mandatory gates close. |

AI Trust Graph Scoring Framework | Version 1.0 | Public-release candidate
