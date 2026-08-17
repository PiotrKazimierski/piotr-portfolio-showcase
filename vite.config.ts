import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spaMode: true,
    prerender: { enabled: true, crawlLinks: false },
    pages: [{ path: "/" }],
  },
});
