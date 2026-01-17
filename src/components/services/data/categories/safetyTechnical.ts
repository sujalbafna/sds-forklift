import { ServiceCategory } from '../../types';
import { Shield, Truck, Car, HardHat, Wrench } from 'lucide-react';

export const safetyTechnical: ServiceCategory = {
  title: "Safety & Technical Training",
  services: [
    {
      title: "Forklift Safety Training",
      description: "Comprehensive safety protocols for forklift operations",
      icon: Shield
    },
    {
      title: "Reach Truck Training",
      description: "Technical training for reach truck operations",
      icon: Truck
    },
    {
      title: "Road Safety Training",
      description: "Essential road safety practices and regulations",
      icon: Car
    },
    {
      title: "Safety Training",
      description: "General workplace safety protocols and procedures",
      icon: HardHat
    },
    {
      title: "Auto Technician Training",
      description: "Technical training for automotive maintenance and repair",
      icon: Wrench
    }
  ]
};