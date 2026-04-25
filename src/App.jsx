import React, { Suspense, lazy, memo, useEffect, useMemo, useState } from "react";
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

const DeferredSection = memo(function DeferredSection({
  id,
  activeHash,
  label,
  minHeight = 900,
  children,
}) {
  const [shouldRender, setShouldRender] = useState(activeHash === id);

  useEffect(() => {
    if (activeHash === id) {
      setShouldRender(true);
      return undefined;
    }

    const element = document.querySelector(`[data-section="${id}"]`);
    if (!element || shouldRender) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [activeHash, id, shouldRender]);

  return (
    <section
      id={id}
      data-section={id}
      aria-label={label}
      style={shouldRender ? undefined : { minHeight: `${minHeight}px` }}
    >
      {shouldRender ? children : <SectionFallback label={label} />}
    </section>
  );
});

const App = () => {
  const location = useLocation();
  useSEO();
  const activeHash = useMemo(() => location.hash.replace("#", ""), [location.hash]);

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
          <DeferredSection id="about" label="about" activeHash={activeHash}>
            <Suspense fallback={<SectionFallback label="about" />}>
              <About key={activeHash === "about" ? "about-active" : "about"} />
            </Suspense>
          </DeferredSection>
          <DeferredSection id="projects" label="projects" activeHash={activeHash} minHeight={1100}>
            <Suspense fallback={<SectionFallback label="projects" />}>
              <Projects key={activeHash === "projects" ? "projects-active" : "projects"} />
            </Suspense>
          </DeferredSection>
          <DeferredSection id="skills" label="skills" activeHash={activeHash}>
            <Suspense fallback={<SectionFallback label="skills" />}>
              <Skills key={activeHash === "skills" ? "skills-active" : "skills"} />
            </Suspense>
          </DeferredSection>
          <DeferredSection id="contact" label="contact" activeHash={activeHash}>
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
