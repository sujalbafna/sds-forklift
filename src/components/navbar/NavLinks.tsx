'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HardHat, Users, BookOpen, GraduationCap, Building2, PhoneCall, Menu, X } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`inline-flex items-center px-2 lg:px-3 py-2 text-sm font-medium rounded-md transition-colors
              ${pathname === item.path 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </Link>
        ))}
        <div className="hidden lg:block">
            <GoogleTranslateButton />
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors
                  ${pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            ))}
            <div className="px-3 py-2">
                <GoogleTranslateButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavLinks;
