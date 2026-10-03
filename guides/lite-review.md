[← Back to methodology index](../README.md)

# AI Trust Graph Lite review

**A two-hour review of one AI use case, using the AI Trust Graph way of thinking.**

> **Status: non-normative guide.** This guide adds no definition, rule or score to the methodology; it points into the canonical artifacts, which govern. A Lite review is **not an AI Trust Graph assessment**: it produces no control score, maturity level, Path Exposure Index, conformance claim or certification. Use it to find what matters and decide whether a full assessment is needed.

## When to use it

- Early, while planning a new agent, assistant or AI integration, or when one gains a new tool, permission, data source or provider, to see what a proper review must cover.
- When you need a fast, structured answer to "what is the worst this AI system could cause, and what stops it?"
- As a first pass to choose which systems deserve a full assessment ([Artifact #7](../docs/07-assessment-methodology.md)).

A Lite review does **not** replace a Pre-deployment readiness assessment or a Material-change assessment (Artifact #7 §1.8 and §1.3), and it cannot support a release decision on its own.

**People:** the system owner and someone who understands its identities and permissions. **Inputs:** an architecture sketch, the list of tools and integrations, the identities they run as, and any approval steps.

## The review in five steps

| Step | Time | What to do |
|---|---|---|
| 1. Scope | 15 min | Pick **one** use case. Write down the most consequential action it could cause (pay, change a record, disclose data, approve something) and who would be affected. |
| 2. Map | 30 min | Sketch who and what is involved (people, identities, agents, tools, data, providers, approvals) and draw each connection as a typed, directed relationship (see below). |
| 3. Question | 40 min | Walk the **path questions** for each route to the consequential action, then the **team questions** once for the system. |
| 4. Record paths | 25 min | Fill in the **path template** for the one to three paths that matter most. |
| 5. Record UNKNOWNs | 10 min | Fill in the **UNKNOWN register** and decide the next step. |

**Relationships to use when mapping** (names from [Artifact #12, Appendix C](../docs/12-ontology-specification.md)): `AUTHENTICATES_AS` (signs in as), `AUTHORIZED_TO` (is granted a capability), `DELEGATES_TO` (hands bounded authority to), `INVOKES` (calls), `RETRIEVES_FROM` / `READS_FROM` (gets data from), `TRIGGERS_ACTION` (causes an action), `APPROVED_BY`, `LIMITED_BY`, `CONTROLLED_BY`. Draw two arrows when two things are true at once: an agent can both `CONNECTS_TO` a tool and `INVOKES` it, and those are different facts.

## Path questions (whitepaper, Executive brief E.4)

Ask these for each route to the consequential action:

1. What can this component reach?
2. Through which identity, and under what authority?
3. Across which boundaries, for example a provider, account, privilege or data-classification boundary?
4. Under what preconditions: permissions, protocol, state, approval, timing?
5. Which control would stop, constrain, detect or contain the path, and is there evidence that it actually operates?
6. What evidence supports each step?
7. What remains unresolved?

## Team questions (whitepaper, Executive brief E.9)

Ask these once for the system:

1. Which of our AI agents or automations can approve, execute, modify, delete, disclose or transact, and through which identities?
2. Where does an agent act on behalf of a user or another identity, and is that delegation bounded, attributable and revocable?
3. Is any "human approval" in our AI workflows meaningful: does the reviewer have the information, decision freedom, competence, time and enforceable ability to stop the action, or is an AI recommendation being treated as an approval?
4. For our most consequential AI paths, which control actually breaks the path, and what current evidence shows that it operates?
5. If that control fails, is there an alternate route to the same target?
6. Which material conditions are currently UNKNOWN, and who owns resolving them?
7. Can we revoke, contain and recover from an AI agent's actions, and has that been tested?
8. When we accept an AI risk, does the record keep the underlying finding visible?

## Rules to keep while reviewing

- **Connected is not authorised, authorised is not invoked, invoked is not consequence.** Record each as its own fact ([Artifact #12 §2.6](../docs/12-ontology-specification.md)).
- **A missing arrow is not proof of safety.** Not finding a path is not evidence that no path exists.
- **UNKNOWN stays UNKNOWN.** It means the evidence is absent, insufficient or materially conflicting. It is never zero, safe, passed, failed, Not Applicable or Not Tested.
- **A control is a breakpoint only where it can break the path:** at a node, relationship or boundary where an effective control can materially stop, constrain, detect or contain it ([Artifact #2 §6.6](../docs/02-core-conceptual-model.md)). Record it as breaking the path only with evidence that it operates.
- **Findings and decisions are separate.** Accepting a risk does not change what was found.

## Path template

Copy one per material path.

| Field | Entry |
|---|---|
| Path name | |
| Start condition | Who or what starts it, and in what situation |
| Steps | `source -RELATIONSHIP-> target`, one line per step, with the condition each step needs |
| Target and consequence | The action or data reached, and why it matters |
| Authority exercised | Observe, Read, Retrieve, Infer, Recommend, Approve, Execute, Modify, Delete, Disclose or Transact ([Artifact #2 §5.2](../docs/02-core-conceptual-model.md)) |
| Boundaries crossed | Provider, account, privilege, data-classification or approval boundaries |
| Breakpoint controls | Which control would stop, constrain, detect or contain it, and what evidence shows it operates |
| Alternate routes | Other ways to reach the same target |
| Path state | Candidate, Topological, Plausible, Validated, Exploitable, Controlled or Invalidated ([Artifact #12 §9.3](../docs/12-ontology-specification.md)). A Lite review normally ends at Candidate, Topological or Plausible; the other states need authorized testing or direct evidence. |
| UNKNOWNs | Register IDs |

## UNKNOWN register

| ID | What is unresolved | Why (absent, insufficient or conflicting evidence) | Paths or claims affected | Owner | Evidence that would resolve it | Due |
|---|---|---|---|---|---|---|
| U-1 | | | | | | |

## Worked example (synthetic)

The refund system in the [interactive graph](https://aitrustgraph.org/graph/):

- **Consequence:** a customer refund is issued.
- **Path:** `Analyst -AUTHENTICATES_AS-> Analyst identity -DELEGATES_TO-> Refund agent -INVOKES-> Refund tool -TRIGGERS_ACTION-> Issue refund -AFFECTS-> Customer refunded`.
- **Authority exercised:** Transact.
- **Breakpoints:** `Issue refund -APPROVED_BY-> Refund approval` (above the limit) and `-LIMITED_BY-> Refund limit`; `-CONTROLLED_BY-> Payment control`. Each needs evidence that it operates; a limit's existence does not prove enforcement.
- **UNKNOWN:** U-1, the delegation's scope, duration and revocation are not evidenced.
- **Path state:** at most Plausible until U-1 is resolved and the refund limit's enforcement is evidenced.
- **Next step:** obtain the delegation configuration and a test of the limit, then decide whether a full assessment is needed.

## What you can conclude

You **can** say which paths you examined, which controls you expect to break them, what evidence you have, and what remains UNKNOWN. You **cannot** call the system safe, compliant, assessed or rated under AI Trust Graph. For that depth, run the full lifecycle in [Artifact #7](../docs/07-assessment-methodology.md), with evidence grading under [Artifact #6](../docs/06-evidence-model.md) and controls from [Artifact #5](../docs/05-master-control-library.md).
