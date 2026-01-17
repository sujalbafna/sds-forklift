'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HardHat, Users, BookOpen, GraduationCap, Building2, PhoneCall } from 'lucide-react';
import GoogleTranslateButton from './GoogleTranslateButton';

export const navItems = [
  { name: 'Home', icon: <HardHat className="w-5 h-5" />, path: '/' },
  { name: 'About Us', icon: <Users className="w-5 h-5" />, path: '/about' },
  { name: 'Our Services', icon: <BookOpen className="w-5 h-5" />, path: '/services' },
  { name: 'Training Center', icon: <GraduationCap className="w-5 h-5" />, path: '/training' },
  { name: 'Clients', icon: <Building2 className="w-5 h-5" />, path: '/clients' },
  { name: 'Contact', icon: <PhoneCall className="w-5 h-5" />, path: '/contact' }
];

const NavLinks = () => {
  const pathname = usePathname();
  
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
              ${pathname === item.path 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </Link>
        ))}
      </div>
      <GoogleTranslateButton />
    </div>
  );
};

export default NavLinks;
