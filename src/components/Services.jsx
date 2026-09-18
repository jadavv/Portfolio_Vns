import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  FileCode, 
  Laptop, 
  Brain, 
  Database, 
  FolderKanban, 
  Users, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  FileCode: FileCode,
  Laptop: Laptop,
  Brain: Brain,
  Database: Database,
  FolderKanban: FolderKanban,
  Users: Users
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Offerings</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Services & <span className="text-gradient-cyan">Training Solutions</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Custom technical training, enterprise application development, and student mentoring services designed to deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || Laptop;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/5 border border-white/10 text-indigo-300">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-cyan-400 transition-colors"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hire Me Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-dark-900 to-cyan-950/70 border border-indigo-500/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
              Need a Technical Trainer or Web Developer?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Whether you need structured training modules for your institution, individual technical coaching, or custom Python/Django web engineering, I am available to collaborate.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-glow-indigo hover:opacity-95 transition-all"
              >
                Get in Touch Today
              </a>
              <a
                href="https://wa.me/916359301750"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-all"
              >
                Quick WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
