// config/routeConfig.js
import { HomePage } from '../components/home/HomePage';
import { ExpCalculator } from '../components/tools/calculator/Calculator';
import { toolsPages } from '../components/tools/toolsPage';
import { NewsPage } from '../components/news/NewsPage';
import { NewsDetailPage } from '../components/news/NewsDetailPage';

// Route groups for better organization
export const routes = {
  // ===================
  // MAIN PAGES
  // ===================
  main: [
    {
      path: '/',
      component: HomePage,
      title: 'Home',
      description: 'MU Online main page'
    }
  ],

  // ===================
  // NEWS SECTION
  // ===================
  news: [
    {
      path: '/news',
      component: NewsPage,
      title: 'News',
      description: 'Latest MU Online news and updates'
    },
    {
      path: '/news/:id',
      component: NewsDetailPage,
      title: 'News Article',
      description: 'Read full article',
      dynamic: true
    }
  ],

  // ===================
  // TOOLS SECTION
  // ===================
  tools: [
    {
      path: '/tools',
      component: toolsPages,
      title: 'EXP Calculator',
      description: 'Calculate experience needed'
    },
    {
      path: '/tools/exp-calculator',
      component: ExpCalculator,
      title: 'EXP Calculator',
      description: 'Calculate experience needed'
    },
        {
      path: '/tools/build-simulator',
      title: 'Builder Mu Online',
      description: 'Calculate experience needed',
      comingSoon: true
    },
  ],

  // ===================
  // ITEMS SECTION
  // ===================
  items: [
    {
      path: '/items',
      title: 'Items',
      description: 'MU Online items database',
      comingSoon: true
    },
    {
      path: '/items/weapons',
      title: 'Weapons',
      comingSoon: true
    },
    {
      path: '/items/armor',
      title: 'Armor',
      comingSoon: true
    },
    {
      path: '/items/jewels',
      title: 'Jewels',
      comingSoon: true
    },
    {
      path: '/items/wings',
      title: 'Wings',
      comingSoon: true
    },
    {
      path: '/items/sets',
      title: 'Item Sets',
      comingSoon: true
    },
    {
      path: '/items/accessories',
      title: 'Accessories',
      comingSoon: true
    }
  ],

  // ===================
  // GAME SYSTEM
  // ===================
  gameSystem: [
    {
      path: '/classes',
      title: 'Classes',
      comingSoon: true
    },
    {
      path: '/stats',
      title: 'Stats System',
      comingSoon: true
    },
    {
      path: '/levels',
      title: 'Level System',
      comingSoon: true
    },
    {
      path: '/pvp',
      title: 'PvP System',
      comingSoon: true
    }
  ],

  // ===================
  // MAPS SECTION
  // ===================
  maps: [
    {
      path: '/maps',
      title: 'Maps & Spots',
      description: 'MU Online world maps',
      comingSoon: true
    }
  ],

  // ===================
  // OTHER PAGES
  // ===================
  other: [
    {
      path: '/contact',
      title: 'Contact',
      comingSoon: true
    }
  ]
};

// Flatten all routes into a single array
export const getAllRoutes = () => {
  return Object.values(routes).flat();
};

// Get route by path
export const getRouteByPath = (path) => {
  const allRoutes = getAllRoutes();

  // Exact match
  const exactMatch = allRoutes.find(route => route.path === path);
  if (exactMatch) return exactMatch;

  // Dynamic route match
  const dynamicRoute = allRoutes.find(route => {
    if (route.dynamic && route.path.includes(':')) {
      const pattern = route.path.replace(/:[^/]+/g, '([^/]+)');
      const regex = new RegExp(`^${pattern}$`);
      return regex.test(path);
    }
    return false;
  });

  return dynamicRoute || null;
};

// Get routes by section
export const getRoutesBySection = (section) => {
  return routes[section] || [];
};

// Export default
export default routes;