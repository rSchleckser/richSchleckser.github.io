import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Preview deploy lives under /preview/ on gh-pages (production root untouched)
export default defineConfig({
  plugins: [react()],
  base: '/richSchleckser.github.io/preview/',
})
