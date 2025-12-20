import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-shell">
      <div className="content-container">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}


export default App;
