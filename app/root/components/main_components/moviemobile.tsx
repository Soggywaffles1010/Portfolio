'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface HeroSectionProps {
  title: string;
  description: string;
  image: string; // YouTube embed link (e.g., "https://www.youtube.com/embed/{video_id}")
  link: { text: string; href: string };
}

const Movie2: React.FC<HeroSectionProps> = ({ title, description, image, link }) => {
  // Autoplay URL without mute parameter
  const autoplayUrl = `${image}?autoplay=1&controls=0`;
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: isMuted ? 'unMute' : 'mute', args: [] }),
        '*'
      );
      setIsMuted(!isMuted); // Toggle mute state
    }
  };
   // Toggle Play/Pause
   const togglePlayPause = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: isPlaying ? 'pauseVideo' : 'playVideo', args: [] }),
        '*'
      );
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      className="relative bg-center flex flex-col h-[50vh] bg-no-repeat bg-cover bg-blend-multiply transition-all ease-in-out duration-500"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Autoplay iframe */}
      <iframe
      ref={iframeRef}
        className="top-0 left-0 w-full h-[80%]"
        src={`${image}?autoplay=1&controls=0&mute=0&enablejsapi=1`} // Start unmuted
        allow="autoplay; fullscreen"
        frameBorder="0"
      />

  
       

      {/* Content */}
      <div className="relative mx-2 w-full text-center my-auto z-20 h-[20%]">
        <h1 className="text-xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-3 text-sm font-normal text-start text-gray-200 lg:text-xl">
          {description}
        </p>
        <div className="flex justify-center gap-5">
          {/* Primary Link */}
          <Link
            href={link.href}
            className="inline-flex justify-center items-center py-1 px-2 text-sm font-medium text-center text-gray-700 rounded-lg bg-white hover:bg-gray-700 hover:text-white"
          >
            Watch on YouTube
          </Link>

          {/* Contact Me Button */}
          
          <button
        onClick={togglePlayPause}
        className="inline-flex justify-center items-center gap-2 py-1 px-2 text-sm font-medium text-center text-white border border-white rounded-lg bg-transparent hover:bg-white hover:text-gray-700"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <Link
  href="/contact"
  className="inline-flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium text-center text-white border border-white rounded-lg bg-transparent hover:bg-white hover:text-gray-700"
>
  <FaEnvelope />
  Contact Me
</Link>
        </div>
      

       
       
     
       
      </div>
      <button
  onClick={toggleMute}
  className="absolute top-10 right-10 z-30 flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700"
>
  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
  <span className="hidden sm:inline">{isMuted ? 'Unmute' : 'Mute'}</span>
</button>

     
    </section>
  );
};

export default Movie2;
