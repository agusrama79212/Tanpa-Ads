import React from 'react';
import { FaRocket, FaUpload } from 'react-icons/fa';

export const Home: React.FC = () => {
  return (
    <div className="bg-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <FaRocket className="text-6xl text-blue-500 mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          The Newest Viral Video Streaming Platform
        </h1>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover, watch, and share the latest trending videos completely ad-free. 
          Become a part of our growing community by sharing your own content today.
        </p>

        <a
          href="/upload.html"
          className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <FaUpload className="mr-3" />
          Upload Video
        </a>
      </div>
    </div>
  );
};