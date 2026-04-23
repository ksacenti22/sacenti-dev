# sacenti.dev — Claude Context

## What this is
Keith Sacenti's personal website. Home base for his resume, blog, and personal brand.
Live at **https://sacenti.dev** | GitHub: **https://github.com/ksacenti22/sacenti-dev**

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Vercel hosting

## Key conventions
- **Blog posts** are `.md` files in `posts/` with frontmatter: `title`, `date`, `excerpt`, `tags[]`
- **Tags** are free-form — new tags auto-appear as filter buttons on `/blog` with no code changes
- **Custom color palette** — royal blue defined as `royal-50` through `royal-900` in `tailwind.config.ts`
- **Scroll animations** — add `reveal` or `reveal-stagger` class to any element; `ScrollReveal.tsx` handles the rest
- **Publishing** = `git add` → `git commit` → `git push` — Vercel auto-deploys in ~30s

## Pages
| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero + full resume. All resume data is hardcoded as arrays at top of file |
| `/blog` | `app/blog/page.tsx` + `BlogClient.tsx` | Server + client split for tag filtering |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Dynamic route, reads from `posts/` |
| `/pineapple` | `app/pineapple/page.tsx` | Easter egg. Linked subtly in footer only |

## Components
- `Nav.tsx` — sticky, transparent → frosted glass on scroll, mobile hamburger
- `Footer.tsx` — includes pineapple easter egg link with inline image
- `BlogCard.tsx` — reusable card for blog listing
- `ScrollReveal.tsx` — IntersectionObserver, client component mounted in root layout

## Social / links
- LinkedIn: https://www.linkedin.com/in/keithsacenti/
- GitHub: https://github.com/ksacenti22
- Resume PDF: `public/resume.pdf` (static file, replace manually to update)

## Known issues to fix
1. **`https://keith.digital` doesn't forward** — Squarespace forwarding lacks SSL. Fix: add `keith.digital` to Vercel as a redirect domain (same A/CNAME records as sacenti.dev)
2. **Next.js 14.2.3 has a security vulnerability** — run `npm install next@latest` to upgrade

## Suggested next steps
- Fix keith.digital HTTPS (see above)
- Add Vercel Analytics (one line in `layout.tsx`)
- Upgrade Next.js
- Add Open Graph social preview image
- Contact section or email link
