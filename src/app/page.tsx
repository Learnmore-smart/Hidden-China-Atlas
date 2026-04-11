"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/languageContext";
import { destinations } from "@/data/destinations";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ChinaMap from "@/components/ChinaMap";
import DestinationCard from "@/components/DestinationCard";
import FilterComponent from "@/components/FilterComponent";
import SmartTripPlanner from "@/components/SmartTripPlanner";
import { motion } from "framer-motion";
import { Compass, ArrowDown } from "lucide-react";

export default function Home() {
  const { t, language } = useTranslation();
  const [activeVibe, setActiveVibe] = useState<string | null>(null);
  const [activeSeason, setActiveSeason] = useState<string | null>(null);

  const filteredDestinations = destinations.filter(dest => {
    if (activeVibe && !dest.vibes.includes(activeVibe)) return false;
    if (activeSeason && !dest.bestSeason.includes(activeSeason)) return false;
    return true;
  });

  return (
    <main className="min-h-screen bg-offwhite selection:bg-jadeLight selection:text-ink">
      <LanguageSwitcher />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 md:px-12 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-b from-jadeLight/40 to-transparent blur-3xl opacity-60" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-t from-earthLight/60 to-transparent blur-3xl opacity-60" />
        </div>

        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-earth/30 bg-white/50 backdrop-blur-sm text-sm font-medium text-slate mb-8">
              <Compass size={16} className="text-jade" />
              {language === 'en' ? 'Hidden China Atlas' : '中国隐藏之美地图'}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-tight mb-8 tracking-tight text-balance">
              {language === 'en' 
                ? <>Discover the side of China <span className="italic text-jade">most tourists never see.</span></>
                : <>发现大多数游客<br/><span className="italic text-jade">从未见过的中国。</span></>}
            </h1>
            <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto mb-12 leading-relaxed">
              {language === 'en'
                ? 'Explore hidden gems, lesser-known destinations, and local beauty beyond the usual route.'
                : '探索隐藏的宝藏、鲜为人知的目的地和常规路线之外的当地美景。'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#map"
                className="px-8 py-4 rounded-full bg-ink text-white font-medium hover:bg-ink/90 transition-colors duration-300 w-full sm:w-auto shadow-lg shadow-ink/10"
              >
                {language === 'en' ? 'Explore the Map' : '探索地图'}
              </a>
              <a 
                href="#planner"
                className="px-8 py-4 rounded-full bg-white text-ink font-medium border border-earthLight hover:border-jade/50 hover:text-jade transition-colors duration-300 w-full sm:w-auto shadow-sm"
              >
                {language === 'en' ? 'Plan My Trip' : '规划我的旅行'}
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-earth">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Map Explorer Section */}
      <section id="map" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">
              {language === 'en' ? 'Map Explorer' : '互动地图探索'}
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Navigate through our curated collection of extraordinary destinations across the vast landscape of China.'
                : '在广袤的中国大地上，导航探索我们精心挑选的非凡目的地。'}
            </p>
          </div>
          
          <ChinaMap destinations={destinations} />
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">
                {language === 'en' ? 'Hidden Picks' : '精选目的地'}
              </h2>
              <p className="text-slate">
                {language === 'en' ? 'Curated places that offer a different perspective of China.' : '提供不同视角的中国精选旅行地。'}
              </p>
            </div>
          </div>

          <FilterComponent 
            activeVibe={activeVibe} setActiveVibe={setActiveVibe}
            activeSeason={activeSeason} setActiveSeason={setActiveSeason}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate text-lg">
                {language === 'en' ? 'No destinations match your filters.' : '没有符合条件的目的地。'}
              </p>
              <button 
                onClick={() => { setActiveVibe(null); setActiveSeason(null); }}
                className="mt-4 text-jade underline underline-offset-4"
              >
                {language === 'en' ? 'Clear filters' : '清除筛选'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Smart Trip Planner */}
      <SmartTripPlanner />

      {/* Footer */}
      <footer className="bg-ink text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-serif text-xl">
            <Compass className="text-jade" />
            Hidden China Atlas
          </div>
          <p className="text-slate text-sm">
            &copy; {new Date().getFullYear()} {language === 'en' ? 'Hidden China Atlas. All rights reserved.' : 'Hidden China Atlas. 保留所有权利。'}
          </p>
        </div>
      </footer>
    </main>
  );
}