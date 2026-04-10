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
    <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm">
      <form 
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          generateTripPlans();
        }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('tripPlanner.departureCity')}</label>
          <input 
            type="text" 
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
            placeholder="e.g., Beijing" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('tripPlanner.numberOfDays')}</label>
          <input 
            type="number" 
            name="numberOfDays"
            value={formData.numberOfDays}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
            placeholder="e.g., 5" 
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('tripPlanner.interests')}</label>
          <input 
            type="text" 
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
            placeholder="e.g., nature, culture, food" 
          />
        </div>
        <div>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="avoidCrowds"
              checked={formData.avoidCrowds}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" 
            />
            <span className="ml-2 block text-sm text-gray-700">{t('tripPlanner.avoidCrowds')}</span>
          </label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-medium transition-all"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : t('tripPlanner.generatePlan')}
        </button>
      </form>

      {/* Trip Plan Results */}
      {tripPlans.length > 0 && (
        <div className="mt-12 space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Your Trip Recommendations</h3>
          {tripPlans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3 relative h-48">
                  <Image 
                    src={plan.destination.imageUrl} 
                    alt={plan.destination.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-2">{plan.destination.name}</h4>
                  <p className="text-gray-500 mb-4">{plan.destination.province}</p>
                  <p className="text-gray-700 mb-4">{plan.reason}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Suggested Season:</span>
                      <p className="font-medium">{plan.suggestedSeason}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Recommended Duration:</span>
                      <p className="font-medium">{plan.recommendedDuration}</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Suggested Itinerary:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {plan.itinerary.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmartTripPlanner;
