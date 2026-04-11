"use client";

import { Destination } from "@/data/destinations";
import { useTranslation } from "@/lib/languageContext";
import { MapPin, Users, Calendar, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export default function DestinationCard({ destination, index }: DestinationCardProps) {
  const { language } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-500 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-ink/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={destination.image}
          alt={language === 'en' ? destination.nameEn : destination.nameZh}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {destination.vibes.map((vibe) => (
            <span key={vibe} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-jade rounded-full shadow-sm">
              {vibe}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-serif text-2xl text-ink leading-tight">
              {language === 'en' ? destination.nameEn : destination.nameZh}
            </h3>
            <div className="flex items-center text-slate text-sm mt-1">
              <MapPin size={14} className="mr-1 text-jade" />
              {destination.province}
            </div>
          </div>
          <span className="text-xs font-serif italic text-earth border border-earth/30 px-2 py-1 rounded-full bg-earth/5">
            {language === 'en' ? destination.nameZh : destination.nameEn}
          </span>
        </div>
        
        <p className="text-sm font-medium text-jade mb-3 italic">"{destination.tagline}"</p>
        
        <p className="text-ink/70 text-sm leading-relaxed mb-6 flex-grow">
          {destination.description}
        </p>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-slate border-t border-earthLight pt-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-earth" />
            <span>{destination.bestSeason.join(', ')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-earth" />
            <span>{destination.tripLength}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={14} className="text-earth" />
            <span>Crowd: <span className={destination.crowdLevel === 'Low' ? 'text-jade font-medium' : ''}>{destination.crowdLevel}</span></span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2 mt-1 pt-1">
            <Navigation size={14} className="text-earth shrink-0" />
            <span className="truncate" title={destination.gettingThere}>{destination.gettingThere}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}