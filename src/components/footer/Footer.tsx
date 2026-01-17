import React from 'react';
import { HardHat } from 'lucide-react';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';
import { companyLinks, servicesLinks } from './footerData';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <HardHat className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">SDS Forklift Training</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading the way in forklift operator training and certification. 
              Creating safer workplaces across India through professional education 
              and comprehensive safety programs.
            </p>
            <FooterSocial />
          </div>

          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Services" links={servicesLinks} />
          <FooterContact />
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