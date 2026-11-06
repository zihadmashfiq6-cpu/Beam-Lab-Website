# BEaM Lab website

Built with [Astro](https://astro.build) and Tailwind CSS.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the static site to dist/
```

## Editing content (no coding needed)
All content lives in `src/data/`:

| File | What it controls |
|---|---|
| `site.json` | Lab name, tagline, address, email, homepage stats |
| `research.json` | Research areas |
| `projects.json` | Projects (each gets its own page at `/projects/<slug>`) |
| `instruments.json` | Lab equipment (`usedIn` lists project slugs) |
| `people.json` | Faculty (`group: "faculty"`), students, alumni |
| `publications.json` | Publications (filterable by year/topic) |
| `news.json` | News items (`date` as `YYYY-MM-DD`) |
| `messages.json` | Video messages; put the YouTube video ID in `youtubeId` |

Images go in `public/images/` and are referenced like `"/images/jane-doe.jpg"`.
