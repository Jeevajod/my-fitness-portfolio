import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="bg-obsidian-900 py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs block mb-2">Client Experience</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Voices of Success</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map(item => (
            <div key={item.id} className="bg-obsidian-800 border border-zinc-900 p-6 md:p-8 rounded relative hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-gold-500" />
                <div>
                  <h4 className="font-bold text-white tracking-tight">{item.name}</h4>
                  <div className="flex gap-1 text-gold-500 mt-0.5">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 italic text-sm leading-relaxed">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}