"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-24 px-6 relative" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono tracking-widest text-accent-end uppercase mb-16"
        >
          05 / Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl border-l-4 border-l-accent-mid"
          >
            <div className="text-sm font-mono text-gray-400 mb-2">2023 – 2025</div>
            <h3 className="text-xl font-bold text-white mb-2">MTech, Techno-Entrepreneurship</h3>
            <div className="text-gray-300 mb-4">Indian Institute of Technology (IIT) Hyderabad</div>
            <div className="inline-block px-3 py-1 bg-white/10 rounded text-sm text-white font-medium">CGPA: 9.11/10</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-xl border-l-4 border-l-gray-600"
          >
            <div className="text-sm font-mono text-gray-400 mb-2">2019 – 2022</div>
            <h3 className="text-xl font-bold text-white mb-2">BE, Mechanical Engineering</h3>
            <div className="text-gray-300 mb-4">Savitribai Phule Pune University</div>
            <div className="inline-block px-3 py-1 bg-white/10 rounded text-sm text-white font-medium">CGPA: 8.27/10</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
