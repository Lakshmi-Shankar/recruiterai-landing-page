"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, ScanSearch, CheckCircle2, Calendar } from "lucide-react";

const FlowOne = () => {
  return (
    <div className="h-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col relative">
      {/* --- HEADER (Window Bar) --- */}
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="ml-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Screening Workflow
        </span>
      </div>

      <div className="flex flex-1 relative">
        {/* --- SIDEBAR (Tools) --- */}
        <div className="w-12 border-r border-slate-100 flex flex-col items-center py-4 gap-4 bg-slate-50/50">
          {[FileText, ScanSearch, CheckCircle2].map((Icon, i) => (
            <div key={i} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
              <Icon size={18} />
            </div>
          ))}
        </div>

        {/* --- CANVAS (The Flow) --- */}
        <div className="flex-1 p-6 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          
          {/* Connector Line (Curved SVG) */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
             <motion.path 
               d="M 40 40 V 100 C 40 120 40 120 70 120 H 120" 
               fill="none" 
               stroke="#cbd5e1" 
               strokeWidth="2"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
             />
             <motion.path 
               d="M 160 160 V 200" 
               fill="none" 
               stroke="#cbd5e1" 
               strokeWidth="2" 
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 1 }}
             />
          </svg>

          <div className="relative z-10 flex flex-col gap-6">
            
            {/* Node 1: Trigger */}
            <motion.div 
               initial={{ y: 10, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="self-start flex items-center gap-3 bg-white border border-slate-200 p-3 rounded-xl shadow-sm w-fit"
            >
              <div className="bg-orange-100 p-1.5 rounded-lg text-orange-600">
                <FileText size={16} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Trigger</div>
                <div className="text-xs font-bold text-slate-800">New Application</div>
              </div>
            </motion.div>

            {/* Node 2: Action (Offset) */}
            <motion.div 
               initial={{ x: -10, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="ml-12 flex items-center gap-3 bg-white border-l-4 border-l-blue-500 border-y border-r border-slate-200 p-3 rounded-xl shadow-sm w-fit"
            >
               <div className="bg-blue-50 p-1.5 rounded-lg text-blue-600">
                  <ScanSearch size={16} />
               </div>
               <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">AI Action</div>
                  <div className="text-xs font-bold text-slate-800">Screen & Rank Top 20%</div>
               </div>
            </motion.div>

            {/* Node 3: Result */}
            <motion.div 
               initial={{ y: -10, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 1 }}
               className="self-center flex flex-col items-center bg-green-50 border border-green-200 p-3 rounded-xl w-full text-center mt-2"
            >
               <Calendar size={20} className="text-green-600 mb-1" />
               <div className="text-xs font-bold text-green-800">Auto-Schedule Interview</div>
            </motion.div>

          </div>
        </div>
      </div>
      
      {/* Footer Benefit */}
      <div className="bg-white border-t border-slate-100 p-3 text-center">
         <p className="text-xs text-slate-500">
            <span className="font-bold text-slate-800">Result:</span> 250+ resumes processed in minutes.
         </p>
      </div>
    </div>
  );
};

export default FlowOne;