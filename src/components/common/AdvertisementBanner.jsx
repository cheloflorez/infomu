import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const AdvertisementBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      id: 1,
      image: "/assets/banners/publi1.gif",
      alt: "GP MU Online Season 20 - 5000+ Online Slow Server",
      url: "https://www.muonlinegp.com"
    },
    {
      id: 2,
      image: "/assets/banners/publi2.gif",
      alt: "Matrix MU - 20 Years Online Reset Server Season 20",
      url: "https://www.mumatrix.com"
    },
    {
      id: 3,
      image: "/assets/banners/publi3.gif",
      alt: "DeviasMU - EXP Rate x100 Season 20 Part 2-3",
      url: "https://www.deviasmu.com"
    }
  ];

  // Auto-rotate banners every 6 seconds
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [banners.length, isVisible]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleBannerClick = () => {
    window.open(banners[currentBanner].url, '_blank');
  };

  if (!isVisible) return null;

  const currentAd = banners[currentBanner];

  return (
    <div className="p-4 pt-0">
      <div className="relative bg-gray-800/50 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 z-20 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-black/50 backdrop-blur-sm border border-white/20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Banner image container */}
        <div 
          className="relative cursor-pointer group overflow-hidden"
          onClick={handleBannerClick}
        >
          <img
            src={currentAd.image}
            alt={currentAd.alt}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          
          {/* Fallback content */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center h-24"
            style={{ display: 'none' }}
          >
            <div className="text-center text-white">
              <h3 className="text-lg font-bold mb-1">MU Online Server</h3>
              <p className="text-sm opacity-90">Click to visit</p>
            </div>
          </div>

          {/* Overlay hover effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
          
          {/* Click indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
              <span className="text-white text-sm font-medium">Click to visit</span>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevBanner}
            className="ml-3 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-black/50 backdrop-blur-sm border border-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextBanner}
            className="mr-12 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-black/50 backdrop-blur-sm border border-white/20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentBanner 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
            style={{ 
              width: `${((currentBanner + 1) / banners.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};