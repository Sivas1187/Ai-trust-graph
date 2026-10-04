[← Back to methodology index](../README.md)

# Planning an assessment: sizing, roles and effort drivers

> **Status: non-normative planning aid.** This guide adds no rule, scale or requirement. It points into the canonical artifacts, which govern; where it seems to differ from them, they prevail.
>
> **No measured effort data exists yet.** AI Trust Graph (ATG) has no field data on how long assessments take. This guide therefore gives **no effort figures**. It shows how to *size* an assessment from its scope, using drivers the methodology already defines, so that your organisation can estimate with its own rates and refine them after the first real assessment.

## 1. Choose the assessment type first

The type sets the trigger, minimum scope and depth ([Artifact #7](../docs/07-assessment-methodology.md) §§1.1-1.10). Common starting points:

| Situation | Assessment type ([Artifact #7](../docs/07-assessment-methodology.md)) | Typical first scope |
|---|---|---|
| First look at one AI use case, to decide whether a full assessment is needed | Not an assessment: use the [Lite review](lite-review.md) | One use case, two hours |
| First ATG assessment of a system | Baseline assessment (§1.1) | One system or use case, one environment |
| A new tool, permission, model version, provider or data source | Material-change assessment (§1.3) | The changed relationships and the paths they touch |
| A system with autonomous high-impact authority | High-impact deep dive (§1.4) | The material paths and their breakpoints |
| An AI provider or third-party service | Third-party and provider assessment (§1.6) | Provider trust, shared responsibility and evidence available to you |

**Start small.** Assess one system in one environment before a portfolio. [Artifact #3](../docs/03-maturity-model.md) §8.5 notes that M5 is not automatically the right target, and that a limited experiment with bounded data and no action may justify a proportionate lower target.

## 2. Staff the roles

[Artifact #7](../docs/07-assessment-methodology.md) §0.6 separates eight roles. One person can hold several, but only where independence permits and conflicts are disclosed (§0.7).

| Role | What they do | Practical note (not a rule) |
|---|---|---|
| Sponsor | Decision purpose, resources, authority | Decision authority |
| Scope owner | Boundary, population, exclusions | Sponsor, for small scopes |
| System owner | System facts, access, evidence, remediation | Combining with lead assessor or quality reviewer is a conflict to disclose and mitigate (§0.7) |
| Lead assessor | Method execution and integrated conclusion | Technical validator, for small scopes |
| Technical validator | Authorised testing and reproducible evidence | Lead assessor |
| Evidence custodian | Protection, retention and traceability of evidence | Lead assessor, if the evidence volume is small |
| Quality reviewer | Independent challenge and release recommendation | Independence matters most here; keep this role separate from execution where possible (§0.7) |
| Decision authority | Risk, exception, acceptance and report approval | Sponsor |

In practice, a small first assessment could run with **three people**: a sponsor who is also the decision authority, a lead assessor who also validates and holds the evidence, and an independent quality reviewer, plus the system owner's time. Any combination of roles is a judgement to record under Artifact #7 §0.7, not a rule this guide sets.

## 3. Count the drivers

Effort follows a handful of counts, all defined by the methodology. Fill in this table for your scope **before** estimating anything.

| Driver | How to count it | Where defined |
|---|---|---|
| **Applicable controls** (*C*) | Controls in scope after applicability review. The full library has 72; a profile may require fewer. | [#4](../docs/04-scoring-framework.md) §1.7; [#5](../docs/05-master-control-library.md) |
| **Component claims** (*K*) | For each scored control: design, implementation and, if tested, operating effectiveness. Each finalized numeric component needs an approved evidence sufficiency decision. So *K* ≤ 3 × *C*. | [#4](../docs/04-scoring-framework.md) §1.5; [#6](../docs/06-evidence-model.md) §4.13 |
| **Critical and Systemic controls tested** (*T*) | Controls whose operating effectiveness you intend to finalize. Critical controls need representative E5 evidence with path context; Systemic controls also need independent validation. | [#4](../docs/04-scoring-framework.md) §1.6; [#6](../docs/06-evidence-model.md) §4.4 |
| **Material paths** (*P*) | Paths you will construct and state-assess. Only eligible paths get a PEI. | [#4](../docs/04-scoring-framework.md) §§4.2, 4.9 |
| **Evidence items** (*E*) | Items to collect and grade, each graded individually. | [#6](../docs/06-evidence-model.md) §§1.7, 3.1-3.8 |
| **Evidence sources** (*S*) | Distinct systems to export from (IAM, configuration, logs, ticketing, governance records). Access approvals often dominate the elapsed time. | [#6](../docs/06-evidence-model.md) §3.2 |
| **Maturity domains** (*D*) | Domains in which you will determine maturity: 0 to 6. | [#3](../docs/03-maturity-model.md) §§8.1-8.2 |

**Worth knowing before you scope:** in the current library, 44 controls default to Critical, 14 to Systemic and 14 to Important ([#5](../docs/05-master-control-library.md)). Defaults can be changed in context, with a recorded rationale ([#4](../docs/04-scoring-framework.md) §0.9). Without scoping, *T* can therefore become large. Decide early which operating-effectiveness claims you actually need to finalize; an untested control's overall score is capped at 3 ([#4](../docs/04-scoring-framework.md) §1.5).

## 4. Estimate with your own rates

Set a rate for each driver from your own experience, and replace it after the first assessment. Effort is roughly the sum of each driver multiplied by its rate, plus fixed phase costs:

```
effort ≈ fixed (initiate, scope, report, decision meetings)
       + C × applicability review rate
       + K × sufficiency-decision rate
       + T × representative test rate
       + P × path construction-and-assessment rate
       + E × collection-and-grading rate
       + D × maturity determination rate
       + quality review (a share of the above)
elapsed time is usually set by S: access approvals and test windows
```

**Illustrative only (made-up rates, not measurements).** Suppose a baseline of one agent has *C* = 20 controls in scope, *K* = 50 component claims, *T* = 5 tested Critical controls, *P* = 3 paths, *E* = 60 evidence items, *S* = 6 sources and *D* = 1 domain. Plug in your own rate for each line and the arithmetic gives an estimate. The point of the exercise is the **structure**: the counts are fixed by scope, and only the rates are yours to calibrate.

**Record the actual effort per driver** in your first assessment. Those numbers are the field data this methodology does not yet have. If you are willing to share them anonymised, open a [General feedback](https://github.com/Sivas1187/Ai-trust-graph/issues/new?template=general-feedback.yml) issue.

## 5. Plan the lifecycle

The 13 phases ([Artifact #7](../docs/07-assessment-methodology.md) §0.11) map onto a plan like this:

| Plan stage | Phases | Main dependency |
|---|---|---|
| Mobilise | Initiate, Scope | Sponsor decision; authorisation for testing |
| Build the picture | Discover, Model | Access to evidence sources (*S*) |
| Gather and judge | Evidence, Controls, Paths, Maturity, Scoring | Test windows for *T*; system-owner time |
| Conclude | Findings, Decisions, Report | Quality reviewer and decision authority availability |
| Keep current | Reassess | Trigger monitoring ([Artifact #7](../docs/07-assessment-methodology.md) §14.1) |

Each phase has an entry condition, an evidence record, a quality challenge and an exit result ([Artifact #7](../docs/07-assessment-methodology.md) §§2-14), so plan explicit review points rather than one review at the end.

## 6. Common planning mistakes

- **Scoping all 72 controls by default.** Run the applicability review first and record exclusions with their rationale.
- **Planning tests without authorisation.** Rules of engagement must exist before any active test ([Artifact #5](../docs/05-master-control-library.md) ATG-VAL-003).
- **Treating UNKNOWN as failure to finish.** An honest UNKNOWN with a named owner is a valid result; forcing a score is not ([Artifact #4](../docs/04-scoring-framework.md) §0.4).
- **Leaving quality review to the end.** It is part of every phase's exit.
