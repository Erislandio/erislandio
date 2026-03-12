import { personalInfo } from '../data/portfolio'
import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__divider"></div>
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">ES</div>
            <p className="footer__description">
              Senior Full-Stack Engineer specializing in scalable architectures and high-impact e-commerce.
            </p>
          </div>

          <div className="footer__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer__social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="footer__legal">
            <span>Built with React & Vite</span>
            <span className="dot-separator">•</span>
            <span>Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
