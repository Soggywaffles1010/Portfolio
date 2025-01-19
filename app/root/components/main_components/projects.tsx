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
    "As the sole UI/UX designer at Quantumtek, a premier online betting platform, my primary responsibility was to create the landing page. It was crucial to ensure a seamless workflow and adhere to brand guidelines meticulously. Collaborating closely with a team of developers, I aimed to deliver an exceptional user experience. The design phase of the project was completed in about one and a half months, from November 2024 to December 2024, and the project is currently still under development. My main tool was Figma, supplemented by Adobe Illustrator, Photoshop, and some AI-enhancing applications.",
    'Medgrocer is an online pharmaceutical company dedicated to delivering Filipinos the fastest and most accessible medicine from the comfort of their own homes. This was my first UI/UX redesign project, where I worked as an intern alongside a senior designer and a team of fresh graduate developers. The brand guidelines and workflow were already established, so my focus was solely on the redesign. I started the project in April 2022 and completed it in July 2022 using Figma.',
    "MAthayog is an application designed to supplement and enhance children's math skills through fun and interactive online games. The team consisted of education professionals, developers, and marketing experts. I was the sole individual responsible for all graphics and UI/UX design. The project took one year to complete, from July 2023 to July 2024, and is currently exclusively used by DEPED students in the NCR. While it is yet to launch nationwide, additional funding is required. My main tool was Figma, with supplementary tools in Adobe Illustrator.",
    'Terramartz is an online marketplace for farm produce, aiming to connect farmers and sell their products through our app. My main roles were Project Manager and Graphics Designer. I utilized multiple tools to manage this project, which started in April 2024 and concluded in September 2024. Project is still looking for an Angel Investor',
    'Adonis is a mobile application designed for a local fitness gym.',
    "Trach is my first full-stack web development project, which I completed as a one-man team. From branding to design to development, I single-handedly created this app. Trach serves as a real estate agent hub for people looking to buy, rent, or sell property. The app is fully functional, featuring Google location of estates, agent search in the USA, messaging, and payment gateway integration. However, due to a lack of funding, the APIs used in the app have been halted, and the launch has been paused. I used Next.jsfor this project, which I started in February 2024 and completed in April 2024.",
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
    <div className="flex flex-col md:flex-row w-full h-[70vh]">
      {/* Left Column: Spline Viewer and Navigation */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative">
        {/* Overlay for Mobile */}
        {showOverlay && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 md:hidden">
            <p className="text-white text-lg">Swipe left or right to navigate</p>
          </div>
        )}

        {/* Spline Viewer */}
        <div className="flex-grow flex items-center justify-center">
          {scenes.map((scene, index) => (
            <div
              key={index}
              className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Spline scene={scene} className={animationClass} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full px-8 py-4 absolute">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 z-50 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200"
          >
            <GrFormPrevious size={24} />
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 z-50 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200"
          >
            <MdNavigateNext size={24} />
          </button>
        </div>
      </div>

      {/* Right Column: Textbox */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center  p-4 ">
        {/* Title instantly displayed */}
        
        
        {/* Textbox for description and prototype */}
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
  );
};

export default Projects;
