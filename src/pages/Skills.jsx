import React, { memo } from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaNodeJs,
  FaPython,
  FaRobot,
  FaTools,
} from "react-icons/fa";
import {
  SiCloudinary,
  SiExpress,
  SiFigma,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiRender,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { RiClaudeFill } from "react-icons/ri";

const categories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    skills: [
      ["HTML5", <FaHtml5 />],
      ["CSS3", <FaCss3Alt />],
      ["JavaScript", <FaJs />],
      ["TypeScript", <SiTypescript />],
      ["React", <SiReact />],
      ["Next.js", <SiNextdotjs />],
      ["Tailwind CSS", <SiTailwindcss />],
      ["Bootstrap", <FaBootstrap />],
      ["Redux", <SiRedux />],
      ["Vite", <SiVite />],
    ],
  },
  {
    title: "Backend & Data",
    icon: <FaDatabase />,
    skills: [
      ["Node.js", <FaNodeJs />],
      ["Express", <SiExpress />],
      ["MongoDB", <SiMongodb />],
      ["PostgreSQL", <SiPostgresql />],
      ["Supabase", <SiSupabase />],
      ["Socket.io", <SiSocketdotio />],
      ["Cloudinary", <SiCloudinary />],
    ],
  },
  {
    title: "Tools & AI",
    icon: <FaTools />,
    skills: [
      ["Git", <FaGitAlt />],
      ["Postman", <SiPostman />],
      ["Figma", <SiFigma />],
      ["Vercel", <SiVercel />],
      ["Render", <SiRender />],
      ["Netlify", <SiNetlify />],
      ["OpenAI API", <SiOpenai />],
      ["Claude", <RiClaudeFill />],
      ["ShadCN/UI", <SiShadcnui />],
      ["Python", <FaPython />],
      ["Manus", <FaRobot />],
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="portfolio-section section-anchor-offset">
      <div className="portfolio-container">
        <div className="mb-10">
          <p className="section-kicker">Tech Stack & Toolkit</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-lead mt-4">
            Grouped into cleaner cards so the section feels closer to a modern
            studio portfolio instead of a heavy effects showcase.
          </p>
        </div>

        <div className="grid gap-6">
          {categories.map((category) => (
            <article key={category.title} className="surface-card rounded-[2rem] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-[1.1rem] border border-[var(--line)] bg-[rgba(120,166,217,0.12)] p-4 text-xl text-[var(--accent-deep)]">
                  {category.icon}
                </div>
                <div>
                  <p className="muted-label mb-1">Category</p>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[var(--text)]">
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {category.skills.map(([name, icon]) => (
                  <div
                    key={name}
                    className="rounded-[1.3rem] border border-[var(--line)] bg-[rgba(18,25,34,0.74)] px-4 py-4"
                  >
                    <div className="mb-3 text-xl text-[var(--accent-deep)]">{icon}</div>
                    <p className="text-sm font-bold text-[var(--text)]">{name}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
