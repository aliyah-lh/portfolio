// ============================================================
// Skills.jsx - La section "Compétences"
// Deux cartes : compétences techniques et qualités humaines.
// ============================================================

function Skills() {
  // On stocke les compétences dans des tableaux, puis on les affiche avec .map()
  const techSkills = ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'React', 'Redux', 'Git', 'GitHub', 'Responsive', 'Accessibilité']
  const softSkills = ['Rigueur', 'Créativité', 'Autonomie', 'Souci du détail', 'Esprit d\'équipe', 'Curiosité']

  return (
    <section id="competences" className="section">
      <div className="section__inner">
        <h2 className="section-title"><span>Compétences</span>Ce que je sais faire</h2>

        <div className="skills__grid">
          {/* Carte 1 : techniques */}
          <div className="skill-card">
            <h3>Compétences techniques</h3>
            <ul>
              {techSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Carte 2 : humaines */}
          <div className="skill-card">
            <h3>Qualités humaines</h3>
            <ul>
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
