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
        className={`flex items-center gap-2 sm:gap-3 md:gap-5 
        px-3 sm:px-4 md:px-6 py-1 sm:py-2 
        rounded-full backdrop-blur-lg shadow-md border transition-colors duration-300 
        ${
          darkMode
            ? "bg-black/50 border-white/30 text-white"
            : "bg-white/50 border-black/30 text-black"
        }`}
      >
        {links.map((link) => (
          <li key={link.name} className="text-xs sm:text-sm md:text-base">
            <a
              href={link.href}
              onClick={() => setActive(link.name.toLowerCase())}
              className={`px-2 sm:px-3 py-0.5 rounded-full transition-all duration-300 ease-in-out 
              ${
                active === link.name.toLowerCase()
                  ? darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : "hover:shadow-[0_0_8px_rgba(255,255,255,0.6)]"
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
              w-8 h-8 sm:w-9 sm:h-9
              rounded-full
              border
              ${
                darkMode
                  ? "bg-white text-black border-gray-300"
                  : "bg-black text-white border-gray-700"
              }
              shadow-sm
              hover:scale-110 hover:shadow-md
              active:scale-95
              transition-all duration-300 ease-in-out
            `}
          >
            {darkMode ? (
              <BsFillSunFill className="text-yellow-500 text-lg sm:text-xl" />
            ) : (
              <MdDarkMode className="text-blue-400 text-lg sm:text-xl" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
