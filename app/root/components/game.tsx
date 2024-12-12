 

import React from 'react';
import Spline from '@splinetool/react-spline/next';
import Textbox from './reusable/textbox';

const lines = [
  "Hello adventurer.",
  "It is so nice that you came across my portfolio.",
  "I am Allen, a Graphics designer.",
  "My love for art is like a never-ending adventure where every stroke brings new possibilities.",
  "I have helped a lot of business owners in skyrocketing their success exponentially through digital arts.",
  "From Social media ads to videos, from landing pages to a whole website and apps.",
  "Are you gonna be my future client?",
  "I can't wait to work with you, and together let's elevate your business to new heights.",
];

const Game: React.FC = () => {
  return (
    <div className="relative grid justify-center items-center rounded-md h-full">
      {/* Spline Scene */}
      <Spline
        scene="https://prod.spline.design/FcXuavVowV4gyzkt/scene.splinecode"
        className="rounded-md"
      />

      {/* Textbox Component */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4 -translate-y-[6rem]">
        <Textbox lines={lines} typingSpeed={50} delay={5000} />
      </div>
    </div>
  );
};

export default Game;
