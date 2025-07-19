import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description: "Craft clean and semantic structure for modern web pages",
      icon: <FaHtml5 className="text-4xl text-orange-600" />,
    },
    {
      title: "CSS",
      description: "Design visually engaging layouts with responsive styling",
      icon: <FaCss3Alt className="text-4xl text-blue-600" />,
    },
    {
      title: "JavaScript",
      description: "Add interactivity and dynamic behavior to websites",
      icon: <FaJs className="text-4xl text-yellow-500" />,
    },
    {
      title: "React",
      description: "Build reusable UI components with a powerful JS library",
      icon: <FaReact className="text-4xl text-cyan-500" />,
    },
    {
      title: "Tailwind CSS",
      description: "Create responsive designs using utility-first CSS classes",
      icon: <SiTailwindcss className="text-4xl text-sky-400" />,
    },
    {
      title: "Bootstrap",
      description:
        "Quickly develop mobile-first projects with prebuilt components",
      icon: <FaBootstrap className="text-4xl text-purple-600" />,
    },
  ];

  return (
    <div className="overflow-hidden w-full max-w-[90rem] mx-auto py-12 relative">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32   z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32   z-10 pointer-events-none" />

      {/* Marquee content */}
      <div className="flex w-max animate-scroll-x">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="w-64 h-56 mx-4 bg-white shadow-xl rounded-2xl p-5 flex flex-col justify-center items-center text-center group hover:scale-95 transition-all duration-300"
          >
            <div className="mb-3">{skill.icon}</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-700 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
