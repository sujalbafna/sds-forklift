import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '../../components/shared/ProgramLayout';
import ProgramSection from '../../components/shared/ProgramSection';
import { ProgramList } from '../../components/programs/ProgramList';

const BBSTraining = () => {
  return (
    <ProgramLayout
      title="Behavior-Based Safety Training"
      description="Advanced safety culture and behavioral modification program"
      image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Learn to implement behavior-based safety principles to create a sustainable 
            safety culture and reduce workplace incidents through behavioral modification.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "2-week specialized program",
            "30 hours of training",
            "Interactive workshops"
          ]} />
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default BBSTraining;