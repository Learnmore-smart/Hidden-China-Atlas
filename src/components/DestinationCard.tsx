import React from 'react';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-56 overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{destination.name}</h3>
          <span className="text-sm text-gray-500">{destination.chineseName}</span>
        </div>
        <p className="text-gray-500 mb-3">{destination.province}</p>
        <p className="text-gray-700 mb-4">{destination.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.vibeTags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Best Season:</span>
            <span className="font-medium">{destination.bestSeason}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Ideal Trip Length:</span>
            <span className="font-medium">{destination.idealTripLength}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Crowd Level:</span>
            <span className="font-medium">{destination.crowdLevel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
