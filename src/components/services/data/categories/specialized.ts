import { ServiceCategory } from '../../types';
import { Shield, Lightbulb, Target, Users } from 'lucide-react';

export const specialized: ServiceCategory = {
  title: "Specialized Training",
  services: [
    {
      title: "BBS Training",
      description: "Behavior-Based Safety training for workplace safety culture",
      icon: Shield
    },
    {
      title: "Kaizen Training",
      description: "Continuous improvement methodology and implementation",
      icon: Lightbulb
    },
    {
      title: "Pokayoke Training",
      description: "Error-proofing techniques and implementation",
      icon: Target
    },
    {
      title: "POSH Training",
      description: "Prevention of Sexual Harassment workplace training",
      icon: Users
    }
  ]
};