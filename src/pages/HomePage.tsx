import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/services/Services';
import About from '../components/about/About';
import TrainingCenter from '../components/training/TrainingCenter';
import Clients from '../components/clients/Clients';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <TrainingCenter />
      <Clients />
    </div>
  );
};

export default HomePage;