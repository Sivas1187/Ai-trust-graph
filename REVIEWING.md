[← Back to methodology index](README.md)

# Reviewing AI Trust Graph

AI Trust Graph (ATG) is a public-release candidate (bundle 1.0-rc.5). The author's internal review is complete. **Independent review has not happened yet**, and this page is how to help with it. Pick the amount of time you have; every option ends with a finding or a short note that the author answers in public.

Reviewing does not mean you endorse the methodology, and the project will never present your review as an endorsement.

## Pick a review

| Time | What to do | Where to record it |
|---|---|---|
| **30 minutes** | Read the README's "Start here" and one guide: the [Lite review](guides/lite-review.md) or one of the [incident retrospectives](guides/incident-retrospectives.md). Then answer three questions: what was unclear, what looked wrong, and would you use it? | [General feedback](https://github.com/Sivas1187/Ai-trust-graph/issues/new?template=general-feedback.yml) |
| **1 hour** | Take one focused task: the [evidence grades](https://github.com/Sivas1187/Ai-trust-graph/issues/49), the [72 controls for agentic AI](https://github.com/Sivas1187/Ai-trust-graph/issues/51) or the [OWASP and NIST crosswalks](https://github.com/Sivas1187/Ai-trust-graph/issues/53). | A comment on that issue, or a [Methodology finding](https://github.com/Sivas1187/Ai-trust-graph/issues/new?template=finding-report.yml) |
| **2 to 3 hours** | [Score one real, anonymised attack path](https://github.com/Sivas1187/Ai-trust-graph/issues/50) with the Path Exposure Index, or review one artifact in `docs/` end to end. | [Methodology finding](https://github.com/Sivas1187/Ai-trust-graph/issues/new?template=finding-report.yml), one per issue found |
| **A few sessions** | Join the [inter-assessor study](studies/inter-assessor/README.md): score the same synthetic cases as other assessors, without the answer key. It needs at least three assessors. | [Sign up on issue #52](https://github.com/Sivas1187/Ai-trust-graph/issues/52) |

## What makes a finding useful

- **Quote the text** and give the file and section, for example `docs/04-scoring-framework.md` §4.9.
- **Say what is wrong:** a contradiction, a gap, an unclear rule, a claim that goes further than its evidence, or something that would not work in practice.
- **Say why**, ideally from experience: "In assessments I have run, X is usually Y."
- **Suggest a fix** if you have one. It is optional.

One clear finding is worth more than a long general impression. Disagreement is welcome and is recorded, not hidden.

## Ground rules

- **Never share confidential information.** Do not post anything from an employer, a client or a real assessment that is not already public. Anonymise any real path you score: no names, hostnames, account IDs or data samples.
- **Declare relevant interests** in your finding, such as working for a vendor in this space or having contributed to a related framework. It does not disqualify you; it helps readers weigh the review.
- **Review in a personal capacity** unless your organisation has agreed otherwise.
- **Security vulnerabilities** in the repository, website or graph API go through [SECURITY.md](SECURITY.md), not public issues.

## What happens next

1. The author replies to each finding in the issue: accepted, partly accepted, declined with reasons, or deferred. Material findings are added to [REVIEW_FINDINGS.md](REVIEW_FINDINGS.md) with their status.
2. Accepted changes go through [CONTRIBUTING.md](CONTRIBUTING.md). A change to a canonical term, control, grade, state or formula needs a formal change proposal first.
3. If you agree, you are credited in [REVIEWERS.md](REVIEWERS.md) and in the next version of the whitepaper.

## Credit

Credit is opt-in. When you file a finding, say how you want to be named (name, handle, or anonymous) and whether to mention an affiliation. Being listed records that you contributed a review; it does not say that you agree with the methodology.
