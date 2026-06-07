# Portfolio — Aliyah Lavallée

Portfolio professionnel d'Aliyah Lavallée, intégratrice web orientée UI/UX.
Site one-page responsive développé avec **React**, **Vite** et **Sass**.

## 🚀 Lancer le projet en local

Prérequis : avoir **Node.js** installé (https://nodejs.org).

```bash
# 1. Installer les dépendances (à faire une seule fois)
npm install

# 2. Lancer le serveur de développement
npm run dev
# → ouvre l'adresse affichée (ex. http://localhost:5173)

# 3. Générer la version de production (dossier dist/)
npm run build
```

## 📁 Structure du projet

```
portfolio/
├── index.html              ← page HTML de base + balises SEO
├── public/
│   ├── favicon.svg         ← icône d'onglet
│   └── img/                ← (à créer) captures des projets
├── src/
│   ├── main.jsx            ← point d'entrée React
│   ├── App.jsx             ← assemble toutes les sections
│   ├── data/projects.js    ← données des projets (pour les filtres)
│   ├── components/         ← un fichier par section
│   │   ├── Header.jsx       ← navigation + menu burger
│   │   ├── Hero.jsx         ← accueil
│   │   ├── About.jsx        ← à propos / pitch
│   │   ├── Skills.jsx       ← compétences
│   │   ├── Projects.jsx     ← projets + SYSTÈME DE FILTRES
│   │   ├── ProjectCard.jsx  ← une carte projet réutilisable
│   │   ├── Timeline.jsx     ← parcours
│   │   ├── Contact.jsx      ← liens de contact
│   │   └── Footer.jsx       ← pied de page
│   └── styles/             ← Sass organisé en partials
│       ├── main.scss        ← rassemble tout
│       ├── _variables.scss  ← design system (couleurs, polices…)
│       ├── _mixins.scss     ← raccourcis (responsive…)
│       ├── _base.scss       ← reset + styles globaux
│       ├── _buttons.scss
│       ├── _header.scss
│       ├── _sections.scss
│       ├── _projects.scss
│       └── _footer.scss
└── vite.config.js
```

## ✅ À personnaliser avant la mise en ligne
- [ ] Ajouter les captures d'écran dans `public/img/` (`ohmyfood.png`, `argentbank.png`)
- [ ] Mettre ta vraie adresse email dans `src/components/Contact.jsx`
- [ ] Mettre tes vraies URL LinkedIn et GitHub (Contact + `src/data/projects.js`)
- [ ] Vérifier le `base` dans `vite.config.js` (nom de ton dépôt GitHub)

## 🛠️ Technologies
React · Vite · Sass · JavaScript ES6+ · HTML5 sémantique
