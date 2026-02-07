"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Globe, 
  Linkedin, 
  Search, 
  Building2, 
  Rocket, 
  Briefcase, 
  Target 
} from "lucide-react";

const Track = () => {
  const platforms = [
    { name: "LinkedIn", logo: "/CompanyLogo/LinkedIn.png", color: "hover:text-[#0077b5]" },
    {name: "Naukri", logo: "/CompanyLogo/Naukri.png", color: "hover:text-[#f58220]"},
    {name: "Indeed", logo: "/CompanyLogo/Indeed.png", color: "hover:text-[#2164f3]"},
    { name: "AngelList", logo: "/CompanyLogo/AngelList.png", color: "hover:text-black" },
    {name: "Instahyre", logo: "/CompanyLogo/Instahyre.png", color: "hover:text-[#ff5722]"},
    {name: "Wellfound", logo: "/CompanyLogo/Wellfound.png", color: "hover:text-[#00bcd4]"},
    { name: "IIMJobs", logo: "/CompanyLogo/IIMJobs.png", color: "hover:text-[#e91e63]" },
    { name: "Glassdoor", logo: "/CompanyLogo/Glassdoor.png", color: "hover:text-[#0caa41]" },
    { name: "Monster India", logo: "/CompanyLogo/Monster India.png", color: "hover:text-[#6e46ae]" },
    { name: "Cutshort", logo: "/CompanyLogo/Cutshort.png", color: "hover:text-[#35a852]" },
  ];

  // Duplicate list to ensure seamless looping
  const marqueeList = [...platforms, ...platforms, ...platforms, ...platforms];

  return (
    <section className="py-16 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2"
        >
          <div className="p-2 bg-blue-100 rounded-full text-blue-600">
             <Globe size={20} />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Post Once, Reach Everywhere
          </h2>
        </motion.div>
      </div>

      {/* --- MARQUEE CONTAINER --- */}
      <div className="relative w-full flex overflow-hidden mask-fade-sides">
        {/* Gradient Masks for smooth fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-16 px-8"
          animate={{ x: ["0%", "-50%"] }} // Move halfway then reset (since list is doubled)
          transition={{
            duration: 30, // Adjust speed: higher = slower
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeList.map((platform, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-2 text-xl font-bold text-slate-400 transition-colors duration-300 cursor-default ${platform.color}`}
            >
              {/* Icon */}
              <Image
                src={platform.logo}
                alt={platform.name}
                width={24}
                height={24}
                className="object-contain"
              />
              {/* Text */}
              <span>{platform.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Track;