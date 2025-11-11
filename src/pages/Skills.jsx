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
import { motion } from "framer-motion";

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
      { name: "ChatGPT", icon: <FaRobot /> },
      { name: "Claude", icon: <FaRobot /> },
      { name: "Manus", icon: <FaRobot /> },
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
      className="relative flex flex-col justify-center items-center py-24 bg-[#050505] overflow-hidden min-h-screen"
    >
      {/* === Cosmic Background === */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(115deg,#fff_1px,transparent_1px),linear-gradient(-115deg,#fff_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      {/* === Floating Stars === */}
      <div className="absolute inset-0 z-0">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* === Section Title === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 text-center px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent tracking-tight">
          TECH STACK
        </h1>
        <p className="mt-3 text-gray-400 uppercase text-xs sm:text-sm tracking-[0.25em]">
          Tools · Frameworks · Languages · AI
        </p>
      </motion.div>

      {/* === Skill Cards Grid === */}
      <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 lg:px-16 w-full max-w-7xl">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col items-center justify-between bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_25px_rgba(255,255,255,0.05)] backdrop-blur-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 text-white/80">
              <span className="text-2xl sm:text-3xl">{category.icon}</span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-100 tracking-wide text-center sm:text-left">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-[#0f0f0f]/70 border border-white/5 shadow-inner hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl text-gray-300">
                    {skill.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent blur-2xl"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
