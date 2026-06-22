import React from 'react';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <a 
        href="#contact" 
        className="bg-gold-500 text-black font-black uppercase text-xs tracking-widest px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] block border border-black/10"
      >
        Apply Now
      </a>
    </div>
  );
}