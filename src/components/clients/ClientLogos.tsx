import React from 'react';
import ClientCard from './ClientCard';
import { companies } from './data/companies';

const ClientLogos = () => {
  return (
    <div className="py-8 sm:py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {companies.map((company) => (
          <ClientCard
            key={company.name}
            name={company.name}
            logo={company.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;