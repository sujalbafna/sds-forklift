import React from 'react';
import { Client } from './types';
import { Building2 } from 'lucide-react';

interface ClientGridProps {
  clients: Client[];
}

const ClientGrid: React.FC<ClientGridProps> = ({ clients }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
      {clients.map((client) => (
        <div
          key={client.id}
          className="group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <img
              src={client.logo}
              alt={client.name}
              className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                <p className="text-white text-xs md:text-sm font-medium">{client.description}</p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-sm font-medium text-gray-900">{client.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientGrid;
