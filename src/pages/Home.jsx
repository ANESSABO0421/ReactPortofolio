import React, { memo } from "react";
import { FaCode } from "react-icons/fa";
import { FiGlobe, FiMapPin } from "react-icons/fi";

const infoBlocks = [
  {
    id: "01",
    icon: <FaCode className="text-3xl text-white" />,
    title: "MERN Stack Developer",
    detail: "MongoDB · Express.js · React.js · Node.js · REST APIs",
  },
  {
    id: "02",
    icon: <FiGlobe className="text-3xl text-white" />,
    title: "1 Year Experience",
    detail: "ERP Platforms · AI-Integrated Tools · Real-Time Systems",
  },
  {
    id: "03",
    icon: <FiMapPin className="text-3xl text-white" />,
    title: "Based In Kerala",
    detail: "Malappuram, Kerala, India",
  },
];

const Home = () => {
  return (
    <section
      id="home"
      className="portfolio-section section-anchor-offset hero-home pt-4 sm:pt-10"
    >
      <div className="portfolio-container">
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-kicker mb-6 text-center">
            MERN Stack Developer Based In Kerala, India
          </p>

          <h1 className="hero-title parallax-fast mx-auto max-w-5xl text-center text-[var(--text)]">
            Anees
            <br />
            Aboobacker
          </h1>

          <p className="parallax-slow mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Building scalable REST APIs, real-time systems, and web/mobile
            applications with a focus on clean architecture and AI-integrated
            solutions.
          </p>

          <div className="hero-premium-panel parallax-medium mx-auto mt-12 max-w-6xl sm:mt-16">
            <div className="hero-premium-header">
              <p className="hero-premium-eyebrow">Signature Profile</p>
              <div className="hero-premium-divider" />
            </div>

            <div className="hero-meta-grid">
              {infoBlocks.map((item) => (
                <article key={item.title} className="hero-meta-card">
                  <div className="hero-meta-topline">
                    <span className="hero-meta-index">{item.id}</span>
                    <span className="hero-meta-icon">{item.icon}</span>
                  </div>
                  <h2 className="hero-meta-title">{item.title}</h2>
                  <p className="hero-meta-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="soft-button primary w-full sm:w-auto"
            >
              View Works
            </a>
            <a
              href="/Anees_Aboobacker_Resume.pdf"
              download="Anees_Aboobacker_Resume.pdf"
              className="soft-button secondary w-full sm:w-auto"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
