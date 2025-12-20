import "../styles/Hero.css";

function Hero() {
  return (
    <header id="hero">
      <section className="hero-container">
        <div className="hero-left">
          <img
            className="profile-image"
            src="/assets/profile-image.svg"
            alt="Sushant Shinde Profile"
          />
        </div>

        <div className="hero-right">
          <h1>Hello, I'm Sushant</h1>
          <div className="hero-text-block">
            <h2>Front-End Developer</h2>
            <p>
              I create clean, responsive interfaces with a focus on clarity and purpose. I enjoy making thoughtful UI decisions that improve usability and help products feel polished and modern.
            </p>
          </div>

          <a
            className="btn btn-primary"
            href="#contact"
          >
            Connect With Me
          </a>
        </div>
      </section>
    </header>
  );
}


export default Hero;
