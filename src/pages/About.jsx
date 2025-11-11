import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="relative flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 bg-[#050505] overflow-hidden"
    >
      {/* ⚡ Metallic cosmic grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,180,180,0.05),transparent_70%)]">
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(115deg,#c0c0c0_1px,transparent_1px),linear-gradient(-115deg,#c0c0c0_1px,transparent_1px)] bg-[length:40px_40px] sm:bg-[length:50px_50px]" />
      </div>

      {/* ✨ Floating metallic stars */}
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

      {/* ⚙️ Left Content - Metallic Card */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex-1 max-w-full lg:max-w-2xl p-6 sm:p-8 md:p-12 lg:p-14 m-3 rounded-3xl
                   bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]
                   border border-gray-600/40 shadow-[0_0_40px_rgba(255,255,255,0.08)]
                   backdrop-blur-2xl"
      >
        {/* 🪞 Title with Chrome Glow */}
        <div className="mb-8 sm:mb-10 text-center">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
            Portfolio
          </p>
          <h1
            className="text-[1.8rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.8rem] font-extrabold
                       bg-gradient-to-b from-[#e0e0e0] via-[#b0b0b0] to-[#6f6f6f]
                       bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            About <span className="text-sky-400">Me</span>
          </h1>
          <div className="mx-auto mt-3 sm:mt-4 w-20 sm:w-24 h-[2px] sm:h-[3px] bg-gradient-to-r from-sky-400 via-silver-400 to-amber-300 rounded-full"></div>
        </div>

        {/* 🧠 Metallic Text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-justify font-light leading-relaxed mb-6 sm:mb-8 text-gray-300">
          I'm a passionate{" "}
          <span className="font-semibold text-sky-400 drop-shadow-[0_0_6px_rgba(91,199,255,0.6)]">
            MERN Stack Developer
          </span>{" "}
          currently interning at{" "}
          <span className="font-semibold text-amber-300 drop-shadow-[0_0_6px_rgba(255,200,100,0.6)]">
            Sofroniics
          </span>
          , building futuristic full-stack web experiences.
          <br />
          I hold a Bachelor's degree in{" "}
          <span className="font-semibold text-sky-400">Computer Science</span> from{" "}
          <span className="font-semibold text-amber-300">GEMS College, Ramapuram</span>.
          <br />My craft lies in shaping{" "}
          <span className="font-semibold text-sky-400">React.js</span> &{" "}
          <span className="font-semibold text-sky-400">Node.js</span> systems
          into visually striking, high-performance creations.
        </p>

        {/* 💎 Info Cards */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Role */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a]
                       border border-gray-700/50 rounded-2xl p-4 sm:p-5
                       shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_0_15px_rgba(0,0,0,0.4)]
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <span className="text-xl sm:text-2xl">💼</span>
              <span className="text-sm sm:text-base font-semibold text-sky-400">
                Current Role
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-gray-200">
              MERN Stack Developer
            </div>
            <div className="text-xs sm:text-sm text-gray-400">Interning at Sofroniics</div>
          </motion.div>

          {/* Education */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a]
                       border border-gray-700/50 rounded-2xl p-4 sm:p-5
                       shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_0_15px_rgba(0,0,0,0.4)]
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <span className="text-xl sm:text-2xl">🎓</span>
              <span className="text-sm sm:text-base font-semibold text-sky-400">
                Education
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-gray-200">
              Computer Science
            </div>
            <div className="text-xs sm:text-sm text-gray-400">GEMS College, Ramapuram</div>
          </motion.div>
        </div>
      </motion.div>

      {/* 🪩 Right Image - Metallic Glow Frame */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex-1 p-4 sm:p-6 md:p-8 m-3 flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative group w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px]"
        >
          {/* Metallic Glow Border */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-sky-400 via-gray-300 to-amber-300 blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

          {/* Metallic Glass Card */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-600/60 
                        bg-gradient-to-br from-[#1c1c1c] to-[#2e2e2e] backdrop-blur-xl
                        aspect-square flex items-center justify-center"
          >
            <img
              src="https://cdn.dribbble.com/users/1019864/screenshots/3079099/media/9e5055da2ee6c899aab9403ceb7d0dc3.gif"
              alt="coding gif"
              className="w-[85%] h-[85%] object-cover rounded-2xl shadow-lg 
                         group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-400/20 to-amber-300/20 mix-blend-screen"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
