import React, { useMemo, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
          className="text-white font-display mb-2 uppercase tracking-tighter leading-none text-7xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem]"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          <span className="block flex items-center justify-center">Anees</span>
          <span className="-mt-2 block sm:-mt-4">Aboobacker</span>
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
      </div>
    </section>
  );
};

export default memo(Home);
