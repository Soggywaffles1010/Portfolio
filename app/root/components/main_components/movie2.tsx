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
      className="relative bg-center flex h-[50vh] bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply transition-all ease-in-out duration-500"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Autoplay iframe */}
      <iframe
      ref={iframeRef}
        className="absolute top-0 left-0 w-full h-full"
        src={`${image}?autoplay=1&controls=0&mute=0&enablejsapi=1`} // Start unmuted
        allow="autoplay; fullscreen"
        frameBorder="0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative px-4 ml-16 max-w-screen-sm text-start my-auto z-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-start text-gray-200 lg:text-xl">
          {description}
        </p>
        <div className="flex gap-5">
          {/* Primary Link */}
          <Link
            href={link.href}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-700 rounded-lg bg-white hover:bg-gray-700 hover:text-white"
          >
            Watch on YouTube
          </Link>

          {/* Contact Me Button */}
          
          <button
        onClick={togglePlayPause}
        className="inline-flex justify-center items-center gap-2 py-3 px-5 text-base font-medium text-center text-white border border-white rounded-lg bg-transparent hover:bg-white hover:text-gray-700"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
        {isPlaying ? 'Pause' : 'Play'}
      </button>
        </div>
        <Link
  href="/contact"
  className="inline-flex justify-center items-center gap-1 py-2 mt-5 px-3 text-base font-medium text-center text-white border border-white rounded-lg bg-transparent hover:bg-white hover:text-gray-700"
>
  <FaEnvelope />
  Contact Me
</Link>

       
       
     
       
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
