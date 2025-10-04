import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), react()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://globat-network.github.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
