"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { destinations } from '@/data/destinations';
import { useTranslation } from '@/lib/languageContext';

// Coordinate mapping for our destinations (1000x800 viewBox)
const coordinateMap: Record<string, { x: number, y: number }> = {
  'pingtan': { x: 820, y: 650 },
  'gannan': { x: 400, y: 420 },
  'hongcun': { x: 720, y: 500 },
  'zhoushan': { x: 880, y: 520 },
  'lijiang': { x: 300, y: 680 },
  'hulunbuir': { x: 700, y: 150 },
  'xidi': { x: 710, y: 510 },
  'sansha': { x: 830, y: 620 },
  'langmusi': { x: 380, y: 440 },
  'fenghuang': { x: 550, y: 620 },
  'yueyang': { x: 600, y: 560 },
  'wuyuan': { x: 740, y: 550 }
};

// Generate some connections (constellation lines) between geographically close nodes
const connections = [
  ['pingtan', 'sansha'],
  ['sansha', 'zhoushan'],
  ['zhoushan', 'hongcun'],
  ['hongcun', 'xidi'],
  ['xidi', 'wuyuan'],
  ['wuyuan', 'pingtan'],
  ['wuyuan', 'yueyang'],
  ['yueyang', 'fenghuang'],
  ['fenghuang', 'lijiang'],
  ['lijiang', 'gannan'],
  ['gannan', 'langmusi'],
  ['langmusi', 'yueyang'],
  ['hongcun', 'hulunbuir'],
  ['gannan', 'hulunbuir']
];

const ChinaMap: React.FC = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedDest = useMemo(() => 
    destinations.find(d => d.id === selectedId) || null,
  [selectedId]);

  return (
    <div className="relative w-full rounded-none overflow-hidden bg-primary text-secondary border border-white/10 shadow-2xl flex flex-col md:flex-row h-[800px] font-sans">
      
      {/* Map Area */}
      <div className={`relative flex-grow h-full transition-all duration-700 ease-[0.16,1,0.3,1] ${selectedId ? 'md:w-2/3' : 'w-full'}`}>
        
        {/* Abstract Topographic/Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
                <circle cx="40" cy="40" r="1" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Constellation SVG */}
        <svg
          viewBox="0 0 1000 800"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          onClick={() => setSelectedId(null)}
        >
          {/* Connections */}
          {connections.map(([id1, id2], i) => {
            const p1 = coordinateMap[id1];
            const p2 = coordinateMap[id2];
            if (!p1 || !p2) return null;
            
            const isHovered = hoveredId === id1 || hoveredId === id2;
            const isSelected = selectedId === id1 || selectedId === id2;
            const isActive = isHovered || isSelected;

            return (
              <motion.line
                key={`line-${i}`}
                x1={p1.x} y1={p1.y}
                x2={p2.x} y2={p2.y}
                stroke={isActive ? '#b45309' : '#ffffff'}
                strokeWidth={isActive ? 1.5 : 0.5}
                strokeOpacity={isActive ? 0.8 : 0.15}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.05, ease: "easeInOut" }}
              />
            );
          })}

          {/* Radiating Ripples for Selected Node */}
          <AnimatePresence>
            {selectedId && coordinateMap[selectedId] && (
              <motion.g
                key={`ripples-${selectedId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {[1, 2, 3].map(ring => (
                  <motion.circle
                    key={ring}
                    cx={coordinateMap[selectedId].x}
                    cy={coordinateMap[selectedId].y}
                    r={20}
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="1"
                    initial={{ r: 10, opacity: 0.8 }}
                    animate={{ 
                      r: 200 * ring, 
                      opacity: 0,
                      strokeWidth: 0 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: ring * 1.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.g>
            )}
          </AnimatePresence>

          {/* Nodes */}
          {destinations.map((dest, i) => {
            const pos = coordinateMap[dest.id];
            if (!pos) return null;
            
            const isSelected = selectedId === dest.id;
            const isHovered = hoveredId === dest.id;

            return (
              <g 
                key={dest.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(dest.id);
                }}
              >
                {/* Hit area */}
                <circle cx={pos.x} cy={pos.y} r="25" fill="transparent" />
                
                {/* Outer halo */}
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isSelected ? 12 : isHovered ? 8 : 4}
                  fill={isSelected ? 'transparent' : 'rgba(255,255,255,0.1)'}
                  stroke={isSelected || isHovered ? '#b45309' : 'transparent'}
                  strokeWidth="1"
                  className="transition-all duration-300"
                />
                
                {/* Core dot */}
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isSelected ? 4 : 2}
                  fill={isSelected ? '#b45309' : '#ffffff'}
                  className="transition-all duration-300"
                />

                {/* Label */}
                <motion.text
                  x={pos.x + 15}
                  y={pos.y + 4}
                  fill={isSelected ? '#b45309' : isHovered ? '#ffffff' : 'rgba(255,255,255,0.5)'}
                  fontSize="12"
                  fontFamily="var(--font-sans), sans-serif"
                  letterSpacing="0.05em"
                  className="pointer-events-none transition-colors duration-300"
                  initial={{ opacity: 0, x: pos.x + 10 }}
                  animate={{ opacity: 1, x: pos.x + 15 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  {t(`destinations.${dest.id}.name`)}
                </motion.text>
              </g>
            );
          })}
        </svg>

        {/* Overlay Title */}
        <div className="absolute top-10 left-10 pointer-events-none mix-blend-difference">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-5xl font-serif tracking-wide"
          >
            {t('map.title')} <br/><span className="text-white/50 italic">{t('map.subtitle')}</span>
          </motion.h3>
        </div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedDest && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/3 bg-neutral-dark border-t md:border-t-0 md:border-l border-white/10 flex flex-col overflow-hidden"
          >
            {/* Image Hero */}
            <div className="relative h-64 md:h-1/2 w-full flex-shrink-0">
              <Image 
                src={selectedDest.imageUrl} 
                alt={selectedDest.name}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark to-transparent"></div>
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white uppercase tracking-widest text-xs transition-colors"
              >
                {t('map.close')}
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex-grow overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-accent text-xs uppercase tracking-widest">{t(`destinations.${selectedDest.id}.province`)}</span>
                  <span className="w-8 h-px bg-white/20"></span>
                  <span className="text-white/40 text-xs">{t(`destinations.${selectedDest.id}.idealTripLength`)}</span>
                </div>
                
                <h4 className="text-3xl md:text-4xl font-serif text-white mb-2">{t(`destinations.${selectedDest.id}.name`)}</h4>
                <p className="text-white/40 font-serif italic mb-8">{selectedDest.chineseName} — {t(`destinations.${selectedDest.id}.tagline`)}</p>
                
                <p className="text-white/80 font-light leading-relaxed mb-8">
                  {t(`destinations.${selectedDest.id}.description`)}
                </p>

                <div className="space-y-6 border-t border-white/10 pt-8">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">{t('map.whySpecial')}</span>
                    <p className="text-sm text-white/90 font-light">{t(`destinations.${selectedDest.id}.whySpecial`)}</p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">{t('map.atmosphere')}</span>
                    <div className="flex flex-wrap gap-2">
                      {(t(`destinations.${selectedDest.id}.vibeTags`) as unknown as string[]).map(tag => (
                        <span key={tag} className="text-xs border border-white/10 px-3 py-1 rounded-full text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ChinaMap;
