"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileUser, ScanSearch, CheckCircle2, CalendarClock } from "lucide-react";

const FlowOne = () => {
  // Steps mapped from your flowchart image
  const steps = [
    { 
      icon: FileUser, 
      label: "New App", 
      sub: "Resume In",
      color: "bg-blue-50 text-blue-600 border-blue-100" 
    },
    { 
      icon: ScanSearch, 
      label: "AI Screen", 
      sub: "Ranks Top 20%",
      color: "bg-purple-50 text-purple-600 border-purple-100" 
    },
    { 
      icon: CheckCircle2, 
      label: "Qualify", 
      sub: "Score > 75%",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100" 
    },
    { 
      icon: CalendarClock, 
      label: "Schedule", 
      sub: "Auto-Link Sent",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100" 
    },
  ];

  return (
    <div className="relative h-full bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group hover:border-blue-300 hover:shadow-xl transition-all duration-300">
      
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-100/50 transition-colors" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <ScanSearch size={20} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Automated Screening</h3>
        </div>
        <p className="text-slate-500 text-sm mb-10 leading-relaxed">
          The AI filters noise and auto-schedules the top 20% matches instantly.
        </p>

        {/* --- ANIMATED FLOW CHART --- */}
        <div className="relative flex justify-between items-start mb-6">
          
          {/* 1. The Base Gray Line */}
          <div className="absolute top-6 left-4 right-4 h-0.5 bg-slate-100 rounded-full" />
          
          {/* 2. The Animated Progress Line (Draws across) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-6 left-4 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
          />

          {/* 3. The Moving "Data Packet" Dot (Loops) */}
          <motion.div
            className="absolute top-[21px] left-4 w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)] z-20"
            animate={{ left: ["0%", "95%"], opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 2.5, 
              ease: "linear", 
              repeatDelay: 1 
            }}
          />
          
          {/* 4. The Steps Icons */}
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3, type: "spring", stiffness: 260, damping: 20 }}
                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center mb-3 shadow-sm bg-white ${step.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <step.icon size={20} strokeWidth={2.5} />
              </motion.div>
              
              <div className="text-center">
                <p className="text-xs font-bold text-slate-800 mb-0.5">{step.label}</p>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefit Highlight Box */}
      <div className="relative z-10 bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
         <div className="mt-0.5 min-w-[16px]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
         </div>
         <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Impact</p>
            <p className="text-sm font-semibold text-slate-700 leading-snug">
              Screen <span className="text-blue-600 font-bold">250+ applications</span> in minutes vs. 8 hours manually.
            </p>
         </div>
      </div>
    </div>
  );
};

export default FlowOne;