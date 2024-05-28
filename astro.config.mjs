import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  // site: "https://www.sgltrucking.com",
  image: {
    service: squooshImageService(),
  },
});
