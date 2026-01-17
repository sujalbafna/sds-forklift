import React from 'react';
import { Clock, Target, Award, CheckCircle } from 'lucide-react';
import ProgramLayout from '../../components/shared/ProgramLayout';
import ProgramSection from '../../components/shared/ProgramSection';

const ReachTruckTraining = () => {
  return (
    <ProgramLayout
      title="Reach Truck Training"
      description="Advanced training for reach truck operations and safety"
      image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Advanced training program focused on reach truck operations in modern warehouse environments.
            Learn precise maneuvering, load handling, and advanced safety techniques.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              3-week specialized program
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              45 hours of practical training
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Multiple batch options
            </li>
          </ul>
        </ProgramSection>

      
      </div>
    </ProgramLayout>
  );
};

export default ReachTruckTraining;