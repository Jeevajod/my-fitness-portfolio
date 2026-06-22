import React from 'react';
import { ShieldCheck, Flame, Zap, Dumbbell, Calendar, MessageSquare } from 'lucide-react';

const featureList = [
  { icon: <Dumbbell />, title: "Precision Training Modules", desc: "Customized down to structural mechanics and movement availability." },
  { icon: <Flame />, title: "Bio-Adaptive Nutrition Plans", desc: "No starvation. Flexible frameworks built tailored completely around your lifestyle." },
  { icon: <ShieldCheck />, title: "Weekly Strategy Audits", desc: "Granular weekly metric breakdowns to guarantee progress never stalls." },
  { icon: <MessageSquare />, title: "Direct WhatsApp Line", desc: "Unrestricted access directly to me for immediate support and guidance." },
  { icon: <Zap />, title: "Form Calibration Analysis", desc: "Send your lift videos for deep biomechanical assessments and updates." },
  { icon: <Calendar />, title: "Mindset & Habits Architecture", desc: "Systematically rewiring behaviors to ensure long-term elite retention." }
];

export default function Features() {
  return (
    <section className="bg-obsidian-900 py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs block mb-2">The Architecture</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Why This Process Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <div key={i} className="bg-obsidian-800 border border-zinc-900 p-6 flex items-start gap-4">
              <div className="text-gold-500 bg-gold-500/10 p-3 rounded">{f.icon}</div>
              <div>
                <h4 className="font-bold text-white text-base mb-1 uppercase tracking-wide">{f.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}