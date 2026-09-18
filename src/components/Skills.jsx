import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Database: Database,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Skills & <span className="text-gradient-cyan">Core Proficiencies</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Organized categories covering programming languages, frameworks, database architectures, AI/ML tools, and security fundamentals.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card glass-card-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white">{group.category}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-medium">
                            {skill.badge}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-dark-950/80 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified & Taught in Live Curriculum</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
