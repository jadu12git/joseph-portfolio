import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="page">
      <section className="glass contact-section">
        <h1 className="contact-title">
          Let’s <span>Connect</span>
        </h1>

        <p className="contact-subtitle">
          Reach out to me through any of these platforms.
        </p>

        <div className="contact-grid">
          <a
            href="https://www.linkedin.com/in/josephadukofi/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>josephadukofi</p>
          </a>

          <a
            href="mailto:josephadukofi358@gmail.com"
            className="contact-card"
          >
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>josephadukofi358@gmail.com</p>
          </a>

          <a
            href="tel:+18052592954"
            className="contact-card"
          >
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <p>+1 (805) 259-5294</p>
          </a>

          <a
            href="https://www.instagram.com/theproductivejoseph?igsh=MTIzeXVmdXM1cHIyYw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaInstagram className="contact-icon" />
            <h3>Instagram</h3>
            <p>@theproductivejoseph</p>
          </a>
        </div>
      </section>
    </main>
  );
}
