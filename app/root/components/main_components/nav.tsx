'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import LogoAnimation from '/public/images/card.json';
import Buttoncontactme from '@/app/contact/components/buttoncontactme';


const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  
   
  const [isPlaying, setIsPlaying] = useState(false);
   
 

   

  // Handle mouse enter and leave to start and stop the animation
  const handleMouseEnter = () => {
    setIsPlaying(true); // Start the animation when hover starts
    setIsHovered(true); // Update the hover state
  };

  const handleMouseLeave = () => {
    setIsPlaying(false); // Stop the animation when hover ends
    setIsHovered(false); // Update the hover state
  };

  

  
 

  return (
    <div className="flex justify-between w-full py-5 ">
      <div className="w-1/3 flex items-center">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='  rounded-lg flex items-center'
          style={{ backgroundColor: 'transparent' }}
        >
           
        </div>
      </div>

      <div className="w-1/3 text-right gap-10 flex font-mono">
        {/* Dropdown wrapper with mouse events */}
        <div
          className="relative hover:underline cursor-pointer text-white"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
           <Buttoncontactme text={'Projects'} href={'/contact'}/>

          {/* Dropdown content */}
          {isDropdownOpen && (
            <div className="absolute z-10 top-full w-64 bg-gray-800 text-white shadow-lg rounded text-left">
              <ul className="rounded">
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-700 hover:rounded-t-md hover:text-[#00FF00]" href={'#projects'}>
                    UI/UX Designs
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-700 hover:text-[#00FF00]" href={'#collaterals'}>
                    Graphic Designs
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-700 hover:rounded-b-md hover:text-[#00FF00]" href={'#movies'}>
                    Videos
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* <Buttoncontactme text={'Contact me'} href={'/contact'}/>
        <Buttoncontactme text={'Contact me'} href={'/contact'}/> */}
      </div>

      <div className="w-1/3 text-right mr-10 flex justify-end">
      <Buttoncontactme text={'Contact me'} href={'/contact'}/>
      </div>
    </div>
  );
};

export default Nav;
