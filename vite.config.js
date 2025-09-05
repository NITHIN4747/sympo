import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // Allow network access
    port: 5173,
    strictPort: true, // Don't try other ports if 5173 is busy
    open: true, // Open browser automatically
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
