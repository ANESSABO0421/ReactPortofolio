import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-6 md:px-12 bg-transparent"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex-1 max-w-2xl p-10 md:p-14 m-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl dark:bg-black/40 dark:border-white/30"
      >
        {/* Section Title */}
        <div className="mb-10 text-center">
          <p className="uppercase tracking-[4px] text-gray-500 dark:text-gray-400 text-sm mb-3">
            Portfolio
          </p>
          <h1 className="text-[42px] md:text-6xl lg:text-[56px] font-bold text-blue-900 dark:text-white leading-tight">
            About <span className="text-amber-400">Me</span>
          </h1>
          <div className="mx-auto mt-4 w-24 h-[3px] bg-gradient-to-r from-blue-600 to-amber-400 rounded-full"></div>
        </div>

        {/* About Paragraph */}
        <p className="text-lg md:text-[22px] text-justify font-light leading-relaxed mb-8 text-blue-900 dark:text-gray-200">
          I'm a passionate
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            {" "}
            MERN Stack Developer{" "}
          </span>
          currently interning at
          <span className="font-semibold text-amber-500 dark:text-amber-400">
            {" "}
            Sofroniics{" "}
          </span>
          , building full-stack web applications.
          <br />
          I hold a Bachelor's degree in
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            {" "}
            Computer Science
          </span>{" "}
          from
          <span className="font-semibold text-amber-500 dark:text-amber-400">
            {" "}
            GEMS College, Ramapuram
          </span>
          .
          <br />
          I love transforming complex problems into simple, elegant, and
          impactful solutions. My focus is on mastering React.js & Node.js while
          building scalable applications that make a difference.
        </p>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Role Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass-info-card dark:glass-info-card-dark"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💼</span>
              <span className="text-base font-semibold text-amber-400">
                Current Role
              </span>
            </div>
            <div className="text-lg font-bold text-blue-700 dark:text-blue-400">
              MERN Stack Developer
            </div>
            <div className="text-sm text-blue-900/70 dark:text-gray-300">
              Interning at Sofroniics
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass-info-card dark:glass-info-card-dark"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🎓</span>
              <span className="text-base font-semibold text-amber-400">
                Education
              </span>
            </div>
            <div className="text-lg font-bold text-blue-700 dark:text-blue-400">
              Computer Science
            </div>
            <div className="text-sm text-blue-900/70 dark:text-gray-300">
              GEMS College, Ramapuram
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex-1 max-w-xl p-6 m-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl dark:bg-black/40 dark:border-white/30 flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 glass-img-card backdrop-blur-xl w-[360px] h-[300px] md:w-[420px] md:h-[320px]"
        >
          <img
            src="https://cdn.dribbble.com/users/1019864/screenshots/3079099/media/9e5055da2ee6c899aab9403ceb7d0dc3.gif"
            alt="coding gif"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-amber-400/20 rounded-2xl"></div>
        </motion.div>
      </motion.div>

      {/* Glass Card Custom Styles */}
      <style>{`
        .glass-info-card {
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.12),
            rgba(160, 180, 255, 0.06)
          );
          border-radius: 1rem;
          padding: 1.2rem 1.4rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 4px 20px rgba(34, 58, 130, 0.1);
        }
        .glass-info-card-dark {
          background: linear-gradient(
            120deg,
            rgba(0, 0, 0, 0.25),
            rgba(40, 40, 70, 0.1)
          );
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #d1d5db;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
        }
        .glass-img-card {
          background: linear-gradient(
            95deg,
            rgba(255, 255, 255, 0.15),
            rgba(255, 193, 7, 0.08)
          );
          box-shadow: 0 3px 15px rgba(255, 193, 7, 0.15);
        }
      `}</style>
    </section>
  );
};

export default About;
