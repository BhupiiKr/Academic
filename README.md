# Bhoopendra Kumar — Modular Academic Portfolio

## What changed
- Every page has its own `components/pages/PageName.tsx` and `PageName.module.css`.
- Shared navigation is in `components/ui/Shell.tsx` and its CSS module.
- Shared card layout and headings are in `components/ui/Shared.tsx` and its CSS module.
- The full-page wave/background animation is **removed**.
- The original wireframe globe illustration is used on **Home and About only**.
- Projects, Publications and Teaching use an intentional 2×2 grid at typical desktop widths; cards are sized to avoid clipping. On narrow displays, pagination is used.

## Recommended update procedure for your existing GitHub repository
1. Make a backup or a new Git branch.
2. Copy the entire `components/pages` folder and `components/ui` folder from this ZIP.
3. Replace `app/page.tsx`, `app/[slug]/page.tsx`, and `app/globals.css` with these versions.
4. **Keep your own edited `data.ts`** instead of overwriting it. The ZIP includes a sample only for running independently.
5. **Keep your existing `public/cv.pdf`**. The ZIP does not include the PDF.
6. Copy `app/layout.tsx`, `package.json`, and `tsconfig.json` only if your project is missing the corresponding setup; preserve your patched Next.js version.
7. Run `npm install`, `npm run build`, then commit and push to GitHub.

## Edit a single page later
- Projects: `components/pages/Projects.tsx` + `Projects.module.css`
- Publications: `Publications.tsx` + `Publications.module.css`
- Research: `Research.tsx` + `Research.module.css`
- Teaching: `Teaching.tsx` + `Teaching.module.css`
- CV: `CV.tsx` + `CV.module.css`
- Home: `Home.tsx` + `Home.module.css`
- About: `About.tsx` + `About.module.css`
- Blog: `Blog.tsx` + `Blog.module.css`
- Contact: `Contact.tsx` + `Contact.module.css`

Shared changes (card fonts, card borders, spacing for every page) should be made in `components/ui/Shared.module.css`. Header/footer changes are in `components/ui/Shell.module.css`.

## Validation
The source passed TypeScript syntax/transpilation checks. A production `next build` could not be completed here because package installation timed out. Test on a preview deployment before promoting to production.
