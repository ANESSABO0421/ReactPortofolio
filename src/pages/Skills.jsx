import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaLaptopCode,
  FaTools,
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiSupabase,
  SiPostgresql,
  SiTypescript,
  SiC,
  SiVite,
  SiShadcnui,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { RiClaudeFill } from "react-icons/ri";
import { motion } from "framer-motion";

// ===========================
// Skill Categories
// ===========================
const categories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-cyan-400" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FaDatabase className="text-green-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Programming",
    icon: <VscCode className="text-blue-400" />,
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C/C++", icon: <SiC /> },
    ],
  },
  {
    title: "Development Tools",
    icon: <FaTools className="text-yellow-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Cursor IDE", icon: <VscCode /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "AI Development",
    icon: <FaBrain className="text-pink-400" />,
    skills: [
      { name: "Manus", icon: <FaRobot /> },
      { name: "ChatGPT", icon: <FaRobot /> },
      { name: "Claude", icon: <RiClaudeFill /> },
    ],
  },
  {
    title: "AI Prototyping",
    icon: <FaRobot className="text-purple-400" />,
    skills: [
      { name: "Lovable", icon: <SiShadcnui /> },
      { name: "v0", icon: <SiShadcnui /> },
      { name: "Shadcn/UI", icon: <SiShadcnui /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 bg-[#0d0d0d] overflow-hidden flex flex-col items-center justify-center"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* === MOVING GRID BACKGROUND (Same as HOME) === */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-1/2 left-1/2 w-[250vw] h-[250vh]
                     -translate-x-1/2 -translate-y-1/2 -rotate-[15deg]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            animation: "gridMovement 200s linear infinite",
          }}
        ></div>
      </div> */}

      {/* === Floating Stars === */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(35)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.9 + 0.2,
              animation: `starFloat ${
                Math.random() * 6 + 4
              }s ease-in-out infinite`,
            }}
          ></span>
        ))}
      </div>

      {/* === Keyframes === */}
      <style>
        {`
          @keyframes gridMovement {
            0% { transform: translate(-50%, -50%) rotate(-15deg) translate(0,0); }
            100% { transform: translate(-50%, -50%) rotate(-15deg) translate(-100rem, 100rem); }
          }

          @keyframes starFloat {
            0% { transform: translateY(0px); opacity: 0.5; }
            50% { opacity: 1; transform: translateY(-10px); }
            100% { opacity: 0.5; transform: translateY(0px); }
          }
        `}
      </style>

      {/* === Section Title === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-16 text-center"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
                       bg-gradient-to-b from-gray-100 to-gray-500 
                       bg-clip-text text-transparent"
        >
          Skills
        </h1>
        <p className="mt-3 text-gray-400 uppercase text-xs tracking-[0.3em]">
          Tools · Frameworks · Languages · AI
        </p>
      </motion.div>

      {/* === Skill Cards === */}
      <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-7xl px-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_25px_rgba(255,255,255,0.05)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-xl font-semibold text-gray-100">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-5">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="flex flex-col items-center bg-[#0f0f0f]/70 p-3 rounded-2xl border border-white/5"
                >
                  <div className="text-3xl text-gray-300">{skill.icon}</div>
                  <span className="text-xs text-gray-400 mt-1 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
