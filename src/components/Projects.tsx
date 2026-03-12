import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/portfolio'
import { ArrowRight } from 'lucide-react'
import './Projects.css'

export default function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Success Stories & Projects</h2>
          <p className="section-subtitle">
            A selection of work demonstrating technical impact, leadership, and product vision in enterprise contexts.
          </p>

          <div className="projects__grid">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="project-card__content">
                  <div className="project-card__header">
                    <span className="project-card__role">{project.role}</span>
                    <h3 className="project-card__title">{project.title}</h3>
                  </div>
                  
                  <p className="project-card__description">{project.description}</p>
                  
                  <div className="project-card__impact">
                    <span className="impact-label">Impact</span>
                    <p className="impact-text">{project.impact}</p>
                  </div>

                  <div className="project-card__footer">
                    <div className="project-card__tech">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="tech-chip">{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-chip">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-card__action">
                  <div className="action-btn">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
