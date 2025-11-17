import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// ⭐ Responsive Star Generator
const generateStars = () =>
  Array.from({ length: 35 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 6 + 4,
  }));

// 📦 Project Card
const ProjectCard = React.memo(({ project, index, imgIndex, openModal }) => (
  <motion.div
    onClick={() => openModal(project.id)}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative rounded-2xl bg-[#0b0b0b] border border-white/10
               hover:border-white/25 backdrop-blur-lg overflow-hidden 
               hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 
               cursor-pointer flex flex-col w-full"
  >
    {/* IMAGE */}
    <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={imgIndex}
          src={project.images[imgIndex]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover 
                    transition-transform duration-700 group-hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>

    {/* CONTENT */}
    <div className="flex flex-col flex-1 p-5 text-gray-300">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 
                     group-hover:text-amber-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 line-clamp-2">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-[10px] sm:text-xs rounded-full bg-[#161616]
                       border border-gray-700 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-white/10 mt-auto">
        <a href={project.demoLink} target="_blank" onClick={(e) => e.stopPropagation()}
           className="flex items-center gap-2 text-xs sm:text-sm hover:text-white">
          <FiExternalLink /> Demo
        </a>

        <a href={project.githubLink} target="_blank" onClick={(e) => e.stopPropagation()}
           className="flex items-center gap-2 text-xs sm:text-sm hover:text-white">
          <FiGithub /> Repo
        </a>
      </div>
    </div>
  </motion.div>
));

// 🧩 MAIN Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardIndexes, setCardIndexes] = useState({});
  const stars = useMemo(() => generateStars(), []);

  const projectData = useMemo(
    () => [
      {
        id: 0,
        title: "Synapsis – NSS Management Portal",
        shortDescription:
          "Full-stack MERN NSS portal with real-time chat, multi-role access and AI insights.",
        detailedDescription:
          "A complete MERN platform featuring JWT authentication, Cloudinary, socket chats and admin dashboards.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "OpenAI API"],
        demoLink: "#",
        githubLink: "#",
        images: [],
      },
      {
        id: 1,
        title: "Lumio – Social Media Platform",
        shortDescription:
          "A MERN social media app with posts, likes, comments, OTP login & animations.",
        detailedDescription:
          "OTP, JWT, Feed UI, comments, Swiper animations.",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "#",
        images: [],
      },
      {
        id: 2,
        title: "Lumio – Social Media Platform",
        shortDescription:
          "A MERN social media app with posts, likes, comments, OTP login & animations.",
        detailedDescription:
          "OTP, JWT, Feed UI, comments, Swiper animations.",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "#",
        images: [],
      },
    ],
    []
  );

  // 🖼 Auto Cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndexes((prev) =>
        projectData.reduce((acc, p) => {
          acc[p.id] = ((prev[p.id] || 0) + 1) % (p.images.length || 1);
          return acc;
        }, {})
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [projectData]);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 sm:px-8 md:px-16 
                 flex flex-col justify-center items-center bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh]
                    -translate-x-1/2 -translate-y-1/2 -rotate-[12deg]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            animation: "gridMovement 160s linear infinite",
          }}
        />
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: star.duration, repeat: Infinity }}
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

      {/* HEADER */}
      <motion.div
        className="text-center relative z-10 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold 
                       bg-gradient-to-b from-gray-100 to-gray-500 
                       bg-clip-text text-transparent">
          WORKS
        </h1>
        <p className="mt-3 text-gray-400 text-[10px] sm:text-xs tracking-[0.25em] uppercase">
          Crafted with precision
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-6 sm:gap-8 w-full max-w-7xl relative z-10">
        {projectData.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            imgIndex={cardIndexes[p.id] || 0}
            openModal={(id) => {
              setSelectedProject(id);
              setCurrentImageIndex(0);
              document.body.style.overflow = "hidden";
            }}
          />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center 
                       justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedProject(null);
              document.body.style.overflow = "auto";
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl rounded-2xl bg-black/70 
                         border border-white/20 overflow-hidden shadow-xl"
            >
              <div className="w-full h-48 sm:h-64 md:h-80">
                <img
                  src={projectData[selectedProject].images[currentImageIndex]}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-7 md:p-8 text-gray-300">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">
                  {projectData[selectedProject].title}
                </h2>

                <p className="text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                  {projectData[selectedProject].detailedDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projectData[selectedProject].technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#1a1a1a]
                                 border border-gray-700 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={projectData[selectedProject].demoLink}
                    className="flex-1 py-2 sm:py-3 rounded-lg bg-blue-600 hover:bg-blue-500 
                               text-white flex justify-center items-center gap-2 text-sm"
                  >
                    <FiExternalLink /> Demo
                  </a>

                  <a
                    href={projectData[selectedProject].githubLink}
                    className="flex-1 py-2 sm:py-3 rounded-lg bg-gray-800 hover:bg-gray-700 
                               text-gray-200 flex justify-center items-center gap-2 text-sm"
                  >
                    <FiGithub /> Repo
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  document.body.style.overflow = "auto";
                }}
                className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white 
                         hover:bg-white/20 transition"
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
