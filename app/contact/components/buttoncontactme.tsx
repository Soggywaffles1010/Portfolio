'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface ButtonContactMeProps {
  text: string;
  href: string;
}

const ButtonContactMe: React.FC<ButtonContactMeProps> = ({ text, href }) => {
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>({
    [text]: false,
  });

  const handleMouseEnter = (link: string) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [link]: true,
    }));
  };

  const handleMouseLeave = (link: string) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [link]: false,
    }));
  };

  return (
    <div>
      <Link
        href={href}
        className={`block text-center font-bold text-xl transition-all ${
          hoverStates[text] ? 'text-hover' : 'text-shadow-custom'
        }`}
        onMouseEnter={() => handleMouseEnter(text)}
        onMouseLeave={() => handleMouseLeave(text)}
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonContactMe;
