// Routes.jsx - Versión Simplificada y Limpia
import React from 'react';
import { useRouter } from '../contexts/RouterContext';
import { PageTemplate } from './common/PageTemplate';
import { getRouteByPath } from '../config/routeConfig';

// ===========================================
// PLACEHOLDER COMPONENTS
// ===========================================

const ComingSoonPage = ({ title, description }) => (
  <PageTemplate title={title}>
    <div className="text-center py-12">
      <div className="text-6xl mb-4 animate-bounce">🚧</div>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400 mb-6">
        {description || 'This page is under construction. Check back soon!'}
      </p>
      <div className="inline-flex items-center gap-2 bg-cyan-600/20 border border-cyan-600/50 rounded-lg px-4 py-2 text-cyan-400">
        <span className="animate-pulse">⚙️</span>
        <span className="font-medium">Coming Soon</span>
      </div>
      
      {/* Progress indicator */}
      <div className="mt-8 max-w-md mx-auto">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Development Progress</span>
          <span>25%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>
    </div>
  </PageTemplate>
);

const NotFoundPage = () => (
  <PageTemplate title="404 - Page Not Found">
    <div className="text-center py-12">
      <div className="text-8xl mb-4">🔍</div>
      <h2 className="text-3xl font-bold text-white mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved to another location.
      </p>
      
      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
        <a href="/" className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 hover:border-cyan-600/50 transition-colors">
          <div className="text-2xl mb-2">🏠</div>
          <div className="text-sm text-gray-300">Home</div>
        </a>
        <a href="/news" className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 hover:border-cyan-600/50 transition-colors">
          <div className="text-2xl mb-2">📰</div>
          <div className="text-sm text-gray-300">News</div>
        </a>
        <a href="/guides" className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 hover:border-cyan-600/50 transition-colors">
          <div className="text-2xl mb-2">📚</div>
          <div className="text-sm text-gray-300">Guides</div>
        </a>
        <a href="/tools" className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 hover:border-cyan-600/50 transition-colors">
          <div className="text-2xl mb-2">🔧</div>
          <div className="text-sm text-gray-300">Tools</div>
        </a>
      </div>
      
      <a 
        href="/"
        className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20"
      >
        Back to Home
      </a>
    </div>
  </PageTemplate>
);

// ===========================================
// MAIN ROUTES COMPONENT
// ===========================================

export const Routes = () => {
  const { currentPath } = useRouter();
  
  // Get route configuration
  const route = getRouteByPath(currentPath);
  
  // If no route found, show 404
  if (!route) {
    return <NotFoundPage />;
  }
  
  // If route has component, render it
  if (route.component) {
    const Component = route.component;
    return <Component />;
  }
  
  // If route is marked as coming soon, show placeholder
  if (route.comingSoon) {
    return <ComingSoonPage title={route.title} description={route.description} />;
  }
  
  // Fallback to 404
  return <NotFoundPage />;
};

// ===========================================
// UTILITY EXPORTS
// ===========================================
