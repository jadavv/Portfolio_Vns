import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Youtube, Github, Eye, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Real-World Builds</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Hands-on software applications demonstrating Python, Django, database architecture, and full-stack web engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col justify-between overflow-hidden group hover:border-cyan-500/40 hover:shadow-glow-cyan"
            >
              {/* Project Image Header */}
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-dark-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-dark-950/80 border border-white/10 text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-indigo-400 block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-dark-950/80 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/5 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.videoDemo && (
                    <a
                      href={project.videoDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white transition-colors"
                      title="Watch YouTube Demo"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors"
                      title="Live Platform"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      title="GitHub Profile"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
