"use client";
import React from "react";
import { motion } from "framer-motion";

const ChartTitle = () => {
  return (
    <div className="text-center mb-12 md:mb-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4"
      >
        The RecruiterAI Advantage
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-slate-600 font-medium"
      >
        Metrics that matter to your business.
      </motion.p>
    </div>
  );
};

export default ChartTitle;