"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Calendar, Linkedin, Twitter, Github, Heart } from "lucide-react";

const FooterBar = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* --- BACKGROUND --- 
        Using your provided colors:
        - Light Primary: #3B82F6
        - Accent #3: #B197FC
      */}
      <div className="absolute inset-0 bg-[#3B82F6]  z-0" />

      {/* Decorative Blur Circles using Accent #1 (#A5D8FF) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#A5D8FF]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D0BCFF]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* --- FLOATING IMAGES (New Addition) --- */}
      {/* Image 1: Top Left - Abstract 3D shape or Avatar */}
      <motion.div
        className="absolute top-10 left-[10%] hidden lg:block z-0"
        animate={{ y: [-15, 15] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" 
          alt="Happy Candidate"
          className="w-20 h-20 rounded-2xl object-cover shadow-2xl border-4 border-white/20 rotate-[-12deg]"
        />
        {/* Decorative Badge */}
        <div className="absolute -bottom-4 -right-4 bg-white text-[#3B82F6] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          Hired!
        </div>
      </motion.div>

      {/* Image 2: Bottom Right - Dashboard/UI element */}
      <motion.div
        className="absolute bottom-20 right-[10%] hidden lg:block z-0"
        animate={{ y: [15, -15] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80" 
          alt="Team Success"
          className="w-24 h-24 rounded-full object-cover shadow-2xl border-4 border-white/20 rotate-[12deg]"
        />
        <div className="absolute top-0 left-0 bg-[#A5D8FF] p-2 rounded-full border-2 border-white">
          <Heart size={16} className="text-[#3B82F6] fill-[#3B82F6]" />
        </div>
      </motion.div>


      {/* --- CTA CONTENT --- */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-sm">
            Ready to Hire Better, Faster?
          </h2>
          <p className="text-lg md:text-xl text-[#EFF6FF] mb-10 font-medium">
            Join 500+ companies hiring smarter with RecruiterAI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#3B82F6] rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 flex items-center gap-2 group transition-all"
            >
              <Rocket size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
              Start Free Trial
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-xl font-bold text-lg flex items-center gap-2 backdrop-blur-sm transition-all hover:border-white"
            >
              <Calendar size={20} />
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* --- BOTTOM LINKS BAR --- */}
      <div className="relative z-10 border-t border-white/10 bg-black/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Brand / Copyright */}
            <div className="text-[#EFF6FF] text-sm flex items-center gap-1">
              <span>© 2024 RecruiterAI. Made with</span>
              <Heart size={12} className="fill-red-400 text-red-400 animate-pulse" />
              <span>for hiring teams.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#ffffff", scale: 1.1 }}
                  className="text-[#D0BCFF] transition-all hover:drop-shadow-lg"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar; 