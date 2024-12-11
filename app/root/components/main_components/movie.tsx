'use client';

import React, { useState } from 'react';
import Videos from './videos';
import Image from 'next/image';
import Button from 'next/link';

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
    {
      video: 'https://www.youtube.com/embed/JpBKxfWFoH0',
      link: 'https://www.youtube.com/embed/JpBKxfWFoH0',
      title: 'The true story behind the Israel-Palestine conflict',
      description: 'This video aims to provide a balanced overview of pivotal events and key turning points. Explore the origins of tensions between Israel and Palestine, the role of Hamas in Gaza, and the impact of recent attacks and war. Understand the broader context and the quest for peace in this ongoing strife.'
    },
    {
      video: 'https://www.youtube.com/embed/MYCD8KD2N0s',
      link: 'https://www.youtube.com/embed/MYCD8KD2N0s',
      title: 'Gaza Hospital Explosion - Continuous battle Hamas vs IDF',
      description: 'In our latest deep-dive video, we explore the perplexing and tragic explosion at Al Ahli Arab hospital in Gaza, which claimed hundreds of lives. Amidst the chaos and confusion, three key claims have emerged as potential explanations.'
    },
    {
      video: 'https://youtube.com/embed/f22d-icVkfA',
      link: 'https://youtube.com/embed/f22d-icVkfA',
      title: 'Anime Daily Motivations',
      description: 'Anime Daily motivations.'
    },
    {
      video: 'https://youtu.be/S9pZzQqz5yQ',
      link: 'https://youtu.be/S9pZzQqz5yQ',
      title: 'Decoding History: The Ukraine-Russia Conflict - An In-Depth Analysis',
      description: "Step into history's rollercoaster! Get ready for the wild ride as we uncover the fall of the Soviet Union and Ukraine's fight for freedom. Watch how Russia, Ukraine, and the world clashed, shaping our history books forever. Dive into the intense conflict, power struggles, and Putin's moves that changed the game. Brace for drama, resilience, and a nation's struggle for a place in the world! Don't miss this epic tale! Subscribe, like, and share for more on #Ukraine #Russia #WarHistory!"
    }
  ];
  
  const videoData2 = [
    {
      video: 'https://youtube.com/embed/kXq3k0HYShY',
      link: 'https://youtube.com/embed/kXq3k0HYShY',
      title: 'Luminous Sunscreen Mist Travel Hacks in maintaining that Luminous glow',
      description: 'Stay radiant on the go! 🌞✨ Discover travel hacks with Luminous Sunscreen Mist to keep that glow shining bright, no matter where your adventures take you. #GlowOnTheGo'
    },
    {
      video: 'https://youtube.com/embed/1-X40NK9K7c',
      link: 'https://youtube.com/embed/1-X40NK9K7c',
      title: 'Custom Cartoon/Disney Portrait Product Ads',
      description: 'Transform your favorite moments into magical memories with our Custom Cartoon/Disney Portraits! Perfect for gifts, home decor, or just a touch of whimsy in your life. ✨🎨 #DisneyMagic #CustomPortraits'
    },
    {
      video: 'https://www.youtube.com/embed/jxnaqq4VFAY',
      link: 'https://www.youtube.com/embed/jxnaqq4VFAY',
      title: 'Ayuko Customized Anime Shoes',
      description: "Ayuko offers a fantastic range of customized anime shoes that let you wear your favorite characters and designs on your feet. Whether you're a fan of classic anime or the latest hits, Ayuko has something for everyone. Their shoes are not only stylish but also a great way to express your love for anime."
    },
    {
      video: 'https://youtube.com/embed/iW29kLGgIHo',
      link: 'https://youtube.com/embed/iW29kLGgIHo',
      title: 'Sign Post Family Canvas Product Ads',
      description: 'Capture your family\'s unique journey with our Sign Post Family Canvas! 🖼️✨ Perfect for adding a personal touch to your home decor or as a heartfelt gift. Each sign post points to a cherished memory, making it a beautiful reminder of the love and adventures you share. #FamilyLove #HomeDecor'
    }
  ];
  



  const videoData3 = [
    {
      video: 'https://youtube.com/embed/_GbuHOXsMzw',
      link: 'https://youtube.com/embed/_GbuHOXsMzw',
      title: 'Mathayog Pilot Presentation',
      description: 'Mathayog is an engaging and effective learning management system dedicated to helping students conquer the world of mathematics. It offers a platform for students of all ages to unlock the power of math and start their educational adventure.'
    },
    {
      video: 'https://youtube.com/embed/2WaCfS78evs',
      link: 'https://youtube.com/embed/2WaCfS78evs',
      title: 'Counting numbers to 1000 using blocks - Mathayog.com',
      description: 'Counting numbers to 1000 using blocks is a fantastic way to visualize and understand large numbers. Mathayog.com offers engaging resources to help students grasp this concept. By using blocks, students can break down numbers into hundreds, tens, and ones, making it easier to comprehend and count up to 1000.'
    },
    {
      video: 'https://youtube.com/embed/2WaCfS78evs',
      link: 'https://youtube.com/embed/2WaCfS78evs',
      title: 'Finding the next numbers in a number sequence',
      description: 'Finding the next numbers in a sequence involves identifying the pattern or rule that the sequence follows.'
    },
    {
      video: 'https://youtube.com/embed/2WaCfS78evs',
      link: 'https://youtube.com/embed/2WaCfS78evs',
      title: 'Subtracting within 1,000 without regrouping using blocks',
      description: 'Mastering subtraction within 1,000 without regrouping using blocks! 🧮✨ Making math fun and visual, one block at a time. #MathMagic #LearningMadeEasy'
    }
  ];
  

  const videoData4 = [
    {
      video: 'https://youtube.com/embed/2249U3Nawpk',
      link: 'https://youtube.com/embed/2249U3Nawpk',
      title: 'The red thread of fate, in Wong Tai Sin temple in Hong Kong',
      description: 'Channeling our inner anime protagonists, we embarked on a journey to Wong Tai Sin Temple in HK. There, we tied the red thread of fate, sealing our destiny as a couple. Who knew love could be so... knotty? 😉❤️'
    },
    {
      video: 'https://youtube.com/embed/0FooRtrJ2_4',
      link: 'https://youtube.com/embed/0FooRtrJ2_4',
      title: 'A tourist\'s guide to Hong Kong/ free spots and more',
      description: 'Discover Hong Kong on a budget! From free attractions to hidden gems, this guide has everything you need for an unforgettable adventure without breaking the bank. 🏙️✨'
    },
    {
      video: 'https://youtube.com/embed/E2AbKuJULzo',
      link: 'https://youtube.com/embed/E2AbKuJULzo',
      title: 'The Temple of Wong Tai Sin',
      description: 'Exploring the mystical Temple of Wong Tai Sin, where wishes come true and destinies intertwine. A serene escape in the heart of Hong Kong. 🌟🏮'
    },
    {
      video: 'https://youtube.com/embed/9Gv3O_RJDDs',
      link: 'https://youtube.com/embed/9Gv3O_RJDDs',
      title: 'First Trail Run',
      description: 'Sharing my first ever trail run—what a roller coaster of emotions! Between the pain, exhaustion, and needing to take a dump three times (yes, three!), I also managed to lose both toenails. But hey, it was a blast, and I can\'t wait for the next one! 😂🏃‍♂️⛰️'
    }
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

  const isYouTube = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
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
          {isYouTube(hoveredVideo) ? (
            <iframe
              width="100%"
              height="100%"
              src={hoveredVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={hoveredVideo}
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
          )}
        </div>
        )}
      </div>

      {/* Container 2 */}
      <div className="w-full flex flex-col justify-center items-center overflow-hidden" style={{ height: '40vh' }}>
        <div className="flex w-full gap-16  pl-2">
          <div className="text-white">
            <Button
              href={"#"}
              className={`block relative text-center font-bold text-xl transition-all ${hoverStates.youtube ? 'text-hover' : 'text-shadow-custom'}`}
              onMouseEnter={() => handleMouseEnter('youtube')}
              onMouseLeave={() => handleMouseLeave('youtube')}
              onClick={() => handleSetClick(1)}
            >
              Youtube
            </Button>
            <Button
              href={"#"}
              className={`block relative text-center font-bold text-xl transition-all ${hoverStates.productAds ? 'text-hover' : 'text-shadow-custom'}`}
              onMouseEnter={() => handleMouseEnter('productAds')}
              onMouseLeave={() => handleMouseLeave('productAds')}
              onClick={() => handleSetClick(2)}
            >
              Product Ads
            </Button>
            <Button
              href={"#"}
              className={`block relative text-center font-bold text-xl transition-all ${hoverStates.educational ? 'text-hover' : 'text-shadow-custom'}`}
              onMouseEnter={() => handleMouseEnter('educational')}
              onMouseLeave={() => handleMouseLeave('educational')}
              onClick={() => handleSetClick(3)}
            >
              Educational
            </Button>
            <Button
              href={"#"}
              className={`block relative text-center font-bold text-xl transition-all ${hoverStates.vlogs ? 'text-hover' : 'text-shadow-custom'}`}
              onMouseEnter={() => handleMouseEnter('vlogs')}
              onMouseLeave={() => handleMouseLeave('vlogs')}
              onClick={() => handleSetClick(4)}
            >
              Vlogs
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 bg-orange-400 shadow-md rounded-md">
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
