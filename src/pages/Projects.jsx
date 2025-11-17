import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// -----------------------------------------------------------------------------
// ⭐ STAR GENERATOR (Memoized for performance)
// -----------------------------------------------------------------------------
const generateStars = () =>
  Array.from({ length: 35 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 6 + 4,
  }));

// -----------------------------------------------------------------------------
// 📦 PROJECT CARD
// -----------------------------------------------------------------------------
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
    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
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
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 
                       group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm sm:text-base mb-3 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-[#161616]
                         border border-gray-700 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-white/10">
        <a href={project.demoLink} target="_blank" onClick={(e) => e.stopPropagation()}
           className="flex items-center gap-2 text-sm hover:text-white">
          <FiExternalLink /> Demo
        </a>

        <a href={project.githubLink} target="_blank" onClick={(e) => e.stopPropagation()}
           className="flex items-center gap-2 text-sm hover:text-white">
          <FiGithub /> Repo
        </a>
      </div>
    </div>
  </motion.div>
));

// -----------------------------------------------------------------------------
// 🧩 MAIN PROJECTS COMPONENT
// -----------------------------------------------------------------------------
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardIndexes, setCardIndexes] = useState({});
  const stars = useMemo(() => generateStars(), []);

  // ---------------------------------------------------------------------------
  // 🔥 PROJECT DATA (Memoized)
  // ---------------------------------------------------------------------------
  const projectData = useMemo(
    () => [
      {
        id: 0,
        title: "Synapsis – NSS Management Portal",
        shortDescription:
          "Full-stack MERN NSS portal with real-time chat, multi-role access and AI insights.",
        detailedDescription:
          "A complete MERN platform featuring JWT-based authentication, real-time chats, AI summaries, Cloudinary uploads and more.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "OpenAI API"],
        demoLink: "#",
        githubLink: "#",
        images: [
          // "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80",
          // "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80",
        ],
      },

      {
        id: 1,
        title: "Lumio – Social Media Platform",
        shortDescription:
          "A MERN social media app with posts, likes, comments, OTP login & modern UI.",
        detailedDescription:
          "JWT auth, OTP login, comments, posts, Tailwind UI, Swiper animations.",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "#",
        images: [
          // "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80",
          // "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80",
        ],
      },

      {
        id: 2,
        title: "LibroTrack – Book Inventory System",
        shortDescription:
          "Node + MongoDB system for book catalog and borrow tracking.",
        detailedDescription:
          "Borrow/return system, Tailwind UI, inventory auto updates.",
        technologies: ["Node.js", "MongoDB", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "#",
        images: [
          // "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80",
          // "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80",
        ],
      },

      {
        id: 3,
        title: "BookMyShow Clone (Frontend)",
        shortDescription:
          "Movie booking UI with React, Redux Toolkit & Swiper.js.",
        detailedDescription:
          "Dynamic UI, carousels, full responsiveness, Redux state management.",
        technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "#",
        images: [
          // "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80",
          // "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80",
        ],
      },

      {
        id: 4,
        title: "Malappuram FC Ultras Fans Website",
        shortDescription: "Football fan community website with admin panel.",
        detailedDescription: "Results posting, match fixtures, standings.",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "#",
        images: [
          // "https://images.unsplash.com/photo-1508193638397-1c22779fecd4?q=80",
          // "https://images.unsplash.com/photo-1508087625619-2f2c0a7bb293?q=80",
        ],
      },

      {
        id: 5,
        title: "Cruizo – Car Rental Website",
        shortDescription: "React car rental website with booking flow.",
        detailedDescription:
          "Multi-page navigation, pricing UI, context-based booking.",
        technologies: ["React", "Context API", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "#",
        images: [
          // "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80",
          // "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80",
        ],
      },
    ],
    []
  );

  // ---------------------------------------------------------------------------
  // 🔁 AUTOMATIC IMAGE CYCLING
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndexes((prev) =>
        projectData.reduce((acc, p) => {
          acc[p.id] = ((prev[p.id] || 0) + 1) % p.images.length;
          return acc;
        }, {})
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [projectData]);

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 sm:px-10 md:px-16 
                 flex flex-col justify-center items-center bg-[#0d0d0d] overflow-hidden"
    >
      {/* 🔥 GRID BACKGROUND (Home Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[250vw] h-[250vh]
                    -translate-x-1/2 -translate-y-1/2 -rotate-[15deg] opacity-[0.13]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            animation: "gridMovement 200s linear infinite",
          }}
        />
      </div>

      {/* ⭐ FLOATING STARS */}
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
            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: star.duration, repeat: Infinity }}
          />
        ))}
      </div>

      {/* CSS KEYFRAMES ONCE */}
      <style>
        {`
          @keyframes gridMovement {
            0% { transform: translate(-50%, -50%) rotate(-15deg) translate(0,0); }
            100% { transform: translate(-50%, -50%) rotate(-15deg) translate(-100rem, 100rem); }
          }
        `}
      </style>

      {/* HEADER */}
      <motion.div
        className="text-center relative z-10 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
                       bg-gradient-to-b from-gray-100 to-gray-500 
                       bg-clip-text text-transparent">
          WORKS
        </h1>
        <p className="mt-3 text-gray-400 text-xs tracking-[0.3em] uppercase">
          Crafted with Code & Precision
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-8 w-full max-w-7xl z-10">
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
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
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-4xl rounded-2xl bg-black/70 
                         border border-white/20 overflow-hidden shadow-2xl"
            >
              <motion.img
                key={currentImageIndex}
                src={projectData[selectedProject].images[currentImageIndex]}
                className="w-full h-56 sm:h-72 md:h-96 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <div className="p-6 md:p-8 text-gray-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  {projectData[selectedProject].title}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed">
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
                    className="flex-1 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex justify-center items-center gap-2"
                  >
                    <FiExternalLink /> Demo
                  </a>

                  <a
                    href={projectData[selectedProject].githubLink}
                    className="flex-1 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 flex justify-center items-center gap-2"
                  >
                    <FiGithub /> Repo
                  </a>
                </div>
              </div>

              <motion.button
                onClick={() => {
                  setSelectedProject(null);
                  document.body.style.overflow = "auto";
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
