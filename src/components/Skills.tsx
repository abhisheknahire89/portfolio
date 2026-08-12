"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Venture Building",
    items: ["Zero-to-One Execution", "Market Sizing", "Business Case Development", "Fundraising"]
  },
  {
    category: "Growth & Community",
    items: ["Community Building", "Partner Programs", "GTM Strategy"]
  },
  {
    category: "Research & Analysis",
    items: ["Primary Research (150+ interviews)", "Competitive Benchmarking", "Pricing & Unit Economics"]
  },
  {
    category: "Operations",
    items: ["KPI Dashboards", "SOP Development", "Process Design"]
  },
  {
    category: "Tools",
    items: ["Notion", "Jira", "Google Workspace", "Excel", "Mixpanel", "Figma"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 relative" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono tracking-widest text-accent-start uppercase mb-12"
        >
          03 / Core Competencies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-2xl flex flex-col"
            >
              <h3 className="text-lg font-bold text-white mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
