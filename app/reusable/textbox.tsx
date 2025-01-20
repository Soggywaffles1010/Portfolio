'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { IoNavigateOutline } from "react-icons/io5";

interface TextboxProps {
  lines: string[];       // Array of descriptions to type out
  typingSpeed?: number;  // Optional prop to customize typing speed
  delay?: number;        // Optional prop to customize delay before starting
  title: string[];       // Array of dynamic titles
  prototype: string[];   // Array of dynamic prototype links
  tools: React.ReactNode[][]; // Array of arrays containing icon JSX
}

const Textbox: React.FC<TextboxProps> = ({ 
  lines, 
  typingSpeed = 50, 
  delay = 5000, 
  title, 
  prototype,
  tools,
}) => {
  const [currentLine, setCurrentLine] = useState(0);        // Current line index
  const [displayedText, setDisplayedText] = useState('');   // Text for typing animation
  const [displayedTitle, setDisplayedTitle] = useState(title[0]); // Instantly updated title
  const [currentPrototype, setCurrentPrototype] = useState(prototype[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayedTools, setDisplayedTools] = useState(tools[0]); // Tools for current line

  // Start typing animation after initial delay
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsPlaying(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  // Handle typing animation for `lines`
  useEffect(() => {
    if (isPlaying) {
      const fullText = lines[currentLine];
      let charIndex = 0;
      setDisplayedText(''); // Clear previous text

      const typingInterval = setInterval(() => {
        if (charIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);

          setTimeout(() => {
            // Move to the next line, prototype, and title
            setCurrentLine((prev) => {
              const nextIndex = (prev + 1) % lines.length;
              return nextIndex;
            });
          }, 2000); // Wait 2 seconds before switching to the next line
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [currentLine, isPlaying, lines, typingSpeed]);

  // Update `title`, `prototype`, and `tools` instantly when `currentLine` changes
  useEffect(() => {
    setDisplayedTitle(title[currentLine]);
    setCurrentPrototype(prototype[currentLine]);
    setDisplayedTools(tools[currentLine]);
  }, [currentLine, title, prototype, tools]);

  return (
    <div className="relative flex flex-col md:gap-2 gap-0 rounded-lg p-4 w-full text-gray-700 h-[100vh] md:translate-y-0 translate-y-[72%]">
      {/* Dynamic Title (updates instantly) */}
      <p className="font-bold text-2xl h-[10%] text-center md:text-start">{displayedTitle}</p>

      {/* Typing Text (with animation) */}
      <p className="sm:text-lg text-md whitespace-pre-wrap md:h-[50%] h-[11%] truncate md:translate-y-0 -translate-y-[55%] ">{displayedText}</p>

      {/* Dynamic Tools (updates with delay) */}
      <div className="flex flex-row gap-5 mt-3 md:translate-y-0 -translate-y-[380%] md:justify-start justify-center">
        {displayedTools.map((tool, index) => (
          <div key={index}>{tool}</div>
        ))}
      </div>

      {/* Dynamic Prototype Link */}
      <Link
        href={currentPrototype}
        className="transition-transform duration-300 flex mt-5 items-center text-gray-700 rounded-md md:translate-y-0 -translate-y-[150%] md:justify-start justify-center"
      >
        <div className='flex gap-10'>
        <div className="px-4 py-2 flex gap-2 justify-start items-center border hover:border-gray-700 hover:bg-gray-400 bg-gray-500 hover:text-gray-700 text-white rounded-md">
          <p className='hidden md:block'>Show Live Prototype</p>
          <p className='block md:hidden'>Prototype</p>
          <IoNavigateOutline className="hidden md:block" />
        </div>
        <div className="px-4 py-2 flex gap-2 justify-start items-center border md:hidden  border-gray-700 text-gray-700 rounded-md">
          <p className=''>Read more</p>
         
        </div>
        </div>
      </Link>
    </div>
  );
};

export default Textbox;
