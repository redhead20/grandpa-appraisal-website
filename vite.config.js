import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /grandpa-appraisal-website/.
// Keep local development at the normal root path.
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProduction ? '/grandpa-appraisal-website/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})