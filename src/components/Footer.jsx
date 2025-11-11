import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 5 + 3,
    }));
    setStars(newStars);
  }, []);

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* === Starry Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]">
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(120deg,#ffffff_1px,transparent_1px),linear-gradient(-120deg,#ffffff_1px,transparent_1px)] bg-[length:45px_45px]" />
      </div>

      {/* === Floating Stars === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* === Glass Panel === */}
      <div className="relative z-10 mx-auto w-[90%] max-w-6xl my-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)] p-8 flex flex-col items-center justify-center">
        {/* Metallic Glow Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 blur-sm"></div>

        {/* === Title === */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-300 to-gray-600 text-xl sm:text-2xl tracking-[0.2em] font-semibold uppercase text-center"
        >
          Engineered & Designed by{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Anees
          </span>
        </motion.h2>

        {/* === Subtext === */}
        <p className="mt-3 text-gray-300/80 text-sm sm:text-base tracking-wide">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

        {/* === Scroll to Top Button === */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 35px rgba(0,255,255,0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="mt-6 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center 
          text-white shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] relative overflow-hidden"
        >
          {/* Glow Aura */}
          <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-pulse" />
          <FaArrowUp className="text-2xl relative z-10" />
        </motion.button>
      </div>

      {/* === Bottom Glow Strip === */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-60 blur-sm" />
    </footer>
  );
};

export default Footer;
