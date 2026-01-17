import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <img 
        src="https://i.postimg.cc/dVPjdHHg/logo-for-SDS-Forklift-Training.jpg" 
        alt="SDS Forklift Training" 
        className="h-12 w-auto"
      />
      <span className="ml-2 text-xl font-bold text-gray-800">SDS Forklift Training</span>
    </Link>
  );
};

export default Logo;
