# Ibraheem Qazeem — Portfolio

A responsive multi-page portfolio built with Vite, semantic HTML and CSS. No client framework or backend is required.

## Development

Use Node.js 22.12+ or 20.19+.

```sh
npm ci
npm run dev
```

## Check and build

```sh
npm run lint
npm run build
npm run preview
```

Vite builds all eight HTML entries into `dist/`. The Vercel Vite preset uses `npm run build` and the `dist` output directory. No environment variables are needed.

## Source map

- `index.html`: homepage, selected work, About and contact form.
- `work/index.html`: project index.
- `work/*/index.html`: four individual case studies.
- `about/index.html` and `contact/index.html`: standalone pages.
- `src/styles.css`: typography, layouts, responsive rules and menu presentation.
- `src/main.js`: accessible mobile navigation and email-draft composition.
- `public/assets/`: local images and downloadable CV.
- `vite.config.js`: explicit multi-page build entries.

The contact forms validate required fields and open a prefilled draft in the visitor's email app. They do not claim to send through a backend. Replace `public/assets/Ibraheem-Qazeem-CV.pdf` when the CV changes.

All small-screen menus use text controls, lock background scrolling while open, and support Escape and keyboard navigation. Hover effects follow the approved design: navy hero action and menu links, unchanged outlined action and email. Motion is disabled when requested by the visitor's system settings.

Inter and JetBrains Mono load from Google Fonts, with system fallbacks. Project imagery stays local and below-the-fold images load lazily.
