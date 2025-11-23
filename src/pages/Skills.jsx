import React, { useMemo, memo } from "react";
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
  SiRedux,
  SiExpress,
  SiSocketdotio,
  SiCloudinary,
  SiVercel,
  SiRender,
  SiNetlify,
  SiOpenai,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { RiClaudeFill } from "react-icons/ri";
import { motion, useReducedMotion } from "framer-motion";

const categories = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-cyan-400" aria-hidden="true" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 aria-hidden="true" /> },
      { name: "CSS3", icon: <FaCss3Alt aria-hidden="true" /> },
      { name: "JavaScript (ES6+)", icon: <FaJs aria-hidden="true" /> },
      { name: "TypeScript", icon: <SiTypescript aria-hidden="true" /> },
      { name: "React.js", icon: <FaReact aria-hidden="true" /> },
      { name: "Next.js", icon: <SiNextdotjs aria-hidden="true" /> },
      { name: "Redux", icon: <SiRedux aria-hidden="true" /> },
      { name: "Redux Toolkit", icon: <SiRedux aria-hidden="true" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" /> },
      { name: "Bootstrap", icon: <FaBootstrap aria-hidden="true" /> },
      { name: "ShadCN/UI", icon: <SiShadcnui aria-hidden="true" /> },
      { name: "Framer Motion", icon: <FaReact aria-hidden="true" /> },
      { name: "Swiper.js", icon: <FaReact aria-hidden="true" /> },
      { name: "Vite", icon: <SiVite aria-hidden="true" /> },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FaDatabase className="text-green-400" aria-hidden="true" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs aria-hidden="true" /> },
      { name: "Express.js", icon: <SiExpress aria-hidden="true" /> },
      { name: "RESTful APIs", icon: <FaDatabase aria-hidden="true" /> },
      { name: "MongoDB", icon: <SiMongodb aria-hidden="true" /> },
      { name: "Mongoose", icon: <SiMongodb aria-hidden="true" /> },
      { name: "PostgreSQL", icon: <SiPostgresql aria-hidden="true" /> },
      { name: "Supabase", icon: <SiSupabase aria-hidden="true" /> },
      { name: "JWT Auth", icon: <FaNodeJs aria-hidden="true" /> },
      { name: "OTP Systems", icon: <FaNodeJs aria-hidden="true" /> },
      { name: "RBAC", icon: <FaNodeJs aria-hidden="true" /> },
    ],
  },
  {
    title: "Real-Time & Cloud",
    icon: <FaTools className="text-yellow-400" aria-hidden="true" />,
    skills: [
      { name: "Socket.io", icon: <SiSocketdotio aria-hidden="true" /> },
      { name: "Cloudinary", icon: <SiCloudinary aria-hidden="true" /> },
      { name: "Vercel", icon: <SiVercel aria-hidden="true" /> },
      { name: "Render", icon: <SiRender aria-hidden="true" /> },
      { name: "Netlify", icon: <SiNetlify aria-hidden="true" /> },
      { name: "OpenAI API", icon: <SiOpenai aria-hidden="true" /> },
    ],
  },
  {
    title: "Programming Languages",
    icon: <VscCode className="text-blue-400" aria-hidden="true" />,
    skills: [
      { name: "JavaScript", icon: <FaJs aria-hidden="true" /> },
      { name: "TypeScript", icon: <SiTypescript aria-hidden="true" /> },
      { name: "Python", icon: <FaPython aria-hidden="true" /> },
      { name: "C / C++", icon: <SiC aria-hidden="true" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools className="text-purple-400" aria-hidden="true" />,
    skills: [
      { name: "Git", icon: <FaGitAlt aria-hidden="true" /> },
      { name: "GitHub", icon: <FaGitAlt aria-hidden="true" /> },
      { name: "Postman", icon: <SiPostman aria-hidden="true" /> },
      { name: "VS Code", icon: <VscCode aria-hidden="true" /> },
      { name: "Cursor IDE", icon: <VscCode aria-hidden="true" /> },
      { name: "Windsurf", icon: <VscCode aria-hidden="true" /> },
      { name: "Figma", icon: <SiFigma aria-hidden="true" /> },
    ],
  },
  {
    title: "AI Engineering & Prototyping",
    icon: <FaBrain className="text-pink-400" aria-hidden="true" />,
    skills: [
      { name: "ChatGPT", icon: <SiOpenai aria-hidden="true" /> },
      { name: "Claude", icon: <RiClaudeFill aria-hidden="true" /> },
      { name: "Manus", icon: <FaRobot aria-hidden="true" /> },
      { name: "Lovable", icon: <SiShadcnui aria-hidden="true" /> },
      { name: "v0", icon: <SiShadcnui aria-hidden="true" /> },
    ],
  },
];

const generateStars = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 6 + 4,
  }));

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();
  const stars = useMemo(() => generateStars(), []);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative min-h-screen bg-[#0d0d0d] text-white overflow-hidden flex items-center justify-center py-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* 🌐 GRID BACKGROUND - Same as Home & About Sections */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-[-50%] moving-grid"></div>
      </div>

      {/* 🌟 Floating Stars - Same as Home & About Sections */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute bg-white rounded-full star-float"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: prefersReducedMotion ? "none" : `starFloat ${star.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6">
        {/* HEADER - Matching Home Section Style */}
        <motion.div
          className="relative z-10 mb-16 text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1
            id="skills-heading"
            className="text-white font-display mb-2 uppercase tracking-tighter leading-none text-7xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            SKILLS
          </h1>
          <p className="mt-3 text-gray-400 uppercase text-xs tracking-[0.3em]">
            TECHNICAL PROFICIENCIES
          </p>
        </motion.div>

        {/* FULL WIDTH CARDS LAYOUT */}
        <div className="space-y-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="
                w-full
                bg-gradient-to-br from-[#111] to-[#0a0a0a]
                rounded-3xl
                border border-white/10
                p-8
                hover:border-white/20
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all
                duration-500
                group
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="
                  p-3 
                  rounded-2xl 
                  bg-gradient-to-br from-white/10 to-white/5 
                  border border-white/10
                  group-hover:border-white/20
                  group-hover:shadow-lg
                  transition-all
                  duration-500
                ">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid - Responsive */}
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.05,
                      y: -4
                    }}
                    transition={{ duration: 0.2 }}
                    className="
                      relative
                      flex flex-col items-center justify-center
                      p-2.5 sm:p-3.5 md:p-4
                      rounded-xl
                      bg-gradient-to-br from-white/5 to-white/2
                      backdrop-blur-sm
                      border border-white/20
                      shadow-[0_4px_20px_-5px_rgba(0,0,0,0.2)]
                      hover:border-cyan-400/50
                      hover:shadow-[0_8px_30px_-5px_rgba(6,182,212,0.3)]
                      hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5
                      hover:-translate-y-0.5
                      transition-all duration-300 ease-out
                      group/skill
                      h-20 sm:h-24 md:h-28
                      w-full
                      overflow-hidden
                      before:absolute before:inset-0 
                      before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
                      before:from-cyan-500/0 before:via-cyan-500/0 before:to-cyan-500/10
                      before:opacity-0
                      hover:before:opacity-100
                      before:transition-opacity before:duration-500
                      after:absolute after:inset-0
                      after:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]
                      after:opacity-0
                      hover:after:opacity-100
                      after:transition-opacity after:duration-500
                    "
                  >
                    <div className="relative z-10 text-2xl sm:text-3xl text-white/90 mb-1.5 sm:mb-2.5 group-hover/skill:scale-110 transition-all duration-300 ease-out">
                      <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                        {skill.icon}
                      </span>
                    </div>
                    <p className="relative z-10 text-[11px] xs:text-xs sm:text-sm font-medium text-gray-200 group-hover/skill:text-white text-center leading-tight px-1 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full py-0.5">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS STYLES */}
      <style jsx>{`
        .moving-grid {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 30px 30px;
          transform: rotate(-20deg) scale(1.5);
          animation: ${prefersReducedMotion ? 'none' : 'gridMove 20s linear infinite'};
        }
        
        @keyframes gridMove {
          0% {
            transform: rotate(-20deg) scale(1.5) translateX(0px) translateY(0px);
          }
          100% {
            transform: rotate(-20deg) scale(1.5) translateX(30px) translateY(30px);
          }
        }
        
        @keyframes starFloat {
          0% { transform: translateY(0px); opacity: 0.5; }
          50% { opacity: 1; transform: translateY(-10px); }
          100% { opacity: 0.5; transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default memo(Skills);