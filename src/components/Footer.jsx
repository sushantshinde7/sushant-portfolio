import { Github, Linkedin, Heart } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left */}
        <div className="footer-left">
          <p className="footer-line">
            Designed and built with{" "}
            <Heart size={14} className="footer-heart" /> by Sushant Shinde
          </p>
          <p className="footer-copy">
            © {year} Sushant Shinde. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="footer-right">
          <a
            href="https://github.com/sushantshinde7"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/sushantshinde7/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


