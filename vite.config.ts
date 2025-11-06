import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  /**
   * BASE PATH CONFIGURATION
   * ------------------------
   * En développement → base = '/'
   * En production (GitHub Pages) → base = '/Eloi_Coaching/'
   * Cela permet de servir correctement les assets à l’URL :
   * https://bastienlopez.github.io/Eloi_Coaching/
   */
  base: mode === "development" ? "/" : "/Eloi_Coaching/",

  plugins: [
    react(),
    // Plugin "lovable-tagger" uniquement en dev pour éviter les erreurs en prod
    ...(mode === "development" ? [componentTagger()] : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
