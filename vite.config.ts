import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  nitro: {
    preset: "static",
  },
  // Wskazanie bazowej ścieżki (jeśli strona działa pod piotrkazimierski.github.io/piotr-portfolio-showcase/)
  // Jeśli korzystasz z własnej domeny podpiętej do GH Pages, zmień na: base: "/"
  base: process.env.NODE_ENV === "production" ? "/piotr-portfolio-showcase/" : "/",
});
