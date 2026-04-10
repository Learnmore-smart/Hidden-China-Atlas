import React, { useState } from 'react'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ChinaMap from '@/components/ChinaMap'
import DestinationCard from '@/components/DestinationCard'
import FilterComponent, { FilterState } from '@/components/FilterComponent'
import SmartTripPlanner from '@/components/SmartTripPlanner'
import { destinations, Destination } from '@/data/destinations'
import { useTranslation } from '@/lib/languageContext'

export default function Home() {
  const { t } = useTranslation()
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations)

  const handleFilterChange = (filters: FilterState) => {
    let result = destinations

    if (filters.season) {
      result = result.filter(dest => dest.bestSeason.includes(filters.season))
    }

    if (filters.vibe) {
      result = result.filter(dest => dest.vibeTags.includes(filters.vibe))
    }

    if (filters.tripLength) {
      result = result.filter(dest => dest.idealTripLength === filters.tripLength)
    }

    if (filters.crowdLevel) {
      result = result.filter(dest => dest.crowdLevel === filters.crowdLevel)
    }

    setFilteredDestinations(result)
  }

  return (
    <div className="min-h-screen">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
              {t('hero.exploreMap')}
            </button>
            <button className="bg-white hover:bg-gray-50 text-primary border border-primary px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
              {t('hero.planTrip')}
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('map.title')}</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <ChinaMap />
          </div>
        </div>
      </section>

      {/* Hidden Picks Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('hiddenPicks.title')}</h2>
          <FilterComponent onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No destinations match your filters. Please try adjusting your filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Smart Trip Planner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('tripPlanner.title')}</h2>
          <SmartTripPlanner />
        </div>
      </section>

      {/* Why Hidden China Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('why.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('why.discover')}</h3>
              <p className="text-gray-600">{t('why.discoverDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('why.map')}</h3>
              <p className="text-gray-600">{t('why.mapDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('why.planner')}</h3>
              <p className="text-gray-600">{t('why.plannerDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Hidden China Atlas</h3>
              <p className="text-gray-400 mt-2">{t('hero.title')}</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.about')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.destinations')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.contact')}</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hidden China Atlas. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}