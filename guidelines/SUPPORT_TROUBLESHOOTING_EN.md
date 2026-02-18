# Workflowez Product Support & Troubleshooting Guide

**Document Version:** 1.0
**Effective Date:** 2026-02-18
**Prepared by:** Customer Success & Engineering
**Approved by:** Chief Executive Officer

---

## Table of Contents

1. [Support Overview](#1-support-overview)
2. [Support Channels & Contact](#2-support-channels--contact)
3. [Support Tiers & SLA](#3-support-tiers--sla)
4. [Ticket Lifecycle Management](#4-ticket-lifecycle-management)
5. [General Troubleshooting Methodology](#5-general-troubleshooting-methodology)
6. [Account & Authentication Issues](#6-account--authentication-issues)
7. [Workflow Builder Troubleshooting](#7-workflow-builder-troubleshooting)
8. [AI Advisor Troubleshooting](#8-ai-advisor-troubleshooting)
9. [Integration & Webhook Troubleshooting](#9-integration--webhook-troubleshooting)
10. [API Troubleshooting](#10-api-troubleshooting)
11. [Performance & Reliability Issues](#11-performance--reliability-issues)
12. [Billing & Subscription Issues](#12-billing--subscription-issues)
13. [Data & Privacy Requests](#13-data--privacy-requests)
14. [Escalation Procedures](#14-escalation-procedures)
15. [Self-Service Resources](#15-self-service-resources)
16. [Known Limitations & Workarounds](#16-known-limitations--workarounds)

---

## 1. Support Overview

### 1.1 Purpose

This Product Support & Troubleshooting Guide ("Guide") is the definitive reference for Customer Success (CS), Support Engineers, and Product teams at Workflowez when assisting customers with technical issues, billing questions, and product inquiries. It is also the source document used to build and maintain the customer-facing help center.

### 1.2 Support Philosophy

At Workflowez, support is not a cost center — it is a product experience. How customers feel when something goes wrong is as important as how they feel when everything works. We are guided by:

- **First Contact Resolution (FCR):** Resolve issues completely in the first interaction wherever possible
- **Transparency:** If we cannot resolve immediately, we tell customers what we know, what we don't know, and what we are doing about it
- **Ownership:** The person who takes a ticket owns it until it is resolved or formally escalated — no customer is passed around without a warm handoff
- **Proactive Communication:** We notify customers of known issues and planned maintenance before they discover problems themselves
- **Root Cause Thinking:** We fix the symptom and investigate the cause — recurring issues are bugs to be fixed, not tickets to be repeatedly closed

### 1.3 Scope

This Guide covers all Workflowez products and services:
- Workflowez SaaS platform (workflow builder, execution engine, dashboards)
- AI Advisor product
- Social Intelligent product
- Workflowez Public API
- Third-party integrations facilitated by Workflowez

---

## 2. Support Channels & Contact

### 2.1 Customer-Facing Channels

| Channel | Address / Link | Availability | Best For |
|---------|---------------|-------------|---------|
| **In-app chat** | Chat icon in product dashboard | Business hours (ICT) | Quick questions, guided troubleshooting |
| **Email support** | support@workflowez.com | 24/7 (response per SLA) | Detailed issues, attachments, audit trail |
| **Help Center** | help.workflowez.com | 24/7 (self-service) | How-to guides, FAQs, release notes |
| **Status Page** | status.workflowez.com | 24/7 (self-service) | Platform status, incident history |
| **Community Forum** | community.workflowez.com | 24/7 (peer support) | Best practices, peer discussions |
| **Dedicated Slack** | By invitation (Enterprise only) | Business hours (ICT) | Enterprise accounts — real-time collaboration |
| **Phone / Video call** | Scheduled via CS team | Business hours (ICT) | Enterprise — complex onboarding, critical issues |

### 2.2 Internal Support Channels

| Channel | Contact | Purpose |
|---------|---------|---------|
| **#support-triage** (Slack) | CS team | Internal triage and discussion of active tickets |
| **#engineering-oncall** (Slack) | On-call engineer | Escalating P0/P1 technical issues |
| **support@workflowez.com** | CS team inbox | Customer ticket intake |
| **PagerDuty** | On-call rotation | Alerting for P0 incidents out of hours |

### 2.3 Business Hours

Workflowez standard business hours for staffed support:
- **Monday–Friday, 08:00–18:00 ICT (GMT+7)**
- Excluding Vietnamese public holidays and designated change-freeze periods

Enterprise customers with 24/7 SLA coverage receive out-of-hours support via the dedicated on-call rotation.

---

## 3. Support Tiers & SLA

### 3.1 Support Tiers by Plan

| Feature | Starter | Pro | Business | Enterprise |
|---------|---------|-----|----------|------------|
| Help Center access | ✅ | ✅ | ✅ | ✅ |
| Community Forum | ✅ | ✅ | ✅ | ✅ |
| Email support | ✅ | ✅ | ✅ | ✅ |
| In-app chat | ❌ | ✅ | ✅ | ✅ |
| Priority queue | ❌ | ❌ | ✅ | ✅ |
| Dedicated CS Manager | ❌ | ❌ | ❌ | ✅ |
| Dedicated Slack channel | ❌ | ❌ | ❌ | ✅ |
| Scheduled onboarding calls | ❌ | ❌ | ✅ (1/quarter) | ✅ (monthly) |
| 24/7 on-call coverage | ❌ | ❌ | ❌ | ✅ |

### 3.2 Response Time SLA by Severity & Plan

| Severity | Starter | Pro | Business | Enterprise |
|----------|---------|-----|----------|------------|
| **P0 — Critical** | 4 hours | 2 hours | 1 hour | 15 minutes |
| **P1 — High** | 1 business day | 4 hours | 2 hours | 1 hour |
| **P2 — Medium** | 3 business days | 2 business days | 1 business day | 4 hours |
| **P3 — Low** | 5 business days | 3 business days | 2 business days | 1 business day |

*Response time = time from ticket receipt to first substantive response. Resolution time targets are in Section 14 (Product Policy SLA).*

### 3.3 Severity Classification

**P0 — Critical**
- Complete inability to access the Workflowez platform
- Data loss or data corruption affecting production workflows
- Security breach or unauthorized access to customer data
- All workflows stopped executing with no workaround

**P1 — High**
- Core workflow builder not loading or saving
- Workflow executions failing for > 50% of runs
- AI Advisor completely unresponsive
- API returning 5xx errors for critical endpoints
- A single critical integration completely broken (e.g., main CRM)

**P2 — Medium**
- Individual workflow failing intermittently
- Non-critical integration broken with a partial workaround available
- Dashboard not displaying data correctly
- Performance significantly degraded (> 3× normal response time)
- UI bug preventing access to a secondary feature

**P3 — Low**
- Cosmetic issues (misaligned UI elements, incorrect labels)
- Feature request or enhancement suggestion
- Documentation inaccuracy
- Minor performance degradation (< 50% slower)
- Question about how a feature works

---

## 4. Ticket Lifecycle Management

### 4.1 Ticket States

```
New → Triaged → In Progress → Pending Customer → Resolved → Closed
```

| State | Description | Owner |
|-------|-------------|-------|
| **New** | Ticket received, not yet reviewed | System |
| **Triaged** | Severity assigned, CS agent assigned | CS Agent |
| **In Progress** | Actively being investigated or worked | CS Agent / Support Engineer |
| **Pending Customer** | Awaiting information or confirmation from customer | Customer |
| **Pending Engineering** | Escalated to Engineering; waiting for fix or investigation | Engineering |
| **Resolved** | Issue fixed or workaround provided; customer confirmed or auto-closed | CS Agent |
| **Closed** | Resolution confirmed; ticket archived | System |

### 4.2 Ticket Intake & Triage (CS Team Process)

1. **Receive** — Ticket enters the queue via email, in-app chat, or Slack
2. **Acknowledge** — Send auto-acknowledgment within 5 minutes; personalized acknowledgment within SLA window
3. **Classify** — Assign severity (P0–P3) and category (Account, Workflow, AI, API, Billing, etc.)
4. **Reproduce** — Attempt to reproduce the issue using the customer's description and environment details
5. **Investigate** — Check internal monitoring, logs, and status page for known issues
6. **Respond** — Provide first substantive response within SLA: either a solution, next steps, or timeline
7. **Escalate if needed** — If the issue requires Engineering, escalate per Section 14

### 4.3 Information to Collect at Intake

When a customer contacts support, collect the following before deep investigation:

**Mandatory:**
- [ ] Customer name and email / account ID
- [ ] Plan tier (Starter / Pro / Business / Enterprise)
- [ ] Issue description in the customer's own words
- [ ] When did the issue start?
- [ ] Is the issue affecting all users on the account or specific users?
- [ ] Steps to reproduce

**Situational:**
- [ ] Browser / OS / device (for UI issues)
- [ ] Workflow ID or name (for workflow execution issues)
- [ ] API endpoint and request/response payload (for API issues)
- [ ] Integration name and version (for integration issues)
- [ ] Error message (exact text or screenshot)
- [ ] Affected workflow run IDs or execution timestamps

### 4.4 Auto-Close Policy

Tickets in **Pending Customer** state are auto-closed after:
- **7 days** for P2/P3 tickets (with a reminder sent at day 5)
- **3 days** for P0/P1 tickets (with a reminder sent at day 2)

Customers can reopen a closed ticket within 30 days by replying to the ticket email. After 30 days, a new ticket must be opened.

---

## 5. General Troubleshooting Methodology

### 5.1 The DARC Framework

Workflowez support uses the **DARC framework** for all troubleshooting:

| Step | Name | Description |
|------|------|-------------|
| **D** | Define | Clearly define the problem: what is failing, for whom, when, and under what conditions |
| **A** | Assess | Gather information: logs, screenshots, reproduction steps, environment details |
| **R** | Resolve | Apply the most likely fix; test to confirm resolution |
| **C** | Close | Document the resolution, update the knowledge base, and close the ticket |

### 5.2 First Checks (Before Deep Investigation)

Before investigating any technical issue, always confirm:

1. **Platform status:** Check status.workflowez.com for active incidents
2. **Browser/app cache:** Clear browser cache and cookies; try in an incognito/private window
3. **Network:** Try from a different network (e.g., mobile hotspot instead of corporate VPN)
4. **Account status:** Confirm the customer's subscription is active and not suspended
5. **Recent changes:** Ask if the customer made any changes to workflows, integrations, or settings in the 24 hours before the issue started
6. **Permissions:** Confirm the user has the required role/permissions for the action they are trying to perform

These checks resolve approximately 30% of tickets without requiring Engineering involvement.

### 5.3 Reproducing Issues

A reproducible issue is a solvable issue. Steps to reproduce:

1. Use a **test account or sandbox environment** — never reproduce in a customer's production account without explicit written permission
2. Follow the customer's exact steps in the exact order described
3. Document the environment: browser version, OS, screen resolution, timezone
4. If the issue is not reproducible: ask for a screen recording and check if the issue is account-specific, user-specific, or workflow-specific
5. If the issue is intermittent: collect timestamps of failures to identify patterns (time of day, concurrent workflow load, specific data inputs)

---

## 6. Account & Authentication Issues

### 6.1 Cannot Log In

**Symptoms:** Login page returns an error, redirect loop, or blank page after credentials entered.

**Diagnostic steps:**
1. Confirm the email address is correctly spelled
2. Check if the account exists (search in admin panel)
3. Check if the account is suspended or deleted
4. Check if the customer is on an SSO (Single Sign-On) plan — SSO users cannot use email/password login
5. Check if there is an active P0/P1 incident affecting authentication

**Common resolutions:**

| Cause | Resolution |
|-------|-----------|
| Wrong password | Initiate password reset via "Forgot Password" on login page |
| Account locked (5 failed attempts) | Unlock account in admin panel; customer receives unlock email |
| SSO configuration error | Check SSO settings in Organization Settings; verify IdP metadata is current |
| Browser cookie blocking | Ask customer to enable cookies for workflowez.com; test in incognito |
| Account deleted | If within 30 days, restore from soft-delete; beyond 30 days, contact Engineering |

### 6.2 Two-Factor Authentication (2FA) Issues

**Lost authenticator app / Cannot receive 2FA code:**
1. Customer submits identity verification (email from registered address + last 4 digits of payment method or account creation date)
2. CS agent verifies identity in admin panel
3. CS agent temporarily disables 2FA for the account
4. Customer re-enables 2FA with a new authenticator app
5. CS agent logs the identity verification action in the ticket

**2FA backup codes not working:**
- Backup codes are one-time use. If all have been used, follow the lost authenticator flow above.

### 6.3 User Role & Permission Issues

**Symptom:** User can log in but cannot access features they should have access to.

**Resolution steps:**
1. Confirm the user's assigned role in Organization → Members
2. Review the feature's required permission level (reference the Permissions Matrix in the Help Center)
3. Check if the workspace plan includes the feature the user is trying to access
4. If roles appear correct, ask the user to log out and back in (role changes require session refresh)
5. If the issue persists, collect the user ID and feature name and escalate to Engineering

### 6.4 SSO / SAML Configuration Issues

**Common SSO errors and resolutions:**

| Error | Likely Cause | Resolution |
|-------|-------------|-----------|
| "Invalid SAML response" | IdP metadata outdated | Re-download and re-upload IdP metadata in SSO settings |
| "User not found" | Email attribute mismatch | Verify SAML attribute mapping: email field must match Workflowez expected attribute |
| "SSO not configured" | Domain not verified | Complete domain verification in Organization Settings before enabling SSO |
| Redirect loop | ACS URL incorrect in IdP | Confirm ACS URL in Workflowez SSO settings matches what is configured in the IdP |

---

## 7. Workflow Builder Troubleshooting

### 7.1 Workflow Will Not Save

**Symptoms:** "Save" button grayed out, spinner on save, error toast on save attempt.

**Diagnostic steps:**
1. Check browser console for JavaScript errors (F12 → Console tab)
2. Check network tab for failed API requests (4xx or 5xx on `/api/v1/workflows/...`)
3. Ask if the customer has multiple tabs open with the same workflow — concurrent edits cause conflicts

**Common resolutions:**

| Cause | Resolution |
|-------|-----------|
| Session expired | Reload the page; log in again |
| Validation error | Check for incomplete node configurations (red indicators on nodes) |
| Concurrent edit conflict | Refresh to get latest version; re-apply recent changes |
| Workflow too large | Workflows exceeding 500 nodes hit a size limit; split into sub-workflows |
| Network interruption | Check connectivity; re-attempt save after stable connection confirmed |

### 7.2 Workflow Execution Failures

**Symptoms:** Workflow runs but shows "Failed" status; some or all executions erroring.

**Step 1: Identify failure type**

| Error Type | Description | Where to Look |
|------------|-------------|---------------|
| **Trigger failure** | Workflow never started | Trigger node logs; webhook delivery history |
| **Action node failure** | Specific step failed | Execution log → failed node → error message |
| **Credential/auth failure** | External service rejected credentials | Credential configuration; check if service token expired |
| **Data mapping failure** | Expected field not found in input data | Check data from previous node; review field mappings |
| **Timeout** | Node took too long to respond | Check target service status; increase timeout if configurable |
| **Rate limit** | External service returned 429 | Check rate limits on the third-party service; implement delays |

**Step 2: Read the execution log**
- Navigate to Workflow → Execution History → [failed run]
- Expand the failed node to see input data, output data, and error message
- The error message from the external service is passed through verbatim — this often contains the root cause

**Step 3: Common fixes by error code**

| HTTP Code | Meaning | Fix |
|-----------|---------|-----|
| 400 Bad Request | Malformed request / invalid data | Review request body mapping; check required fields |
| 401 Unauthorized | Invalid or expired credentials | Reconnect the integration / refresh API token |
| 403 Forbidden | Valid credentials but insufficient permission | Check permission scopes on the connected app/account |
| 404 Not Found | Resource does not exist | Verify IDs, URLs, or record references in mapping |
| 408 / Timeout | Target did not respond in time | Retry; check target service health |
| 422 Unprocessable | Data structure invalid | Review field types and formats expected by target API |
| 429 Too Many Requests | Rate limited by target service | Add a delay node; reduce execution frequency |
| 500 / 502 / 503 | Target service error | Wait and retry; check target service status page |

### 7.3 Trigger Not Firing

**Webhook trigger not receiving events:**
1. Verify the webhook URL has been correctly entered in the third-party system
2. Check Workflowez webhook delivery log (Settings → Webhooks → Delivery History)
3. Send a test event from the third-party system; observe if it appears in the delivery log
4. If the event arrives but does not trigger execution: check trigger filters and conditions
5. If no event arrives: the issue is in the third-party configuration, not Workflowez

**Schedule trigger not running on time:**
1. Confirm the schedule expression is correct (use the cron expression tester in the UI)
2. Check the workflow timezone setting matches the intended schedule timezone
3. Review execution history for whether previous runs completed on time
4. Check if the account is within execution quota for the billing period

### 7.4 Workflow Logic Errors

**Conditional branching not routing correctly:**
1. Enable "debug mode" on the workflow to inspect data at each branch point
2. Verify the condition expression syntax (reference the Expression Guide in the Help Center)
3. Check data types: comparing a string `"true"` to boolean `true` will fail silently
4. Use the expression tester in the node configuration to validate conditions against sample data

---

## 8. AI Advisor Troubleshooting

### 8.1 AI Advisor Not Responding

**Symptoms:** Chat input sent, no response; loading indicator spins indefinitely; error message in chat.

**Diagnostic steps:**
1. Check status.workflowez.com for AI service incidents
2. Check the browser network tab for the chat API request — look for the response status
3. Ask: Is this affecting all conversations or a specific one?
4. Ask: Did the issue start after a specific message or session?

**Common resolutions:**

| Cause | Resolution |
|-------|-----------|
| AI service timeout | Refresh the page; start a new conversation |
| Context window exceeded | Very long conversations can exceed model limits; start a new conversation |
| Network proxy blocking | Corporate firewalls may block WebSocket connections; whitelist `*.workflowez.com` |
| Browser extension conflict | Disable ad-blockers or privacy extensions; test in incognito |
| AI provider outage | Check the AI provider's status page; wait for upstream resolution |

### 8.2 AI Responses Are Incorrect or Hallucinated

**Description:** The AI Advisor produces factually incorrect, outdated, or irrelevant answers.

**What to tell the customer:**
- AI language models can produce incorrect outputs — this is a known characteristic of generative AI
- AI Advisor responses should be treated as a starting point, not a final authority
- For mission-critical decisions, always verify AI-generated information from authoritative sources

**Actions to take:**
1. Ask the customer for the specific question asked and the incorrect response received
2. Log the example in the AI feedback tracker (internal tool) for the Product team's review
3. If the error is systematic (e.g., wrong information about a specific topic repeatedly), escalate to Product as a P2 issue
4. Offer the customer workaround guidance on how to phrase prompts more effectively

### 8.3 AI Advisor Language or Tone Issues

**Symptom:** AI responds in the wrong language, uses inappropriate tone, or ignores system instructions.

**Resolution:**
1. Verify the language setting in the product (Settings → Language)
2. Verify the AI Advisor's configured persona and system prompt (for custom deployments)
3. If the AI consistently ignores system instructions, collect examples and escalate to Engineering for prompt injection or configuration review
4. For language issues: ensure the conversation was started in the target language (model language detection is context-sensitive)

### 8.4 AI Advisor Knowledge Cutoff Issues

**Symptom:** AI does not know about recent events, product updates, or news after a certain date.

**What to explain to the customer:**
- Workflowez's AI Advisor is powered by large language models with a training data cutoff date
- Information about events after the cutoff will not be available to the model unless it is retrieved via connected data sources
- For real-time or recent information, customers should use the web search or connected knowledge base features (if available in their plan)

---

## 9. Integration & Webhook Troubleshooting

### 9.1 Integration Authentication Failure

**Symptoms:** Integration shows "Disconnected" or "Authentication Error" status; workflows using the integration fail with 401/403 errors.

**Resolution steps:**
1. Navigate to Settings → Integrations → [Integration Name]
2. Click "Reconnect" or "Refresh Token" to re-authorize
3. If reconnecting fails, revoke the existing connection and create a new one
4. Check if the connected account has the required permissions/scopes:
   - Review the required scopes listed in the integration documentation
   - In the third-party platform, verify the connected app's permissions have not been modified
5. Check if the API key or OAuth token has been revoked in the third-party platform (tokens can expire or be revoked by the platform admin)

**Specific integration quick-checks:**

| Integration | Common Failure | Quick Fix |
|------------|---------------|-----------|
| Google Workspace | OAuth token expired | Reconnect via Google OAuth flow |
| Slack | App removed from workspace | Re-install Workflowez Slack app in workspace |
| HubSpot | API key rotated | Update API key in integration settings |
| Salesforce | IP whitelist block | Add Workflowez IPs to Salesforce trusted IP list |
| Notion | Integration permissions changed | Re-share Notion pages/databases with Workflowez integration |

### 9.2 Webhook Delivery Failures

**Symptoms:** Workflowez is not receiving events from a third-party system; webhook delivery log shows no incoming requests.

**Resolution steps:**
1. Verify the Workflowez webhook URL is correctly copied into the third-party system (no trailing spaces, correct protocol `https://`)
2. Verify the third-party system is actively sending events (check its outbound webhook log if available)
3. Confirm the Workflowez webhook endpoint is reachable from the internet (not behind a firewall without the third-party's IPs whitelisted)
4. Check if the webhook secret/signature verification is correctly configured
5. Send a test event from the third-party system and check if it appears in Workflowez webhook logs

**Workflowez outbound webhook failures (from Workflowez to customer systems):**
1. Check the webhook delivery log in Settings → Webhooks
2. Review the HTTP response code returned by the customer's endpoint
3. Common failures:
   - **408/504:** Customer endpoint too slow; increase timeout on customer side
   - **401/403:** Customer endpoint requires authentication that is not configured in the webhook settings
   - **SSL error:** Customer endpoint has an expired or self-signed certificate

### 9.3 Data Mapping Issues Between Integrations

**Symptom:** Data arrives in Workflowez from one system but does not correctly populate fields in the destination system.

**Resolution steps:**
1. Use the workflow debug mode to inspect the exact data structure at each step
2. Verify field names — API field names often differ from UI labels (e.g., `firstName` vs `first_name` vs `First Name`)
3. Check data types: ensure number fields are not receiving string values, and vice versa
4. Use the built-in transform functions (string, number, date) to convert data before mapping
5. If a field is required in the destination but sometimes empty in the source, add a conditional step or a default value

---

## 10. API Troubleshooting

### 10.1 Authentication Errors (401)

**Cause:** Invalid, expired, or missing API key.

**Resolution:**
1. Verify the `Authorization: Bearer <api_key>` header is present in every request
2. Check the API key has not expired or been revoked (Settings → API Keys)
3. Confirm the API key has the correct permission scopes for the endpoint being called
4. Regenerate the API key if compromised; update all systems using the old key

### 10.2 Rate Limit Errors (429)

**Cause:** Request rate exceeds the plan limit.

**Resolution:**
1. Inspect the response headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, `Retry-After`
2. Implement **exponential backoff** in the client: retry after `Retry-After` seconds, doubling on each subsequent 429
3. Distribute requests over time using a queue or batch processing
4. Review whether unnecessary API calls can be reduced (caching, webhooks instead of polling)
5. If the plan rate limit is genuinely insufficient for the use case, upgrade the plan or contact CS to discuss Enterprise limits

**Sample exponential backoff implementation (pseudocode):**
```
delay = 1 second
max_retries = 5
for attempt in 1..max_retries:
    response = make_api_call()
    if response.status == 429:
        wait(delay)
        delay = delay * 2
    else:
        break
```

### 10.3 Server Errors (5xx)

**Cause:** Workflowez server-side error, typically transient.

**Resolution:**
1. Check status.workflowez.com for active incidents
2. Retry the request with exponential backoff (5xx errors are generally transient)
3. If 5xx errors persist for > 5 minutes, escalate as P1 via #engineering-oncall
4. Collect the request ID from the response headers (`X-Request-ID`) — this is needed for Engineering to trace the specific error in logs

### 10.4 Unexpected Response Structure

**Cause:** API response does not match the documentation; customer code is failing to parse the response.

**Resolution:**
1. Verify the customer is calling the correct API version (check `/v1/` vs `/v2/` prefix)
2. Compare the actual response against the API documentation
3. Check if the field the customer expects is optional (may be absent if null/empty)
4. If the response genuinely differs from documentation, this is a bug — escalate to Engineering as P2 with the request/response example

### 10.5 Webhook Signature Validation Failure

**Cause:** Customer is unable to verify Workflowez webhook signatures.

**Resolution:**
1. Confirm the customer is using the webhook secret from Settings → Webhooks (not the API key)
2. Verify the HMAC-SHA256 implementation:
   - Signature is computed over the raw request body (not parsed JSON)
   - The `X-Workflowez-Signature` header contains the hex-encoded HMAC
   - Compare using a constant-time comparison function to prevent timing attacks
3. Provide a code sample in the customer's language from the Help Center

---

## 11. Performance & Reliability Issues

### 11.1 Slow Page Load / UI Lag

**Symptoms:** Dashboard or workflow builder takes > 5 seconds to load; interactions feel sluggish.

**Diagnostic steps:**
1. Check status.workflowez.com for performance incidents
2. Ask the customer to run a network speed test and share results
3. Check browser performance: open DevTools → Performance tab → record a page load
4. Ask if the issue is on all pages or specific ones (dashboard vs. workflow editor)
5. Check if the account has an unusually large number of workflows or execution history items

**Common resolutions:**

| Cause | Resolution |
|-------|-----------|
| Slow internet | Issue is client-side; recommend faster connection or reduce concurrent browser tabs |
| Large workflow (500+ nodes) | Suggest refactoring into sub-workflows |
| Excessive execution history | Offer to archive/purge old execution logs (with customer consent) |
| Browser memory leak | Close and reopen the browser; disable heavy extensions |
| Workflowez performance incident | Monitor status page; inform customer of ETA |

### 11.2 Workflow Execution Delays

**Symptom:** Workflows that should run immediately or on schedule are delayed by several minutes.

**Diagnostic steps:**
1. Check the execution queue depth (visible to Support Engineers in the admin panel)
2. Review if the account is approaching its monthly execution quota
3. Check if a large number of workflows were triggered simultaneously (load spike)
4. Compare scheduled execution time with actual start time in execution logs

**Resolutions:**
- If queue depth is high: Engineering to investigate capacity (P1 escalation if > 10 minutes delay)
- If quota near limit: notify customer; suggest upgrading plan or optimizing workflow frequency
- If large load spike: review workflow triggers to prevent unnecessary simultaneous executions

### 11.3 Scheduled Maintenance Windows

Workflowez performs planned maintenance during low-traffic windows:
- **Primary window:** Sundays, 02:00–06:00 ICT
- Customers are notified via status.workflowez.com and email **at least 48 hours in advance**
- Emergency maintenance may occur with shorter notice; customers are notified as soon as the decision is made

During maintenance:
- Workflow execution may be paused or delayed
- Scheduled triggers will execute after maintenance completes (no executions are lost)
- The UI may be unavailable during brief downtime periods

---

## 12. Billing & Subscription Issues

### 12.1 Payment Failure

**Symptom:** Customer receives payment failure notification; subscription downgraded or suspended.

**Resolution steps:**
1. Ask the customer to update their payment method in Settings → Billing
2. Confirm the card details (number, expiry, CVV, billing address) are current
3. If the card details are correct but payment still fails:
   - Ask the customer to contact their bank (international transaction blocks are common)
   - Offer to retry the charge after the customer confirms with their bank
4. If the account has been suspended due to non-payment, CS can grant a **7-day grace period** while the customer resolves the payment issue (requires CS Manager approval)

### 12.2 Unexpected Charge

**Symptom:** Customer is charged an amount they did not expect.

**Resolution steps:**
1. Pull up the customer's billing history in the admin panel
2. Identify the charge in question (date, amount, description)
3. Common causes:
   - **Plan upgrade mid-cycle:** Prorated charge for the upgraded plan
   - **Usage overage:** Customer exceeded their plan limits (seats, executions)
   - **Annual plan renewal:** Annual plans auto-renew; customer may have forgotten
   - **Add-on activated:** Customer or an admin activated a paid add-on
4. Explain the charge with specifics; provide the billing breakdown
5. If the charge was genuinely in error, issue a credit or refund per the Refund Policy (Section 10.5 of Product Policy)

### 12.3 Subscription Downgrade or Cancellation

**Symptom:** Customer wants to downgrade plan or cancel subscription.

**Process:**
1. Understand the reason — is it cost, missing features, or a competitor? Log in CRM.
2. If cost is the issue: explore whether a discount or different billing cycle (monthly → annual) would help
3. If feature-related: check if the requested feature is on the roadmap; offer a timeline if it is
4. If the customer still wishes to downgrade/cancel:
   - Downgrade takes effect at the end of the current billing period
   - Customer retains access to current plan features until the period ends
   - After downgrade, features above the new plan limit become read-only (not deleted)
5. Process the change in the billing system; send confirmation email

### 12.4 Refund Requests

Per the Refund Policy:
- Monthly plans: No refunds for partial months
- Annual plans: Full refund within 14 days of subscription start or renewal
- After 14 days on annual: no refund, but service remains active until term end

Exceptions may be made by CS Manager for:
- Billing errors on Workflowez's part
- Extended platform downtime exceeding SLA remedies
- First-time billing disputes from long-standing customers

All refunds require CS Manager approval and are processed within 5–10 business days.

---

## 13. Data & Privacy Requests

### 13.1 Data Export Request

**Customer right:** Customers can request a full export of their account data at any time.

**Process:**
1. Verify the requester's identity (must be Account Owner or Admin)
2. Initiate data export from the admin panel (Settings → Data → Export)
3. The export includes: workflows, execution history (last 90 days), account settings, user list, integration configurations
4. Export is packaged as a JSON/ZIP file and emailed to the Account Owner within **48 hours**
5. Log the request in the ticket system for compliance tracking

### 13.2 Data Deletion Request (Right to Erasure)

**Customer right:** Customers can request deletion of their account and associated personal data under Vietnamese Personal Data Protection Decree and GDPR.

**Process:**
1. Verify the requester's identity (Account Owner only)
2. Inform the customer of what will be deleted: account data, user profiles, workflow configurations, execution history, API keys
3. Inform the customer of what may be retained: anonymized usage statistics (no PII), financial records required by law (typically 5–7 years)
4. Initiate the deletion via the admin panel — this triggers a **30-day soft delete** period (data is not immediately purged; account is deactivated)
5. Customer has 30 days to cancel the deletion request
6. After 30 days, a hard delete is performed; PII is purged from all systems
7. Send a deletion confirmation to the requester
8. Log all steps in the ticket for compliance audit

**Important:** Deletion cannot be undone after the 30-day period. CS must clearly communicate this to the customer before proceeding.

### 13.3 Personal Data Correction Request

**Customer right:** Users can correct inaccurate personal data stored by Workflowez.

**Process:**
1. Users can update their own name, email, and profile information directly in Settings → Profile
2. For data that cannot be self-edited (historical records, admin-set fields), CS submits a correction request to Engineering
3. Corrections are completed within 10 business days
4. Customer receives confirmation when corrections are applied

### 13.4 Data Processing Inquiry

**Customer inquiry:** Customer wants to understand how Workflowez processes their data or those of their end-users.

**Response process:**
1. Direct the customer to the Privacy Policy at workflowez.com/privacy
2. For enterprise customers with specific DPA requirements, connect them with the CS Manager and Legal team
3. For questions about specific data flows (e.g., "where is my workflow data stored?"), provide the Data Processing Addendum (DPA) and relevant architecture documentation

---

## 14. Escalation Procedures

### 14.1 When to Escalate to Engineering

Escalate to Engineering (via #support-triage → #engineering-oncall) when:
- The issue cannot be reproduced in a test environment but is confirmed in production
- The issue appears to be a platform bug (not a configuration error)
- The issue is a P0 or P1
- Customer data is at risk (loss, corruption, or unauthorized access)
- The issue has been open for > 2× the SLA resolution time with no progress

### 14.2 Escalation Handoff Template

When escalating to Engineering, provide:

```
TICKET: [Ticket ID]
SEVERITY: [P0/P1/P2/P3]
CUSTOMER: [Customer name] | Plan: [Plan tier] | ARR: [Annual revenue if known]
IMPACT: [Number of users affected / workflows down / revenue at risk]
SUMMARY: [2-3 sentence description of the issue]
STEPS TO REPRODUCE:
  1.
  2.
  3.
EXPECTED: [What should happen]
ACTUAL: [What is happening]
FIRST SEEN: [Timestamp]
EVIDENCE: [Links to logs, screenshots, screen recordings, error messages]
WHAT CS HAS TRIED: [Actions taken by CS before escalation]
CUSTOMER EXPECTATION: [What has been promised to the customer in terms of timeline]
```

### 14.3 P0 Incident Escalation (Out-of-Hours)

For P0 incidents outside of business hours:
1. Page the on-call engineer via **PagerDuty** (do not rely on Slack alone)
2. If no response within 10 minutes, escalate to the Engineering Lead via phone
3. If no response within 20 minutes, escalate to the CTO
4. Update the customer status page within 15 minutes of declaring P0
5. Send customer notification email within 1 hour

### 14.4 Customer Escalation (Unhappy Customer / Executive Contact)

When a customer expresses significant dissatisfaction, threatens to churn, or contacts an executive directly:
1. Acknowledge immediately — "I understand this is not acceptable and I am personally taking ownership"
2. Move the ticket to P1 minimum regardless of technical severity
3. Notify the CS Manager within 1 hour
4. Provide a personal call with the CS Manager within 4 business hours
5. Prepare an incident summary for the CS Manager before the call: what happened, what we did, what we will do differently
6. Follow up in writing within 24 hours of the call with a summary and commitments

---

## 15. Self-Service Resources

### 15.1 Help Center (help.workflowez.com)

The Help Center is the first destination for customer self-service. It contains:

| Section | Contents |
|---------|---------|
| **Getting Started** | Account setup, first workflow, onboarding checklists |
| **Product Guides** | Step-by-step guides for all major features |
| **Integration Library** | Setup guides for each supported integration |
| **API Reference** | Full API documentation with code examples |
| **Troubleshooting** | Common issues and resolutions by category |
| **Release Notes** | Changelog for all minor and major releases |
| **FAQs** | Frequently asked questions by topic |
| **Video Library** | Tutorial videos for visual learners |

**Help Center maintenance:** CS team owns Help Center content. Articles are reviewed and updated:
- Within 48 hours of a new feature release
- Within 24 hours of a known issue resolution
- Quarterly audit for accuracy and completeness

### 15.2 Status Page (status.workflowez.com)

The status page provides real-time visibility into platform health:

| Component | What it Covers |
|-----------|---------------|
| API | API availability and latency |
| Workflow Execution Engine | Workflow run reliability and queue depth |
| AI Services | AI Advisor availability |
| Dashboard & UI | Web application availability |
| Integrations | Status of third-party integration connectors |
| Webhooks | Inbound and outbound webhook processing |

Customers can subscribe to status updates via email or RSS.

### 15.3 Community Forum (community.workflowez.com)

The community forum allows customers to:
- Ask questions and share solutions with other users
- Browse questions by tag (integration, API, workflow, AI, billing)
- Access Workflowez staff-verified answers (marked with a "Staff" badge)
- Vote on feature requests

CS team monitors the forum daily and responds to unanswered questions within 1 business day. Verified solutions are added to the Help Center.

### 15.4 In-Product Onboarding & Tooltips

For common support questions that arise during initial product usage, Workflowez provides:
- **Interactive onboarding checklist** for new accounts (first 14 days)
- **Contextual tooltips** on complex UI elements
- **Empty state guidance** — when a section is empty, the UI explains how to populate it
- **Inline error messages** — form validation errors appear inline with actionable resolution guidance

---

## 16. Known Limitations & Workarounds

### 16.1 Platform Limits

| Limit | Starter | Pro | Business | Enterprise | Workaround |
|-------|---------|-----|----------|------------|-----------|
| Max nodes per workflow | 100 | 250 | 500 | Unlimited | Split workflow into sub-workflows connected via API calls |
| Max workflow run duration | 5 min | 15 min | 30 min | 60 min | Break long processes into chained workflows |
| Webhook payload size | 1 MB | 5 MB | 10 MB | 25 MB | Paginate large payloads; use file references instead of inline data |
| Concurrent executions | 5 | 20 | 50 | Custom | Queue triggering using schedule staggering |
| Execution history retention | 7 days | 30 days | 90 days | 1 year | Export execution logs periodically via API for long-term storage |
| API rate limit | 60/min | 300/min | 1,000/min | Custom | Implement caching and request queuing |
| Users per workspace | 3 | 10 | 25 | Unlimited | Create multiple workspaces (note: data is not shared between workspaces) |

### 16.2 Known AI Limitations

| Limitation | Description | Workaround |
|------------|-------------|-----------|
| Training data cutoff | AI Advisor does not have knowledge of events after its training cutoff | Use connected knowledge base or web search features for recent information |
| Hallucination risk | AI may produce plausible-sounding but incorrect information | Always verify critical information from authoritative sources |
| Context window | Very long conversations may cause the AI to "forget" early context | Start a new conversation for new topics; provide key context at the start of each session |
| Language mixing | AI may occasionally switch languages in multilingual conversations | Explicitly instruct the AI to respond in a specific language at the start of the conversation |
| Code execution | AI Advisor cannot execute code directly — it can only generate code | Use the workflow builder's code node to execute AI-generated code |

### 16.3 Known Integration Limitations

| Integration | Limitation | Workaround |
|-------------|-----------|-----------|
| Google Sheets | Maximum 1,000 rows read per trigger | Use pagination or filter data before reading |
| Slack | Cannot send files > 20 MB via API | Use file upload URL flow instead of direct file attachment |
| HubSpot | Free HubSpot accounts cannot use certain API endpoints | Upgrade HubSpot plan or use available endpoints |
| Salesforce | Bulk API not available on Developer Edition | Use standard API with batch processing |
| Gmail | Maximum 100 emails read per execution | Implement pagination or use label filtering to reduce volume |

### 16.4 Browser Compatibility

Workflowez is officially supported on:
- **Google Chrome** (last 2 major versions) ✅
- **Mozilla Firefox** (last 2 major versions) ✅
- **Microsoft Edge** (Chromium-based, last 2 major versions) ✅
- **Safari** (last 2 major versions) ✅ (with known minor rendering differences)
- **Mobile browsers** — view-only mode; workflow editing not supported on mobile

**Not supported:**
- Internet Explorer (any version)
- Chrome versions older than 2 major releases
- Custom/enterprise browser configurations that disable JavaScript or cookies

If a customer reports UI issues, always ask for the browser name and version as the first diagnostic step.

---

*For internal support team questions, contact the **CS Lead** or post in **#support-triage** on Slack.*

*For customer inquiries, direct customers to **support@workflowez.com** or **help.workflowez.com**.*

*© 2026 Workflowez. All rights reserved. This document is confidential and for internal use only.*
