import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-heading font-extrabold text-white text-base shadow-glow-indigo">
                VJ
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Vinesh Jadav
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              IT Trainer & Web Developer specializing in delivering practical project-based training, Python, Django, database architecture, and full-stack software development.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                aria-label="Infinity3 Tech"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Direct Info */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <p className="text-white font-medium">{personalInfo.location}</p>
              <p><a href={`tel:${personalInfo.phone}`} className="hover:text-cyan-400 transition-colors">{personalInfo.phone}</a></p>
              <p><a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors break-all">{personalInfo.email}</a></p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            <strong className="text-white">Vinesh Jadav</strong> | IT Trainer & Web Developer &copy; {new Date().getFullYear()} All Rights Reserved
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
