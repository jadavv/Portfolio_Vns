import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Practical classroom leadership, curriculum delivery, and production software engineering roles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Bar */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent opacity-30" />

          <div className="space-y-10">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10"
              >
                {/* Timeline Pin Indicator */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-dark-900 border border-indigo-500/30 items-center justify-center text-indigo-400 shadow-glow-indigo z-10">
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Timeline Card */}
                <div className="w-full glass-card p-6 sm:p-8 border-white/10 hover:border-indigo-500/30">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                        {exp.company}
                      </span>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </span>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.type}</span>
                  </div>

                  {/* Responsibilities Bullets */}
                  <div className="space-y-2.5 mb-6">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-dark-950/80 border border-white/10 text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
