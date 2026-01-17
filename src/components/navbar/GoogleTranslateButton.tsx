import React from 'react';
import { Globe } from 'lucide-react';

const GoogleTranslateButton = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
        <Globe className="w-5 h-5" />
        <div id="google_element" />
      </div>
    </div>
  );
};

export default GoogleTranslateButton;