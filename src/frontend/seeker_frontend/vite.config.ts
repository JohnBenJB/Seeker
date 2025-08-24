// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  optimizeDeps: {
    include: ["@dfinity/agent"], // pre-bundle for browser
  },
  build: {
    rollupOptions: {},
  },
});
