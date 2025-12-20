import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <a href="mailto:sushantshinde2024@gmail.com">
          sushantshinde2024@gmail.com
        </a>
        <div className="social">
          <a href="#" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={22} />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook size={22} />
          </a>
                  
        </div>
        <p>© {year} Sushant Shinde. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

