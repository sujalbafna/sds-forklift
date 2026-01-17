import React from 'react';
import { ServiceCategory as ServiceCategoryType } from './types';
import ServiceCard from './ServiceCard';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category }) => {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">{category.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;