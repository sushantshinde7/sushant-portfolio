import { Github, Globe } from "lucide-react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, tech }) {
  return (
    <div className="card">
      <div className="project-info">
        <div className="project-bio">
          <h3>{title}</h3>
          <p>{tech}</p>
        </div>

        <div className="project-link">
          <a href="#" target="_blank" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" target="_blank" aria-label="Live Demo">
            <Globe size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

