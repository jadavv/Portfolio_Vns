import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Youtube, CheckCircle, Layers } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-2xl bg-dark-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Header Image */}
            <div className="relative h-60 sm:h-72 w-full bg-dark-950 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-dark-950/80 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/80 text-white mb-2">
                  {project.category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Description
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Core Implementation Features
                </h4>
                <div className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-dark-950 border border-white/10 text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                {project.videoDemo && (
                  <a
                    href={project.videoDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Watch Video Demo</span>
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Live Site</span>
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-dark-950 border border-white/15 text-slate-200 hover:text-white hover:border-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                )}

                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:bg-white/10 transition-colors ml-auto"
                  >
                    <span>Read Full Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
