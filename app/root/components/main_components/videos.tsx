import React from 'react';
import NextVideo from 'next-video';
import Link from 'next/link';
import { Asset } from 'next-video/dist/assets.js';

interface VideosProps {
  video: Asset;
  title: string;
  description: string;
  link: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Videos: React.FC<VideosProps> = ({ video, title, description, link, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className='w-full border px-5 rounded-lg border-opacity-50 hover:border-blue-400 border-gray-900 cursor-pointer'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <NextVideo src={video} className="w-full h-auto" controls  />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-sm text-blue-500">
          <Link href={link}>Watch more</Link>
        </div>
      </div>
    </div>
  );
}

export default Videos;
