import React, { useContext, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";

export default function Navbar() {
  const { theme, mode, setAuto, toggleManual } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => setOpen(false), [location.pathname]);

  const themeLabel = useMemo(() => {
    if (mode === "auto") return `Auto (${theme})`;
    return theme === "dark" ? "Dark" : "Light";
  }, [mode, theme]);

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <div className="nav-left">
          <NavLink to="/" className="brand">
            Joseph Adu
          </NavLink>
        </div>

        <button className="nav-burger" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/experience" className="nav-link">Experience</NavLink>
          <NavLink to="/resume" className="nav-link">Resume</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>

          <div className="nav-actions">
            <button className="btn ghost" onClick={toggleManual} title="Toggle light/dark">
              {themeLabel}
            </button>
            <button className="btn ghost" onClick={setAuto} title="Use time-based theme">
              Auto
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
