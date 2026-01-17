import { ServiceCategory } from '../../types';
import { Users, Target, Award, Wrench, Sparkles } from 'lucide-react';

export const softSkills: ServiceCategory = {
  title: "Soft Skills & Process Improvement",
  services: [
    {
      title: "Soft Skill Training",
      description: "Communication, leadership, and interpersonal skills development",
      icon: Users
    },
    {
      title: "5S Training",
      description: "Workplace organization and efficiency improvement",
      icon: Target
    },
    {
      title: "Quality Training",
      description: "Quality management and control procedures",
      icon: Award
    },
    {
      title: "Welding Training",
      description: "Professional welding certification programs",
      subServices: [
        "Spot Welding", "Mig Welding"
      ],
      icon: Sparkles
    },
    {
      title: "Press Operation Training",
      description: "Safe and efficient press machine operation",
      icon: Wrench
    }
  ]
};