import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceCategory } from './types';
import { logisticsMHE } from './data/categories/logisticsMHE';
import { safetyTechnical } from './data/categories/safetyTechnical';
import { softSkills } from './data/categories/softSkills';
import { specialized } from './data/categories/specialized';

const Services = () => {
  const getTopServices = (category: ServiceCategory) => {
    return category.services.slice(0, 4);
  };

  const serviceCategories = [
    { title: 'Logistics & MHE', services: getTopServices(logisticsMHE) },
    { title: 'Safety & Technical', services: getTopServices(safetyTechnical) },
    { title: 'Soft Skills', services: getTopServices(softSkills) },
    { title: 'Specialized Training', services: getTopServices(specialized) }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Training Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Comprehensive training programs designed for industry professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {category.services.map((service) => (
                  <div key={service.title} className="h-full min-h-[280px]">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
