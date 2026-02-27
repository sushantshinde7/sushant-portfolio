import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import { ArrowRight } from "lucide-react";

function Projects() {
  const projectList = [
    {
      title: "React Time Tools",
      label: "Time Utilities",
      description:
        "A production-grade time management application built with React and Vite, combining Alarm, Timer, Stopwatch, and World Clock into a unified, offline-ready interface. Implements centralized state management with Context API, precise time calculations, repeat scheduling, and persistent settings via LocalStorage — designed for performance, reliability, and clean UX across complex time-based interactions.",
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
        "A modular, offline-capable to-do application built with vanilla JavaScript using ES Modules for scalable architecture. Supports task CRUD operations, pinning, filters, animated UI feedback, and installable PWA functionality with LocalStorage persistence — focused on accessibility, performance, and structured code organization.",
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
        "A Netflix-inspired streaming interface built with React, Firebase Authentication, and the TMDB API. Implements secure authentication flows, protected routes, dynamic content fetching, and route-based navigation with reusable components — delivering a responsive, production-style UI that mirrors real-world streaming platforms.",
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
      <div className="section-inner  projects-inner">
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
              reverse={index % 2 !== 0} // 👈 ADD THIS
            />
          ))}
        </div>

        <div className="projects-cta">
          <a
            className="btn btn-secondary btn-projects"
            href="#"
            target="_blank"
          >
            See More <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
