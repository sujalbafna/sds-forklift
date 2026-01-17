import React from 'react';
import { trainingPrograms } from './trainingData';
import { CheckCircle } from 'lucide-react';

const TrainingPrograms = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:bg-blue-600 group">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 group-hover:text-white">Training Programs</h3>
      <div className="space-y-6">
        {trainingPrograms.map((program) => (
          <div key={program.title} className="border-b border-gray-200 pb-6 last:border-0 group-hover:border-blue-400">
            <h4 className="text-lg font-semibold text-blue-600 mb-2 group-hover:text-white">{program.title}</h4>
            <p className="text-gray-600 mb-4 group-hover:text-white/90">{program.description}</p>
            <ul className="space-y-2">
              {program.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:text-white" />
                  <span className="text-gray-700 group-hover:text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPrograms;