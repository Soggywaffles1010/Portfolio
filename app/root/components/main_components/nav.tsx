'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import LogoAnimation from '/public/images/card.json';
import Lottie from 'react-lottie';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1.5);
 

  // Lottie options
  const lottieOptions = {
    loop: false, // Don't loop the animation
    autoplay: false, // Start the animation when triggered
    animationData: LogoAnimation, // Path to the Lottie JSON animation
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Ensures that the animation scales correctly
    },
  };

  // Handle mouse enter and leave to start and stop the animation
  const handleMouseEnter = () => {
    setIsPlaying(true); // Start the animation when hover starts
    setIsHovered(true); // Update the hover state
  };

  const handleMouseLeave = () => {
    setIsPlaying(false); // Stop the animation when hover ends
    setIsHovered(false); // Update the hover state
  };

  // Handle when the animation is complete
  const handleAnimationComplete = () => {
    setAnimationCompleted(true); // Mark the animation as complete
  };

  // Start the animation
  const playAnimation = () => {
    setIsPlaying(true); // Update state to reflect the animation is playing
    setAnimationCompleted(false); // Reset completed state
  };

  // Stop the animation
  const stopAnimation = () => {
    setIsPlaying(false); // Update state to reflect the animation is stopped
  };

  // Button click handler to toggle play/stop
  const toggleAnimation = () => {
    if (isPlaying) {
      stopAnimation();
    } else {
      playAnimation();
    }
  };

  return (
    <div className="flex justify-between w-full py-5">
      <div className="w-1/3 flex items-center">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='  rounded-lg flex items-center'
          style={{ backgroundColor: 'transparent' }}
        >
          <Lottie
          
            options={lottieOptions}
            speed={animationSpeed}
            height={50}
            width={90}
            isStopped={!isPlaying} // Control animation playback (stop when false, play when true)
            isPaused={false} // Ensures animation doesn't pause
            eventListeners={[
              {
                eventName: 'complete',
                callback: handleAnimationComplete, // Listen to animation complete event
              },
            ]}
            style={{ pointerEvents: 'none'}} // Prevents click events from affecting the animation
          />
        </div>
      </div>

      <div className="w-1/3 text-right gap-10 flex font-mono">
        {/* Dropdown wrapper with mouse events */}
        <div
          className="relative hover:underline cursor-pointer text-white"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="hover:text-[#00FF00] mb-32 ml-20 mt-20 text-md hover:text-lg">Work</span>

          {/* Dropdown content */}
          {isDropdownOpen && (
            <div className="absolute top-full w-64 bg-gray-800 text-white shadow-lg rounded text-left">
              <ul className="rounded">
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-700 hover:rounded-t-md hover:text-[#00FF00]" href={'/'}>
                    Project 1
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-700 hover:text-[#00FF00]" href={'/'}>
                    Project 2
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-700 hover:rounded-b-md hover:text-[#00FF00]" href={'/'}>
                    Project 3
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="hover:underline text-md hover:text-lg cursor-pointer text-white hover:text-[#00FF00]">About</div>
        <div className="hover:underline cursor-pointer text-white text-md hover:text-lg hover:text-[#00FF00]">Blog</div>
      </div>

      <div className="w-1/3 text-right mr-10 text-white flex justify-end">
        <div className="hover:border-[#00FF00] border text-md hover:text-lg cursor-pointer mr-2 flex hover:mr-1  text-white px-5 rounded-md  items-center   hover:text-[#00FF00]">Contact Me</div>
      </div>
    </div>
  );
};

export default Nav;
