import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

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

import AntiGravityLoader from "./components/AntiGravityLoader";
import { usePageLoader } from "./hooks/usePageLoader";
import { useSEO } from "./hooks/useSEO";

const App = () => {
  useSEO();
  const { showLoader, done } = usePageLoader({ duration: 2000 });

  return (
    <>
      <AntiGravityLoader isOpen={showLoader} onFinish={done} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="bg-[#e6f2ff] text-[#3a7ca5] transition-colors duration-500">
        <Navbar />
        <main id="main-content" role="main">
          <Home />
          <Suspense fallback={<SectionFallback label="about" />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback label="projects" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback label="skills" />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionFallback label="contact" />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
