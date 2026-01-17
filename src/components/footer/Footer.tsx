import React from 'react';
import { HardHat } from 'lucide-react';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';
import { companyLinks, servicesLinks } from './footerData';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center mb-4 justify-center sm:justify-start">
              <HardHat className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">SDS Forklift Training</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading the way in forklift operator training and certification. 
              Creating safer workplaces across India through professional education 
              and comprehensive safety programs.
            </p>
            <div className="flex justify-center sm:justify-start">
              <FooterSocial />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <FooterLinks title="Company" links={companyLinks} />
            <div className="mt-8">
              <FooterLinks title="Services" links={servicesLinks} />
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <FooterContact />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} SDS Forklift Training Center. All rights reserved.
            Developed & Hosted By Sujal Bafna ( bafna3249@gmail.com )
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
