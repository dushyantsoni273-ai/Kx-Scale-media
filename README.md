# KX Scale Media — Website

A premium, animated marketing site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project Structure

```
app/                    Routes (Home, About, Services, Our Work, Case Studies, Contact)
components/             Reusable UI (Navbar, Footer, buttons, animations)
components/home/        Homepage-only sections
data/                   Editable content — projects, case studies, services, testimonials, stats
public/logo/            Brand logo (kx-logo.png)
public/work/            Portfolio thumbnails (add your images/videos here)
public/case-studies/    Case study hero + gallery media
public/showcase/        Creative showcase gallery media
public/testimonials/    Client headshots
```

## Editing Content

You almost never need to touch component code to update content — everything lives in `/data`:

- **`data/projects.ts`** — Add/edit portfolio items shown on the homepage and Our Work page. Each project needs a `slug`, `clientName`, `industry`, `services`, `category`, and a `thumbnail` path.
- **`data/caseStudies.ts`** — Full case study detail pages (challenge, strategy, metrics, gallery). The `slug` should match a project's slug if you want it linked from the portfolio grid.
- **`data/services.ts`** — Powers both the homepage service cards and the full Services page.
- **`data/testimonials.ts`** — Testimonial slider content.
- **`data/stats.ts`** — The big animated numbers in the Results section.

## Replacing Placeholder Media

Every image/video slot currently renders a light grey placeholder block labeled with the exact file path it expects (e.g. `/work/placeholder-01.jpg`). To swap in real media:

1. Drop your file into the matching `/public/...` folder.
2. In `components/ProjectCard.tsx`, `components/home/CreativeShowcase.tsx`, and `app/case-studies/[slug]/page.tsx`, replace the placeholder `<div>` blocks with a Next.js `<Image>` (for photos) or `<video>` tag pointing at the same path.

## Logo

The logo lives at `/public/logo/kx-logo.png` and is used by `components/Logo.tsx` in both the navbar (black) and footer (inverted to white via CSS filter). The same file is also used as the site favicon at `/app/icon.png`. To update the brand mark, replace both files.

## Contact Form

`app/contact/ContactForm.tsx` currently shows a success state on submit but doesn't send data anywhere. Wire it up by:
- Adding an API route (e.g. `app/api/contact/route.ts`) that emails you or posts to your CRM, and calling it with `fetch` in `handleSubmit`, or
- Connecting a form service like Formspree, Resend, or a CRM webhook.

## Notes

- Cursor is hidden and replaced with a custom dot + ring on desktop (disabled on mobile/touch for usability).
- Colors, fonts, and spacing tokens live in `tailwind.config.ts`.
- Animations use Framer Motion throughout; GSAP is installed and ready if you want more advanced scroll-pinning effects later.
