"use client";
import React from "react";
import { motion } from "framer-motion";
import { Archive, Database, RefreshCw, Bell } from "lucide-react";

const FlowThree = () => {
  return (
    <div className="h-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col relative">
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
         <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
         <span className="ml-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Re-engagement Automation
        </span>
      </div>

      <div className="flex flex-1 relative">
        <div className="w-12 border-r border-slate-100 flex flex-col items-center py-4 gap-4 bg-slate-50/50">
          {[Archive, Database, Bell].map((Icon, i) => (
            <div key={i} className="p-2 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <Icon size={18} />
            </div>
          ))}
        </div>

        <div className="flex-1 p-6 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex flex-col justify-between">
          
          {/* --- ANIMATED CONNECTORS --- */}
          
          {/* 1. Base Static Dashed Line (The Track) */}
          <div className="absolute left-[45px] top-[60px] bottom-[60px] w-0.5 border-l-2 border-dashed border-slate-200 z-0" />

          {/* 2. Animated Filling Line (The Progress) */}
          <motion.div 
             initial={{ height: 0 }}
             whileInView={{ height: "calc(100% - 120px)" }} // Calculates height based on top/bottom padding
             viewport={{ once: true }}
             transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
             className="absolute left-[45px] top-[60px] w-0.5 bg-gradient-to-b from-orange-400 to-green-500 z-0 origin-top"
          />

          {/* --- NODE 1: Archive --- */}
          <div className="relative z-10 flex items-center gap-3">
             <div className="w-10 h-10 shrink-0 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 border border-orange-200">
                <Archive size={18} />
             </div>
             <div className="bg-white border border-slate-100 p-2 rounded-lg shadow-sm">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Trigger</div>
                <div className="text-xs font-medium text-slate-800">Rejected (Silver Medalist)</div>
             </div>
          </div>

          {/* --- MIDDLE: Waiting Period --- */}
          <div className="ml-14 py-2 relative z-10">
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 1 }}
               className="bg-slate-50 px-3 py-1.5 rounded-full text-[10px] font-semibold text-slate-500 w-fit border border-slate-200"
             >
                Wait 3 Months...
             </motion.div>
          </div>

          {/* --- NODE 2: Reactivation --- */}
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1.5 }}
             className="relative z-10 flex items-center gap-3"
          >
             <div className="w-10 h-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-600 border border-green-200">
                <RefreshCw size={18} />
             </div>
             
             <div className="bg-white border border-green-200 shadow-sm p-3 rounded-xl">
                <div className="text-[10px] font-bold text-green-600 uppercase">Match Found</div>
                <div className="text-xs font-bold text-slate-800">New Role Invite Sent</div>
             </div>
          </motion.div>

        </div>
      </div>
      
      <div className="bg-white border-t border-slate-100 p-3 text-center">
         <p className="text-xs text-slate-500">Never start from zero.</p>
      </div>
    </div>
  );
};

export default FlowThree;