import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page">
      <section className="glass hero">
        <h1>
          Hello, I&apos;m <span>Joseph Adu</span>.
        </h1>

        <p>
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

