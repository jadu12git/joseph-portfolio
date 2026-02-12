import React from "react";
import Container from "../components/Container";
import resumePDF from "../assets/resume3.pdf";

export default function Resume() {
  return (
    <Container
      title="Resume"
      subtitle="View or download my resume"
    >
      <div className="resume-wrap">
        <iframe
          src={resumePDF}
          title="Joseph Adu Resume"
          className="resume-frame"
        />

        <div className="resume-actions">
          <a
            href={resumePDF}
            download
            className="btn"
          >
            Download PDF
          </a>

          <a
            href={resumePDF}
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            Open in New Tab
          </a>
        </div>
      </div>
    </Container>
  );
}
