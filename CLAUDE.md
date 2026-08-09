# Scheng Holdings — Project Guidelines

## About

Corporate website for **Scheng Holdings**, a holding company with ventures in aerospace (Orbital System), imports, technology, and atelier. Includes a dedicated landing page for **GuiaFin**, a personal finance iOS app.

- **Stack**: React + TanStack Start (SSR) + Vite + Tailwind CSS + Nitro
- **Hosting**: Vercel (auto-deploy from `main` branch)
- **Domain**: companyscheng.com / www.companyscheng.com
- **Repo**: github.com/Wanderson-Scheng/companyscheng

## Build & Run

```sh
npm install
npm run dev          # local dev server
npm run build        # production build (requires NITRO_PRESET=vercel on Vercel)
npm run typecheck    # TypeScript check
```

The Vite config uses `@lovable.dev/vite-tanstack-config` which defaults Nitro to Cloudflare. On Vercel, the env var `NITRO_PRESET=vercel` overrides this.

## Workflow — Issues & Pull Requests

All work must follow this flow:

1. **Create a GitHub Issue** before starting any task. Label it:
   - `bug` — broken behavior or visual defect
   - `enhancement` — improvement to existing functionality
   - `feature` — new functionality
2. **Create a branch** from `main` named `<type>/<short-description>` (e.g. `fix/favicon-icon`, `feat/guiafin-page`).
3. **Open a Pull Request** targeting `main`. The PR description must:
   - Reference the issue with `Closes #<number>` or `Fixes #<number>`
   - Include a summary of changes and a test plan
4. **Merge** the PR to deploy via Vercel auto-deploy.
5. **Never push directly to `main`** — always use PRs.

## Project Structure

```
src/
  routes/              # TanStack file-based routes
    __root.tsx          # Root layout (favicon, fonts, global head)
    index.tsx           # "/" redirects to /scheng
    scheng.tsx          # Scheng Holdings layout wrapper
    scheng.index.tsx    # Scheng Holdings home page
    guiafin.tsx         # GuiaFin landing page
  components/
    scheng/             # Scheng Holdings components
      sections.tsx      # Main Scheng page sections
      ventures.ts       # Venture & product definitions (logos, features)
      product-detail.tsx
    landing/            # GuiaFin landing page components
      hero.tsx, nav.tsx, footer.tsx, sections.tsx
    ui/                 # Shared UI primitives (shadcn)
  lib/
    i18n.ts             # Internationalization (PT, EN, ES)
  assets/               # Legacy Lovable asset.json files (DO NOT use — use public/ instead)
public/
  logos/                # Scheng Holdings & venture logos (transparent PNG)
  guiafin/              # GuiaFin app screenshots and logo
  favicon.png           # Scheng Holdings logo (used as tab icon)
```

## Key Conventions

- **Assets**: All images go in `public/` with clean filenames (no spaces). Never reference `src/assets/*.asset.json` — those are legacy Lovable CDN references that return 404 on Vercel.
- **Logos**: Use `/logos/<name>.png` for holding/venture logos and `/guiafin/<name>.png` for GuiaFin images.
- **i18n**: All user-facing text uses the `t()` function from `useI18n()`. Supported locales: `pt`, `en`, `es`.
- **Theming**: Scheng pages support dark/light theme toggle. The brand logo switches between gold (dark) and navy (light) variants.
- **Commit messages**: Concise, focused on "why". End with `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` when AI-assisted.
