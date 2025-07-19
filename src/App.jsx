import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Darkmode from "./components/Darkmode";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    // <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-500`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
