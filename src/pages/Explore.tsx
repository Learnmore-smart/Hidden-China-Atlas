import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { DestinationCategory } from '../types';

const categories: { label: string; value: DestinationCategory | 'all' }[] = [
  { label: '全部 All', value: 'all' },
  { label: '自然 Nature', value: 'nature' },
  { label: '文化 Culture', value: 'culture' },
  { label: '非遗 Heritage', value: 'heritage' },
];

export default function Explore() {
  const [filter, setFilter] = useState<DestinationCategory | 'all'>('all');

  const filtered = filter === 'all' 
    ? destinations 
    : destinations.filter(d => d.category === filter);

  return (
    <div className="min-h-screen pt-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-widest mb-4">探 索<span className="block text-lg text-zinc-400 mt-2 font-sans uppercase">Explore</span></h1>
        <p className="text-zinc-500 font-light max-w-md">在广袤的华夏大地上，寻找那些未被世人熟知的惊艳角落。</p>
      </div>

      <div className="flex flex-wrap gap-6 mb-12">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`text-sm tracking-widest uppercase transition-colors pb-1 border-b-2 ${
              filter === cat.value ? 'border-zinc-900 text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((dest, index) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            key={dest.id}
          >
            <Link to={`/detail/${dest.id}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 mb-4">
                <img 
                  src={dest.coverImage} 
                  alt={dest.nameZh} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif tracking-wider">{dest.nameZh}</h3>
                  <span className="text-xs text-zinc-400 tracking-widest uppercase">{dest.location}</span>
                </div>
                <p className="text-sm text-zinc-500 font-light line-clamp-2">{dest.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
