[← Back to methodology index](README.md)

# Security policy

This policy covers security vulnerabilities in **this repository and the services built from it**. It does not cover the AI-security *subject matter* the methodology discusses: the methodology describes attack paths and control weaknesses in the abstract, and discussing them openly is part of its purpose.

## What is in scope

- The website at [aitrustgraph.org](https://aitrustgraph.org) and its source in [`website/`](website/), including its Content Security Policy and response headers.
- The optional graph API Worker in [`neo4j-worker/`](neo4j-worker/).
- The repository's GitHub Actions workflows in [`.github/workflows/`](.github/workflows/) and the build and analysis scripts (`website/scripts/`, `whitepaper/build/`, `analysis/`).
- Anything in this repository that could expose a secret, credential or personal data.

## What is not a security report

- **Gaps, errors or weaknesses in the methodology itself** (a missing control, an unclear rule, a scoring problem). Please report these publicly with the [Methodology finding](https://github.com/Sivas1187/Ai-trust-graph/issues/new?template=finding-report.yml) issue form; open discussion is how the methodology improves.
- Vulnerabilities in third-party products, models or services. Report those to their own maintainers.

## How to report a vulnerability

Please **do not open a public issue** for a vulnerability.

1. Use GitHub's private reporting: open the repository's **Security** tab and choose **Report a vulnerability**. The report is visible only to the maintainer.
2. Include what is affected, how to reproduce it, and the impact you expect. A minimal proof of concept helps; please do not access or change data that is not yours.
3. If the **Report a vulnerability** button is not available, open a public issue titled "Security contact request" **without any details**, and the maintainer will arrange a private channel.

## What to expect

AI Trust Graph is maintained by one independent author, so responses are best effort:

- an acknowledgement, normally within 7 days;
- an assessment and, where the report is valid, a fix or mitigation as soon as practical;
- credit in the fix's release notes or changelog if you would like it.

There is no bug bounty. Please allow a reasonable time for a fix before any public disclosure.

## Supported versions

Only the current `main` branch and the live website are supported. Earlier commits and release candidates are not patched separately.
