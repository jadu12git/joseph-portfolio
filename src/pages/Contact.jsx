import React from "react";
import Container from "../components/Container";

export default function Contact() {
  return (
    <Container title="Contact" subtitle="Let’s connect">
      <div className="contact-grid">
        <a className="contact-card" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <div className="contact-title">LinkedIn</div>
          <div className="contact-value">Open profile</div>
        </a>

        <a className="contact-card" href="mailto:your-email@example.com">
          <div className="contact-title">Email</div>
          <div className="contact-value">your-email@example.com</div>
        </a>

        <a className="contact-card" href="tel:+10000000000">
          <div className="contact-title">Phone</div>
          <div className="contact-value">+1 (000) 000-0000</div>
        </a>

        <a className="contact-card" href="https://instagram.com" target="_blank" rel="noreferrer">
          <div className="contact-title">Instagram</div>
          <div className="contact-value">@yourhandle</div>
        </a>
      </div>
    </Container>
  );
}
