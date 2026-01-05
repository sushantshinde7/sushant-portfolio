import "../styles/Skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiNodedotjs,
  SiNpm,
  SiPython,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  //SiVisualStudioCode,
  SiVite,
  SiFigma,
  SiVercel,
  SiGithubpages,
} from "react-icons/si";
//import { FaVisualStudioCode } from "react-icons/fa6";

const frontendSkills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Sass", icon: SiSass },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Framer Motion", icon: SiFramer },
];

const webProgrammingSkills = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "npm", icon: SiNpm },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
];

const toolsSkills = [
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  //{ name: "VS Code", icon: FaVisualStudioCode },
  { name: "Vite", icon: SiVite },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
  { name: "GitHub Pages", icon: SiGithubpages },
];

function SkillSection({ title, skills }) {
  return (
    <div className="skills-section-block">
      <h3 className="skills-title">{title}</h3>

      <div className="skills-grid">
        {skills.map(({ name, icon: Icon }) => (
          <div className="skill-item" key={name}>
            <Icon className="skill-icon" />
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-wrapper container">
      <header className="skills-header">
        <h2 className="section-heading">Skills</h2>
        <p className="section-subtitle">
          Tools and technologies I use to build modern web interfaces.
        </p>
      </header>

      <div className="skills-sections">
        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Web Programming" skills={webProgrammingSkills} />
        <SkillSection title="Tools & Deployment" skills={toolsSkills} />
      </div>
    </section>
  );
}
