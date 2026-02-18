# Workflowez Product Policy

**Document Version:** 1.0
**Effective Date:** 2026-02-18
**Prepared by:** Product & Engineering Leadership
**Approved by:** Chief Executive Officer

---

## Table of Contents

1. [Introduction & Scope](#1-introduction--scope)
2. [Product Vision & Principles](#2-product-vision--principles)
3. [Product Development Lifecycle](#3-product-development-lifecycle)
4. [Feature Prioritization Policy](#4-feature-prioritization-policy)
5. [Roadmap Management](#5-roadmap-management)
6. [Release Management & Versioning](#6-release-management--versioning)
7. [Data Privacy & Security in Product](#7-data-privacy--security-in-product)
8. [Responsible AI Policy](#8-responsible-ai-policy)
9. [Integration & API Policy](#9-integration--api-policy)
10. [Pricing & Packaging Policy](#10-pricing--packaging-policy)
11. [Accessibility & Inclusivity](#11-accessibility--inclusivity)
12. [Deprecation & End-of-Life Policy](#12-deprecation--end-of-life-policy)
13. [Intellectual Property & Licensing](#13-intellectual-property--licensing)
14. [Product Incident & Escalation Policy](#14-product-incident--escalation-policy)

---

## 1. Introduction & Scope

### 1.1 Purpose

This Product Policy ("Policy") defines the principles, standards, and processes that govern how Workflowez builds, ships, maintains, and retires its products. It serves as the authoritative reference for product, engineering, design, and customer-facing teams on how product decisions are made and what obligations the Company holds toward its customers, partners, and the broader ecosystem.

### 1.2 Scope

This Policy applies to:
- All software products developed and operated by Workflowez, including SaaS applications, APIs, integrations, and AI-powered features
- All internal teams involved in the product lifecycle: Product, Engineering, Design, QA, Data, Customer Success, Sales, and Marketing
- Third-party vendors and contractors contributing to Workflowez product development, who are bound by equivalent standards through their contracts

### 1.3 Policy Governance

This Policy is owned by the **Head of Product** and reviewed annually or upon significant product or regulatory changes. Amendments require approval from the CEO. The current version is accessible to all employees on the internal Notion wiki.

---

## 2. Product Vision & Principles

### 2.1 Product Vision

Workflowez exists to make intelligent workflow automation accessible to every business — from a 10-person startup to a 500-person scale-up. Our products eliminate repetitive, manual processes through AI, allowing teams to focus on creative, high-value work.

### 2.2 Core Product Principles

Every product decision at Workflowez is guided by the following principles, in order of priority:

**1. Customer Value First**
We build features because they solve real problems for real customers — not because they are technically interesting or because competitors have them. Every major feature should be traceable to a validated customer need.

**2. Simple by Default, Powerful When Needed**
The default experience must be immediately understandable to a non-technical user. Advanced capabilities exist for power users but are never imposed on those who don't need them.

**3. Trustworthy by Design**
Security, privacy, and reliability are not afterthoughts — they are built into every product decision from the start. We do not ship features that compromise user trust for the sake of speed.

**4. AI-Augmented, Human-in-Control**
AI features enhance human decision-making; they do not replace human judgment. Every AI-assisted output provides users with transparency, the ability to understand the result, and the ability to override it.

**5. Iterative & Evidence-Based**
We ship early to learn, but we define what "done enough to ship" means explicitly before building. We measure outcomes, not just outputs.

**6. Sustainable Pace**
We build at a pace the team can sustain without accumulating excessive technical debt. Speed without quality is not speed — it is deferred cost.

---

## 3. Product Development Lifecycle

### 3.1 Lifecycle Stages

All significant product features or changes move through the following stages:

```
Discovery → Definition → Design → Development → QA & Review → Release → Iteration
```

| Stage | Key Activities | Owner | Output |
|-------|---------------|-------|--------|
| **Discovery** | User research, problem validation, market analysis | PM + UX | Problem statement, opportunity brief |
| **Definition** | Requirements, scope, success metrics, acceptance criteria | PM | Product Requirements Document (PRD) |
| **Design** | UX/UI wireframes, prototypes, design review | Design | Approved design files |
| **Development** | Engineering implementation, unit tests, code review | Engineering | Merged, tested code |
| **QA & Review** | Functional testing, regression, security review, PM sign-off | QA + PM | Test report, go/no-go decision |
| **Release** | Staged rollout, monitoring, release notes | Engineering + PM | Live feature, release comms |
| **Iteration** | Usage analytics, customer feedback, bug fixes | PM + Engineering | Backlog items, improvement PRDs |

### 3.2 Minimum Requirements to Start Development

Before any feature moves from Definition to Development, the following must be in place:

- [ ] PRD approved by the PM and at least one Engineering Lead
- [ ] Design approved by the Design Lead and PM
- [ ] Success metrics defined (what does "this worked" look like 30/60/90 days post-launch?)
- [ ] Security and data privacy implications reviewed
- [ ] Effort estimate agreed by Engineering
- [ ] Feature flagged in the system (to allow targeted rollout)

Features that skip these requirements may be rejected at QA review.

### 3.3 Definition of Done

A feature is considered **done** when:
- [ ] All acceptance criteria in the PRD are met
- [ ] Unit and integration tests pass (coverage ≥ 80% for new code)
- [ ] QA has signed off on functional testing
- [ ] No critical or high-severity bugs are open
- [ ] Security review completed (for data-touching features)
- [ ] Documentation updated (user-facing help docs, API docs, release notes)
- [ ] PM has given final sign-off
- [ ] Feature is deployed behind a feature flag and ready for controlled rollout

### 3.4 Sprint & Delivery Cadence

Workflowez engineering teams operate on **2-week sprints**:

| Activity | Cadence | Participants |
|----------|---------|--------------|
| Sprint Planning | Start of each sprint | PM + Engineering |
| Daily Standup | Daily, 15 minutes | Engineering team |
| Sprint Review | End of sprint | PM + Engineering + Design |
| Sprint Retrospective | End of sprint | Engineering team |
| Product Roadmap Review | Monthly | PM + Leadership |
| Quarterly OKR Review | Quarterly | All teams |

---

## 4. Feature Prioritization Policy

### 4.1 Prioritization Framework

Workflowez uses a weighted scoring model — **RICE** — to prioritize features objectively:

| Factor | Description | Weight |
|--------|-------------|--------|
| **Reach** | How many users/customers will this impact in the next quarter? | Count |
| **Impact** | How much will this move a key metric? (3=massive, 2=significant, 1=low, 0.5=minimal) | Multiplier |
| **Confidence** | How confident are we in reach and impact estimates? (100%, 80%, 50%) | % |
| **Effort** | How many person-weeks of engineering work? | Divisor |

**RICE Score = (Reach × Impact × Confidence) / Effort**

Features with higher RICE scores are prioritized. The PM is responsible for maintaining up-to-date RICE scores in the product backlog.

### 4.2 Strategic Themes

Beyond RICE scoring, the quarterly roadmap is shaped by up to **3 strategic themes** set by the Leadership Team. Features that align with a strategic theme receive a priority boost even if their pure RICE score is lower. Current strategic themes are documented in the quarterly product strategy memo.

### 4.3 Feature Categories & Escalation

Features are categorized by type, which affects their prioritization process:

| Category | Description | Decision Authority |
|----------|-------------|-------------------|
| **Customer-Requested** | Explicitly requested by one or more paying customers | PM, with CS input |
| **Strategic Initiative** | Tied to company OKRs or funding milestones | CEO + Head of Product |
| **Technical Debt** | Engineering-initiated improvements to stability, performance, or maintainability | Engineering Lead + PM |
| **Bug Fix** | Correctness issues — prioritized by severity (see Section 14) | Engineering + PM |
| **Compliance/Legal** | Required to meet regulatory or contractual obligations | CEO + Legal + PM |
| **Experimental** | Hypothesis-driven experiments with clear success/failure criteria | PM + Engineering |

Compliance and legal features override RICE prioritization and are treated as P0.

### 4.4 The "One-Feature" Rule

No team has more than **one major feature in active development at a time** (in addition to regular maintenance and bug fixes). Context-switching between multiple large features degrades quality and slows delivery. Exceptions require CEO approval.

### 4.5 Feature Requests from Customers

Customer feature requests are the primary input to the product roadmap. The process:

1. **CS/Sales logs the request** in the product feedback tool (with customer name, use case, and business impact)
2. **PM reviews and tags** the request against existing backlog items or creates a new one
3. **PM aggregates patterns** — a single feature requested by 5+ customers carries significantly more weight than a one-off request
4. **PM communicates the roadmap decision** back to the CS/Sales team for customer follow-up

Customers are never promised a feature on a specific date without explicit PM sign-off.

---

## 5. Roadmap Management

### 5.1 Roadmap Horizons

Workflowez maintains three roadmap horizons simultaneously:

| Horizon | Timeframe | Certainty | Audience |
|---------|-----------|-----------|----------|
| **Now** | Current sprint + next sprint | High (committed) | Engineering team |
| **Next** | Next 1–3 months | Medium (planned, may shift) | Internal teams |
| **Later** | 3–12 months | Low (directional, subject to change) | Leadership, key customers |

Features in the "Later" horizon are directional signals, not commitments. The roadmap is reviewed and updated monthly.

### 5.2 Internal vs. External Roadmap

**Internal roadmap** (visible to all Workflowez employees): Contains full detail including RICE scores, dependencies, owners, and rough timelines.

**External roadmap** (shared with customers and prospects): Contains only "Now" and "Next" items, described in capability terms (not feature-level detail), with quarters rather than specific dates. It is curated by PM and approved by the Head of Product before sharing.

**What we never put on the external roadmap:**
- Specific release dates (we use Q1/Q2/H1/H2 language)
- Features that have not yet been approved for development
- Capabilities that depend on unconfirmed external integrations
- Anything that would reveal competitive strategy to the market prematurely

### 5.3 Roadmap Communication

| Audience | Format | Frequency |
|----------|--------|-----------|
| Engineering team | Sprint planning + Notion | Every 2 weeks |
| All Workflowez employees | Company all-hands | Monthly |
| Enterprise customers | Roadmap call with PM + CS | Quarterly |
| Prospects (in sales process) | Roadmap deck (curated) | As needed |
| Public | Product blog / release notes | On major releases |

---

## 6. Release Management & Versioning

### 6.1 Release Types

Workflowez distinguishes four release types:

| Type | Scope | Approval Required | Customer Notification |
|------|-------|------------------|-----------------------|
| **Major Release** | New product, new tier, significant capability expansion | CEO + Head of Product | Yes — 30 days advance notice |
| **Minor Release** | New features, UX improvements, new integrations | PM + Engineering Lead | Yes — release notes |
| **Patch Release** | Bug fixes, security patches, performance improvements | Engineering Lead | Release notes (optional) |
| **Hotfix** | Critical bug or security vulnerability | On-call engineer + Engineering Lead | Immediate notification for customer-impacting issues |

### 6.2 Semantic Versioning

All Workflowez APIs and versioned products follow **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes to the API or product behavior
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, backward compatible

### 6.3 Feature Flags & Progressive Rollout

All significant new features are deployed behind **feature flags** before general availability. The standard rollout progression:

```
Internal team (alpha) → Beta customers (10%) → Wider rollout (50%) → General availability (100%)
```

Feature flags allow:
- Targeted testing with specific customers before broad release
- Instant rollback if issues are detected post-launch
- A/B testing of competing implementations
- Gradual load increase to monitor system performance

### 6.4 Release Notes

Release notes are published for every minor release and above. They must include:
- Summary of what changed and why
- Any breaking changes (highlighted prominently)
- Migration steps required from customers (if any)
- Known issues, with workarounds where available
- Links to updated documentation

Release notes are published on the Company website, the customer portal, and distributed via email to subscribed customers.

### 6.5 Change Freeze Periods

Workflowez observes **change freeze periods** during which no non-critical releases are made:
- Vietnamese Tết holidays (typically 5–10 days)
- Major customer events or launches (as designated by the PM)
- Last 5 business days of a calendar quarter (to ensure stability for reporting)

Hotfixes for critical security or reliability issues are exempt from change freeze.

---

## 7. Data Privacy & Security in Product

### 7.1 Privacy by Design

Privacy is not a compliance checkbox — it is a product design principle. All product features that collect, process, or store user data must be reviewed against the following at the design stage:

- **Data minimization:** Does the feature collect only the data strictly necessary for its function? Excess data collection is not permitted.
- **Purpose limitation:** Is the collected data used only for the stated purpose? Using data for secondary purposes requires explicit user consent.
- **User control:** Can users access, correct, export, and delete their data? All personal data must be accessible to users through the product or upon request.
- **Retention limits:** How long is data retained, and is there an automated deletion process? Retention periods must be defined and enforced.

### 7.2 Security Requirements for Product Features

All product features must comply with the following security baselines before release:

| Requirement | Standard |
|-------------|---------|
| **Authentication** | All user-facing features require authenticated sessions. MFA available for all accounts. |
| **Authorization** | Role-based access control (RBAC) enforced. Users can only access data they are authorized for. |
| **Data in transit** | All data transmitted over TLS 1.2 or higher. |
| **Data at rest** | Sensitive customer data encrypted at rest (AES-256 or equivalent). |
| **Input validation** | All user inputs sanitized and validated server-side. |
| **Dependency scanning** | Third-party libraries scanned for known vulnerabilities before inclusion. |
| **Secrets management** | No credentials, API keys, or secrets stored in source code repositories. |

Features that involve AI processing of customer data, payment data, or personally identifiable information (PII) require a **security design review** before development begins and a **penetration test** before general release.

### 7.3 Data Classification

Workflowez classifies all product data into four tiers:

| Tier | Description | Examples | Required Controls |
|------|-------------|----------|-------------------|
| **Public** | Intentionally public, no sensitivity | Marketing content, public API docs | None |
| **Internal** | Not public, low sensitivity | Aggregate usage metrics, internal logs | Access control |
| **Confidential** | Sensitive business or customer data | Customer workflow configurations, business data | Encryption + access control + audit log |
| **Restricted** | Highest sensitivity | PII, payment data, credentials | Encryption + strict access + DPA + audit |

### 7.4 Third-Party Data Processing

When Workflowez integrates with or relies on third-party services that process customer data:
- A **Data Processing Agreement (DPA)** must be in place before any customer data flows to the third party
- The third party must meet Workflowez's minimum security requirements (SOC 2 Type II preferred)
- Customers must be informed of material third-party processors in the Privacy Policy
- The integration must be included in the internal data map

### 7.5 Compliance Standards

Workflowez products are built to comply with:
- **Vietnam's Personal Data Protection Decree** (Decree No. 13/2023/ND-CP)
- **GDPR** (for customers in the European Economic Area)
- **ISO/IEC 27001** principles (information security management)
- **SOC 2 Type II** framework (targeted for certification within 18 months of launch)

Any new market entry requiring additional compliance standards (e.g., HIPAA for US healthcare, PCI-DSS for payment processing) must be assessed by the Legal and Security teams before product development begins.

---

## 8. Responsible AI Policy

### 8.1 Principles for AI Features

Workflowez is committed to building AI features that are beneficial, fair, and safe. All AI features in our products must adhere to the following principles:

**Transparency**
Users must know when they are interacting with AI. AI-generated outputs are clearly labeled. The system does not impersonate humans in ways that could mislead users.

**Explainability**
Where feasible, AI-assisted recommendations or decisions provide users with a rationale or key factors that influenced the output. Black-box results are the exception, not the rule.

**Human Oversight**
No AI feature in Workflowez products makes final, irreversible decisions without a human confirmation step. AI automates and suggests; humans decide.

**Fairness**
AI features are evaluated for potential bias before release. Particular attention is paid to features that affect business outcomes (e.g., lead scoring, routing, classification) to ensure they do not systematically disadvantage groups of users or their customers.

**Privacy**
Customer data used to power AI features is handled in strict accordance with Section 7. Customer data is not used to train general-purpose AI models without explicit opt-in consent.

**Reliability**
AI features are evaluated for output consistency and accuracy before release. Degraded AI performance triggers alerts and, where necessary, automatic fallback to deterministic behavior.

### 8.2 AI Feature Review Process

Before any AI-powered feature is released to customers, it must pass an **AI Feature Review**, covering:

1. **Intended use case and failure modes:** What is this feature designed to do? What happens when it is wrong?
2. **Training data provenance:** Where does the training or fine-tuning data come from? Is it licensed appropriately?
3. **Bias and fairness evaluation:** Has the model been tested across diverse user populations and use cases?
4. **Output quality benchmarks:** What accuracy/recall/precision targets must be met before GA release?
5. **User control mechanisms:** Can users correct, override, or opt out of AI-generated outputs?
6. **Monitoring plan:** How will AI feature quality be monitored post-launch? What triggers a rollback?

The AI Feature Review is conducted jointly by the PM, Engineering Lead, and a designated AI Safety reviewer (or the CTO in the absence of a dedicated reviewer).

### 8.3 Prohibited AI Applications

Workflowez will not build or deploy AI features that:
- Autonomously make legally or financially binding decisions without human review
- Generate or distribute disinformation, spam, or deceptive content at scale
- Enable discriminatory treatment of individuals based on protected characteristics
- Covertly surveil or profile individuals without their knowledge
- Are designed to manipulate users psychologically against their own interests (e.g., dark patterns powered by AI)
- Process sensitive personal categories (health, religion, political affiliation, biometric data) without explicit user consent and robust safeguards

---

## 9. Integration & API Policy

### 9.1 API Design Principles

Workflowez APIs are designed for:
- **Consistency:** Uniform naming conventions, response formats (JSON), and error structures across all endpoints
- **Stability:** Published APIs are supported for a minimum of 12 months before deprecation
- **Security:** Authentication via OAuth 2.0 / API keys with appropriate scopes; all endpoints require authorization
- **Documentation:** All public API endpoints are documented with request/response examples, error codes, and rate limits before release

### 9.2 API Versioning

APIs are versioned using the `/v{n}/` path prefix (e.g., `/v1/workflows`). A new API version is introduced when backward-incompatible changes are required. Workflowez supports a maximum of **two concurrent major API versions** at any time. When v3 is released, v1 is scheduled for sunset (with 12 months' notice).

### 9.3 Rate Limiting

API rate limits are enforced to ensure platform stability and fair usage across customers. Default limits:

| Plan | API Calls/minute | API Calls/day |
|------|-----------------|---------------|
| Starter | 60 | 5,000 |
| Pro | 300 | 50,000 |
| Business | 1,000 | 500,000 |
| Enterprise | Custom | Custom |

Customers exceeding rate limits receive HTTP 429 responses with a `Retry-After` header. Rate limit increases are available upon request for Enterprise customers.

### 9.4 Third-Party Integration Policy

When Workflowez integrates with a third-party platform or service:

- **Security assessment** of the integration must be completed before launch
- **DPA** is in place if customer data will be transmitted to the third party
- **Integration is documented** in the public integration catalog with capabilities, limitations, and setup guide
- **Graceful degradation** is implemented: if the third-party service is unavailable, Workflowez's core functionality is not affected
- **Partner agreements** (where applicable) are reviewed by Legal before any data-sharing begins

### 9.5 Webhook Policy

Workflowez supports outbound webhooks for event-driven integrations. Webhook security requirements:
- Payloads signed with HMAC-SHA256; customers must validate signatures
- Failed deliveries retried with exponential backoff (up to 72 hours)
- Webhook logs retained for 30 days
- Customers can view webhook delivery history in the product dashboard

---

## 10. Pricing & Packaging Policy

### 10.1 Pricing Principles

Workflowez pricing is designed to be:
- **Value-aligned:** Customers pay more as they get more value from the product
- **Transparent:** No hidden fees; pricing is published and predictable
- **Accessible:** A meaningful free or starter tier allows customers to experience core value before committing
- **Scalable:** Pricing grows with customers as they scale, creating a natural expansion revenue motion

### 10.2 Pricing Changes

Price changes require CEO approval and follow this process:
1. PM and Finance prepare a pricing change proposal with customer impact analysis
2. CEO approves the change
3. Existing customers receive **60 days written notice** before any price increase takes effect
4. New pricing is communicated via email, in-product notification, and on the pricing page
5. Existing annual subscribers are honored at their contracted rate for the remainder of their term

Workflowez will not retroactively change pricing within an active subscription period without the customer's explicit consent.

### 10.3 Feature Gating

Features are gated to subscription tiers according to the following policy:
- **Starter/Free tier** includes core functionality sufficient to demonstrate value. It is not crippled or artificially limited to the point of being unusable.
- **Pro tier** unlocks collaboration features, advanced automation, and higher usage limits.
- **Business/Enterprise tier** unlocks enterprise-grade security, SLA guarantees, dedicated support, custom integrations, and advanced AI features.
- New features are assigned a tier at the time of PRD approval. Changing a feature's tier after GA requires PM approval and customer communication.

### 10.4 Discounts & Custom Pricing

- Discounts of up to **20%** may be granted by the Sales team within pre-approved discount authority
- Discounts exceeding 20% require Head of Sales approval
- Discounts exceeding 40% require CEO approval
- All custom pricing arrangements must be documented in the CRM and reviewed by Finance
- Competitors, friends, or social connections of employees are not eligible for special pricing without CEO approval

### 10.5 Refund Policy

- **Monthly subscriptions:** No refunds for partial months. Cancellations take effect at the end of the billing period.
- **Annual subscriptions:** Customers who cancel within the first 14 days receive a full refund. After 14 days, no refunds are issued, but the subscription remains active until the end of the annual term.
- **Service credit:** If Workflowez fails to meet SLA commitments (see Section 14), affected customers receive service credits in accordance with the SLA terms.
- Refund exceptions may be granted by Customer Success leadership on a case-by-case basis for extraordinary circumstances.

---

## 11. Accessibility & Inclusivity

### 11.1 Accessibility Standard

Workflowez products target compliance with **WCAG 2.1 Level AA** across all customer-facing interfaces. This includes:

- **Perceivable:** All non-text content has text alternatives; color is not used as the sole means of conveying information; minimum contrast ratio of 4.5:1 for normal text
- **Operable:** All functionality accessible via keyboard; no content flashes more than 3 times per second; users can pause, stop, or hide moving content
- **Understandable:** Language of the page is defined; error messages are descriptive and suggest corrections; consistent navigation
- **Robust:** Content is interpretable by assistive technologies (screen readers, voice control)

### 11.2 Accessibility in the Development Process

- Accessibility requirements are included in every PRD
- Design reviews include accessibility checks (color contrast, touch targets, keyboard navigation)
- QA includes assistive technology testing (minimum: screen reader compatibility on major browsers)
- Accessibility issues discovered post-launch are treated as severity 2 bugs (resolved within 30 days) or severity 1 if they prevent a key workflow

### 11.3 Internationalization (i18n)

Workflowez products are built with internationalization as a first-class concern:
- All user-facing strings are externalized (no hardcoded text in UI code)
- Date, number, and currency formatting respect user locale settings
- RTL (right-to-left) layout support is considered for markets where applicable
- Currently supported languages: **Vietnamese (vi)** and **English (en)**. Additional languages are added based on market demand and go-to-market strategy.

---

## 12. Deprecation & End-of-Life Policy

### 12.1 Deprecation Principles

Workflowez does not retire features or APIs without adequate notice, migration support, and customer communication. Customers rely on our product's stability for their operations, and abrupt changes damage trust.

### 12.2 Deprecation Timeline

| Notice Period | Applies To |
|--------------|-----------|
| **12 months** | Public APIs, major product features with significant customer usage |
| **6 months** | Minor product features, integrations, secondary APIs |
| **3 months** | Low-usage features (< 5% of active accounts), beta features |
| **Immediate** | Features discontinued for legal, security, or critical compliance reasons (with immediate explanation to customers) |

### 12.3 Deprecation Process

1. **Decision:** PM + Engineering Lead decide to deprecate a feature, with CEO approval for major deprecations
2. **Impact assessment:** CS team identifies all affected customers and quantifies business impact
3. **Communication plan:** PM drafts customer-facing communication with alternatives and migration guidance
4. **Deprecation notice:** Sent to affected customers via email and in-product notification
5. **Migration support:** CS team proactively reaches out to high-impact customers to assist with migration
6. **Grace period:** Feature remains operational during the notice period (read-only for APIs where practical)
7. **Sunset:** Feature is disabled on the scheduled date
8. **Post-sunset support:** CS team handles any customer issues within 30 days of sunset

### 12.4 No Surprise Shutdowns

Workflowez commits to never shutting down a core product or service without at least **6 months' advance notice** and a clear data export path for customers. In the event of a company acquisition or wind-down, customers will be provided with reasonable time and tools to migrate their data.

---

## 13. Intellectual Property & Licensing

### 13.1 Ownership of Product IP

All intellectual property created by Workflowez employees and contractors in the course of their work — including source code, designs, documentation, models, and data pipelines — is owned exclusively by Workflowez, as governed by employment agreements and IP assignment clauses.

### 13.2 Open Source Policy

Workflowez may use open-source software components in its products, subject to the following:

- **Approved licenses:** MIT, Apache 2.0, BSD 2/3-clause, ISC. These permissive licenses are approved for use in Workflowez products without further review.
- **Restricted licenses:** GPL, LGPL, AGPL, and other copyleft licenses require review by the Engineering Lead and Legal before use, as they may impose obligations on Workflowez's proprietary code.
- **Prohibited licenses:** Components with no license, unknown provenance, or licenses incompatible with commercial use are prohibited.
- **License compliance:** A software composition analysis (SCA) scan is run as part of the CI/CD pipeline to detect and flag license issues before merge.

Workflowez may contribute to open-source projects or release open-source tools, subject to CEO approval and Legal review.

### 13.3 Customer Data Ownership

Customers own their data. Workflowez's rights to customer data are limited to what is necessary to provide the contracted service, as described in the Terms of Service and Privacy Policy. Workflowez does not:
- Sell customer data to third parties
- Use customer data to train general-purpose AI models without explicit consent
- Retain customer data beyond the contractual retention period

Customers can export their data at any time through the product interface or by contacting Customer Success.

### 13.4 AI Model Licensing

When Workflowez integrates third-party AI models (e.g., OpenAI GPT, Anthropic Claude) into its products:
- The applicable model provider's Terms of Service govern permitted use cases
- Customer data sent to third-party models is subject to those providers' data handling policies (as documented in the relevant DPAs)
- Workflowez monitors changes to model provider terms and updates its product practices accordingly

---

## 14. Product Incident & Escalation Policy

### 14.1 Incident Severity Levels

| Severity | Definition | Examples | Response Target |
|----------|------------|---------|-----------------|
| **P0 — Critical** | Complete service outage or data loss affecting all or many customers | Platform down, data breach, security incident | 15 minutes to acknowledge, 4 hours to resolve |
| **P1 — High** | Major feature unavailable, significant performance degradation, data integrity issue | Core workflow builder broken, API down for > 10% of customers | 1 hour to acknowledge, 8 hours to resolve |
| **P2 — Medium** | Non-critical feature unavailable, workaround available | Integration failure, UI bug blocking secondary workflow | 4 hours to acknowledge, 3 business days to resolve |
| **P3 — Low** | Minor bugs, cosmetic issues, performance degradation < 20% | Typo, minor layout issue, slow report loading | 1 business day to acknowledge, 2 weeks to resolve |

### 14.2 Incident Response Process

**P0/P1 Incidents:**
1. On-call engineer declares the incident and creates an incident channel (#incident-[date]) in Slack
2. Engineering Lead and PM are notified immediately (PagerDuty or direct call)
3. Customer Success notified to prepare customer communication
4. Status page updated within 15 minutes of incident declaration
5. Regular status updates every 30 minutes until resolved
6. Post-mortem written within 5 business days of resolution (blameless, root cause focused)

**P2/P3 Incidents:**
- Logged as bugs in the engineering backlog
- Prioritized according to Section 4.3
- Assigned to the relevant engineering team in the next sprint planning

### 14.3 Customer Communication During Incidents

- **Status Page** (status.workflowez.com): Updated in real time for P0/P1 incidents
- **Email notification** to affected customers: Sent within 1 hour for P0/P1 incidents
- **In-product banner**: Displayed for customer-visible degradations
- **Post-incident report**: Published on the status page and emailed to affected customers within 5 business days of resolution

### 14.4 Service Level Agreement (SLA)

| Plan | Uptime SLA | Measurement Period |
|------|-----------|-------------------|
| Starter | 99.5% | Monthly |
| Pro | 99.7% | Monthly |
| Business | 99.9% | Monthly |
| Enterprise | 99.95% | Monthly |

Uptime is measured as the percentage of time the core platform (workflow execution and API) is available and responding within normal latency thresholds. Scheduled maintenance windows (with 48 hours' advance notice) are excluded from SLA calculations.

**SLA breach remedies:**

| Downtime (in excess of SLA) | Service Credit |
|-----------------------------|---------------|
| < 1% | None |
| 1–5% | 10% of monthly fee |
| 5–10% | 25% of monthly fee |
| > 10% | 50% of monthly fee |

Service credits are applied to the next billing cycle and are the sole remedy for SLA breaches, except in cases of gross negligence or willful misconduct.

---

*For questions about this Policy, please contact the **Product Team** at product@workflowez.com or the **Engineering Lead** for technical matters.*

*© 2026 Workflowez. All rights reserved. This document is confidential and for internal use only.*
