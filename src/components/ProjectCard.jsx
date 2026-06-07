// ============================================================
// ProjectCard.jsx - Une carte projet réutilisable
//
// Ce composant reçoit un projet en "props" (propriété) et affiche
// sa carte. On le réutilise pour chaque projet -> pas de copier-coller.
// ============================================================

function ProjectCard({ project }) {
  // On "déstructure" l'objet project pour récupérer ses champs facilement
  const { title, category, description, stack, image, alt, demoUrl, codeUrl } = project

  return (
    <article className="project-card">
      {/* Image / capture du projet */}
      <img className="project-card__image" src={image} alt={alt} loading="lazy" />

      <div className="project-card__body">
        <span className="project-card__category">{category}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        {/* Badges des technologies utilisées */}
        <ul className="project-card__stack">
          {stack.map((tech) => (
            <li key={tech} className="project-card__tech">{tech}</li>
          ))}
        </ul>

        {/* Liens : démo (seulement si une URL existe) + code */}
        <div className="project-card__links">
          {demoUrl && (
            <a
              className="project-card__link"
              href={demoUrl}
              target="_blank"            // ouvre dans un nouvel onglet
              rel="noopener noreferrer"  // sécurité quand on utilise target="_blank"
            >
              Voir la démo ↗
            </a>
          )}
          <a
            className="project-card__link project-card__link--code"
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code source ↗
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
