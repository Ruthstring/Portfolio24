import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import './index.css'; 

function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Hero />
      </Router>
    </>
  )
}

export default App
