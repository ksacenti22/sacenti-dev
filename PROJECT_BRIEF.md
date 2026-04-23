# sacenti.dev — Project Brief

**Last updated:** March 31, 2026
**Live URL:** https://sacenti.dev
**GitHub:** https://github.com/ksacenti22/sacenti-dev
**Hosting:** Vercel (auto-deploys on every push to `main`)

---

## What This App Does

sacenti.dev is Keith Sacenti's personal home base on the web. It serves three primary purposes:

1. **Digital resume** — A fully built, designed resume page that lives at the root URL (`/`). Visitors can scroll through work history, strengths, education, volunteering, awards, and skills — or download a PDF version.
2. **Blog** — A markdown-powered blog at `/blog` where Keith publishes personal and professional writing. Posts are filtered by tag (e.g., Personal, Professional, Cloud Security).
3. **Easter egg** — A hidden page at `/pineapple` explaining the significance of the pineapple favicon, accessible only via a subtle link in the footer.

The site is designed to be Keith's long-term digital presence, built to grow with new pages and features over time.

---

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Server-side rendering, static generation, file-based routing, and Vercel-native deployment |
| Language | TypeScript | Type safety as the codebase grows |
| Styling | Tailwind CSS | Utility-first, fast to iterate, easy to maintain |
| Blog content | Markdown files + gray-matter | No CMS needed; posts are version-controlled alongside code |
| Markdown rendering | remark + remark-html | Converts `.md` files to HTML for post pages |
| Fonts | Inter (Google Fonts) | Clean, modern, widely readable |
| Deployment | Vercel | Zero-config Next.js hosting with automatic SSL and preview deployments |
| DNS / Domain | Squarespace (registrar) + Vercel (DNS target) | sacenti.dev purchased via Squarespace; A and CNAME records point to Vercel |

---

## Project Structure

```
sacenti-dev/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout: Nav, Footer, ScrollReveal, metadata, favicon
│   ├── globals.css             # Global styles, Tailwind imports, scroll-reveal animations
│   ├── page.tsx                # Home page: hero, bio, full resume sections
│   ├── blog/
│   │   ├── page.tsx            # Blog listing page (server component)
│   │   ├── BlogClient.tsx      # Client component: tag filter UI and post grid
│   │   └── [slug]/
│   │       └── page.tsx        # Individual blog post page (dynamic route)
│   └── pineapple/
│       └── page.tsx            # Easter egg page: pineapple favicon story
├── components/
│   ├── Nav.tsx                 # Sticky nav bar (transparent → frosted glass on scroll)
│   ├── Footer.tsx              # Footer with nav links + pineapple easter egg link
│   ├── BlogCard.tsx            # Reusable card component for blog listing
│   └── ScrollReveal.tsx        # Client component: IntersectionObserver for scroll animations
├── lib/
│   └── posts.ts                # Utility functions: read/parse markdown files, extract metadata
├── posts/                      # All blog posts as .md files
│   ├── the-case-for-iteration.md
│   ├── fedramp-what-pms-need-to-know.md
│   └── hello-world-the-birth-of-this-page.md
├── public/                     # Static assets served at root URL
│   ├── headshot.jpg            # Profile photo (cropped to upper torso, square)
│   ├── pineapple.PNG           # Pineapple favicon + used inline in footer link
│   ├── pineapple-spire.jpg     # St. Paul's Cathedral image (pineapple page)
│   ├── richard-trevett-house.jpeg  # Richard Trevett House image (pineapple page)
│   └── resume.pdf              # Downloadable PDF resume (Keith's original file)
├── tailwind.config.ts          # Tailwind config: custom royal blue color palette, animations
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config (minimal)
├── postcss.config.js           # PostCSS config for Tailwind
├── .gitignore                  # Excludes node_modules/, .next/, .DS_Store
└── package.json                # Dependencies and npm scripts
```

---

## Key Design Decisions

**Single home page combining bio + resume**
Rather than separate About and Resume pages, everything lives at `/`. The hero section introduces Keith immediately, and the resume follows as the user scrolls. This reduces navigation friction and ensures the most important content is always the first thing a visitor sees.

**Markdown-based blog (no CMS)**
Blog posts are `.md` files in the `posts/` directory, committed alongside code. This keeps the entire site in one GitHub repo, eliminates third-party dependencies and monthly CMS costs, and makes publishing as simple as writing a file and running `git push`. The trade-off is that writing requires a text editor and terminal access rather than a web UI — acceptable given Keith's technical comfort level.

**Tag filtering as the only blog taxonomy**
Rather than separate Personal and Professional blog sections, all posts live on one page with a tag filter system. This keeps the blog simple and allows tags to expand freely (e.g., "Cloud Security", "Motorcycle", "Data") without requiring new pages or navigation changes.

