import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Star = () => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
  });

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${position.size}px`,
        height: `${position.size}px`,
        opacity: position.opacity,
        boxShadow: '0 0 10px 1px rgba(255, 255, 255, 0.5)',
      }}
      animate={{
        opacity: [position.opacity, position.opacity * 1.5, position.opacity],
      }}
      transition={{
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

const GridBackground = () => {
  const lines = [];
  const gridSize = 20; // Number of grid lines
  
  for (let i = 0; i < gridSize; i++) {
    // Horizontal lines
    lines.push(
      <div
        key={`h-${i}`}
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
        style={{
          top: `${(i / (gridSize - 1)) * 100}%`,
          opacity: 0.1,
        }}
      />
    );
    
    // Vertical lines
    lines.push(
      <div
        key={`v-${i}`}
        className="absolute w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"
        style={{
          left: `${(i / (gridSize - 1)) * 100}%`,
          opacity: 0.1,
        }}
      />
    );
  }

  return <div className="fixed inset-0 -z-10">{lines}</div>;
};

export default function CosmicBackground() {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Create 100 stars
    const starsArray = Array(100).fill(0).map((_, i) => <Star key={i} />);
    setStars(starsArray);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <GridBackground />
      <div className="absolute inset-0">
        {stars}
      </div>
    </div>
  );
}
