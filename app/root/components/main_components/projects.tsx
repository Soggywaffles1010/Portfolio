'use client';

import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Projects: React.FC = () => {
    
  const scenes = [
    "https://prod.spline.design/7snSuFAEOTFdJ3AB/scene.splinecode",
    "https://prod.spline.design/jEStMh8oXqCKsUqN/scene.splinecode",
    "https://prod.spline.design/Gp5ckJCDfbYRFFev/scene.splinecode",
    "https://prod.spline.design/cB7yTlPnUxhsBQjv/scene.splinecode"
  ];

  const titles = [
    "MedGrocer",
    "Mathayog",
    "Terramartz",
    "Adonis",
  ];
  const desc = [
    "MedGrocer is an online pharmaceutical e-commerce platform that aims to deliver medicine through an online service. The design employs the teal, white, and pearl color scheme of the MedGrocer logo, maintaining the company's brand identity. These colors are strategically assigned to different design elements to distinguish between static and active components throughout the pages.",
    "Mathayog is an online educational game designed to make learning math enjoyable for kids. The design features a playful gold and blue color palette to capture children's curiosity. This project was particularly challenging, involving the creation of 50 unique animations and prototypes for various lessons.",
    "Terramartz is a marketplace connecting farmers with consumers of fresh farm produce. The design incorporates green and orange colors to symbolize freshness and consumerism, creating an inviting and vibrant user experience.",
    "Adonis is a mobile application designed for a local fitness gym. The project involved creating a sleek and user-friendly interface that caters to fitness enthusiasts, helping them manage their workouts and track their progress effectively."
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('scroll-animate-cardNext');
   

 

  const handlePrevious = () => {
    
    setAnimationClass('scroll-animate-cardPrev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + scenes.length) % scenes.length);
  };

  const handleNext = () => {
    
    setAnimationClass('scroll-animate-cardNext');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scenes.length);
  };

  return (
    <div className='flex mx-auto justify-center h-screen mt-64 relative'>
      <div className='my-auto'>
        <button onClick={handlePrevious} className='px-4 py-4 hover:border-0 bg-blue-500 text-white rounded-full border bg-opacity-0 border-opacity-50 border-white hover:bg-blue-300 hover:text-black'>
          <GrFormPrevious />
        </button>
      </div>
      <div className={`flex relative overflow-hidden flex-col items-center `}>
      <div className='translate-y-[5rem] tracking-wider text-4xl font-semibold'>
          Ui/Ux Designs
        </div>
        {scenes.map((scene, index) => (
            <div className='  '>

                      <div key={index} className={`   w-[50rem] rounded-md z-10 h-[55rem] ${index === currentIndex ? '' : 'hidden'}`}>
         
            <Spline scene={scene} className={animationClass} />
          
            
            {index === currentIndex && (
              <h1 className='text-center text-white text-2xl -translate-y-[11rem]'>
                {titles[index]}
              </h1>
            )}
            {index === currentIndex && (
             
                    <p className='text-center text-gray-500 mb-4  absolute -translate-y-32 scroll-animate-desc'>
                {desc[index]}
              </p>
                
             
              
            
            )}
          </div>
            </div>
            
        
        ))}
      </div>
      <div className='my-auto'>
        <button onClick={handleNext} className='px-4 py-4 hover:border-0 bg-blue-500 text-white rounded-full border bg-opacity-0 border-opacity-50 border-white hover:bg-blue-300 hover:text-black'>
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Projects;
