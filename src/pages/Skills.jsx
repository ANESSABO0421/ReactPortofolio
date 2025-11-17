import React, { memo } from "react";
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
import { motion, useReducedMotion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-cyan-400" aria-hidden="true" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 aria-hidden="true" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" /> },
      { name: "Bootstrap", icon: <FaBootstrap aria-hidden="true" /> },
      { name: "Next.js", icon: <SiNextdotjs aria-hidden="true" /> },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FaDatabase className="text-green-400" aria-hidden="true" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs aria-hidden="true" /> },
      { name: "Supabase", icon: <SiSupabase aria-hidden="true" /> },
      { name: "PostgreSQL", icon: <SiPostgresql aria-hidden="true" /> },
      { name: "MongoDB", icon: <SiMongodb aria-hidden="true" /> },
    ],
  },
  {
    title: "Programming",
    icon: <VscCode className="text-blue-400" aria-hidden="true" />,
    skills: [
      { name: "JavaScript", icon: <FaJs aria-hidden="true" /> },
      { name: "TypeScript", icon: <SiTypescript aria-hidden="true" /> },
      { name: "Python", icon: <FaPython aria-hidden="true" /> },
      { name: "C/C++", icon: <SiC aria-hidden="true" /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools className="text-yellow-400" aria-hidden="true" />,
    skills: [
      { name: "Git", icon: <FaGitAlt aria-hidden="true" /> },
      { name: "VS Code", icon: <VscCode aria-hidden="true" /> },
      { name: "Cursor IDE", icon: <VscCode aria-hidden="true" /> },
      { name: "Vite", icon: <SiVite aria-hidden="true" /> },
    ],
  },
  {
    title: "AI Development",
    icon: <FaBrain className="text-pink-400" aria-hidden="true" />,
    skills: [
      { name: "Manus", icon: <FaRobot aria-hidden="true" /> },
      { name: "ChatGPT", icon: <FaRobot aria-hidden="true" /> },
      { name: "Claude", icon: <RiClaudeFill aria-hidden="true" /> },
    ],
  },
  {
    title: "AI Prototyping",
    icon: <FaRobot className="text-purple-400" aria-hidden="true" />,
    skills: [
      { name: "Lovable", icon: <SiShadcnui aria-hidden="true" /> },
      { name: "v0", icon: <SiShadcnui aria-hidden="true" /> },
      { name: "Shadcn/UI", icon: <SiShadcnui aria-hidden="true" /> },
    ],
  },
];

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="min-h-screen py-20 bg-[#0d0d0d] text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h1
          id="skills-heading"
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
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
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

export default memo(Skills);
