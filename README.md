# Ibraheem Qazeem — Portfolio

A responsive portfolio for web development, AI automation and Web3 work. Built with Vite, semantic HTML and plain CSS. JavaScript handles mobile navigation and active navigation links; project details use native HTML disclosure controls.

## Development

Use Node.js 22.12+ or 20.19+.

```sh
npm ci
npm run dev
```

## Checks and production

```sh
npm run lint
npm run build
npm run preview
```

Vite writes the production site to `dist/`. Vercel can use the Vite framework preset, `npm run build` and the `dist` output directory. No environment variables or backend services are required.

## Editing

- `index.html`: page content, project links, metadata and accessible contact icons.
- `src/styles.css`: design tokens, section styles and responsive breakpoints.
- `src/main.js`: mobile menu and active hash navigation.
- `public/assets/`: local project imagery, portrait and downloadable CV.

Keep project images local, retain meaningful alternative text and update the PDF in `public/assets/Ibraheem-Qazeem-CV.pdf` when the CV changes. Project previews are styled presentations using project imagery, rather than live embeds.

The layout uses three project columns on desktop, stacks cards at tablet widths, and checks for reduced motion. Fonts load from Google Fonts with local serif and sans-serif fallbacks.
