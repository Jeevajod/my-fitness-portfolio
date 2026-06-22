import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-obsidian-900 to-obsidian-900">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-gold-500 font-bold uppercase tracking-widest text-xs md:text-sm block mb-4">Premium Online Coaching</span>
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase">
          Transform Your Body,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Transform Your Life</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Personalized online coaching designed meticulously to help clients shred fat, build exceptional muscle, and engineer elite, life-changing results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#transformations" className="w-full sm:w-auto border border-gold-500 text-gold-500 px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-300">
            View Transformations
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-white text-black px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-gold-500 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            Apply For Coaching
          </a>
        </div>
      </motion.div>
    </section>
  );
}