import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { experiences } from '../data/portfolio'
import { Briefcase } from 'lucide-react'
import './Experience.css'

export default function Experience() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">Trajectory</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Over 5 years delivering complex solutions and leading teams in global technology and e-commerce companies.
          </p>

          <div className="experience__timeline">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="timeline-marker">
                  <div className="marker-dot">
                    <Briefcase size={14} />
                  </div>
                  <div className="marker-line"></div>
                </div>

                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-company">{exp.company}</h3>
                      <p className="timeline-role">{exp.role}</p>
                    </div>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  
                  <p className="timeline-description">{exp.description}</p>
                  
                  <ul className="timeline-highlights">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="timeline-tech">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
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
