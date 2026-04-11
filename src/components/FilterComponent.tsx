"use client";

import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterComponentProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  season: string;
  vibe: string;
  tripLength: string;
  crowdLevel: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = React.useState<FilterState>({
    season: '',
    vibe: '',
    tripLength: '',
    crowdLevel: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetFilters: FilterState = {
      season: '',
      vibe: '',
      tripLength: '',
      crowdLevel: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="border-y border-primary/10 py-8 mb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-3 text-primary">
          <SlidersHorizontal className="w-5 h-5" />
          <h3 className="font-serif text-2xl">Refine Search</h3>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 flex-1 md:justify-end">
          <div className="relative group">
            <select
              name="season"
              value={filters.season}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-primary/20 text-sm py-2 pr-8 focus:outline-none focus:border-primary hover:border-primary transition-colors cursor-pointer"
            >
              <option value="">Any Season</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
            </select>
          </div>
          
          <div className="relative group">
            <select
              name="vibe"
              value={filters.vibe}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-primary/20 text-sm py-2 pr-8 focus:outline-none focus:border-primary hover:border-primary transition-colors cursor-pointer"
            >
              <option value="">Any Vibe</option>
              <option value="coastal">Coastal</option>
              <option value="mountains">Mountains</option>
              <option value="heritage">Heritage</option>
              <option value="culture">Culture</option>
              <option value="relaxation">Relaxation</option>
              <option value="photography">Photography</option>
            </select>
          </div>
          
          <div className="relative group">
            <select
              name="tripLength"
              value={filters.tripLength}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-primary/20 text-sm py-2 pr-8 focus:outline-none focus:border-primary hover:border-primary transition-colors cursor-pointer"
            >
              <option value="">Any Duration</option>
              <option value="1-2 days">1-2 Days</option>
              <option value="2-3 days">2-3 Days</option>
              <option value="3-4 days">3-4 Days</option>
              <option value="4-5 days">4-5 Days</option>
            </select>
          </div>
          
          <div className="relative group">
            <select
              name="crowdLevel"
              value={filters.crowdLevel}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-primary/20 text-sm py-2 pr-8 focus:outline-none focus:border-primary hover:border-primary transition-colors cursor-pointer"
            >
              <option value="">Any Crowd Level</option>
              <option value="Low">Low</option>
              <option value="Low to Medium">Low to Medium</option>
              <option value="Medium">Medium</option>
              <option value="Medium to High">Medium to High</option>
              <option value="High">High</option>
            </select>
          </div>

          <button 
            onClick={resetFilters}
            className="text-xs tracking-widest uppercase text-neutral-muted hover:text-primary transition-colors ml-4"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