**Scroll-reveal animations via IntersectionObserver**
Rather than using a heavy animation library, a lightweight custom `ScrollReveal` component uses the browser's native `IntersectionObserver` API to trigger CSS transitions. This keeps bundle size small while delivering smooth, progressive reveal animations as the user scrolls — on both desktop and mobile.

**Transparent-to-frosted nav on scroll**
The navigation bar starts fully transparent over the hero gradient and transitions to a frosted glass background once the user scrolls past 20px. This preserves the visual impact of the hero section without sacrificing navigation usability.

**Royal blue as the primary color**
A custom `royal` color palette (blue-leaning, lighter tones) was defined in Tailwind config. This provides a consistent, professional palette across all UI elements without defaulting to Tailwind's generic blues.

**Pineapple as an easter egg, not a featured element**
The pineapple page (`/pineapple`) is deliberately hidden from the main navigation. It appears only as a small, understated link in the footer — rewarding curious visitors without distracting others. This reflects the personal + professional balance of the site's identity.

---

## Current Status

**Live and deployed.** The following is fully functional:

- Home page with hero, bio, all resume sections, LinkedIn/GitHub/PDF download buttons
- Blog with 3 published posts and working tag filter
- Individual post pages with proper metadata and read time
- Pineapple easter egg page with images and external links
- Pineapple favicon in browser tabs
- Vercel auto-deployment on every `git push` to `main`
- Custom domain `sacenti.dev` connected via Vercel (SSL auto-provisioned)
- Domain forwarding: `keith.digital` → `sacenti.dev` (HTTP only — see Known Issues)

---

## Known Issues & Limitations

**keith.digital HTTPS forwarding**
`http://keith.digital` forwards correctly to `sacenti.dev`. However, `https://keith.digital` returns a `DNS_PROBE_FINISHED_NXDOMAIN` error because Squarespace's domain forwarding does not provision an SSL certificate for the source domain. Fix options: (1) add `keith.digital` to Vercel as a redirect domain (Vercel provisions SSL automatically), or (2) move `keith.digital` DNS to Cloudflare and use a free Page Rule redirect. Option 1 (Vercel) is recommended.

**No photo placeholder fallback**
If `headshot.jpg` were ever missing or failed to load, there is no fallback image — the circular frame would appear empty. A fallback SVG avatar could be added as a safety net.

**Blog requires terminal to publish**
Writing a new post requires creating a `.md` file and running `git push` from the terminal. There is no web-based writing interface. This is intentional for now but may become limiting if posting frequency increases or if Keith wants to write from a phone or tablet.

**Next.js version outdated warning**
During `npm install`, a warning appeared that Next.js 14.2.3 has a known security vulnerability. The project should be upgraded to the latest patched Next.js version when convenient. Run `npm install next@latest` in the project folder and push.

**No analytics**
There is currently no visitor analytics. Adding Vercel Analytics (free, privacy-friendly, one line of code) is recommended to understand traffic sources, especially once `sacenti.dev` and `keith.digital` SEO value converges.

**resume.pdf is static**
The downloadable resume is a static file in `public/`. If the resume is updated, the file must be manually replaced in the repo and pushed. It does not auto-generate from the built resume page.

---

## Suggested Next Steps

**Near-term (when ready)**

- Fix `keith.digital` HTTPS by adding it to Vercel as a redirect domain
- Upgrade Next.js to latest patched version (`npm install next@latest`)
- Add Vercel Analytics for traffic visibility
- Add a real profile photo once a preferred image is chosen
- Write and publish more blog posts — the infrastructure is ready

**Medium-term (future features)**

- Contact form or email link so visitors can reach out directly
- Open Graph image (social preview card when links are shared on LinkedIn, etc.)
- Reading progress indicator on blog post pages
- Related posts section at the bottom of each post
- Dark mode toggle

**Longer-term (when the site grows)**

- Portfolio/projects section showcasing self-built apps
- Search functionality for blog posts
- RSS feed for blog subscribers
- Web-based writing interface (e.g., Notion or a simple CMS) if terminal-based publishing becomes a friction point

---

## How to Update the Site

**Edit existing content:** modify any file in the project, then:
```bash
cd ~/Documents/Claude/Projects/sacenti-dev
git add <filename>
git commit -m "Description of change"
git push
```

**Publish a new blog post:** create a `.md` file in `posts/` with this frontmatter:
```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "Short summary shown on the blog listing page."
tags: ["Personal", "Professional"]
---

Post content here...
```
Then push — it appears live automatically.

**Run locally:**
```bash
cd ~/Documents/Claude/Projects/sacenti-dev
npm run dev
# Open http://localhost:3000
```
