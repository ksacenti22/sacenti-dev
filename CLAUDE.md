# sacenti.dev — Claude Context

## What this is
Keith Sacenti's personal website. Home base for his resume, blog, and personal brand.
Live at **https://sacenti.dev** | GitHub: **https://github.com/ksacenti22/sacenti-dev**

## Stack
Next.js 16 (App Router, Turbopack) · React 18 · TypeScript 5 · Tailwind CSS 3 · ESLint 9 (flat config) · Upstash Redis · Vercel hosting

## Key conventions
- **Blog posts** are `.md` files in `posts/` with frontmatter: `title`, `date`, `excerpt`, `tags[]`
- **Tags** are free-form — new tags auto-appear as filter buttons on `/blog` with no code changes
- **Custom color palette** — royal blue defined as `royal-50` through `royal-900` in `tailwind.config.ts`
- **Scroll animations** — add `reveal` or `reveal-stagger` class to any element; `ScrollReveal.tsx` handles the rest
- **Publishing** = `git add` → `git commit` → `git push` — Vercel auto-deploys in ~30s
- **Linting** = `npm run lint` (runs `eslint .` against `eslint.config.mjs`). `next lint` no longer exists in Next 16

## Resume data shape
- Each company in `experience` holds a `roles` array, newest first: `{ title, start, end }`. `end: null` means current
- Dates are `"YYYY-MM"`, or `"YYYY"` for older roles where only the year is known
- `lib/tenure.ts` formats the period and the duration. Durations are **inclusive** (Jun 2023 – Jul 2026 is 3 yrs 2 mos), which is how LinkedIn counts — deliberately, so the two never disagree by a month. Year-only dates get no duration
- A company with more than one role renders an inner promotion timeline and a total-tenure line; a single-role company renders exactly as before

## Next 16 gotchas
- Route `params` (and `searchParams`) are a **Promise** — always `const { slug } = await params`. Reading `params.slug` directly returns `undefined`, and in `app/blog/[slug]/page.tsx` that silently turned every post into a 404 from the April upgrade until September 2026
- `react-hooks/set-state-in-effect` is on. Reading `localStorage` after mount (as `VibeCheck.tsx` does) is the right pattern for SSR, so that block carries a scoped disable with the reason

## Pages
| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero + full resume. All resume data is hardcoded as arrays at top of file. Rebuilt daily (`revalidate`) so computed tenure stays current |
| `/blog` | `app/blog/page.tsx` + `BlogClient.tsx` | Server + client split for tag filtering |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Dynamic route, reads from `posts/` |
| `/pineapple` | `app/pineapple/page.tsx` | Easter egg. Linked subtly in footer only |
| `/api/vibe` | `app/api/vibe/route.ts` | GET returns stats; POST records a vibe and returns the visitor number |

## Components
- `Nav.tsx` — sticky, transparent → frosted glass on scroll, mobile hamburger
- `Footer.tsx` — includes pineapple easter egg link with inline image
- `BlogCard.tsx` — reusable card for blog listing
- `ScrollReveal.tsx` — IntersectionObserver, client component mounted in root layout
- `VibeCheck.tsx` — 0–100 slider on the homepage. One vote per month (enforced client-side via `localStorage`); visitor number is stored once under `vibeVisitorNumber` so it stays the same on return visits

## Vibe Check data model (Upstash Redis)
- `visitor:count` — running total, incremented on each POST; the returned value is the visitor's number
- `vibe:YYYY-MM:sum` and `vibe:YYYY-MM:count` — monthly running total and vote count, averaged for display
- Env vars come from Vercel: `KV_REST_API_URL`, `KV_REST_API_TOKEN` (in `.env.local`, gitignored)
- Vote dedup is `localStorage` only — there is no server-side guard, so the numbers are directional, not audited

## Analytics
`@vercel/analytics` and `@vercel/speed-insights` are both mounted in `app/layout.tsx`.

## Timeline layout note
The Experience section's vertical rail is an absolutely positioned `span` at `left-[7px]` with `w-0.5`,
and the dots are `w-4` at `-left-8` inside a `pl-8` list. Both centers land on x=8px. The rail lives
outside the `space-y-12` wrapper on purpose — as a child it would count as a sibling and push a
3rem margin onto the first card.

## Known issues to fix
1. **`https://keith.digital` doesn't forward** — Squarespace forwarding lacks SSL. Fix: add `keith.digital` to Vercel as a redirect domain (same A/CNAME records as sacenti.dev)

## Suggested next steps
- Fix keith.digital HTTPS (see above)
- Move Inter to `next/font/google` — self-hosts the font (no request to Google on each visit, no render-blocking CSS). The wiring already expects it: Tailwind reads `var(--font-inter)`; set `variable: "--font-inter"`, put `inter.variable` on `<html>`, then drop the `<link>` tags in `layout.tsx` and the `--font-inter` line in `globals.css`. Clears the one remaining lint warning
- Add an Open Graph preview image (`openGraph` is set in `layout.tsx` but has no `images`)
- Contact section or email link
- Consider server-side vote dedup for Vibe Check if the numbers ever need to be trustworthy
