import React from 'react';
import Image from 'next/image';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 transform hover:-translate-y-2 group">
      <div className="h-64 overflow-hidden relative">
        <Image 
          src={destination.imageUrl} 
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
          {destination.province}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">{destination.name}</h3>
          <span className="text-sm text-gray-500 font-medium">{destination.chineseName}</span>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">{destination.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {destination.vibeTags.map((tag, index) => (
            <span key={index} className="bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-full border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-6">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-gray-500 mb-1">Best Season</p>
              <p className="font-medium text-gray-900">{destination.bestSeason}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 mb-1">Trip Length</p>
              <p className="font-medium text-gray-900">{destination.idealTripLength}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 mb-1">Crowd Level</p>
              <p className="font-medium text-gray-900">{destination.crowdLevel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
