"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

// --- Typing Effect ---
const TypingText = ({ text, delay = 0 }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay + 1.5 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.p
      className="text-sm text-gray-600 italic leading-relaxed"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((c, i) => (
        <motion.span key={i} variants={child}>
          {c}
        </motion.span>
      ))}
    </motion.p>
  );
};

const FloatingCard = ({
  name,
  role,
  image,
  tag,
  quote,
  className = "",
  delay = 0,
  variant = "top-left", 
}) => {
  const isLeft = variant.includes("left");
  const isRight = variant.includes("right");

  // --- POSITIONING LOGIC ---
  const positionClasses = {
    "top-left": "top-40 left-4 xl:left-80",
    "top-right": "top-24 right-4 xl:right-80",
    "bottom-left": "bottom-20 left-4 xl:left-30",
    "bottom-right": "bottom-40 right-4 xl:right-40",
  };

  // --- LAYOUT CONFIG ---
  const config = {
    left: {
      container: "flex-col items-end", 
      quoteAlign: "self-start", 
      svgStyle: {
        right: "50%", 
        top: "35px",  
        width: "240px",
        height: "180px",
      },
      viewBox: "0 0 3 140",
      path: "M 140 2 H 20 A 18 18 0 0 0 2 20 V 80", 
    },
    right: {
      container: "flex-col items-start", 
      quoteAlign: "self-end", 
      svgStyle: {
        left: "39%",
        top: "35px",
        width: "180px",
        height: "180px",
      },
      viewBox: "0 0 161.3 140",
      path: "M 0 2 H 120 A 18 18 0 0 1 138 20 V 80",
    },
  };

  const currentConfig = isLeft ? config.left : config.right;

  return (
    <motion.div
      // OPTIMIZATION 1: 'willChange' forces GPU acceleration
      style={{ willChange: "transform" }}
      className={`absolute z-20 flex ${currentConfig.container} ${positionClasses[variant]} w-full max-w-[320px] pointer-events-auto ${className}`}
      animate={{ y: [-15, 15] }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay: 1,
      }}
    >
      {/* --- CONNECTOR LINE SVG --- */}
      <motion.svg
        className="absolute hidden md:block pointer-events-none z-0"
        style={currentConfig.svgStyle}
        viewBox={currentConfig.viewBox}
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        // OPTIMIZATION 2: 'once: true' prevents scroll lag by not re-drawing the line
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeOut" }}
      >
        <path
          d={currentConfig.path}
          stroke="#CBD5E1" 
          strokeWidth="2"
          fill="none"
        />
        <circle 
            cx={isLeft ? 140 : 0} 
            cy="2" 
            r="3" 
            fill="#94A3B8" 
        />
      </motion.svg>

      {/* --- PROFILE CARD --- */}
      <div 
        className="relative bg-white p-3 rounded-2xl shadow-lg border border-gray-100 z-10 w-[240px]"
        // OPTIMIZATION 3: Prevents text blur during 3D/transform movement
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className={`flex items-center mb-3 ${isRight ? "flex-row-reverse text-right" : ""}`}>
          <img
            src={`/Avatars/${name}.png`}
            alt={name}
            className={`w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm ${
              isRight ? "ml-3" : "mr-3"
            }`}
          />
          <div>
            <h4 className="font-bold text-gray-900 text-sm leading-tight">{name}</h4>
            <p className="text-xs text-gray-500 font-medium">{role}</p>
          </div>
        </div>

        <div className={isRight ? "text-right" : "text-left"}>
          <span
            className={`inline-block text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide ${
              tag.includes("TIME") ? "bg-red-50 text-red-600" :
              tag.includes("HOURS") ? "bg-orange-50 text-orange-600" :
              tag.includes("USE") ? "bg-purple-50 text-purple-600" :
              "bg-pink-50 text-pink-600"
            }`}
          >
            {tag}
          </span>
        </div>
      </div>

      {/* --- QUOTE CARD --- */}
      <div
        className={`relative mt-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 w-[260px] z-10 ${currentConfig.quoteAlign}`}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div 
            className={`absolute -top-2 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45 ${
               isLeft ? "left-8" : "right-8" 
            }`} 
        />
        <TypingText text={`"${quote}"`} delay={delay} />
      </div>
    </motion.div>
  );
};

// OPTIMIZATION 4: Memoize to prevent re-renders from parent updates
export default memo(FloatingCard);