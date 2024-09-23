import React, {useRef} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

import './index.css'; 

function App() {
  const contactSectionRef = useRef(null); 

const Projects = () => <div className="h-screen bg-yellow-500">Projects</div>;
const About = () => <div className="h-screen bg-purple-500">About</div>;
const Contact = () => <div className="h-screen bg-teal-500">Contact</div>;


  return (
    <>
      <Router>
        <NavBar contactSectionRef={contactSectionRef} />
        <Hero />
        <Technologies />
        <Projects />
        <About />
        <div ref={contactSectionRef}>
          <Contact />
        </div>
      </Router>
    </>
  )
}

export default App
