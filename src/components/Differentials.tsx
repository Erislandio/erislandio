import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { differentials } from '../data/portfolio'
import { CheckCircle2 } from 'lucide-react'
import './Differentials.css'

export default function Differentials() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="differentials section" id="differentials">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="differentials__header">
            <span className="section-label">Differentials</span>
            <h2 className="section-title">Value Beyond Code</h2>
            <p className="section-subtitle">
              Seniority is not just about coding, but about business vision, leadership, and resilient architecture.
            </p>
          </div>

          <div className="differentials__grid">
            {differentials.map((diff, idx) => (
              <motion.div
                key={diff.title}
                className="diff-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="diff-card__icon">
                  <CheckCircle2 size={20} />
                </div>
                <div className="diff-card__content">
                  <h3 className="diff-card__title">{diff.title}</h3>
                  <p className="diff-card__description">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
