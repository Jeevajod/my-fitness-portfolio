import React, { useState } from 'react';
import { MessageSquare, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', age: '', weight: '', goal: 'Fat Loss', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello! I want to start my transformation.%0A%0A*Name:* ${formData.name}%0A*Age:* ${formData.age}%0A*Weight:* ${formData.weight}%0A*Goal:* ${formData.goal}%0A*Phone:* ${formData.phone}`;
    window.open(`https://wa.me/916361660422?text=${text}`, '_blank'); 
  };

  return (
    <section id="contact" className="bg-obsidian-900 py-24 px-4 lg:px-12 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs block mb-2">Application Intake</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">Ready to Build Your Legacy?</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
            Complete the assessment file accurately. Upon audit, successful applicants are routed directly into private high-tier operational onboarding pipelines.
          </p>
          <div className="flex flex-col gap-4">
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-obsidian-800 border border-zinc-800 hover:border-gold-500 p-4 rounded text-zinc-300 transition-colors">
              <MessageSquare className="text-gold-500 w-5 h-5" />
              <div>
                <div className="text-xs uppercase font-bold text-white tracking-widest">Chat on WhatsApp</div>
                <div className="text-xs text-zinc-500">Instant direct response channel</div>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-obsidian-800 border border-zinc-800 hover:border-gold-500 p-4 rounded text-zinc-300 transition-colors">
              {/* Custom SVG fallback for Instagram to avoid Lucide package version mismatch errors entirely */}
              <svg className="text-gold-500 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <div>
                <div className="text-xs uppercase font-bold text-white tracking-widest">Follow on Instagram</div>
                <div className="text-xs text-zinc-500">@yourbrand portfolio network</div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-obsidian-800 border border-zinc-900 p-8 rounded shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2">Full Name</label>
              <input required type="text" className="w-full bg-obsidian-900 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-gold-500" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2">Age</label>
                <input required type="number" className="w-full bg-obsidian-900 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-gold-500" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2">Current Weight (KG)</label>
                <input required type="text" className="w-full bg-obsidian-900 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-gold-500" value={formData.weight} onChange={e => setFormData({...formData, weight: e.target.value})} />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2">Primary Fitness Goal</label>
              <select className="w-full bg-obsidian-900 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-gold-500" value={formData.goal} onChange={e => setFormData({...formData, goal: e.target.value})}>
                <option>Fat Loss</option>
                <option>Muscle Building</option>
                <option>Body Recomposition</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2">WhatsApp Contact Number</label>
              <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-obsidian-900 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-gold-500" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-gold-600 to-gold-500 text-black font-black uppercase text-xs tracking-widest py-4 rounded shadow-lg hover:opacity-90 transition-opacity">
              Start My Transformation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}