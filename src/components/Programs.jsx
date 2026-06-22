import React from 'react';
import { Check } from 'lucide-react';

const programs = [
  {
    title: "Fat Loss Blueprint",
    price: "Custom Tier",
    features: ["Bespoke macro breakdown", "Precision metabolic training plans", "Weekly video check-ins & form critique", "Direct 24/7 WhatsApp priority access"]
  },
  {
    title: "Hypertrophy Mastery",
    price: "Custom Tier",
    features: ["Progressive overload scaling systems", "High-tier hypertrophy workout builds", "Bio-feedback tracking parameters", "Supplement optimization frameworks"]
  },
  {
    title: "Elite Recomposition",
    price: "Custom Premium",
    features: ["Simultaneous fat loss & muscle construction", "Advanced structural nutrition modeling", "Custom dynamic lifestyle alignment", "Premium operational transformation guarantee"]
  }
];

export default function Programs() {
  return (
    <section id="coaching" className="bg-obsidian-700 py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs block mb-2">Coaching Frameworks</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Select Your Protocol</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-obsidian-800 border border-zinc-900 p-8 rounded flex flex-col justify-between hover:border-gold-500 transition-all duration-300 relative group">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">{prog.title}</h3>
                <div className="text-2xl font-black text-gold-500 mb-6">{prog.price}</div>
                <ul className="space-y-4 mb-8">
                  {prog.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-400">
                      <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="w-full text-center bg-zinc-900 border border-zinc-800 hover:border-gold-500 text-white font-bold uppercase text-xs tracking-widest py-3 transition-colors group-hover:bg-gold-500 group-hover:text-black">
                Apply For Intake
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}