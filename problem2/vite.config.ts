import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "#/pages": path.resolve(__dirname, "src/pages"),
      "#/assets": path.resolve(__dirname, "src/assets"),
      "#/src": path.resolve(__dirname, "src"),
    },
  },
});
