import { useScrollReveal } from '../hooks/useScrollReveal'
import { personalInfo } from '../data/portfolio'
import { Mail, Linkedin, Github, Copy, Check, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div ref={ref} className={`contact__card reveal ${isVisible ? 'visible' : ''}`}>
          <div className="contact__info">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's build something amazing together?</h2>
            <p className="contact__text">
              I'm always open to new challenges, partnerships in large-scale projects or to discuss the future of e-commerce and technology.
            </p>

            <div className="contact__links">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <div className="contact-link__icon"><Mail size={20} /></div>
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link__icon">
                  <MessageSquare size={20} />
                </div>
                <span>WhatsApp (Direct Chat)</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link__icon">
                  <Linkedin size={20} />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link__icon"><Github size={20} /></div>
                <span>GitHub Portfolio</span>
              </a>
            </div>
          </div>

          <div className="contact__cta">
            <div className="email-box">
              <span className="email-label">Quick contact email:</span>
              <div className="email-copy-wrapper">
                <code className="email-code">{personalInfo.email}</code>
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`} 
                  onClick={copyEmail}
                  aria-label="Copy email"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
            
            <a href={`mailto:${personalInfo.email}`} className="big-cta">
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
