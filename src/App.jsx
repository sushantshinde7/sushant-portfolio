import { useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GoToTop from "./components/GoToTop";

function App() {
  const footerRef = useRef(null); // 👈 REQUIRED

  return (
    <div className="app-shell">
      <Navbar />

      <div className="content-container">
        <div className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>

        {/* 👇 pass ref here */}
        <GoToTop footerRef={footerRef} />
      </div>

      {/* 👇 attach ref here */}
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;