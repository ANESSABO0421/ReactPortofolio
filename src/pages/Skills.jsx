import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { title: "HTML", icon: <FaHtml5 />, color: "#FF5733" },
    { title: "CSS", icon: <FaCss3Alt />, color: "#2965f1" },
    { title: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
    { title: "Bootstrap", icon: <FaBootstrap />, color: "#7f0fff" },
    { title: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { title: "React", icon: <FaReact />, color: "#61dafb" },
    { title: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
    { title: "Express", icon: <SiExpress />, color: "#f87171" },
    { title: "MongoDB", icon: <SiMongodb />, color: "#4caf50" },
    { title: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { title: "Figma", icon: <SiFigma />, color: "#f24e1e" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 bg-[#050505] overflow-hidden"
    >
      {/* === Cosmic Animated Grid Background === */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(115deg,#fff_1px,transparent_1px),linear-gradient(-115deg,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* === Floating Stars === */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
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
            animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 6 + 3,
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
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 text-center"
      >
        <h1 className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent tracking-tight">
          TECH ARSENAL
        </h1>
        <p className="mt-4 text-gray-400 uppercase text-sm tracking-[0.25em]">
          Forged in Code · Perfected with Passion
        </p>
      </motion.div>

      {/* === Skills Grid === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 relative z-10 px-6 max-w-7xl"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative flex flex-col justify-center items-center p-6 rounded-2xl
            bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/10
            shadow-[0_0_25px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.08)]
            backdrop-blur-xl overflow-hidden"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="mb-4 text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              style={{
                color: skill.color,
                filter: `drop-shadow(0 0 15px ${skill.color}90)`,
              }}
            >
              {skill.icon}
            </motion.div>

            {/* Title */}
            <h3
              className="text-xl font-bold"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, #fff)`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {skill.title}
            </h3>

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div
                className="absolute inset-0 blur-3xl rounded-2xl"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}40, transparent 70%)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
