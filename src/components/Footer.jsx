// ============================================================
// Footer.jsx - Le pied de page
// ============================================================

function Footer() {
  // On calcule l'année automatiquement pour ne pas avoir à la changer chaque année
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">© {year} Aliyah Lavallée — Intégratrice web</p>
        <p className="footer__text">Réalisé avec React, Vite et Sass</p>
      </div>
    </footer>
  )
}

export default Footer
