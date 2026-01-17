import React from 'react';
import { Clock, Target, Award, CheckCircle } from 'lucide-react';
import ProgramLayout from '../../components/shared/ProgramLayout';
import ProgramSection from '../../components/shared/ProgramSection';

const WarehouseOperations = () => {
  return (
    <ProgramLayout
      title="Warehouse Operations Training"
      description="Complete training for various warehouse roles including picking, packing, and inventory management"
      image="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Comprehensive training in all aspects of warehouse operations. Learn inventory management,
            picking, packing, and modern warehouse management systems through practical, hands-on experience.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              8-week comprehensive program
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              80 hours of practical training
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Multiple batch timings
            </li>
          </ul>
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default WarehouseOperations;