# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
```

No test or lint scripts are configured.

## Architecture

This is a **multi-page React + Vite + TypeScript website** for Workflowez (an AI workflow automation platform). It is a pure client-side SPA with client-side routing via React Router, deployed on GitHub Pages.

### Structure
- `src/app/components/layout/` — Header, Footer
- `src/app/components/landing/` — Hero, Features, Benefits, Testimonials, Pricing, CTA
- `src/app/components/shared/` — Section, PrimaryButton, SecondaryButton
- Pages are lazy-loaded via `React.lazy`; vendor chunks (react, router, radix) split in build

### Stack
- **React 18 + TypeScript** — Component framework
- **Vite 6** — Build tool; path alias `@` → `./src`
- **Tailwind CSS v4** — Utility-first styling via `@tailwindcss/vite` (no PostCSS config needed)
- **Radix UI + shadcn/ui** — Accessible, pre-built UI primitives in `src/app/components/ui/`
- **motion/react (Framer Motion)** — Used selectively in `SocialAgentPage` (carousel transitions); removed from all other pages
- **React Context** — Global state (language only, no Redux)

### Routing

`src/main.tsx` → `src/app/App.tsx` defines client-side routes:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `LandingPage` | Main marketing landing page |
| `/products` | `ProductCatalogPage` | Product catalog grid |
| `/products/advisor` | `DemoPage` | AI Advisor live demo with chat |
| `/products/social` | `SocialAgentPage` | Social Intelligent product detail |
| `/demo` | → `/products/advisor` | Legacy redirect |

**SPA on GitHub Pages**: `index.html` is copied to `404.html` at build time so direct URL access and refresh work correctly.

### Landing Page Structure

`LandingPage.tsx` renders sections in this order:

```
Header → Hero → Testimonials → Features → Benefits → Pricing → CTA → Footer
```

Each section is a standalone component in `src/app/components/`. Shared primitives (`Section`, `PrimaryButton`, `SecondaryButton`) live in `src/app/components/shared/`.

### Navigation

- Nav items defined in `src/config/navigation.ts`
- Hash links use `/#features` prefix (not `#features`) so they work from any page, not just the home page
- Example: `{ label: "Features", href: "/#features" }`

### Internationalization

Translations live in `src/locales/vi.json` and `src/locales/en.json`. `LanguageContext` loads these and provides a typed `t` object. Add new keys to both locale files and extend `TranslationKeys` in `src/types/translations.ts` for type safety.

**Important**: When adding a new translation key that is used as an initial value in `useState`, also add a `useEffect` to sync state when language changes. See `useChat.ts` welcome message handling as an example.

### Styling

- `src/styles/theme.css` — Design tokens (`--brand`, `--brand-light`, `--brand-dark`, `--section-radius`, `--blur-*`, `--accent-gradient-*`) and semantic colors
- `src/styles/fonts.css` — Placeholder; no custom fonts (see Avoid / Known Issues)
- `src/styles/tailwind.css` — Tailwind v4 directives
- `src/styles/index.css` — Main CSS entry (imports the above)

Use design tokens (e.g. `var(--brand)`, `var(--brand-light)`) for brand colors. Prefer Tailwind utilities for layout and spacing; use custom properties when values are semantic or reusable across components.

**Animation policy**: Animations and transitions are intentionally minimal. Do not add `animate-pulse`, `transition-all`, `whileInView`, or Framer Motion to landing page components. `SocialAgentPage` is the exception — it uses `AnimatePresence` for the image carousel.

### Config Files

- `src/config/products.ts` — `PRODUCTS` array; single source of truth for product catalog (slug, route, icon, color, available status)
- `src/config/chat.ts` — Chat API config; `CHAT_API_URL` falls back to a hardcoded n8n webhook URL if `VITE_N8N_CHAT_URL` env var is not set; `useRealApi` is always `true`
- `src/config/navigation.ts` — Nav items array used by Header

### Hooks

- `src/hooks/useChat.ts` — Chat state management; handles messages, loading, mock vs real API
- `src/hooks/useReducedMotion.ts` — Returns `true` if user prefers reduced motion (`prefers-reduced-motion: reduce`)

### UI Components

- `src/app/components/ui/` — shadcn/ui primitives (MIT-licensed, see `ATTRIBUTIONS.md`)
- `src/app/components/shared/` — `Section`, `PrimaryButton`, `SecondaryButton` (support variants and optional `href`)
- `src/app/components/catalog/ProductCard.tsx` — Card used in ProductCatalogPage; color-themed via `COLOR_MAP`
- `src/app/components/chat/MessageList.tsx` — Chat message list with quick prompts
- `src/app/components/chat/ChatInput.tsx` — Chat input form
- `src/app/components/chat/MessageBubble.tsx` — Individual message bubble
- `src/app/components/shared/ImageWithFallback.tsx` — Image rendering with fallbacks

### Public Assets

- `public/images/team-office.jpg` — Benefits section photo
- `public/images/avatar-pt.jpg`, `avatar-lh.jpg`, `avatar-nt.jpg` — Testimonial avatars
- `public/images/social-dashboard.png`, `social-listening.png`, `social-analytics.png` — Social product carousel screenshots

### UI Patterns

**Decorative glow blob** — used to add visual depth behind product demo cards or chat boxes:
```tsx
<div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-300 rounded-3xl rotate-12 blur-xl opacity-60 pointer-events-none" />
```
Place inside a `relative` container. Swap color as needed. Do **not** add `animate-pulse` — per animation policy above.

**Container alignment**: Use `container mx-auto px-4 md:px-6` for all page-level containers (not `max-w-7xl`) so Header, content, and Footer align consistently at all screen sizes.

### Avoid / Known Issues

- **Package manager**: Use **npm only** — do not use pnpm, yarn, or other package managers. pnpm's strict symlinking caused Vite to pre-bundle `react-dom@19` instead of `react-dom@18`, producing a blank screen with `Cannot read properties of undefined (reading 'S')`. The `overrides` field in `package.json` enforces React 18 across the entire dependency tree.
- **React version mismatch**: This project uses **React 18**. Some dependencies (Radix, react-router v7, react-markdown) support both React 18 and 19. If you see a blank screen with errors in `react-dom_client.js`, check for React version conflicts: `node -e "console.log(require('./node_modules/react-dom/package.json').version)"`. Both `react` and `react-dom` must be `18.3.1`.
- **Stale Vite dev servers**: Before starting `npm run dev`, kill any existing Vite processes: `lsof -ti:5173 | xargs kill 2>/dev/null`. Stale servers serve cached pre-bundled deps (`node_modules/.vite/deps/`) even after `npm install` fixes the underlying issue. If the Vite cache is suspect, delete `node_modules/.vite` and restart.
- **Typography**: Do not add custom display/body fonts (e.g. Syne, DM Sans) to `theme.css` or `fonts.css`. Custom fonts caused broken rendering on desktop (especially `/products`). Use system fonts only (ui-sans-serif, system-ui via Tailwind default).
- **Footer links**: Do not add `min-h-[44px]` or touch-target padding to footer links. Keep footer links as plain `hover:text-[var(--brand)]` — touch-target changes were reverted due to spacing concerns.
- **Section spacing**: Page-level sections (ProductCatalogPage, DemoPage, SocialAgentPage) use `py-10 md:py-16` and `mb-10 md:mb-12`. Keep this convention when adding or modifying similar pages.
