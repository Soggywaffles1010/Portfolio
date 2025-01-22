'use client';

import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import Textbox from '../../../reusable/textbox';
import { FaFigma, FaGithub, FaPhone } from 'react-icons/fa';
import { IoNavigateOutline } from 'react-icons/io5';
import { CgFigma } from "react-icons/cg";
import { SiAdobeillustrator } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsswizardry } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import Paging from '@/app/reusable/paging';




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
  const prototypes = [
    'https://www.figma.com/proto/s2B5TkYVmsihFPNcnRJqOM/Quantumtek?node-id=108-1518&t=CliTIVXFiCzIpzl7-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    'https://www.figma.com/proto/gQnfq0z8AAYhH45bevRlxe/MedGrocer?node-id=3-7&p=f&t=THImF1AvFSRZ29dW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A7',
    'http://mathayog.com/',
    'https://terramartz.vercel.app/',
    '/',
    'https://trachbyallen.vercel.app/',
  ];
  const desc = [
    "As the sole UI/UX designer at Quantumtek, a premier online betting platform, my primary responsibility was to create the landing page. It was crucial to ensure a seamless workflow and adhere to brand guidelines meticulously. The design phase of the project was completed from November 2024 to December 2024.",
    
    "Medgrocer is an online pharmaceutical company committed to providing Filipinos with quick and accessible medicine from the comfort of their homes. This was my first UI/UX redesign project, where I worked as an intern alongside a senior designer and developers. The project lasted from April 2022 to July 2022, and Figma was my primary design tool.",
  
    "Mathayog is an app designed to enhance children's math skills through fun, interactive games. I worked as the sole graphics and UI/UX designer alongside educators and developers. The project took one year to complete, from July 2023 to July 2024, and is currently used exclusively by DEPED students in NCR. My main tools were Figma and Illustrator.",
  
    "Terramartz is an online marketplace for farm produce that connects farmers with buyers. I served as Project Manager and Graphics Designer, overseeing the app's development and design. The project ran from April 2024 to September 2024. While the platform is complete, it is actively seeking an Angel Investor for expansion and scaling opportunities.",
  
    "Adonis is a mobile application designed to enhance the customer experience for a local fitness gym. My role involved creating the entire UI/UX design for the app, ensuring ease of navigation and adherence to the fitness brand's identity. While the app's initial launch is in progress, additional updates are planned for future phases.",
  
    "Trach is my first full-stack web development project, completed as a one-man team. I handled everything from branding and design to development. Trach is a real estate agent hub that supports property buying, renting, and selling. Built with Next.js, the app is fully functional but paused due to funding issues. The project ran from February 2024 to April 2024.",
  ];
  
  const tools = [
    [<FaFigma key='figma' />, <SiAdobeillustrator />,],
    [<FaFigma key='figma' />],
    [<FaFigma key='figma' />, <SiAdobeillustrator />, ],
    [<FaFigma key='figma' />, <SiAdobeillustrator />, <VscVscode />, <IoLogoJavascript />, <SiCsswizardry />, <FaHtml5 />, <RiNextjsFill />],
    [<FaFigma key='figma' />],
    [<FaFigma key='figma' />, <SiAdobeillustrator />, <VscVscode />, <IoLogoJavascript />, <SiCsswizardry />, <FaHtml5 />, <RiNextjsFill />],
   
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse w-full h-[50vh]  overflow-visible">
      {/* Left Column: Spline Viewer and Navigation */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative h-[70%] md:h-[100%] ">
        
     
        {/* Spline Viewer */}
        <div className="flex-grow flex items-center justify-center">
          {scenes.map((scene, index) => (
            <div
              key={index}
              className={`w-full h-full absolute  top-0 left-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Spline scene={scene} className={animationClass} />
            </div>
          ))}
        </div>
        <div className="z-50 hidden md:block ">
  <Paging
    onPrevious={handlePrevious}
    onNext={handleNext}
    count={scenes.length} // Dynamically set the number of pages
  />
  
</div>
<div className=' sm:absolute md:hidden'>
  
          {desc[currentIndex] && (
          <Textbox
            lines={[desc[currentIndex]]}
            typingSpeed={10}
            delay={50}
            prototype={[prototypes[currentIndex]]} // Pass only the current prototype link
            title={[titles[currentIndex]]}      
            tools={[tools[currentIndex]]}
            />
            )}
      </div>

        

       
         
      </div>
  

      {/* Right Column: Textbox */}
      <div className="w-full md:w-1/2  flex-col items-center justify-center md:h-[100%] h-[10%] p-4 hidden md:flex ">
        
        
         
        {desc[currentIndex] && (
          <Textbox
            lines={[desc[currentIndex]]}
            typingSpeed={10}
            delay={50}
            prototype={[prototypes[currentIndex]]} // Pass only the current prototype link
            title={[titles[currentIndex]]}      
            tools={[tools[currentIndex]]}
            />
        )}
      </div>
      <div className="z-50 flex md:hidden mx-auto ">
  <Paging
    onPrevious={handlePrevious}
    onNext={handleNext}
    count={scenes.length} // Dynamically set the number of pages
  />
  
</div>
    </div>
  );
};

export default Projects;
