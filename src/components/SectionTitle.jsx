// src/components/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ children, className = '' }) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
        {children}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;