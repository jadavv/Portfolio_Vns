import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe, 
  Send, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto trigger
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Let's Discuss <span className="text-gradient-primary">Opportunities</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I am available for technical trainer roles, web development freelance projects, curriculum consulting, and collaborative software builds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card p-5 sm:p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Email Address
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-semibold text-white text-base hover:text-cyan-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 sm:p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Phone & WhatsApp
                </span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="font-semibold text-white text-base hover:text-cyan-400 transition-colors block"
                >
                  {personalInfo.phone}
                </a>
                <a
                  href="https://wa.me/916359301750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 font-semibold hover:underline mt-1 inline-block"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 sm:p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Location
                </span>
                <span className="font-semibold text-white text-base block">
                  {personalInfo.location}
                </span>
                <span className="text-xs text-slate-400">Available for Onsite & Remote Positions</span>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="glass-card p-5 sm:p-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Connect Online
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-indigo-500/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-indigo-500/40 transition-colors"
                >
                  <Github className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-indigo-500/40 transition-colors"
                >
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Infinity3 Tech</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 border-white/10">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill in the details below to send an email inquiry directly to my inbox.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-white">Thank You!</h4>
                  <p className="text-sm text-slate-300">
                    Your message has been composed. Opening your default email client...
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. IT Trainer Role / Web Development Project"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your project details, training requirements, or inquiry here..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-glow-indigo hover:opacity-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
