import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '../../components/shared/ProgramLayout';
import ProgramSection from '../../components/shared/ProgramSection';
import { ProgramList } from '../../components/programs/ProgramList';

const SoftSkills = () => {
  return (
    <ProgramLayout
      title="Soft Skills Training"
      description="Essential professional development and communication skills"
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Develop essential workplace communication, leadership, and interpersonal skills
            needed for career growth and professional success.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "2-week intensive program",
            "24 hours of training",
            "Weekend batches available"
          ]} />
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default SoftSkills;