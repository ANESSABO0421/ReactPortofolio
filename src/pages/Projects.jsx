import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../App";

const Projects = () => {
  const [tilt, setTilt] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndexes, setCardImageIndexes] = useState({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { darkMode } = useContext(ThemeContext);

  // Enhanced project data with comprehensive details - 7 PROJECTS
  const projectData = [
    {
      id: 0,
      title: "Interactive Tilt Project",
      shortDescription: "3D tilt animation with dynamic user experience",
      description: "A sophisticated React component featuring 3D perspective transforms and smooth animations. This project demonstrates advanced CSS transforms, mouse tracking, and responsive design principles to create an engaging user interface.",
      detailedDescription: "This interactive tilt project showcases the power of modern web technologies in creating immersive user experiences. Built with React and advanced CSS transforms, it features real-time mouse tracking, perspective calculations, and smooth animation transitions. The component is fully responsive and optimized for performance across all devices.",
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
        "Performance optimized"
      ],
      challenges: "Implementing smooth performance while maintaining 60fps animations across all devices",
      learnings: "Advanced CSS transforms, React performance optimization, and responsive design patterns",
      images: [
        "https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    {
      id: 1,
      title: "Modern Web Application",
      shortDescription: "Responsive web app with modern design principles",
      description: "A comprehensive web application built with React and modern design principles, featuring responsive layouts, smooth animations, and intuitive user interactions.",
      detailedDescription: "This full-stack web application represents the culmination of modern web development practices. Built with React, Node.js, and MongoDB, it features a responsive design system, real-time data synchronization, and advanced state management. The application includes user authentication, data visualization, and seamless mobile experience.",
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
        "PWA capabilities"
      ],
      challenges: "Implementing real-time features while maintaining scalability and performance",
      learnings: "Full-stack development, real-time communications, and scalable architecture design",
      images: [
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Mobile App Design",
      shortDescription: "Mobile-first design with intuitive interface",
      description: "A mobile-first approach to application design featuring intuitive user interface patterns, smooth interactions, and seamless user experience across all devices.",
      detailedDescription: "This mobile application design project focuses on creating intuitive and engaging user experiences for mobile devices. The design system includes comprehensive component libraries, interaction patterns, and accessibility considerations. Built with React Native, it features native performance with cross-platform compatibility.",
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
        "Biometric authentication"
      ],
      challenges: "Achieving native performance while maintaining code reusability across platforms",
      learnings: "Mobile development patterns, native bridge communications, and mobile UX principles",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      shortDescription: "Full-featured e-commerce solution",
      description: "A comprehensive e-commerce platform with advanced shopping cart functionality, payment integration, and modern user experience design.",
      detailedDescription: "This enterprise-level e-commerce platform provides a complete solution for online retail businesses. Built with modern technologies and scalable architecture, it features advanced product management, real-time inventory tracking, multiple payment gateways, and comprehensive analytics. The platform is designed to handle high traffic loads while maintaining optimal performance.",
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
        "Analytics dashboard"
      ],
      challenges: "Building a scalable architecture that can handle high concurrent users and transactions",
      learnings: "E-commerce architecture, payment processing, database optimization, and cloud deployment",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      shortDescription: "Creative portfolio with stunning visuals",
      description: "A creative portfolio showcase featuring stunning visual design, engaging user experience, and optimized performance across all devices.",
      detailedDescription: "This portfolio website represents a perfect blend of creativity and technical excellence. Built with cutting-edge web technologies, it features advanced animations, interactive elements, and a sophisticated content management system. The design focuses on showcasing creative work while maintaining fast loading times and excellent SEO performance.",
      category: "Design",
      technologies: ["Gatsby", "GraphQL", "Contentful", "GSAP", "Three.js", "Netlify"],
      status: "Completed",
      date: "September 2024",
      duration: "3 weeks",
      demoLink: "https://creative-portfolio.com",
      githubLink: "https://github.com/user/portfolio",
      features: [
        "Interactive 3D elements",
        "Advanced animations",
        "CMS integration",
        "SEO optimized",
        "Performance focused"
      ],
      challenges: "Balancing creative animations with performance and maintaining fast loading speeds",
      learnings: "Advanced web animations, 3D web graphics, static site generation, and performance optimization",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Dashboard Interface",
      shortDescription: "Data visualization and interactive charts",
      description: "A professional dashboard interface featuring real-time data visualization, interactive charts, and comprehensive analytics for business intelligence.",
      detailedDescription: "This comprehensive dashboard interface provides powerful data visualization and analytics capabilities for enterprise applications. Built with modern data visualization libraries and real-time streaming technologies, it offers customizable widgets, interactive charts, and advanced filtering options. The dashboard is designed to handle large datasets while maintaining responsive performance.",
      category: "UI/UX",
      technologies: ["React", "D3.js", "Chart.js", "Socket.io", "Python", "FastAPI"],
      status: "In Progress",
      date: "February 2025",
      duration: "5 weeks",
      demoLink: "https://demo-dashboard.com",
      githubLink: "https://github.com/user/dashboard",
      features: [
        "Real-time data streaming",
        "Interactive visualizations",
        "Customizable widgets",
        "Advanced filtering",
        "Export capabilities"
      ],
      challenges: "Processing and visualizing large datasets in real-time while maintaining smooth user interactions",
      learnings: "Data visualization techniques, real-time streaming, performance optimization for large datasets",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Microservices API Gateway",
      shortDescription: "Scalable API management with microservices architecture",
      description: "A robust API gateway built with microservices architecture, featuring load balancing, authentication, rate limiting, and service discovery for enterprise applications.",
      detailedDescription: "This enterprise-grade API Gateway serves as a central entry point for microservices architecture, handling routing, authentication, rate limiting, and load balancing. Built with Spring Boot and deployed on Kubernetes, it features service discovery, circuit breaker patterns, and comprehensive monitoring. The gateway supports REST and GraphQL APIs with real-time analytics and automated scaling.",
      category: "DevOps",
      technologies: ["Spring Boot", "Kubernetes", "Docker", "Redis", "Nginx", "Prometheus"],
      status: "Completed",
      date: "July 2024",
      duration: "6 weeks",
      demoLink: "https://demo-api-gateway.com",
      githubLink: "https://github.com/user/api-gateway",
      features: [
        "Service discovery",
        "Load balancing",
        "Rate limiting",
        "Circuit breaker pattern",
        "Real-time monitoring",
        "Auto-scaling"
      ],
      challenges: "Implementing fault-tolerant service communication and maintaining high availability across distributed services",
      learnings: "Microservices patterns, container orchestration, distributed systems design, and cloud-native architecture",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2000&auto=format&fit=crop"
      ]
    }
  ];

  // FIXED: Improved responsive layout configurations
  const getLayoutConfig = (screenSize) => {
    if (screenSize === 'mobile') {
      // Mobile: Stack all cards in single column
      return [
        { span: "col-span-1", height: "h-96" },
        { span: "col-span-1", height: "h-96" },
        { span: "col-span-1", height: "h-96" },
        { span: "col-span-1", height: "h-96" },
        { span: "col-span-1", height: "h-96" },
        { span: "col-span-1", height: "h-96" },
        { span: "col-span-1", height: "h-96" }
      ];
    } else if (screenSize === 'tablet') {
      // Tablet: 2 columns with optimized layout
      return [
        { span: "col-span-2", height: "h-96" },  // Interactive Tilt - Large
        { span: "col-span-1", height: "h-64" },  // Modern Web - Small
        { span: "col-span-1", height: "h-64" },  // Mobile App - Small
        { span: "col-span-1", height: "h-64" },  // API Gateway - Small
        { span: "col-span-1", height: "h-64" },  // E-commerce - Small
        { span: "col-span-1", height: "h-64" },  // Portfolio - Small
        { span: "col-span-1", height: "h-64" }   // Dashboard - Small
      ];
    } else {
      // Desktop: Improved bento layout matching the screenshot
      return [
        { span: "col-span-2 row-span-2", height: "h-[500px]" }, // Interactive Tilt - Large (0)
        { span: "col-span-1 row-span-1", height: "h-60" },      // Modern Web App - Small (1)
        { span: "col-span-1 row-span-2", height: "h-[500px]" }, // Mobile App - Tall (2)
        { span: "col-span-1 row-span-1", height: "h-60" },      // API Gateway - Small (6)
        { span: "col-span-2 row-span-1", height: "h-60" },      // E-commerce - Wide (3)
        { span: "col-span-1 row-span-1", height: "h-60" },      // Portfolio - Small (4)
        { span: "col-span-1 row-span-1", height: "h-60" }       // Dashboard - Small (5)
      ];
    }
  };

  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layoutConfig = getLayoutConfig(screenSize);

  // FIXED: Correct project ordering to match the layout
  const reorderedProjects = screenSize === 'desktop' 
    ? [
        projectData[0], // Interactive Tilt - Large card (position 0)
        projectData[1], // Modern Web App - Small card (position 1)  
        projectData[2], // Mobile App - Tall card (position 2)
        projectData[6], // API Gateway - Small card (position 3)
        projectData[3], // E-commerce - Wide card (position 4)
        projectData[4], // Portfolio - Small card (position 5)
        projectData[5], // Dashboard - Small card (position 6)
      ]
    : projectData;

  const handleMove = (e) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = ((e.clientY - top) / height - 0.5) * -20;
    const y = ((e.clientX - left) / width - 0.5) * 20;
    setTilt({ x, y, id: Number(card.dataset.id) });
  };

  const handleLeave = () => {
    setTilt({});
  };

  const openModal = (projectId) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
    setIsAutoPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsAutoPlaying(false);
    document.body.style.overflow = 'auto';
  };

  // Card image autoplay (when not zoomed)
  useEffect(() => {
    const intervals = {};
    
    projectData.forEach((project, index) => {
      intervals[index] = setInterval(() => {
        setCardImageIndexes(prev => ({
          ...prev,
          [index]: ((prev[index] || 0) + 1) % project.images.length
        }));
      }, 5000 + (index * 800));
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  // Modal image autoplay (when zoomed)
  useEffect(() => {
    if (selectedProject !== null && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          (prev + 1) % projectData[selectedProject].images.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedProject, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedProject !== null) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowLeft') {
          setCurrentImageIndex((prev) => 
            prev === 0 ? projectData[selectedProject].images.length - 1 : prev - 1
          );
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex((prev) => 
            (prev + 1) % projectData[selectedProject].images.length
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProject]);

  return (
    <>
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
            className={`w-16 sm:w-20 md:w-24 h-px mx-auto ${darkMode ? "bg-gray-300" : "bg-gray-600"}`}
            initial={{ width: 0 }}
            animate={{ width: screenSize === 'mobile' ? 64 : screenSize === 'tablet' ? 80 : 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* FIXED: Improved Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-4 sm:gap-5 lg:gap-6 ${
            screenSize === 'mobile' ? 'grid-cols-1' : 
            screenSize === 'tablet' ? 'grid-cols-2 auto-rows-fr' : 
            'grid-cols-4 grid-rows-3 auto-rows-fr'
          }`}>
            {reorderedProjects.map((project, idx) => {
              const layout = layoutConfig[idx];
              const currentCardImageIndex = cardImageIndexes[project.id] || 0;
              const isLargeCard = layout.height.includes("500px") || layout.height === "h-96";
              
              return (
                <motion.div
                  key={project.id}
                  data-id={project.id}
                  className={`
                    group relative ${layout.span} ${layout.height}
                    ${darkMode 
                      ? "bg-gradient-to-br from-gray-50 to-gray-100 text-black border border-gray-200" 
                      : "bg-gradient-to-br from-gray-800 to-gray-900 text-white border border-gray-700"
                    }
                    rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer backdrop-blur-sm
                    hover:shadow-2xl transition-all duration-500 min-h-0
                  `}
                  onMouseMove={handleMove}
                  onMouseLeave={handleLeave}
                  onClick={() => openModal(project.id)}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={
                    tilt.id === project.id
                      ? {
                          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
                          transformStyle: "preserve-3d",
                          transition: "transform 0.15s ease-out",
                          zIndex: 20
                        }
                      : {}
                  }
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
                  </div>

                  {/* IMPROVED: Content Layout with better visibility */}
                  <div className="relative h-full flex flex-col">
                    {isLargeCard || screenSize === 'mobile' ? (
                      // Large cards - vertical layout
                      <>
                        <div className="flex-1 relative overflow-hidden min-h-0">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentCardImageIndex}
                              src={project.images[currentCardImageIndex]}
                              alt={`${project.title} - ${currentCardImageIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                              initial={{ opacity: 0, x: 100 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -100 }}
                              transition={{ duration: 0.5 }}
                            />
                          </AnimatePresence>
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1.5 backdrop-blur-md rounded-full text-xs font-medium text-white ${
                              project.category === 'DevOps' ? 'bg-orange-500/30' : 'bg-white/25'
                            }`}>
                              {project.category}
                            </span>
                          </div>

                          {/* Status Badge */}
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1.5 backdrop-blur-md rounded-full text-xs font-medium ${
                              project.status === 'Completed' ? 'bg-green-500/30 text-green-200' :
                              project.status === 'In Progress' ? 'bg-blue-500/30 text-blue-200' :
                              'bg-yellow-500/30 text-yellow-200'
                            }`}>
                              {project.status}
                            </span>
                          </div>

                          {/* Image Dots */}
                          <div className="absolute bottom-24 left-4 flex space-x-1.5">
                            {project.images.map((_, imageIdx) => (
                              <div
                                key={imageIdx}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  imageIdx === currentCardImageIndex
                                    ? "bg-white scale-125 shadow-lg"
                                    : "bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* IMPROVED: Content for large cards with better spacing */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-black/80 to-transparent">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.slice(0, 3).map((tech, techIdx) => (
                              <span key={techIdx} className={`text-xs rounded-lg px-2.5 py-1 font-medium ${
                                project.category === 'DevOps' ? 'bg-orange-500/25 text-orange-200' : 'bg-white/20 text-white'
                              }`}>
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="text-xs bg-white/20 rounded-lg px-2.5 py-1 font-medium text-white">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-200 line-clamp-2 mb-3 leading-relaxed">
                            {project.shortDescription}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-300 font-medium">{project.date}</span>
                            <span className="text-gray-300">{project.duration}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      // IMPROVED: Small cards - horizontal layout
                      <div className="flex h-full">
                        <div className="w-2/5 relative overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentCardImageIndex}
                              src={project.images[currentCardImageIndex]}
                              alt={`${project.title} - ${currentCardImageIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                              initial={{ opacity: 0, scale: 1.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.5 }}
                            />
                          </AnimatePresence>
                          
                          <div className="absolute bottom-2 left-2 flex space-x-1">
                            {project.images.map((_, imageIdx) => (
                              <div
                                key={imageIdx}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  imageIdx === currentCardImageIndex
                                    ? "bg-white scale-125 shadow-sm"
                                    : "bg-white/60"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div className="w-3/5 p-4 flex flex-col justify-between">
                          <div className="min-h-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className={`text-xs font-semibold ${
                                project.category === 'DevOps' ? 
                                  (darkMode ? "text-orange-600" : "text-orange-400") :
                                  (darkMode ? "text-blue-600" : "text-blue-400")
                              }`}>
                                {project.category}
                              </span>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                project.status === 'Completed' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                                project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' :
                                'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                            <h3 className="text-base font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300 line-clamp-2 leading-tight">
                              {project.title}
                            </h3>
                            <p className={`text-xs leading-relaxed line-clamp-3 mb-2 ${
                              darkMode ? "text-gray-600" : "text-gray-300"
                            }`}>
                              {project.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 2).map((tech, techIdx) => (
                                <span key={techIdx} className={`text-xs px-2 py-0.5 rounded-lg font-medium ${
                                  project.category === 'DevOps' ?
                                    (darkMode ? "bg-orange-100 text-orange-700" : "bg-orange-700/70 text-orange-200") :
                                    (darkMode ? "bg-gray-200 text-gray-700" : "bg-gray-700 text-gray-300")
                                }`}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-3 pt-2">
                            <span className={`text-xs font-medium ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                              {project.date}
                            </span>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className={`w-1 h-1 rounded-full ${
                                project.category === 'DevOps' ? 'bg-orange-500' : 'bg-blue-500'
                              }`} />
                              <span className="text-xs font-medium">View</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-xl sm:rounded-2xl ring-2 transition-all duration-300 pointer-events-none ${
                    project.category === 'DevOps' ? 
                      'ring-orange-500/0 group-hover:ring-orange-500/40' : 
                      'ring-blue-500/0 group-hover:ring-blue-500/40'
                  }`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Responsive Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 z-40"
            style={{ 
              top: screenSize === 'mobile' ? '60px' : '70px',
              height: screenSize === 'mobile' ? 'calc(100vh - 60px)' : 'calc(100vh - 70px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Background */}
            <motion.div 
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ 
                top: screenSize === 'mobile' ? '-60px' : '-70px', 
                height: screenSize === 'mobile' ? 'calc(100% + 60px)' : 'calc(100% + 70px)' 
              }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full max-h-full overflow-y-auto"
              style={{ maxWidth: screenSize === 'mobile' ? '100%' : '90vw', maxHeight: '90vh' }}
              initial={{ scale: 0.2, opacity: 0, rotateX: -90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.2, opacity: 0, rotateX: 90 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 300,
                duration: 0.8
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 w-10 sm:w-12 h-10 sm:h-12 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors duration-200 border border-white/20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="sm:w-5 sm:h-5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>

              {/* Image Carousel */}
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={projectData[selectedProject].images[currentImageIndex]}
                    alt={`${projectData[selectedProject].title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>

                {/* Progress Bar */}
                {isAutoPlaying && (
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-16 sm:right-24 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "linear" }}
                      key={currentImageIndex}
                    />
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 sm:top-6 right-16 sm:right-24 px-3 sm:px-4 py-1 sm:py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium border border-white/20">
                  {isAutoPlaying ? "🔄 Auto" : "⏸️ Paused"}
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
                  {projectData[selectedProject].images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-150 shadow-lg"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                      whileHover={{ scale: screenSize === 'mobile' ? 1.3 : 1.5 }}
                      whileTap={{ scale: 1.2 }}
                    >
                      {index === currentImageIndex && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Comprehensive Project Details */}
              <div className="p-4 sm:p-6 lg:p-8 xl:p-12 space-y-6 sm:space-y-8">
                {/* Header Info */}
                <motion.div
                  className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-medium ${
                      projectData[selectedProject].category === 'DevOps' ?
                        'bg-orange-500/10 text-orange-600 dark:text-orange-400' :
                        'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    }`}>
                      {projectData[selectedProject].category}
                    </span>
                    <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-medium ${
                      projectData[selectedProject].status === 'Completed' ? 'bg-green-500/10 text-green-600 dark:text-green-400' :
                      projectData[selectedProject].status === 'In Progress' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                      'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {projectData[selectedProject].status}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{projectData[selectedProject].date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{projectData[selectedProject].duration}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{currentImageIndex + 1} of {projectData[selectedProject].images.length}</span>
                  </div>
                </motion.div>

                {/* Title and Description */}
                <div className="space-y-4">
                  <motion.h2 
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {projectData[selectedProject].title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {projectData[selectedProject].detailedDescription}
                  </motion.p>
                </div>

                {/* Technologies */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-lg font-semibold dark:text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData[selectedProject].technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                          projectData[selectedProject].category === 'DevOps' ?
                            'bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300' :
                            'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-lg font-semibold dark:text-white">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectData[selectedProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          projectData[selectedProject].category === 'DevOps' ? 'bg-orange-500' : 'bg-blue-500'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Challenges and Learnings */}
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold dark:text-white">Challenges</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {projectData[selectedProject].challenges}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold dark:text-white">Key Learnings</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {projectData[selectedProject].learnings}
                    </p>
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <a
                    href={projectData[selectedProject].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-medium transition-colors duration-200 ${
                      projectData[selectedProject].category === 'DevOps' ?
                        'bg-orange-500 hover:bg-orange-600' :
                        'bg-blue-500 hover:bg-blue-600'
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={projectData[selectedProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Code
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
