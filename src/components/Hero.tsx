import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background Effects */}
      <div className="hero__bg">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__grid-overlay" />
      </div>

      <div className="hero__content container">
        <motion.div
          className="hero__profile"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="hero__profile-wrapper">
            <img
              src={"https://i.ibb.co/Zpr4dFMx/1641911699568.jpg"}
              alt={personalInfo.name}
              className="hero__profile-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).parentElement!.classList.add(
                  "use-placeholder",
                );
              }}
            />
            <div className="hero__profile-placeholder">
              <span>ES</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero__badge-dot" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          className="hero__headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {personalInfo.headline}
        </motion.p>

        <motion.p
          className="hero__subheadline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {personalInfo.subheadline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
            <ArrowDown size={16} />
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            <Mail size={16} />
            Contact Me
          </a>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--secondary"
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
            id="hero-github"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn"
            id="hero-linkedin"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a href="#about" className="hero__scroll-link">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
