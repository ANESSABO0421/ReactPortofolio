// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 backdrop-blur-md text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
          
          <div className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Your Name. All rights reserved.
          </div>
          
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span className="mr-2">Back to top</span>
            <FiArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;