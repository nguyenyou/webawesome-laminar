import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.PAGES_BASE_PATH || "/",
  plugins: [tailwindcss()],
});
