import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  icon: LucideIcon;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
      <div className="relative w-32 h-32 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-blue-600 font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-center text-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;