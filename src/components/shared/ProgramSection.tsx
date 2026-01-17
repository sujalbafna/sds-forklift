import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgramSectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ title, icon: Icon, children }) => {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default ProgramSection;