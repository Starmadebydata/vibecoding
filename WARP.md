# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Overview
- Stack: Next.js 14 (App Router) + TypeScript + next-intl + Supabase + Tailwind CSS
- Package manager: npm (package-lock.json present)
- Node: >= 18 (per README)

Common commands
- Install: npm install
- Dev (Next.js): npm run dev
- Build: npm run build
- Start (production): npm run start
- Lint: npm run lint
- Type-check: npm run type-check
- Test: npm run test
- Test (watch): npm run test:watch
- Run single test: npm run test -- tests/contexts/theme.test.tsx

Environment
- Create .env.local with at least:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
- Missing these will throw at runtime (src/lib/supabase.ts).

Architecture (big picture)
- Routing and i18n
  - App Router with localized segment at app/[locale]/...
  - middleware.ts uses next-intl to detect browser language; defaultLocale=zh; matcher excludes api/_next/static assets
  - app/layout.tsx and app/page.tsx redirect “/” to “/zh”
  - Canonical routes live under /[locale]/..., e.g. /zh/tools, /en/tools
  - Translation messages are in /messages/{zh,en}.json
  - next-intl plugin configured in next.config.js via createNextIntlPlugin('./src/i18n.ts')
  - app/[locale]/layout.tsx wraps the tree with <NextIntlClientProvider locale={...} messages={...}>
  - src/hooks/useLocalization.ts wraps next-intl: provides t, switchLocale (path rewrite), and helpers
- State and providers
  - ThemeContext (src/contexts/ThemeContext.tsx) manages 'light'/'dark', persists in localStorage, toggles Tailwind 'dark' class
  - useSafeTheme gives a safe fallback on SSR
  - AuthContext (src/contexts/AuthContext.tsx) uses Supabase auth; enforces email verification and syncs vibecoding_users and vibecoding_profiles tables on first login
- Data layer
  - src/lib/supabase.ts creates a Supabase client using NEXT_PUBLIC_* vars; throws if missing
- UI composition
  - app/[locale]/page.tsx composes sections (Hero, Features, CodeEditor, ProjectsShowcase, Blog, Community, Footer) inside Layout
  - Navbar integrates theme toggle, language switch, search, and auth menu
- Styling & tooling
  - Tailwind (tailwind.config.js) scans app/, src/, components/; darkMode='class'; extended color palette and animations
  - ESLint configured via eslint.config.js extending next/core-web-vitals and @typescript-eslint
- Config & paths
  - next.config.js: trailingSlash=true; unoptimized images; next-intl plugin; exposes NEXT_PUBLIC_SUPABASE_*
  - tsconfig paths: @/* → src/*, plus @/components, @/lib, @/contexts

Testing
- Vitest configured (jsdom). Setup file: test/setup.ts adds @testing-library/jest-dom.
- Run tests: npm run test
- Watch mode: npm run test:watch
- Run a single file: npm run test -- tests/contexts/theme.test.tsx

Deployment notes
- Next.js defaults apply (Vercel-ready). Ensure NEXT_PUBLIC_SUPABASE_* are set in the hosting environment
- Images are marked unoptimized in next.config.js and allow domain 'rstzutpjqpuupjdaehsj.supabase.co'

Repository notes
- README.md has been updated to reflect Next.js App Router (removed Vite/react-router/preview references)
- Product/design specifications live under .kiro/specs (multilingual support, Vercel deployment, monetization redesign) for additional context

