import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset URLs work both at a custom domain root and under a
  // GitHub Pages repository path such as /AvalAngadi/.
  base: './',
  plugins: [react(), tailwindcss()],
})
