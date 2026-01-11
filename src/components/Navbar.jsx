import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import "./Navbar.css";

export default function Navbar() {
  const { theme, mode, toggle, setAuto } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header className="navWrap">
      <nav className="navBar">
        <NavLink to="/" className="brand">
          Joseph Adu
        </NavLink>

        <button className="burger" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <span />
          <span />
        </button>

        <div className={`navLinks ${open ? "open" : ""}`}>
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/about">About</NavLink>
          <NavLink className="link" to="/projects">Projects</NavLink>
          <NavLink className="link" to="/experience">Experience</NavLink>
          <NavLink className="link" to="/resume">Resume</NavLink>
          <NavLink className="link" to="/contact">Contact</NavLink>

          <div className="actions">
            <button className="btn ghost" onClick={toggle}>
              {mode === "auto" ? `Auto (${theme})` : theme === "dark" ? "Dark" : "Light"}
            </button>
            <button className="btn ghost" onClick={setAuto}>
              Auto
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
