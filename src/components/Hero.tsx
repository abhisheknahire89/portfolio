"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ParticleBackground from "./ParticleBackground";

const roles = ["Founder", "Founder's Office Operator", "AI Builder", "Healthcare Innovator"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      <ParticleBackground />
      
      <div className="max-w-5xl w-full z-10 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-accent-start font-mono text-sm md:text-base tracking-widest uppercase">
            Abhishek Nahire
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8"
        >
          <div className="h-[1.2em] relative overflow-hidden text-gradient pb-2">
            <motion.span
              key={currentRole}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute left-0"
            >
              {roles[currentRole]}
            </motion.span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
          I've founded two startups, built products from zero to live enterprise deployment, 
          and I turn ambiguous problems into shipped outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-6"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full overflow-hidden transition-all hover:border-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-start/20 via-accent-mid/20 to-accent-end/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 font-medium tracking-wide">View Resume</span>
          </a>
          
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full overflow-hidden transition-all hover:border-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-start/20 via-accent-mid/20 to-accent-end/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 font-medium tracking-wide">Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
