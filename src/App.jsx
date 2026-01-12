import React, { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import initParallax from "./components/Parallax";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
  initParallax();
}, []);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
    
      <div className="parallax-bg" />
      
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
}
