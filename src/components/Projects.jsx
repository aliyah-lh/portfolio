// ============================================================
// Projects.jsx - La section "Projets" AVEC SYSTÈME DE FILTRES
//
// C'est le composant React le plus important du portfolio.
// Il montre une vraie logique React :
//   - useState pour mémoriser le filtre actif
//   - on calcule la liste des projets à afficher selon le filtre
//   - on génère les boutons et les cartes dynamiquement
//
// (Le détail est expliqué dans doc/phase-4-developpement/GUIDE-phase-4.md)
// ============================================================

import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  // 1) On construit la liste des filtres à partir des catégories des projets.
  //    "Tous" + les catégories uniques (Set évite les doublons).
  const categories = ['Tous', ...new Set(projects.map((p) => p.category))]

  // 2) On mémorise le filtre actuellement sélectionné (au départ : "Tous").
  const [activeFilter, setActiveFilter] = useState('Tous')

  // 3) On calcule les projets à afficher :
  //    - si "Tous" est sélectionné -> on garde tout
  //    - sinon -> on garde seulement ceux dont la catégorie correspond
  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projets" className="section section--alt">
      <div className="section__inner">
        <h2 className="section-title"><span>Projets</span>Mes réalisations</h2>

        {/* ----- Les boutons de filtre ----- */}
        <div className="filters" role="group" aria-label="Filtrer les projets par catégorie">
          {categories.map((category) => (
            <button
              key={category}
              // La classe "--active" s'ajoute si ce bouton est le filtre sélectionné
              className={`filters__btn ${activeFilter === category ? 'filters__btn--active' : ''}`}
              // aria-pressed indique aux lecteurs d'écran quel filtre est actif
              aria-pressed={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ----- La grille de cartes projet ----- */}
        <div className="projects__grid">
          {filteredProjects.length > 0 ? (
            // Pour chaque projet filtré, on affiche une carte
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            // Cas où aucun projet ne correspond (sécurité)
            <p className="projects__empty">Aucun projet dans cette catégorie pour l'instant.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
