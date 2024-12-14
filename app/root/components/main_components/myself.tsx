'use client';

import React, { useEffect, useState } from 'react';
 
import Spline from '@splinetool/react-spline';
import { useRouter } from 'next/navigation'; 

 

type SplineSceneProps = {
 
  className?: string; // Optional Tailwind CSS classes for styling
};

const Myself: React.FC<SplineSceneProps> = ({  className = '' }) => {
 
  const [position, setPosition] = useState('translate-x-[630%] translate-y-[250%]');
 
  
  const router = useRouter(); // To handle navigation on click

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const screenHeight = window.innerHeight;

    


//     // Check if we are at the first, second, or third screen
//     if (scrollTop >= screenHeight * 5) {
//         setPosition('translate-x-[230%] translate-y-[250%] '); // last screen screen
//       } 
    
//       else if (scrollTop >= screenHeight *1.5) {
//         setPosition('translate-x-[580%] translate-y-[250%]'); // collaterals to movies
//       } 
//       else if (scrollTop >= screenHeight * 1) {
//         setPosition('translate-x-[480%] translate-y-[250%]'); // projects
//       } 
//       else if (scrollTop >= screenHeight * 4) {
//         setPosition('translate-x-[230%] translate-y-[250%]'); // movies
//       } 

//       else {
//         setPosition('translate-x-[230%] translate-y-[250%]'); // clients and hero
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

 
  // Handle click (redirect to /contact)
  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <div
      className={`z-50  fixed transform bg-red-100 h-screen -translate-x-[100%]  ${className}  `}
      
    >
      <Spline scene='https://prod.spline.design/8RA-MLoEqnUKnZf8/scene.splinecode'  className={` ${position}transition-transform  ease-in-out duration-500  b`} onClick={handleClick}/>

     
    </div>
  );
};

export default Myself;
 
