import React from 'react';
import { Link } from '../../contexts/RouterContext';

export const InfoMULogo = () => {
  return (
    <Link to="/" className="flex items-center justify-center space-x-4">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <div className="text-white text-2xl font-bold">MU</div>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg blur opacity-25"></div>
      </div>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          MU INFO
        </h1>
        <p className="text-gray-400 text-sm font-medium tracking-wider mt-1">
          YOUR MU ONLINE GUIDE
        </p>
      </div>
    </Link>
  );
};