import React from 'react';

// Page imports
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import TrainingPage from '../pages/TrainingPage';
import ClientsPage from '../pages/ClientsPage';
import ContactPage from '../pages/ContactPage';

// Program page imports
import { programRoutes } from './programRoutes';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/training', element: <TrainingPage /> },
  { path: '/clients', element: <ClientsPage /> },
  { path: '/contact', element: <ContactPage /> },
  ...programRoutes
];