'use client';
import React from 'react';

interface AnimatedButtonProps {
  text: string;
  onClick: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick }) => {
  return (
    <div className="relative group w-48 h-14">
      {/* Button */}
      <button
        onClick={onClick}
        className="absolute w-full h-full bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105"
      >
        <span className="relative z-10">{text}</span>
      </button>

      {/* Glow Effect */}
      <div className="absolute inset-0 blur-lg opacity-75 rounded-lg bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 group-hover:opacity-100 group-hover:animate-pulse"></div>

      {/* Floating Spots */}
      <div className="absolute inset-0 flex justify-center items-center space-x-2 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full opacity-0 animate-spot-${i + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedButton;
