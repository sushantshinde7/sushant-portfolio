import { motion } from "framer-motion";
import "../styles/About.css";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <section id="about" className="about-container section">
      <div className="section-inner about-inner">
        <motion.div
          className="about-box"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left visual block */}
          <motion.div
            className="about-visual"
            aria-hidden
            variants={childVariants}
          />

          {/* Right content */}
          <motion.div
            className="about-content"
            variants={childVariants}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}