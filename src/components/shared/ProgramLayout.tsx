import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ProgramLayoutProps {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

const ProgramLayout: React.FC<ProgramLayoutProps> = ({ title, description, image, children }) => {
  return (
    <div className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-56 sm:h-72 md:h-80">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h1>
                <p className="text-white/90 text-sm md:text-base">{description}</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 md:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgramLayout;
