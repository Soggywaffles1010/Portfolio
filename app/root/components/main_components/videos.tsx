'use client';
import React from 'react';
import NextVideo from 'next-video';
import Link from 'next/link';
import { Asset } from 'next-video/dist/assets.js';

interface VideosProps {
  video: string  ; // Allow both string and Asset types
  title: string;
  description: string;
  link: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Videos: React.FC<VideosProps> = ({ video, title, description, link, onMouseEnter, onMouseLeave }) => {
  const isYouTube = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };
  return (
    <div
      className="w-full border px-5 rounded-lg border-opacity-50 hover:border-blue-400 border-gray-900 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isYouTube(video) ? (
        // YouTube video embed
        <iframe
          width="100%"
          height="100%"
          src={video}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      ) : (
        // Local video file using Next.js Video component
        <NextVideo src={video} className="w-full h-auto" controls />
      )}
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-sm text-blue-500">
          <Link href={link}>Watch more</Link>
        </div>
      </div>
    </div>
  );
};

export default Videos;
