'use client';

import React from 'react';
import Link from 'next/link';

interface VideosProps {
  video: string; // Now, only a string path is expected
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
      {/* Use regular <video> tag */}
      <video src={video} className="" controls />
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
