import React from 'react';
import { Clock, Target, Award, CheckCircle } from 'lucide-react';
import ProgramLayout from '../../components/shared/ProgramLayout';
import ProgramSection from '../../components/shared/ProgramSection';

const WarehouseSupervisor = () => {
  return (
    <ProgramLayout
      title="Warehouse Supervision Training"
      description="Leadership training for warehouse supervisors and team leaders"
      image="https://i.postimg.cc/tRtHxw4V/download.jpg"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Advanced training program designed for aspiring warehouse supervisors. Learn leadership skills,
            team management, safety protocols, and efficient warehouse operations management.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              12-week advanced program
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              100 hours of training
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

export default WarehouseSupervisor;