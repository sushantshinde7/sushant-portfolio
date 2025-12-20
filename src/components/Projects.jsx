import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import { ArrowRight } from "lucide-react";

function Projects() {
  const projectList = [
    { title: "Project One", tech: "React, Redux, SASS" },
    { title: "Project Two", tech: "React, Redux, SASS" },
    { title: "Project Three", tech: "React, Redux, SASS" },
    { title: "Project Four", tech: "React, Redux, SASS" }
  ];

  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Projects</h2>
        <p>Check out some of my personal and paid projects</p>
      </div>
      <article className="project">
        {projectList.map((proj, index) => (
          <ProjectCard key={index} title={proj.title} tech={proj.tech} />
        ))}
      </article>
      <a className="btn btn-secondary" href="#" target="_blank">
        See More <ArrowRight size={18} />
      </a>
    </section>
  );
}

export default Projects;
