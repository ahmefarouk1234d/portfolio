# Copilot: Portfolio Mission Brief
You are the lead designer + UI/UX + SEO + marketing copywriter. Produce delightful, modern, fast, accessible (WCAG AA) UX.

## Brand & Audience
- Persona: Ahmed Donia — full-stack developer (TS/Next/Firebase). Tone: confident, friendly, concise.
- Audience: recruiters, founders, technical clients (MENA + global). Bilingual-ready (EN primary; allow easy Arabic content later, RTL-safe utilities).

## Hard Requirements
- Tech: Next.js (App Router), TypeScript, Tailwind, Framer Motion, next/image.
- Pages: / (hero, CTA), /projects, /skills, /experience, /certificates (photo grid + lightbox), /contact.
- Theming: system + manual dark/light toggle; consistent spacing, 8pt scale.
- Components: polished cards, badges, buttons, nav with active state, footer, responsive grid, focus states.
- Certificates: read data from `data/certificates.ts` and images in `public/certs/*`; open photos in animated, accessible lightbox.
- SEO: metadata, OG/Twitter cards, sitemap.xml, robots.txt, structured data (JSON-LD for Person + CreativeWork).
- Performance: desktop Lighthouse ≥95 for Perf & A11y on / and /projects.
- Code quality: ESLint + Prettier + type-safe props; avoid `any`; meaningful tests for utilities/components.

## Marketing & Content
- Write benefit-driven copy (headline + subhead + proof). Clear CTAs (“Hire me”, “View projects”).
- Project cards: problem → solution → impact (metrics if available) + GitHub/demo links.
- Add social preview image generation (edge/og route).

## Design Direction
- Pick a tasteful palette (min contrast 4.5:1). Use motion sparingly (respect `prefers-reduced-motion`).
- Visual hierarchy: XL hero, readable body, consistent radii (e.g., 16–20px), soft shadows, micro-interactions on hover/focus.

## CI/CD
- Vercel deploy config. GitHub Actions: type-check, lint, build on PR.
- PRs must include rationale and screenshots (dark/light).

## Research (if allowed)
- If internet access is permitted, briefly research “top developer portfolios 2024–2025” and modern UI trends, then justify chosen palette/typography/layout in the PR description.

## Acceptance Checklist (block merge if unmet)
- [ ] All pages exist & responsive
- [ ] A11y: keyboard nav, focus rings, aria labels
- [ ] Lighthouse ≥95 (Perf + A11y)
- [ ] SEO + OG + sitemap + robots + JSON-LD
- [ ] Certificates page shows photos in lightbox
- [ ] Zero ESLint errors; strict TS
