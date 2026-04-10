import React from 'react';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
      <div className="relative h-72 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {destination.tagline}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-primary group-hover:text-primary/90 transition-colors">{destination.name}</h3>
          <span className="text-sm text-muted font-medium">{destination.chineseName}</span>
        </div>
        <p className="text-muted mb-4 font-medium">{destination.province}</p>
        <p className="text-secondary mb-6 leading-relaxed line-clamp-3">{destination.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {destination.vibeTags.map((tag, index) => (
            <span key={index} className="bg-gray-50 text-accent px-4 py-1.5 rounded-full text-xs font-medium transition-all group-hover:bg-primary/10 group-hover:text-primary">
              {tag}
            </span>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <span className="block text-xs text-muted mb-1">Best Season</span>
              <span className="font-medium text-sm">{destination.bestSeason}</span>
            </div>
            <div>
              <span className="block text-xs text-muted mb-1">Trip Length</span>
              <span className="font-medium text-sm">{destination.idealTripLength}</span>
            </div>
            <div>
              <span className="block text-xs text-muted mb-1">Crowd Level</span>
              <span className="font-medium text-sm">{destination.crowdLevel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
