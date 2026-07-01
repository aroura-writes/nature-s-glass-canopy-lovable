import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Base path is "./" so the built site works whether it's hosted at
// https://<user>.github.io/<repo>/ or at the root of a custom domain.
// HashRouter is used in the app so no SPA fallback is needed on GitHub Pages.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
