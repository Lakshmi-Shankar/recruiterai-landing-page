"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap, BarChart3 } from "lucide-react";

const BottomBar = () => {
  // Data mapped from 'image_f16bde.jpg' (Benefit Cards Reference)
  const cards = [
    {
      icon: Clock,
      label: "Save Time",
      desc: "Automate manual tasks.",
      stats: [
        { label: "Faster Screening", val: "10x" },
        { label: "Faster Time-to-Hire", val: "70%" },
      ],
      color: "bg-blue-50 text-blue-600",
      delay: 0,
    },
    {
      icon: Zap,
      label: "Hire Better",
      desc: "Improve candidate quality.",
      stats: [
        { label: "Completion Rate", val: "95%" },
        { label: "Qualified Applicants", val: "89%" },
      ],
      color: "bg-purple-50 text-purple-600",
      delay: 0.1,
    },
    {
      icon: BarChart3,
      label: "Scale Effortlessly",
      desc: "Grow without the overhead.",
      stats: [
        { label: "Interview Capacity", val: "25x" },
        { label: "Lower Costs", val: "80%" },
      ],
      color: "bg-emerald-50 text-emerald-600",
      delay: 0.2,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: card.delay, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color}`}>
                <card.icon size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg leading-tight">
                  {card.label}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {card.desc}
                </p>
              </div>
            </div>

            {/* Stats Divider */}
            <div className="w-full h-px bg-slate-100 mb-4" />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {card.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {stat.val}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;