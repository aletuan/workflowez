# AI Advisor — Product Demo Plan

**Branch:** `feature/advisor-agent-integration`  
**Date:** February 2026  
**Scope:** First product demo — conversational AI advisor powered by n8n + RAG  
**Status:** Phase 1–4 done; Internal Q&A validated (real n8n API working)

**Legend:** `[x]` = hoàn thành · `[ ]` = chưa hoàn thành

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
| **Internal Q&A** | "I have questions about leave policy and compensation." | [x] **Target** — n8n integration working; RAG content depends on Qdrant |
| **Training new members** | "What is the onboarding process for new hires?" | [ ] Pending — mock |
| **Working policy documents** | "What is our remote work policy?" | [ ] Pending — mock |
| **Product support** | "I'm having a product issue, can you help?" | [ ] Pending — mock |

Topics are configurable via n8n workflow and Qdrant collections.

---

## 2. Backend (n8n Workflow)

### Endpoint

| Item | Value |
|------|--------|
| **Chat URL** | `https://andyle1.app.n8n.cloud/webhook/workflowez-rag-chat/chat` |
| **Instance** | andyle1.app.n8n.cloud |
| **Mode** | Hosted Chat (can use Embedded for custom frontend) |
| **Auth** | None |

### Workflow Structure

1. **01 - When chat message received** — Chat Trigger (webhook)
2. **02 - Get Conversation History**
3. **03 - Load Session Data**
4. **04 - Generate Query Embedding**
5. **05 - Vector Search (Qdrant)** — RAG retrieval
6. **06 - OpenAI Chat Model** — Completion
7. **08 - Save User Message**
8. **09 - Save Assistant Message**
9. **10 - Respond to Webhook** — Sends response back

### Components

- **n8n** — Workflow orchestrator
- **RAG (Qdrant)** — Vector store; `POST /rest/vectors/...` for search
- **OpenAI Chat Model** — Response generation

---

## 3. Frontend Tasks

### Phase 1: Foundation

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | [x] Add routing (react-router) | Done | `/`, `/products`, `/products/advisor`, `/products/social` |
| 2 | [x] Create ChatBox component | Done | MessageList, MessageBubble, ChatInput; i18n |
| 3 | [x] Define chat API client | Done | `chatApi.ts` in services/ |
| 4 | [x] Wire chat send/receive | Done | Mock via `useChat` hook |
| 5 | [x] Demo page layout | Done | Business values (4 items) + ChatBox; clickable prompts |
| 6 | [x] Wire "Xem demo" / "Watch Demo" | Done | Hero → `/products`; Catalog → `/products/advisor` |

### Phase 2: UX & Polish

| # | Task | Status | Notes |
|---|------|--------|-------|
| 5 | [x] Loading & error states | Done | Loading dots; error fallback in useChat (Phase 4) |
| 6 | [ ] Topic selector (optional) | Deferred | Preset prompts in value cards |
| 7 | [x] Mobile-responsive chat | Done | Responsive layout |
| 8 | [x] i18n for chat UI | Done | demo.*, catalog.* in en/vi |

### Phase 3: Integration (entry point)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 9 | [x] Demo entry point | Done | Catalog → Advisor card → `/products/advisor` |
| 10 | [x] Environment config | Done | `VITE_N8N_CHAT_URL` in Phase 4 |
| 11 | [ ] Session/conversation ID | Pending | If n8n supports multi-turn |

### Phase 4: N8N Integration (feature/advisor-agent-integration)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 4.1 | [x] Create `chatApi.ts` | Done | POST to n8n chat endpoint; handle response |
| 4.2 | [x] Env config | Done | `VITE_N8N_CHAT_URL`; fallback to mock if unset |
| 4.3 | [x] Update `useChat` | Done | Call real API when URL configured; fallback to mock |
| 4.4 | [x] Internal Q&A use case | Done | Real n8n API returns responses; supports multiple response formats |
| 4.5 | [x] Error handling | Done | Network error, timeout, non-2xx → show message + retry |
| 4.6 | [ ] Session ID (optional) | Pending | If n8n returns sessionId, persist for multi-turn |

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
│   └── useChat.ts                 # Chat state; real API when VITE_N8N_CHAT_URL set, else mock
├── services/
│   └── chatApi.ts                 # (Phase 4) n8n chat API client
└── config/
    └── chat.ts                    # (Phase 4) API URL, topic presets
```

---

## 5. API Contract

### Request (POST to Chat URL)

POST `https://andyle1.app.n8n.cloud/webhook/workflowez-rag-chat/chat`

n8n Chat Trigger expects the chat widget/client to POST to this URL. Request format follows n8n Chat convention (verify with n8n docs or network inspection):

```ts
// Typical format — verify via n8n Chat Trigger docs
{
  "message": string,        // User message
  "sessionId"?: string,     // For conversation continuity
  "metadata"?: object       // Optional contextual data
}
```

### Response

```ts
// From n8n Respond to Webhook / Chat node
{
  "output": string   // Assistant reply text (required)
  // Optional: "followUpPrompts": string[]
}
```

Ref: [n8n Chat Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/), [Backend Integration](https://n8nchatui.com/docs/configuration/backend-integration)

---

## 6. Integration Implementation Plan

### Step 1: [x] Create `chatApi.ts`
- `sendMessage(message: string, sessionId?: string): Promise<{ output: string }>`
- Base URL: `VITE_N8N_CHAT_URL` or default `https://andyle1.app.n8n.cloud/webhook/workflowez-rag-chat/chat`
- Parse response `{ output }` from n8n Respond to Webhook
- Handle fetch errors, timeout

### Step 2: [x] Create `config/chat.ts`
- `N8N_CHAT_URL` = env or default (see above)
- `useRealApi = !!N8N_CHAT_URL`

### Step 3: [x] Update `useChat.ts`
- If `useRealApi`: call `chatApi.sendMessage()` instead of mock
- On error: set error state, show fallback message (or retry prompt)
- Fallback to mock when URL not set (dev/demo without backend)

### Step 4: [x] Internal Q&A validation
- Real n8n API integration verified; chat returns AI responses
- RAG content quality depends on Qdrant indexed documents

---

## 7. Risks & Mitigations

| Risk | Mitigation |
|------|-------------|
| CORS | Set "Allowed Origin" in n8n Chat Trigger → add `https://www.workflowez.com`; fallback to mock |
| Rate limits | Throttle rapid sends; show user-friendly message |
| Long response time | Loading indicator already present; consider timeout |

---

## 8. Success Criteria

- [x] User can open chat demo from landing (CTA or route)
- [x] User can send a message and receive AI reply (mock)
- [x] Chat works on mobile and desktop
- [x] Loading and error states are clear
- [x] **Internal Q&A uses real n8n API** (Phase 4)
- [x] Fallback to mock when API unavailable (useRealApi when env set)

---

## 9. Next Steps

1. [ ] **n8n CORS** — Add `https://www.workflowez.com` and `http://localhost:5173` to Chat Trigger Allowed Origin
2. [x] **Implement Phase 4** — chatApi.ts, useChat integration, env config
3. [x] **Validate Internal Q&A** — Real API integration verified
4. [ ] **Index Internal Q&A docs** — Ensure Qdrant has leave policy, compensation, processes for RAG

---

*Document version: 1.4 — Reviewed Feb 2026; Phase 4 complete*
