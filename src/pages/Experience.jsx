import React from "react";
import Container from "../components/Container";

const items = [
  {
    title: "Computer Science Student",
    org: "Grambling State University",
    time: "2025 – Present",
    bullets: [
      "Building strong foundations in DSA, software engineering, and system design.",
      "Developing portfolio projects with real-world UI and practical features.",
    ],
  },
  {
    title: "Barber (Unlicensed)",
    org: "Independent",
    time: "Ongoing",
    bullets: [
      "Delivering high-quality grooming experiences with consistency and attention to detail.",
      "Learning the business side: branding, customer retention, and scheduling flow.",
    ],
  },
  {
    title: "Content Creator",
    org: "YouTube",
    time: "Ongoing",
    bullets: [
      "Creating educational and motivational content for young people.",
      "Practicing storytelling, clarity, and consistency — the same skills great builders need.",
    ],
  },
];

export default function Experience() {
  return (
    <Container title="Experience" subtitle="What I do and what I’m growing into">
      <div className="stack">
        {items.map((x) => (
          <div className="card" key={x.title}>
            <div className="card-top">
              <div>
                <h3 className="card-title">{x.title}</h3>
                <p className="card-sub">{x.org}</p>
              </div>
              <span className="pill">{x.time}</span>
            </div>
            <ul className="list">
              {x.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
