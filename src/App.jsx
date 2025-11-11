// src/App.jsx
import { useState } from 'react';
import  ThemeContext  from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MetallicHero from './components/MetallicHero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SectionWrapper from './components/SectionWrapper';
import MetallicCosmicBackground from './components/MetallicCosmicBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <MetallicCosmicBackground />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="relative z-10">
          <MetallicHero />
          
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
          
          <SectionWrapper id="projects" className="bg-gray-900/80 backdrop-blur-sm">
            <Projects />
          </SectionWrapper>
          
          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>
        
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;