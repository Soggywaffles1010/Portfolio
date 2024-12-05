'use client';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full"></div>
    </div>
  );
};

export default Loader;
