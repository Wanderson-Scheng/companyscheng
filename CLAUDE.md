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
npm run lint         # Biome lint & format check
npm run lint:fix     # Auto-fix lint issues
npm run test         # Unit & integration tests (Vitest)
npm run test:coverage # Tests with coverage report
npm run test:e2e     # E2E tests (Playwright)
npm run knip         # Dead code detection
npm run quality      # Full quality gate (lint + typecheck + test + knip)
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
- **Commit messages**: Conventional Commits format enforced by Commitlint (e.g. `feat:`, `fix:`, `chore:`). End with `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` when AI-assisted.

## Quality & Observability

- **Linting/Formatting**: Biome (replaces ESLint + Prettier). Config in `biome.json`. UI components (`src/components/ui/`) and generated files are excluded.
- **Commit Hooks**: Husky runs Biome on staged files (pre-commit) and Commitlint on commit messages (commit-msg).
- **Dead Code**: Knip detects unused exports, dependencies, and files. Config in `knip.config.ts`.
- **Unit/Integration Tests**: Vitest with React Testing Library. Tests in `src/**/__tests__/`. Config in `vitest.config.ts`.
- **E2E Tests**: Playwright testing against Chromium and mobile viewport. Tests in `e2e/`. Config in `playwright.config.ts`.
- **Coverage**: Codecov integration via GitHub Actions CI. Coverage uploaded on every push/PR.
- **Observability**: Sentry for error tracking and performance monitoring. Set `VITE_SENTRY_DSN` env var to enable.
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`) runs lint, typecheck, unit tests, build, and E2E on every PR.
