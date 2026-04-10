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
    <div className="bg-white p-10 rounded-2xl shadow-elegant">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <h3 className="text-2xl font-bold text-primary mb-4 md:mb-0">Discover Your Perfect Destination</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Filters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-muted">Season</label>
          <select
            name="season"
            value={filters.season}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiM3MTgwOTYiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNNiAxTDAgN0wxMiA3WiIgZmlsbD0iIzcxODA5NiIvPgo8L3N2Zz4=')] bg-right bg-no-repeat bg-[length:12px_8px] pr-10 cursor-pointer"
          >
            <option value="">All Seasons</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-muted">Vibe</label>
          <select
            name="vibe"
            value={filters.vibe}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiM3MTgwOTYiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNNiAxTDAgN0wxMiA3WiIgZmlsbD0iIzcxODA5NiIvPgo8L3N2Zz4=')] bg-right bg-no-repeat bg-[length:12px_8px] pr-10 cursor-pointer"
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
        <div className="space-y-4">
          <label className="block text-sm font-medium text-muted">Trip Length</label>
          <select
            name="tripLength"
            value={filters.tripLength}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiM3MTgwOTYiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNNiAxTDAgN0wxMiA3WiIgZmlsbD0iIzcxODA5NiIvPgo8L3N2Zz4=')] bg-right bg-no-repeat bg-[length:12px_8px] pr-10 cursor-pointer"
          >
            <option value="">All Lengths</option>
            <option value="1-2 days">1-2 days</option>
            <option value="2-3 days">2-3 days</option>
            <option value="3-4 days">3-4 days</option>
            <option value="4-5 days">4-5 days</option>
          </select>
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-muted">Crowd Level</label>
          <select
            name="crowdLevel"
            value={filters.crowdLevel}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiM3MTgwOTYiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNNiAxTDAgN0wxMiA3WiIgZmlsbD0iIzcxODA5NiIvPgo8L3N2Zz4=')] bg-right bg-no-repeat bg-[length:12px_8px] pr-10 cursor-pointer"
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
