// NewsPage.jsx - Usando la misma base de datos
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PageTemplate } from '../common/PageTemplate';
import { Link } from '../../contexts/RouterContext';
import { articlesDatabase } from './NewsDetailPage';

export const NewsPage = () => {
    const [selectedSeason, setSelectedSeason] = useState('Season 21');

    const seasons = ['Season 21', 'Season 20', 'Season 19', 'Season 18'];

    // Organizar artículos por temporada basándose en el ID
    const newsData = {
        'Season 21': Object.values(articlesDatabase).filter(a => a.id.startsWith('season21')),
        'Season 20': Object.values(articlesDatabase).filter(a => a.id.startsWith('season20')),
        'Season 19': [], // Agrega artículos cuando los tengas
        'Season 18': []  // Agrega artículos cuando los tengas
    };

    const currentNews = newsData[selectedSeason] || [];

    const getCategoryColor = (category) => {
        const colors = {
            Update: 'bg-cyan-600',
            Event: 'bg-green-600',
            Server: 'bg-purple-600',
            Content: 'bg-orange-600',
            Maintenance: 'bg-red-600'
        };
        return colors[category] || 'bg-gray-600';
    };

    return (
        <PageTemplate title="MU Online News">
            <div className="mb-8">
                <p className="text-gray-400 mb-6">Stay updated with the latest news, updates, and events from MU Online</p>

                {/* Season Navbar */}
                <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-2 mb-6">
                    <div className="flex flex-wrap gap-2">
                        {seasons.map((season) => (
                            <button
                                key={season}
                                onClick={() => setSelectedSeason(season)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedSeason === season
                                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                {season}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* News Grid */}
            <div className="space-y-6">
                {currentNews.length > 0 ? (
                    currentNews.map((article) => (
                        <Link key={article.id} to={`/news/${article.id}`}>
                            <article className={`bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden hover:border-cyan-600/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${article.featured ? 'shadow-lg shadow-cyan-500/10' : ''
                                }`}>
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="md:w-48 h-48 relative border-b md:border-b-0 md:border-r border-gray-700/50 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-700/60 to-gray-800/60">
                                        <img
                                            src={`/images/${article.id}.png`}
                                            alt={article.title}
                                            className="max-w-full max-h-full object-contain opacity-90"
                                        />
                                        {/* Overlay opcional */}
                                        {article.featured && (
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-cyan-400 text-xs font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                                                ⭐ Featured
                                            </div>
                                        )}
                                    </div>
                                    {/* Content Section */}
                                    <div className="flex-1 p-6">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {article.date}
                                            </div>

                                            <span className={`${getCategoryColor(article.category)} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                                                {article.category}
                                            </span>

                                            {article.readTime && (
                                                <div className="flex items-center text-gray-500 text-sm">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {article.readTime}
                                                </div>
                                            )}
                                        </div>

                                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                            {article.title}
                                        </h2>

                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                                            Read full article
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))
                ) : (
                    <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-12 text-center">
                        <div className="text-gray-500 text-6xl mb-4">📰</div>
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">No news available</h3>
                        <p className="text-gray-500">Check back later for updates on {selectedSeason}</p>
                    </div>
                )}
            </div>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-4 rounded-lg border border-cyan-700/30">
                    <div className="text-cyan-400 text-sm font-medium mb-1">Total Articles</div>
                    <div className="text-white text-2xl font-bold">{currentNews.length}</div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-lg border border-green-700/30">
                    <div className="text-green-400 text-sm font-medium mb-1">Active Season</div>
                    <div className="text-white text-2xl font-bold">{selectedSeason}</div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-700/30">
                    <div className="text-purple-400 text-sm font-medium mb-1">Latest Update</div>
                    <div className="text-white text-2xl font-bold">{currentNews[0]?.date || 'N/A'}</div>
                </div>
            </div>
        </PageTemplate>
    );
};