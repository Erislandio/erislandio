import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { skillCategories } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies & Specialties</h2>
          <p className="section-subtitle">
            Modern stack focused on performance, scalability, and user experience in e-commerce ecosystems and digital platforms.
          </p>

          <div className="skills__grid">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="skill-card__header">
                  <div className="skill-card__icon">
                    <category.icon size={24} />
                  </div>
                  <h3 className="skill-card__title">{category.title}</h3>
                </div>
                
                <ul className="skill-card__list">
                  {category.skills.map((skill) => (
                    <li key={skill} className="skill-tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
