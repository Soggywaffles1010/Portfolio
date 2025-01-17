'use client';

import React, { useEffect, useState } from 'react';
 
import Spline from '@splinetool/react-spline';
import { useRouter } from 'next/navigation'; 
import Textbox from '@/app/reusable/textbox';

 

type SplineSceneProps = {
 
  className?: string; // Optional Tailwind CSS classes for styling
};

const Myself: React.FC<SplineSceneProps> = ({  className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState('translate-x-[630%] translate-y-[250%]');
 
  
  const router = useRouter(); // To handle navigation on click
  const lines = [
    "Hello adventurer.",
    "It is so nice that you came across my portfolio.",
    "I am Allen, a Graphics designer.",
    "My love for art is like a never-ending adventure where every stroke brings new possibilities.",
    "I have helped a lot of business owners in skyrocketing their success exponentially through digital arts.",
    "From Social media ads to videos, from landing pages to a whole website and apps.",
    "Are you gonna be my future client?",
    "I can't wait to work with you, and together let's elevate your business to new heights.",
  ];

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <div
      className={`z-50  fixed transform bg-red-100 h-screen -translate-x-[100%]  ${className}  `}
      
    >
     <div className={`${isHovered ? 'opacity-100' : 'opacity-0'} text-black translate-x-[670%] translate-y-[2500%] transition-transform  flex  `}  >
        
        <div className='border-2 border-black rounded-lg  shadow-md  bg-white  ' >
        Contact me!
        </div>
     </div>
      <Spline scene='https://prod.spline.design/8RA-MLoEqnUKnZf8/scene.splinecode'  className={` ${position}transition-transform  ease-in-out duration-500  b`} onClick={handleClick} onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}/>

     
    </div>
  );
};

export default Myself;
 
