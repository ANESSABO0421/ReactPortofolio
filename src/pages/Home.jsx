import React, { useMemo, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

const STAR_COUNT = 20;
const SOCIAL_LINKS = [
  { icon: <FaGithub size={26} aria-hidden="true" />, link: "https://github.com/ANESSABO0421", label: "GitHub" },
  { icon: <FaLinkedin size={26} aria-hidden="true" />, link: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaInstagram size={26} aria-hidden="true" />, link: "https://instagram.com", label: "Instagram" },
];

const createStarField = (count) =>
  Array.from({ length: count }, (_, id) => ({
    id,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.8 + 0.3,
    duration: Math.random() * 5 + 4,
  }));

const Home = () => {
  const prefersReducedMotion = useReducedMotion();
  const stars = useMemo(() => createStarField(STAR_COUNT), []);

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative min-h-screen bg-[#0d0d0d] text-gray-200 overflow-hidden flex items-center"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* === ANIMATING GRID BACKGROUND === */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-[-50%] moving-grid"></div>
      </div>

      {/* === FLOATING STARS === */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute bg-gray-300 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.4)] star-float"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: prefersReducedMotion ? "none" : `starFloat ${star.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-16 md:py-24">
        {/* === NAME SECTION === */}
        <motion.h1
          id="home-heading"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white font-display mb-2 uppercase tracking-tighter leading-none text-7xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem] shine-text"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          <span className="block flex items-center justify-center">Anees</span>
          <span className="-mt-2 block sm:-mt-4 mr-2">Aboobacker</span>
        </motion.h1>

        {/* === INFO GRID === */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
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
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="mt-10 flex items-center space-x-5 sm:space-x-8"
        >
          {SOCIAL_LINKS.map((item) => (
            <motion.a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform duration-200"
              aria-label={`Visit Anees on ${item.label}`}
              whileHover={
                prefersReducedMotion ? undefined : { scale: 1.15 }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { type: "spring", stiffness: 400, damping: 20 }
              }
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* === DOWNLOAD CV BUTTON === */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="/Anees_Aboobacker_CV.pdf" // Update this path to your actual CV file
            download="Anees_Aboobacker_CV.pdf"
            className="
              inline-flex items-center px-6 py-3 sm:px-8 sm:py-3.5
              text-sm font-medium text-white 
              bg-transparent border-2 border-white rounded-full
              hover:bg-white hover:text-black hover:font-medium
              hover:scale-105
              transition-all duration-300 ease-in-out
              group relative overflow-hidden
            "
            aria-label="Download CV"
          >
            <span className="relative z-10 flex items-center">
              <FaDownload className="mr-2" />
              Download CV
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </motion.div>

        {/* Add the CSS for moving grid background and text shine */}
        <style jsx>{`
        .moving-grid {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 30px 30px;
          transform: rotate(-20deg) scale(1.5);
          animation: ${prefersReducedMotion ? 'none' : 'gridMove 20s linear infinite'};
        }
        
        .shine-text {
          background: linear-gradient(
            90deg,
            #ffffff,
            #cccccc,
            #888888,
            #cccccc,
            #ffffff
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: ${prefersReducedMotion ? 'none' : 'textShine 3s ease-in-out infinite'};
        }
        
        @keyframes gridMove {
          0% {
            transform: rotate(-20deg) scale(1.5) translateX(0px) translateY(0px);
          }
          100% {
            transform: rotate(-20deg) scale(1.5) translateX(30px) translateY(30px);
          }
        }
        
        @keyframes starFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes textShine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .button-hover-effect {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
      </div>
    </section>
  );
};

export default memo(Home);