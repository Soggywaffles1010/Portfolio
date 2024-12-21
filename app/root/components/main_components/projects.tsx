'use client';

import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import Textbox from '../../../reusable/textbox';

const Projects: React.FC = () => {
  const scenes = [
    'https://prod.spline.design/RICmhL32CwR6y6c4/scene.splinecode',
    'https://prod.spline.design/7snSuFAEOTFdJ3AB/scene.splinecode',
    'https://prod.spline.design/jEStMh8oXqCKsUqN/scene.splinecode',
    'https://prod.spline.design/Gp5ckJCDfbYRFFev/scene.splinecode',
    'https://prod.spline.design/cB7yTlPnUxhsBQjv/scene.splinecode',
    'https://prod.spline.design/KCyJkMnTt4c-3F1i/scene.splinecode',
  ];

  const titles = ['Quantumtek', 'MedGrocer', 'Mathayog', 'Terramartz', 'Adonis', 'Trach'];

  const desc = [
    "Welcome to QuantumTek, the premier online betting platform...",
    'MedGrocer is an online pharmaceutical e-commerce platform...',
    'Mathayog is an online educational game designed to make learning math enjoyable...',
    'Terramartz is a marketplace connecting farmers with consumers of fresh farm produce...',
    'Adonis is a mobile application designed for a local fitness gym...',
    "Welcome to Trach, the all-in-one real estate app...",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('scroll-animate-cardNext');
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePrevious = () => {
    setAnimationClass('scroll-animate-cardPrev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + scenes.length) % scenes.length);
  };

  const handleNext = () => {
    setAnimationClass('scroll-animate-cardNext');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scenes.length);
  };

  // Swipe Navigation for Mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touchStartX = e.touches[0].clientX;

      const handleTouchMove = (e: TouchEvent) => {
        const touchEndX = e.touches[0].clientX;
        if (touchStartX - touchEndX > 50) {
          handleNext(); // Swipe left
        } else if (touchEndX - touchStartX > 50) {
          handlePrevious(); // Swipe right
        }
      };

      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', () => {
        window.removeEventListener('touchmove', handleTouchMove);
      });
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  // Hide the overlay after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex mx-auto justify-center h-screen relative w-full rounded-lg">
      {/* Overlay Instruction for Mobile */}
      {showOverlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 md:hidden">
          <p className="text-white text-lg">Swipe left or right to navigate</p>
        </div>
      )}

      {/* Previous Button */}
      <div className="my-auto hidden md:block">
        <button
          onClick={handlePrevious}
          className="px-4 py-4 rounded-full border border-opacity-50 bg-opacity-0 card-regular2"
        >
          <GrFormPrevious />
        </button>
      </div>

      {/* Main Spline Viewer */}
      <div className="flex relative overflow-hidden flex-col items-center w-full sm:w-1/2">
        {scenes.map((scene, index) => (
          <div
            key={index}
            className={`w-[50rem] rounded-md z-10 h-[55rem] ${
              index === currentIndex ? '' : 'hidden'
            }`}
          >
            <div className="flex justify-center translate-y-[5rem] tracking-wider text-4xl font-semibold">
              {index === currentIndex && <h1>{titles[index]}</h1>}
            </div>
            <Spline scene={scene} className={animationClass} />
            {index === currentIndex && (
              <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2  sm:w-3/4 w-full ">
                <Textbox lines={[desc[index]]} typingSpeed={80} delay={50} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="my-auto hidden md:block">
        <button
          onClick={handleNext}
          className="px-4 py-4 rounded-full border border-opacity-50 bg-opacity-0 card-regular2"
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Projects;
