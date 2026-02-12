import React from "react";
import Container from "../components/Container";

export default function Home() {
  return (
    <Container title="Hello" subtitle="Welcome to my portfolio">
      <div style={{ padding: "24px 0" }}>
        <p style={{ maxWidth: 780, margin: "0 auto", color: "rgba(255,255,255,0.9)" }}>
          I'm a builder focused on thoughtful UX and practical systems. Browse my projects
          and experience to see what I've shipped.
        </p>
      </div>
    </Container>
  );
}
