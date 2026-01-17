import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '@/components/shared/ProgramLayout';
import ProgramSection from '@/components/shared/ProgramSection';
import { ProgramList } from '@/components/programs/ProgramList';

const SafetyTraining = () => {
  return (
    <ProgramLayout
      title="Safety Training Program"
      description="Comprehensive workplace safety training and certification"
      image="https://i.postimg.cc/4y42t8Wz/Train-the-trainer-safety-courses-Safetyfirsttraining-ca.jpg"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Comprehensive workplace safety program covering risk assessment, emergency procedures,
            and safety protocols across various industrial environments.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "4-week comprehensive program",
            "40 hours of practical training",
            "Flexible batch timings"
          ]} />
        </ProgramSection>

        
      </div>
    </ProgramLayout>
  );
};

export default SafetyTraining;
