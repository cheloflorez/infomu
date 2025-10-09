import React from 'react';
import { Router } from './contexts/RouterContext';
import { Layout } from './components/layout/Layout';
import { Routes } from './components/Routes';

const InfoMUApp = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

export default InfoMUApp;