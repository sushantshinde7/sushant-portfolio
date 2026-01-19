import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuActive(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      document
        .querySelector(".navbar")
        ?.classList.toggle("scrolled", window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
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

  const toggleMenu = () => setMenuActive((prev) => !prev);
  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-inner">
        <a href="#" className="logo">
          <svg
            viewBox="0 0 1254 836"
            className="logo-svg"
            aria-label="Logo"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 745.66 470.17 C742.56,474.75 738.51,480.24 736.67,482.36 L 733.32 486.22 L 732.68 477.29 C732.33,472.38 731.13,465.38 730.00,461.73 C727.14,452.48 719.31,441.21 710.66,433.89 C694.02,419.81 675.92,411.48 617.50,391.00 C569.81,374.29 557.88,369.13 544.82,359.58 C530.02,348.76 524.01,337.59 523.26,319.50 C522.49,300.93 526.37,289.85 537.58,278.64 C546.57,269.65 560.01,263.28 579.50,258.76 C588.01,256.79 592.01,256.66 652.33,256.27 L 716.17 255.86 L 711.89 261.68 C698.33,280.14 684.95,297.79 683.80,298.75 C682.90,299.50 669.93,299.96 643.49,300.20 C608.29,300.51 604.09,300.72 600.23,302.39 C591.57,306.13 589.51,313.10 595.17,319.54 C600.31,325.39 616.04,332.43 654.50,346.06 C686.66,357.47 714.39,370.03 727.80,379.28 C743.08,389.82 754.55,405.56 757.12,419.50 C760.16,436.08 755.87,455.08 745.66,470.17 Z
                   M 647.12 531.99 C632.35,533.39 536.00,533.34 536.00,531.93 C536.00,530.70 538.71,526.63 551.78,508.25 L 561.20 495.00 L 595.35 494.98 C614.13,494.96 631.26,494.55 633.40,494.05 C639.00,492.75 641.49,489.98 640.30,486.39 C638.94,482.31 630.26,477.95 597.50,464.89 C565.36,452.07 547.12,443.47 535.00,435.41 C506.42,416.41 495.03,397.54 495.01,369.19 C495.00,358.82 496.70,345.00 497.98,345.00 C498.36,345.00 500.54,348.78 502.83,353.39 C508.20,364.22 518.11,374.94 530.29,383.09 C546.70,394.06 559.41,399.52 610.50,417.50 C668.70,437.98 682.65,444.39 693.63,455.69 C709.23,471.73 708.50,498.84 692.04,515.00 C682.15,524.71 668.19,529.99 647.12,531.99 Z
                   M 793.38 530.81 C788.80,532.13 738.97,532.54 739.04,531.25 C739.06,530.84 769.88,499.67 807.52,462.00 L 875.96 393.50 L 738.51 256.00 L 764.39 256.00 C781.99,256.00 791.58,256.39 794.38,257.23 C797.87,258.28 808.01,267.99 862.29,322.30 C897.39,357.41 926.53,387.26 927.05,388.64 C928.67,392.88 928.12,396.43 925.13,401.05 C923.55,403.50 894.19,433.43 859.88,467.56 C806.48,520.69 796.91,529.79 793.38,530.81 Z
                   M 516.20 531.47 C515.24,532.42 465.60,531.85 462.00,530.84 C459.26,530.07 444.72,516.10 394.68,466.18 C359.58,431.15 330.22,401.28 329.43,399.80 C327.73,396.58 327.57,390.72 329.10,387.68 C330.70,384.52 454.93,260.19 458.50,258.19 C461.07,256.74 465.47,256.46 489.50,256.20 L 517.50 255.89 L 449.00 324.45 C411.33,362.16 380.38,393.37 380.23,393.81 C380.08,394.25 410.74,425.28 448.35,462.77 C485.96,500.26 516.50,531.17 516.20,531.47 Z"
              fill="currentColor"
            />
          </svg>
        </a>

        {/* ===== Navigation menu ===== */}
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
              href="#about"
              onClick={() => setMenuActive(false)}
            >
              ABOUT
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
          </li>

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
            <a className="nav-link btn btn-primary" href="#" target="_blank">
              RESUME <ArrowRight size={16} />
            </a>
          </li>
        </ul>

        {/* ===== Right controls: theme toggle + hamburger ===== */}
        <div className="nav-controls">
          {/* === Framer Motion Toggle === */}
          <motion.div
            className="toggle-pill"
            onClick={toggleTheme}
            animate={{ backgroundColor: darkTheme ? "#3b82f6" : "#e5e7eb" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="toggle-knob"
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {darkTheme ? (
                /* Moon */
                <svg
                  className="toggle-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3.9 5 5 0 0 0 21 11.79z" />
                </svg>
              ) : (
                /* Sun */
                <svg
                  className="toggle-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </motion.div>
          </motion.div>

          <div
            className={`hamburger ${menuActive ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
