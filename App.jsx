import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ThemeProvider from "./src/components/ThemeProvider";
import Navbar from "./src/components/Navbar";

import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Projects from "./src/pages/Projects";
import Experience from "./src/pages/Experience";
import Resume from "./src/pages/Resume";
import Contact from "./src/pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}
