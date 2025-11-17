import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0d0d0d] text-gray-200 overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* === MOVING GRID BACKGROUND === */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-1/2 left-1/2 w-[250vw] h-[250vh] 
          -translate-x-1/2 -translate-y-1/2 -rotate-[15deg]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            animation: "gridMovement 200s linear infinite",
          }}
        ></div>
      </div> */}

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
            animate={{
              y: [0, -12, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
            }}
          ></motion.span>
        ))}
      </div>

      {/* === KEYFRAMES === */}
      <style>
        {`
          @keyframes gridMovement {
            0% { transform: translate(-50%, -50%) rotate(-15deg) translate(0, 0); }
            100% { transform: translate(-50%, -50%) rotate(-15deg) translate(-100rem, 100rem); }
          }
        `}
      </style>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen p-4 sm:p-8">

        {/* HEADER (NAVBAR REMOVED UNTIL YOU NEED IT) */}
        <header className="w-full max-w-7xl mx-auto flex justify-center pt-4"></header>

        {/* === HERO TEXT === */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">

          {/* === Animated Name === */}
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-white font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]
            uppercase tracking-tighter leading-none"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Anees
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-white font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]
            uppercase tracking-tighter leading-none -mt-3 sm:-mt-5"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Aboobacker
          </motion.h1>

          {/* === Info Section + Animation === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.1, ease: "easeOut" }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
          >
            <div className="flex flex-col items-center justify-center md:border-r md:border-gray-700 px-4">
              <p className="text-sm font-semibold tracking-widest text-gray-400">FULL-STACK DEVELOPER</p>
              <p className="text-xs text-gray-500 mt-1">MERN Full Stack Developer</p>
            </div>

            <div className="flex flex-col items-center justify-center md:border-r md:border-gray-700 px-4">
              <p className="text-sm font-semibold tracking-widest text-gray-400">Intern</p>
              <p className="text-xs text-gray-500 mt-1">Softroniics,Perithalmanna</p>
            </div>

            <div className="flex flex-col items-center justify-center px-4">
              <p className="text-sm font-semibold tracking-widest text-gray-400">BASED IN</p>
              <p className="text-xs text-gray-500 mt-1">KERALA, INDIA</p>
            </div>
          </motion.div>

          {/* === Social Icons (Animated Hover) === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-12 flex items-center space-x-6"
          >
            {[ 
              { icon: <FaGithub size={28} />, link: "https://github.com/ANESSABO0421" },
              { icon: <FaLinkedin size={28} />, link: "https://linkedin.com" },
              { icon: <FaInstagram size={28} />, link: "https://instagram.com" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                whileHover={{
                  scale: 1.25,
                  color: "#38bdf8",
                  rotate: 3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

        </main>
      </div>
    </section>
  );
};

export default Home;
