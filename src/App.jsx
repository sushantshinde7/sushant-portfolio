import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
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
      </div>
      <Footer />
    </div>
  );
}


export default App;
