// ============================================================
// main.jsx - Point d'entrée de l'application React
// C'est le tout premier fichier JavaScript exécuté.
// Son rôle : "accrocher" notre application React dans la page HTML.
// ============================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// On importe le composant principal de l'app
import App from './App.jsx'

// On importe la feuille de styles principale (Sass)
import './styles/main.scss'

// createRoot cible la <div id="root"> de index.html
// puis on y "rend" (affiche) notre composant <App />.
// <StrictMode> est un outil de React qui aide à repérer les erreurs en développement.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
