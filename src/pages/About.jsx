import React, { useMemo, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import TiltCard from "../components/TiltCard";

const STAR_COUNT = 20;

const generateStars = (count) =>
  Array.from({ length: count }, (_, id) => ({
    id,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.9 + 0.2,
    duration: Math.random() * 6 + 4,
  }));

const About = () => {
  const prefersReducedMotion = useReducedMotion();
  const stars = useMemo(() => generateStars(STAR_COUNT), []);
  const statsData = useMemo(() => [
    { title: "20+", subtitle: "PROJECTS" },
    { title: "3+", subtitle: "YEARS" },
    { title: "5+", subtitle: "TECH" },
    { title: "MERN", subtitle: "STACK" },
  ], []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative min-h-screen bg-[#0d0d0d] text-white overflow-hidden flex items-center justify-center py-12 lg:py-0"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* 🌐 GRID BACKGROUND - Same as Home */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-[-50%] moving-grid"></div>
      </div>

      {/* 🌟 Floating Stars - Same as Home */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute bg-white rounded-full star-float"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: prefersReducedMotion ? "none" : `starFloat ${star.duration}s ease-in-out infinite`,
            }}
          ></span>
        ))}
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

        {/* LEFT SIDE - IMAGE - Responsive sizing */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
        >
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
            <TiltCard
              imageSrc="/anees.webp"
              altText="Anees Aboobacker"
              captionText="Anees Aboobacker"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="95%"
              imageWidth="95%"
              rotateAmplitude={10}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text text-sm sm:text-base">Anees Aboobacker</p>
              }
              className="!w-full !h-full"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE - CONTENT */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2"
        >
          {/* MAIN HEADING - Responsive text sizes */}
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white font-display mb-6 uppercase tracking-tight leading-tight 
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            MERN STACK
            <br />
            DEVELOPER
          </motion.h1>

          {/* DESCRIPTION - Responsive text and spacing */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10
                       max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
          >
            Hi, I'm{" "}
            <span className="font-semibold text-sky-400">Anees Aboobacker</span>, a{" "}
            <span className="font-semibold text-sky-400">MERN Stack Developer</span>{" "}
            currently interning at{" "}
            <span className="font-semibold text-amber-300">
              Softronics Perinthalmanna
            </span>
            . I love building futuristic, performance-focused applications.
            <br className="hidden sm:block" />
            I completed my{" "}
            <span className="font-semibold text-sky-400">
              B.Sc. in Computer Science
            </span>{" "}
            from{" "}
            <span className="font-semibold text-amber-300">
              GEMS College, Ramapuram
            </span>
            .
          </motion.p>

          {/* STATS GRID - Responsive grid and sizing */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="
              grid grid-cols-2 sm:grid-cols-4 
              gap-3 sm:gap-4 md:gap-6 
              w-full max-w-2xl mx-auto lg:mx-0
            "
          >
            {statsData.map((item, i) => (
              <motion.div
                key={i}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="
                  flex flex-col items-center justify-center
                  w-full h-20 sm:h-24 md:h-28
                  rounded-xl sm:rounded-2xl border border-gray-700/50 
                  bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] 
                  relative overflow-hidden 
                  shadow-[inset_0_0_25px_rgba(255,255,255,0.05)] 
                  transition-all duration-300
                  group
                  px-2
                "
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-sky-500/20 via-transparent to-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white z-10 whitespace-nowrap">
                  {item.title}
                </div>
                <div className="text-xs sm:text-xs md:text-sm text-gray-400 mt-1 z-10 font-semibold tracking-wider whitespace-nowrap">
                  {item.subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* CSS STYLES */}
      <style jsx>{`
        .moving-grid {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 30px 30px;
          transform: rotate(-20deg) scale(1.5);
          animation: ${prefersReducedMotion ? 'none' : 'gridMove 20s linear infinite'};
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
          0% { transform: translateY(0px); opacity: 0.5; }
          50% { opacity: 1; transform: translateY(-10px); }
          100% { opacity: 0.5; transform: translateY(0px); }
        }

        /* Mobile-first responsive adjustments */
        @media (max-width: 640px) {
          .moving-grid {
            transform: rotate(-20deg) scale(2);
            background-size: 20px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default memo(About);