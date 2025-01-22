import React from 'react';
import Spline from '@splinetool/react-spline/next';

import { GoVideo } from "react-icons/go";
import { SlPicture } from "react-icons/sl";
import { ImMobile } from "react-icons/im";
import Link from 'next/link';
import Socialproofs from './main_components/socialproofs';
import { Button } from '@mui/material';
import { FaPhone } from "react-icons/fa";
import ShowProjects from './main_components/showprojects';


const Game: React.FC = () => {
  return (
    <div className="relative md:h-[70vh] h-[50hv] flex flex-col">
      {/* Spline component (60%) */}
      <div className="flex text-center justify-center items-center h-[90%] relative">
        <ShowProjects/>

        {/* Spline */}
        <div className="w-full">
          <Spline
            scene="https://prod.spline.design/iMsZXsFXWswLMcNe/scene.splinecode"
            className="w-full h-full hidden md:block "
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
