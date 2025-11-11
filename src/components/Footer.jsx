import React from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-8 border-t border-white/10 overflow-hidden">
      {/* Subtle Grid Overlay */}
      {/* <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

      {/* Floating Stars / Ambient Glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col text-center md:text-left space-y-1">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium tracking-wide">Anees</span>. All Rights Reserved
          </p>
          <p className="text-xs text-gray-500">
            Co-founder at{" "}
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              eWindsurf
            </a>
          </p>
        </div>

        {/* Center Social Icons */}
        <div className="flex items-center space-x-5">
          {[
            { icon: <FiGithub />, link: "#" },
            { icon: <FiLinkedin />, link: "#" },
            { icon: <FiMail />, link: "mailto:your@email.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ scale: 1.2, color: "#22d3ee" }}
              className="text-gray-400 hover:text-white text-xl transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Scroll to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all"
        >
          <FiArrowUp className="text-lg" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
