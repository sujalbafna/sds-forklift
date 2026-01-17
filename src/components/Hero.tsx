import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="w-[1200px] mx-auto px-4">
        <div className="relative z-10 pb-8 bg-white">
          <main className="mt-10">
            <div className="flex items-center justify-between">
              <div className="max-w-xl"><br/><br/>
                <h1 className="text-6xl tracking-tight font-extrabold text-gray-900">
                  <span className="block">Professional Forklift</span>
                  <span className="block text-blue-600">Training & Certification</span>
                </h1>
                <p className="mt-5 text-xl text-gray-500">
                  Elevate your career with industry-leading forklift operation training. NSDC certification programs designed for safety and success.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-full blur-lg opacity-75 animate-pulse"></div><br/><br/><br/>
                <img 
                  src="https://i.postimg.cc/dVPjdHHg/logo-for-SDS-Forklift-Training.jpg"
                  alt="SDS Forklift Training"
                  className="relative w-[400px] h-[300px] object-contain rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg"
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">NSDC Certified</h3>
                  <p className="text-sm text-gray-500">Fully compliant training</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Expert Trainers</h3>
                  <p className="text-sm text-gray-500">Industry professionals</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Flexible Schedule</h3>
                  <p className="text-sm text-gray-500">Convenient training times</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;