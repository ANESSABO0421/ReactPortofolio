import React, { memo } from "react";
import { FaCode } from "react-icons/fa";
import { FiGlobe, FiMapPin } from "react-icons/fi";

const infoBlocks = [
  {
    id: "01",
    icon: <FaCode className="text-3xl text-white" />,
    title: "Full-Stack Developer",
    detail: "AI-driven business & software solutions",
  },
  {
    id: "02",
    icon: <FiGlobe className="text-3xl text-white" />,
    title: "Clients Across Multiple Regions",
    detail: "India • Saudi Arabia • UK • Canada • Malaysia • Qatar • UAE",
  },
  {
    id: "03",
    icon: <FiMapPin className="text-3xl text-white" />,
    title: "Based In Kerala",
    detail: "Perinthalmanna, Kerala, India",
  },
];

const Home = () => {
  return (
    <section id="home" className="portfolio-section section-anchor-offset hero-home pt-6 sm:pt-10">
      <div className="portfolio-container">
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-kicker mb-6 text-center">Full-Stack Developer Based In Kerala, India</p>

          <h1 className="hero-title parallax-fast mx-auto max-w-5xl text-center text-[var(--text)]">
            Anees
            <br />
            Aboobacker
          </h1>

          <p className="parallax-slow mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Building polished web experiences, scalable full-stack products, and
            practical interfaces with a sharper studio-style presentation.
          </p>

          <div className="hero-premium-panel parallax-medium mx-auto mt-16 max-w-6xl">
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

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="soft-button primary">
              View Works
            </a>
            <a
              href="/Anees_Aboobacker_CV.pdf"
              download="Anees_Aboobacker_CV.pdf"
              className="soft-button secondary"
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
