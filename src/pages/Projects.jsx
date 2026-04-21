import React, { useMemo, useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { projects as projectList } from "../lib/projects";

const Projects = () => {
  const projects = useMemo(() => projectList, []);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;

  return (
    <section id="projects" className="portfolio-section section-anchor-offset">
      <div className="portfolio-container">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Selected Works</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-lead">
            The cards are now arranged in a lighter editorial style inspired by the
            reference site, while the project data remains your own.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const preview = project.images?.[0] || project.coverImage?.[0] || project.coverImage;

            return (
              <article
                key={project.id}
                className="surface-card flex h-full flex-col overflow-hidden rounded-[2rem]"
              >
                <div className="relative h-64 overflow-hidden border-b border-[var(--line)] bg-[#0f1620]">
                  {preview ? (
                    <img
                      src={preview}
                      alt={project.imageAlt || project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="muted-label mb-3">Project</p>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[var(--text)]">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">
                    {project.shortDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="pill-chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      className="soft-button primary"
                    >
                      View Details
                    </button>
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soft-button secondary"
                      >
                        <FiExternalLink />
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(29,20,13,0.5)] p-4 backdrop-blur-md"
          onClick={() => setSelectedProjectId(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="surface-card relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProjectId(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-[var(--line)] bg-[var(--panel-strong)] p-2 text-[var(--text)]"
              aria-label="Close project details"
            >
              <FiX />
            </button>
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="min-h-[320px] border-b border-[var(--line)] bg-[#0f1620] lg:min-h-full lg:border-b-0 lg:border-r">
                <img
                  src={
                    selectedProject.images?.[0] ||
                    selectedProject.coverImage?.[0] ||
                    selectedProject.coverImage
                  }
                  alt={selectedProject.imageAlt || selectedProject.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="section-kicker">Detailed View</p>
                <h3 id="project-modal-title" className="heading-display text-5xl leading-none">
                  {selectedProject.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {selectedProject.detailedDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="pill-chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {selectedProject.demoLink ? (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soft-button primary"
                    >
                      <FiExternalLink />
                      Visit Demo
                    </a>
                  ) : null}
                  {selectedProject.githubLink ? (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soft-button secondary"
                    >
                      <FiGithub />
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Projects;
