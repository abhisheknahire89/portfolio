"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = ["Founder", "Founder's Office Operator", "AI Builder", "Healthcare Innovator"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-12 px-6">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-start/20 blur-[150px] animate-blob-1 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] rounded-full bg-accent-mid/20 blur-[150px] animate-blob-2 mix-blend-screen" />
        <div className="absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-end/20 blur-[150px] animate-blob-1 mix-blend-screen" style={{ animationDelay: '-5s' }} />
        {/* Core Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-white/5 blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center text-center mt-[-10vh]">
        
        {/* Role Tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {roles.map((role) => (
            <motion.span
              key={role}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="px-4 py-1.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full text-[12px] md:text-[13px] tracking-widest uppercase text-gray-300 font-mono shadow-sm shadow-black/20"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Massive Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(3.5rem,10vw,9rem)] font-[800] tracking-[-0.02em] leading-none mb-6 whitespace-nowrap"
        >
          <span className="text-gradient animate-text-gradient bg-clip-text text-transparent">
            ABHISHEK NAHIRE
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-[#E5E5E5] max-w-[600px] leading-relaxed mb-12 drop-shadow-md"
        >
          I've founded two startups, built products from zero to live enterprise deployment, 
          and I turn ambiguous problems into shipped outcomes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            {/* Base solid gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-start via-accent-mid to-accent-end opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Glow shadow that intensifies on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-start via-accent-mid to-accent-end opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
            <span className="relative z-10 font-bold text-background tracking-wide">View Resume</span>
          </a>
          
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white/[0.03] backdrop-blur-md border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-transparent active:scale-95"
          >
            {/* Subtle gradient wash that fills in on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-start/20 via-accent-mid/20 to-accent-end/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 font-medium text-white tracking-wide group-hover:text-white drop-shadow-sm">Get in Touch</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
