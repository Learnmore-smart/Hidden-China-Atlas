import React, { useState } from 'react';
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
        itinerary: generateItinerary(destination, parseInt(destination.idealTripLength))
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

  const generateItinerary = (destination: Destination, days: number): string[] => {
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
    <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-10 shadow-elegant">
      <form 
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          generateTripPlans();
        }}
      >
        <div className="space-y-4">
          <label className="block text-sm font-medium text-muted">{t('tripPlanner.departureCity')}</label>
          <input 
            type="text" 
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-gray-300" 
            placeholder="e.g., Beijing" 
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-muted">{t('tripPlanner.numberOfDays')}</label>
          <input 
            type="number" 
            name="numberOfDays"
            value={formData.numberOfDays}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-gray-300" 
            placeholder="e.g., 5" 
            min="1"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-muted">{t('tripPlanner.interests')}</label>
          <input 
            type="text" 
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-gray-300" 
            placeholder="e.g., nature, culture, food" 
          />
        </div>
        <div className="pt-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input 
              type="checkbox" 
              name="avoidCrowds"
              checked={formData.avoidCrowds}
              onChange={handleChange}
              className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded transition-all duration-300"
            />
            <span className="block text-sm font-medium text-muted">{t('tripPlanner.avoidCrowds')}</span>
          </label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </div>
          ) : (
            t('tripPlanner.generatePlan')
          )}
        </button>
      </form>

      {/* Trip Plan Results */}
      {tripPlans.length > 0 && (
        <div className="mt-16 space-y-10">
          <h3 className="text-2xl font-semibold mb-8 text-center">Your Trip Recommendations</h3>
          {tripPlans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-2/5">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={plan.destination.imageUrl} 
                      alt={plan.destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
                      {plan.destination.tagline}
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-semibold text-primary">{plan.destination.name}</h4>
                    <span className="text-sm text-muted font-medium">{plan.destination.chineseName}</span>
                  </div>
                  <p className="text-muted mb-6">{plan.destination.province}</p>
                  <p className="text-secondary mb-6 leading-relaxed">{plan.reason}</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="block text-xs text-muted mb-2">Suggested Season</span>
                      <p className="font-medium">{plan.suggestedSeason}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="block text-xs text-muted mb-2">Recommended Duration</span>
                      <p className="font-medium">{plan.recommendedDuration}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="text-sm font-medium text-primary mb-4">Suggested Itinerary:</h5>
                    <ul className="space-y-3">
                      {plan.itinerary.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-secondary">{item}</span>
                        </li>
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
