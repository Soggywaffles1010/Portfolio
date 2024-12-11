'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Images = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Simulate fetching the image URL (replace with real fetch API)
    const fetchImageUrl = async () => {
      const response = await fetch('https://api.example.com/get-image-url');
      const data = await response.json();
      setImageUrl(data.imageUrl); // Assuming the response has an imageUrl field
    };

    fetchImageUrl();
  }, []); // Empty dependency array so it runs once on mount

  return (
    <div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          width={1920}
          height={1080}
          alt="thumbnail"
          className="object-cover w-full h-full"
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default Images;
