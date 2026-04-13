"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { destinations, Destination } from '@/data/destinations';
import { useTranslation } from '@/lib/languageContext';

interface TripPlan {
  destination: Destination;
  reason: string;
  suggestedSeason: string;
  recommendedDuration: string;
  itinerary: string[];
}

const SmartTripPlanner: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    departureCity: '',
    numberOfDays: '',
    interests: '',
    avoidCrowds: false
  });
  const [tripPlans, setTripPlans] = useState<TripPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const generateTripPlans = () => {
    setIsLoading(true);
    
    // 模拟 API 调用延迟
    setTimeout(() => {
      const { numberOfDays, interests, avoidCrowds } = formData;
      const days = parseInt(numberOfDays) || 3;
      const interestTags = interests.toLowerCase().split(',').map(tag => tag.trim());

      // 基于规则的推荐算法
      let filteredDestinations = destinations;

      // 避开人群过滤
      if (avoidCrowds) {
        filteredDestinations = filteredDestinations.filter(dest => 
          dest.crowdLevel === 'Low' || dest.crowdLevel === 'Low to Medium'
        );
      }

      // 兴趣标签匹配
      if (interestTags.length > 0) {
        filteredDestinations = filteredDestinations.filter(dest => 
          interestTags.some(tag => 
            dest.vibeTags.some(vibeTag => vibeTag.includes(tag)
          )
        )
        );
      }

      // 旅行时长匹配
      filteredDestinations = filteredDestinations.filter(dest => {
        const destDays = parseInt(dest.idealTripLength);
        return destDays <= days;
      });

      // 随机选择 2-3 个目的地
      const shuffled = filteredDestinations.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.min(3, shuffled.length));

      // 生成旅行计划
      const plans: TripPlan[] = selected.map(destination => ({
        destination,
        reason: generateReason(destination, interestTags),
        suggestedSeason: destination.bestSeason,
        recommendedDuration: destination.idealTripLength,
        itinerary: generateItinerary(destination),
      }));

      setTripPlans(plans);
      setIsLoading(false);
    }, 1000);
  };

  const generateReason = (destination: Destination, interests: string[]): string => {
    const reasons = [
      `Known for its ${destination.tagline.toLowerCase()}, ${destination.name} offers a unique experience that matches your interest in ${interests.length > 0 ? interests.join(' and ') : 'travel'}.`,
      `${destination.name} is perfect for travelers seeking ${destination.vibeTags.join(' and ')} experiences.`,
      `With its stunning ${destination.description.split(' ')[0]} scenery, ${destination.name} provides an unforgettable journey.`,
      `${destination.name} is a hidden gem that offers ${destination.whySpecial.toLowerCase()}.`
    ];
    return reasons[Math.floor(Math.random() * reasons.length)];
  };

  const generateItinerary = (destination: Destination): string[] => {
    const itineraries = {
      '1-2 days': [
        `Day 1: Explore the main attractions of ${destination.name}`,
        `Day 2: Enjoy local cuisine and hidden spots`
      ],
      '2-3 days': [
        `Day 1: Arrive and explore the central area`,
        `Day 2: Visit surrounding natural attractions`,
        `Day 3: Experience local culture and cuisine`
      ],
      '3-4 days': [
        `Day 1: Arrive and settle in`,
        `Day 2: Explore main attractions`,
        `Day 3: Day trip to nearby sights`,
        `Day 4: Relax and enjoy local cuisine`
      ],
      '4-5 days': [
        `Day 1: Arrive and explore the town center`,
        `Day 2: Visit cultural sites and museums`,
        `Day 3: Day trip to natural attractions`,
        `Day 4: Explore hidden spots and local markets`,
        `Day 5: Relax and departure`
      ]
    };

    return itineraries[destination.idealTripLength as keyof typeof itineraries] || [
      `Day 1: Explore ${destination.name}`,
      `Day 2: Enjoy local experiences`
    ];
  };

  return (
    <div className="w-full">
      <form 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left"
        onSubmit={(e) => {
          e.preventDefault();
          generateTripPlans();
        }}
      >
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-neutral-muted">{t('tripPlanner.departureCity')}</label>
          <input 
            type="text" 
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary/20 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-primary/20" 
            placeholder="e.g., Beijing" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-neutral-muted">{t('tripPlanner.numberOfDays')}</label>
          <input 
            type="number" 
            name="numberOfDays"
            value={formData.numberOfDays}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary/20 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-primary/20" 
            placeholder="e.g., 5" 
            min="1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-neutral-muted">{t('tripPlanner.interests')}</label>
          <input 
            type="text" 
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary/20 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-primary/20" 
            placeholder="e.g., nature, culture, food" 
          />
        </div>
        <div className="flex items-center pt-6">
          <label className="flex items-center cursor-pointer group">
            <div className="relative flex items-center justify-center w-5 h-5 border border-primary/20 rounded-sm mr-3 group-hover:border-primary transition-colors">
              <input 
                type="checkbox" 
                name="avoidCrowds"
                checked={formData.avoidCrowds}
                onChange={handleChange}
                className="absolute opacity-0 cursor-pointer w-full h-full" 
              />
              {formData.avoidCrowds && (
                <div className="w-2.5 h-2.5 bg-primary rounded-sm" />
              )}
            </div>
            <span className="text-sm uppercase tracking-widest text-primary">{t('tripPlanner.avoidCrowds')}</span>
          </label>
        </div>
        
        <div className="col-span-full mt-8">
          <button 
            type="submit" 
            className="w-full bg-primary text-white py-5 text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Crafting Itinerary...' : t('tripPlanner.generatePlan')}
          </button>
        </div>
      </form>

      {/* Trip Plan Results */}
      {tripPlans.length > 0 && (
        <div className="mt-24 space-y-24 text-left">
          <div className="border-t border-primary/10 pt-16">
            <h3 className="text-3xl font-serif mb-12 text-center">Your Curated Journey</h3>
            <div className="flex flex-col gap-16">
              {tripPlans.map((plan, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden bg-neutral-dark/5">
                      <Image 
                        src={plan.destination.imageUrl} 
                        alt={plan.destination.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-widest text-accent font-medium">Destination {index + 1}</span>
                        <h4 className="text-4xl font-serif leading-tight">{plan.destination.name}</h4>
                        <p className="text-sm uppercase tracking-widest text-neutral-muted">{plan.destination.province}</p>
                      </div>
                      
                      <p className="text-primary/80 font-light leading-relaxed">{plan.reason}</p>
                      
                      <div className="flex gap-8 py-6 border-y border-primary/10">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs uppercase tracking-widest text-neutral-muted">Season</span>
                          <span className="font-serif text-lg">{plan.suggestedSeason}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs uppercase tracking-widest text-neutral-muted">Duration</span>
                          <span className="font-serif text-lg">{plan.recommendedDuration}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-xs uppercase tracking-widest text-neutral-muted mb-4">Suggested Rhythm</h5>
                        <ul className="space-y-3">
                          {plan.itinerary.map((item, i) => {
                            const [day, ...desc] = item.split(': ');
                            return (
                              <li key={i} className="flex gap-4 font-light text-primary/80 text-sm">
                                <span className="font-medium min-w-[50px] shrink-0">{day}</span>
                                <span>{desc.join(': ')}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartTripPlanner;
