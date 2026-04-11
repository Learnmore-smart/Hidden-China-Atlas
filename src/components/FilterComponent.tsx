"use client";

import { useTranslation } from "@/lib/languageContext";
import { Filter } from "lucide-react";

interface FilterProps {
  activeVibe: string | null;
  setActiveVibe: (v: string | null) => void;
  activeSeason: string | null;
  setActiveSeason: (s: string | null) => void;
}

export default function FilterComponent({ activeVibe, setActiveVibe, activeSeason, setActiveSeason }: FilterProps) {
  const { language } = useTranslation();

  const vibesList = [
    { id: 'mountains', labelEn: 'Mountains', labelZh: '山水' },
    { id: 'photography', labelEn: 'Photography', labelZh: '摄影' },
    { id: 'heritage', labelEn: 'Heritage', labelZh: '人文古迹' },
    { id: 'slow travel', labelEn: 'Slow Travel', labelZh: '慢旅行' },
    { id: 'quiet', labelEn: 'Quiet', labelZh: '安静避世' },
    { id: 'coastal', labelEn: 'Coastal', labelZh: '海滨' },
    { id: 'nature', labelEn: 'Nature', labelZh: '自然' },
  ];

  const seasonsList = [
    { id: 'Spring', labelEn: 'Spring', labelZh: '春季' },
    { id: 'Summer', labelEn: 'Summer', labelZh: '夏季' },
    { id: 'Autumn', labelEn: 'Autumn', labelZh: '秋季' },
    { id: 'Winter', labelEn: 'Winter', labelZh: '冬季' },
  ];

  return (
    <div className="flex flex-col gap-6 py-8 border-y border-earthLight mb-12">
      <div className="flex items-center gap-2 text-ink font-serif text-xl">
        <Filter size={20} className="text-jade" />
        {language === 'en' ? 'Refine Your Search' : '筛选目的地'}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-medium text-slate mb-3 uppercase tracking-wider">
            {language === 'en' ? 'By Vibe' : '按氛围'}
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveVibe(null)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                activeVibe === null 
                  ? 'bg-ink text-white' 
                  : 'bg-white text-slate border border-earthLight hover:border-ink/30'
              }`}
            >
              {language === 'en' ? 'All' : '全部'}
            </button>
            {vibesList.map(v => (
              <button
                key={v.id}
                onClick={() => setActiveVibe(v.id)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  activeVibe === v.id 
                    ? 'bg-ink text-white' 
                    : 'bg-white text-slate border border-earthLight hover:border-ink/30'
                }`}
              >
                {language === 'en' ? v.labelEn : v.labelZh}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-slate mb-3 uppercase tracking-wider">
            {language === 'en' ? 'By Season' : '按季节'}
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSeason(null)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                activeSeason === null 
                  ? 'bg-ink text-white' 
                  : 'bg-white text-slate border border-earthLight hover:border-ink/30'
              }`}
            >
              {language === 'en' ? 'All' : '全部'}
            </button>
            {seasonsList.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSeason(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  activeSeason === s.id 
                    ? 'bg-ink text-white' 
                    : 'bg-white text-slate border border-earthLight hover:border-ink/30'
                }`}
              >
                {language === 'en' ? s.labelEn : s.labelZh}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}