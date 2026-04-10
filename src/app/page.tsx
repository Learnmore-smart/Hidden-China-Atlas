import React, { useState, useEffect } from 'react'
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
  const [isVisible, setIsVisible] = useState({})

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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Language Switcher */}
      <div className="fixed top-8 right-8 z-50 backdrop-blur-sm rounded-full p-1 shadow-lg">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/80 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stunning%20Chinese%20landscape%20with%20misty%20mountains%20and%20traditional%20architecture%2C%20cinematic%20lighting%2C%20high%20quality%20photography&image_size=landscape_16_9')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight fade-in-up">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-16 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button className="bg-white hover:bg-gray-50 text-primary px-12 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                {t('hero.exploreMap')}
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border border-white px-12 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105">
                {t('hero.planTrip')}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
          <a href="#map" className="text-white/80 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className={`py-32 bg-white ${isVisible['map'] ? 'fade-in' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">{t('map.title')}</h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">Discover hidden destinations across China with our interactive map</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-elegant">
            <ChinaMap />
          </div>
        </div>
      </section>

      {/* Hidden Picks Section */}
      <section id="hidden-picks" className={`py-32 bg-gray-50 ${isVisible['hidden-picks'] ? 'fade-in' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">{t('hiddenPicks.title')}</h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">Explore our curated selection of lesser-known destinations</p>
          </div>
          <FilterComponent onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination, index) => (
                <div key={destination.id} className={`${isVisible['hidden-picks'] ? 'fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
                  <DestinationCard destination={destination} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-xl shadow-elegant">
                <p className="text-muted text-lg md:text-xl">No destinations match your filters. Please try adjusting your filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Smart Trip Planner Section */}
      <section id="trip-planner" className={`py-32 bg-white ${isVisible['trip-planner'] ? 'fade-in' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">{t('tripPlanner.title')}</h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">Get personalized trip recommendations based on your preferences</p>
          </div>
          <SmartTripPlanner />
        </div>
      </section>

      {/* Why Hidden China Section */}
      <section id="why" className={`py-32 bg-gray-50 ${isVisible['why'] ? 'fade-in' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">{t('why.title')}</h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">Discover why Hidden China Atlas is your ultimate guide to China's hidden gems</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className={`bg-white p-10 rounded-2xl shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:shadow-hover ${isVisible['why'] ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.15s' }}>
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-primary text-4xl">🔍</span>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-center">{t('why.discover')}</h3>
              <p className="text-muted text-center text-lg">{t('why.discoverDesc')}</p>
            </div>
            <div className={`bg-white p-10 rounded-2xl shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:shadow-hover ${isVisible['why'] ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-accent-emerald text-4xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-center">{t('why.map')}</h3>
              <p className="text-muted text-center text-lg">{t('why.mapDesc')}</p>
            </div>
            <div className={`bg-white p-10 rounded-2xl shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:shadow-hover ${isVisible['why'] ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.45s' }}>
              <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-accent-amber text-4xl">🤖</span>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-center">{t('why.planner')}</h3>
              <p className="text-muted text-center text-lg">{t('why.plannerDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-dark text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="mb-12 md:mb-0">
              <h3 className="text-4xl font-bold mb-4">Hidden China Atlas</h3>
              <p className="text-gray-400 text-lg">{t('hero.title')}</p>
            </div>
            <div className="flex space-x-12">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">{t('footer.about')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">{t('footer.destinations')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">{t('footer.contact')}</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-12 text-center text-gray-400">
            <p className="text-lg">&copy; {new Date().getFullYear()} Hidden China Atlas. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}