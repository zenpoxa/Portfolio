// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'Pages/contact.html'),
        projet: resolve(__dirname, 'Pages/projets.html'),
        tabaskho: resolve(__dirname, 'Pages/projets-tabas-kho.html'),
        portfolio: resolve(__dirname, '/pages/projet-portfolio.html'),
      },
    },
  },
})