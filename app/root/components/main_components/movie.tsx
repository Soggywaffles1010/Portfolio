'use client';

import React, { useState } from 'react';
import Videos from './videos';
import Image from 'next/image';
import Link from 'next/link';

const Movie = () => {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [hoverStates, setHoverStates] = useState({
    youtube: false,
    productAds: false,
    educational: false,
    vlogs: false,
  });
  const [activeSet, setActiveSet] = useState<number>(1);

  const videoData = [
    { video: '/video/2024-05-05 063835.mp4', title: 'Mt. Apo Crater', description: 'Crater of the tallest volcano in the Philippines', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/final hospital gaza bombing.mp4', title: 'Final Hospital Gaza Bombing', description: 'Description for Final Hospital Gaza Bombing video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/sample.mp4', title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/sample.mp4', title: 'Gaza', description: 'Description for Gaza video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
  ];
  const videoData2 = [
    { video: '/video/shake shake.mp4', title: 'Mt. Apo Crater2', description: 'Crater of the tallest volcano in the Philippines2', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/traveling (1080 x 1920 px).mp4', title: 'Final Hospital Gaza Bombing2', description: 'Description for Final Hospital Gaza Bombing video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/version 2-Disney video ads 1.mp4', title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video2', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/video ads 3 family canvas final.mp4', title: 'Gaza', description: 'Description for Gaza video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
  ];

  const videoData3 = [
    { video: '/video/2024-05-05 063835.mp4', title: 'Mt. Apo Crater3', description: 'Crater of the tallest volcano in the Philippines3', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/final hospital gaza bombing.mp4', title: 'Final Hospital Gaza Bombing3', description: 'Description for Final Hospital Gaza Bombing video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/sample.mp4', title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video3', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/sample.mp4', title: 'Gaza', description: 'Description for Gaza video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
  ];

  const videoData4 = [
    { video: '/video/2024-05-05 063835.mp4', title: 'Mt. Apo Crater4', description: 'Crater of the tallest volcano in the Philippines4', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/final hospital gaza bombing.mp4', title: 'Final Hospital Gaza Bombing4', description: 'Description for Final Hospital Gaza Bombing video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/sample.mp4', title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video4', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
    { video: '/video/sample.mp4', title: 'Gaza', description: 'Description for Gaza video', link: 'https://www.youtube.com/embed/XDqEvmxnLeY' },
  ];

  const handleSetClick = (setNumber: number) => {
    setActiveSet(setNumber);
  };

  const getVideoData = () => {
    switch (activeSet) {
      case 1:
        return videoData;
      case 2:
        return videoData2;
      case 3:
        return videoData3;
      case 4:
        return videoData4;
      default:
        return videoData;
    }
  };

  

  const handleMouseEnter = (link: string) => {
    setHoverStates(prevState => ({
      ...prevState,
      [link]: true,
    }));
  };

  const handleMouseLeave = (link: string) => {
    setHoverStates(prevState => ({
      ...prevState,
      [link]: false,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden rounded-lg h-screen">
      {/* Container 1 */}
      <div className="text-4xl tracking-wider font-semibold flex items-center justify-center relative" style={{ height: '60vh', width: '100%' }}>
        {!hoveredVideo && (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <p className="absolute mt-16 text-white">Hover over a video for preview</p>
            <div className="opacity-20">
              <Image
                src={'/images/thumbnail5-01.png'}
                width={1920}
                height={1080}
                alt="thumbnail"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}
        {hoveredVideo && (
          <div className="absolute w-full h-full">
            <video
              src={hoveredVideo}
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Container 2 */}
      <div className="w-full flex flex-col justify-center items-center overflow-hidden" style={{ height: '40vh' }}>
        <div className="flex w-full gap-16  pl-2">
          <div className="text-white">
            <Link
              href={"#"}
              className={`block relative text-center font-bold text-xl transition-all ${hoverStates.youtube ? 'text-hover' : 'text-shadow-custom'}`}
              onMouseEnter={() => handleMouseEnter('youtube')}
              onMouseLeave={() => handleMouseLeave('youtube')}
              onClick={() => handleSetClick(1)}
            >
              Youtube
            </Link>
            <Link
              href={"#"}
              className={`block relative text-center font-bold text-xl transition-all ${hoverStates.productAds ? 'text-hover' : 'text-shadow-custom'}`}
              onMouseEnter={() => handleMouseEnter('productAds')}
              onMouseLeave={() => handleMouseLeave('productAds')}
              onClick={() => handleSetClick(2)}
            >
              Product Ads
            </Link>
            <Link
              href={"#"}
              className={`block relative text-center font-bold text-xl transition-all ${hoverStates.educational ? 'text-hover' : 'text-shadow-custom'}`}
              onMouseEnter={() => handleMouseEnter('educational')}
              onMouseLeave={() => handleMouseLeave('educational')}
              onClick={() => handleSetClick(3)}
            >
              Educational
            </Link>
            <Link
              href={"#"}
              className={`block relative text-center font-bold text-xl transition-all ${hoverStates.vlogs ? 'text-hover' : 'text-shadow-custom'}`}
              onMouseEnter={() => handleMouseEnter('vlogs')}
              onMouseLeave={() => handleMouseLeave('vlogs')}
              onClick={() => handleSetClick(4)}
            >
              Vlogs
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {getVideoData().map((data, index) => (
            <Videos
              key={index}
              video={data.video}
              title={data.title}
              description={data.description}
              link={data.link}
              onMouseEnter={() => {
                setHoveredVideo(data.video);
              }}
              onMouseLeave={() => {
                setHoveredVideo(null);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
