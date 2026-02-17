# AI Advisor — Product Demo Plan

**Branch:** `feature/ai-advisor`  
**Date:** February 2026  
**Scope:** First product demo — conversational AI advisor powered by n8n + RAG  
**Status:** Phase 1 in progress (Foundation with mock)

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

| Topic | Example Questions |
|-------|-------------------|
| **Training new members** | "How do I onboard a new team member?", "What checklist should new hires complete?" |
| **Working policy documents** | "What is our remote work policy?", "Summarize the new leave policy" |
| **New product features** | "What's new in the latest release?", "How do I use the X feature?" |
| **Company knowledge** | FAQ-style Q&A based on indexed documents |

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
| 1 | Add routing (react-router) | Done | Routes `/` (LandingPage), `/demo` (DemoPage) |
| 2 | Create `ChatBox` component | Done | MessageList, MessageBubble, ChatInput; i18n |
| 3 | Define chat API client | Deferred | Use mock first; add real client when n8n ready |
| 4 | Wire chat send/receive | Done | Mock via `useChat` hook; simulates ~800ms delay |
| 5 | Demo page layout | Done | Business value section + ChatBox side-by-side |
| 6 | Wire "Xem demo" / "Watch Demo" | Done | Hero SecondaryButton `to="/demo"` |

### Phase 2: UX & Polish

| # | Task | Status | Notes |
|---|------|--------|-------|
| 5 | Loading & error states | Pending | Skeleton, retry, offline handling |
| 6 | Topic selector (optional) | Pending | Dropdown or preset prompts for topic context |
| 7 | Mobile-responsive chat | Pending | Full-screen or slide-up on small screens |
| 8 | i18n for chat UI | Pending | Labels, placeholders, errors in vi/en |

### Phase 3: Integration

| # | Task | Status | Notes |
|---|------|--------|-------|
| 9 | Demo entry point | Done | Hero "Watch Demo" / "Xem demo" → `/demo` |
| 10 | Environment config | Pending | `VITE_N8N_CHAT_URL` or similar |
| 11 | Session/conversation ID | Pending | If backend supports multi-turn with session |

---

## 4. File Structure (Current)

```
src/
├── app/
│   ├── App.tsx                    # Routes: /, /demo
│   ├── pages/
│   │   ├── LandingPage.tsx        # / - Main landing
│   │   └── DemoPage.tsx           # /demo - Business value + ChatBox
│   └── components/
│       └── chat/
│           ├── ChatBox.tsx        # Main chat container
│           ├── MessageList.tsx    # Scrollable messages
│           ├── MessageBubble.tsx  # Single message (user/assistant)
│           └── ChatInput.tsx      # Input + send button
├── hooks/
│   └── useChat.ts                 # Chat state, send, mock responses
├── services/
│   └── chatApi.ts                 # (Phase 2) n8n chat API client
└── config/
    └── chat.ts                    # (Phase 2) API URL, topic presets
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
  "topic"?: string        // optional topic hint
}

// Response
{
  "reply": string,
  "sessionId"?: string
}
```

Adapt to actual n8n workflow schema.

---

## 6. Dependencies

| Package | Purpose | Status |
|---------|---------|--------|
| `react-router` | Routing for `/demo` | Already in package.json |
| (optional) `@tanstack/react-query` | Chat message fetching/caching | Add if needed |
| (optional) WebSocket client | Real-time streaming replies | If n8n supports streaming |

---

## 7. Risks & Mitigations

| Risk | Mitigation |
|------|-------------|
| n8n API not yet documented | Start with mock; swap in real endpoint once ready |
| CORS | Ensure n8n or proxy allows origin; use env-specific URLs |
| Rate limits | Add throttling or queue on frontend; show user-friendly message |
| Long response time | Show loading indicator; consider streaming if available |

---

## 8. Success Criteria

- [ ] User can open chat demo from landing (CTA or route)
- [ ] User can send a message and receive AI reply
- [ ] Chat works on mobile and desktop
- [ ] Loading and error states are clear
- [ ] Demo is accessible (keyboard, focus, labels)

---

## 9. Demo Page Design (Phase 1)

- **Layout:** Two-column on desktop (values left, chat right); stacked on mobile
- **Business value section:** 3 value props (Instant answers, Onboarding & training, Policy awareness) — explains why AI Advisor matters
- **Chat box:** Mock responses; placeholder for n8n API in Phase 2
- **Entry:** Hero "Watch Demo" / "Xem demo" button navigates to `/demo`

## 10. Next Steps

1. **Phase 2 UX** — Loading/error states, topic selector, mobile polish
2. **Confirm n8n chat API** — Endpoint URL, request/response format, auth (if any)
3. **Integrate real API** — Replace mock in `useChat` with `chatApi.ts` client

---

*Document version: 1.1*
