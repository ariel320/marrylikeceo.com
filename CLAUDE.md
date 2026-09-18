# Marry Like a CEO — Website Project

## What this is

Landing page for Marry Like a CEO — a premium coaching brand
that applies business frameworks to relationship strategy
for ambitious women seeking marriage.

Operators: Sagie (strategic operator, builds the site) and
Ariel (brand voice, content, coaching, client-facing).

## Stack

- Next.js 16 App Router + React 19 + TypeScript strict
- Tailwind CSS v4
- `motion` (Framer Motion) — animations
- Zod — validation
- `@notionhq/client` — email capture storage
- `react-hook-form` + `@hookform/resolvers` — form state
- `clsx` + `tailwind-merge` — `cn()` helper
- Vercel + GitHub Actions CI

## Code conventions

- Arrow function components with named exports
- `"use client"` only where hooks are actually needed
- `readonly` on all prop types
- Import order: react → next → external → internal → types
- Use `cn()` from `lib/utils.ts` for all classname merging
- All copy lives in `constants/copy.ts` — never hardcoded in components
- Zod schemas in `lib/schemas.ts` — shared between client and server
- Env validation via `env/server.ts` — Zod parsed at startup

## Design system

Colors (CSS custom properties):
- `--crimson: #C1272D` — primary CTA, brand accent
- `--crimson-hover: #A01F25` — button hover
- `--gold: #B8975A` — secondary accent, tagline
- `--bg-dark: #13151F` — primary dark sections
- `--bg-elevated: #1E2030` — cards on dark bg
- `--bg-footer: #0D0F17` — footer
- `--text-light: #F5F3EE` — primary text on dark
- `--text-secondary: #9A978F` — muted text
- `--divider-dark: #2C2E3E` — dark mode borders
- `--bg-white: #FFFFFF` — light sections
- `--bg-ivory: #F8F6F2` — light surface sections
- `--text-dark: #1A1C2E` — text on light bg
- `--divider-light: #E2DDD6` — light mode borders
- `--purple: #52377D` — use sparingly, max one accent per section

Typography:
- Display/headings: Cormorant Garamond (300, 400, italic)
- Body/UI: DM Sans (300, 400, 500)
- Eyebrow/labels: DM Sans 500, uppercase, tracking 0.2em
- Never use script, handwritten, or rounded fonts

Buttons:
- Primary: crimson bg, white text, 2px radius, hover lift + shadow
- Secondary: gold outline, gold text, hover fills
- Ghost: gold text link, underline on hover

## Brand voice — what every piece of copy must follow

Warm but direct. Experienced, not preachy.
Inspirational through results, not quotes.
Israeli-rooted, entrepreneurially wired, deeply human.

Write like this:
- "You ran due diligence on your last hire. Why not your next relationship?"
- "Your standards aren't too high. Your strategy is too vague."
- "Here's what you do this week. Exact steps. No vague advice."

Never write like this:
- "You deserve love! Stop settling!"
- "Trust the process. Everything happens for a reason."
- "Just be yourself and the right person will find you."

Rules:
- Lead with insight, follow with emotion — never reverse
- Name the system explicitly — steps, frameworks, names
- Use Ariel's story as evidence, not martyrdom
- The reader is capable and strategic — never broken or desperate
- Never frame men as adversaries

Voice test: Would Ariel actually say this to a friend she respects?

## What this project never does

- Messaging that sounds generic, masculine, or corporate
- Content that talks AT women instead of WITH them
- Scaling before core product is solid
- Systems built for appearance, not actual use

## Data flow

Single path for all email capture:

```
EmailCapture component (source: "hero" | "book" | "final")
→ react-hook-form + Zod (client validation)
→ POST /api/subscribe
→ withValidation (rate limit 5/10min + honeypot + server Zod)
→ notion.pages.create() → Notion Subscribers DB
→ 200 success
```

## Env vars

Required: NOTION_TOKEN, NOTION_SUBSCRIBERS_DB_ID, ALLOWED_ORIGINS, NODE_ENV
Optional: RESEND_API_KEY, NEXT_PUBLIC_SENTRY_DSN

## CI/CD

5 checks: preflight, lint, typecheck, unit, e2e-preview.
Vercel preview per branch. Branch protection on main.
