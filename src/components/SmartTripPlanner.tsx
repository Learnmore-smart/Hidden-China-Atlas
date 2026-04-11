"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/languageContext";
import { destinations, Destination } from "@/data/destinations";
import { Sparkles, ArrowRight, Plane, Map as MapIcon, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DestinationCard from "./DestinationCard";

export default function SmartTripPlanner() {
  const { t, language } = useTranslation();
  const [days, setDays] = useState<number>(3);
  const [vibe, setVibe] = useState<string>("mountains");
  const [isPlanning, setIsPlanning] = useState(false);
  const [result, setResult] = useState<Destination[] | null>(null);

  const vibesList = [
    { id: 'mountains', labelEn: 'Mountains', labelZh: '山水' },
    { id: 'photography', labelEn: 'Photography', labelZh: '摄影' },
    { id: 'heritage', labelEn: 'Heritage', labelZh: '人文古迹' },
    { id: 'slow travel', labelEn: 'Slow Travel', labelZh: '慢旅行' },
    { id: 'quiet', labelEn: 'Quiet', labelZh: '安静避世' },
  ];

  const handlePlan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlanning(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      // Very simple rule: match vibe
      const matched = destinations.filter(d => d.vibes.includes(vibe));
      // Shuffle and pick 2
      const shuffled = [...matched].sort(() => 0.5 - Math.random());
      setResult(shuffled.slice(0, 2));
      setIsPlanning(false);
    }, 1500);
  };

  return (
    <section id="planner" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-4xl text-ink mb-4">
                {language === 'en' ? 'Smart Trip Planner' : '智能行程规划'}
              </h2>
              <p className="text-slate leading-relaxed">
                {language === 'en' 
                  ? 'Tell us what kind of experience you are looking for, and our planner will curate the perfect hidden destinations for your trip.'
                  : '告诉我们您期望的旅行体验，我们的智能规划器将为您挑选最适合的隐藏目的地。'}
              </p>
            </div>

            <form onSubmit={handlePlan} className="bg-offwhite p-8 rounded-3xl border border-earthLight space-y-6">
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  {language === 'en' ? 'How many days?' : '计划游玩几天？'}
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" max="14" 
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value))}
                    className="w-full accent-jade"
                  />
                  <span className="text-jade font-serif text-xl w-8">{days}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-3">
                  {language === 'en' ? 'What is your preferred vibe?' : '您偏好哪种氛围？'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {vibesList.map(v => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVibe(v.id)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        vibe === v.id 
                          ? 'bg-jade text-white shadow-md' 
                          : 'bg-white text-slate border border-earthLight hover:border-jade/50'
                      }`}
                    >
                      {language === 'en' ? v.labelEn : v.labelZh}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isPlanning}
                className="w-full py-4 bg-ink text-white rounded-xl font-medium hover:bg-ink/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isPlanning ? (
                  <><Loader2 size={18} className="animate-spin" /> {language === 'en' ? 'Curating...' : '正在为您挑选...'}</>
                ) : (
                  <><Sparkles size={18} /> {language === 'en' ? 'Generate Itinerary' : '生成推荐行程'}</>
                )}
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[400px] border-2 border-dashed border-earthLight rounded-3xl flex flex-col items-center justify-center text-slate"
                >
                  <MapIcon size={48} className="mb-4 text-earth opacity-50" strokeWidth={1} />
                  <p>{language === 'en' ? 'Your personalized recommendations will appear here.' : '您的专属推荐将显示在这里。'}</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 text-jade mb-6">
                    <Plane size={24} />
                    <h3 className="font-serif text-2xl">
                      {language === 'en' ? 'Your Curated Journey' : '您的专属旅程'}
                    </h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {result.map((dest, i) => (
                      <div key={dest.id} className="relative">
                        <DestinationCard destination={dest} index={i} />
                        {i === 0 && result.length > 1 && (
                          <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white rounded-full items-center justify-center shadow-sm border border-earthLight">
                            <ArrowRight size={14} className="text-slate" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {result.length === 0 && (
                    <p className="text-slate text-center py-12">
                      {language === 'en' ? 'No exact match found. Try changing your preferences!' : '没有找到完全匹配的目的地。请尝试更改您的偏好！'}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}