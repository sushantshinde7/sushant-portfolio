import "../styles/Hero.css";
import { Github, Linkedin } from "lucide-react";


export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* Content */}
        <div className="hero-content">
          <span className="hero-intro">Hi, I’m</span>

          <h1 className="hero-name">Sushant Shinde</h1>

          <h2 className="hero-role">
            Front-End Developer
          </h2>

          <p className="hero-description">
            I build clean, accessible, and performance-focused web interfaces,
            turning ideas into smooth and intuitive digital experiences.
          </p>

          <div className="hero-cta">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Resume
            </a>

            <a href="#contact" className="btn secondary">
              Contact
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/sushantshinde7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/sushantshinde7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Abstract */}
        <div className="hero-abstract">
          <div className="abstract-shape" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-dot" />
      </div>
    </section>
  );
}
