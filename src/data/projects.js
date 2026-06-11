// ============================================================
// projects.js - Les données de mes projets
//
// On sépare les DONNÉES du code d'affichage. Avantage : pour
// ajouter un projet plus tard, il suffit d'ajouter un objet ici,
// sans toucher au composant Projects. C'est une bonne pratique.
//
// Chaque projet a une "category" qui sert au système de filtres.
// ============================================================

export const projects = [
  {
    id: 'ohmyfood',
    title: 'Ohmyfood',
    category: 'Intégration', // sert au filtre
    tagline: "Intégration responsive mobile-first & animations CSS",
    description:
      "Intégration de la page d'accueil et d'une page restaurant à partir de maquettes, en mobile-first, avec des animations 100 % CSS (loader, cœur « j'aime », effets au survol).",
    // Liste des technos affichées sous forme de badges
    stack: ['HTML5', 'Sass', 'CSS3', 'Git', 'GitHub Pages'],
    // Le chemin de l'image (à placer dans public/img/). Voir note plus bas.
    image: './img/ohmyfood.webp',
    alt: 'Aperçu du projet Ohmyfood, site responsive intégré en Sass',
    demoUrl: 'https://aliyah-lh.github.io/Project4/',
    codeUrl: 'https://github.com/aliyah-lh/Project4',
  },
  {
    id: 'argentbank',
    title: 'ArgentBank',
    category: 'Application React', // sert au filtre
    tagline: 'Application bancaire sécurisée en React & Redux',
    description:
      "Front-end d'une application bancaire : authentification par token JWT, gestion de l'état global avec Redux Toolkit, consommation d'une API REST et routes protégées.",
    stack: ['React', 'Redux', 'React Router', 'Vite', 'API REST'],
    image: './img/argentbank.webp',
    alt: "Aperçu du projet ArgentBank, application React de gestion de compte bancaire",
    demoUrl: '', // pas de démo en ligne (nécessite le back-end) -> on n'affichera pas le bouton
    codeUrl: 'https://github.com/aliyah-lh/argentbank',
  },
]

