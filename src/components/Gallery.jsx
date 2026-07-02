import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, Maximize2, X, Search } from 'lucide-react';

export default function Gallery({ transformations }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightbox, setActiveLightbox] = useState(null);
  const [sliderPositions, setSliderPositions] = useState({});

  const categories = ['All', 'Fat Loss', 'Muscle Building', 'Body Recomposition'];

  const filteredData = transformations.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.programType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSliderMove = (id, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let clientX;
    
    // Unified Touch and Mouse tracking normalization
    if (e.touches && e.touches[0]) {
      clientX = e.touches[0].clientX;
    } else if (e.clientX !== undefined) {
      clientX = e.clientX;
    } else {
      return;
    }

    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPositions(prev => ({ ...prev, [id]: Math.max(0, Math.min(100, x)) }));
  };

  return (
    <section id="transformations" className="bg-obsidian-700 py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs block mb-2">Proof of Process</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Elite Physical Transformations</h2>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-zinc-800 pb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs uppercase font-bold tracking-widest border transition-all ${activeFilter === cat ? 'bg-gold-500 text-black border-gold-500' : 'border-zinc-800 text-zinc-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search client stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-obsidian-900 border border-zinc-800 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
        </div>

        {/* Dynamic Card Display Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map(item => {
              const sliderPos = sliderPositions[item.id] ?? 50;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="bg-obsidian-800 border border-zinc-900 overflow-hidden group hover:border-gold-500/40 transition-colors duration-300 w-full"
                >
                  {/* Slider Visual Interactive Container */}
                  <div 
                    className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden cursor-ew-resize select-none bg-zinc-950 touch-none"
                    onMouseMove={(e) => handleSliderMove(item.id, e)}
                    onTouchMove={(e) => handleSliderMove(item.id, e)}
                  >
                    {/* After Image */}
                    <img 
                      src={item.afterImage} 
                      alt="After" 
                      className="absolute inset-0 h-full w-full object-cover object-top pointer-events-none"
                      loading="lazy"
                    />
                    
                    {/* Before Image Overlaid — Optimized Hardware Accelerated Width Mask */}
                    <div 
                      className="absolute inset-0 h-full overflow-hidden pointer-events-none will-change-[width]"
                      style={{ width: `${sliderPos}%` }}
                    >
                      <img 
                        src={item.beforeImage} 
                        alt="Before" 
                        className="absolute inset-0 h-full object-cover object-top pointer-events-none max-w-none"
                        style={{ width: '100%', minWidth: '100%' }}
                        loading="lazy"
                      />
                    </div>

                    {/* Slider Separator Control Bar Line */}
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-gold-500 pointer-events-none遭遇 will-change-[left]"
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gold-500 text-black p-1 rounded-full shadow-lg">
                        <ArrowLeftRight className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Labels */}
                    <span className="absolute bottom-3 left-3 bg-black/70 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase text-white border border-white/10 z-10">BEFORE</span>
                    <span className="absolute bottom-3 right-3 bg-gold-500 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase text-black z-10">AFTER</span>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLightbox(item);
                      }}
                      className="absolute top-3 right-3 bg-black/60 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded hover:bg-gold-500 hover:text-black z-10"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Descriptive Metadata Block */}
                  <div className="p-5 border-t border-zinc-900">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg tracking-tight text-white">{item.name}</h3>
                      <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 uppercase font-medium tracking-wider">{item.duration}</span>
                    </div>
                    <p className="text-xs text-gold-500 uppercase tracking-widest font-semibold mb-4">{item.programType}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs border-t border-zinc-900 pt-3 text-zinc-400">
                      <div>Before: <span className="text-white font-medium">{item.weightBefore}</span></div>
                      <div>After: <span className="text-white font-medium">{item.weightAfter}</span></div>
                    </div>
                    <div className="mt-3 bg-gold-500/10 border border-gold-500/20 text-center text-gold-400 py-1.5 text-xs font-bold uppercase tracking-wider">
                      Result: {item.result}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center p-4 backdrop-blur-sm"
          >
            <button 
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col md:flex-row gap-4 max-w-5xl w-full max-h-[70vh] overflow-y-auto md:overflow-hidden">
              <div className="flex-1 relative bg-zinc-900 aspect-[3/4] md:aspect-auto">
                <img src={activeLightbox.beforeImage} alt="Before" className="w-full h-full object-contain" />
                <span className="absolute bottom-4 left-4 bg-black/80 text-white font-bold px-3 py-1 text-xs tracking-widest border border-white/20">BEFORE PICTURE</span>
              </div>
              <div className="flex-1 relative bg-zinc-900 aspect-[3/4] md:aspect-auto">
                <img src={activeLightbox.afterImage} alt="After" className="w-full h-full object-contain" />
                <span className="absolute bottom-4 left-4 bg-gold-500 text-black font-bold px-3 py-1 text-xs tracking-widest">AFTER PICTURE</span>
              </div>
            </div>
            <div className="text-center mt-6 max-w-xl">
              <h3 className="text-2xl font-black uppercase text-white tracking-wide">{activeLightbox.name}</h3>
              <p className="text-gold-500 font-bold uppercase tracking-widest text-sm mt-1">{activeLightbox.programType} — {activeLightbox.result}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}