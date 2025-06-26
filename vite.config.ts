import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: {
    // @ts-ignore
    outDir: process.env.GH_PAGES ? 'docs' : 'dist'
  },
  // @ts-ignore
  base: process.env.GH_PAGES ? '/demo-dapp-with-wallet/' : './',
  server: {
    fs: {
      allow: ['../sdk', './'],
    },
  },
})
