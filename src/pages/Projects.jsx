import { useState, useContext } from "react";
import { ThemeContext } from "../App"; // or your actual path

const Projects = () => {
  const [tilt, setTilt] = useState({});
  const { darkMode } = useContext(ThemeContext);

  const handleMove = (e) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = ((e.clientY - top) / height - 0.5) * -10;
    const y = ((e.clientX - left) / width - 0.5) * 10;
    setTilt({ x, y, id: Number(card.dataset.id) }); // ✅ Fix: convert to number
  };

  const handleLeave = () => {
    setTilt({});
  };

  const cards = Array.from({ length: 6 });

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12">
      <h1 className="text-5xl md:text-6xl font-bold text-center m-2 md:m-4 lg:m-5">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {cards.map((_, idx) => (
          <div
            key={idx}
            data-id={idx}
            className={`w-full max-w-[320px] h-[380px] ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            } rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.02]`}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={
              tilt.id === idx
                ? {
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  }
                : {}
            }
          >
            <img
              src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop"
              alt={`Project ${idx + 1}`}
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <div className="px-5 py-4">
              <h3 className="text-lg font-semibold mb-2">
                Interactive Tilt Project
              </h3>
              <p className="text-sm">
                Hover over this card to reveal a 3D tilt animation that adds a
                dynamic user experience.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
