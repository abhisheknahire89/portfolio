# Abhishek Nahire — Portfolio

An editorial portfolio built around Abhishek’s own theme: connecting questions, evidence, decisions and useful outcomes.

The visual identity uses warm ivory, ink and rust, clean sans-serif typography, precise grids and an original animated workflow diagram and a circular AN monogram. Eight scroll-controlled chapters cover background, method, evidence, context, selected work, about and contact. The six-project horizontal gallery and case-study overlays preserve the smooth narrative browsing experience.

The former character, opening-head animation, stars, grain, irregular lettering, illustrated city scene and bottom chapter ruler have been removed. Sound has also been removed to keep the experience focused.

## Development

Requires Node.js 18+ and Python 3. No npm dependencies.

```sh
npm run build
npm run dev
```

Open http://localhost:3000. Run `npm run check` for JavaScript syntax checks.

## Editing

- `src/journey.mjs`: homepage scenes, original SVG illustration and gallery markup.
- `src/journey.css`: cinematic layout, responsive rules and reduced-motion fallback.
- `src/journey.js`: scene progress, gallery, project dialog, clipboard feedback.
- `src/projects.mjs`: the six project narratives and reported metrics.
- `build.mjs`: shared templates, individual case studies, about page, metadata and routes.
- `src/styles.css` and `src/app.js`: standalone pages and project visuals.
- `public/assets/`: résumé, locally served fonts, social image and font licenses.
- `dist/`: generated static website.

Run `npm run build` after editing. Deploy `dist/`. The Sites identity is in `.openai/hosting.json`.

## Accessibility and behavior

System reduced-motion preference switches the fixed scenes into a normal document with a project grid and all three principles visible. Inactive cinematic scenes are inert and hidden from assistive technology. The native dialog traps focus and restores focus to its project link. Keyboard focus brings gallery cards into view. Email links do not depend on clipboard access.

## Content

Facts and reported outcomes come from the supplied résumé. The six stories include separate work streams at Aivana. Clinical metrics describe a pilot; preauthorization describes a prototype. Narrative framing and takeaways are editorial interpretations. Project diagrams are original explanatory reconstructions, not product screenshots.

## Verification

Browser-reviewed at 375px mobile, 768px tablet and 1440px desktop. Verified chapter navigation, horizontal gallery movement, project opening and next-project navigation, Escape dismissal, preserved gallery scroll position, email-copy feedback. Browser error log was clear during review. Standalone pages remain available at their existing URLs. The previous design’s Lighthouse scores do not describe this redesign.
