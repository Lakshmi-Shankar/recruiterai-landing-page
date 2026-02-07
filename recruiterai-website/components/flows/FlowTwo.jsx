"use client";
import React from "react";
import { motion } from "framer-motion";
import { Video, UserCheck, MessageSquare, Mail } from "lucide-react";

const FlowTwo = () => {
  return (
    <div className="h-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col relative">
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
           <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
           <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <span className="ml-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Interview Loop
        </span>
      </div>

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <div className="w-12 border-r border-slate-100 flex flex-col items-center py-4 gap-4 bg-slate-50/50">
          {[Video, MessageSquare, Mail].map((Icon, i) => (
            <div key={i} className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer">
              <Icon size={18} />
            </div>
          ))}
        </div>

        {/* Canvas */}
        <div className="flex-1 p-6 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex flex-col items-center">
          
          {/* --- NODE 1: Candidate Joins --- */}
          <div className="relative z-10 bg-white border border-slate-200 p-2 px-4 rounded-full shadow-sm flex items-center gap-2 mb-8">
             <UserCheck size={14} className="text-slate-500" />
             <span className="text-xs font-bold text-slate-700">Candidate Joins</span>
             
             {/* Connector Line 1 (Vertical Down) */}
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: 32 }}
               className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 bg-slate-300 -z-10"
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
             />
          </div>

          {/* --- SPLIT SECTION (Node 2 & 3) --- */}
          <div className="relative w-full h-full flex flex-col">
            
            {/* SVG Connector Overlay (Draws the line between Node 2 and Node 3) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-0">
              <motion.path 
                d="M 40 40 V 80 C 40 100 40 100 60 100 H 140 C 160 100 160 100 160 120 V 140"
                fill="none" 
                stroke="#cbd5e1" // slate-300
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
              />
            </svg>

            {/* --- NODE 2: AI Video (Left aligned) --- */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="self-start ml-2 relative z-10 w-[180px] bg-white border-l-4 border-l-purple-500 border border-slate-200 p-3 rounded-xl shadow-sm"
            >
               <div className="flex items-center gap-2 mb-2">
                  <Video size={16} className="text-purple-600" />
                  <span className="text-[10px] font-bold uppercase text-slate-400">Step 1</span>
               </div>
               <div className="text-xs font-bold text-slate-800">AI Video Interview</div>
            </motion.div>

            {/* --- NODE 3: Offer Sent (Right aligned) --- */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 1.8 }} // Appears after line finishes drawing
               className="self-end mr-2 mt-16 relative z-10 w-[160px] bg-white border-l-4 border-l-green-500 border border-slate-200 p-3 rounded-xl shadow-sm"
            >
               <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} className="text-green-600" />
                  <span className="text-[10px] font-bold uppercase text-slate-400">Step 2</span>
               </div>
               <div className="text-xs font-bold text-slate-800">Offer Sent</div>
            </motion.div>

          </div>

        </div>
      </div>
      
      <div className="bg-white border-t border-slate-100 p-3 text-center">
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold">
            Time to hire: 12 days
         </div>
      </div>
    </div>
  );
};

export default FlowTwo;