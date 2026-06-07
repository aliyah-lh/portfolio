// ============================================================
// Header.jsx - L'en-tête avec le logo et la navigation
//
// Sur mobile, le menu est caché et s'ouvre avec un bouton "burger".
// On utilise useState pour mémoriser si le menu est ouvert ou fermé.
// ============================================================

import { useState } from 'react'

function Header() {
  // "isOpen" = le menu mobile est-il ouvert ? (false au départ)
  // "setIsOpen" = la fonction pour changer cette valeur
  const [isOpen, setIsOpen] = useState(false)

  // Les liens du menu : { texte affiché, ancre vers la section }
  const links = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Parcours', href: '#parcours' },
    { label: 'Contact', href: '#contact' },
  ]

  // Quand on clique sur un lien, on referme le menu (utile sur mobile)
  const handleClick = () => setIsOpen(false)

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo / nom */}
        <a href="#accueil" className="header__logo">Aliyah Lavallée</a>

        {/* Navigation principale.
            On ajoute la classe "header__nav--open" seulement si isOpen est vrai. */}
        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`} aria-label="Navigation principale">
          {/* On génère un lien pour chaque élément du tableau "links" avec .map() */}
          {links.map((link) => (
            <a key={link.href} href={link.href} className="header__link" onClick={handleClick}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bouton burger : visible seulement sur mobile (géré par le CSS).
            aria-expanded indique aux lecteurs d'écran si le menu est ouvert. */}
        <button
          className="header__burger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Ouvrir ou fermer le menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default Header
