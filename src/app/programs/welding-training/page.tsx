import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '@/components/shared/ProgramLayout';
import ProgramSection from '@/components/shared/ProgramSection';
import { ProgramList } from '@/components/programs/ProgramList';

const WeldingTraining = () => {
  return (
    <ProgramLayout
      title="Professional Welding Training"
      description="Comprehensive welding certification program for industrial applications"
      image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Professional welding program covering MIG and spot welding techniques, safety 
            protocols, and quality standards for industrial applications.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "6-week intensive program",
            "80 hours of practical training",
            "Hands-on welding practice"
          ]} />
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default WeldingTraining;
