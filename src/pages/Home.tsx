import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const featured = destinations.slice(0, 3);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full bg-[#f4f4f4] text-zinc-900" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Cinematic%20wide%20shot%20of%20ancient%20caves%20in%20red%20cliffs%2C%20Kizil%20Xinjiang%2C%20solitary%20and%20mysterious%20eastern%20aesthetic&image_size=landscape_16_9" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="relative z-10 flex flex-col items-center text-center text-white px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-light tracking-[0.2em] mb-4"
          >
            留 白
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm md:text-base tracking-[0.3em] font-light uppercase opacity-80"
          >
            Blank Space - China's Little-Known Beauty
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-8 md:px-24 max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl leading-relaxed text-zinc-600 font-serif"
        >
          大音希声，大象无形。<br className="my-4 block" />
          有些美，不在喧嚣的人潮中，而在岁月的留白处。<br />
          我们带你探寻中国那些鲜为人知的自然秘境与人文遗迹。
        </motion.p>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-serif font-light tracking-widest">精选推荐<span className="block text-sm text-zinc-400 mt-2 font-sans uppercase">Featured</span></h2>
          <Link to="/explore" className="group flex items-center gap-2 text-sm uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors">
            全部探索 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {featured.map((dest, index) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group ${
                index === 0 ? 'md:col-span-12' : 
                index === 1 ? 'md:col-span-7' : 'md:col-span-5'
              }`}
            >
              <Link to={`/detail/${dest.id}`} className="block relative overflow-hidden bg-zinc-200">
                <div className={`relative w-full ${index === 0 ? 'h-[60vh]' : 'h-[50vh]'}`}>
                  <img 
                    src={dest.coverImage} 
                    alt={dest.nameZh}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-8 text-white w-full bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs tracking-widest uppercase mb-2 block opacity-80">{dest.category} • {dest.location}</span>
                  <h3 className="text-2xl md:text-3xl font-serif mb-2 tracking-wider">{dest.nameZh}</h3>
                  <p className="text-sm opacity-90 font-light max-w-lg">{dest.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
