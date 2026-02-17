# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
```

No test or lint scripts are configured.

## Architecture

This is a **single-page React + Vite + TypeScript landing page** for Workflowez (an AI workflow automation platform). It is a pure client-side SPA with no SSR.

### Stack
- **React 18 + TypeScript** — Component framework
- **Vite 6** — Build tool; path alias `@` → `./src`
- **Tailwind CSS v4** — Utility-first styling via `@tailwindcss/vite` (no PostCSS config needed)
- **Radix UI + shadcn/ui** — Accessible, pre-built UI primitives in `src/app/components/ui/`
- **motion/react (Framer Motion)** — Animations throughout
- **React Context** — Global state (language only, no Redux)

### Page Structure

`src/main.tsx` → `src/app/App.tsx` renders landing page sections in order:

```
Header → Hero → Features → Benefits → Testimonials → Pricing → CTA → Footer
```

Each section is a standalone component in `src/app/components/`. Shared primitives (`Section`, `PrimaryButton`, `SecondaryButton`) live in `src/app/components/shared/`. Nav items are defined in `src/config/navigation.ts`. Navigation uses in-page hash links (`#features`, `#pricing`, `#testimonials`, etc.).

### Internationalization

Translations live in `src/locales/vi.json` and `src/locales/en.json`. `LanguageContext` loads these and provides a typed `t` object. Add new keys to both locale files and extend `TranslationKeys` in `src/types/translations.ts` for type safety.

### Styling

- `src/styles/theme.css` — Design tokens (`--brand`, `--brand-light`, `--brand-dark`, `--section-radius`, `--blur-*`, `--accent-gradient-*`) and semantic colors
- `src/styles/fonts.css` — Font face definitions
- `src/styles/tailwind.css` — Tailwind v4 directives
- `src/styles/index.css` — Main CSS entry (imports the above)

Use design tokens (e.g. `var(--brand)`, `var(--brand-light)`) for brand colors. Prefer Tailwind utilities for layout and spacing; use custom properties when values are semantic or reusable across components.

### UI Components

- `src/app/components/ui/` — shadcn/ui primitives (MIT-licensed, see `ATTRIBUTIONS.md`)
- `src/app/components/shared/` — `Section`, `PrimaryButton`, `SecondaryButton` (support variants and optional `href`)
- `src/app/components/figma/ImageWithFallback.tsx` — image rendering with fallbacks

### UI Patterns

**Decorative glow blob** — used to add visual depth behind product demo cards or chat boxes:
```tsx
<div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-300 rounded-3xl rotate-12 blur-xl opacity-60 animate-pulse pointer-events-none" />
```
Place inside a `relative` container. Swap color as needed (`bg-yellow-300` in Hero, `bg-cyan-300` on Demo chat box). Requires `overflow-hidden` on the parent if the glow should be clipped, or leave without it to let it bleed outside.
