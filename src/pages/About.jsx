import React from "react";
import Container from "../components/Container";

export default function About() {
  return (
    <main className="page">
      <section className="glass about-section">
        <h1 className="about-title">
          About <span>Me</span>
        </h1>

        <p className="about-text">
          My name is <strong>Joseph Adu</strong>. I’m a Computer Science student
          entrepreneur, barber, and creator who is passionate about building
          technology, launching businesses, and inspiring young people through
          innovation and content.
        </p>

        <p className="about-text">
          I believe in staying hungry, learning fast, and building consistently,
          whether it’s a software project, a clothing brand, or a new business
          venture. My dream is to become a world-class entrepreneur creating
          solutions that help Africa and the world rise.
        </p>

        <p className="about-text">
          Every day, I’m combining my love for tech, creativity and business to
          build a future I am proud of.
        </p>

        <h2 className="skills-title">My Skills</h2>

        <div className="skills-container">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
