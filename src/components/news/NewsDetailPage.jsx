// NewsDetailPage.jsx - Versión Actualizada
import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { PageTemplate } from '../common/PageTemplate';
import { Link, useRouter } from '../../contexts/RouterContext';

// Base de datos de artículos
const articlesDatabase = {
  // Season 21
  'season21-part1': {
    id: 'season21-part1',
    title: "Season 21 Grand Opening - New Era Begins",
    date: "Oct 25, 2025",
    category: "Update",
    excerpt: "Experience the most ambitious update yet with revolutionary gameplay mechanics, new territories to explore, and enhanced PvP systems.",
    image: "🎮",
    readTime: "5 min",
    author: "MU Online Team",
    content: `
# Season 21: A New Era for MU Online

We are thrilled to announce the grand opening of **Season 21**, the most ambitious update in MU Online history!

## What's New

### Revolutionary Gameplay Mechanics
Season 21 introduces groundbreaking mechanics that will change how you experience MU Online:
- **Dynamic Combat System**: Real-time combat adjustments based on player performance
- **Adaptive Difficulty**: Challenges that scale with your skill level
- **Enhanced Party Mechanics**: Better coordination rewards for team play

### New Territories
Explore uncharted lands filled with mystery and danger:
- **Forsaken Lands**: A dark realm with powerful demons
- **Crystal Caverns**: Underground maze with rare treasures
- **Sky Fortress**: Floating citadel with epic boss encounters

### PvP System Overhaul
The PvP system has been completely redesigned:
- **Ranked Matchmaking**: Fair matches based on skill rating
- **New Arenas**: 5 unique battlegrounds with different strategies
- **Seasonal Rewards**: Exclusive items for top-ranked players

### New Equipment Tier
Introducing **Mythical Grade** equipment:
- +20 enhancement levels
- Unique passive abilities
- Set bonuses that change gameplay

## Event Schedule

**Week 1**: Double EXP for all players
**Week 2**: Special drop rate increase
**Week 3**: Guild Wars tournament
**Week 4**: Season finale celebration

## Balance Changes

All character classes have received adjustments to ensure competitive balance:
- Dark Knight: Enhanced tanking abilities
- Dark Wizard: Improved mana efficiency
- Fairy Elf: Better mobility options
- Magic Gladiator: Balanced hybrid scaling
- Dark Lord: Stronger pet mechanics
- Summoner: More powerful elemental skills

## Technical Improvements

- Server performance optimized for 10,000+ concurrent players
- Reduced latency for international connections
- Anti-cheat system enhanced
- New graphics engine with better performance

## Community Features

Stay connected with fellow players:
- In-game guild chat improvements
- Friend list expansion (up to 200 friends)
- Player housing system
- Achievement showcase

Join us in this exciting new chapter of MU Online!

*The MU Online Team*
    `
  },
  'season21-part2': {
    id: 'season21-part2',
    title: "Launch Week Special Events",
    date: "Oct 24, 2025",
    category: "Event",
    excerpt: "Celebrate Season 21 with exclusive rewards, double EXP, and limited-time dungeon access.",
    image: "🎉",
    readTime: "3 min",
    author: "Event Team",
    content: `
# Launch Week Special Events

Celebrate the launch of Season 21 with incredible events and rewards!

## Event Schedule

### Day 1-3: Double Everything
- **2x EXP**: Level up twice as fast
- **2x Drop Rate**: Better loot from all monsters
- **2x Zen**: Earn more gold

### Day 4-5: Rare Boss Spawns
Special world bosses will spawn every 2 hours:
- Golden Dragon (Lorencia)
- Ice Queen (Devias)
- Shadow Master (Dungeon)

### Day 6-7: Grand Finale
- **Mega Lottery**: Win legendary items
- **Guild Tournament**: Compete for server dominance
- **Free Costume Event**: Limited edition launch costumes

## Exclusive Rewards

Participate in events to earn:
- Launch Week Special Wings
- Unique Pet: Season Phoenix
- Title: "Pioneer"
- 10x Premium Boxes

## How to Participate

1. Log in during event hours
2. Complete daily missions
3. Collect event tokens
4. Exchange tokens for rewards

Don't miss out on these limited-time events!
    `
  },
  'season21-class': {
    id: 'season21-class',
    title: "New Class: Rage Fighter Revealed",
    date: "Oct 23, 2025",
    category: "Update",
    excerpt: "Master the art of hand-to-hand combat with the new Rage Fighter class.",
    image: "👊",
    readTime: "4 min",
    author: "Development Team",
    content: `
# New Class: Rage Fighter

The Rage Fighter is MU Online's newest character class, specializing in devastating hand-to-hand combat!

## Class Overview

The Rage Fighter channels pure rage into overwhelming physical power. Unlike other classes, they don't rely on weapons - their fists are their greatest weapons.

## Key Features

### Unique Combat Style
- **Bare Handed Combat**: Fight without weapons for maximum damage
- **Rage Meter**: Build up rage to unleash devastating combos
- **Counter Mechanics**: Parry and counter enemy attacks

### Skill Trees

**Fury Tree**: Pure damage output
- Crushing Blow
- Rage Burst
- Titan Fist

**Tank Tree**: Defensive capabilities
- Iron Body
- Damage Reduction
- Health Regeneration

**Hybrid Tree**: Balance of both
- Adaptive Fighting
- Combo Master
- Rage Recovery

## Starting Stats

- Strength: 28
- Agility: 20
- Vitality: 25
- Energy: 15

## Recommended Build

For PvP: Focus on Strength and Agility
For PvE: Balance Strength and Vitality

Get ready to dominate with your fists!
    `
  },
  'season21-map': {
    id: 'season21-map',
    title: "Explore Karutan Region",
    date: "Oct 22, 2025",
    category: "Content",
    excerpt: "Journey through the mysterious Karutan region with new monsters and legendary items.",
    image: "🗺️",
    readTime: "6 min",
    author: "Content Team",
    content: `
# Karutan Region Guide

Discover the secrets of the newly opened Karutan Region!

## Region Overview

Karutan is a mysterious land shrouded in ancient magic. Players level 350+ can enter this dangerous territory.

## Notable Locations

### Karutan 1
- Level requirement: 350
- Recommended for: Leveling
- Notable drops: Rare jewels

### Karutan 2
- Level requirement: 380
- Recommended for: Farming
- Notable drops: Ancient items

### Karutan Relics
- Level requirement: 400
- Recommended for: Boss hunting
- Notable drops: Legendary equipment

## New Monsters

**Karutan Warrior**: Melee fighter with high defense
**Karutan Mage**: Magic caster with AoE spells
**Karutan Elite**: Mini-boss with rare drops
**Karutan Lord**: World boss (spawns every 6 hours)

## Exclusive Items

- Karutan Weapons Set
- Ancient Guardian Armor
- Legendary Wings of Karutan
- Karutan Soul Stones

Prepare yourself for the challenge!
    `
  },
  // Season 20
  'season20-update3': {
    id: 'season20-update3',
    title: "Season 20-1 Third Update Released",
    date: "Sep 19, 2024",
    category: "Update",
    excerpt: "New legendary weapons and Mastery Tier 10 equipment have arrived.",
    image: "⚔️",
    readTime: "4 min",
    author: "Development Team",
    content: `
# Season 20-1 Third Update

The third major update for Season 20-1 is now live!

## New Content

### Legendary Weapons
Five new legendary weapons have been added:
- **Eternal Blade**: Ultimate sword for Dark Knight
- **Staff of Chaos**: Devastating magic for Dark Wizard
- **Moonlight Bow**: Precision weapon for Fairy Elf
- **Dual Scepters**: Hybrid power for Magic Gladiator
- **Dark Command**: Pet enhancement for Dark Lord

### Mastery Tier 10
Unlock the highest tier of mastery:
- +15% damage increase
- Unique skill animations
- Special passive effects
- Enhanced visual effects

## Balance Updates

Character adjustments for better gameplay:
- All classes damage normalized
- Skill cooldowns optimized
- Mana costs adjusted
- Critical hit rates balanced

## Bug Fixes

- Fixed inventory sorting issues
- Resolved party invitation bugs
- Corrected quest completion rewards
- Fixed map transition problems

Update now and experience the new content!
    `
  },
  'season20-event1': {
    id: 'season20-event1',
    title: "Maze of Dimensions Double Rewards Event",
    date: "Sep 18, 2024",
    category: "Event",
    excerpt: "All Maze of Dimensions rewards are doubled during this special event period.",
    image: "🎯",
    readTime: "3 min",
    author: "Event Team",
    content: `
# Maze of Dimensions Special Event

Double rewards for all Maze of Dimensions participants!

## Event Details

**Duration**: 7 days
**Bonus**: 2x all rewards + 30% EXP boost

## How to Participate

1. Enter Maze of Dimensions as normal
2. Complete any level
3. Receive double rewards automatically

## Reward Highlights

- 2x Jewels
- 2x Ancient Items
- 2x Boss Materials
- Bonus: 30% Monster EXP

Don't miss this limited time event!
    `
  },
  'season20-server': {
    id: 'season20-server',
    title: "Speed Server Transfer Benefits",
    date: "Sep 17, 2024",
    category: "Server",
    excerpt: "Players can transfer from Speed Server to original servers with special benefits.",
    image: "🚀",
    readTime: "2 min",
    author: "Server Team",
    content: `
# Speed Server Transfer Program

Transfer your character with exclusive benefits!

## Transfer Benefits

- Keep all items and equipment
- Receive 1000 Bonus Credits
- Get exclusive transfer title
- Priority character creation

## How to Transfer

1. Visit the website
2. Select your character
3. Choose destination server
4. Confirm transfer

Transfers are free for a limited time!
    `
  },
  'season20-guild': {
    id: 'season20-guild',
    title: "New Guild War System Implemented",
    date: "Sep 16, 2024",
    category: "Update",
    excerpt: "Enhanced guild warfare mechanics with improved rewards and balanced gameplay.",
    image: "🏰",
    readTime: "5 min",
    author: "PvP Team",
    content: `
# New Guild War System

Experience completely revamped guild warfare!

## What's Changed

### New Matchmaking
- Guilds matched by similar power levels
- Fair competition guaranteed
- Better reward distribution

### Enhanced Rewards
- Guild points for victories
- Exclusive guild items
- Territory control bonuses

### Battle Mechanics
- 3 phases per war
- Strategic objective points
- Siege weapons available

Gather your guild and dominate!
    `
  }
};

