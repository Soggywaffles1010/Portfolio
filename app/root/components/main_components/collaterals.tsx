'use client';
import React, { useState,  useEffect } from 'react'
import Image from 'next/image'
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';

const collaterals: React.FC =  () => {
  const images = [
    { src: '/images/1.png', title: 'Calendar' },
    { src: '/images/2.png', title: 'Social Media Posts' },
    { src: '/images/3.png', title: 'Facebook Ads' },
    { src: '/images/4.png', title: 'Instagram Ads' },
    { src: '/images/5.png', title: 'Event Poster' },
    { src: '/images/1(1).png', title: 'Individual Fitness Poster' },
    { src: '/images/6.png', title: 'FB Meme' },
    { src: '/images/6(1).png', title: 'Individual Sports Poster' },
    { src: '/images/10.png', title: 'School Paper' },
    { src: '/images/7.png', title: 'Individual Sports Poster' },
    { src: '/images/8.png', title: 'Team Sports Poster' },
    { src: '/images/5(1).png', title: 'Tabloid' },
    { src: '/images/9.png', title: 'Individual Sports Poster' },
    { src: '/images/4(1).png', title: 'Individual Sports Poster' },
    { src: '/images/1(2).png', title: 'Headline News paper' },
    { src: '/images/2(1).png', title: 'Title 16' },
    { src: '/images/11.png', title: 'Title 17' },
    { src: '/images/12.png', title: 'Title 18' },
    { src: '/images/13.png', title: 'Title 19' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationClass, setAnimationClass] = useState('scroll-animate-cardComplete');

  const handlePrevious = () => {
    
    setAnimationClass('scroll-animate-cardPrev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    
    setAnimationClass('scroll-animate-cardComplete');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
    
  }, [])

  return (
    <div className='h-screen flex flex-col justify-center  relative '>
       <div className=' flex justify-center gap-10 w-full absolute z-10 text-center  font-semibold text-3xl my-10'>
      
        {/* <div className='my-auto '>
        <button onClick={handlePrevious} className='px-4 py-4 hover:border-0 bg-blue-500 text-white rounded-full border bg-opacity-0 border-opacity-50 border-white hover:bg-blue-300 hover:text-black'>
          <GrFormPrevious />
        </button>
        </div> */}
        {images.map((image, index) => (
          <div key={index} className={`relative flex flex-col my-10 mt-16  ${index === currentIndex ? '' : 'hidden'} transition-opacity duration-500 ease-in-out`}>
             
         
              <div className={`text-center flex justify-center h-[20rem] ${animationClass}` }>
              <Image src={image.src} width={250} height={250} alt='images' />
              </div>

              {/* <div className='absolute w-full mt-64 pt-32 '>
                
              <p className='tracking-wider  '>
                {image.title}
              </p>
              </div> */}

             
             
          </div>
        ))}
        {/* <div className='my-auto'>
        <button onClick={handleNext} className='px-4 py-4 hover:border-0 bg-blue-500 text-white rounded-full border bg-opacity-0 border-opacity-50 border-white hover:bg-blue-300 hover:text-black'>
          <MdNavigateNext />
        </button>
        </div>
           */}
      
      
      </div>
      
    
      <div className='flex justify-center flex-wrap max-w-screen relative opacity-30 overflow-hidden'>
   
        <div className='absolute w-full h-full bg-gradient-to-l from-black via-black to-transparent  translate-x-[700px]'></div>
        <div className='absolute w-full h-full bg-gradient-to-r from-black via-black to-transparent  -translate-x-[1000px]'></div>
<div className='absolute w-full h-full bg-gradient-to-r from-black via-black to-transparent  -translate-x-[1000px] opacity-70  '>

</div>

 
        <Image src={'/images/1.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/2.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/3.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/4.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/5.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/1(1).png'} width={150} height={150} alt='images'/>
        <Image src={'/images/6.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/6(1).png'} width={150} height={150} alt='images'/>
        <Image src={'/images/10.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/10.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/7.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/8.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/5(1).png'} width={150} height={150} alt='images'/>
        <Image src={'/images/9.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/4(1).png'} width={150} height={150} alt='images'/>
        <Image src={'/images/1(2).png'} width={150} height={150} alt='images'/>
        <Image src={'/images/2(1).png'} width={150} height={150} alt='images'/>
        <Image src={'/images/11.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/12.png'} width={150} height={150} alt='images'/>
        <Image src={'/images/13.png'} width={150} height={150} alt='images'/>
      
      
       
       
      </div>
      {/* <div className='flex flex-row justify-between bg-blue-50'>
       <div className='flex flex-grow bg-red-500 justify-center'>
            left
       </div>
       <div className='flex flex-grow  bg-red-700 justify-center'>
            Right
       </div>
      
      </div>
      <div className='  bg-red-900 flex justify-center'>
        Center down
      </div> */}
     
    </div>
  )
}

export default collaterals