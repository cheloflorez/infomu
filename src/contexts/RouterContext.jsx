import React, { useState, createContext, useContext } from 'react';

const RouterContext = createContext();

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
};

export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => {
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Link = ({ to, children, className = "", ...props }) => {
  const { navigate, currentPath } = useRouter();
  
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  const isActive = currentPath === to;
  
  return (
    <a 
      href={to} 
      onClick={handleClick} 
      className={`${className} ${isActive ? 'text-cyan-400' : ''}`}
      {...props}
    >
      {children}
    </a>
  );
};