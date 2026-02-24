import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-container section">
      <div className="section-inner about-inner">
        <div className="about-box">
          {/* Left visual block */}
          <div className="about-visual" aria-hidden />

          {/* Right content */}
          <div className="about-content">
            <h2 className="about-title">About Me</h2>

            <p>
              I’m a Computer Engineering graduate and front-end developer
              focused on building responsive, user-centric web applications with
              React and modern JavaScript. I value clean component architecture,
              maintainable code, and scalable UI systems that remain consistent
              as applications grow.
            </p>

            <p>
              Through projects like productivity apps, modular PWAs, and
              API-driven interfaces, I’ve gained experience with state
              management, reusable components, authentication, and offline
              support. I focus on clean layouts, clear interaction feedback, and
              performance so applications feel smooth and dependable.
            </p>

            <p>
              I’m currently strengthening my backend fundamentals while
              deepening my React expertise. I’m seeking an opportunity to
              contribute to real-world products, collaborate within a
              development team, and grow into a strong front-end engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
