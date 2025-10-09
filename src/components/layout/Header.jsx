import React from 'react';
import { Menu, X } from 'lucide-react';
import { InfoMULogo } from '../common/Logo';

export const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="p-4 bg-transparent">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50">
        {/* Main Header Section */}
        <div className="py-6 px-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="w-12">
              <button
                className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-700/50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            <InfoMULogo />

            <div className="w-12"></div>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-gray-900/30 border-t border-gray-700/50 py-4 px-4 rounded-b-2xl">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-300 text-sm leading-relaxed">
              Descubre guías completas, builds de personajes, bases de datos de items y herramientas poderosas para
              <span className="text-cyan-400 font-medium"> MU Online</span>.
              Todo lo que necesitas para dominar el mundo de MU en un solo lugar.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};