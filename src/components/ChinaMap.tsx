"use client";

import { Destination } from "@/data/destinations";
import { useTranslation } from "@/lib/languageContext";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { useState } from "react";
import DestinationCard from "./DestinationCard";

interface ChinaMapProps {
  destinations: Destination[];
}

export default function ChinaMap({ destinations }: ChinaMapProps) {
  const { language } = useTranslation();
  const [activeDest, setActiveDest] = useState<Destination | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[600px] bg-earthLight/30 rounded-3xl overflow-hidden border border-earth/20 flex items-center justify-center p-8">
      {/* Decorative Map Background - Stylized Abstract China Map */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
        <img 
          src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20abstract%20map%20of%20China,%20jade%20green%20lines,%20off-white%20background,%20clean%20vector%20art&image_size=landscape_16_9" 
          alt="Map of China" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Markers Container */}
      <div className="relative w-full max-w-[800px] h-[500px] z-10">
        {destinations.map((dest, i) => (
          <motion.button
            key={dest.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            onClick={() => setActiveDest(dest)}
            className={`group absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
              activeDest?.id === dest.id 
                ? 'bg-jade text-white scale-125 shadow-lg shadow-jade/40 z-30' 
                : 'bg-white text-jade shadow-md hover:scale-110 hover:bg-jadeLight'
            }`}
            style={{ 
              left: `${dest.coordinates.x}%`, 
              top: `${dest.coordinates.y}%` 
            }}
            aria-label={language === 'en' ? dest.nameEn : dest.nameZh}
          >
            <MapPin size={16} className={activeDest?.id === dest.id ? 'fill-white' : ''} />
            
            {/* Tooltip */}
            <div className={`absolute top-full mt-2 whitespace-nowrap px-3 py-1.5 bg-ink text-white text-xs font-medium rounded-lg shadow-xl pointer-events-none transition-opacity duration-200 ${
              activeDest?.id === dest.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}>
              {language === 'en' ? dest.nameEn : dest.nameZh}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-ink rotate-45" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {activeDest && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-6 bottom-6 right-6 w-80 md:w-96 z-40"
          >
            <div className="relative h-full">
              <DestinationCard destination={activeDest} index={0} />
              <button 
                onClick={() => setActiveDest(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur text-ink rounded-full shadow-sm hover:bg-white hover:text-jade transition-colors z-50"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}