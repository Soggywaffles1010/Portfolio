'use client';

import Spline from "@splinetool/react-spline";
import { useEffect } from "react";

const Intro: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll') as NodeListOf<HTMLElement>;
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          element.classList.remove('hidden-text');
          element.classList.add('scroll-animate-text');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if the element is already in view on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const triggerAnimations  = () => {
    const elements = document.querySelectorAll('.animate-on-scroll') as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      element.classList.remove('scroll-animate-text');
      void element.offsetWidth; // Trigger reflow
      element.classList.add('scroll-animate-text');
    });
  };

  return (
    <div className=' flex justify-center '>
      <div className="">
       
        <div className="text-center ">
        <p className='mt-32 animate-on-scroll text-center scroll-animate-text-1  '>
          Our journey begins here.
        </p>
          <p className='  animate-on-scroll scroll-animate-text-2  '>
            I love Art
          </p>
          <p className=' animate-on-scroll  scroll-animate-text-3  '>
            And I've spent my entire career integrating art with digital.
          </p>
          <p className='animate-on-scroll  scroll-animate-text-4  '>
            line by line
          </p>
          <p className='animate-on-scroll  scroll-animate-text-5  '>
            deliverable by deliverable
          </p>
          <p className='animate-on-scroll  scroll-animate-text-6  '>
            and Project by project
          </p> 
          <p className='animate-on-scroll  scroll-animate-text-7  '>
            and Project by project
          </p>
          {/* <div className=" bg-red-500 flex relative ">
            <div className="w-[50rem] rounded-md z-10 h-[55rem] -translate-x-[8rem] translate-y-[4rem] absolute">
            <Spline scene="https://prod.spline.design/YVMvWsiwa85NBGT0/scene.splinecode"  /> 
            </div>
        
          </div> */}
         
        </div>
       

     <div className="flex   w-full  justify-center mt-32 animate-on-scroll  scroll-animate-text2 ">
     
     <button
        onClick={triggerAnimations}
        className='mt-32 px-4 py-2 rounded mb-16 blinking-text   border-blue-500 border-opacity-0 hover:border-opacity-100 hover:border hover:border-blue-500 '
      >
        Play it back
      </button>
      {/* <div className="max-w-2xl text-center">
          Take a look at some of my work and you will see how I have helped clients improve their businesses and careers by laying the groundwork for the future of digital.
        </div> */}
     </div>
      </div>

     

 
    </div>
  );
};

export default Intro;
