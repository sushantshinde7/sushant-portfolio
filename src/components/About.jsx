import "../styles/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        {/* Photo */}
        <div className="about-photo">
          <img src="/me.jpg" alt="Sushant Shinde" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p>
            I’m a Computer Engineering graduate and front-end developer focused
            on building clean, scalable, and user-friendly interfaces.
          </p>

          <p>
            I enjoy working at the intersection of design and engineering —
            structuring components thoughtfully, refining UX details, and
            optimizing performance.
          </p>

          <p>
            Currently, I’m expanding into full-stack development while deepening
            my expertise in React, UI architecture, and modern front-end
            workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
