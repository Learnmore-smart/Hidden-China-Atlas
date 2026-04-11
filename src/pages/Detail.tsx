import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useRef } from 'react';

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const dest = destinations.find(d => d.id === id);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!dest) {
    return <div className="min-h-screen flex items-center justify-center text-zinc-500">Destination not found</div>;
  }

  return (
    <div className="w-full bg-[#F9F9F9]" ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-black">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={dest.coverImage} 
            alt={dest.nameZh} 
            className="w-full h-full object-cover opacity-70"
          />
        </motion.div>
        
        <div className="absolute top-32 left-8 z-20">
          <Link to="/explore" className="text-white/70 hover:text-white flex items-center gap-2 text-sm tracking-widest uppercase transition-colors">
            <ArrowLeft size={16} /> 返回 Back
          </Link>
        </div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-20"
        >
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 opacity-80 border-b border-white/30 pb-2">{dest.category}</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-light tracking-widest mb-6"
          >
            {dest.nameZh}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl font-light tracking-[0.2em] opacity-90 uppercase"
          >
            {dest.nameEn}
          </motion.h2>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 px-8 md:px-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-zinc-500 mb-12 uppercase tracking-widest text-sm border-l-2 border-zinc-900 pl-4">
          <MapPin size={16} />
          {dest.location}
        </div>

        <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 font-serif leading-loose tracking-wide">
          <p className="text-2xl leading-relaxed text-zinc-900 mb-16 italic opacity-90">
            "{dest.description}"
          </p>
          <p className="mb-24 text-justify">
            {dest.longDescription}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {dest.images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`overflow-hidden bg-zinc-200 ${index === 2 ? 'md:col-span-2 md:aspect-[21/9]' : 'aspect-square md:aspect-[4/5]'}`}
            >
              <img 
                src={img} 
                alt={`${dest.nameZh} image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Destination Suggestion */}
      <section className="py-32 text-center">
        <p className="text-sm tracking-widest text-zinc-400 uppercase mb-4">继续探索 Continue Exploring</p>
        <Link to="/explore" className="inline-block text-3xl font-serif tracking-widest hover:opacity-70 transition-opacity border-b border-zinc-900 pb-2">
          发现更多秘境
        </Link>
      </section>
    </div>
  );
}
