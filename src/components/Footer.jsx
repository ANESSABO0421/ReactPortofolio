import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Brand */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Anees</span>. All rights reserved.
        </p>

        {/* Center - Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
