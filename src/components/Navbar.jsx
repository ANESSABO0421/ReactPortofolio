import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const links = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "WORKS", href: "#project" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        border-3 rounded-full
        w-[90%] sm:w-[80%] md:w-auto
        max-w-[500px]
      "
    >
      <ul
        className="
          flex items-center justify-center
          gap-4 sm:gap-6 md:gap-8
          px-3 sm:px-6 md:px-8
          py-2 sm:py-3
          rounded-full bg-black/60 border border-white/10 backdrop-blur-xl
          shadow-[0_0_25px_rgba(255,255,255,0.15)]
          relative overflow-hidden
          before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
          before:translate-x-[-100%] before:animate-[shine_6s_linear_infinite]
        "
      >
        {links.map((link) => (
          <li key={link.name} className="relative list-none">
            <a
              href={link.href}
              onClick={() => setActive(link.name.toLowerCase())}
              className={`font-semibold tracking-widest transition-all duration-300 
                text-[10px] sm:text-xs md:text-sm lg:text-base
                ${
                  active === link.name.toLowerCase()
                    ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {link.name}
            </a>

            {active === link.name.toLowerCase() && (
              <motion.div
                layoutId="activeUnderline"
                className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 shadow-[0_0_10px_white]"
              />
            )}
          </li>
        ))}
      </ul>

      {/* Metallic Sweep Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
