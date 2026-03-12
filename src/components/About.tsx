import { aboutText, personalInfo } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./About.css";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="about section" id="about">
      <div className="container">
        <div
          ref={ref}
          className={`about__grid reveal ${isVisible ? "visible" : ""}`}
        >
          <div className="about__content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Full-Stack Engineer with a focus on scale and performance
            </h2>

            <div className="about__text">
              {aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="about__stats">
              <div className="stat-item">
                <span className="stat-value">5+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">20+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Quality Focused</span>
              </div>
            </div>
          </div>

          <div className="about__image-container">
            <div className="about__image-wrapper">
              <div className="about__image-inner">
                <img
                  src={
                    "https://i.ibb.co/nq3mPN18/computer-program-coding-screen-53876-138060.avif"
                  }
                  alt={personalInfo.name}
                  className="about__profile-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement!.classList.add(
                      "use-placeholder",
                    );
                  }}
                />
                <div className="about__image-placeholder">
                  <span className="about__image-initials">ES</span>
                </div>
                <div className="about__image-overlay"></div>
              </div>
              <div className="about__image-border"></div>
              <div className="about__image-dots"></div>
            </div>

            <div className="about__location">
              <div className="location-dot"></div>
              <span>Based in {personalInfo.location} — Global Remote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
