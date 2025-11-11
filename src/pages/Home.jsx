import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#050505] overflow-hidden">
      {/* Tilted cosmic grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(115deg,#fff_1px,transparent_1px),linear-gradient(-115deg,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Floating stars animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 md:px-16">
        {/* Name with metallic gradient */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] leading-[1.1]"
        >
          ANEES
          <br />
          ABOOBACKER
        </motion.h1>

        {/* Info section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mt-10 text-gray-300 text-sm sm:text-base uppercase tracking-wide">
          <div className="flex flex-col items-center">
            <span className="text-white font-semibold">Full-Stack Developer</span>
            <span className="text-gray-400 text-xs sm:text-sm">
              AI & Software Solutions
            </span>
          </div>

          <div className="hidden sm:block w-px h-10 bg-gray-600" />

          <div className="flex flex-col items-center">
            <span className="text-white font-semibold">Clients Across 5+ Countries</span>
            <span className="text-gray-400 text-xs sm:text-sm">
              India • UK • Canada • UAE
            </span>
          </div>

          <div className="hidden sm:block w-px h-10 bg-gray-600" />

          <div className="flex flex-col items-center">
            <span className="text-white font-semibold">Based in</span>
            <span className="text-gray-400 text-xs sm:text-sm">Kerala, India</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 sm:gap-8 mt-12 text-gray-300">
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
              className="text-2xl sm:text-3xl hover:text-white hover:scale-110 transition-all"
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
