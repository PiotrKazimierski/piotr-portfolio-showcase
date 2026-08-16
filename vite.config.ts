import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spaMode: true,
  },
  // Ustawienie nazwy repozytorium jako ścieżki bazowej dla GitHub Pages
  // (Jeśli podepniesz własną domenę piotrkazimierski.pl, zmień poniżej na '/')
  base: "/piotr-portfolio-showcase/",
});
