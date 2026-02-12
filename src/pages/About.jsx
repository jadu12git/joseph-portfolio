import React from "react";
import Container from "../components/Container";

export default function About() {
  return (
    <Container title="About" subtitle="A bit about me">
      <div style={{ padding: "18px 0", maxWidth: 780, margin: "0 auto" }}>
        <p style={{ color: "rgba(255,255,255,0.9)" }}>
          I build web experiences and experiment with multimodal AI systems. I enjoy
          designing pragmatic solutions and polishing small interactions.
        </p>
      </div>
    </Container>
  );
}
