import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function Navbar({ onAdminClick }) {
  return (
    <nav className="sticky top-0 z-40 bg-obsidian-900/90 backdrop-blur-md border-b border-zinc-900 px-4 lg:px-12 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={onAdminClick}>
        <span className="text-xl font-black tracking-widest text-white">CHAMP<span className="text-gold-500">FIT</span></span>
        <ShieldAlert className="w-3 h-3 text-zinc-700 hover:text-gold-500 transition-colors" />
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-zinc-400">
        <a href="#home" className="hover:text-gold-500 transition-colors">Home</a>
        <a href="#transformations" className="hover:text-gold-500 transition-colors">Transformations</a>
        <a href="#testimonials" className="hover:text-gold-500 transition-colors">Testimonials</a>
        <a href="#coaching" className="hover:text-gold-500 transition-colors">Coaching</a>
        <a href="#faq" className="hover:text-gold-500 transition-colors">FAQ</a>
      </div>
      <a href="#contact" className="bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold uppercase text-xs tracking-wider px-5 py-2.5 rounded hover:scale-105 transition-transform">
        Apply For Coaching
      </a>
    </nav>
  );
}