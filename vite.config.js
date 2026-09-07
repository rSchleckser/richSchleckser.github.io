import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production site root on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/richSchleckser.github.io/',
})
