'use client'
import React, { useState } from 'react';
import Lottie from 'react-lottie';
 
import Image from 'next/image';

const Hero = () => {
  const [isPlayingGD, setIsPlayingGD] = useState(false); // Graphics Designer
  const [isPlayingWD, setIsPlayingWD] = useState(false); // Web Developer
  const [isPlayingSMM, setIsPlayingSMM] = useState(false); // Social Media Manager
  const [isPlayingGDC, setIsPlayingGDC] = useState(false);
  const [isPlayingWDC, setIsPlayingWDC] = useState(false);
  const [isPlayingSMMC, setIsPlayingSMMC] = useState(false);
  

  const lottieOptions = {
    loop: false,
    autoplay: false,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className=' h-screen flex-row flex '>
       
      <div className='text-white z-10 text-left mt-16 
       cursor-pointer   '>
        <p className='text-4xl '>
          Hi I'm 
          <span className='text-green-400 fade-in-from-bottom  '> Allen </span>
        </p>
        <p className='text-5xl w-2/3 leading-relaxed'>
          Let's start elevating your business to new <span className='text-green-400'>
            heights!
          </span>
        </p>
        <p className='text-lg my-5'>
          I am your All in One VA
        </p>
        
        {/* Graphics Designer Section */}
        <div className='flex flex-1 justify-start gap-5'>
          <div
            className='flex items-center'
            onMouseEnter={() => setIsPlayingGD(true)} 
            onMouseLeave={() => setIsPlayingGD(false)} 
          >
            <Lottie
              options={lottieOptions}
              height={50}
              width={50}
              isStopped={!isPlayingGD} 
              isPaused={false} 
            />
          </div>
          <p className='text-md text-white hover:text-[#00FF00] hover:text-lg  hover:underline items-center flex'>
            Graphics Designer
          </p>
        </div>

        {/* Web Developer Section */}
        <div className='flex flex-1 justify-start gap-5 '>
          <div
            className='flex items-center'
            onMouseEnter={() => setIsPlayingWD(true)} 
            onMouseLeave={() => setIsPlayingWD(false)} 
          >
            <Lottie
              options={lottieOptions}
              height={50}
              width={50}
              isStopped={!isPlayingWD} 
              isPaused={false} 
            />
          </div>
          <p className='text-md text-white hover:text-[#00FF00] hover:text-lg  hover:underline items-center flex'>
            Web Developer
          </p>
        </div>

        {/* Social Media Manager Section */}
        <div className='flex flex-1 justify-start gap-5'>
          <div
            className='flex items-center'
            onMouseEnter={() => setIsPlayingSMM(true)} 
            onMouseLeave={() => setIsPlayingSMM(false)} 
          >
            <Lottie
              options={lottieOptions}
              height={50}
              width={50}
              isStopped={!isPlayingSMM} 
              isPaused={false} 
            />
          </div>
          <p className='text-md text-white hover:text-[#00FF00] hover:text-lg  hover:underline items-center flex'>
            Social Media Manager
          </p>
        </div>
        <div className='flex items-center justify-start gap-10 max-w-full pt-20'>
          
          <div className='flex flex-col items-center  justify-start  rounded-md'>
            <div
            className=' '
            onMouseEnter={() => setIsPlayingWDC(true)} 
            onMouseLeave={() => setIsPlayingWDC(false)} 
            >
              <Lottie
                options={lottieOptions}
                height={100}
                width={200}
                isStopped={!isPlayingWDC} 
                isPaused={false} 
              />
            </div>
            <p className='text-md'>
            8 Years Experience
            </p>
          </div> 

          <div className='flex flex-col items-center  justify-center  rounded-md'>
            <div
            className='  '
            onMouseEnter={() => setIsPlayingGDC(true)} 
            onMouseLeave={() => setIsPlayingGDC(false)} 
            >
              <Lottie
                options={lottieOptions}
                height={100}
                width={200}
                isStopped={!isPlayingGDC} 
                isPaused={false} 
              />
            </div>
            <p className='text-lg'>
             5 Websites
            </p>
          </div> 
          <div className='flex flex-col items-center  justify-center  rounded-md'>
            <div
            className='  rounded-lg flex items-center justify-center text-center'
            onMouseEnter={() => setIsPlayingSMMC(true)} 
            onMouseLeave={() => setIsPlayingSMMC(false)} 
            >
              <Lottie
                options={lottieOptions}
                height={100}
                width={200}
                isStopped={!isPlayingSMMC} 
                isPaused={false} 
              />
            </div>
            <p className='text-lg'>
             1 trusted name
            </p>
          </div> 
        
        </div>
        
       
        
      </div>

      <div className=' w-1/4 -translate-x-3/4 h-3/4 flex items-center justify-center bg right-32'>
            <Image
             src='/images/hero.gif' // Replace with the actual path
             alt='GIF description'
              
            
             layout='fill'
            
             
            />
        </div>
    </div>
  );
};

export default Hero;
