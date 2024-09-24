import React, {useRef} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import MoreText from "./components/MoreText";

import './index.css'; 

function App() {
  const contactSectionRef = useRef(null); 

  
  return (
    <>
      <Router>
        <NavBar contactSectionRef={contactSectionRef} />
        <Hero />
        <Technologies />
        <Projects />
        <MoreText />
        <About />
        
        <div ref={contactSectionRef}>
          <Contact />
        </div>
      </Router>
    </>
  )
}

export default App
