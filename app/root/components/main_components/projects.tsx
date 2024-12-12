'use client';

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import Textbox from '../reusable/textbox';

const Projects: React.FC = () => {
  const scenes = [
    'https://prod.spline.design/RICmhL32CwR6y6c4/scene.splinecode',
    'https://prod.spline.design/7snSuFAEOTFdJ3AB/scene.splinecode',
    'https://prod.spline.design/jEStMh8oXqCKsUqN/scene.splinecode',
    'https://prod.spline.design/Gp5ckJCDfbYRFFev/scene.splinecode',
    'https://prod.spline.design/cB7yTlPnUxhsBQjv/scene.splinecode',
    
    'https://prod.spline.design/KCyJkMnTt4c-3F1i/scene.splinecode',
  ];

  const titles = ['Quantumtek', 'MedGrocer', 'Mathayog', 'Terramartz', 'Adonis',  'Trach'];

  const desc = [
    "Welcome to QuantumTek, the premier online betting platform that brings the thrill of the casino and the excitement of sports betting right to your fingertips. Whether you're a fan of classic casino games, live sports betting, or engaging online games, QuantumTek has it all.",
    'MedGrocer is an online pharmaceutical e-commerce platform that aims to deliver medicine through an online service. The design employs the teal, white, and pearl color scheme of the MedGrocer logo, maintaining the company\'s brand identity. These colors are strategically assigned to different design elements to distinguish between static and active components throughout the pages.',
    'Mathayog is an online educational game designed to make learning math enjoyable for kids. The design features a playful gold and blue color palette to capture children\'s curiosity. This project was particularly challenging, involving the creation of 50 unique animations and prototypes for various lessons.',
    'Terramartz is a marketplace connecting farmers with consumers of fresh farm produce. The design incorporates green and orange colors to symbolize freshness and consumerism, creating an inviting and vibrant user experience.',
    'Adonis is a mobile application designed for a local fitness gym. The project involved creating a sleek and user-friendly interface that caters to fitness enthusiasts, helping them manage their workouts and track their progress effectively.',
    
    "Welcome to Trach, the all-in-one real estate app designed to make buying, renting, and selling properties a breeze. Whether you're looking for your dream home, a rental property, or an investment opportunity, Trach has you covered. Our app connects you with top real estate agents to help you navigate the market with ease.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('scroll-animate-cardNext');
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false)

  const handlePrevious = () => {
    setAnimationClass('scroll-animate-cardPrev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + scenes.length) % scenes.length);
  };

  const handleNext = () => {
    setAnimationClass('scroll-animate-cardNext');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scenes.length);
  };

  return (
    <div className="flex mx-auto justify-center h-screen relative w-full rounded-lg">
      {/* Previous Button */}
      <div className="my-auto">
        <button
          onClick={handlePrevious}
          className={`px-4 py-4 rounded-full border border-opacity-50 bg-opacity-0  ${
            isHovered ? 'card-hover2' : 'card-regular2'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <GrFormPrevious />
        </button>
      </div>

      {/* Main Spline Viewer */}
      <div className={`flex relative overflow-hidden flex-col items-center`}>
        {scenes.map((scene, index) => (
          <div key={index} className={`w-[50rem] rounded-md z-10 h-[55rem] ${index === currentIndex ? '' : 'hidden'}`}>
            <div className="flex justify-center translate-y-[5rem] tracking-wider text-4xl font-semibold">
              {index === currentIndex && <h1>{titles[index]}</h1>}
            </div>
            <Spline scene={scene} className={animationClass} />
            {index === currentIndex && (
              <div className="absolute -translate-y-[10rem] translate-x-[6rem] w-3/4">
                <Textbox lines={[desc[index]]} typingSpeed={80} delay={50} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="my-auto">
        <button
          onClick={handleNext}
          className={`px-4 py-4 rounded-full border   border-opacity-50 bg-opacity-0  ${
            isHovered2 ? 'card-hover2' : 'card-regular2'
          }`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Projects;
