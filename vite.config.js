// ============================================================
// vite.config.js - Configuration de Vite (l'outil qui lance et build le projet)
// ============================================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Le plugin React permet à Vite de comprendre le JSX (le HTML dans le JS)
  plugins: [react()],

  // ⚠️ IMPORTANT pour le déploiement sur GitHub Pages :
  // Si ton site est publié à l'adresse https://aliyah-lh.github.io/portfolio/
  // alors "base" doit valoir le nom du dépôt, ici '/portfolio/'.
  // En local (npm run dev), ça n'a pas d'importance.
  // → Adapte cette valeur au nom exact de ton dépôt GitHub.
  base: './',
})
