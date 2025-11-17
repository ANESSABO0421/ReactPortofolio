import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects as projectList } from "../lib/projects";

const generateStars = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 6 + 4,
  }));

const ProjectCard = React.memo(
  ({ project, index, imgIndex, onOpen, prefersReducedMotion }) => {
    const imageSrc = project.images[imgIndex] || project.coverImage;
    const imageAlt = project.imageAlt || `${project.title} preview`;

    return (
      <motion.article
        role="button"
        tabIndex={0}
        aria-label={`Open detailed view for ${project.title}`}
        onClick={() => onOpen(project.id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen(project.id);
          }
        }}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
        className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] backdrop-blur-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
      >
        <div className="relative h-40 w-full overflow-hidden sm:h-48 md:h-56 lg:h-64">
          {imageSrc ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={`${project.id}-${imgIndex}`}
                src={imageSrc}
                alt={imageAlt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={index === 0 ? "high" : "auto"}
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              />
            </AnimatePresence>
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-5 text-gray-300">
          <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-amber-400 sm:text-xl md:text-2xl">
            {project.title}
          </h3>

          <p className="mb-3 text-xs text-gray-400 sm:text-sm md:text-base line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-700 bg-[#161616] px-3 py-1 text-[10px] text-gray-300 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs hover:text-white sm:text-sm"
              onClick={(event) => event.stopPropagation()}
              aria-label={`View live demo for ${project.title}`}
            >
              <FiExternalLink aria-hidden="true" /> Demo
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs hover:text-white sm:text-sm"
              onClick={(event) => event.stopPropagation()}
              aria-label={`Open GitHub repository for ${project.title}`}
            >
              <FiGithub aria-hidden="true" /> Repo
            </a>
          </div>
        </div>
      </motion.article>
    );
  }
);

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  const projectData = projectList;
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardIndexes, setCardIndexes] = useState(() =>
    projectData.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {})
  );
  const stars = useMemo(() => generateStars(), []);

  const selectedProject = useMemo(
    () => projectData.find((project) => project.id === selectedProjectId) ?? null,
    [projectData, selectedProjectId]
  );

  const openModal = useCallback((id) => {
    setSelectedProjectId(id);
    setCurrentImageIndex(0);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [selectedProjectId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndexes((prev) =>
        projectData.reduce((acc, project) => {
          const length = project.images.length || (project.coverImage ? 1 : 0);
          acc[project.id] =
            length > 0 ? ((prev[project.id] || 0) + 1) % length : 0;
          return acc;
        }, {})
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [projectData]);

  useEffect(() => {
    if (!selectedProject) return;
    const totalImages =
      selectedProject.images.length || (selectedProject.coverImage ? 1 : 0);
    if (currentImageIndex >= totalImages) {
      setCurrentImageIndex(0);
    }
  }, [currentImageIndex, selectedProject]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0d0d0d] py-20 px-4 sm:px-8 md:px-16"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.1]">
        <div
          className="absolute top-1/2 left-1/2 h-[200vh] w-[200vw] -translate-x-1/2 -translate-y-1/2 -rotate-[12deg]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            animation: prefersReducedMotion ? "none" : "gridMovement 160s linear infinite",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white star-float"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: prefersReducedMotion ? "none" : `starFloat ${star.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes gridMovement {
            0% { transform: translate(-50%, -50%) rotate(-12deg) translate(0,0); }
            100% { transform: translate(-50%, -50%) rotate(-12deg) translate(-80rem, 80rem); }
          }
        `}
      </style>

      <motion.div
        className="relative z-10 mb-12 text-center sm:mb-16"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1
          id="projects-heading"
          className="bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-6xl"
        >
          WORKS
        </h1>
        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-gray-400 sm:text-xs">
          Crafted with precision
        </p>
      </motion.div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            imgIndex={cardIndexes[project.id] || 0}
            onOpen={openModal}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              onClick={(event) => event.stopPropagation()}
              initial={prefersReducedMotion ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-black/70 shadow-xl"
            >
              <div className="h-48 w-full sm:h-64 md:h-80">
                <img
                  src={
                    selectedProject.images[currentImageIndex] ||
                    selectedProject.coverImage
                  }
                  alt={selectedProject.imageAlt || selectedProject.title}
                  loading="lazy"
                  decoding="async"
                  fetchpriority="auto"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5 text-gray-300 sm:p-7 md:p-8">
                <h2
                  id="project-modal-title"
                  className="mb-3 text-xl font-bold text-white sm:text-2xl md:text-3xl"
                >
                  {selectedProject.title}
                </h2>

                <p
                  id="project-modal-description"
                  className="mb-5 text-sm leading-relaxed text-gray-400 sm:text-base"
                >
                  {selectedProject.detailedDescription}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-700 bg-[#1a1a1a] px-3 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-sm text-white transition hover:bg-blue-500 sm:py-3"
                  >
                    <FiExternalLink aria-hidden="true" /> Demo
                  </a>

                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-800 py-2 text-sm text-gray-200 transition hover:bg-gray-700 sm:py-3"
                  >
                    <FiGithub aria-hidden="true" /> Repo
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close project details"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
