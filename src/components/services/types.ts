import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  subServices?: string[];
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}