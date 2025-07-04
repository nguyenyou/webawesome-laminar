import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.PAGES_BASE_PATH || '/',
})
