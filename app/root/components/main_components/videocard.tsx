'use client';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Chevron icons for navigation

interface CardProps {
  category: string;
  videos: {
    src: string;
    title: string;
    description: string;
    link: { text: string; href: string };
  }[];
}

interface VideocardProps {
  cards: CardProps[];
  onHover: (card: {
    title: string;
    description: string;
    video: string;
    link: { text: string; href: string };
  }) => void;
}

const Videocard: React.FC<VideocardProps> = ({ cards, onHover }) => {
  const [offsets, setOffsets] = useState<number[]>(cards.map(() => 0)); // Track offsets for each category

  const handleHover = ({ src, title, description, link }: {
    src: string;
    title: string;
    description: string;
    link: { text: string; href: string };
  }) => {
    onHover({ title, description, video: src, link });
  };

  const handlePrev = (categoryIndex: number) => {
    setOffsets((prevOffsets) =>
      prevOffsets.map((offset, i) =>
        i === categoryIndex ? Math.max(0, offset - 1) : offset
      )
    );
  };

  const handleNext = (categoryIndex: number, videoLength: number) => {
    setOffsets((prevOffsets) =>
      prevOffsets.map((offset, i) =>
        i === categoryIndex
          ? Math.min(videoLength - 1, offset + 1)
          : offset
      )
    );
  };

  return (
    <div className="flex flex-col gap-8 bg-[#07121a] rounded-md">
      {cards.map((card, categoryIndex) => {
        const currentOffset = offsets[categoryIndex];
        const visibleVideos = card.videos.slice(currentOffset);

        return (
          <div key={categoryIndex} className="flex flex-col gap-4">
            {/* Category Header */}
            <div className="flex justify-between items-center">
              <div className="text-white font-semibold">{card.category}</div>
            </div>

            {/* Video Row */}
            <div className="relative">
              <div className="flex items-center">
                {/* Previous Button */}
                <button
                  className="text-gray-400 hover:text-gray-200 disabled:opacity-50"
                  onClick={() => handlePrev(categoryIndex)}
                  disabled={currentOffset === 0}
                >
                  <FaChevronLeft size={20} />
                </button>

                {/* Cards Container */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full overflow-hidden px-4"
                >
                  {visibleVideos.map((video, videoIndex) => (
                    <div
                      key={videoIndex}
                      className="rounded-sm overflow-hidden cursor-pointer transition-transform hover:scale-105"
                      onMouseEnter={() => handleHover(video)}
                    >
                      <iframe
                        src={video.src}
                        title={video.title}
                        width="100%"
                        height="150"
                        className="rounded-sm"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  className="text-gray-400 hover:text-gray-200 disabled:opacity-50"
                  onClick={() => handleNext(categoryIndex, card.videos.length)}
                  disabled={currentOffset + 1 >= card.videos.length}
                >
                  <FaChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Videocard;
