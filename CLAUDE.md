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

Each section is a standalone component in `src/app/components/`. Navigation uses in-page hash links (`#features`, `#benefits`, etc.).

### Internationalization

All user-facing text lives in `src/app/context/LanguageContext.tsx`. The context provides a `t(key)` function and a language toggle (English / Vietnamese). When adding new content, add translation keys to both `en` and `vi` objects in that file.

### Styling

- `src/styles/theme.css` — CSS custom properties for semantic colors (uses `oklch` format)
- `src/styles/fonts.css` — Font face definitions
- `src/styles/tailwind.css` — Tailwind v4 directives
- `src/styles/index.css` — Main CSS entry (imports the above)

Design tokens in `theme.css` are used alongside Tailwind utilities. Prefer Tailwind classes; use CSS custom properties only when a value isn't expressible as a Tailwind class.

### UI Components

`src/app/components/ui/` contains shadcn/ui components (MIT-licensed, credited in `ATTRIBUTIONS.md`). These are local copies — edit them directly rather than re-generating. `src/app/components/figma/ImageWithFallback.tsx` handles image rendering with graceful fallbacks.
