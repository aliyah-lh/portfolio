// ============================================================
// About.jsx - La section "À propos" (le pitch)
// On reprend le pitch en 6 actes, fondu en quelques paragraphes.
// ============================================================

function About() {
  return (
    <section id="a-propos" className="section section--alt">
      <div className="section__inner">
        <h2 className="section-title"><span>À propos</span>Mon parcours</h2>

        <div className="about__text">
          <p>
            J'ai découvert le développement web grâce à la formation <strong>Intégrateur Web</strong> d'OpenClassrooms.
            Elle m'a donné des bases techniques solides tout en révélant mon intérêt pour le design d'interfaces :
            ce qui m'attire, c'est de transformer une maquette en une expérience concrète et agréable.
          </p>
          <p>
            Au fil de mes projets, j'ai développé des compétences en <strong>intégration responsive</strong>,
            en <strong>accessibilité web</strong> et en <strong>interfaces dynamiques</strong> avec React.
            Je suis rigoureuse, créative et autonome, avec une attention particulière au détail visuel.
          </p>
          <p>
            Mon objectif : intégrer une équipe dynamique comme intégratrice web ou développeuse front-end junior,
            tout en me spécialisant vers le métier d'<strong>UI/UX Designer</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
