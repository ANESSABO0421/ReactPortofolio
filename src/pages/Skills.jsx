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
    title: "Tools",
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
      className="min-h-screen py-20 bg-[#0d0d0d] text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold
            bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text 
            text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
          "
        >
          Skills
        </h1>

        <p className="mt-3 text-gray-400 uppercase text-xs tracking-[0.3em]">
          THE SKILL I MASTERED
        </p>
      </div>

      {/* NEW FIXED GRID */}
      <div
        className="
          grid 
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-8
          max-w-7xl
          mx-auto
          px-6
          auto-rows-[1fr]
        "
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              bg-[#111]
              rounded-2xl
              border border-gray-800
              p-6
              flex flex-col
              justify-between
              h-full
              hover:border-gray-600
              transition-all
              duration-300
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            {/* Skill List */}
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="
                    flex flex-col gap-2 items-center justify-center
                    py-4
                    rounded-xl
                    bg-[#0f0f0f]
                    border border-gray-900
                    hover:border-gray-700
                    transition
                    h-24
                  "
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <p className="text-xs text-gray-400 text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
