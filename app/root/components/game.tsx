

import React from 'react';
import Spline from '@splinetool/react-spline/next';
import Textbox from './main_components/textbox';
 

const Game: React.FC = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center rounded-md">
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Textbox />
      </div>
      <Spline
        scene="https://prod.spline.design/FcXuavVowV4gyzkt/scene.splinecode" className='rounded-md'
      />
    </div>
  );
};

export default Game;
