import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section container">
      <div className="division"></div>

      <div className="content-text">
        <h2>Skills</h2>
        <p>
          A frontend-focused skillset shaped by design thinking, consistency,
          and real-world UI decisions.
        </p>
      </div>

      <div className="skills-grid">
        {/* Focus */}
        <div className="skill-card emphasis">
          <h3>Frontend Focus</h3>
          <p>
            I build clean, responsive interfaces with attention to spacing,
            hierarchy, and interaction. I prioritize clarity, usability, and
            visual balance over unnecessary complexity.
          </p>
        </div>

        {/* Core Stack */}
        <div className="skill-card">
          <h3>Core Stack</h3>
          <ul>
            <li>React & modern JavaScript</li>
            <li>Semantic HTML & scalable CSS</li>
            <li>Component-driven UI architecture</li>
            <li>Design-to-code workflows</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools I Rely On</h3>
          <ul>
            <li>Git & GitHub for version control</li>
            <li>VS Code for daily development</li>
            <li>Figma for layout & design decisions</li>
            <li>Vite, npm, and modern build tooling</li>
          </ul>
        </div>

        {/* Growth */}
        <div className="skill-card subtle">
          <h3>Currently Exploring</h3>
          <p>
            Deepening my understanding of backend fundamentals, APIs, and
            full-stack workflows to build more complete products.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
