import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const navbarRef = useRef(null);

  // Load initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";
    setDarkTheme(isDark);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Update theme
  useEffect(() => {
    const theme = darkTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkTheme]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuActive(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuActive &&
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuActive]);

  const toggleMenu = () => setMenuActive(!menuActive);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-inner">
        <h1 id="logo">
          <a href="#">
            <img src="src/assets/favicon-32x32.png" alt="Logo" />
          </a>
        </h1>

        <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
          <li>
            <a
              className="nav-link"
              href="#hero"
              onClick={() => setMenuActive(false)}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#skills"
              onClick={() => setMenuActive(false)}
            >
              SKILLS
            </a>
          </li>{" "}
          {/* NEW */}
          <li>
            <a
              className="nav-link"
              href="#projects"
              onClick={() => setMenuActive(false)}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#contact"
              onClick={() => setMenuActive(false)}
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              className="nav-link btn btn-primary"
              href="#"
              target="_blank"
              onClick={() => setMenuActive(false)}
            >
              RESUME <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <div className="theme-switch">
              <input
                id="theme-toggle"
                type="checkbox"
                checked={darkTheme}
                onChange={toggleTheme}
              />
              <label htmlFor="theme-toggle" className="toggle-icons">
                <img className="moon" src="/assets/moon.svg" />
                <img className="sun" src="/assets/sun.svg" />
              </label>
            </div>
          </li>
        </ul>

        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
