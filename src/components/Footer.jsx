import React from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-gray-300 py-12 border-t border-white/10">
      {/* Metallic Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_2px,transparent_80px),repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_2px,transparent_80px)] blur-[0.5px]" />

      {/* Ambient Glow Layer */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.15),transparent_70%)]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora Shimmer */}
      <motion.div
        className="absolute -inset-x-20 top-0 h-1/2 bg-gradient-to-r from-cyan-500/10 via-amber-400/10 to-purple-600/10 blur-3xl opacity-60"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Footer Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col text-center md:text-left space-y-1">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-amber-300 font-semibold">
              Anees
            </span>{" "}
            — All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500">
            Co-founder at{" "}
            <a
              href="#"
              className="text-cyan-400 hover:text-amber-300 transition-colors duration-300"
            >
              eWindsurf
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          {[
            { icon: <FiGithub />, link: "#" },
            { icon: <FiLinkedin />, link: "#" },
            { icon: <FiMail />, link: "mailto:your@email.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{
                scale: 1.25,
                color: "#67e8f9",
                textShadow: "0 0 20px rgba(103,232,249,0.8)",
              }}
              className="text-gray-400 text-2xl hover:text-white transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{
            scale: 1.15,
            boxShadow: "0 0 30px rgba(103,232,249,0.6)",
            borderColor: "rgba(103,232,249,0.6)",
          }}
          className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:text-cyan-300 transition-all duration-300"
        >
          <FiArrowUp className="text-lg" />
        </motion.button>
      </div>

      {/* Bottom Glow Line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-white to-amber-400 opacity-60"
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
};

export default Footer;
