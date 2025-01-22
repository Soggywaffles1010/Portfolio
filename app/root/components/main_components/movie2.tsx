'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPause, FaPlay, FaVolumeMute, FaVolumeUp, FaYoutube } from 'react-icons/fa';

interface HeroSectionProps {
  title: string;
  description: string;
  image: string; // YouTube embed link (e.g., "https://www.youtube.com/embed/{video_id}")
  link: { text: string; href: string };
}

const Movie2: React.FC<HeroSectionProps> = ({ title, description, image, link }) => {
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
      setIsMuted(!isMuted);
    }
  };

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
      className="relative bg-center flex 2xl:flex-row flex-col h-[50vh] bg-no-repeat bg-cover bg-blend-multiply transition-all ease-in-out duration-500"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Autoplay iframe */}
      <iframe
        ref={iframeRef}
        className="2xl:absolute relative top-0 left-0 w-full 2xl:h-[100%] h-[80%]"
        src={`${image}?autoplay=1&controls=0&mute=1&enablejsapi=1`}
        allow="autoplay; fullscreen"
        frameBorder="0"
      />

      {/* Dark overlay */}
      <div className="absolute 2xl:block hidden inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="2xl:absolute relative 2xl:px-4 sm:px-2 2xl:ml-16 ml-2 w-full 2xl:max-w-screen-sm text-start my-auto z-20 2xl:h-[100%] h-[20%]">
        <h1 className="2xl:mb-4 mb-1 sm:text-xl font-extrabold 2xl:tracking-tight tracking-normal leading-none text-white 2xl:text-6xl">
          {title}
        </h1>
        <p className="mb-8 sm:text-sm leading-tight md:leading-normal 2xl:text-lg font-normal text-start text-gray-200">
          {description}
        </p>

        <div className="flex gap-5 justify-center 2xl:justify-start">
          {/* Primary Link */}
          <Link
            href={link.href}
            className="inline-flex justify-center items-center 2xl:py-3 py-1 2xl:px-5 px-2 2xl:text-base text-sm font-medium text-center text-gray-700 rounded-lg bg-white hover:bg-gray-700 hover:text-white"
          >
            <span className="hidden sm:inline">{link.text}</span>
            <FaYoutube className="sm:hidden text-2xl" />
          </Link>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="inline-flex justify-center items-center gap-2 py-1 px-2 2xl:py-3 2xl:px-5 2xl:text-base text-sm font-medium text-center text-white border border-white rounded-lg bg-transparent hover:bg-white hover:text-gray-700"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
            <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          {/* Contact Me Button */}
          <Link
            href="/contact"
            className="2xl:hidden inline-flex justify-center items-center 2xl:py-3 py-1 2xl:px-5 px-2 2xl:text-base text-sm font-medium text-center text-gray-700 rounded-lg bg-white hover:bg-gray-700 hover:text-white"
          >
            <FaEnvelope />
          </Link>
        </div>

        {/* Contact Me Button (Visible on 2XL Screens) */}
        <Link
          href="/contact"
          className="hidden 2xl:inline-flex justify-center items-center gap-1 py-2 mt-5 px-3 text-base font-medium text-center text-white border border-white rounded-lg bg-transparent hover:bg-white hover:text-gray-700"
        >
          <FaEnvelope />
          Contact Me
        </Link>
      </div>

      {/* Mute Button */}
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
