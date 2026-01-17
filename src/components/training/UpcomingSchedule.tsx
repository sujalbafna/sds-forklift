import React from 'react';
import { Calendar } from 'lucide-react';
import { upcomingSchedule } from './trainingData';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Schedule</h3>
      <div className="space-y-4">
        {upcomingSchedule.map((session) => (
          <div key={session.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">{session.course}</h4>
              <p className="text-sm text-gray-600">Date: {session.date}</p>
              <p className="text-sm text-gray-600">Duration: {session.duration}</p>
              <p className="text-sm text-gray-600">Seats: {session.seatsLeft} left</p>
              <button className="mt-2 text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;