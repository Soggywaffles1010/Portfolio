"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GoVideo } from "react-icons/go";
import { SlPicture } from "react-icons/sl";
import { ImMobile } from "react-icons/im";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { BsFiles } from "react-icons/bs";

import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

const HeroSection: React.FC = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="md:translate-x-[50%] translate-x-[10%] flex flex-col gap-2 md:text-start md:items-start items-center text-center ">
      {/* Header Text */}
      <div className="w-full flex flex-col gap-1 text-gray-700">
        <p className="font-bold md:text-5xl text-3xl min-w-max">Allen Usman</p>
        <p>Graphics Designer/Developer</p>
      </div>

      {/* Conditional Show Projects Section */}
      {showProjects && (
        <div className="w-full flex flex-col-3 gap-16 md:translate-x-0 -translate-x-6 mt-5">
          <Link href={"#movies"}>
            <div className="flex flex-col items-center text-gray-700 hover:text-white">
              <GoVideo className="text-5xl transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
              <p className="mt-2 text-xs font-light">Video Projects</p>
            </div>
          </Link>
          <Link href={"#collaterals"}>
            <div className="flex flex-col items-center text-gray-700 hover:text-white">
              <SlPicture className="text-5xl transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
              <p className="mt-2 text-xs font-light">Graphic Designs</p>
            </div>
          </Link>
          <Link href={"#projects"}>
            <div className="flex flex-col items-center text-gray-700 hover:text-white">
              <ImMobile className="text-5xl transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
              <p className="mt-2 text-xs font-light">UI/UX</p>
            </div>
          </Link>
        </div>
      )}

      {/* Contact & Show Projects Buttons */}
      <div className="flex gap-5 min-w-max">
        <Link
          href={"/contact"}
          className="transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] flex mt-5 items-center text-gray-700 hover:text-white border rounded-md text-center justify-center border-gray-700 hover:border-white"
        >
          <div className="px-4 sm:py-1 md:py-2 flex gap-2 justify-center items-center bg-gray-700 text-white rounded-md">
            <p className="sm:text-xs md:text-base">Contact Me</p>
            <FaPhone className="hidden md:block" />
          </div>
        </Link>

        <button
          onClick={toggleProjects}
          className="sm:py-1 px-4 md:py-2 md:px-5 transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] flex mt-5 items-center text-gray-700 hover:text-white border rounded-md text-center justify-center border-gray-700 hover:border-white"
        >
          <div className="flex gap-2 justify-center items-center">
            <p className="sm:text-xs md:text-base">Show Projects</p>
            <BsFiles className="hidden md:block" />
          </div>
        </button>
      </div>

      <div className="w-full flex flex-col-3 gap-16 md:translate-x-0 -translate-x-6 mt-5">
        <Link href={"https://www.facebook.com/allenrhoy.usman"}>
          <div className="flex flex-col items-center text-gray-700 hover:text-white">
            <FaFacebook className="text-xl transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
        </Link>
        <Link href={"https://github.com/AllenRheyUsman"}>
          <div className="flex flex-col items-center text-gray-700 hover:text-white">
            <FaGithub className="text-xl transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
        </Link>
        <Link href={"https://www.linkedin.com/in/allenrheyusman2023/"}>
          <div className="flex flex-col items-center text-gray-700 hover:text-white">
            <FaLinkedin className="text-xl rounded-full transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
        </Link>
        <Link href={"https://www.upwork.com/freelancers/~014497b1e441e2a6ae"}>
          <div className="flex flex-col items-center text-gray-700 hover:text-white">
            <FaSquareUpwork className="text-xl rounded-full transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
