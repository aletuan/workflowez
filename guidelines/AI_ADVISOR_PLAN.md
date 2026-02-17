# AI Advisor — Product Demo Plan

**Branch:** `feature/ai-advisor`  
**Date:** February 2026  
**Scope:** First product demo — conversational AI advisor powered by n8n + RAG  
**Status:** Planning

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
| 1 | Add routing (react-router) | Pending | Route `/demo` or `/advisor` for the chat demo |
| 2 | Create `ChatBox` component | Pending | Message list + input; basic styling |
| 3 | Define chat API client | Pending | `fetch` or `axios`; env var for n8n endpoint |
| 4 | Wire chat send/receive | Pending | POST user message; display assistant reply |

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
| 9 | Demo entry point | Pending | CTA "Try AI Advisor" → `/demo` or modal |
| 10 | Environment config | Pending | `VITE_N8N_CHAT_URL` or similar |
| 11 | Session/conversation ID | Pending | If backend supports multi-turn with session |

---

## 4. Suggested File Structure

```
src/
├── app/
│   └── routes/                    # If using react-router
│       └── DemoPage.tsx           # /demo - Chat demo page
├── components/
│   └── chat/
│       ├── ChatBox.tsx            # Main chat container
│       ├── MessageList.tsx        # Scrollable messages
│       ├── MessageBubble.tsx      # Single message (user/assistant)
│       └── ChatInput.tsx         # Input + send button
├── services/
│   └── chatApi.ts                 # n8n chat API client
├── hooks/
│   └── useChat.ts                 # Chat state, send, history
└── config/
    └── chat.ts                    # API URL, topic presets
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

## 9. Next Steps

1. **Confirm n8n chat API** — Endpoint URL, request/response format, auth (if any)
2. **Add react-router** — Set up `/demo` route
3. **Build minimal ChatBox** — Input + send + display reply
4. **Integrate real API** — Replace mock with n8n endpoint
5. **Wire CTA** — "Try AI Advisor" links to `/demo`

---

*Document version: 1.0*
