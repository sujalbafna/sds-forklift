import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '@/components/shared/ProgramLayout';
import ProgramSection from '@/components/shared/ProgramSection';
import { ProgramList } from '@/components/programs/ProgramList';

const QualityTraining = () => {
  return (
    <ProgramLayout
      title="Quality Management Training"
      description="Comprehensive quality control and management training program"
      image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Master quality management principles and practices essential for maintaining 
            high standards in manufacturing and industrial operations.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "3-week comprehensive program",
            "36 hours of training",
            "Hands-on quality control workshops"
          ]} />
        </ProgramSection>

       
      </div>
    </ProgramLayout>
  );
};

export default QualityTraining;
