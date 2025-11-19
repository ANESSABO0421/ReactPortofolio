import React, { useMemo, memo } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="w-full bg-[#0d0d0d] text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Brand */}
        <p className="text-sm text-center md:text-left">
          © {currentYear} <span className="text-white font-semibold">Anees</span>. All rights reserved.
        </p>

        {/* Center - Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/ANESSABO0421"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin aria-hidden="true" />
          </a>
          <a
            href="mailto:hello@aneesaboobacker.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <FiMail aria-hidden="true" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);
