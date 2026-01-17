import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '@/components/shared/ProgramLayout';
import ProgramSection from '@/components/shared/ProgramSection';
import { ProgramList } from '@/components/programs/ProgramList';

const PokayokeTraining = () => {
  return (
    <ProgramLayout
      title="Poka-yoke Training Program"
      description="Error-proofing techniques and implementation strategies"
      image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Master the principles of Poka-yoke (mistake-proofing) to prevent errors 
            in manufacturing and operational processes through systematic approaches.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "1-week specialized program",
            "15 hours of training",
            "Hands-on implementation exercises"
          ]} />
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default PokayokeTraining;
