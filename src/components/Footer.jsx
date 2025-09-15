import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white/70 rounded-t-2xl py-6 px-4 shadow-lg">
      <div className="flex w-full max-w-6xl items-center justify-between">
        {/* Copyright */}
        <p className="text-xs sm:text-sm md:text-base tracking-wide">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Anees</span>. All rights reserved.
        </p>

        {/* Scroll to top button */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-black shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out"
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
