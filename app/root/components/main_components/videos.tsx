'use client';
import React, { useState } from 'react';
import NextVideo from 'next-video';
import Link from 'next/link';
import { Asset } from 'next-video/dist/assets.js';

interface VideosProps {
  video: string;  // Allow both string and Asset types
  title: string;
  description: string;
  link: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Videos: React.FC<VideosProps> = ({
  video,
  title,
  description,
  link,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isYouTube = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Handle mouse enter and leave to toggle shadow
  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    <div
      className={`w-full p-5  rounded-lg    cursor-pointer  
        ${isHovered ? 'card-hover' : 'card-regular'}`}  // Toggle between regular and hover styles based on state
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isYouTube(video) ? (
        // YouTube video embed
        <iframe
          width="100%"
          height="auto"
          src={video}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          className="bg-white rounded-md"
        />
      ) : (
        // Local video file using Next.js Video component
        <NextVideo src={video} className="w-full h-auto" controls />
      )}

      <div className="mt-2 flex flex-col gap-2 ">
        <h3 className="text-lg font-semibold text-orange-950 ">{title}</h3>
        <p className="text-sm truncate text-orange-950">{description}</p>
        <div className="text-sm text-blue-500 mt-2 hover:text-white">
          <Link href={link}>Watch more</Link>
        </div>
      </div>
    </div>
  );
};

export default Videos;
