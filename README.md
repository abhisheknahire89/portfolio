# Abhishek Nahire — Portfolio

A static, responsive portfolio with six evidence-grounded case studies, a dedicated about page, project filtering and accessible motion. Original CSS diagrams explain the work; they are not product screenshots.

## Development

Requires Node.js 18+ and Python 3 for the preview server. There are no npm dependencies.

```sh
npm run build
npm run dev
```

Open http://localhost:3000. `npm run check` checks JavaScript syntax.

## Editing

- `src/projects.mjs`: case study copy, categories and metrics.
- `build.mjs`: page templates, metadata and generated routes.
- `src/styles.css`: design tokens, layouts and responsive styles.
- `src/app.js`: filters, reveal animations, navigation state and clipboard feedback.
- `public/assets/`: résumé, locally served fonts, social image and font licenses.
- `dist/`: generated static site; deploy this directory.

Run `npm run build` after edits. URLs use trailing slashes and work with normal static directory serving. Configure a static host to serve `404.html` for missing paths. The hosting identity is in `.openai/hosting.json`.

## Content

Facts and reported outcomes come from the supplied résumé. The six stories include separate work streams at Aivana. Clinical metrics describe a pilot; preauthorization describes a prototype. Narrative framing and takeaways are editorial interpretations and should be reviewed by Abhishek before making the portfolio public. No stock product screenshots or fictional testimonials are used.

## Verification

Checked all eight content pages at 375, 768 and 1440px for overflow, plus filter results and clipboard feedback. Motion respects `prefers-reduced-motion`. Decorative diagrams are hidden from assistive technology; adjacent text and case studies convey their substance. Email links work independently of clipboard access.
