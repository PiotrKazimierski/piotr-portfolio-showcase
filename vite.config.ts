import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spaMode: true,
  },
  nitro: {
    preset: "static",
  },
  base: "/",
});
