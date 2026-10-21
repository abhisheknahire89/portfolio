# Abhishek Nahire — Portfolio

A cinematic, illustrated portfolio inspired by the pacing of Nesil Noble’s portfolio, with original artwork, content and implementation.

Eight scroll-controlled chapters take visitors from the opening builder illustration through background, approach, three principles, Hyderabad, six selected projects, about and a closing contact scene. Vertical scrolling drives the horizontal work gallery. A full-screen case-study dialog keeps the gallery position, supports next/previous projects and closes with Escape. Case studies also remain available as standalone pages.

## Development

Requires Node.js 18+ and Python 3. No npm dependencies.

```sh
npm run build
npm run dev
```

Open http://localhost:3000. Run `npm run check` for JavaScript syntax checks.

## Editing

- `src/character.mjs`: editable portrait SVG; `dist/assets/abhishek-character.svg` is the standalone 800 × 1000 export.
- `src/journey.mjs`: homepage scenes, original SVG illustration and gallery markup.
- `src/journey.css`: cinematic layout, responsive rules and reduced-motion fallback.
- `src/journey.js`: scene progress, gallery, project dialog, opt-in ambient audio and clipboard feedback.
- `src/projects.mjs`: the six project narratives and reported metrics.
- `build.mjs`: shared templates, individual case studies, about page, metadata and routes.
- `src/styles.css` and `src/app.js`: standalone pages and project visuals.
- `public/assets/`: résumé, locally served fonts, social image and font licenses.
- `dist/`: generated static website.

Run `npm run build` after editing. Deploy `dist/`. The Sites identity is in `.openai/hosting.json`.

## Accessibility and behavior

System reduced-motion preference switches the fixed scenes into a normal document with a project grid and all three principles visible. Inactive cinematic scenes are inert and hidden from assistive technology. The native dialog traps focus and restores focus to its project link. Keyboard focus brings gallery cards into view. Audio is generated locally with the Web Audio API and starts only after the sound button is clicked; it pauses in background tabs. Email links do not depend on clipboard access.

## Content

Facts and reported outcomes come from the supplied résumé. The six stories include separate work streams at Aivana. Clinical metrics describe a pilot; preauthorization describes a prototype. Narrative framing and takeaways are editorial interpretations. The builder is an original stylised SVG portrait based on Abhishek’s supplied photo, including his dark mustache, upward-styled hair, warm brown skin and slate-blue collared shirt. Project diagrams are original explanatory reconstructions, not product screenshots.

## Verification

Browser-reviewed at 375px mobile, 768px tablet and 1440px desktop. Verified chapter navigation, horizontal gallery movement, project opening and next-project navigation, Escape dismissal, preserved gallery scroll position, email-copy feedback and sound on/off. Browser error log was clear during review. Standalone pages remain available at their existing URLs. The previous design’s Lighthouse scores do not describe this redesign.
