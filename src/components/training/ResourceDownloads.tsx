import React from 'react';
import { FileText, Download } from 'lucide-react';
import { resources } from './trainingData';

const ResourceDownloads = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Training Resources</h3>
      <div className="space-y-4">
        {resources.map((resource) => (
          <div key={resource.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                <p className="text-sm text-gray-600">{resource.size}</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceDownloads;