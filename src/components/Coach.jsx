import React from 'react';
import { Award, ShieldCheck, Star } from 'lucide-react';

export default function Coach() {
  // EDIT THESE STRING PARAMETERS TO MATCH YOUR PERSONAL PROFILE
  const coachDetails = {
    name: "GAJA", // Your name or brand title
    title: "Elite Physique & Performance Specialist",
    bioParagraph1: "I help ambitious individuals break through genetic plateaus, shed stubborn body fat, and construct elite, high-performance physiques. My approach completely strips away standard fitness guesswork, combining rigorous data-driven training metrics with sustainable nutrition protocols tailored around your active lifestyle.",
    bioParagraph2: "Whether you are stepping into a gym for the first time or looking to dial in elite body recomposition, I design your roadmap with one singular objective: delivering undeniable, life-changing physical results.",
    photoUrl: "/coach-profile.jpeg", // Replace this with a high-quality link to your own photo
    credentials: [
      "4+ Years of Dedicated Strength & Conditioning Experience",
      "100+ Successful Client Physical Transformations Engineered"
    ]
  };

  return (
    <section id="about" className="bg-obsidian-900 py-24 px-4 lg:px-12 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Premium Profile Photo Box */}
        <div className="lg:col-span-5 relative group mx-auto lg:mx-0 max-w-sm lg:max-w-none">
          <div className="absolute -inset-2 bg-gradient-to-r from-gold-600 to-gold-400 rounded opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-obsidian-800 border border-zinc-800 p-2 rounded overflow-hidden">
            <img 
              src={coachDetails.photoUrl} 
              alt={coachDetails.name} 
              className="w-full h-[450px] object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-obsidian-900/90 backdrop-blur-sm border border-zinc-800 p-4 text-center">
              <div className="text-gold-500 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-current" /> Certified Specialist <Star className="w-3 h-3 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Biography & Credentials */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs block mb-2">The Mindset Behind The Method</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">{coachDetails.name}</h2>
            <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-wider font-semibold">{coachDetails.title}</p>
          </div>

          <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed font-light">
            <p>{coachDetails.bioParagraph1}</p>
            <p>{coachDetails.bioParagraph2}</p>
          </div>

          <div className="border-t border-zinc-900 pt-6 space-y-3">
            <div className="text-xs font-bold uppercase text-white tracking-widest mb-2">Verified Professional Credentials</div>
            {coachDetails.credentials.map((cred, i) => (
              <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                <Award className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{cred}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}