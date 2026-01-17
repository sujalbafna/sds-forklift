import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { id: 'facebook', icon: Facebook, href: '/facebook', label: 'Facebook' },
  { id: 'twitter', icon: Twitter, href: '/twitter', label: 'Twitter' },
  { id: 'linkedin', icon: Linkedin, href: '/linkedin', label: 'LinkedIn' },
  { id: 'instagram', icon: Instagram, href: '/instagram', label: 'Instagram' }
];

const FooterSocial = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ id, icon: Icon, href, label }) => (
        <a
          key={id}
          href={href}
          className="text-gray-400 hover:text-gray-300"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;