import React from "react";
import Container from "../components/Container";

export default function Contact() {
  return (
    <Container title="Contact" subtitle="Get in touch">
      <div style={{ padding: "18px 0", maxWidth: 780, margin: "0 auto" }}>
        <p style={{ color: "rgba(255,255,255,0.9)" }}>
          Email: hello@example.com
        </p>
      </div>
    </Container>
  );
}
