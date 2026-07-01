import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Programs from './components/Programs';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import AdminDashboard from './components/AdminDashboard';
import { initialTransformations, initialTestimonials } from './mockData';
import Coach from './components/Coach';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  // Safe Fallback initialization for Client Transformations gallery
  const [transformations, setTransformations] = useState(() => {
    const local = localStorage.getItem('coach_transformations');
    if (local) {
      const parsed = JSON.parse(local);
      return parsed.length > 0 ? parsed : initialTransformations;
    }
    return initialTransformations;
  });

  // Safe Fallback initialization for Success Testimonials
  const [testimonials, setTestimonials] = useState(() => {
    const local = localStorage.getItem('coach_testimonials');
    if (local) {
      const parsed = JSON.parse(local);
      return parsed.length > 0 ? parsed : initialTestimonials;
    }
    return initialTestimonials;
  });

  useEffect(() => {
    localStorage.setItem('coach_transformations', JSON.stringify(transformations));
  }, [transformations]);

  useEffect(() => {
    localStorage.setItem('coach_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  return (
    <div className="bg-obsidian-900 text-white min-h-screen relative overflow-x-hidden font-sans">
      <Navbar onAdminClick={() => setIsAdminOpen(true)} />
      
      <main>
        <Hero />
        <Metrics />
        <Gallery transformations={transformations} />
        <Coach /> 
        <Testimonials testimonials={testimonials} />
        <Programs />
        <Features />
        <FAQ />
        <Contact />
      </main>

      <FloatingCTA />

      {/* Admin Panel Modal Overlay */}
      {isAdminOpen && (
        <AdminDashboard 
          transformations={transformations} 
          setTransformations={setTransformations}
          testimonials={testimonials}
          setTestimonials={setTestimonials}
          onClose={() => setIsAdminOpen(false)} 
        />
      )}

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        © {new Date().getFullYear()} Premium Coaching Brand. All Rights Reserved.
      </footer>
    </div>
  );
}