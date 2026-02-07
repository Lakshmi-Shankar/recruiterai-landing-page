"use client";
import React from "react";
import { motion } from "framer-motion";

const FeedbackTitle = () => {
  return (
    <div className="text-center mb-12 md:mb-16 px-4 pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
      >
        Trusted by Hiring Managers
      </motion.h2>
    </div>
  );
};

export default FeedbackTitle;