import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
