import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // This line is important
      }
    }
  },
  plugins: [react({
    babel: {
      parserOpts: {
        plugins: ['decorators-legacy', 'classProperties']
      }
    }
  })],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
  ,
})
