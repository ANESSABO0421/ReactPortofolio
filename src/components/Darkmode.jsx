import React, { useState } from "react";

const Darkmode = () => {
  const [dark, setdark] = useState(false);

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }transition-all duration-500`}
    >
      <button
        className="rounded-md px-4 py-3 bg-blue-500"
        onClick={() => setdark(!dark)}
      >
        {dark ? "ligntmode" : "darkmode"}
      </button>
    </div>
  );
};

export default Darkmode;
