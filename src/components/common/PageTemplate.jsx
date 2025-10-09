import React from 'react';

export const PageTemplate = ({ title, children }) => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
      </div>
      {children}
    </div>
  );
};