import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#About" },
    { name: "Works", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <ul
        className={`flex items-center gap-3 sm:gap-4 md:gap-6 
        px-4 sm:px-6 md:px-8 py-2 sm:py-3 
        rounded-full backdrop-blur-lg shadow-lg border-2 transition-colors duration-300 
        ${
          darkMode
            ? "bg-black/50 border-white/30 text-white"
            : "bg-white/50 border-black/30 text-black"
        }`}
      >
        {links.map((link) => (
          <li key={link.name} className="text-sm sm:text-base md:text-lg">
            <a
              href={link.href}
              onClick={() => setActive(link.name.toLowerCase())}
              className={`px-3 sm:px-4 py-1 rounded-full transition-all duration-300 ease-in-out 
              ${
                active === link.name.toLowerCase()
                  ? darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : "hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}

        {/* Dark/Light Mode Button */}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`
    relative flex items-center justify-center 
    ml-1 sm:ml-2
    w-10 h-10 sm:w-12 sm:h-12
    rounded-full
    border
    ${
      darkMode
        ? "bg-white text-black border-gray-300"
        : "bg-black text-white border-gray-700"
    }
    shadow-md
    hover:scale-110 hover:shadow-xl
    active:scale-95
    transition-all duration-300 ease-in-out
  `}
          >
            {darkMode ? (
              <BsFillSunFill className="text-yellow-500 text-xl sm:text-2xl" />
            ) : (
              <MdDarkMode className="text-blue-400 text-xl sm:text-2xl" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
