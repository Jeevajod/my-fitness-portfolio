import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How does online coaching work?", a: "You receive your custom training, target macros, and access protocols via our application stack. Every week you submit your check-in metrics, biofeedback tracking, and videos. I meticulously audit your data and upgrade your plans accordingly." },
  { q: "Do I need gym access?", a: "No. I engineer elite frameworks optimized for fully equipped commercial facilities, home setups, or completely bodyweight calisthenics protocols." },
  { q: "Can complete beginners join?", a: "Yes. The programming maps foundations comprehensively. I guide you through fundamental mechanical patterns, introductory nutritional scaling, and safe progressive systems." },
  { q: "How often do we communicate?", a: "Formally, via check-in deep-dives weekly. Informally, you have ongoing, unfettered access to me via priority WhatsApp for day-to-day dynamic queries." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="bg-obsidian-700 py-24 px-4 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs block mb-2">Information Center</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Frequently Asked Queries</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-obsidian-800 border border-zinc-900 rounded overflow-hidden">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-white uppercase text-sm tracking-wide"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}