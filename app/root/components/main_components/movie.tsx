'use client';
 
import React, { useState } from 'react';
import trial from '/videos/final hospital gaza bombing.mp4';
import sample from '/videos/2024-05-05 063835.mp4';
import Videos from './videos';
import { Asset } from 'next-video/dist/assets.js';
import Video from 'next-video';
import crater from '/videos/crater.mp4';
import Image from 'next/image';
import NextVideo from 'next-video';
import MuxPlayer from '@mux/mux-player-react';
 

const Movie = () => {
  const [hoveredVideo, setHoveredVideo] = useState<Asset | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const videoData = [
     { video: crater, title: 'Mt. Apo Crater', description: 'Crater of the tallest volcano in the Philippines', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: trial, title: 'Final Hospital Gaza Bombing', description: 'Description for Final Hospital Gaza Bombing video', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: sample, title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: crater, title: 'Mt. Apo Crater', description: 'Crater of the tallest volcano in the Philippines', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: crater, title: 'Gaza', description: 'Description for Gsaza video', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: trial, title: 'Final Hospital Gaza Bombing', description: 'Description for Final Hospital Gaza Bombing video', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: sample, title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: trial, title: 'Final Hospital Gaza Bombing', description: 'Description for Final Hospital Gaza Bombing video', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: sample, title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video', link: 'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
  ];

  return (
    <div className='flex flex-col justify-center items-center overflow-hidden mt-32 rounded-lg'>
      <div className='text-4xl tracking-wider font-semibold items-center  w-full h-[30rem] flex text-center justify-center my-10 relative'>
      {!isHovering && (
          <div className=' flex w-full overflow-hidden relative'>
           <p className='absolute z-50 text-center flex w-full justify-center items-center'>
              Videosasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
           </p>
           <div className='flex justify-center my-auto w-full opacity-20'>
          
            <Image src={'/images/thumbnail5-01.png'} width={1900} height={500} alt='thumbnail'/>
           </div>
             
          </div>
        )}
        <div className='absolute w-full  h-full -z-1'>
   
          {hoveredVideo && (
            <NextVideo
              src={hoveredVideo}
              controls
              autoPlay
              className='w-full h-full object-cover'
            />
          )}
        </div>
      </div>
      <div className='w-full flex justify-center items-center overflow-hidden'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {videoData.map((data, index) => (
            <Videos
              key={index}
              video={data.video}
              title={data.title}
              description={data.description}
              link={data.link}
              onMouseEnter={() => {
                setHoveredVideo(data.video);
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setHoveredVideo(null);
                setIsHovering(false);
              }}
               
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
