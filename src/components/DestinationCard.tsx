import React from 'react';
import Image from 'next/image';
import { Destination } from '@/data/destinations';
import { useTranslation } from '@/lib/languageContext';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { t } = useTranslation();
  
  // Try to get translated destination data if available, fallback to default
  const destName = t(`destinations.${destination.id}.name`);
  const destProvince = t(`destinations.${destination.id}.province`);
  
  // Use destination image from local public folder
  const imageUrl = destination.imageUrl;

  return (
    <div className="group cursor-pointer flex flex-col gap-6">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-dark/5">
        <Image 
          src={imageUrl} 
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
      </div>
      
      <div className="flex flex-col gap-3 px-2">
        <div className="flex justify-between items-end gap-4">
          <h3 className="text-2xl font-serif leading-none">{destName}</h3>
          <span className="text-xs uppercase tracking-widest text-neutral-muted font-medium shrink-0">
            {destProvince}
          </span>
        </div>
        
        <p className="text-neutral-muted font-light leading-relaxed line-clamp-2">
          {t(`destinations.${destination.id}.description`)}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {(t(`destinations.${destination.id}.vibeTags`) as unknown as string[]).map((tag, index) => (
            <span key={index} className="text-xs uppercase tracking-wider text-primary/70 border border-primary/10 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-4 text-xs tracking-widest uppercase text-neutral-muted pt-4 border-t border-primary/10">
          <span>{t(`destinations.${destination.id}.bestSeason`)}</span>
          <span className="w-1 h-1 rounded-full bg-accent/50" />
          <span>{t(`destinations.${destination.id}.idealTripLength`)}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
