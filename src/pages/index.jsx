import React from 'react';
import { Calendar, Calculator, Sword, Gem } from 'lucide-react';
import { Link } from '../contexts/RouterContext';
import { PageTemplate } from '../components/common/PageTemplate';

export const GuidesPage = () => (
  <PageTemplate title="Guides">
    <div className="text-gray-300">
      <p className="mb-6 text-lg">Welcome to our comprehensive MU Online guides section!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/guides/newbie">
          <div className="bg-gray-900/50 p-6 rounded-xl hover:border-cyan-600/50 border border-gray-700/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Newbie Guide</h3>
            <p className="text-gray-400">Start your journey in MU Online with our beginner-friendly guide.</p>
          </div>
        </Link>
        <Link to="/guides/pvp">
          <div className="bg-gray-900/50 p-6 rounded-xl hover:border-cyan-600/50 border border-gray-700/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">PvP Guide</h3>
            <p className="text-gray-400">Master player vs player combat with advanced strategies.</p>
          </div>
        </Link>
        <Link to="/guides/leveling">
          <div className="bg-gray-900/50 p-6 rounded-xl hover:border-cyan-600/50 border border-gray-700/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Leveling Guide</h3>
            <p className="text-gray-400">Efficient strategies for fast character progression.</p>
          </div>
        </Link>
        <Link to="/guides/guild">
          <div className="bg-gray-900/50 p-6 rounded-xl hover:border-cyan-600/50 border border-gray-700/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Guild Guide</h3>
            <p className="text-gray-400">Everything about guilds, alliances, and guild wars.</p>
          </div>
        </Link>
      </div>
    </div>
  </PageTemplate>
);

export const CharactersPage = () => (
  <PageTemplate title="Characters">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: 'Dark Knight', desc: 'Tanky melee warrior with strong defense', icon: '⚔️' },
        { name: 'Dark Wizard', desc: 'Powerful magic user with devastating spells', icon: '🔮' },
        { name: 'Fairy Elf', desc: 'Agile archer with support abilities', icon: '🏹' },
        { name: 'Magic Gladiator', desc: 'Hybrid class combining magic and melee', icon: '⚡' },
        { name: 'Dark Lord', desc: 'Summoner with pet companions', icon: '👑' },
        { name: 'Summoner', desc: 'Master of elemental magic', icon: '🌟' }
      ].map((character) => (
        <Link key={character.name} to={`/characters/${character.name.toLowerCase().replace(' ', '-')}`}>
          <div className="bg-gray-900/50 p-6 rounded-xl hover:border-cyan-600/50 border border-gray-700/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4 text-center">{character.icon}</div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3 text-center">{character.name}</h3>
            <p className="text-gray-400 text-center">{character.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </PageTemplate>
);

export const ToolsPage = () => (
  <PageTemplate title="Tools">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link to="/tools/exp-calculator">
        <div className="bg-blue-700 p-6 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105">
          <Calculator className="w-12 h-12 text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">EXP Calculator</h3>
          <p className="text-blue-100">Calculate experience points needed for leveling.</p>
        </div>
      </Link>
      <Link to="/tools/build-simulator">
        <div className="bg-red-700 p-6 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105">
          <Sword className="w-12 h-12 text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Build Simulator</h3>
          <p className="text-red-100">Plan and simulate your character builds.</p>
        </div>
      </Link>
      <Link to="/tools/drop-calculator">
        <div className="bg-purple-700 p-6 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105">
          <Gem className="w-12 h-12 text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Drop Calculator</h3>
          <p className="text-purple-100">Calculate item drop rates and probabilities.</p>
        </div>
      </Link>
    </div>
  </PageTemplate>
);

export const NewsPage = () => (
  <PageTemplate title="News">
    <div className="space-y-6">
      <article className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-600/50 transition-colors">
        <div className="flex items-center space-x-2 mb-3">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-gray-500 text-sm">Sep 19, 2024</span>
          <span className="bg-cyan-600 text-white text-xs px-2 py-1 rounded">Update</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">Season 20-1 Third Update Released</h2>
        <p className="text-gray-400">New legendary weapons and Mastery Tier 10 equipment have arrived. Enhanced gameplay features and balance improvements included.</p>
      </article>
      <article className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-600/50 transition-colors">
        <div className="flex items-center space-x-2 mb-3">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-gray-500 text-sm">Sep 18, 2024</span>
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Event</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">Double Rewards Weekend</h2>
        <p className="text-gray-400">All events and dungeons offer double rewards during this weekend. Don't miss out on this limited-time opportunity!</p>
      </article>
    </div>
  </PageTemplate>
);