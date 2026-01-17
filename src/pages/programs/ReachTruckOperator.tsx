import React from 'react';
import { Clock, Target, Award, CheckCircle } from 'lucide-react';
import ProgramLayout from '../../components/shared/ProgramLayout';
import ProgramSection from '../../components/shared/ProgramSection';

const ReachTruckOperator = () => {
  return (
    <ProgramLayout
      title="Reach Truck Operator Training"
      description="Professional certification for reach truck operations in warehouse environments"
      image="https://i.postimg.cc/LsNHLWTT/digger-1867268-1280.jpg"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Our comprehensive reach truck operator training program equips participants with the skills
            and knowledge needed for safe and efficient warehouse operations. This NSDC-certified course
            combines theoretical knowledge with extensive practical training.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              4-week intensive program
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              40 hours of practical training
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Flexible batch timings
            </li>
          </ul>
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default ReachTruckOperator;