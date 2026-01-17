import React from 'react';
import { Globe } from 'lucide-react';

const GoogleTranslateButton = () => {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5" />
      <div id="google_element" />
    </div>
  );
};

export default GoogleTranslateButton;
