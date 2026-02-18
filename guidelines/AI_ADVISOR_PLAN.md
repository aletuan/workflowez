# AI Advisor — Product Demo Plan

**Branch:** `feature/advisor-agent-integration`  
**Date:** February 2026  
**Scope:** First product demo — conversational AI advisor powered by n8n + RAG  
**Status:** Phase 1–3 done; Phase 4 N8N Integration in progress

---

## 0. Feature Summary

| Item | Detail |
|------|--------|
| **Feature** | AI Advisor chatbot — conversational demo of Workflowez AI workflow automation |
| **Goal** | Allow users to chat with an AI advisor about specified topics via a chat box in the landing/demo page |
| **Backend** | n8n workflow with RAG (Qdrant), OpenAI Chat Model — **already available** |
| **Frontend** | New chat UI component integrated into the website |

---

## 1. Use Cases (Topics)

The AI Advisor supports conversations around topics such as:

| Topic | Example Questions | Integration status |
|-------|-------------------|--------------------|
| **Internal Q&A** | "I have questions about leave policy and compensation." | **Target** — first use case for n8n integration |
| **Training new members** | "What is the onboarding process for new hires?" | Pending — mock |
| **Working policy documents** | "What is our remote work policy?" | Pending — mock |
| **Product support** | "I'm having a product issue, can you help?" | Pending — mock |

Topics are configurable via n8n workflow and Qdrant collections.

---

## 2. Backend (Existing)

- **n8n** — Workflow orchestrator; exposes chat endpoint
- **RAG (Qdrant)** — Vector store; retrieves relevant context from indexed documents
- **OpenAI Chat Model** — Generates responses

**Assumption:** Chat API is available (e.g. REST or WebSocket). Endpoint and payload format to be documented.

---

## 3. Frontend Tasks

### Phase 1: Foundation

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | Add routing (react-router) | Done | `/`, `/products`, `/products/advisor`, `/products/social` |
| 2 | Create ChatBox component | Done | MessageList, MessageBubble, ChatInput; i18n |
| 3 | Define chat API client | Pending | `chatApi.ts` — create in Phase 4 |
| 4 | Wire chat send/receive | Done | Mock via `useChat` hook |
| 5 | Demo page layout | Done | Business values (4 items) + ChatBox; clickable prompts |
| 6 | Wire "Xem demo" / "Watch Demo" | Done | Hero → `/products`; Catalog → `/products/advisor` |

### Phase 2: UX & Polish

| # | Task | Status | Notes |
|---|------|--------|-------|
| 5 | Loading & error states | Done | Loading dots; error fallback in useChat (Phase 4) |
| 6 | Topic selector (optional) | Deferred | Preset prompts in value cards |
| 7 | Mobile-responsive chat | Done | Responsive layout |
| 8 | i18n for chat UI | Done | demo.*, catalog.* in en/vi |

### Phase 3: Integration (entry point)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 9 | Demo entry point | Done | Catalog → Advisor card → `/products/advisor` |
| 10 | Environment config | Pending | `VITE_N8N_CHAT_URL` in Phase 4 |
| 11 | Session/conversation ID | Pending | If n8n supports multi-turn |

### Phase 4: N8N Integration (feature/advisor-agent-integration)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 4.1 | Create `chatApi.ts` | Pending | POST to n8n chat endpoint; handle response |
| 4.2 | Env config | Pending | `VITE_N8N_CHAT_URL`; fallback to mock if unset |
| 4.3 | Update `useChat` | Pending | Call real API when URL configured; fallback to mock |
| 4.4 | Internal Q&A use case | Pending | Validate with leave/compensation questions via n8n RAG |
| 4.5 | Error handling | Pending | Network error, timeout, non-2xx → show message + retry |
| 4.6 | Session ID (optional) | Pending | If n8n returns sessionId, persist for multi-turn |

---

## 4. File Structure (Current)

```
src/
├── app/
│   ├── App.tsx                    # Routes: /, /products, /products/advisor, /products/social
│   ├── pages/
│   │   ├── LandingPage.tsx        # /
│   │   ├── ProductCatalogPage.tsx # /products
│   │   ├── DemoPage.tsx           # /products/advisor — Advisor Agent
│   │   └── SocialAgentPage.tsx    # /products/social
│   └── components/
│       ├── chat/
│       │   ├── ChatBox.tsx
│       │   ├── MessageList.tsx
│       │   ├── MessageBubble.tsx
│       │   ├── ChatInput.tsx
│       │   └── AdvisorAvatar.tsx
│       └── catalog/
│           └── ProductCard.tsx
├── hooks/
│   └── useChat.ts                 # Chat state; mock today → real API in Phase 4
├── services/
│   └── chatApi.ts                 # (Phase 4) n8n chat API client
└── config/
    └── chat.ts                    # (Phase 4) API URL, topic presets
```

---

## 5. API Contract (To Confirm)

**Requirement:** Document the n8n chat endpoint from the backend team.

Example expected shape:

```ts
// Request
POST {N8N_CHAT_URL}/chat
{
  "message": string,
  "sessionId"?: string,   // if multi-turn
  "topic"?: string        // optional: "internal-qa" for Internal Q&A
}

// Response
{
  "reply": string,
  "sessionId"?: string
}
```

Adapt to actual n8n workflow schema.

---

## 6. Integration Implementation Plan

### Step 1: Create `chatApi.ts`
- `sendMessage(message: string, sessionId?: string, topic?: string): Promise<{ reply: string; sessionId?: string }>`
- Read `VITE_N8N_CHAT_URL` from `import.meta.env`
- Handle fetch errors, timeout

### Step 2: Create `config/chat.ts`
- `N8N_CHAT_URL = import.meta.env.VITE_N8N_CHAT_URL`
- `useRealApi = !!N8N_CHAT_URL`

### Step 3: Update `useChat.ts`
- If `useRealApi`: call `chatApi.sendMessage()` instead of mock
- On error: set error state, show fallback message (or retry prompt)
- Fallback to mock when URL not set (dev/demo without backend)

### Step 4: Internal Q&A validation
- Test with prompts: "I have questions about leave policy and compensation."
- Verify n8n RAG returns relevant context from indexed documents

---

## 7. Risks & Mitigations

| Risk | Mitigation |
|------|-------------|
| n8n API not yet documented | Confirm endpoint with backend; use mock until ready |
| CORS | n8n or proxy must allow `www.workflowez.com`; fallback to mock |
| Rate limits | Throttle rapid sends; show user-friendly message |
| Long response time | Loading indicator already present; consider timeout |

---

## 8. Success Criteria

- [x] User can open chat demo from landing (CTA or route)
- [x] User can send a message and receive AI reply (mock)
- [x] Chat works on mobile and desktop
- [x] Loading and error states are clear
- [ ] **Internal Q&A uses real n8n API** (Phase 4)
- [ ] Fallback to mock when API unavailable

---

## 9. Next Steps

1. **Confirm n8n chat API** — Endpoint URL, request/response format, auth (if any)
2. **Implement Phase 4** — chatApi.ts, useChat integration, env config
3. **Validate Internal Q&A** — Test with leave/compensation questions

---

*Document version: 1.2*
