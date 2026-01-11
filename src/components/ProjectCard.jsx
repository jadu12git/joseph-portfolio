import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-thumb">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-body">
        <div className="project-top">
          <h3 className="project-title">{project.title}</h3>
          {project.badge && <span className="badge">{project.badge}</span>}
        </div>
        <p className="project-desc">{project.description}</p>

        <div className="chips">
          {project.tags?.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.live && (
            <a className="btn" href={project.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {project.github && (
            <a className="btn ghost" href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
