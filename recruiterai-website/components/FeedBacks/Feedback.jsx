"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Feedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Mehta",
      role: "Founder, TechStart Solutions",
      image: "https://i.pravatar.cc/150?img=11", 
      quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
      stars: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Talent, GrowthCo",
      image: "https://i.pravatar.cc/150?img=5",
      quote: "I saved 20+ hours a week. It feels like having a full-time recruiter working 24/7 without the overhead. The candidate quality has never been higher.",
      stars: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "VP HR, ScaleUp Inc",
      image: "https://i.pravatar.cc/150?img=68",
      quote: "Time-to-hire dropped 65%. The dashboard gives me exactly the metrics I need to show stakeholders. Finally, a tool that actually works.",
      stars: 5,
    },
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2, 
        duration: 0.6, 
        type: "spring",
        bounce: 0.3
      }
    }),
    hover: { 
      y: -10, 
      transition: { duration: 0.3, ease: "easeOut" } 
    }
  };

  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: "spring", stiffness: 200 }
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            className="relative group bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between h-full overflow-hidden hover:shadow-xl hover:border-blue-100 transition-colors duration-300"
          >
            {/* Decorative Quote Icon (Background) */}
            <motion.div 
              className="absolute top-6 right-6 text-slate-50 group-hover:text-blue-50 transition-colors duration-300"
              variants={{
                hover: { rotate: 15, scale: 1.1, x: 5 }
              }}
            >
              <Quote size={80} strokeWidth={0} fill="currentColor" />
            </motion.div>

            {/* Stars (Animated Sequence) */}
            <motion.div 
              className="relative z-10 flex gap-1 mb-6"
              variants={starContainerVariants}
            >
              {[...Array(item.stars)].map((_, i) => (
                <motion.div key={i} variants={starVariants}>
                  <Star 
                    size={18} 
                    className="fill-amber-400 text-amber-400 drop-shadow-sm" 
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <p className="relative z-10 text-slate-600 leading-relaxed text-lg mb-8 font-medium">
              "{item.quote}"
            </p>

            {/* Profile */}
            <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                {/* Pulsing Status Dot */}
                <span className="absolute bottom-0 right-0 flex h-3 w-3">
                  <motion.span 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                  />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
                </span>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs font-medium text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;