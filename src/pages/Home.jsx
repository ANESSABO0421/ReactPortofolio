import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../index.css";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0d0d0d] text-gray-200 overflow-hidden flex items-center"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* === FLOATING STARS === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-gray-300 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.4)]"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.8 + 0.3,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: Math.random() * 5 + 4, repeat: Infinity }}
          />
        ))}
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-16 md:py-24">
        {/* === NAME SECTION === */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white font-display mb-2 uppercase tracking-tighter leading-none 
            text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem]"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Anees
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-white font-display uppercase tracking-tighter leading-none 
            text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem] 
            -mt-2 sm:-mt-4"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Aboobacker
        </motion.h1>

        {/* === INFO GRID === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.1 }}
          className="
            mt-10 sm:mt-14 
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            gap-6 sm:gap-10 w-full max-w-5xl
          "
        >
          {/* ITEM */}
          <div className="flex flex-col items-center text-center px-4 sm:border-r sm:border-gray-700">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-white">
              FULL-STACK DEVELOPER
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-white mt-1">MERN Developer</p>
          </div>

          <div className="flex flex-col items-center text-center px-4 sm:border-r sm:border-gray-700">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-white">
              INTERN
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-white mt-1">
              Softroniics, Perinthalmanna
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-white">
              BASED IN
            </p>
            <p className="text-[11px] sm:text-xs text-white mt-1">
              Kerala, India
            </p>
          </div>
        </motion.div>

        {/* === SOCIAL ICONS === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 flex items-center space-x-5 sm:space-x-8"
        >
          {[
            { icon: <FaGithub size={26} />, link: "https://github.com/ANESSABO0421" },
            { icon: <FaLinkedin size={26} />, link: "https://linkedin.com" },
            { icon: <FaInstagram size={26} />, link: "https://instagram.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.25, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