export const NewsDetailPage = () => {
  const { currentPath } = useRouter();
  
  // Extraer el ID del artículo de la URL
  // Ejemplo: /news/season21-update1 -> season21-update1
  const articleId = currentPath.split('/news/')[1] || currentPath.split('/').pop();
  
  // Buscar el artículo en la base de datos
  const article = articlesDatabase[articleId];

  // Si no existe el artículo, mostrar página de error
  if (!article) {
    return (
      <PageTemplate title="Article Not Found">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold text-white mb-4">Article Not Found</h2>
          <p className="text-gray-400 mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <p className="text-sm text-gray-500 mb-6">Article ID: {articleId}</p>
          <Link to="/news">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Back to News
            </button>
          </Link>
        </div>
      </PageTemplate>
    );
  }

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
    <PageTemplate>
      {/* Back Button */}
      <Link to="/news">
        <button className="mb-6 flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </button>
      </Link>

      {/* Article Header */}
      <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-8 mb-6">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className={`${getCategoryColor(article.category)} text-white text-sm px-4 py-1.5 rounded-full font-medium`}>
            {article.category}
          </span>
          
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {article.date}
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            {article.readTime}
          </div>

          {article.author && (
            <div className="flex items-center text-gray-400 text-sm">
              <Tag className="w-4 h-4 mr-2" />
              By {article.author}
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-4">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-400 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-700/50">
          <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-8">
        <div className="prose prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {article.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              // Handle headings
              if (trimmed.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                    {trimmed.replace('# ', '')}
                  </h1>
                );
              }
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-cyan-400 mt-6 mb-3">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-white mt-4 mb-2">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              
              // Handle lists
              if (trimmed.includes('\n- ')) {
                const items = trimmed.split('\n').filter(line => line.trim().startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                    {items.map((item, i) => {
                      const text = item.replace(/^- /, '');
                      const parts = text.split('**');
                      return (
                        <li key={i} className="text-gray-300">
                          {parts.map((part, j) => 
                            j % 2 === 1 ? <strong key={j} className="text-cyan-400">{part}</strong> : part
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              // Regular paragraphs with bold support
              const parts = trimmed.split('**');
              return (
                <p key={index} className="text-gray-300 leading-relaxed">
                  {parts.map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(articlesDatabase)
            .filter(a => a.id !== articleId && a.category === article.category)
            .slice(0, 2)
            .map((related) => (
              <Link key={related.id} to={`/news/${related.id}`}>
                <div className="bg-gray-900/50 rounded-lg border border-gray-700/50 p-4 hover:border-cyan-600/50 transition-all cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{related.image}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{related.title}</h4>
                      <p className="text-gray-400 text-sm">{related.excerpt.substring(0, 80)}...</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </PageTemplate>
  );
};

// Exportar la base de datos para usarla en NewsPage también
export { articlesDatabase };