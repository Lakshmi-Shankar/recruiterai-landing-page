"use client";

import React from 'react';
import Button from './Button'; // Assuming you have this
import FloatingCard from './FloatingCard';

const cardsData = [
  {
    id: 1,
    name: "Sarah K",
    role: "Founder at TechStart",
    image: "https://i.pravatar.cc/150?img=32",
    tag: "SLOW HIRING",
    quote: "I used to wait 3 months to fill a position. Now it's done in 3 weeks. The automated screening is a game-changer.",
    variant: "top-left", // Triggers internal positioning & elbow connector
    delay: 0,
  },
  {
    id: 2,
    name: "Rahul M",
    role: "Hiring Manager at GrowthCo",
    image: "https://i.pravatar.cc/150?img=11",
    tag: "OVERWHELMED",
    quote: "Saved 20+ hours a week. It feels like having a full-time recruiter working 24/7 without the overhead.",
    variant: "top-right",
    delay: 1.2,
  },
  {
    id: 3,
    name: "Priya S",
    role: "COO at Innovate Ltd",
    image: "https://i.pravatar.cc/150?img=5",
    tag: "ROLE CONFLICT",
    quote: "The dashboard gives me exactly what I need to know. No more clunky spreadsheets.",
    variant: "bottom-left",
    delay: 0.6,
  },
  {
    id: 4,
    name: "Amit T",
    role: "Head of HR at ScaleUp",
    image: "https://i.pravatar.cc/150?img=68",
    tag: "MISSED OUT",
    quote: "Time-to-hire dropped 50%. The candidate quality has never been better.",
    variant: "bottom-right",
    delay: 1.8,
  },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#EBF8FF] via-blue-200 to-white overflow-hidden pt-24 pb-20 lg:py-0">
      
      {/* 1. Main Text Content (Centered & Z-Indexed above cards) */}
      <div className="relative z-30 container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Every Hire, <br className="hidden md:block" />
          <span className="text-blue-600">Faster and Better</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on the people.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="primary" className="px-8 py-4 text-lg shadow-blue-500/25">
            Start Hiring Smarter
          </Button>
          <Button variant="secondary" className="px-8 py-4 text-lg">
            See How It Works
          </Button>
        </div>
      </div>

      {/* 2. Floating Cards Layer (Desktop Only) */}
      {/* We hide this on mobile (hidden) and show on large screens (lg:block) 
          because the complex SVG connectors need space to breathe. */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20">
        {cardsData.map((card) => (
          <FloatingCard 
            key={card.id} 
            {...card} 
            // The FloatingCard component handles its own absolute positioning
            // based on the 'variant' prop passed above.
          />
        ))}
      </div>

      {/* 3. Mobile/Tablet Alternative (Optional) */}
      {/* On small screens, you might want to show just the testimonials stacked below */}
      <div className="lg:hidden mt-16 px-4 w-full grid gap-6">
         {cardsData.slice(0, 4).map((card) => (
            <div key={card.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
               <div className="flex items-center gap-3 mb-3">
                  <img src={card.image} alt={card.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-slate-900">{card.name}</div>
                    <div className="text-xs text-slate-500">{card.role}</div>
                  </div>
               </div>
               <p className="text-slate-600 italic text-sm">"{card.quote}"</p>
            </div>
         ))}
      </div>

    </section>
  );
};

export default Hero;