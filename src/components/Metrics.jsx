import React from 'react';
import { motion } from 'framer-motion';

const statData = [
  { value: "100+", label: "Clients Transformed" },
  { value: "500+ KG", label: "Weight Shredded" },
  { value: "300+ KG", label: "Muscle Engineered" },
  { value: "95%", label: "Success Rate" }
];

export default function Metrics() {
  return (
    <section className="bg-obsidian-900 border-y border-zinc-900 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {statData.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="text-3xl md:text-5xl font-black text-gold-500 tracking-tight mb-2">{stat.value}</div>
            <div className="text-zinc-500 text-xs md:text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}