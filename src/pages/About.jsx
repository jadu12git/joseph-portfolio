import React from "react";
import Container from "../components/Container";

const skills = [
  "JavaScript", "React", "HTML/CSS", "Python", "Go",
  "Firebase", "SQL", "Git/GitHub", "UI/UX", "APIs",
];

export default function About() {
  return (
    <Container
      title="About Me"
      subtitle="Tech • Business • Creativity"
    >
      <p className="prose">
        My name is Joseph Adu. I’m a Computer Science student, entrepreneur, barber, and a creator who
        is passionate about building technology, launching businesses, and inspiring young people through
        innovation and content.
      </p>

      <p className="prose">
        I believe in staying hungry, learning fast, and building consistently — whether it’s a software project,
        a clothing brand, or a new business venture. My dream is to become a world-class entrepreneur creating
        solutions that help Africa and the world rise.
      </p>

      <p className="prose">
        Every day, I’m combining my love for tech, creativity, and business to build a future I can be proud of.
      </p>

      <div className="section">
        <h2 className="h2">Skills</h2>
        <div className="chips big">
          {skills.map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </Container>
  );
}
