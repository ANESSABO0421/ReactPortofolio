import React from "react";

const Footer = () => {
  return (
    <footer class="flex h-[100px] flex-col md:flex-row  items-center justify-around rounded-t-xl  py-4 text-sm bg-slate-800 text-white/70">
      <div className="flex gap-5 w-full justify-between items-center px-4 py-3">
        <div className="flex items-center max-sm:text-sm lg:text-lg">
          <p>Copyright © 2025 Anees. All rights reservered.</p>
        </div>
        <button
          className="bg-white text-black w-10 h-10 rounded-md text-xl hover:border-4 border-transparent hover:border-blue-500  duration-300 ease-out cursor-pointer "
          onClick={() => window.scrollTo(0, 0)}
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
