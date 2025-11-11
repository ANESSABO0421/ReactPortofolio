// src/components/MetallicHero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';

const MetallicHero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Your Name
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            I build exceptional digital experiences with modern technologies and
            a focus on performance and user experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-md font-medium hover:bg-gray-800/50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll down"
          >
            <FiChevronDown size={32} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MetallicHero;