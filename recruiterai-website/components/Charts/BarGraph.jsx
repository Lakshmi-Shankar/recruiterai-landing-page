"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BarGraph = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Data updated based on the provided reference images (Table & Cards)
  const data = [
    { 
      label: "Screening", 
      value: "10x", 
      height: 40, 
      fullLabel: "Faster Screening",
      desc: "AI parses and ranks 250+ applications per day vs 25 manually."
    },
    { 
      label: "Speed", 
      value: "70%", 
      height: 65, 
      fullLabel: "Faster Time-to-Hire",
      desc: "Average hiring timeline drops from 42 days to just 12 days."
    },
    { 
      label: "Capacity", 
      value: "25x", 
      height: 85, 
      fullLabel: "Interview Capacity",
      desc: "AI conducts 200+ automated screening interviews daily vs 8 manual calls."
    },
    { 
      label: "Completion", 
      value: "95%", 
      height: 100, 
      fullLabel: "App Completion",
      desc: "Smart application forms reduce candidate drop-off dramatically."
    },
    { 
      label: "Quality", 
      value: "89%", 
      height: 90, 
      fullLabel: "Qualified Applicants",
      desc: "AI job description optimizer attracts higher-quality candidate pipelines."
    },
    { 
      label: "Costs", 
      value: "80%", 
      height: 75, 
      fullLabel: "Lower Expenses",
      desc: "Reduced costs vs traditional recruiting agencies and software subscriptions."
    },
    { 
      label: "Accuracy", 
      value: "50%", 
      height: 55, 
      fullLabel: "Fewer Mistakes",
      desc: "AI skills assessment and matching improves hiring accuracy dramatically."
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-20">
      
      {/* Header text based on context */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-slate-900">Proven Results</h3>
        <p className="text-slate-500">Real metrics from hiring teams using RecruiterAI</p>
      </div>

      <div className="relative flex justify-between items-end h-[350px] md:h-[450px] w-full gap-2 md:gap-4 lg:gap-8">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="relative flex flex-col items-center justify-end w-full h-full group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            
            {/* Value Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + (index * 0.1), duration: 0.4 }}
              className="text-blue-600 font-bold text-sm md:text-xl mb-3 group-hover:scale-110 transition-transform"
            >
              {item.value}
            </motion.span>

            {/* The Bar */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${item.height}%` }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1, 
                type: "spring", 
                bounce: 0.2 
              }}
              className="w-full max-w-[60px] rounded-t-lg bg-gradient-to-b from-blue-400 to-blue-600 relative shadow-lg shadow-blue-500/20 group-hover:from-blue-500 group-hover:to-blue-700 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* X-Axis Label */}
            <p className="mt-4 text-[10px] md:text-sm font-semibold text-slate-500 uppercase tracking-wide text-center">
              {item.label}
            </p>

            {/* --- TOOLTIP (Shows the card content from reference image) --- */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-4 w-[200px] md:w-[260px] bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-50 pointer-events-none"
                  style={{ left: '50%', x: '-50%' }}
                >
                  <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-b border-r border-slate-100"></div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{item.fullLabel}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BarGraph;