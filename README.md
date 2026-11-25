# me.dev

My portfolio site: [abhijeetpalanki.netlify.app](https://abhijeetpalanki.netlify.app/)

A single page with my experience, projects, skills, education and certification, and how to reach me. The content is kept in step with my resume and LinkedIn.

## Built with

- React 19 and Vite 7
- Tailwind CSS 4
- Framer Motion for entrance animations (turned off for anyone who asks their OS for reduced motion)
- React Icons
- Netlify, which deploys every push to `main`

## How it works

- All text lives in [`src/constants/index.js`](src/constants/index.js). Each section in [`src/components`](src/components) reads from it.
- `npm run build` builds the site, then renders the page to HTML at build time ([`prerender.mjs`](prerender.mjs)) so the content is in `dist/index.html` before any JavaScript runs. In the browser, React attaches to that HTML instead of rebuilding it.
- The hero photo switches by screen size: a round headshot on phones and tablets, a portrait on desktop.

## Accessibility

- One `h1`, landmark regions (header, main, footer) and a skip link
- Visible keyboard focus on every link
- Text contrast of at least 4.5:1 on the dark background
- Every icon has a text label, and every image has alt text
- Motion respects `prefers-reduced-motion`

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build with pre-rendered HTML in dist/
npm run preview  # serve the production build
npm run lint
```
