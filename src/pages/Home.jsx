import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#050505] overflow-hidden text-center px-4 sm:px-6 md:px-10"
    >
      {/* ⚡ Metallic Cosmic Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,180,180,0.05),transparent_70%)]">
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(115deg,#c0c0c0_1px,transparent_1px),linear-gradient(-115deg,#c0c0c0_1px,transparent_1px)] bg-[length:40px_40px] sm:bg-[length:50px_50px]" />
      </div>

      {/* ✨ Floating Metallic Stars */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-gradient-to-br from-gray-200 to-gray-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* === Hero Content === */}
      <div className="relative z-10 text-center max-w-[90vw] sm:max-w-[85vw] md:max-w-[70vw] lg:max-w-[65vw]">
        {/* Metallic Gradient Name */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-[2.5rem] xs:text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] font-extrabold 
                     bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 bg-clip-text 
                     text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] leading-tight sm:leading-[1.1]"
        >
          ANEES
          <br />
          ABOOBACKER
        </motion.h1>

        {/* Info Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-12 mt-8 sm:mt-10 text-gray-300 text-xs sm:text-sm md:text-base uppercase tracking-wide">
          <div className="flex flex-col items-center">
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg">
              Full-Stack Developer
            </span>
            <span className="text-gray-400 text-[0.7rem] sm:text-xs md:text-sm">
              AI & Software Solutions
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 md:h-10 bg-gray-600" />

          <div className="flex flex-col items-center">
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg">
              Clients Across 5+ Countries
            </span>
            <span className="text-gray-400 text-[0.7rem] sm:text-xs md:text-sm">
              India • UK • Canada • UAE
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 md:h-10 bg-gray-600" />

          <div className="flex flex-col items-center">
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg">
              Based in
            </span>
            <span className="text-gray-400 text-[0.7rem] sm:text-xs md:text-sm">
              Kerala, India
            </span>
          </div>
        </div>

        {/* 🌐 Social Icons */}
        <div className="flex justify-center gap-5 sm:gap-6 md:gap-8 mt-10 sm:mt-12 text-gray-300 flex-wrap">
          {[
            { icon: <FaGithub />, link: "https://github.com/ANESSABO0421" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/anees-aboobacker-4842b627a/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/anees__aboobacker/",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl md:text-4xl hover:text-sky-400 hover:scale-110 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
