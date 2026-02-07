"use client";
import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Video, ClipboardCheck, MailCheck } from "lucide-react";

const FlowTwo = () => {
  // Steps mapped from Flowchart 2 (image_f2359d.jpg)
  const steps = [
    { 
      icon: UserCheck, 
      label: "Invite", 
      sub: "Accepted",
      color: "bg-slate-100 text-slate-600 border-slate-200" 
    },
    { 
      icon: Video, 
      label: "AI Video", 
      sub: "Round 1",
      color: "bg-blue-50 text-blue-600 border-blue-100" 
    },
    { 
      icon: ClipboardCheck, 
      label: "Scoring", 
      sub: "Score > 80%",
      color: "bg-amber-50 text-amber-600 border-amber-100" 
    },
    { 
      icon: MailCheck, 
      label: "Offer", 
      sub: "Auto-Sent",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100" 
    },
  ];

  return (
    <div className="relative h-full bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group hover:border-blue-300 hover:shadow-xl transition-all duration-300">
      
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-purple-100/50 transition-colors" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Video size={20} className="text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Interview Automation</h3>
        </div>
        <p className="text-slate-500 text-sm mb-10 leading-relaxed">
          Syncs candidates and interviewers perfectly. No more lost feedback or delays.
        </p>

        {/* --- ANIMATED FLOW CHART --- */}
        <div className="relative flex justify-between items-start mb-6">
          
          {/* Base Gray Line */}
          <div className="absolute top-6 left-4 right-4 h-0.5 bg-slate-100 rounded-full" />
          
          {/* Animated Progress Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-6 left-4 h-0.5 bg-gradient-to-r from-purple-400 to-emerald-500 rounded-full"
          />

          {/* Moving Data Packet Dot */}
          <motion.div
            className="absolute top-[21px] left-4 w-2 h-2 bg-purple-600 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.8)] z-20"
            animate={{ left: ["0%", "95%"], opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 2.5, 
              ease: "linear",  
              repeatDelay: 1 
            }}
          />
          
          {/* Steps Icons */}
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
         </div>
         <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Impact</p>
            <p className="text-sm font-semibold text-slate-700 leading-snug">
              Reduce time-to-hire from <span className="line-through opacity-50">42 days</span> to <span className="text-green-600 font-bold">12 days</span>.
            </p>
         </div>
      </div>
    </div>
  );
};

export default FlowTwo;