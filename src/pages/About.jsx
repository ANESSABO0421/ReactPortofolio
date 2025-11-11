import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center 
                 bg-[#050505] overflow-hidden px-6 sm:px-10 md:px-16 py-16 lg:py-24"
    >
      {/* ✨ Metallic Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,180,180,0.05),transparent_70%)]">
        <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(115deg,#bfbfbf_1px,transparent_1px),linear-gradient(-115deg,#bfbfbf_1px,transparent_1px)] bg-[length:45px_45px]" />
      </div>

      {/* 🌌 Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-gradient-to-br from-gray-200 to-gray-400 rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 👨‍💻 Left Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 flex justify-center items-center w-full lg:w-1/2 mb-10 lg:mb-0"
      >
        <div className="relative group w-[70%] sm:w-[60%] md:w-[55%] lg:w-[75%] max-w-[380px] aspect-square">
          {/* 🔥 Glowing Ring */}
          <div className="absolute shadow-white/50 rounded-3xl bg-gradient-to-r from-sky-500 via-gray-200 to-amber-400 blur-lg opacity-60 group-hover:opacity-90 transition-all duration-700 animate-pulse" />
          <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <img
              src="https://cdn.dribbble.com/users/1019864/screenshots/3079099/media/9e5055da2ee6c899aab9403ceb7d0dc3.gif"
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </motion.div>

      {/* 🪞 Right Section - Text */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center lg:text-left w-full lg:w-1/2 max-w-2xl"
      >
        <h1
          className="text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.2rem] font-extrabold uppercase
                     bg-gradient-to-b from-[#f0f0f0] via-[#bcbcbc] to-[#6c6c6c]
                     bg-clip-text text-transparent mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
        >
          MERN STACK DEVELOPER
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-[95%] mx-auto lg:mx-0">
          Hi, I’m{" "}
          <span className="font-semibold text-sky-400">Anees Aboobacker</span>, a{" "}
          <span className="font-semibold text-sky-400">MERN Stack Developer</span>{" "}
          currently interning at{" "}
          <span className="font-semibold text-amber-300">Softronics Perinthalmanna</span>. 
          I love crafting futuristic, high-performance web applications that combine 
          design and functionality seamlessly.
          <br />
          I hold a{" "}
          <span className="font-semibold text-sky-400">
            B.Sc. in Computer Science
          </span>{" "}
          from{" "}
          <span className="font-semibold text-amber-300">
            GEMS College, Ramapuram
          </span>
          , and I’m passionate about creating efficient, visually engaging digital experiences.
        </p>

        {/* ⚡ Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center lg:justify-items-start">
          {[
            { title: "20+", subtitle: "Projects" },
            { title: "3+", subtitle: "Years Learning" },
            { title: "5+", subtitle: "Technologies" },
            { title: "Core Stack", subtitle: "React • Node • MongoDB" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="group flex flex-col justify-center items-center 
                         w-[130px] sm:w-[150px] h-[95px] sm:h-[110px] 
                         rounded-2xl border border-gray-700/50 
                         bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a]
                         relative overflow-hidden shadow-[inset_0_0_25px_rgba(255,255,255,0.05)]
                         transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/20 via-transparent to-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="text-xl sm:text-2xl font-bold text-gray-100 z-10">
                {item.title}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 z-10">
                {item.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
