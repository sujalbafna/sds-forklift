import React from 'react';
import MissionVision from './MissionVision';

const About = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About SDS Forklift Training</h2>
          <div className="mt-8">
            <MissionVision />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
