'use client';

import React, { useEffect, useState } from 'react';

interface TextboxProps {
  lines: string[];
  typingSpeed?: number; // Optional prop to customize typing speed
  delay?: number;       // Optional prop to customize delay before starting
}

const Textbox: React.FC<TextboxProps> = ({ lines, typingSpeed = 50, delay = 5000 }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsPlaying(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (isPlaying) {
      const fullText = lines[currentLine];
      let charIndex = 0;
      setDisplayedText("");

      const typingInterval = setInterval(() => {
        if (charIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);

          setTimeout(() => {
            setCurrentLine((prev) => (prev + 1) % lines.length);
          }, 2000); // Wait 2 seconds before switching to the next line
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [currentLine, isPlaying, lines, typingSpeed]);

  return (
    <div className="flex flex-col items-center h-full sm:w-full  w-3/4 justify-center mx-auto">
      <div className="relative bg-white border-2 border-black rounded-lg p-4 w-full shadow-md mx-auto">
        <p className="sm:text-lg text-md  text-gray-800 whitespace-pre-wrap">{displayedText}</p>
      </div>
    </div>
  );
};

export default Textbox;
