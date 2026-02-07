"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does the AI screening actually work?",
    a: "Our AI analyzes resumes against your job requirements using natural language processing. It evaluates skills, experience, education, and cultural fit indicators to generate a match score for each candidate. It processes 250+ applications in under 5 minutes.",
  },
  {
    q: "Can I customize the evaluation criteria?",
    a: "Absolutely. You can set custom weights for different skills, adjust minimum experience thresholds, add must-have qualifications, and define your own scoring rubric. The AI learns from your preferences over time.",
  },
  {
    q: "How long does it take to set up?",
    a: "Most teams are fully operational within 30 minutes. Our onboarding wizard guides you through connecting your job boards, importing existing candidates, and configuring your first job posting.",
  },
  {
    q: "Is my candidate data secure?",
    a: "We are SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit. We never share or sell candidate data, and you can request full data deletion at any time.",
  },
  {
    q: "What integrations do you support?",
    a: "We integrate with all major ATS platforms (Greenhouse, Lever, Workday), job boards (LinkedIn, Indeed, Glassdoor), calendar tools (Google Calendar, Outlook), and communication platforms (Slack, Teams).",
  },
  {
    q: "What if a candidate was rejected before but fits a new role?",
    a: "Our Talent Rediscovery feature automatically resurfaces past candidates when new roles match their profile. You never lose a great candidate just because the timing was not right the first time.",
  },
];

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 max-w-3xl pb-24">
      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              layout // This prop makes the height change buttery smooth
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative border rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen 
                  ? "bg-gradient-to-r from-blue-50/50 to-white border-blue-200 shadow-xl shadow-blue-900/5" 
                  : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              {/* Active State Accent Bar */}
              <div 
                className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
              />

              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  {/* Subtle Question Number */}
                  <span className={`text-sm font-mono font-bold transition-colors ${isOpen ? "text-blue-600" : "text-slate-300"}`}>
                    0{i + 1}
                  </span>
                  
                  <span 
                    className={`text-lg font-bold transition-colors duration-300 ${
                      isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-blue-600"
                    }`}
                  >
                    {faq.q}
                  </span>
                </div>
                
                {/* Animated Icon Container */}
                <div className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                    isOpen 
                    ? "bg-blue-600 text-white rotate-180" 
                    : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                }`}>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 pt-0 pl-[3.5rem] pr-8">
                        <p className="text-slate-600 leading-relaxed text-base">
                            {faq.a}
                        </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}