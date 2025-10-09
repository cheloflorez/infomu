import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { AdvertisementBanner } from '../common/AdvertisementBanner';

export const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 flex flex-col">
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div 
              className="bg-gray-800/90 backdrop-blur-sm w-72 h-full rounded-r-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar />
            </div>
          </div>
        )}
        
        <div className="flex-1 flex flex-col">
          <AdvertisementBanner /> {/* Banner con el ancho del main */}
                    <AdvertisementBanner /> {/* Banner con el ancho del main */}
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};