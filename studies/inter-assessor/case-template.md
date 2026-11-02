[← Back to the study kit](README.md)

# Study case template

Each study case follows the reference-case anatomy in [Artifact #10](../../docs/10-reference-assessment-repository.md) §0.4: charter, architecture, discovery, graph and authority analysis, evidence, control results, path analysis, maturity, findings, decision and calibration key. For a study, the anatomy is split in two:

- The **assessor pack** contains only the inputs: what an assessor would be given on a real engagement.
- The **answer key** contains the case author's reference outputs. It stays private until every workpaper is in (see the [study kit](README.md), steps 1 and 4).

Cases are **synthetic and clearly fictional**. Do not base a case on a real organisation, a real assessment or any confidential information. Like every Artifact #10 case, a study case must not be generalised to a real environment.

---

## Part A: assessor pack (committed before the study starts)

### Case header
- **Case ID:** `IAS-<study>-<n>`, for example `IAS-01-1`
- **Case version:** `1.0`, which never changes after freeze; a corrected case gets a new version
- **Methodology snapshot:** tag, commit SHA and bundle identifier
- **Assessment type and depth:** as defined in [Artifact #7](../../docs/07-assessment-methodology.md)

### 1. Charter
Purpose, scope, boundaries, authorisation (including what testing is and is not authorised) and the decision the assessment supports.

### 2. Architecture
The components (identities, agents, models, tools, data stores, providers, human approval points) and how they connect. A diagram plus a component table.

### 3. Discovery
What discovery found, including anything it could not see. State the blind spots explicitly.

### 4. Evidence register
Each evidence item gets an ID, a description, its source, date and scope, and what it purports to show. **Do not state its grade**; assigning the grade is part of the assessment. Include at least one weak, conflicting or out-of-scope item so that UNKNOWN and Inconclusive are reachable.

### 5. Questions for the assessor
List what each assessor must produce, matching rows in the [workpaper template](workpaper-template.csv). For example:
- Applicability of named controls
- Evidence grade for each evidence item
- Control scores (D, I, OE and overall) for named controls
- PathState and PathRole for named paths
- PEI components and band for named paths
- Capability and domain maturity for the named domain
- Whether each named critical gate is open
- Finding type for each finding the assessor raises

---

## Part B: answer key (private until the reveal)

Fill in the [workpaper template](workpaper-template.csv) with `assessor_id = KEY`, one row per question in section 5. For every row, give the rule applied (artifact and section) in `rationale`, so that each disagreement can be traced to a rule.

Also record, for the adjudication:
- **Graph and authority analysis:** the paths the case author intended, with the relationships that make them up.
- **Intended traps:** the places a careful assessor should record UNKNOWN, Not Tested or Inconclusive rather than a score.
- **Acceptable alternatives:** any output where more than one answer is defensible under the rules, with the reason. These are scored as agreement and listed in the results.

Hash the final answer-key file with `sha256sum` and publish the hash before any assessor starts.
