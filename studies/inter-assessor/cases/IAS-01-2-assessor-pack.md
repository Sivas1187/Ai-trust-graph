# IAS-01-2: Larkspur Home Goods, Campaign Studio agent

> **Assessor pack, version 1.0, frozen 2026-10-03.** Do not edit; a correction requires a new case version. Synthetic and fictional. Larkspur Home Goods, its people and systems do not exist. Do not generalise any answer to a real environment ([Artifact #10](../../../docs/10-reference-assessment-repository.md) §0.4).
>
> Work alone. Do not discuss this case with other assessors until results are published.

## Case header

| Field | Value |
|---|---|
| Case ID | IAS-01-2 |
| Case version | 1.0 |
| Methodology snapshot | Tag `v1.0-rc.4`, commit `2bfe2db33c96a18790b1228d2914ba388b22e739`, bundle 1.0-rc.4 |
| Assessment type | Baseline assessment ([Artifact #7](../../../docs/07-assessment-methodology.md) §1.1) |
| Evidence period | 2026-09-01 to 2026-09-12 |

## 1. Charter

**Organisation.** Larkspur Home Goods is a retailer with about 600,000 customers in its CRM.

**Purpose.** Campaign Studio is an AI agent that drafts and publishes promotional posts to Larkspur's public social-media accounts. This is its first ATG assessment, and it supports the Chief Marketing Officer and the Chief Information Security Officer in deciding whether Campaign Studio may be extended to two more channels. The assessment produces findings; the decision belongs to them.

**In scope.**
- The Campaign Studio agent
- Its workload identity `svc-campaign`
- The CRM segment tool
- The image-generation tool
- The DLP service on the publishing route
- The approval service in the content management system (CMS)
- The `social-publish` MCP server
- Larkspur's social-media accounts
- Larkspur's AI security validation function, for the AI Security Validation maturity domain

**Out of scope.** The internal security of the social-media platform and of the image-model provider.

**Authorisation (rules of engagement RoE-2026-09).**
- Read-only inspection of configuration, logs and records.
- One active test window on 2026-09-10, using the production `social-publish` server, the production DLP route and the production publishing endpoint, against a company-owned page whose visibility is set to private. The RoE records that the private page uses the same endpoint, MCP server, DLP route and approval service as the public pages; only visibility differs.
- Synthetic PII markers only.
- **Prohibited:** generating images that contain synthetic PII. The image provider's terms forbid it, so the image route was not tested.

## 2. Architecture

| ID | Component | Description |
|---|---|---|
| C1 | Marketing users | About 30 staff can ask Campaign Studio for a draft post for a chosen customer segment. |
| C2 | Campaign Studio agent | Reads the chosen segment through the CRM segment tool, writes post text and can generate an accompanying image. |
| C3 | CRM segment tool | `svc-campaign` reads the "campaign segments" view: name, email, city and last five purchases, up to 5,000 customers per segment. |
| C4 | Image-generation tool | External image model; it can render legible text inside images. |
| C5 | DLP service | Scans outbound post content for PII before publishing. |
| C6 | CMS approval service | A marketing approver who is not the requester approves the final post. The approval token is bound to a hash of the final content. |
| C7 | `social-publish` MCP server | Publishes approved posts to the social accounts. |
| C8 | Public social accounts | About 250,000 followers in total. |

## 3. Discovery

**Sources used:**
- configuration exports;
- the running MCP server's tool manifest;
- the deployed container image digest recorded in the AIBOM;
- CMS and DLP admin APIs;
- governed document repositories;
- the validation function's test register;
- a vendor letter.

**Blind spots:** the image-model provider's internal moderation cannot be inspected.

## 4. Evidence register

Grade each item yourself. "Exported by the assessor" means the assessor ran the export directly against the named system and can repeat it.

| ID | Description | Source and date |
|---|---|---|
| EV-01 | **Technical design verification of the approval service.** Performed by the assessor against the CMS approval service's deployed policy configuration and its design record. The approval token is bound to a SHA-256 hash of the final post content, including image bytes. It is single-use and expires after 30 minutes, and approver ≠ requester is enforced. Dependencies, bypass routes and failure modes (for example, approval service unavailable means fail closed) are documented and match the deployed configuration. | CMS approval service, 2026-09-08 |
| EV-02 | **Approval enforcement export.** Exported by the assessor. **(a)** Publish-service configuration: every call to `publish_post` is rejected without a valid token. **(b)** CMS dashboard export: 1,214 of 1,214 posts published in Q3 carried a valid token. **(c)** Exception register: zero bypass grants, reviewed weekly. | CMS admin API, 2026-09-08 |
| EV-03 | **Authorised test report T-02.** Run in the production test window. **(a)** Publish without a token: denied 5/5. **(b)** Content changed after approval: hash mismatch, denied 5/5. **(c)** Used token replayed: denied 5/5. **(d)** Requester tries to approve own post: denied 3/3. All attempts went through Campaign Studio and `social-publish`. One test window; no material change to the system was exercised. | Test report, 2026-09-10 |
| EV-04 | **DLP standard DLP-STD-1.** Approved. Outbound content to public channels is scanned for PII patterns. Scope: "text fields of outbound posts and messages". Images are not mentioned. | Governed document repository, approved 2026-01-15 |
| EV-05 | **DLP policy configuration.** Exported by the assessor and confirmed through the DLP admin API. Policy `public-outbound-pii` is enforced on the text fields of `social-publish` posts. Image attachments pass through unscanned. | DLP admin API, 2026-09-08 |
| EV-06 | **Authorised test report T-03.** Same production test window. Twenty drafts with synthetic PII markers in the post text were sent through Campaign Studio: 20/20 blocked by DLP before publishing. Images were not tested (prohibited by the RoE). The reviewer formally narrowed the operating-effectiveness claim for this test to text content and disclosed the narrowing in the report. | Test report, 2026-09-10 |
| EV-07 | **Image rendering check.** Performed by the assessor in the development environment, using the same image model version as production (confirmed against the AIBOM). Three images requested with a text banner: all rendered the requested words legibly. No PII was used. | Assessor working papers, 2026-09-09 |
| EV-08 | **Letter from the image-model provider.** "Our moderation filter blocks personal data in generated images." No test results or technical detail provided. | Vendor letter, 2026-06-30 |
| EV-09 | **Q3 AI validation summary to the Risk Committee.** Approved. Lists "Image PII moderation: effective (vendor attested)" among the effective controls for Campaign Studio. | Governed document repository, approved 2026-09-05 |
| EV-10 | **Tool manifest of the running `social-publish` server.** Exported by the assessor and matched to the deployed container image digest in the AIBOM. Version 3.2, with tools `draft_post`, `request_approval` and `publish_post`. There is no `schedule_post` tool. | Running MCP server, 2026-09-08 |
| EV-11 | **Threat model 2025.** Approved; written for `social-publish` v2.x. Hypothesis TM-07: "`schedule_post` publishes scheduled posts without the approval step." | Governed document repository, approved 2025-06-12 |
| EV-12 | **Permissions export for `svc-campaign`.** Exported by the assessor. Read access to the "campaign segments" view only (fields as in C3). | IAM API, 2026-09-08 |
| EV-13 | **Validation plan VP-2026.** Approved. Risk-based validation scope covering models, agents, retrieval, MCP and tools, identity, infrastructure and supply chain. | Governed document repository, approved 2026-01-20 |
| EV-14 | **2026 test register.** Exported by the assessor. **(a)** Tests executed in 2026 across every area in VP-2026, each linked to a threat-model hypothesis and run under an RoE instance. **(b)** Design, implementation, operating-effectiveness and validation results are kept as separate fields under documented, repeatable procedures. **(c)** The image moderation filter is marked "Not Tested: vendor attestation only". **(d)** There is no residual-path analysis, and coverage is not measured against material paths. | Validation team's test-management system, 2026-09-08 |
| EV-15 | **Threat model TM-Campaign-2026.** Approved. Maps system-specific threats to graph objects, start conditions, paths and consequences. | Governed document repository, approved 2026-03-02 |
| EV-16 | **Rules-of-engagement standard RoE-STD.** Approved. Standardises scope, identities, data, prohibited actions, stop conditions and restoration for all active testing. | Governed document repository, approved 2025-12-01 |
| EV-17 | **Finding template FT-2.** Approved. Every finding records criteria, condition, cause, path, evidence, confidence and remediation objective. | Governed document repository, approved 2026-02-10 |
| EV-18 | **Sample of findings.** Exported by the assessor: 10 findings from 2026. All 10 follow FT-2. Three of the closed findings were closed on the owner's confirmation, without a retest. | Test-management system, 2026-09-08 |
| EV-19 | **Validation independence policy VIP-1.** Approved. Validation is performed by the security testing team, independent of the system teams, with competence requirements, quality review and record retention. | Governed document repository, approved 2025-11-15 |
| EV-20 | **Sample of quality-review records.** Exported by the assessor: 8 of 8 sampled 2026 test reports have a recorded independent quality review and retained test records. | Test-management system, 2026-09-08 |

## 5. Questions for the assessor

Record every answer as one row in the [workpaper template](../workpaper-template.csv), with `case_id = IAS-01-2`. Use the `item_id` and `output` names exactly as given here. Where the evidence does not support a value, record the appropriate result state with `determinate = no`.

**A. Evidence grades.** For each of EV-01 to EV-20: `output = evidence_grade`, `item_id = EV-nn`.

**B. Applicability.** `output = applicability` for:
- `CTRL-ATG-AUT-005`
- `CTRL-ATG-AUT-009`
- `CTRL-ATG-AUT-006`

**C. Control scores.** For AUT-005 and AUT-009, record the four outputs:
- `control_score_D`
- `control_score_I`
- `control_score_OE`
- `control_score_overall`

Record **supported** component scores ([Artifact #4](../../../docs/04-scoring-framework.md) §1.5). If you want to note an observed score that differs, put it in `rationale`.

**D. Paths.** Assess these three paths to the target "customer PII from the CRM published on Larkspur's public social accounts":
- **PATH-A:** PII reaches the post text and is published.
- **PATH-B:** PII is rendered inside a generated image attached to a post and is published.
- **PATH-C:** a post containing PII is published through a scheduled-publishing tool, without approval.

For each path, record `path_state` and `path_role`. For PATH-A and PATH-B, also record:
- `pei_C`, `pei_R`, `pei_A`, `pei_Am` and `pei_CR`
- `pei_value`
- `pei_band`

**E. Maturity.** Record `capability_maturity` for D4.1 to D4.6 and `domain_maturity` for D4, AI Security Validation ([Artifact #3](../../../docs/03-maturity-model.md) §5).

**F. Critical gates.** Record `critical_gate` as `open` or `not open` for each of:
- `GATE-D4-OE-CLAIM`: operating effectiveness claimed from policy or interview evidence ([Artifact #3](../../../docs/03-maturity-model.md) §5.7)
- `GATE-U-CONTROLLED`: material path called controlled without representative validation ([Artifact #3](../../../docs/03-maturity-model.md) §1.8)

**G. Findings.** Record `finding_type`, or `None`, for each of:
- `CTRL-ATG-AUT-005`
- `CTRL-ATG-AUT-009`
- `PATH-A`, `PATH-B`, `PATH-C`

Use the taxonomy in [Artifact #9](../../../docs/09-reporting-standard.md) §5.1.

Also record your total time, and in `ambiguity_note` any rule you found unclear.
