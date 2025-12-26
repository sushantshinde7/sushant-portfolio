import "../styles/Contact.css";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper ">
        {/* LEFT — FORM */}
        <div className="contact-form">
          <h2>Contact Me</h2>
          <p className="contact-subtext">
            Any questions, ideas, or discussions? Just drop me a message.
          </p>

          <form>
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>

            <div className="field">
              <label>Message</label>
              <textarea
                rows="4"
                placeholder="What would you like to discuss?"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          <span className="response-note">
            I usually respond within 24–48 hours.
          </span>
        </div>

        {/* RIGHT — CTA */}
        <div className="contact-cta">
          <h3>Let’s Work Together</h3>

          <p>
            Prefer reaching out directly? You can email me, connect on LinkedIn,
            or explore my work and resume below. If you think we’d make a great
            team, I’d be glad to hear from you.
          </p>

          <a
            href="mailto:sushantshinde2024@gmail.com"
            className="direct-mail"
          >
            <Mail size={18} />
            sushantshinde2024@gmail.com
          </a>

          <div className="cta-actions">
            <a href="#" className="btn btn-secondary">
              <FileText size={18} />
              Resume
            </a>

            <div className="social-links">
              <a href="#" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

