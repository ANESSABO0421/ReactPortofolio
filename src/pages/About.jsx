import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="relative flex flex-col lg:flex-row justify-center items-center min-h-screen px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Tilted cosmic grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(115deg,#fff_1px,transparent_1px),linear-gradient(-115deg,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-white rounded-full"
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
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex-1 max-w-2xl p-10 md:p-14 m-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.1)]"
      >
        {/* Section Title */}
        <div className="mb-10 text-center">
          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-3">
            Portfolio
          </p>
          <h1 className="text-[42px] md:text-6xl lg:text-[56px] font-bold bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            About <span className="text-amber-400">Me</span>
          </h1>
          <div className="mx-auto mt-4 w-24 h-[3px] bg-gradient-to-r from-blue-600 to-amber-400 rounded-full"></div>
        </div>

        {/* About Paragraph */}
        <p className="text-base sm:text-lg md:text-[20px] text-justify font-light leading-relaxed mb-8 text-gray-300">
          I'm a passionate{" "}
          <span className="font-semibold text-blue-400">MERN Stack Developer</span>{" "}
          currently interning at{" "}
          <span className="font-semibold text-amber-400">Sofroniics</span>, building
          full-stack web applications.
          <br />
          I hold a Bachelor's degree in{" "}
          <span className="font-semibold text-blue-400">Computer Science</span> from{" "}
          <span className="font-semibold text-amber-400">GEMS College, Ramapuram</span>.
          <br />I love transforming complex problems into simple, elegant, and impactful
          solutions. My focus is on mastering{" "}
          <span className="font-semibold text-blue-400">React.js</span> &
          <span className="font-semibold text-blue-400"> Node.js</span> while building
          scalable applications that make a difference.
        </p>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Role Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-gray-900/40 to-gray-700/20 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💼</span>
              <span className="text-base font-semibold text-amber-400">
                Current Role
              </span>
            </div>
            <div className="text-lg font-bold text-blue-400">MERN Stack Developer</div>
            <div className="text-sm text-gray-400">Interning at Sofroniics</div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-gray-900/40 to-gray-700/20 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🎓</span>
              <span className="text-base font-semibold text-amber-400">Education</span>
            </div>
            <div className="text-lg font-bold text-blue-400">Computer Science</div>
            <div className="text-sm text-gray-400">GEMS College, Ramapuram</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex-1 p-6 m-4 flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative group"
        >
          {/* Glowing Gradient Border */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-500 to-amber-400 blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

          {/* Glass Card with Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center">
            <img
              src="https://cdn.dribbble.com/users/1019864/screenshots/3079099/media/9e5055da2ee6c899aab9403ceb7d0dc3.gif"
              alt="coding gif"
              className="w-[85%] h-[85%] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-amber-400/20"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
