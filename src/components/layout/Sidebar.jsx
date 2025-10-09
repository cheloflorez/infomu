import React, { useState } from 'react';
import {
  Home, Search, Sword, Shield, Zap, Crown, Star, Users,
  Trophy, BookOpen, Package, Wrench, Calculator, Target,
  Activity, Map, Newspaper, Settings
} from 'lucide-react';
import { useRouter, Link } from '../../contexts/RouterContext';

export const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const { currentPath } = useRouter();

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
    }
  };

  const menuItems = [
    {
      id: 'home',
      icon: Home,
      title: 'HOME',
      path: '/',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'news',
      icon: Newspaper,
      title: 'NEWS',
      path: '/news',
      gradient: 'from-green-500 to-emerald-500'
    },
        {
      id: 'herramientas',
      icon: Package,
      title: 'HERRAMIENTAS',
      path: '/tools',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'game-system',
      icon: Settings,
      title: 'GAME SYSTEM',
      hasSubmenu: true,
      gradient: 'from-purple-500 to-pink-500',
      submenu: [
        { title: 'Classes', path: '/classes', icon: '⚔️' },
        { title: 'Stats', path: '/stats', icon: '📊' },
        { title: 'Levels', path: '/levels', icon: '📈' },
        { title: 'PvP System', path: '/pvp', icon: '⚡' }
      ]
    },
    {
      id: 'maps',
      icon: Map,
      title: 'MAPS & SPOTS',
      path: '/maps',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'characters',
      icon: Crown,
      title: 'CHARACTERS',
      hasSubmenu: true,
      gradient: 'from-yellow-500 to-orange-500',
      submenu: [
        { title: 'Dark Knight', path: '/characters/dark-knight', icon: '🛡️' },
        { title: 'Dark Wizard', path: '/characters/dark-wizard', icon: '🔮' },
        { title: 'Fairy Elf', path: '/characters/fairy-elf', icon: '🏹' },
        { title: 'Magic Gladiator', path: '/characters/magic-gladiator', icon: '⚡' },
        { title: 'Dark Lord', path: '/characters/dark-lord', icon: '👑' },
        { title: 'Summoner', path: '/characters/summoner', icon: '🌟' }
      ]
    },
    {
      id: 'events',
      icon: Trophy,
      title: 'EVENTS',
      hasSubmenu: true,
      gradient: 'from-red-500 to-pink-500',
      submenu: [
        { title: 'Current Events', path: '/events/current', icon: '🎯' },
        { title: 'Castle Siege', path: '/events/castle-siege', icon: '🏰' },
        { title: 'Blood Castle', path: '/events/blood-castle', icon: '🩸' },
        { title: 'Devil Square', path: '/events/devil-square', icon: '👹' },
        { title: 'Chaos Castle', path: '/events/chaos-castle', icon: '💀' }
      ]
    },
    {
      id: 'guides',
      icon: BookOpen,
      title: 'GUIDES',
      hasSubmenu: true,
      gradient: 'from-indigo-500 to-purple-500',
      submenu: [
        { title: 'Newbie Guide', path: '/guides/newbie', icon: '🌱' },
        { title: 'Leveling Guide', path: '/guides/leveling', icon: '📊' },
        { title: 'PvP Guide', path: '/guides/pvp', icon: '⚔️' },
        { title: 'Guild Guide', path: '/guides/guild', icon: '🏛️' },
        { title: 'Item Guide', path: '/guides/items', icon: '💎' }
      ]
    },
    {
      id: 'items',
      icon: Package,
      title: 'ITEMS',
      hasSubmenu: true,
      gradient: 'from-emerald-500 to-teal-500',
      submenu: [
        { title: 'Weapons', path: '/items/weapons', icon: '⚔️' },
        { title: 'Armor', path: '/items/armor', icon: '🛡️' },
        { title: 'Jewels', path: '/items/jewels', icon: '💎' },
        { title: 'Wings', path: '/items/wings', icon: '🪶' },
        { title: 'Sets', path: '/items/sets', icon: '📦' },
        { title: 'Accessories', path: '/items/accessories', icon: '💍' }
      ]
    },
  ];

  return (
    <aside className="w-72 p-4 h-screen overflow-y-auto">
      <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
        {/* Search Section */}
        <div className="p-4 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-gray-900/70 border border-cyan-600/30 px-3 py-2 rounded-xl hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
              <Search className="w-3.5 h-3.5 text-cyan-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-gray-200 placeholder-gray-400 outline-none flex-1 text-xs"
              />
              {searchTerm && (
                <button
                  type="submit"
                  className="ml-2 text-cyan-400 hover:text-cyan-300 transition-colors p-1 rounded hover:bg-cyan-400/10"
                >
                  <Search className="w-3 h-3" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-0.5">
          {menuItems.map((item) => (
            <div key={item.id} className="relative">
              {item.hasSubmenu ? (
                <button
                  onClick={() => toggleSection(item.id)}
                  className="w-full group flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-700/60 hover:text-white rounded-lg text-xs transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-600/30"
                >
                  <span className="font-medium">{item.title}</span>
                  <div className={`transform transition-all duration-300 text-cyan-400 ${expandedSections[item.id] ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`w-full group flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700/60 hover:text-white rounded-lg text-xs transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-600/30 ${currentPath === item.path ? 'bg-gray-700/60 text-white border-cyan-500/30 shadow-cyan-500/10' : ''
                    }`}
                >
                  <span className="font-medium">{item.title}</span>
                </Link>
              )}

              {/* Submenu */}
              {item.hasSubmenu && expandedSections[item.id] && (
                <div className="ml-4 mt-1 space-y-0.5 bg-gray-900/40 rounded-lg p-2 border border-gray-700/30">
                  {item.submenu.map((subItem, index) => (
                    <Link
                      key={index}
                      to={subItem.path}
                      className={`group flex items-center w-full text-left px-2 py-1.5 text-gray-400 hover:text-cyan-300 text-xs transition-all duration-200 rounded-md hover:bg-gray-700/40 ${currentPath === subItem.path ? 'text-cyan-400 bg-gray-700/40' : ''
                        }`}
                    >
                      <span className="font-medium">{subItem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* MU Online footer accent */}
        <div className="p-3 border-t border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="text-center">
            <div className="text-xs text-gray-500 font-medium">
              ⚔️ MU ONLINE GUIDE ⚔️
            </div>
            <div className="text-xs text-cyan-400/60 mt-1">
              Master the Continent
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};