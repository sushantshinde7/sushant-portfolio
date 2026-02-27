import { motion } from "framer-motion";
import "../styles/About.css";

/* ---------------- motion (aligned with Skills) ---------------- */

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
    transition: { staggerChildren: 0.1 },
  },
};

export default function About() {
  return (
    <section id="about" className="about-container section">
      <div className="section-inner about-inner">
        <motion.div
          className="about-box"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -6 }}
          transition={{ type: "tween", duration: 0.25 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left visual block */}
          <motion.div
            className="about-visual"
            aria-hidden
            variants={sectionFade}
          />

          {/* Right content */}
          <motion.div
            className="about-content"
            variants={sectionFade}
          >
            <h2 className="about-title">About Me</h2>

            <p>
              I’m a Computer Engineering graduate and front-end developer
              focused on building responsive, user-centric web applications
              using React and modern JavaScript. I value clean component
              architecture, scalable UI systems, and writing maintainable code
              that supports long-term product growth.
            </p>

            <p>
              Through projects including productivity tools, modular PWAs,
              and API-driven platforms, I’ve worked with state management,
              authentication flows, reusable architecture, and offline
              capabilities. I pay close attention to layout structure,
              interaction feedback, and performance to ensure applications
              feel smooth, reliable, and intuitive.
            </p>

            <p>
              I’m currently deepening my React expertise while strengthening
              backend fundamentals to better understand full-stack systems.
              I’m seeking an opportunity to contribute to real-world
              products, collaborate within a development team, and continue
              growing into a strong front-end engineer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}