import React from 'react';
import ClientGrid from './ClientGrid';
import { clients } from './data/clientsData';

const Clients = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Partnering with top companies to create safer workplaces
          </p>
        </div>
        <ClientGrid clients={clients} />
      </div>
    </section>
  );
};

export default Clients;
