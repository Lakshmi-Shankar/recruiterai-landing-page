"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircleQuestion } from "lucide-react";

export default function QuestionTitle() {
  return (
    <div className="relative text-center mb-16 px-4 pt-24">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-600 text-sm font-bold mb-8"
      >
        <Sparkles size={16} className="text-amber-400 fill-amber-400" />
        <span>Common Queries</span>
      </motion.div>

      <div className="relative inline-block">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight"
        >
          Frequently Asked <br className="md:hidden" />
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
            Questions
            {/* Underline Decoration */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </motion.h2>

        {/* Floating Decorative Icon */}
        <motion.div
            className="absolute -top-8 -right-8 hidden md:block text-blue-500/20 rotate-12"
            animate={{ y: [-10, 10] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
            <MessageCircleQuestion size={64} />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
      >
        Everything you need to know about the platform. <br className="hidden md:block"/>
        Can’t find the answer? Chat with our team.
      </motion.p>
    </div>
  );
}