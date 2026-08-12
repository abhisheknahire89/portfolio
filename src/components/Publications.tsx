"use client";

import { motion } from "framer-motion";

const publications = [
  {
    title: "Harnessing Generative AI as Knowledge Companion in Venture Creation",
    role: "Published Researcher",
    context: "ECIE 2025 (European Conference on Innovation and Entrepreneurship)",
  },
  {
    title: "BUILD Cohort 2024 (selected from 200+ applicants)",
    role: "INR 1,00,000 grant",
    context: "iTIC Incubator IIT Hyderabad",
  },
  {
    title: "Sanjeevan Healthcare Program (DST-funded national innovation program)",
    role: "Selected Cohort Member",
    context: "I-hub Gujarat",
  },
  {
    title: "Tongali Startup Competition",
    role: "1st Place",
    context: "IIT Hyderabad",
  },
  {
    title: "Ideastorm, E-Summit 2024",
    role: "4th Place",
    context: "IIT Roorkee",
  }
];

export default function Publications() {
  return (
    <section className="py-24 px-6 relative" id="recognition">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono tracking-widest text-accent-mid uppercase mb-16"
        >
          04 / Publications & Recognition
        </motion.h2>

        <div className="space-y-6">
          {publications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 glass-card rounded-xl hover:bg-white/[0.03] transition-colors"
            >
              <div className="mb-4 md:mb-0 max-w-2xl">
                <h3 className="text-lg font-medium text-white mb-1 group-hover:text-accent-mid transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.context}</p>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg text-sm text-accent-end border border-white/10 shrink-0 self-start md:self-auto">
                {item.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
