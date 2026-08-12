"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactFooter() {
  return (
    <footer className="relative py-32 px-6 border-t border-white/5 overflow-hidden" id="contact">
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-accent-start/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent-mid/30 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-gradient"
        >
          Let's build something.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a href="mailto:abhisheknahire89@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-start transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm">abhisheknahire89@gmail.com</span>
          </a>
          <a href="tel:+918446163990" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-mid transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm">+91 84461 63990</span>
          </a>
          <a href="https://linkedin.com/in/abhishekaivana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-end transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm">linkedin.com/in/abhishekaivana</span>
          </a>
        </motion.div>

        <motion.a
          href="mailto:abhisheknahire89@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block relative px-10 py-5 rounded-full overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-start via-accent-mid to-accent-end opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 font-bold text-background tracking-wide">
            Start a Conversation
          </span>
        </motion.a>

        <div className="mt-32 text-center text-sm font-mono text-gray-600">
          © {new Date().getFullYear()} Abhishek Nahire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
