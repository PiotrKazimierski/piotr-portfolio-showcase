import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// STATIC_EXPORT=1 (set by the GitHub Pages workflow) builds a fully static
// bundle: a Node-runnable server is emitted only so the "/" route can be
// prerendered to real HTML, and the deployed artifact is just dist/client.
const staticExport = process.env["STATIC_EXPORT"] === "1";

export default defineConfig({
  ...(staticExport ? { nitro: false as const } : {}),
  tanstackStart: {
    spaMode: true,
    ...(staticExport
      ? { prerender: { enabled: true, crawlLinks: false }, pages: [{ path: "/" }] }
      : {}),
  },
});
