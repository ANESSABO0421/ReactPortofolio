import React from "react";
import { FaGithub, FaLinkedin, FaInstagram,FaGoogle } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section className="pt-[10vh] h-screen flex flex-col lg:flex-row">
        <div className=" w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center items-center gap-5">
          <h1 className="Name text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold">
            Hi I'm<span className=" text-amber-300"> Anees Aboobacker</span>
          </h1>
          <div>
            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-[40px] ">
              MERN Full Stack Developer
            </h1>
          </div>
          <div className=" w-full h-15 flex justify-center items-center  gap-2 md:gap-5 lg:gap-10">
            <a
              href="#"
              className="border-3 border-[#080f8e] hover:bg-[#080f8e] hover:text-white duration-300 ease-out rounded-full h-[50px] w-[50px] flex items-center justify-center"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="border-3 border-[#080f8e] hover:bg-[#080f8e] hover:text-white duration-300 ease-out rounded-full h-[50px] w-[50px] flex items-center justify-center"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="border-3 border-[#080f8e] hover:bg-[#080f8e] hover:text-white duration-300 ease-out rounded-full h-[50px] w-[50px] flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="border-3 border-[#080f8e] hover:bg-[#080f8e] hover:text-white duration-300 ease-out rounded-full h-[50px] w-[50px] flex items-center justify-center"
            >
              <FaGoogle/>
            </a>
          </div>
          <div className="flex gap-5">
            <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur ">
                Download Cv
              </button>
            </div>
            <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur ">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="img-box  w-full h-1/2  lg:w-1/2 lg:h-full flex justify-center items-center">
          <img
            src="https://www.web24zone.com/wp-content/uploads/2022/10/46207-programmer-1.gif"
            alt="Animated Hero"
            className="rounded-2xl h-[300px] md:h-[380px] lg:h-[400px] xl:h-[500px] shadow-xl/30"
            data-aos="fade-up"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
