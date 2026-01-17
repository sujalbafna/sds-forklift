import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getServiceRoute } from './utils/routeUtils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  const route = getServiceRoute(title);

  return (
    <div className="h-full flex flex-col bg-gray-50 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-lg group">
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3 transition-colors group-hover:bg-white mx-auto">
          <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center group-hover:text-white">{title}</h3>
        <p className="text-gray-600 text-sm text-center mb-4 group-hover:text-white/90">{description}</p>
      </div>
      {route && (
        <div className="p-4 pt-0 mt-auto">
          <Link
            href={route}
            className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium transition-colors hover:bg-blue-700 group-hover:bg-white group-hover:text-blue-600 group-hover:hover:bg-gray-100"
          >
            Know More <ArrowRight className="w-4 h-4 ml-1 inline-block" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
