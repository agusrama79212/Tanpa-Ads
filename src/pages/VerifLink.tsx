import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaPlayCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

export const VerifLink: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const videoId = searchParams.get('v');

  const adUrls = [
    'https://otieu.com/4/10069080',
    'https://viikqoye.com/dc/?blockID=399449'
  ];

  const getRandomAdUrl = () => {
    const randomIndex = Math.floor(Math.random() * adUrls.length);
    return adUrls[randomIndex];
  };

  const handleViewVideo = () => {
    // Mencegah klik ganda saat proses redirect sedang berjalan
    if (videoId && !isRedirecting) {
      setIsRedirecting(true);

      // 1. Buka video di tab baru secara instan
      window.open(`/e/${videoId}`, '_blank');

      // 2. Redirect tab saat ini setelah 2 detik
      setTimeout(() => {
        window.location.href = getRandomAdUrl();
      }, 2000);
    }
  };

  if (!videoId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
        <FaExclamationTriangle className="text-6xl text-yellow-500 mb-5" />
        <h1 className="text-4xl font-bold text-red-600 mb-3">Error</h1>
        <p className="text-lg text-gray-700 max-w-md">
          Video ID not found. Please check the link and try again.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
      <FaPlayCircle className="text-7xl text-blue-500 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
        You're One Step Away
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Click the button below to play your video instantly.
      </p>
      <button
        onClick={handleViewVideo}
        disabled={isRedirecting}
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isRedirecting ? (
          <>
            <FaSpinner className="animate-spin mr-3" />
            Redirecting...
          </>
        ) : (
          'Watch Video Now'
        )}
      </button>
    </div>
  );
};