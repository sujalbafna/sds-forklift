import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '../../components/shared/ProgramLayout';
import ProgramSection from '../../components/shared/ProgramSection';
import { ProgramList } from '../../components/programs/ProgramList';

const KaizenTraining = () => {
  return (
    <ProgramLayout
      title="Kaizen Training Program"
      description="Continuous improvement methodology and implementation"
      image="https://i.postimg.cc/gkTtXH8Z/Kaizenians-at-the-training-program-for-soft-skill-development-Be-it-technical-skills-or-soft-skills.jpg"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Learn the principles of Kaizen methodology for continuous improvement in 
            workplace processes, efficiency, and productivity enhancement.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "2-week intensive program",
            "24 hours of training",
            "Practical implementation workshops"
          ]} />
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default KaizenTraining;