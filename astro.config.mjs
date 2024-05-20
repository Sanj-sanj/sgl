import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  image: {
    service: squooshImageService(),
  },
});
