// ============================================================
// Hero.jsx - La section d'accueil (la première qu'on voit)
// Son rôle : capter l'attention en quelques secondes.
// ============================================================

import { ArrowRight, Mail } from 'lucide-react'

function Hero() {
  return (
    // id="accueil" : c'est la cible du lien "Accueil" du menu
    <section id="accueil" className="hero">
      <p className="hero__eyebrow">Intégratrice web · Front-End</p>

      {/* Un seul <h1> sur la page (bon pour le SEO et l'accessibilité) */}
      <h1 className="hero__title">
        Bonjour, je suis Aliyah Lavallée,<br />
        intégratrice web orientée <span>UI/UX</span>
      </h1>

      <p className="hero__text">
        Passionnée par la création d'interfaces modernes, accessibles et centrées sur
        l'expérience utilisateur. Je transforme des maquettes en sites responsives et soignés.
      </p>

      {/* Deux boutons d'action (CTA) */}
      <div className="hero__actions">
        <a href="#projets" className="btn btn--primary">
          Voir mes projets <ArrowRight size={18} aria-hidden="true" />
        </a>
        <a href="#contact" className="btn btn--outline">
          Me contacter <Mail size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Hero
