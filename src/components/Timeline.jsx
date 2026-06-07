// ============================================================
// Timeline.jsx - La section "Parcours" (frise chronologique)
// ============================================================

function Timeline() {
  // Les étapes du parcours, de la plus récente à la plus ancienne.
  // À personnaliser avec tes vraies dates.
  const steps = [
    {
      date: '2025 — 2026',
      title: 'Formation Intégrateur Web — OpenClassrooms',
      desc: 'Apprentissage de l\'intégration responsive, de Sass, de JavaScript et de React à travers des projets concrets (Ohmyfood, ArgentBank…).',
    },
    {
      date: '2026',
      title: 'Projet de fin de formation — Portfolio',
      desc: 'Conception, développement et déploiement de ce portfolio en React, Vite et Sass.',
    },
  ]

  return (
    <section id="parcours" className="section">
      <div className="section__inner">
        <h2 className="section-title"><span>Parcours</span>Mon évolution</h2>

        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline__item" key={index}>
              <p className="timeline__date">{step.date}</p>
              <h3 className="timeline__title">{step.title}</h3>
              <p className="timeline__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
