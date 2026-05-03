import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import LazyImage from "../components/LazyImage";
import { projects as projectList } from "../lib/projects";

const getProjectImageSources = (project) => {
  if (Array.isArray(project.images) && project.images.length > 0) {
    return project.images;
  }

  if (Array.isArray(project.coverImage)) {
    return project.coverImage;
  }

  return project.coverImage ? [project.coverImage] : [];
};

const ProjectCard = memo(function ProjectCard({ project, onOpen }) {
  const imageSources = useMemo(() => getProjectImageSources(project), [project]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [imageSources]);

  useEffect(() => {
    if (imageSources.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      setCurrentImageIndex((previousIndex) => (previousIndex + 1) % imageSources.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [imageSources]);

  useEffect(() => {
    if (imageSources.length <= 1) {
      return;
    }

    const nextImageIndex = (currentImageIndex + 1) % imageSources.length;
    const nextImageSource = imageSources[nextImageIndex];

    if (!nextImageSource) {
      return;
    }

    const nextImage = new window.Image();
    nextImage.src = nextImageSource;
  }, [currentImageIndex, imageSources]);

  const preview =
    imageSources[currentImageIndex] || project.coverImage?.[0] || project.coverImage;

  return (
    <article className="surface-card flex h-full flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
      <div className="relative h-56 overflow-hidden border-b border-[var(--line)] bg-[#0f1620] sm:h-64">
        <LazyImage
          key={preview}
          src={preview}
          alt={project.imageAlt || project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
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
  const selectedProjectImages = useMemo(
    () => (selectedProject ? getProjectImageSources(selectedProject) : []),
    [selectedProject]
  );
  const [selectedProjectImageIndex, setSelectedProjectImageIndex] = useState(0);

  const handleOpenProject = useCallback((projectId) => {
    setSelectedProjectId(projectId);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  useEffect(() => {
    setSelectedProjectImageIndex(0);
  }, [selectedProjectId]);

  useEffect(() => {
    if (selectedProjectImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      setSelectedProjectImageIndex((previousIndex) => (
        previousIndex + 1
      ) % selectedProjectImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [selectedProjectImages]);

  useEffect(() => {
    if (selectedProjectImages.length <= 1) {
      return;
    }

    const nextImageIndex = (selectedProjectImageIndex + 1) % selectedProjectImages.length;
    const nextImageSource = selectedProjectImages[nextImageIndex];

    if (!nextImageSource) {
      return;
    }

    const nextImage = new window.Image();
    nextImage.src = nextImageSource;
  }, [selectedProjectImageIndex, selectedProjectImages]);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.classList.add("project-modal-open");
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProjectId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("project-modal-open");
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
          className="fixed inset-0 z-50 overflow-y-auto bg-[rgba(29,20,13,0.82)] p-3 sm:p-4 md:p-6 sm:backdrop-blur-md"
          onClick={handleCloseProject}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="surface-card relative mx-auto my-auto w-full max-w-5xl overflow-hidden rounded-[1.35rem] sm:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseProject}
              className="absolute right-3 top-3 z-20 rounded-full border border-[var(--line)] bg-[rgba(15,22,32,0.92)] p-2 text-[var(--text)] shadow-[0_10px_30px_rgba(0,0,0,0.24)] sm:right-4 sm:top-4"
              aria-label="Close project details"
            >
              <FiX />
            </button>
            <div className="grid max-h-[calc(100dvh-1.5rem)] min-h-0 gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] sm:max-h-[calc(100dvh-2rem)] lg:max-h-[min(calc(100dvh-3rem),52rem)]">
              <div className="relative min-h-[14rem] max-h-[34vh] overflow-hidden border-b border-[var(--line)] bg-[#0f1620] sm:min-h-[18rem] sm:max-h-[38vh] lg:min-h-0 lg:max-h-none lg:border-b-0 lg:border-r">
                <LazyImage
                  key={selectedProjectImages[selectedProjectImageIndex]}
                  src={selectedProjectImages[selectedProjectImageIndex]}
                  alt={selectedProject.imageAlt || selectedProject.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out"
                  wrapperClassName="h-full w-full"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="min-h-0 overflow-y-auto p-5 sm:p-8">
                <p className="section-kicker">Detailed View</p>
                <h3
                  id="project-modal-title"
                  className="heading-display max-w-[12ch] text-[2.6rem] leading-[0.92] sm:text-[3.4rem] lg:text-5xl"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
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
