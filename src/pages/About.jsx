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

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center 
                 bg-[#0d0d0d] overflow-hidden px-6 sm:px-10 md:px-16 py-20 lg:py-28"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* 🌐 GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full opacity-[0.15]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                115deg,
                rgba(255,255,255,0.05) 0px,
                rgba(255,255,255,0.05) 1px,
                transparent 1px,
                transparent 50px
              ),
              repeating-linear-gradient(
                -115deg,
                rgba(255,255,255,0.05) 0px,
                rgba(255,255,255,0.05) 1px,
                transparent 1px,
                transparent 50px
              )
            `,
            animation: prefersReducedMotion ? "none" : "gridFloat 35s linear infinite",
          }}
        ></div>

        <style>
          {`
            @keyframes gridFloat {
              0% { transform: translate(0px, 0px); }
              100% { transform: translate(-160px, 160px); }
            }
          `}
        </style>
      </div>

      {/* 🌟 Floating Stars */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute bg-white rounded-full"
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

      <style>
        {`
          @keyframes starFloat {
            0% { transform: translateY(0px); opacity: 0.5; }
            50% { opacity: 1; transform: translateY(-10px); }
            100% { opacity: 0.5; transform: translateY(0px); }
          }
        `}
      </style>

      {/* 👨‍💻 Image Block */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex justify-center items-center 
                  w-full lg:w-1/2 mb-12 lg:mb-0"
      >
        <TiltCard
          imageSrc="/anees.webp"
          altText="Anees Aboobacker"
          captionText="Anees Aboobacker"
          containerHeight="350px"
          containerWidth="350px"
          imageHeight="320px"
          imageWidth="320px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Anees Aboobacker</p>
          }
          className="sm:!w-[380px] sm:!h-[380px] md:!w-[420px] md:!h-[420px]"
        />
      </motion.div>

      {/* 📝 Text Block */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center lg:text-left 
                  w-full lg:w-1/2 max-w-2xl"
      >
        <h1
          className="text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.3rem] 
                     font-extrabold uppercase bg-gradient-to-b 
                     from-[#f0f0f0] via-[#bcbcbc] to-[#6c6c6c]
                     bg-clip-text text-transparent mb-6 
                     drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] leading-tight"
          id="about-heading"
        >
          MERN STACK DEVELOPER
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-[95%] mx-auto lg:mx-0">
          Hi, I’m{" "}
          <span className="font-semibold text-sky-400">Anees Aboobacker</span>, a{" "}
          <span className="font-semibold text-sky-400">MERN Stack Developer</span>{" "}
          currently interning at{" "}
          <span className="font-semibold text-amber-300">
            Softronics Perinthalmanna
          </span>
          . I love building futuristic, performance-focused applications.
          <br />
          I completed my{" "}
          <span className="font-semibold text-sky-400">
            B.Sc. in Computer Science
          </span>{" "}
          from{" "}
          <span className="font-semibold text-amber-300">
            GEMS College, Ramapuram
          </span>
          .
        </p>

        {/* 📊 Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 
                        justify-items-center lg:justify-items-start">
          {[
            { title: "20+", subtitle: "Projects" },
            { title: "3+", subtitle: "Years Learning" },
            { title: "5+", subtitle: "Technologies" },
            { title: "Core Stack", subtitle: "React • MongoDB" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group flex flex-col justify-center items-center 
                         w-[130px] sm:w-[150px] h-[95px] sm:h-[110px] 
                         rounded-2xl border border-gray-700/50 
                         bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] 
                         relative overflow-hidden shadow-[inset_0_0_25px_rgba(255,255,255,0.05)] 
                         transition-all duration-300"
            >
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

export default memo(About);
