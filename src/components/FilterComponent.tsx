import React from 'react';

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
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h3 className="text-xl font-semibold mb-4 md:mb-0">Filter Destinations</h3>
        <button 
          onClick={resetFilters}
          className="text-sm text-primary hover:underline"
        >
          Reset Filters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
          <select
            name="season"
            value={filters.season}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Seasons</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Vibe</label>
          <select
            name="vibe"
            value={filters.vibe}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Vibes</option>
            <option value="coastal">Coastal</option>
            <option value="mountains">Mountains</option>
            <option value="heritage">Heritage</option>
            <option value="culture">Culture</option>
            <option value="relaxation">Relaxation</option>
            <option value="photography">Photography</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Trip Length</label>
          <select
            name="tripLength"
            value={filters.tripLength}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Lengths</option>
            <option value="1-2 days">1-2 days</option>
            <option value="2-3 days">2-3 days</option>
            <option value="3-4 days">3-4 days</option>
            <option value="4-5 days">4-5 days</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Crowd Level</label>
          <select
            name="crowdLevel"
            value={filters.crowdLevel}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Crowd Levels</option>
            <option value="Low">Low</option>
            <option value="Low to Medium">Low to Medium</option>
            <option value="Medium">Medium</option>
            <option value="Medium to High">Medium to High</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
