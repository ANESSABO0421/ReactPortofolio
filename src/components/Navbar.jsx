import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { div } from "motion/react-client";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  // dark and lignt mode

  return (
    <div>
      <nav className="flex fixed w-screen z-100 justify-between items-center bg-[#080f8e]/80 h-[10vh] backdrop-blur-lg">
        <div className="Logo">
          <h1 className="px-2 sm:px-4 md:px-6 lg:px-8  text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Anees
          </h1>
        </div>
        {/* desktop menu */}
        <div className="desktop hidden lg:flex gap-6 px-2 sm:px-4 md:px-6 lg:px-8 text-1xl  lg:text-4xl">
          <a href="#">Home</a>
          <a href="#About">About</a>
          <a href="#">Projects</a>
          <a href="#">Skill</a>
          <a href="#">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${
              darkMode ? "bg-white text-[#080f8e] " : "bg-black text-white"
            } rounded-md px-2 py-1 hover:-translate-y-1 duration-300 ease-in  hover:shadow-md/30`}
          >
            {darkMode ? <BsFillSunFill /> : <MdDarkMode />}
          </button>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 text-3xl lg:hidden">
          {" "}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${
              darkMode ? "bg-white text-[#080f8e] " : "bg-black text-white"
            } rounded-md px-2 py-1 hover:-translate-y-1 duration-300 ease-in  hover:shadow-md/30`}
          >
            {darkMode ? <BsFillSunFill /> : <MdDarkMode />}
          </button>
          <button onClick={toggle}>
            {!open ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </nav>
      {/* mobile-menu  add flex*/}
      {/* <div className="mobile-menu hidden  items-center justify-around flex-col pt-[10vh] bg-red-500 h-[400px] lg:hidden ">
        <a href="#" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Home
        </a>
        <a href="#" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          About
        </a>
        <a href="#" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projects
        </a>
        <a href="#" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Skill
        </a>
        <a href="#" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Contact
        </a>
      </div> */}

      {/* overlay */}
      {open && <div className="bg-black inset-0 z-20 opacity-50 fixed"></div>}

      {/* sidebar */}
      <div
        className={`bg-[#080f8e] fixed z-50 gap-6  text-white h-full w-64 right-0 ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform backdrop-blur-2xl flex justify-center items-center `}
      >
        <ul className="flex gap-20  flex-col items-center justify-center">
          <li>
            <a
              href="#"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              onClick={toggle}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              onClick={toggle}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              onClick={toggle}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              onClick={toggle}
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="contact"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              onClick={toggle}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
