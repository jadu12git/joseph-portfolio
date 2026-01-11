import React from "react";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/Projects";

export default function Projects() {
  return (
    <Container title="Projects" subtitle="Things I’ve built (and I’m still building)">
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Container>
  );
}
