import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import LazyImage from "../components/LazyImage";
import { projects as projectList } from "../lib/projects";

const ProjectCard = memo(function ProjectCard({ project, onOpen }) {
  const preview = project.images?.[0] || project.coverImage?.[0] || project.coverImage;

  return (
    <article className="surface-card flex h-full flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
      <div className="relative h-56 overflow-hidden border-b border-[var(--line)] bg-[#0f1620] sm:h-64">
        <LazyImage
          src={preview}
          alt={project.imageAlt || project.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
          wrapperClassName="h-full w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
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
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onOpen(project.id)}
            className="soft-button primary w-full sm:w-auto"
          >
            View Details
          </button>
          {project.demoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-button secondary w-full sm:w-auto"
            >
              <FiExternalLink />
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
});

const Projects = () => {
  const projects = useMemo(() => projectList, []);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [projects, selectedProjectId]
  );

  const handleOpenProject = useCallback((projectId) => {
    setSelectedProjectId(projectId);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProjectId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="portfolio-section section-anchor-offset">
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={handleOpenProject} />
          ))}
        </div>
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(29,20,13,0.78)] p-3 sm:p-4 sm:backdrop-blur-md"
          onClick={handleCloseProject}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="surface-card relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[1.5rem] sm:max-h-[90vh] sm:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseProject}
              className="absolute right-3 top-3 z-10 rounded-full border border-[var(--line)] bg-[var(--panel-strong)] p-2 text-[var(--text)] sm:right-4 sm:top-4"
              aria-label="Close project details"
            >
              <FiX />
            </button>
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="min-h-[320px] border-b border-[var(--line)] bg-[#0f1620] lg:min-h-full lg:border-b-0 lg:border-r">
                <LazyImage
                  src={
                    selectedProject.images?.[0] ||
                    selectedProject.coverImage?.[0] ||
                    selectedProject.coverImage
                  }
                  alt={selectedProject.imageAlt || selectedProject.title}
                  className="h-full w-full object-cover object-top"
                  wrapperClassName="h-full w-full"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 sm:p-8">
                <p className="section-kicker">Detailed View</p>
                <h3 id="project-modal-title" className="heading-display text-4xl leading-none sm:text-5xl">
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
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {selectedProject.demoLink ? (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soft-button primary w-full sm:w-auto"
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
                      className="soft-button secondary w-full sm:w-auto"
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

export default memo(Projects);
