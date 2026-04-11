"use client";

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
      <div className="fixed top-6 right-6 z-50 fade-in">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20chinese%20landscape%20mountains%20and%20rivers%20scenic%20view&image_size=landscape_16_9')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.3s' }}>
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.5s' }}>
            <button className="btn-primary">
              {t('hero.exploreMap')}
            </button>
            <button className="btn-secondary">
              {t('hero.planTrip')}
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 fade-in-up">{t('map.title')}</h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg fade-in" style={{ animationDelay: '0.2s' }}>
            <ChinaMap />
          </div>
        </div>
      </section>

      {/* Hidden Picks Section */}
      <section className="section gradient-bg">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 fade-in-up">{t('hiddenPicks.title')}</h2>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <FilterComponent onFilterChange={handleFilterChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination, index) => (
                <div key={destination.id} className="fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                  <DestinationCard destination={destination} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 fade-in">
                <p className="text-gray-500 text-lg">No destinations match your filters. Please try adjusting your filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Smart Trip Planner Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 fade-in-up">{t('tripPlanner.title')}</h2>
          <div className="max-w-3xl mx-auto fade-in">
            <SmartTripPlanner />
          </div>
        </div>
      </section>

      {/* Why Hidden China Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 fade-in-up">{t('why.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover-lift fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-3xl">🔍</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('why.discover')}</h3>
              <p className="text-gray-600">{t('why.discoverDesc')}</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover-lift fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-secondary text-3xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('why.map')}</h3>
              <p className="text-gray-600">{t('why.mapDesc')}</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover-lift fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('why.planner')}</h3>
              <p className="text-gray-600">{t('why.plannerDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-2">Hidden China Atlas</h3>
              <p className="text-gray-400">{t('hero.title')}</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.about')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.destinations')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.contact')}</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hidden China Atlas. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}