# Green Academic Portfolio — Bhoopendra Kumar

A responsive, multi-page Next.js 15 academic portfolio matching the green-and-white design concept. Includes scroll-triggered reveals, smooth CSS network animation, desktop hover tilt, mobile tap states, publication search/filter, responsive navigation, and reduced-motion accessibility.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Push this folder to a GitHub repository and import the repository into Vercel. Framework: **Next.js**. No environment variables are required for the demo. Or, with Vercel CLI: `npx vercel`.

## Customize before publishing

1. Edit `data.ts` with verified personal information, research and publication details. The publications are examples of ongoing research, **not claims of acceptance**.
2. Set `profile.email` and optional Scholar, LinkedIn and GitHub links. The contact form intentionally uses `mailto:` after email is configured; it does not store messages or secretly send mail.
3. Put a verified CV PDF at `public/cv.pdf` and set `profile.cv` to `'/cv.pdf'`.
4. Add an actual headshot only if desired. The About page currently uses a BK monogram rather than a fabricated photo.
5. Fonts load via Google Fonts when online; system fonts are used as fallback.

## Pages

`/`, `/research`, `/publications`, `/projects`, `/teaching`, `/about`, `/cv`, `/blog`, `/contact`.

The website intentionally avoids unverified publication counts, education history, awards, manuscript acceptance statuses, and email addresses.
