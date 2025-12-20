import "../styles/Contact.css";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section container">
      <div className="division"></div>

      <div className="content-text">
        <h2>Contact</h2>
        <p>
          Open to conversations, collaboration, and opportunities where good
          design and thoughtful frontend work matter.
        </p>
      </div>

      <div className="contact-card">
        <a
          href="mailto:communitypro47@gmail.com"
          className="contact-primary"
        >
          <Mail size={20} />
          <span>sushantshinde2024@gmail.com</span>
        </a>

        <div className="contact-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
