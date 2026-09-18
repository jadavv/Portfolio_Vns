import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Sparkles, 
  Box, 
  RotateCw, 
  Compass, 
  Zap 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  // 3D Movement Mode state
  const [is3DMode, setIs3DMode] = useState(false);
  const heroRef = useRef(null);

  // Motion values for 3D mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for 3D tilt
  const springConfig = { damping: 25, stiffness: 180 };
  const cardRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [22, -22]), springConfig);
  const cardRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-22, 22]), springConfig);

  const textRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const textRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const lightX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const lightY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  // Handle mouse move across Hero area
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggle3DMode = () => {
    setIs3DMode(prev => !prev);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden select-none"
    >
      {/* Ambient background light gradients */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none transition-all duration-700 ${
        is3DMode ? 'bg-indigo-500/25 scale-110' : 'bg-indigo-600/15'
      }`} />
      <div className={`absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full blur-[110px] pointer-events-none transition-all duration-700 ${
        is3DMode ? 'bg-cyan-400/20 scale-110' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={is3DMode ? { perspective: 1000, rotateX: textRotateX, rotateY: textRotateY } : {}}
            className="lg:col-span-7 flex flex-col items-start transition-transform duration-200"
          >
            {/* Top row: Status Badge & 3D Mode Toggle Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for IT Training & Web Development Roles</span>
              </div>

              {/* 3D Mode Interactive Button */}
              <button
                type="button"
                onClick={toggle3DMode}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-md ${
                  is3DMode
                    ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-glow-cyan scale-105 border border-cyan-300'
                    : 'bg-dark-900/90 text-slate-300 hover:text-white border border-white/15 hover:border-purple-400/60'
                }`}
                title="Toggle 3D Moment / Movement Mode"
              >
                <motion.span
                  animate={is3DMode ? { rotate: 360 } : { rotate: 0 }}
                  transition={is3DMode ? { repeat: Infinity, duration: 4, ease: "linear" } : {}}
                  className="flex items-center justify-center"
                >
                  <Box className={`w-3.5 h-3.5 ${is3DMode ? 'text-cyan-200' : 'text-purple-400'}`} />
                </motion.span>
                <span>3D Mode: {is3DMode ? 'ACTIVE 🔮' : 'OFF'}</span>
                <span className={`w-2 h-2 rounded-full ${is3DMode ? 'bg-cyan-400 animate-ping' : 'bg-purple-400'}`} />
              </button>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Headline with Interactive 3D Circles on the 'i' */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-4">
              H
              {/* Clickable Circle on 'i' in 'Hi' */}
              <span
                onClick={toggle3DMode}
                className="relative inline-flex flex-col items-center cursor-pointer group align-baseline"
                title="Click circle for 3D Movement Mode!"
              >
                <motion.span
                  animate={is3DMode ? { scale: [1, 1.4, 1], y: [0, -3, 0] } : { scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: is3DMode ? 1.2 : 2 }}
                  className={`inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mb-0.5 transition-all shadow-md ${
                    is3DMode
                      ? 'bg-cyan-300 ring-4 ring-cyan-400/50 shadow-glow-cyan'
                      : 'bg-purple-400 ring-2 ring-purple-400/40 group-hover:ring-cyan-400 group-hover:bg-cyan-400'
                  }`}
                />
                <span className="leading-none">ı</span>
              </span>
              , I'm{' '}
              {/* Vinesh with custom interactive purple circle over the 'i' */}
              <span className="inline-flex items-baseline bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
                V
                <span
                  onClick={toggle3DMode}
                  className="relative inline-flex flex-col items-center cursor-pointer group mx-[1px]"
                  title="Click circle for 3D Movement Mode!"
                >
                  <motion.span
                    animate={is3DMode 
                      ? { scale: [1, 1.45, 1], boxShadow: ['0 0 10px #06b6d4', '0 0 25px #a855f7', '0 0 10px #06b6d4'] }
                      : { scale: [1, 1.25, 1] }
                    }
                    transition={{ repeat: Infinity, duration: is3DMode ? 1 : 2.2 }}
                    className={`inline-block w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full mb-0.5 transition-all cursor-pointer ${
                      is3DMode
                        ? 'bg-cyan-300 ring-4 ring-cyan-400/60 shadow-glow-cyan'
                        : 'bg-purple-400 ring-2 ring-purple-400/60 shadow-glow-indigo group-hover:ring-cyan-300 group-hover:bg-cyan-300'
                    }`}
                  />
                  <span className="leading-none text-purple-400">ı</span>
                </span>
                nesh
              </span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Jadav
              </span>
            </h1>

            {/* Tooltip hint under headline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/5 border border-white/10 text-slate-300">
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>Tip: Click the circle on the letter <strong>'i'</strong> to toggle <strong>3D Movement Mode</strong>!</span>
              </span>
            </div>

            {/* Title / Specialization */}
            <div className="inline-block px-3.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-semibold text-sm sm:text-base mb-6">
              {personalInfo.role}
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              I am an IT Trainer and Web Developer with experience in{' '}
              <strong className="text-white font-semibold">Python, Django, Web Development, Databases, AI/ML fundamentals, Networking, and Cybersecurity</strong>.
              I specialize in delivering practical, project-based training and developing real-world software applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 shadow-glow-indigo transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="images/cv.png"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-dark-900/60 border border-white/10 hover:border-indigo-500/30 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/10">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-heading font-extrabold text-2xl text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center [perspective:1200px]">
            <motion.div
              style={
                is3DMode
                  ? {
                      rotateX: cardRotateX,
                      rotateY: cardRotateY,
                      transformStyle: 'preserve-3d',
                    }
                  : {}
              }
              animate={
                !is3DMode
                  ? {}
                  : {
                      scale: [1, 1.02, 1],
                    }
              }
              transition={!is3DMode ? {} : { repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-sm sm:max-w-md transition-shadow duration-300"
            >
              {/* Outer decorative glowing ring */}
              <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-500 to-cyan-400 blur-2xl transition-opacity duration-500 ${
                is3DMode ? 'opacity-55 animate-pulse' : 'opacity-25'
              }`} />

              {/* Main 3D Card Container */}
              <div
                className={`relative rounded-3xl bg-dark-900/90 border p-5 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 ${
                  is3DMode
                    ? 'border-cyan-400/60 shadow-glow-cyan ring-1 ring-cyan-400/40'
                    : 'border-white/15'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D Holographic Glare Sheen when 3D mode is active */}
                {is3DMode && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent pointer-events-none z-20"
                    style={{
                      transform: 'translateZ(60px)',
                    }}
                  />
                )}

                {/* 3D Active Indicator Badge inside Card */}
                {is3DMode && (
                  <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 text-[11px] font-bold shadow-lg">
                    <Compass className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                    <span>3D Moment Active</span>
                  </div>
                )}

                {/* Visual Avatar Frame with 3D Depth */}
                <div
                  className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 overflow-hidden aspect-[4/4.5] flex items-end justify-center"
                  style={is3DMode ? { transform: 'translateZ(30px)' } : {}}
                >
                  <img
                    src="images/dev2.png"
                    alt="Vinesh Jadav - IT Trainer and Web Developer"
                    className="w-full h-full object-cover object-top filter contrast-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Information pill below image */}
                <div
                  className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between"
                  style={is3DMode ? { transform: 'translateZ(45px)' } : {}}
                >
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">Vinesh Jadav</h3>
                    <p className="text-xs text-cyan-400 font-medium">Trainer & Full-Stack Engineer</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-semibold text-indigo-300">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Verified CV</span>
                  </div>
                </div>

                {/* Floating Tech Badge 1 (Pops out in 3D) */}
                <div
                  className={`absolute top-8 left-2 px-3 py-1.5 rounded-xl bg-dark-950/90 border shadow-lg backdrop-blur-md flex items-center gap-2 transition-all duration-300 ${
                    is3DMode
                      ? 'border-cyan-400/60 text-cyan-200 shadow-glow-cyan'
                      : 'border-white/15 text-slate-200'
                  }`}
                  style={is3DMode ? { transform: 'translateZ(75px)' } : {}}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold">Python & Django</span>
                </div>

                {/* Floating Tech Badge 2 (Pops out in 3D) */}
                <div
                  className={`absolute bottom-20 right-2 px-3 py-1.5 rounded-xl bg-dark-950/90 border shadow-lg backdrop-blur-md flex items-center gap-2 transition-all duration-300 ${
                    is3DMode
                      ? 'border-indigo-400/60 text-indigo-200 shadow-glow-indigo'
                      : 'border-white/15 text-slate-200'
                  }`}
                  style={is3DMode ? { transform: 'translateZ(75px)' } : {}}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-xs font-bold">AI/ML & Databases</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
