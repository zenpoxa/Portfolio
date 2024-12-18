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
        fig: resolve(__dirname, 'Pages/fig.html'),
        trip: resolve(__dirname, 'Pages/trip-en-armor.html'),
        bdd: resolve(__dirname, 'Pages/projet-bdd.html'),
        tabaskho: resolve(__dirname, 'Pages/projet-tabas-kho.html'),
        portfolio: resolve(__dirname, 'Pages/projet-portfolio.html'),
        interview: resolve(__dirname, 'Pages/projet-interview.html'),
        bonus: resolve(__dirname, 'Pages/bonus.html'),
      },
    },
  },
})