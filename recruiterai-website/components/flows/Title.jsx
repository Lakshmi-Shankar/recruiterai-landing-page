"use client";
import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="text-center mb-16 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4"
      >
        AI Recruiting Software That Works <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Like Your Own HR Team
        </span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-slate-600 max-w-2xl mx-auto"
      >
        Three simple flows that explain exactly what RecruiterAI does for you.
      </motion.p>
    </div>
  );
};

export default Title;