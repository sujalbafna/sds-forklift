import React from 'react';
import { Clock, Users, Award } from 'lucide-react';

const CertificationInfo = () => {
  const certificationDetails = [
    {
      icon: Clock,
      title: "Duration",
      info: "1 weeks depending on program"
    },
    {
      icon: Users,
      title: "Batch Size",
      info: "Maximum 10 trainees per batch"
    },
    {
      icon: Award,
      title: "Certification",
      info: "NSDC certified with global recognition"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-[300px] transition-all duration-300 hover:shadow-lg hover:bg-blue-600 group">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 truncate group-hover:text-white">Certification Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationDetails.map((detail) => {
          const Icon = detail.icon;
          return (
            <div key={detail.title} className="flex items-start space-x-3">
              <Icon className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:text-white" />
              <div className="min-w-0">
                <h4 className="font-semibold text-gray-900 text-base truncate group-hover:text-white">{detail.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-2 group-hover:text-white/90">{detail.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationInfo;