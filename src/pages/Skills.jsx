import React, { useContext, useRef, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);
  const skillsRef = useRef(null);

  const skills = [
    {
      title: "HTML",
      description: "Craft clean and semantic structure for modern web pages",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      glow: "shadow-[0_0_30px_rgba(234,88,12,0.8)]",
    },
    {
      title: "CSS",
      description: "Design visually engaging layouts with responsive styling",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      glow: "shadow-[0_0_30px_rgba(37,99,235,0.8)]",
    },
    {
      title: "JavaScript",
      description: "Add interactivity and dynamic behavior to websites",
      icon: <FaJs />,
      color: "text-yellow-400",
      glow: "shadow-[0_0_30px_rgba(234,179,8,0.8)]",
    },
    {
      title: "React",
      description: "Build reusable UI components with a powerful JS library",
      icon: <FaReact />,
      color: "text-cyan-400",
      glow: "shadow-[0_0_30px_rgba(6,182,212,0.8)]",
    },
    {
      title: "Tailwind CSS",
      description: "Create responsive designs using utility-first CSS classes",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
      glow: "shadow-[0_0_30px_rgba(56,189,248,0.8)]",
    },
    {
      title: "Bootstrap",
      description:
        "Quickly develop mobile-first projects with prebuilt components",
      icon: <FaBootstrap />,
      color: "text-purple-500",
      glow: "shadow-[0_0_30px_rgba(147,51,234,0.8)]",
    },
    {
      title: "Node.js",
      description: "Backend runtime environment for scalable applications",
      icon: <FaNodeJs />,
      color: "text-green-500",
      glow: "shadow-[0_0_30px_rgba(34,197,94,0.8)]",
    },
    {
      title: "Express.js",
      description: "Fast and minimalist web framework for Node.js",
      icon: <SiExpress />,
      color: "text-red-500",
      glow: "shadow-[0_0_30px_rgba(239,68,68,0.8)]",
    },
    {
      title: "MongoDB",
      description: "NoSQL database for modern applications",
      icon: <SiMongodb />,
      color: "text-green-600",
      glow: "shadow-[0_0_30px_rgba(21,128,61,0.8)]",
    },
    {
      title: "GitHub",
      description: "Version control and collaboration platform",
      icon: <FaGithub />,
      color: "text-black dark:text-white",
      glow: "shadow-[0_0_30px_rgba(0,0,0,0.6)]",
    },
  ];

  useEffect(() => {
    const marquee = skillsRef.current;
    if (!marquee) return;

    const cards = marquee.querySelectorAll(".skill-card");

    const pause = () => (marquee.style.animationPlayState = "paused");
    const resume = () => (marquee.style.animationPlayState = "running");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", pause);
      card.addEventListener("mouseleave", resume);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", pause);
        card.removeEventListener("mouseleave", resume);
      });
    };
  }, []);

  return (
    <div className="relative w-full max-w-[90rem] mx-auto py-12 sm:py-24 overflow-hidden">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400 mb-2">
          Portfolio
        </p>

        <h1
          className={`
            text-5xl md:text-7xl 
            font-light 
            ${darkMode ? "text-white" : "text-[#3A7CA5]"}
          `}
        >
          Skills & Expertise
        </h1>

        <div
          className={`
            mt-3 w-12 h-[1px] mx-auto 
            ${darkMode ? "bg-white" : "bg-black"}
          `}
        ></div>
      </motion.div>

      {/* Skills Marquee */}
      <div className="relative h-96 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
        <div className="absolute left-0 top-0 h-full w-32 z-20"></div>
        <div className="absolute right-0 top-0 h-full w-32 z-20"></div>

        <div
          ref={skillsRef}
          className="flex w-max h-full items-center animate-scroll-x"
          style={{ animation: "scroll-x 35s linear infinite" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotateY: 8 }}
              className={`skill-card relative w-72 h-72 mx-6 rounded-2xl p-6 flex flex-col justify-center items-center text-center group transition-all duration-500
                ${
                  darkMode
                    ? "bg-white/5 backdrop-blur-xl text-white border border-white/10"
                    : "bg-black/5 backdrop-blur-xl text-black border border-black/10"
                }`}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className={`mb-4 text-6xl ${skill.color} transition-all duration-500 group-hover:drop-shadow-xl`}
              >
                {skill.icon}
              </motion.div>

              <h3 className={`text-2xl font-bold mb-2 ${skill.color}`}>
                {skill.title}
              </h3>

              <p className="text-sm opacity-80">{skill.description}</p>

              <div
                className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${skill.color.replace(
                  "text",
                  "border"
                )} ${skill.glow}`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                6 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Skills;