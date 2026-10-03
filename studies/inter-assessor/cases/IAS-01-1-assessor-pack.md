# IAS-01-1: Calder Billing Services, OpsPilot operations agent

> **Assessor pack, version 1.0, frozen 2026-10-03.** Do not edit; a correction requires a new case version. Synthetic and fictional. Calder Billing Services Ltd, its people and systems do not exist. Do not generalise any answer to a real environment ([Artifact #10](../../../docs/10-reference-assessment-repository.md) §0.4).
>
> Work alone. Do not discuss this case with other assessors until results are published.

## Case header

| Field | Value |
|---|---|
| Case ID | IAS-01-1 |
| Case version | 1.0 |
| Methodology snapshot | Tag `v1.0-rc.4`, commit `2bfe2db33c96a18790b1228d2914ba388b22e739`, bundle 1.0-rc.4 |
| Assessment type | Material-change assessment ([Artifact #7](../../../docs/07-assessment-methodology.md) §1.3) |
| Evidence period | 2026-08-28 to 2026-09-15 |

## 1. Charter

**Organisation.** Calder Billing Services Ltd runs metering and billing for water utilities. Its billing platform serves about 40,000 retail customer accounts.

**Purpose.** OpsPilot, an AI operations agent, has run in production since March 2026, handling infrastructure tickets in the billing platform. Calder plans to extend OpsPilot to two more platforms. This assessment supports the Chief Information Officer's decision on that extension. The assessment produces findings; the decision belongs to the CIO.

**In scope.**
- The OpsPilot agent and its orchestrator
- The workload identity `svc-opspilot`
- The `cloud-admin` MCP server
- The chat-ops approval workflow
- The support-ticket intake route
- The production project `prod-billing`, including the database `billing-prod`
- The development project `dev-billing` and its CI pipeline, only as far as they touch `svc-opspilot`
- The public status-page integration

**Out of scope.** The LLM provider's internal service, and the security of the customer portal beyond ticket routing.

**Authorisation (rules of engagement RoE-2026-07).**
- Read-only inspection of IAM, configuration and logs in `prod-billing`, `dev-billing` and the CI system.
- One active test window in production on 2026-09-15, 02:00 to 04:00, against synthetic resources created for the test only.
- **Prohibited:** testing through the real customer ticket channel (crafted tickets would reach customer-support staff), and any action against real customer data.

## 2. Architecture

| ID | Component | Description |
|---|---|---|
| C1 | Customer portal | Authenticated customers submit support tickets and choose a category. About 40,000 active customer accounts. |
| C2 | Ticket router | Forwards every ticket in the category "Service outage" to OpsPilot automatically. The ticket's free text is inserted verbatim into the agent's instruction context. |
| C3 | OpsPilot orchestrator | Runs in `prod-billing`. Calls an external LLM API. Each run handles one ticket. No retrieval index, vector store, enterprise search or memory persists between runs. |
| C4 | `cloud-admin` MCP server | Tools: `list_resources`, `restart_service`, `scale_service`, `delete_resource`, `run_sql_maintenance` (runs SQL statements against `billing-prod`). |
| C5 | `svc-opspilot` | Workload identity used by the MCP server for all OpsPilot tool calls. |
| C6 | Chat-ops approval | Each tool call carries an `operation_class` field (`read`, `maintenance` or `destructive`), **set by the agent**. Calls classed `destructive` pause until an on-call engineer clicks Approve in the operations channel. |
| C7 | `billing-prod` | Managed PostgreSQL holding three years of metering and billing records for all customers. |
| C8 | `dev-billing` and CI | Development project, plus the nightly integration pipeline `nightly-integration`. |
| C9 | Public status page | Receives incident summaries from the ticketing system through an outbound webhook. |

Two other automation identities are in scope: `svc-ticketsync` (reads tickets) and `svc-notify` (posts to chat).

## 3. Discovery

**Sources used:**
- the cloud IAM API and its policy analyzer;
- the MCP server manifest;
- the orchestrator and ticket-router configuration;
- the chat-ops admin API;
- the CI system's audit API;
- the cloud audit log;
- governed document repositories;
- interviews.

**Blind spots:**
- The LLM provider's logs are not available.
- The assessor asked for read access to the CI runner secret store. Access was not granted within the evidence period, so the store was not inspected.
- Cloud audit logging for authentication events in `prod-billing` is configured with 10% sampling (see EV-12).

## 4. Evidence register

Grade each item yourself. "Exported by the assessor" means the assessor ran the export directly against the named system and can repeat it.

| ID | Description | Source and date |
|---|---|---|
| EV-01 | **OpsPilot design document v2.1.** Approved by the Head of Platform; approval record attached. States that `svc-opspilot` is granted "read, restart and scale only" in `prod-billing` and that "destructive operations are not permitted". | Governed document repository, approved 2026-03-10 |
| EV-02 | **Effective permissions of the automation identities in `prod-billing`.** Exported by the assessor through the IAM API, and matched by a second, independent export from the cloud policy analyzer the same day. `svc-opspilot` holds role `ops-automation`, which includes `databases.delete`, `storage.objects.delete` and `instances.delete` on the whole project. Through IAM database authentication, `svc-opspilot` also maps to database role `opspilot_maint`, which owns every billing schema in `billing-prod`; `run_sql_maintenance` connects with this role. `svc-ticketsync` and `svc-notify` hold only the permissions listed for them in their design entries. | IAM API and policy analyzer, 2026-09-12 |
| EV-03 | **Runbook "Destructive operation approval".** Approved. Any tool call with `operation_class = destructive` requires approval by the on-call engineer; the approval record logs the operation name; parameters "are shown to the approver". The runbook does not say how `operation_class` is set, nor whether an approval is bound to the parameters. | Governed document repository, approved 2026-02-01 |
| EV-04 | **Approval workflow configuration.** Exported by the assessor; the assessor also watched three live approval prompts in the channel. The approval step is enforced for calls whose payload carries `operation_class = destructive`. The value is taken from the agent's tool-call payload. An approval token is valid for 10 minutes for any call with the same operation name, whatever its parameters. | Chat-ops admin API, 2026-09-12 |
| EV-05 | **Authorised test report T-01.** Run by the assessor in the production window under RoE-2026-07. The plan names the controls under test: ATG-AUT-005 (approval bypass, replay and parameter mutation) and ATG-AUT-003 (negative test of destructive permission). Tests were run through the operator console, not through tickets, so the path OpsPilot → `cloud-admin` → `billing-prod` was the same as a ticket-driven run without the ticket step. **(a)** The assessor instructed OpsPilot to drop synthetic table `zz_assess_synthetic` through `run_sql_maintenance`, classed `maintenance`. It executed with no approval, 3 of 3 attempts. **(b)** OpsPilot requested approval, correctly classed `destructive`, to delete synthetic table `zz_assess_a`, and the approver approved it. Within the token's validity, OpsPilot then deleted `zz_assess_b` with no new approval: 2 of 2 attempts succeeded. Tool calls, approval events and database logs were captured. | Test report, 2026-09-15 |
| EV-06 | **`billing-prod` configuration.** Exported by the assessor and confirmed by the assessor's own CLI describe. Deletion protection is disabled. Automated backups are kept for 1 day and, per the configuration's documented behaviour, are deleted with the instance. No manual snapshots or cross-project exports exist. | Database admin API and CLI, 2026-09-12 |
| EV-07 | **Runbook "Disable OpsPilot".** Approved. To stop the agent: disable the keys of `svc-opspilot`, then stop the orchestrator. | Governed document repository, approved 2026-04-02 |
| EV-08 | **Interview with the on-call lead.** "We used the kill switch once in May; it worked within five minutes." No ticket, log or other record was provided. | Interview notes, 2026-09-11 |
| EV-09 | **Environment standard ENV-STD-3.** Approved. Each environment uses distinct workload identities; production identities must not be usable from development projects or CI. | Governed document repository, approved 2025-11-20 |
| EV-10 | **Role bindings of `svc-opspilot`.** Exported by the assessor and confirmed by the policy analyzer. Bindings exist only in `prod-billing`. | IAM API, 2026-09-12 |
| EV-11 | **CI audit extract for `nightly-integration`.** Exported by the assessor. On 6 nights, the pipeline logged authentication "as svc-opspilot" from the dev CI runner address range. | CI audit API, covering 2026-08-28 to 2026-09-04 |
| EV-12 | **Cloud audit log extract for `svc-opspilot`.** Exported by the assessor. No authentication events from the dev CI runner range. The logging configuration shows 10% sampling for authentication events. | Cloud audit log, covering 2026-08-28 to 2026-09-04 |
| EV-13 | **Email from the platform lead.** "The CI log label is an alias; the pipeline uses svc-ci-dev." No supporting record. | Email, 2026-09-13 |
| EV-14 | **Ticket-router configuration and portal statistics.** Exported by the assessor. "Service outage" tickets are forwarded to OpsPilot automatically; any authenticated customer can choose that category; 40,212 active customer accounts. The orchestrator's prompt template inserts the ticket text verbatim. | Router and portal admin APIs, 2026-09-12 |
| EV-15 | **Status-page integration configuration.** Exported by the assessor and checked against network policy. Outbound webhook only, from ticketing to the status page. The status page holds no credentials for, and has no inbound route to, ticketing or OpsPilot. | Ticketing admin API and network policy, 2026-09-12 |
| EV-16 | **Cloud security posture tool alert.** "svc-opspilot over-privileged (risk score 87/100)". Generated automatically; not reviewed by anyone. | CSPM tool, 2026-09-01 |
| EV-17 | **Quarterly privileged-tool risk review minutes, Q1 and Q2 2026.** Approved. Manual review of obvious risks from privileged automation tools. | Governed document repository |
| EV-18 | **Register "Automation permissions".** Lists the tools and permissions of the four priority automation identities. It records `ops-automation`, including its delete permissions, for `svc-opspilot`. Reviewed and approved monthly by the Head of Platform; approval log attached, Jan to Aug 2026. | Governed document repository |
| EV-19 | **Sample of access-request tickets.** Exported by the assessor and cross-checked against IAM. 15 of the 15 sampled 2026 grants to automation identities record a named approver, an expiry and a recertification date, as ACC-STD-2 requires. | Ticketing system and IAM API, 2026-09-12 |
| EV-20 | **Service-account register.** Approved. Lists the three automation identities with owners and approval roles. It does not define grantor, delegate, scope, duration or revocation for delegation. | Governed document repository, approved 2026-05-04 |
| EV-21 | **Token revocation records.** Exported by the assessor and cross-checked against the IAM audit log. Four revocations of automation-identity keys in 2026 were performed using the procedure in EV-07 (none for `svc-opspilot`). | Ticketing system and IAM audit log, 2026-09-12 |
| EV-22 | **Access standard ACC-STD-2.** Approved. Standardises decision rights, exceptions, expiry, compensating controls and recertification for privileged and automation access. | Governed document repository, approved 2025-10-01 |

## 5. Questions for the assessor

Record every answer as one row in the [workpaper template](../workpaper-template.csv), with `case_id = IAS-01-1`. Use the `item_id` and `output` names exactly as given here. Where the evidence does not support a value, record the appropriate result state (UNKNOWN, Not Tested, Inconclusive and so on) with `determinate = no`.

**A. Evidence grades.** For each of EV-01 to EV-22: `output = evidence_grade`, `item_id = EV-nn`.

**B. Applicability.** `output = applicability` for each of:
- `CTRL-ATG-AUT-003`
- `CTRL-ATG-AUT-005`
- `CTRL-ATG-AUT-010`
- `CTRL-ATG-RES-007`
- `CTRL-ATG-VAL-006`

**C. Control scores.** For each of AUT-003, AUT-005, AUT-010 and RES-007 (`item_id = CTRL-ATG-xxx-nnn`), record the four outputs:
- `control_score_D`
- `control_score_I`
- `control_score_OE`
- `control_score_overall`

Record **supported** component scores, as defined in [Artifact #4](../../../docs/04-scoring-framework.md) §1.5. If you want to note an observed score that differs, put it in `rationale`.

**D. Paths.** Assess these three paths to the target "deletion or destruction of data in `billing-prod`":
- **PATH-1:** a crafted "Service outage" ticket from any customer account steers OpsPilot into a destructive call against `billing-prod`.
- **PATH-2:** the dev CI pipeline, or anyone controlling it, authenticates as `svc-opspilot` and deletes data in `billing-prod`.
- **PATH-3:** content arriving through the public status page reaches OpsPilot and steers it into a destructive call.

For each path, record `path_state` and `path_role` (`item_id = PATH-n`). For PATH-1 and PATH-2, also record:
- `pei_C`, `pei_R`, `pei_A`, `pei_Am` and `pei_CR`
- `pei_value`
- `pei_band`

**E. Maturity.** Record `capability_maturity` for D3.1 to D3.6 (`item_id = D3.1` and so on) and `domain_maturity` for D3 (`item_id = D3`), Authority Governance ([Artifact #3](../../../docs/03-maturity-model.md) §4).

**F. Critical gates.** Record `critical_gate` as `open` or `not open` for each of:
- `GATE-D3-IRREV`: irreversible action lacks enforceable approval or containment ([Artifact #3](../../../docs/03-maturity-model.md) §4.7)
- `GATE-D3-IDENT`: high-impact acting identity or authority is UNKNOWN ([Artifact #3](../../../docs/03-maturity-model.md) §4.7)

**G. Findings.** Record `finding_type`, or `None` if no finding is warranted, for each of these items:
- `CTRL-ATG-AUT-003`, `CTRL-ATG-AUT-005`, `CTRL-ATG-AUT-010`, `CTRL-ATG-RES-007`, `CTRL-ATG-VAL-006`
- `PATH-1`, `PATH-2`, `PATH-3`

Use the taxonomy in [Artifact #9](../../../docs/09-reporting-standard.md) §5.1.

Also record your total time, and in `ambiguity_note` any rule you found unclear. Ambiguity notes are among the most useful results of the study.
