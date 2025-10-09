import React from 'react';
import { Link } from '../../contexts/RouterContext';

export const Footer = () => {
  return (
    <footer className="p-6">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">INFO MU</h3>
              <p className="text-gray-400">
                Your complete resource for MU Online guides, tools, and community content.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Guides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/guides/builds" className="hover:text-cyan-400 transition-colors">Character Builds</Link></li>
                <li><Link to="/guides/leveling" className="hover:text-cyan-400 transition-colors">Leveling Guide</Link></li>
                <li><Link to="/guides/pvp" className="hover:text-cyan-400 transition-colors">PvP Strategies</Link></li>
                <li><Link to="/guides/events" className="hover:text-cyan-400 transition-colors">Event Guide</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/tools/exp-calculator" className="hover:text-cyan-400 transition-colors">EXP Calculator</Link></li>
                <li><Link to="/tools/build-simulator" className="hover:text-cyan-400 transition-colors">Build Simulator</Link></li>
                <li><Link to="/tools/item-database" className="hover:text-cyan-400 transition-colors">Item Database</Link></li>
                <li><Link to="/tools/drop-calculator" className="hover:text-cyan-400 transition-colors">Drop Calculator</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Reddit</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 INFO MU. Unofficial site. MU Online is a trademark of Webzen Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};