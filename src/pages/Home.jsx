import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page hero-page">
      <section className="glass hero">
        <p className="kicker">Hello, I’m Joseph Adu</p>
        <h1 className="hero-title">
          Joseph <span>Adu</span>
        </h1>

        <p className="hero-text">
          A Computer Science student and entrepreneur passionate about building technology,
          creating businesses, and inspiring the next generation of thinkers.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn">
            Explore My Projects
          </Link>
          <Link to="/experience" className="btn ghost">
            My Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
