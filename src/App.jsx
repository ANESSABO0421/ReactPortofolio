import React, { createContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Darkmode from "./components/Darkmode";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`${
          darkMode ? "bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white" : "bg-[#e6f2ff] text-[#3a7ca5] "
        } transition-all duration-500`}
      >
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
