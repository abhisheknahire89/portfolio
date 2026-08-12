"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const experiences = [
  {
    id: "dyadic",
    role: "Founder's Office Associate, Strategy & Operations",
    company: "Dyadic Health",
    date: "Mar 2025 – Aug 2025",
    location: "Hyderabad",
    highlights: [
      "Joined pre-launch as the founder's first hire",
      "Built a 200+ member community from zero through webinars and events",
      "Launched a doctor affiliation program (10 doctors, 1 diagnostic partner)",
      "Ran a validating pilot at Sagar Hospital & Cancer Care, Karimnagar",
      "Generated the company's first ₹10,000 in revenue",
      "Built KPI dashboards and SOPs across 4 business functions"
    ]
  },
  {
    id: "aivana",
    role: "Founder & CEO",
    company: "Aivana Health Intelligence",
    date: "Oct 2024 – Mar 2025",
    location: "Hyderabad",
    highlights: [
      "Founded India's first multilingual AI clinical documentation platform",
      "Sized the ₹6,000 Crore Indian clinical documentation market",
      "Ran 100+ primary research interviews with hospital administrators and clinicians",
      "Benchmarked 8+ competing platforms (Nuance DAX, Suki AI, Augnito)",
      "Built a tiered pricing model (₹15,000–1,00,000/month)",
      "Took the product from concept to live enterprise deployment in 11 weeks — 91% accuracy across 371 patient interactions within 3 days of launch",
      "Secured ₹1,00,000 in seed grant funding from iTIC Incubator, IIT Hyderabad"
    ]
  },
  {
    id: "gnixar",
    role: "Co-Founder & COO",
    company: "GnixarAcademy Pvt. Ltd.",
    date: "Feb 2025 – Aug 2025",
    location: "Remote",
    highlights: [
      "Built operating systems and partner engagement programs from zero for an early-stage edtech venture",
      "Coordinated cross-functional stakeholders across 30+ concurrent workstreams"
    ]
  },
  {
    id: "vpt",
    role: "Co-Founder",
    company: "VPT Techno",
    date: "Jun 2018 – Jul 2020",
    location: "Nashik",
    highlights: [
      "Co-founded a technology solutions company, early entrepreneurial experience"
    ]
  }
];

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);

  return (
    <section className="py-24 px-6 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono tracking-widest text-accent-mid uppercase mb-16"
        >
          02 / Experience
        </motion.h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative pl-8 md:pl-12 group cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : exp.id)}
              >
                {/* Timeline node */}
                <div 
                  className={cn(
                    "absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-background border-2 border-white/20 transition-colors duration-300",
                    isExpanded && "border-accent-mid bg-accent-mid shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  )} 
                />

                <div className={cn(
                  "glass-card p-6 rounded-xl transition-all duration-300",
                  isExpanded ? "border-white/20 bg-white/5" : "hover:bg-white-[0.02]"
                )}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-0">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-sm font-mono text-gray-400">
                      <span>{exp.date}</span>
                      <ChevronDown 
                        className={cn("w-4 h-4 ml-3 transition-transform duration-300", isExpanded && "rotate-180")} 
                      />
                    </div>
                  </div>
                  
                  <div className="text-accent-mid font-medium mb-4">
                    {exp.company} <span className="text-gray-500 font-normal ml-2">({exp.location})</span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 mt-4 text-gray-300">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent-start mr-3 mt-1.5 text-xs">◆</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
