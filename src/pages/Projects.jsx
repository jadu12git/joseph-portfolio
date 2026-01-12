import React from "react";
import { projects } from "../data/Projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <main className="page">
      <section className="glass">
        <h1 className="projects-title">
          My <span>Projects</span>
        </h1>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-thumb">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="github-link"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="live-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
