import React from 'react';
import { Clock, Target, Award, CheckCircle } from 'lucide-react';
import ProgramLayout from '@/components/shared/ProgramLayout';
import ProgramSection from '@/components/shared/ProgramSection';

const ForkliftOperator = () => {
  return (
    <ProgramLayout
      title="Forklift Operator Training"
      description="Comprehensive forklift operation and safety certification program"
      image="https://i.postimg.cc/d0kYZ0hq/Online-Forklift-Training-in-California-Superior-Forklift-Training.jpg"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Master the skills needed to operate forklifts safely and efficiently. Our NSDC-certified
            program combines classroom instruction with hands-on training to prepare you for a successful
            career in material handling.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              6-week comprehensive program
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              60 hours of practical training
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Weekend batches available
            </li>
          </ul>
        </ProgramSection>

      
      </div>
    </ProgramLayout>
  );
};

export default ForkliftOperator;
