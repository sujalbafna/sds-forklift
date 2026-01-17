import React from 'react';
import { Clock, Target, Award } from 'lucide-react';
import ProgramLayout from '@/components/shared/ProgramLayout';
import ProgramSection from '@/components/shared/ProgramSection';
import { ProgramList } from '@/components/programs/ProgramList';

const POSHTraining = () => {
  return (
    <ProgramLayout
      title="POSH Training Program"
      description="Prevention of Sexual Harassment workplace training"
      image="https://i.postimg.cc/Kz0DXm5M/Use-These-Five-Top-Rules-To-Become-The-Boss-Your-Employees-Dream-About.jpg"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramSection title="Program Overview" icon={Target}>
          <p className="text-gray-600">
            Comprehensive training on preventing workplace harassment, creating an 
            inclusive environment, and implementing effective reporting mechanisms.
          </p>
        </ProgramSection>

        <ProgramSection title="Duration & Schedule" icon={Clock}>
          <ProgramList items={[
            "1-week essential program",
            "12 hours of training",
            "Interactive case studies"
          ]} />
        </ProgramSection>

        
      </div>
    </ProgramLayout>
  );
};

export default POSHTraining;
