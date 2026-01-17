import React from 'react';
import { Quote } from 'lucide-react';
import { Review } from './types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-105">
      <Quote className="w-8 h-8 text-blue-200 mb-4" />
      <p className="text-gray-600 mb-6 flex-grow">{review.review}</p>
      <div className="flex items-center">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
