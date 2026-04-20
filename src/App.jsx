import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

const SectionFallback = React.memo(({ label }) => (
  <div
    role="status"
    aria-live="polite"
    className="flex min-h-[40vh] items-center justify-center bg-transparent text-sm uppercase tracking-[0.3em]"
  >
    Loading {label}…
  </div>
));
import { useSEO } from "./hooks/useSEO";

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

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="min-h-screen overflow-x-hidden bg-[#020409] text-white antialiased transition-colors duration-500">
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
