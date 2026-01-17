import React from 'react';
import { Clock, Target, Award, CheckCircle } from 'lucide-react';
import ProgramLayout from '@/components/shared/ProgramLayout';
import ProgramSection from '@/components/shared/ProgramSection';

const ForkliftSafety = () => {
  return (
    <ProgramLayout
      title="Forklift Safety Training"
      description="Comprehensive safety protocols and best practices for forklift operations"
      image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Master essential safety protocols and best practices for forklift operations. This program focuses
            on accident prevention, risk assessment, and creating a safety-first mindset in material handling.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              2-week intensive program
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              30 hours of training
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Flexible scheduling
            </li>
          </ul>
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default ForkliftSafety;
