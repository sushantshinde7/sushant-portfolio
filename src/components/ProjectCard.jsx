import { Github, Globe } from "lucide-react";
import "../styles/ProjectCard.css";

function ProjectCard({
  title,
  label,
  description,
  tags,
  github,
  live
}) {
  return (
    <article className="project-card">
      {/* LEFT — Visual */}
      <div className="project-visual">
        <span className="visual-label">{label}</span>
      </div>

      {/* RIGHT — Content */}
      <div className="project-content">
        <header className="project-header">
          <h3 className="project-title">{title}</h3>

          <div className="project-actions">
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={live} target="_blank" rel="noreferrer" aria-label="Live Demo">
              <Globe size={18} />
            </a>
          </div>
        </header>

        <p className="project-description" lang="en">{description}</p>

        <ul className="project-tags">
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
