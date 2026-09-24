# legalengineer.dk

Landing site for Legal Engineering, a Danish community for lawyers who build.
Built with [Astro](https://astro.build) as a static site. Login and the member
platform will be added later.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321 (or the next free port)
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

## Routes

| Route  | Language |
| ------ | -------- |
| `/`    | English  |
| `/da/` | Danish   |

The ENG/DK toggle in the header links between the two routes. The visitor's
choice is stored in `localStorage` (`le-lang`), and a visitor who chose Danish
is redirected from `/` to `/da/` on their next visit.

## Editing content

All copy and lists live in JSON so they can be changed without touching markup.

| File                       | What it holds                                                   |
| -------------------------- | --------------------------------------------------------------- |
| `src/data/stories.json`    | Member story cards. Order = card order and colour.              |
| `src/data/employers.json`  | "Where members work" tiles. Set `logo` to an image path to swap the name for a logo. |
| `src/data/charter.json`    | Charter intro paragraphs, the foundation line, and the five principles. |
| `src/data/site.json`       | Site name, year, coordinates, and the link targets for Apply, Log in, LinkedIn, Email and the full charter. |
| `src/i18n/strings.json`    | Every other UI string, in `en` and `da`.                        |

Any text field can be either a plain string (same in both languages) or an
object `{ "en": "...", "da": "..." }`.

### Story cards

Cards are 9:16 and built for vertical video. Each entry in `stories.json`:

```json
{
  "name": "Kristian Anker",
  "role": { "en": "Founder, The Ramp", "da": "Stifter, The Ramp" },
  "org": "The Ramp",
  "built": { "en": "...", "da": "..." },
  "video": "/stories/kristian.mp4",
  "poster": "/stories/kristian.jpg",
  "url": null
}
```

- `video`: path to a vertical (9:16) video in `public/`. Videos play muted and looped while at least 60% of the card is on screen, and pause when scrolled away. Each video card gets a sound button, and only one card plays with sound at a time.
- `poster`: still frame shown before the video loads, and the only thing shown to visitors who prefer reduced motion until they press the sound button. Can also be used on its own without a video.
- With a video or poster, the card switches to white text over a dark gradient. Without either, it shows the coloured placeholder.
- `url`: if set, the whole card becomes a link.
- Recommended encoding: H.264 MP4, 1080×1920 or 720×1280, no more than a few MB each, since several cards can load on one page.

### Links still to be decided

`src/data/site.json` currently points Apply at the `#apply` anchor and Log in,
LinkedIn, Email and the full charter at `#`. Replace these when the routes and
forms exist.

## Assets still needed

- Vertical member videos and poster frames for the six story cards
- A community photo (`src/components/About.astro`, the 4:5 placeholder)
- Employer logos (drop into `public/` and set `logo` in `employers.json`)

## Structure

```
src/
  components/   Header, Hero, Stories, About, Employers, Charter, Footer, Landing
  data/         stories, employers, charter, site (JSON)
  i18n/         strings.json + helpers (t, pick, langPath)
  layouts/      Base.astro (head, fonts, hreflang, global CSS)
  pages/        index.astro (EN), da/index.astro (DA)
  styles/       global.css (design tokens, base styles, pill buttons)
public/         favicon.svg, robots.txt, images
```

Design tokens (colours, type scale, radii, gutter) are CSS custom properties at
the top of `src/styles/global.css` and follow the design handoff exactly.
