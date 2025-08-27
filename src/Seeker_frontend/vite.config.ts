import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      util: "util",
    },
  },
  optimizeDeps: {
    include: [
      "@dfinity/agent",
      "@dfinity/auth-client",
      "@dfinity/candid"
    ],
  },
});
