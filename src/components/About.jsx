import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Database, 
  Brain, 
  ShieldCheck, 
  FolderKanban, 
  Layers, 
  MapPin, 
  Mail, 
  Phone,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const coreAreas = [
  {
    icon: GraduationCap,
    title: "IT Training",
    description: "Experienced in conducting engaging classroom and online technical training sessions, breaking down complex programming concepts for beginner and intermediate students."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Proficient in developing responsive, accessible, and high-performance frontends and backends using HTML5, CSS3, JavaScript, Bootstrap, and Django."
  },
  {
    icon: Layers,
    title: "Python & Django",
    description: "Deep expertise in Core Python, Object-Oriented Programming (OOP), Django MVC architecture, CRUD operations, authentication, and REST APIs."
  },
  {
    icon: Brain,
    title: "AI/ML Fundamentals",
    description: "Sound foundation in Python for AI/ML, data preprocessing, model exploration, and introducing modern AI productivity tools to aspiring developers."
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Hands-on experience in relational database design, query optimization, and integration with MySQL, SQLite, and PostgreSQL."
  },
  {
    icon: ShieldCheck,
    title: "Networking & Cybersecurity",
    description: "Practical understanding of core computer networking principles (TCP/IP, OSI model) and vital cybersecurity fundamentals for web environments."
  },
  {
    icon: FolderKanban,
    title: "Project-Based Learning",
    description: "Passionate about guiding students step-by-step through real-world software builds, turning theoretical knowledge into verifiable code artifacts."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Passionate Technical Trainer & <span className="text-gradient-primary">Software Engineer</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card glass-card-hover p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">{area.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Profile Details & Strengths Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-8 sm:p-10 border-indigo-500/20 bg-dark-900/80">
          <div className="lg:col-span-7">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Pedagogical Approach & Core Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-sm text-slate-300">Patient and engaging learner support</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-sm text-slate-300">Practical, real-world project builds</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-sm text-slate-300">Clear, beginner-friendly explanations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-sm text-slate-300">Team collaboration & problem-solving</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-sm text-slate-300">Continuous adoption of AI & modern tools</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-sm text-slate-300">Languages: English, Hindi, Gujarati</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-dark-950/70 p-6 rounded-xl border border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Location</span>
                <span className="text-sm font-semibold text-white">{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-white/5">
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-white/5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Contact Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
