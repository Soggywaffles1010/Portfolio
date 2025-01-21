import React from 'react';

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
  const handleHover = (video: {
    src: string;
    title: string;
    description: string;
    link: { text: string; href: string };
  }) => {
    onHover({
      title: video.title,
      description: video.description,
      video: video.src,
      link: video.link,
    });
  };

  return (
    <div className="flex flex-wrap md:gap-8 gap-1 md:mx-5 mx-0 overflow-hidden">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="text-white font-semibold">{card.category}</div>
          <div className="flex flex-row md:gap-4 gap-1 md:ml-4 ml-0">
            {card.videos.map((video, videoIndex) => (
              <div
                key={videoIndex}
                className="rounded-sm overflow-hidden cursor-pointer transition-transform ease-in-out duration-300 hover:scale-105"
                onMouseEnter={() => handleHover(video)}
              >
                <iframe
                  src={video.src}
                  title={video.title}
                  width="180"
                  height="150"
                  className="rounded-sm"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videocard;
