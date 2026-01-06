import "../styles/Skills.css";
import { motion } from "framer-motion";
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
  SiVite,
  SiFigma,
  SiVercel,
  SiGithubpages,
} from "react-icons/si";

/* ---------------- data ---------------- */

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
  { name: "Vite", icon: SiVite },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
  { name: "GitHub Pages", icon: SiGithubpages },
];

/* ---------------- motion ---------------- */

const sectionFade = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ---------------- components ---------------- */

function SkillSection({ title, skills }) {
  return (
    <motion.div
      className="skills-section-block"
      variants={sectionFade}
    >
      <h3 className="skills-title">{title}</h3>

      <div className="skills-grid">
        {skills.map(({ name, icon: Icon }) => (
          <div className="skill-item" key={name}>
            <Icon className="skill-icon" />
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-wrapper container section">
      <motion.header
        className="skills-header"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-heading">Skills</h2>
        <p className="section-subtitle">
          Tools and technologies I use to build modern web interfaces.
        </p>
      </motion.header>

      <motion.div
        className="skills-sections"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Web Programming" skills={webProgrammingSkills} />
        <SkillSection title="Tools & Deployment" skills={toolsSkills} />
      </motion.div>
    </section>
  );
}
