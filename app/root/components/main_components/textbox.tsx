'use client';

import React, { useEffect, useState } from 'react';

const lines = [
  "Hello adventurer.",
  "It is so nice that you came across my portfolio.",
  "I am Allen, a Graphics designer.",
  "My love for art is like a never-ending adventure where every stroke brings new possibilities.",
  "I have helped a lot of business owners in skyrocketing their success exponentially through digital arts.",
  "From Social media ads to videos, from landing pages to a whole website and apps.",
  "Are you gonna be my future client?",
  "I can't wait to work with you, and together let's elevate your business to new heights."
];

const Textbox: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false); // Set to true so animation starts automatically

  useEffect(() => {
    // Delay the animation by 5 seconds
    const delayTimeout = setTimeout(() => {
      setIsPlaying(true);
    }, 25000); // 5 seconds delay

    return () => clearTimeout(delayTimeout); // Cleanup timeout on component unmount
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const fullText = lines[currentLine];
      let charIndex = 0;
      setDisplayedText(""); // Clear the current text for typing animation

      const typingInterval = setInterval(() => {
        if (charIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, charIndex)); // Update displayed text up to the current index
          charIndex++;
        } else {
          clearInterval(typingInterval);

          // Wait 2 seconds before switching to the next line
          setTimeout(() => {
            setCurrentLine((prev) => (prev + 1) % lines.length); // Loop to the beginning
          }, 2000);
        }
      }, 50); // Typing speed: 50ms per character

      return () => clearInterval(typingInterval);
    }
  }, [currentLine, isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {/* Text Box */}
      <div className="relative bg-white border-2 border-black rounded-lg p-4 w-80 shadow-md">
        <p className="text-lg text-gray-800 whitespace-pre-wrap">
          {displayedText}
        </p>
      </div>

      {/* Contact Me Button */}
      {/* <a href="#contact" className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
        Contact Me
      </a> */}
    </div>
  );
};

export default Textbox;
