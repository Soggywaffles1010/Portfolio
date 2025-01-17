import React from 'react';
import Spline from '@splinetool/react-spline/next';

import { GoVideo } from "react-icons/go";
import { SlPicture } from "react-icons/sl";
import { ImMobile } from "react-icons/im";
import Link from 'next/link';
import Socialproofs from './main_components/socialproofs';

const Game: React.FC = () => {
  return (
    <div className="relative h-[70vh] flex flex-col">
      {/* Spline component (60%) */}
      <div className="flex text-center justify-center items-center h-[90%] relative">
        <div className="md:translate-x-[50%] translate-x-[35%] grid gap-2 text-start items-start">
          {/* Header Text */}
          <div className="w-full flex flex-wrap gap-1 text-gray-700">
            <p className=" font-bold text-4xl flex flex-grow">Allen Usman</p>
            <p className="">Graphics Designer / </p>
            <p className=" font-bold">Developer</p>
          </div>

          {/* Icon Section */}
          <div className="w-full flex flex-col-3 gap-16  md:translate-x-5 -translate-x-6 mt-5 ">
            {/* Video Icon */}
            <Link href={"#movies"}>
            <div className="flex flex-col items-center text-gray-700 hover:text-white">
              <GoVideo className="text-5xl  transition-transform duration-300 hover:scale-125  hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
              <p className=" mt-2 text-xs font-light">Video Projects</p>
            </div>
            </Link>
            <Link href={"#collaterals"}>
            <div className="flex flex-col items-center text-gray-700 hover:text-white">
              <SlPicture className="text-5xl  transition-transform duration-300 hover:scale-125  hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
              <p className=" mt-2 text-xs font-light">Graphic Designs</p>
            </div>
            </Link>
            <Link href={"#projects"}>
            <div className="flex flex-col items-center text-gray-700 hover:text-white">
              <ImMobile className="text-5xl  transition-transform duration-300 hover:scale-125  hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
              <p className="t mt-2 text-xs font-light">UI/UX</p>
            </div>
            </Link>
           
          </div>
        </div>

        {/* Spline */}
        <div className="w-full">
          <Spline
            scene="https://prod.spline.design/iMsZXsFXWswLMcNe/scene.splinecode"
            className="w-full h-full hidden md:block "
          />
        </div>
      </div>

      {/* Bottom blue background (20%) */}
      <div className="h-[10%]">
         <Socialproofs/>
      </div>
    </div>
  );
};

export default Game;
