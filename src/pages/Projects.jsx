import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = React.memo(({ project, index, imgIndex, openModal }) => (
  <motion.div
    onClick={() => openModal(project.id)}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative rounded-2xl bg-[#0b0b0b]/80 border border-white/10 hover:border-white/25 backdrop-blur-lg overflow-hidden 
    hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 cursor-pointer flex flex-col"
  >
    {/* Project Image (Fixed Aspect Ratio) */}
    <div className="relative w-full h-56 md:h-64 overflow-hidden flex-shrink-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={imgIndex}
          src={project.images[imgIndex]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          loading="lazy"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between flex-1 p-5 md:p-6 text-gray-300">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-[#161616] border border-gray-700 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Visit & Repo Buttons */}
      <div className="flex justify-between items-center pt-3 border-t border-white/10">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-white transition"
          onClick={(e) => e.stopPropagation()}
        >
          <FiExternalLink /> Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-white transition"
          onClick={(e) => e.stopPropagation()}
        >
          <FiGithub /> Repo
        </a>
      </div>
    </div>
  </motion.div>
));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardIndexes, setCardIndexes] = useState({});

  const projectData = useMemo(
    () => [
      {
        id: 0,
        title: "Interactive Tilt Project",
        shortDescription: "Immersive 3D tilt effects with React & Framer Motion.",
        detailedDescription:
          "Built using React and Framer Motion, this project explores depth-based interactivity and real-time UI animations with ultra-smooth parallax layers.",
        technologies: ["React", "Framer Motion", "CSS3"],
        demoLink: "#",
        githubLink: "#",
        images: [
          "https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        id: 1,
        title: "Modern Web Application",
        shortDescription: "Responsive full-stack web app with real-time sync.",
        detailedDescription:
          "Developed with React, Node.js, and MongoDB featuring authentication, live updates, and adaptive UI design tuned for performance.",
        technologies: ["React", "Node.js", "MongoDB"],
        demoLink: "#",
        githubLink: "#",
        images: [
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        id: 2,
        title: "Mobile App Design",
        shortDescription: "Cross-platform native app with sleek UX.",
        detailedDescription:
          "Crafted with React Native and Expo for high performance, featuring gesture-based navigation and fluid animations.",
        technologies: ["React Native", "Expo", "TypeScript"],
        demoLink: "#",
        githubLink: "#",
        images: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000&auto=format&fit=crop",
        ],
      },
    ],
    []
  );

  // Auto Image Cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndexes((prev) => {
        const updated = {};
        projectData.forEach((p) => {
          updated[p.id] = ((prev[p.id] || 0) + 1) % p.images.length;
        });
        return updated;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [projectData]);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 sm:px-10 md:px-16 flex flex-col justify-center items-center bg-[#050505] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]">
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(115deg,#fff_1px,transparent_1px),linear-gradient(-115deg,#fff_1px,transparent_1px)] bg-[length:45px_45px]" />
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="text-center relative z-10 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          WORKS
        </h1>
        <p className="mt-3 text-gray-400 text-xs tracking-[0.3em] uppercase">
          Crafted with Code & Precision
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-4xl bg-black/70 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              <motion.img
                key={currentImageIndex}
                src={projectData[selectedProject].images[currentImageIndex]}
                className="w-full h-72 md:h-96 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
              <div className="p-6 md:p-8 text-gray-300">
                <h2 className="text-3xl font-bold mb-3 text-white">
                  {projectData[selectedProject].title}
                </h2>
                <p className="text-gray-400 mb-6">
                  {projectData[selectedProject].detailedDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectData[selectedProject].technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#1a1a1a] border border-gray-700 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={projectData[selectedProject].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  <a
                    href={projectData[selectedProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 transition"
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
                className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white hover:bg-white/20"
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
