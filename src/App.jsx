// ============================================================
// App.jsx - Composant principal qui assemble toutes les sections
// Le portfolio est en "one-page" : toutes les sections sont
// affichées les unes sous les autres sur une seule page.
// ============================================================

// On importe chaque section sous forme de composant
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* En-tête avec la navigation (reste fixe en haut) */}
      <Header />

      {/* <main> contient le contenu principal de la page (balise sémantique = accessibilité) */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Pied de page */}
      <Footer />
    </>
  )
}

export default App
