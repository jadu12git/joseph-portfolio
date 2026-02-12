import React from "react";
import Container from "../components/Container";
import "./Pages.css";

export default function Experience() {
  return (
    <Container title="Experience" subtitle="">
      <section className="experience-page">
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3 className="experience-role">Hackathon Participant — NexHacks 2026</h3>
              <p className="experience-org">Jan 2026 · Carnegie Mellon University</p>
            </div>
            <span className="badge">Hackathon</span>
          </div>

          <h4 className="project-title">Built TokenSqueeze: Task-Aware Vision Optimization System</h4>

          <ul className="experience-list">
            <li>
              Designed and implemented a task-aware preprocessing pipeline to optimize visual
              inputs for multimodal models based on inferred user intent.
            </li>
            <li>
              Built intent classification and routing logic to select task-specific optimization
              strategies including OCR, object detection, and scene understanding.
            </li>
            <li>
              Integrated and orchestrated multimodal inference workflows using Vision LLM APIs to
              reduce token usage while preserving task-level accuracy.
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
}
