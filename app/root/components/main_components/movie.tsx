import React from 'react';
 
import trial from '/videos/final hospital gaza bombing.mp4';
import sample from '/videos/2024-05-05 063835.mp4';
import Videos from './videos';

const movie = () => {
  const videoData = [
    { video: trial, title: 'Final Hospital Gaza Bombing', description: 'Description for Final Hospital Gaza Bombing video', link:'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: sample, title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video', link:'https://www.youtube.com/watch?v=XDqEvmxnLeY'  },
    { video: trial, title: 'Final Hospital Gaza Bombing', description: 'Description for Final Hospital Gaza Bombing video' , link:'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    { video: sample, title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video', link:'https://www.youtube.com/watch?v=XDqEvmxnLeY'  },
    { video: trial, title: 'Final Hospital Gaza Bombing', description: 'Description for Final Hospital Gaza Bombing video', link:'https://www.youtube.com/watch?v=XDqEvmxnLeY'  },
    { video: sample, title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video', link:'https://www.youtube.com/watch?v=XDqEvmxnLeY'  },
    { video: trial, title: 'Final Hospital Gaza Bombing', description: 'Description for Final Hospital Gaza Bombing video', link:'https://www.youtube.com/watch?v=XDqEvmxnLeY'  },
    { video: sample, title: '2024-05-05 063835', description: 'Description for 2024-05-05 063835 video' , link:'https://www.youtube.com/watch?v=XDqEvmxnLeY' },
    
  ];
  return (
    <div className='h-screen w-full flex justify-center items-center overflow-hidden'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8'>
      {videoData.map((data, index) => (
          <Videos
            key={index}
            video={data.video}
            title={data.title}
            description={data.description}
            link={data.link}
          />
        ))}
      </div>
    </div>
  )
}

export default movie;
