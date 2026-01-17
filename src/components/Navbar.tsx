import React from 'react';
import Logo from './shared/Logo';
import NavLinks from './navbar/NavLinks';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="w-[1200px] mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;