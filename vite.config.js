// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'Pages/alternance.html'),
        bonus: resolve(__dirname, 'Pages/bonus.html'),
        contact: resolve(__dirname, 'Pages/contact.html'),
        fig: resolve(__dirname, 'Pages/fig.html'),
        bdd: resolve(__dirname, 'Pages/projet-bdd.html'),
        interview: resolve(__dirname, 'Pages/projet-interview.html'),
        projet: resolve(__dirname, 'Pages/projets.html'),
      },
    },
  },
})