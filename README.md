# Workflowez

**AI workflow automation for teams that move fast.**

Workflowez empowers small and mid-size businesses to streamline operations, reduce costs, and deliver better customer experiences—without writing code. Build, deploy, and scale automation workflows powered by AI.

Live site: [workflowez.com](https://workflowez.com)

---

## Products

| Product | Status | Route |
|---------|--------|-------|
| **AI Advisor** | Available | `/products/advisor` |
| **Social Intelligent** | Coming Soon | `/products/social` |

### AI Advisor
Conversational AI assistant for customer support, sales, and internal knowledge base. Features a live chat demo powered by an n8n webhook backend.

### Social Intelligent
AI-powered social media monitoring and publishing. Includes dashboard, active listening, and analytics screens (carousel demo).

---

## Why Workflowez

- **Put customer value first** — Deliver tangible business outcomes through intelligent automation.
- **Built for SMBs** — Integrate with 500+ tools (Slack, Salesforce, HubSpot, Notion) in minutes.
- **No-code, high-impact** — Visual drag-and-drop builder with GPT-4, Claude, and other AI models.
- **Enterprise-grade trust** — SOC2 Type II certified. Data encrypted and secure.

---

## Pricing

- **Starter** — Free. For individuals and freelancers. 5 workflows, 100 runs/month.
- **Pro** — $49/mo. For small teams. 20 workflows, 5,000 runs/month, AI text generation, priority support.
- **Business** — $199/mo. For scaling teams. Unlimited workflows, 50,000 runs/month, advanced analytics, dedicated account manager.

**14-day free trial. No credit card required.**

---

## Running the project

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build
```

---

## Tech stack

- **React 18 + TypeScript** — Component framework
- **Vite 6** — Build tool; path alias `@` → `./src`
- **Tailwind CSS v4** — Utility-first styling (no PostCSS config needed)
- **Radix UI / shadcn/ui** — Accessible UI primitives
- **motion/react (Framer Motion)** — Used selectively (Social product carousel only)
- **React Router** — Client-side routing

Supports **English** and **Vietnamese** (en/vi) via `LanguageContext`.

---

## Deployment

Deployed to **GitHub Pages** from the `main` branch. `index.html` is copied to `404.html` at build time to support SPA routing (direct URL access and page refresh).

Chat integration uses an **n8n webhook** (configurable via `VITE_N8N_CHAT_URL` env var, falls back to a default URL when not set).

