import React from 'react';
import { Calendar, Calculator, Sword, Gem, Crown } from 'lucide-react';
import { Link } from '../contexts/RouterContext';

export const HomePage = () => {
  const featuredNews = [
    {
      title: "Season 20-1 Third Update Released",
      date: "Sep 19, 2024",
      excerpt: "New legendary weapons and Mastery Tier 10 equipment have arrived. Enhanced gameplay features and balance improvements included.",
      category: "Update",
      featured: true
    },
    {
      title: "Maze of Dimensions Double Rewards Event",
      date: "Sep 18, 2024", 
      excerpt: "All Maze of Dimensions rewards are doubled during this special event period. Monster EXP increased by 30%.",
      category: "Event"
    },
    {
      title: "Speed Server Transfer Benefits",
      date: "Sep 17, 2024",
      excerpt: "Players can transfer from Speed Server to original servers with special benefits and bonuses.",
      category: "Server"
    },
    {
      title: "New Guild War System Implemented",
      date: "Sep 16, 2024",
      excerpt: "Enhanced guild warfare mechanics with improved rewards and balanced gameplay for all participating guilds.",
      category: "Update"
    }
  ];

  const tools = [
    { name: "EXP Calculator", icon: Calculator, desc: "Calculate experience needed", color: "bg-blue-700", path: "/tools/exp-calculator" },
    { name: "Build Simulator", icon: Sword, desc: "Plan your character build", color: "bg-red-700", path: "/tools/build-simulator" },
    { name: "Drop Calculator", icon: Gem, desc: "Item drop rates", color: "bg-purple-700", path: "/tools/drop-calculator" },
    { name: "Jewel Combiner", icon: Crown, desc: "Jewel combinations", color: "bg-yellow-700", path: "/tools/jewel-combiner" }
  ];

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to INFO MU</h1>
        <p className="text-gray-400">Your ultimate MU Online resource hub</p>
      </div>
      {/* Featured News Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Latest News</h2>
            <p className="text-gray-400">Stay updated with the latest MU Online news and events</p>
          </div>
          <Link to="/news" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
            View all news →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredNews.slice(0, 4).map((article, index) => (
            <article key={index} className="bg-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-600/50 transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/10">
              <div className="h-48 bg-gradient-to-br from-gray-700/60 to-gray-800/60 border-b border-gray-700/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-500 mb-2">🛡️</div>
                  <span className="text-gray-400 text-sm font-medium">{article.category}</span>
                  {article.featured && (
                    <div className="text-cyan-400 text-xs mt-1">★ Featured</div>
                  )}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>
                
                <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="mt-4 text-cyan-400 text-sm font-medium">
                  Read more →
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Popular Tools</h2>
          <p className="text-gray-400">Essential calculators and utilities for MU Online players</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <Link key={index} to={tool.path}>
              <div className={`${tool.color} rounded-xl p-4 hover:opacity-90 transition-all duration-300 cursor-pointer border border-gray-600/50 hover:scale-105 shadow-lg backdrop-blur-sm`}>
                <div className="text-center">
                  <tool.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1">{tool.name}</h3>
                  <p className="text-gray-300 text-xs">{tool.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
