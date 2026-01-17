import React from 'react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Warehouse Safety Transformation',
    company: 'Amazon India',
    description: 'Reduced workplace incidents by 75% through comprehensive forklift training program.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Safety Culture Implementation',
    company: 'Tata Steel',
    description: 'Trained 500+ operators and established new safety protocols across 5 facilities.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  },
];

const CaseStudies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      {caseStudies.map((study) => (
        <div
          key={study.title}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
            <p className="text-blue-600 font-medium mb-3">{study.company}</p>
            <p className="text-gray-600 mb-4">{study.description}</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
              Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudies;