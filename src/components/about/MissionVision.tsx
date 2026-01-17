import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

interface VisionCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const VisionCard: React.FC<VisionCardProps> = ({ title, description, icon: Icon }) => (
  <div className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-400/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    
    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 group-hover:bg-white transition-colors duration-500">
        <Icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transform transition-transform duration-500" />
      </div>
      
      <h3 className="text-xl font-semibold text-blue-600 mb-3 group-hover:text-white transition-colors duration-500">
        {title}
      </h3>
      
      <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500">
        {description}
      </p>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 bg-blue-100/20 rounded-full group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-700" />
    <div className="absolute bottom-0 left-0 w-16 h-16 transform -translate-x-8 translate-y-8 bg-blue-100/20 rounded-full group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
  </div>
);

const MissionVision = () => {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      <VisionCard
        title="Our Mission"
        description="To create a safer workplace environment through comprehensive training and certification programs, reducing accidents and saving lives across India."
        icon={Target}
      />
      <VisionCard
        title="Our Vision"
        description="To become India's leading safety training institute, setting industry standards and fostering a culture of safety-first operations."
        icon={Lightbulb}
      />
    </div>
  );
};

export default MissionVision;