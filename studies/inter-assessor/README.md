[← Back to methodology index](../../README.md)

# Inter-assessor study kit

> **Status: not yet run.** Study IAS-01 is frozen and recruiting assessors (see [Studies](#studies)); no assessor has taken part and no results exist. Until a study is run and its results published, the repository makes **no claim** of demonstrated inter-assessor reliability ([Artifact #10](../../docs/10-reference-assessment-repository.md) Appendix B.4).

This kit packages the protocol in Artifact #10 Appendix B.4 so that a study can actually be run. **Appendix B.4 governs.** This kit adds no rule to the methodology; where the two differ, follow B.4 and report the difference as a finding.

**The question the study answers:** given the same frozen methodology and the same synthetic cases, do independent assessors reach the same conclusions? It measures agreement between assessors. It does not measure whether ATG predicts real-world risk.

## Who does what

| Role | Who | Responsibility |
|---|---|---|
| Study lead | The methodology author | Freezes the methodology and cases, holds the answer key, runs the comparison and publishes the results |
| Case author | The methodology author, or a named contributor | Writes the cases and their answer key. Must not be an assessor in the same study |
| Assessor | 3 minimum, 5 or more preferred (B.4) | Works through the cases alone and submits workpapers. Must be independent of case authorship |
| Adjudicator (optional) | Someone who was not an assessor | Helps classify disagreements after measurement |

**Assessor eligibility:** working experience in security assessment, AI security, or IT or AI risk and audit, and the time to read the core artifacts. You do not need prior ATG experience; how quickly a new reader converges is part of what is measured.

## Why the published examples cannot be used

Artifact #10 already contains worked cases and calibration vectors, but their answers are public. B.4 requires assessors to work "without access to the answer key", so this study needs **new cases** whose answer key stays private until every workpaper is in.

## Steps

### 1. Freeze (study lead)
- Record the exact methodology snapshot: release tag `v1.0-rc.4`, its commit SHA, and the manifest bundle identifier.
- Write the cases with the [case template](case-template.md). Two or three cases are enough for a first study. Each should exercise path state, PEI scoring, evidence grading and at least one UNKNOWN.
- Commit the **assessor pack** (the case inputs only) and record the commit SHA.
- Keep the **answer key** private, as one file. Before any assessor starts, publish its SHA-256 hash in the study record (`sha256sum answer-key.csv`) so that anyone can check later that the key was not changed after the workpapers arrived.
- In the same study record, write down the analysis choices that B.4 leaves open (see the [analysis guide](analysis.md), section 2), so that they are fixed before any result is seen.

### 2. Recruit (study lead)
- Sign-ups go on [issue #52](https://github.com/Sivas1187/Ai-trust-graph/issues/52).
- Each assessor confirms in writing that they did not author the cases, will work alone, will not discuss the cases with other assessors until results are published, and will not search for the key.
- Agree a private channel for returning workpapers. Workpapers are **not** posted publicly before the reveal.

### 3. Assess (each assessor, alone)
- Read the frozen artifacts at the recorded commit, then work each case.
- Fill in the [workpaper template](workpaper-template.csv): one row per output.
- Record UNKNOWN wherever the case evidence does not support a determination. Do not guess: UNKNOWN is a valid and measured answer.
- Note your time per case, and any rule you found ambiguous; ambiguity notes are often the most valuable output.
- Submit by the agreed deadline. A typical case takes two to four hours.

### 4. Reveal and compare (study lead)
- Once every workpaper is in, publish the answer key and check that its hash matches the one published in step 1.
- Compare the workpapers with each other and with the key using the [analysis guide](analysis.md), against the B.4 provisional gates.

### 5. Adjudicate (study lead, with the adjudicator if any)
- Keep the original workpapers unchanged.
- Classify every disagreement as semantic, evidence, procedural or judgment variance (B.4), and record its root cause.
- Any methodology change that comes out of the study follows [CONTRIBUTING.md](../../CONTRIBUTING.md). A change to normative content needs a formal change proposal.

### 6. Publish (study lead)
- Use the results template in the [analysis guide](analysis.md). B.4 requires the sample size, case and version identifiers, raw agreement counts, adjudicated changes, limitations, and any methodology changes the study caused.
- Publish the results whether or not the gates are met. A failed gate is a result.
- Credit assessors in [REVIEWERS.md](../../REVIEWERS.md) only if they agree, in the form they choose.

## What the results may and may not claim

- **May claim:** "Under bundle X, N independent assessors working on K synthetic cases reached the agreement shown, against the B.4 provisional gates."
- **May not claim:** psychometric validity, predictive validity, universal assessor reliability, or certification. B.4 marks its thresholds as "governance release gates", not those claims.

## Studies

| Study | Cases | Status |
|---|---|---|
| [IAS-01](cases/IAS-01-study-record.md) | [IAS-01-1](cases/IAS-01-1-assessor-pack.md) and [IAS-01-2](cases/IAS-01-2-assessor-pack.md), version 1.0 | Frozen 2026-10-03; answer key sealed; **recruiting assessors** on [issue #52](https://github.com/Sivas1187/Ai-trust-graph/issues/52) |

## Files

| File | Purpose |
|---|---|
| [case-template.md](case-template.md) | The structure for a study case, split into the assessor pack and the private answer key |
| [workpaper-template.csv](workpaper-template.csv) | One row per assessed output; the same columns are used for the answer key |
| [analysis.md](analysis.md) | How agreement is computed against the B.4 gates, the disagreement log, and the results template |
