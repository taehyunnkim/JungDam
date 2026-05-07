# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start      # dev server on port 3419
npm run build  # production build
npm test       # Jest + React Testing Library
```

No dedicated lint script — ESLint runs via `react-scripts` internals during build.

Node 22 LTS required (`.nvmrc` present — `nvm use` works). sass (dart-sass) used, not node-sass.

## Architecture

React 17 SPA built with Create React App. Deployed via Netlify (`public/_redirects` handles client-side routing).

**Stack:** React Router v5 · SCSS/sass (dart-sass) · react-helmet-async (per-route SEO) · react-burger-menu (mobile nav) · react-particles (landing background)

**Routing** (`src/App.js`):
- `/` — Landing page with particle animation
- `/menu` — Menu browse (12 categories)
- `/gallery` — Photo gallery
- `*` — Redirect to `/`

**Data layer** — Menu content lives in `src/assets/*.json` (premium, special, full, silsok, japanese, event, lunch, western, korean, kid, snacks, hike). Each item has `name`, `price` (array), `img`, optional `type`. Changing menu content = edit JSON, not components.

**Components** (`src/components/`):
- `layout/` — Nav, Landing, Menu, Gallery, Footer page-level components
- `patterns/` — Reusable decorative components (DottedSquare)
- Top-level button variants: Button, SecondaryButton, TeleButton

**Styles** (`src/scss/`) — Per-feature SCSS files: App, Bricks, Gallery, Menu, Patterns. Compiled via sass (dart-sass). Note: sass-loader uses legacy JS API — deprecation warnings in dev are expected and harmless until CRA is replaced.

**Images** (`src/images/`) — Menu item photos in `items/`, edited versions in `items/Edits/`. Gallery images in `images/gallery/` — auto-imported via `require.context`, sorted newest-first. To add a photo: drop file in that folder, no code changes needed.

Google Analytics (G-J3XNJ4LEG6) loaded via `public/index.html`.
