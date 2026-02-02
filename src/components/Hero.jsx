import { useEffect } from "react";
import "../styles/Hero.css";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  useEffect(() => {
  const hero = document.querySelector(".hero");
  const canvas = document.querySelector(".hero-canvas");
  if (!hero || !canvas) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  let ticking = false;

  const handleScroll = () => {
    if (ticking) return;

    window.requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /* Only animate while hero is visible */
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const progress = 1 - rect.top / viewportHeight;

        /* VERY subtle drift */
        const driftY = progress * 18; // px
        const driftX = progress * 8;  // px

        canvas.style.transform = `
          translate3d(${driftX}px, ${driftY}px, 0)
        `;
      }

      ticking = false;
    });

    ticking = true;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <section className="hero section" data-low-contrast id="home">
      {/* Atmospheric background layers */}
      <div className="hero-bg">
        <div className="hero-canvas" />
        <div className="hero-noise" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-intro">Hi, I’m</span>

          <h1 className="hero-name">Sushant Shinde</h1>

          <h2 className="hero-role">Front-End Developer</h2>

          <p className="hero-description">
            I build clean, accessible, and performance-focused web interfaces,
            turning ideas into smooth and intuitive digital experiences.
          </p>

          <div className="hero-cta">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Resume
            </a>

            <a href="#contact" className="btn btn-secondary">
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
      </div>

      <div className="scroll-indicator">
        <span className="scroll-dot" />
      </div>
    </section>
  );
}

