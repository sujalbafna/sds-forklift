import React from 'react';
import TrainingPrograms from './TrainingPrograms';
import CertificationInfo from './CertificationInfo';

const TrainingCenter = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Forklift Training Center
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Professional certification programs designed for industry excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TrainingPrograms />
          <CertificationInfo />
        </div>
      </div>
    </section>
  );
}

export default TrainingCenter;
