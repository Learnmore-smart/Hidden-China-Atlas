"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ChinaMap from '@/components/ChinaMap'
import DestinationCard from '@/components/DestinationCard'
import FilterComponent, { FilterState } from '@/components/FilterComponent'
import SmartTripPlanner from '@/components/SmartTripPlanner'
import { destinations, Destination } from '@/data/destinations'
import { useTranslation } from '@/lib/languageContext'
import { Compass, Map as MapIcon, Sparkles, ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

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
    <div className="min-h-screen bg-neutral text-primary selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-6">
          <a href="https://www.rateministere.com" className="hover:text-accent transition-colors flex items-center gap-1.5 text-sm uppercase tracking-wider font-sans font-medium">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Home
          </a>
          <span className="opacity-30">|</span>
          <div className="font-serif text-2xl tracking-wide font-medium">Hidden China Atlas</div>
          <span className="opacity-30">|</span>
          <a href="https://github.com/Learnmore-smart/Hidden-China-Atlas" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1.5 text-sm uppercase tracking-wider font-sans font-medium">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
        </div>
        <LanguageSwitcher />
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end pb-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero.jpg`}
            alt="Hero Landscape"
            fill
            className="object-cover scale-105"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80 z-0"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-serif text-white leading-tight mb-6">
            {t('hero.title')}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white/80 font-light mb-10 max-w-2xl">
            {t('hero.subtitle')}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-neutral transition-colors duration-300"
            >
              {t('hero.exploreMap')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('planner-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
            >
              {t('hero.planTrip')}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="py-32 px-6 md:px-16 bg-neutral">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-primary/10 pb-8">
            <h2 className="text-4xl md:text-6xl font-serif">{t('map.title')}</h2>
            <p className="text-neutral-muted max-w-sm text-right font-light">
              {t('why.mapDesc')}
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="w-full rounded-none shadow-2xl shadow-black/5 overflow-hidden relative border border-primary/5">
            <ChinaMap />
          </motion.div>
        </motion.div>
      </section>

      {/* Hidden Picks Section */}
      <section className="py-32 px-6 md:px-16 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-12">{t('hiddenPicks.title')}</motion.h2>
            <motion.div variants={fadeUp}>
              <FilterComponent onFilterChange={handleFilterChange} />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination) => (
                <motion.div key={destination.id} variants={fadeUp}>
                  <DestinationCard destination={destination} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-24 border-y border-primary/10 text-center">
                <p className="text-neutral-muted font-serif text-2xl italic">No sanctuaries match your refined criteria. Adjust your pursuits to reveal more.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Smart Trip Planner Section */}
      <section id="planner-section" className="py-32 px-6 md:px-16 bg-neutral border-t border-primary/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-16">{t('tripPlanner.title')}</motion.h2>
          <motion.div variants={fadeUp}>
            <SmartTripPlanner />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Hidden China Section */}
      <section className="py-32 px-6 md:px-16 bg-primary text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-20">{t('why.title')}</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/20 pt-16">
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <Compass className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif">{t('why.discover')}</h3>
              <p className="text-white/60 font-light leading-relaxed">{t('why.discoverDesc')}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <MapIcon className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif">{t('why.map')}</h3>
              <p className="text-white/60 font-light leading-relaxed">{t('why.mapDesc')}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <Sparkles className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif">{t('why.planner')}</h3>
              <p className="text-white/60 font-light leading-relaxed">{t('why.plannerDesc')}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pb-12 pt-24 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
            <div>
              <h3 className="text-3xl font-serif mb-4">Hidden China Atlas</h3>
              <p className="text-white/50 font-light max-w-sm">{t('hero.title')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <a href="#" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">{t('footer.about')}</a>
              <a href="#" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">{t('footer.destinations')}</a>
              <a href="#" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">{t('footer.contact')}</a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 pt-8 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} Hidden China Atlas. {t('footer.copyright')}</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
