// ============================================================
// Contact.jsx - La section "Contact"
// Pas de formulaire : des liens simples (email, LinkedIn, GitHub).
// Choix volontaire : le site est statique (GitHub Pages), un
// formulaire nécessiterait un service externe. Les liens suffisent.
// ============================================================

// On importe les icônes depuis lucide-react (librairie d'icônes légère)
import { Mail, Linkedin, Github } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="section section--alt contact">
      <div className="section__inner">
        <h2 className="section-title"><span>Contact</span>Travaillons ensemble</h2>

        <p className="contact__text">
          Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter, je réponds avec plaisir.
        </p>

        <div className="contact__links">
          {/* mailto: ouvre le logiciel de mail avec mon adresse pré-remplie.
              aria-hidden sur l'icône : le texte "Email" suffit aux lecteurs d'écran. */}
          <a className="contact__link" href="mailto:aliyah.lavallee.harrari+portfolio@gmail.com">
            <Mail size={18} aria-hidden="true" /> Email
          </a>

        
          <a className="contact__link" href="https://www.linkedin.com/in/aliyah-lavall%C3%A9e-065839377/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} aria-hidden="true" /> LinkedIn
          </a>

          <a className="contact__link" href="https://github.com/aliyah-lh" target="_blank" rel="noopener noreferrer">
            <Github size={18} aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
