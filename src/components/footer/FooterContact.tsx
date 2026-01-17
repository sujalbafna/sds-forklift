import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Contact Us
      </h3>
      <ul className="space-y-3">
        <li className="flex items-start text-gray-300">
          <Phone className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
          <span>+91 9225664666</span>
        </li>
        <li className="flex items-start text-gray-300">
          <Mail className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
          <span>sdslabour@gmail.com</span>
        </li>
        <li className="flex items-start text-gray-300">
          <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
          <span>Gate number-424, Opposite Bhagirathi Mangal Office, Dehu Phata Near Nexus Furniture Stay Post Yalwadi, Taluka Village ,District Pune</span>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
