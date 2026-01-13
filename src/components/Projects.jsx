import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import { ArrowRight } from "lucide-react";

function Projects() {
  const projectList = [
    {
      title: "React Time Tools",
      label: "Time Utilities",
      description:
        "A production-grade React application combining Alarm, Timer, Stopwatch, and World Clock into a single, fast, and offline-ready interface. Focused on state persistence, performance optimization, and clean UX across complex time-based logic.",
      tags: [
        "React",
        "Vite",
        "Context API",
        "State Persistence",
        "Offline Ready",
        "UX Focused",
      ],
      github: "https://github.com/sushantshinde7/react-time-tools",
      live: "https://react-time-tools.vercel.app/",
    },
    {
      title: "Modular To-Do PWA",
      label: "Productivity",
      description:
        "A fully modular to-do application built with vanilla JavaScript using ES Modules. Features smart task management, smooth animations, offline PWA support, and persistent state via LocalStorage — designed with a strong focus on UX and performance.",
      tags: [
        "JavaScript (ES Modules)",
        "PWA",
        "LocalStorage",
        "Offline Support",
        "UI Animations",
        "Accessibility",
      ],
      github: "https://github.com/sushantshinde7/modular-todo-js",
      live: "https://sushantshinde7.github.io/modular-todo-js/",
    },
    {
      title: "Netflix Clone",
      label: "Media Platform",
      description:
        "A Netflix-inspired streaming platform built with React, Firebase Authentication, and the TMDB API. Includes secure auth flows, protected routes, dynamic content fetching, and a fully responsive, production-style UI.",
      tags: [
        "React",
        "Firebase Auth",
        "TMDB API",
        "React Router",
        "Environment Variables",
        "Responsive UI",
      ],
      github: "https://github.com/sushantshinde7/netflix-clone-react-firebase",
      live: "https://my-netflix-clone-react.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="project-container section">
      <div className="projects-inner">
        <div className="division"></div>

        <div className="content-text">
          <h2>Projects</h2>
          <p>Selected personal and production-ready work</p>
        </div>

        <div className="projects-list">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              label={project.label}
              description={project.description}
              tags={project.tags}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>

        <a className="btn btn-secondary" href="#" target="_blank">
          See More <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
