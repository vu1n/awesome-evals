import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is '/' for Vercel / local. The GitHub Pages demo builds with
// `vite build --mode pages` so assets resolve under the project-pages subpath.
// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/awesome-evals/' : '/',
  plugins: [react()],
}))
