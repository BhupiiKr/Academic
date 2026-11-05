# Next.js prerender fix

The Research, Teaching, and Blog page components now begin with `'use client';`.
This is required because each passes a render callback to `Grid`, which is a Client Component.
It also ensures the icon component values are created within the client boundary.

## Update just these files in GitHub
- `components/pages/Research.tsx`
- `components/pages/Teaching.tsx`
- `components/pages/Blog.tsx`

Commit to `main` to trigger a new Vercel deployment.

Do not edit `data.ts` or `public/cv.pdf` for this fix.
