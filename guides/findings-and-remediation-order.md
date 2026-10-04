[← Back to methodology index](../README.md)

# Findings: types, definitions and a remediation reading order

> **Status: non-normative reference.** This guide collects what the canonical artifacts already say about findings, which is spread across four of them, and suggests a practical reading order for remediation built only from canonical signals. It adds no finding type, severity scale or rule. The artifacts govern.

## 1. Where the definitions live

[Artifact #9](../docs/09-reporting-standard.md) §5.1 lists the seven finding types, but defines them elsewhere:

- **[Artifact #10](../docs/10-reference-assessment-repository.md) Appendix A.3, *Finding taxonomy calibration*:** a "use when / do not use when" table for all seven types.
- **[Artifact #7](../docs/07-assessment-methodology.md) §§16.1-16.5:** definitions of observation, evidence gap, control deficiency and path exposure, a caution on nonconformity, and root-cause analysis.
- **[Artifact #10](../docs/10-reference-assessment-repository.md) Appendix B.5:** how control results map to findings.

The core rule: "Use the narrowest canonical result type supported by criteria and evidence" (Artifact #10 A.3).

## 2. The seven types (quoted from Artifact #10 A.3)

| Type | Use when | Do not use when |
|---|---|---|
| Observation | Fact is decision-relevant without required deficiency | You merely want a low-severity finding |
| Evidence Gap | Material assertion lacks sufficient support | Absence is technically proven |
| Control Deficiency | Applicable objective is inadequately designed, implemented or operating | Applicability is unresolved |
| Path Exposure | Plausible or validated sequence reaches a material target | Only isolated weaknesses exist |
| Governance Exception | Approved departure has scope and expiry | No approval exists |
| Nonconformity | Defined applicable criterion is unmet | Only an indicative mapping exists |
| Risk Statement | Potential consequence and uncertainty require decision | You intend to imply occurrence |

**Further canonical wording:**
- **Observation and evidence gap.** "An observation is a factual condition without necessarily implying deficiency. An evidence gap identifies insufficient support for a material assertion." (Artifact #7 §16.1)
- **Control deficiency.** "A control deficiency exists when applicable design, implementation or operation does not meet the canonical control objective." (Artifact #7 §16.2)
- **Path exposure.** "A path exposure describes a plausible or validated sequence to a material target under stated conditions, controls, evidence and confidence." (Artifact #7 §16.3)
- **Nonconformity.** "Use nonconformity only against a defined applicable criterion. Do not call a framework mapping a legal compliance breach without authorized validation." (Artifact #7 §16.4)

## 3. From control results to findings (Artifact #10 B.5)

The calibration vectors apply three rules:
- a finalized **adverse supported result** is a **Control Deficiency**;
- an **insufficient or unsupported determination** is an **Evidence Gap** or an assurance limitation;
- an authorised assessment that **cannot reach a determinate result** is **Inconclusive**.

UNKNOWN is never turned into a finding of deficiency. It stays visible as an evidence gap with an owner ([Artifact #4](../docs/04-scoring-framework.md) §0.4, SC-INV-01).

## 4. A reading order for remediation (practice, not a rule)

The methodology deliberately has **no single severity score**, and keeps severity and confidence separate ([Artifact #4](../docs/04-scoring-framework.md) §0.4, SC-INV-07). Engineering teams still need a sensible order. The order below uses only signals the methodology already produces. It is a suggestion; your decision authority sets the actual priorities ([Artifact #9](../docs/09-reporting-standard.md) separates findings from decisions).

1. **Open critical gates first.** Gates cap or invalidate results before anything is aggregated ([Artifact #4](../docs/04-scoring-framework.md) §0.4, SC-INV-04; [Artifact #3](../docs/03-maturity-model.md) §1.8). An open gate usually points to the most consequential gap.
2. **Then Path Exposure findings, by band.**
   - Critical before High before Moderate ([Artifact #4](../docs/04-scoring-framework.md) §4.10), applying any critical override ([Artifact #4](../docs/04-scoring-framework.md) §4.11).
   - Read each band with its component profile and confidence ([Artifact #4](../docs/04-scoring-framework.md) §4.8). At band edges, look at the components, not just the label.
3. **Then Control Deficiencies on those paths' breakpoints.** A control that is a breakpoint on a high-band path ([Artifact #12](../docs/12-ontology-specification.md) §9.5) matters more than the same control elsewhere. Within that, order by the control's criticality in context ([Artifact #4](../docs/04-scoring-framework.md) §1.6).
4. **Then Evidence Gaps that block a material conclusion.** Resolving an UNKNOWN can move a path's state or band either way, so these are often cheap and high-value.
5. **Then the rest:** remaining deficiencies by criticality, Nonconformities, Governance Exceptions nearing expiry, and Observations.

**Don't use this order to:**
- create a numeric severity;
- downgrade a finding because its remediation is expensive;
- let management acceptance change the underlying result. Acceptance changes the disposition, not the assessed exposure ([Artifact #4](../docs/04-scoring-framework.md) §0.10).

## 5. Closing a finding

"Close the finding only after current implementation evidence and representative retest support the intended control effect and residual path is reassessed." ([Artifact #4](../docs/04-scoring-framework.md) §1.10)

**Closure checklist:**
- [ ] The implementation evidence is current and from the deployed environment.
- [ ] A representative retest supports the intended control effect.
- [ ] The residual path is reassessed and its new state recorded. If an alternate path emerged, it is scored separately ([Artifact #4](../docs/04-scoring-framework.md) §4.12).
- [ ] The score change records the prior and new values, the evidence, the reviewer, the date, the reason and the affected paths ([Artifact #4](../docs/04-scoring-framework.md) §1.10).
- [ ] The retest is independent of the remediation, and the closure record keeps the prior result, the reviewer and the decision ([Artifact #5](../docs/05-master-control-library.md) ATG-VAL-012).
