import React from 'react';
import { Building2 } from 'lucide-react';

interface ClientCardProps {
  name: string;
  logo: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, logo }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow h-[120px] sm:h-[160px]">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-4">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
          <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
      </div>
      <span className="text-gray-800 font-medium text-center text-xs sm:text-sm truncate w-full px-2">
        {name}
      </span>
    </div>
  );
};

export default ClientCard;