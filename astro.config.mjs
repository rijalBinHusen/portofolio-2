import { defineConfig } from "astro/config";

// https://astro.build/config
// import preact from "@astrojs/preact";
import vue from "@astrojs/vue";

// tailwind
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ibinhusen.my.id",
  integrations: [
    vue(),
    tailwind({
      // provide custom path to a tailwind config
      config: { path: "./tailwind.config.cjs" },
    }),
  ],
  publicDir: "./public",
  server: {
    host: true,
  },
});
