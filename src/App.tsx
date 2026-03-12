import About from "./components/About";
import Contact from "./components/Contact";
import Differentials from "./components/Differentials";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Differentials />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
