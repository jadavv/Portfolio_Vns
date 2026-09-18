import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Educational <span className="text-gradient-primary">Qualifications</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Formal technical education in computer engineering and continuous higher academic advancement.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col justify-between hover:border-indigo-500/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>
                
                <p className="text-xs font-semibold text-cyan-400 mb-4">
                  {edu.institution}
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {edu.highlight}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">Score / Grade:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-950 border border-indigo-500/30 text-indigo-300">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.grade}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
