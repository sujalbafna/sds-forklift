import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/services/Services';
import About from '@/components/about/About';
import TrainingCenter from '@/components/training/TrainingCenter';
import Clients from '@/components/clients/Clients';
import Reviews from '@/components/reviews/Reviews';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <TrainingCenter />
      <Reviews />
      <Clients />
    </div>
  );
};

export default HomePage;
