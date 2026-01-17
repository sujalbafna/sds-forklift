import React from 'react';
import { Clock, Target, Award, CheckCircle } from 'lucide-react';
import ProgramLayout from '../../components/shared/ProgramLayout';
import ProgramSection from '../../components/shared/ProgramSection';

const RoadSafety = () => {
  return (
    <ProgramLayout
      title="Road Safety Training"
      description="Essential road safety practices and regulations for industrial vehicle operators"
      image="https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Comprehensive road safety training program designed for industrial vehicle operators.
            Learn traffic regulations, defensive driving techniques, and accident prevention strategies.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              1-week intensive program
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              20 hours of training
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Convenient scheduling
            </li>
          </ul>
        </ProgramSection>

        
      </div>
    </ProgramLayout>
  );
};

export default RoadSafety;