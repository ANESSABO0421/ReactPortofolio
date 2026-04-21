import React, { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import { useSEO } from "./hooks/useSEO";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

const SectionFallback = ({ label }) => (
  <div className="portfolio-container py-20 text-sm font-bold uppercase tracking-[0.28em] text-[#7d4523]">
    Loading {label}
  </div>
);

const DeferredSection = ({ id, children }) => (
  <div
    data-section={id}
    style={{
      contentVisibility: "auto",
      containIntrinsicSize: "900px",
    }}
  >
    {children}
  </div>
);

const App = () => {
  const location = useLocation();
  useSEO();
  const activeHash = location.hash.replace("#", "");

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const root = document.documentElement;

      root.style.setProperty("--scroll-y", `${scrollY}px`);
      root.style.setProperty("--parallax-grid", `${scrollY * 0.18}px`);
      root.style.setProperty("--parallax-stars", `${scrollY * 0.1}px`);
      root.style.setProperty("--parallax-glow", `${scrollY * 0.06}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="portfolio-shell">
        <CustomCursor />
        <Navbar />
        <main id="main-content" role="main">
          <Home />
          <DeferredSection id="about">
            <Suspense fallback={<SectionFallback label="about" />}>
              <About key={activeHash === "about" ? "about-active" : "about"} />
            </Suspense>
          </DeferredSection>
          <DeferredSection id="projects">
            <Suspense fallback={<SectionFallback label="projects" />}>
              <Projects key={activeHash === "projects" ? "projects-active" : "projects"} />
            </Suspense>
          </DeferredSection>
          <DeferredSection id="skills">
            <Suspense fallback={<SectionFallback label="skills" />}>
              <Skills key={activeHash === "skills" ? "skills-active" : "skills"} />
            </Suspense>
          </DeferredSection>
          <DeferredSection id="contact">
            <Suspense fallback={<SectionFallback label="contact" />}>
              <Contact key={activeHash === "contact" ? "contact-active" : "contact"} />
            </Suspense>
          </DeferredSection>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
