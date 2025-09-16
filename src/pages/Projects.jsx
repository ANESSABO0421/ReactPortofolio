import React from "react";
import { useState, useContext, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../App";

// Memoized ProjectCard component to prevent unnecessary re-renders
const ProjectCard = React.memo(({ project, index, darkMode, openModal, currentCardImageIndex }) => {
  return (
    <motion.div
      className={`group relative h-96 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } rounded-2xl overflow-hidden cursor-pointer shadow-lg  transition-all duration-300`}
      onClick={() => openModal(project.id)}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative h-full flex flex-col">
        <div className="flex-1 relative overflow-hidden aspect-w-16 aspect-h-9">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentCardImageIndex}
              src={project.images[currentCardImageIndex]}
              alt={`${project.title} - ${currentCardImageIndex + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // Reduced duration for faster transitions
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm opacity-80 line-clamp-2">{project.shortDescription}</p>
        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndexes, setCardImageIndexes] = useState({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { darkMode } = useContext(ThemeContext);

  const projectData = [
    {
      id: 0,
      title: "Interactive Tilt Project",
      shortDescription: "3D tilt animation with dynamic user experience",
      detailedDescription:
        "This interactive tilt project showcases the power of modern web technologies in creating immersive user experiences. Built with React and advanced CSS transforms, it features real-time mouse tracking, perspective calculations, and smooth animation transitions. The component is fully responsive and optimized for performance across all devices.",
      category: "Frontend",
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion", "Tailwind CSS"],
      status: "Completed",
      date: "December 2024",
      duration: "2 weeks",
      demoLink: "https://demo-tilt-project.com",
      githubLink: "https://github.com/user/tilt-project",
      features: [
        "Real-time mouse tracking",
        "3D perspective transforms",
        "Smooth animations",
        "Responsive design",
        "Performance optimized",
      ],
      challenges: "Implementing smooth performance while maintaining 60fps animations across all devices",
      learnings: "Advanced CSS transforms, React performance optimization, and responsive design patterns",
      images: [
        "https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000&auto=format&fit=crop",
      ],
    },
    {
      id: 1,
      title: "Modern Web Application",
      shortDescription: "Responsive web app with modern design principles",
      detailedDescription:
        "This full-stack web application represents the culmination of modern web development practices. Built with React, Node.js, and MongoDB, it features a responsive design system, real-time data synchronization, and advanced state management. The application includes user authentication, data visualization, and seamless mobile experience.",
      category: "Fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io", "Material-UI"],
      status: "In Progress",
      date: "January 2025",
      duration: "6 weeks",
      demoLink: "https://demo-webapp.com",
      githubLink: "https://github.com/user/web-app",
      features: [
        "Real-time data sync",
        "User authentication",
        "Responsive design system",
        "Data visualization",
        "PWA capabilities",
      ],
      challenges: "Implementing real-time features while maintaining scalability and performance",
      learnings: "Full-stack development, real-time communications, and scalable architecture design",
      images: [
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000&auto=format&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Mobile App Design",
      shortDescription: "Mobile-first design with intuitive interface",
      detailedDescription:
        "This mobile application design project focuses on creating intuitive and engaging user experiences for mobile devices. The design system includes comprehensive component libraries, interaction patterns, and accessibility considerations. Built with React Native, it features native performance with cross-platform compatibility.",
      category: "Mobile",
      technologies: ["React Native", "TypeScript", "Expo", "React Navigation", "Styled Components"],
      status: "Completed",
      date: "November 2024",
      duration: "4 weeks",
      demoLink: "https://expo.dev/@user/mobile-app",
      githubLink: "https://github.com/user/mobile-app",
      features: [
        "Cross-platform compatibility",
        "Native performance",
        "Offline functionality",
        "Push notifications",
        "Biometric authentication",
      ],
      challenges: "Achieving native performance while maintaining code reusability across platforms",
      learnings: "Mobile development patterns, native bridge communications, and mobile UX principles",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2000&auto=format&fit=crop",
      ],
    },
    {
      id: 3,
      title: "E-commerce Platform",
      shortDescription: "Full-featured e-commerce solution",
      detailedDescription:
        "This enterprise-level e-commerce platform provides a complete solution for online retail businesses. Built with modern technologies and scalable architecture, it features advanced product management, real-time inventory tracking, multiple payment gateways, and comprehensive analytics. The platform is designed to handle high traffic loads while maintaining optimal performance.",
      category: "Backend",
      technologies: ["Next.js", "PostgreSQL", "Stripe API", "Redis", "Docker", "AWS"],
      status: "Completed",
      date: "October 2024",
      duration: "8 weeks",
      demoLink: "https://demo-ecommerce.com",
      githubLink: "https://github.com/user/ecommerce-platform",
      features: [
        "Advanced product catalog",
        "Multi-payment gateway",
        "Real-time inventory",
        "Order management",
        "Analytics dashboard",
      ],
      challenges: "Building a scalable architecture that can handle high concurrent users and transactions",
      learnings: "E-commerce architecture, payment processing, database optimization, and cloud deployment",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2000&auto=format&fit=crop",
      ],
    },
  ];

  // Preload images to reduce flicker
  useEffect(() => {
    projectData.forEach((project) => {
      project.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  // Card image autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCardImageIndexes((prev) => {
        const newIndexes = { ...prev };
        projectData.forEach((project) => {
          newIndexes[project.id] = ((prev[project.id] || 0) + 1) % project.images.length;
        });
        return newIndexes;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Modal image autoplay
  useEffect(() => {
    if (selectedProject !== null && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % projectData[selectedProject].images.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedProject, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedProject !== null) {
        if (e.key === "Escape") {
          setSelectedProject(null);
          setIsAutoPlaying(false);
          document.body.style.overflow = "auto";
        } else if (e.key === "ArrowLeft") {
          setCurrentImageIndex((prev) =>
            prev === 0 ? projectData[selectedProject].images.length - 1 : prev - 1
          );
        } else if (e.key === "ArrowRight") {
          setCurrentImageIndex(
            (prev) => (prev + 1) % projectData[selectedProject].images.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedProject]);

  // Memoize projectData to prevent re-renders
  const memoizedProjectData = useMemo(() => projectData, []);

  return (
    <section id="project">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 min-h-screen">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className={`inline-block text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-2 md:mb-4 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Portfolio
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            My Projects
          </motion.h1>
          <motion.div
            className={`w-16 sm:w-20 md:w-24 h-px mx-auto ${
              darkMode ? "bg-gray-300" : "bg-gray-600"
            }`}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {memoizedProjectData.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                darkMode={darkMode}
                openModal={() => {
                  setSelectedProject(project.id);
                  setCurrentImageIndex(0);
                  setIsAutoPlaying(true);
                  document.body.style.overflow = "hidden";
                }}
                currentCardImageIndex={cardImageIndexes[project.id] || 0}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedProject(null);
              setIsAutoPlaying(false);
              document.body.style.overflow = "auto";
            }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <motion.button
                onClick={() => {
                  setSelectedProject(null);
                  setIsAutoPlaying(false);
                  document.body.style.overflow = "auto";
                }}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                whileHover={{ scale: 1.1 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>

              <div className="relative h-64 md:h-96 aspect-w-16 aspect-h-9">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={projectData[selectedProject].images[currentImageIndex]}
                    alt={`${projectData[selectedProject].title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} // Faster fade transition
                  />
                </AnimatePresence>

                {isAutoPlaying && (
                  <div className="absolute top-4 left-4 right-20 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "linear" }}
                      key={currentImageIndex}
                    />
                  </div>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {projectData[selectedProject].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-6">
                <h2 className="text-3xl font-bold dark:text-white">{projectData[selectedProject].title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{projectData[selectedProject].detailedDescription}</p>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold dark:text-white">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData[selectedProject].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold dark:text-white">Features</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                    {projectData[selectedProject].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">Challenges</h3>
                    <p className="text-gray-600 dark:text-gray-300">{projectData[selectedProject].challenges}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">Learnings</h3>
                    <p className="text-gray-600 dark:text-gray-300">{projectData[selectedProject].learnings}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={projectData[selectedProject].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Demo
                  </a>
                  <a
                    href={projectData[selectedProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-center bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;