import React from "react";
import { motion } from "framer-motion";

const AnimatedGridBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-[#050505] overflow-hidden">
      {/* === 1. Tilted grid pattern === */}
      <div className="absolute inset-0 rotate-[0deg]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(-115deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* === 2. Slow infinite movement === */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.07), transparent 60%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* === 3. Soft glowing pulse in the center === */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* === 4. Content on top === */}
      <div className="relative z-10 text-center text-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AnimatedGridBackground;
