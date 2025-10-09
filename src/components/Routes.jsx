import React from 'react';
import { useRouter } from '../contexts/RouterContext';
import { HomePage } from '../pages/HomePage';
import { GuidesPage, CharactersPage, ToolsPage, NewsPage } from '../pages/index';
import { PageTemplate } from './common/PageTemplate';
import { ExpCalculator } from '../pages/Calculator';
import { BloodCastle } from '../pages/BloodCastle';

export const Routes = () => {
  const { currentPath } = useRouter();

  switch (currentPath) {
    case '/':
      return <HomePage />;
    case '/guides':
      return <GuidesPage />;
    case '/characters':
      return <CharactersPage />;
    case '/events/blood-castle':
      return <BloodCastle />;
    case '/tools/exp-calculator':
      return <ExpCalculator />;
    case '/tools':
      return <ToolsPage />;
    case '/news':
      return <NewsPage />;
    case '/events':
      return <PageTemplate title="Events"><p className="text-gray-300">Events page coming soon!</p></PageTemplate>;
    case '/items':
      return <PageTemplate title="Items"><p className="text-gray-300">Items database coming soon!</p></PageTemplate>;
    case '/contact':
      return <PageTemplate title="Contact"><p className="text-gray-300">Contact information coming soon!</p></PageTemplate>;
    default:
      return <PageTemplate title="404 - Page Not Found"><p className="text-gray-300">The page you're looking for doesn't exist.</p></PageTemplate>;
  }
};