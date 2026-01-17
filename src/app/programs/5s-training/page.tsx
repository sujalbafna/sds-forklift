import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '@/components/shared/ProgramLayout';
import ProgramSection from '@/components/shared/ProgramSection';
import { ProgramList } from '@/components/programs/ProgramList';

const FiveS = () => {
  return (
    <ProgramLayout
      title="5S Training Program"
      description="Workplace organization and efficiency improvement methodology"
      image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Learn the 5S methodology (Sort, Set in Order, Shine, Standardize, Sustain) 
            for creating and maintaining an organized, efficient, and productive workplace.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "1-week intensive program",
            "15 hours of training",
            "Practical implementation workshops"
          ]} />
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default FiveS;
