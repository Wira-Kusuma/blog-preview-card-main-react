import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/blog-preview-main-card-main-react/",
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
