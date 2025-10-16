import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaGoogle } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { easeOut, motion } from "framer-motion";

const Home = ({ darkMode }) => {
  return (
    <div>
      <section className="pt-[12vh] min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6">
          {/* Name */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide 
            ${darkMode ? "text-white" : "text-[#1B4B9A]"}`}
          >
            Hi, I’m{" "}
            <span className="text-amber-400 font-semibold">
              Anees Aboobacker
            </span>
          </h1>

          {/* Typing Effect for Role */}
          <h2
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.15em] uppercase 
            ${darkMode ? "text-blue-300" : "text-[#497ba3]"}`}
          >
            <TypeAnimation
              sequence={[
                "MERN Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start items-center gap-4 md:gap-6 mt-6">
            {[
              { icon: <FaGithub />, link: "https://github.com/ANESSABO0421" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/anees-aboobacker-4842b627a/",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/anees__aboobacker/",
              },
              { icon: <FaGoogle />, link: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className={`border-2 rounded-full h-[45px] w-[45px] md:h-[50px] md:w-[50px] flex items-center justify-center shadow-md hover:scale-110 transition duration-300 
                ${
                  darkMode
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-[#FFB900] text-[#FFB900] hover:bg-[#FFB900] hover:text-white"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-8">
            <a
              href="/Anees_Aboobacker_CV.pdf"
              download="Anees_Aboobacker_CV.pdf"
            >
              <button
                className={`px-6 md:px-8 py-3 text-sm md:text-base rounded-full cursor-pointer font-medium hover:scale-105 transition duration-300 shadow-md 
              ${
                darkMode
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gradient-to-r from-[#080f8e] to-[#497ba3] text-white"
              }`}
              >
                Download CV
              </button>
            </a>
            <button
              className={`px-6 md:px-8 py-3 text-sm md:text-base cursor-pointer rounded-full font-medium hover:scale-105 transition duration-300 shadow-md 
              ${
                darkMode
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                  : "bg-gradient-to-r from-[#497ba3] to-[#080f8e] text-white"
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{
            opacity: 0.8,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: easeOut,
           duration:1
          }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <img
            src="https://www.web24zone.com/wp-content/uploads/2022/10/46207-programmer-1.gif"
            alt="Animated Hero"
            className="transform rounded-2xl h-[260px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[520px] 
               shadow-2xl hover:-translate-y-2 transition-all ease-out duration-500"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
