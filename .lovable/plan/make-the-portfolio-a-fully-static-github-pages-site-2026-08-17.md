# Make the portfolio a fully static GitHub Pages site

The site already has no backend: one route, no server functions, no database, no data fetching. The only thing missing is a build that emits plain static HTML files plus a deploy workflow that doesn't guess where they landed.

## What changes

1. **Prerender to real HTML** — turn on prerendering for the single `/` route in `vite.config.ts` (keeping SPA mode), so the build writes a real `index.html` with the full portfolio markup instead of an empty app shell. Better for SEO and for crawlers/social previews.
2. **Simplify the deploy workflow** — replace the long fallback/HTML-generation block in `.github/workflows/deploy.yml` with a straightforward copy of the build output, plus:
   - `CNAME` with `piotrkazimierski.pl`
   - `.nojekyll` so GitHub Pages serves `_`-prefixed asset folders
   - `404.html` copied from `index.html` for direct-link routing
   - a hard failure if `index.html` is missing, instead of fabricating one
3. **Verify the output** — build locally and confirm the generated `index.html` contains the actual portfolio text (name, experience, skills) and that all asset URLs are root-relative.

## Technical notes

- `tanstackStart: { spaMode: true, prerender: { enabled: true }, pages: [{ path: "/" }] }` in `vite.config.ts`; `base` stays `"/"` because the site is served from a custom apex domain, not a repo subpath.
- Static output lands in `.output/public`; the workflow will copy that one directory (with a `dist/` fallback only if the build layout changes).
- No server runtime is deployed — everything is HTML, JS, CSS and the bundled photo/PDF assets.
- The Lovable preview keeps working exactly as it does today; these changes only affect the production build.
