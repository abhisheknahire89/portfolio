"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-accent-start uppercase mb-8">
            01 / About
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-300 font-medium">
            IIT Hyderabad MTech graduate (9.11 CGPA) with a Mechanical Engineering foundation. I've founded India's first multilingual AI clinical documentation platform, operated as a founder's first hire at a healthcare startup, and published peer-reviewed research on generative AI in venture creation. <span className="text-white">I'm drawn to zero-to-one problems: the ones with no playbook, where you have to build the map while walking it.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
