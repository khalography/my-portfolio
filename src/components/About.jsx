import React from 'react';
import { UserCheck, GraduationCap, Building2, Shield, Globe, Award, Sparkles, FileText } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-20 relative bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" /> LEADERSHIP & BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Bridging Geopolitics, Web3 & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Autonomous AI</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Executive leadership experience at Safaari Hub, co-founding SharkDAO, and diplomatic studies background.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Background Card */}
          <div className="lg:col-span-7 rounded-2xl glass-card border border-gray-800 p-8 bg-gray-950/80 text-left space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">AI Lead @ Safaari Hub</h3>
                  <p className="text-xs font-mono text-cyan-400">Ilorin, Nigeria Startup & Co-Working Hub</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {aboutMe.background}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {aboutMe.philosophy}
              </p>

              {/* Key Leadership Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">SharkDAO Co-Founder</span>
                    <span className="text-[10px] font-mono text-gray-400">Web3 Community Building</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">AI Lead</span>
                    <span className="text-[10px] font-mono text-gray-400">Safaari Hub Ilorin</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400">Open for Advisory, Consulting & Roles</span>
              <button
                onClick={onOpenResume}
                className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold hover:bg-cyan-500/30 transition-colors inline-flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" /> Inspect Full Resume
              </button>
            </div>

          </div>

          {/* Education & Academic Card */}
          <div className="lg:col-span-5 rounded-2xl glass-card border border-gray-800 p-8 bg-gray-950/80 text-left space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Academic Qualifications</h3>
                  <p className="text-xs font-mono text-indigo-400">International Strategy & Diplomacy</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gray-900/90 border border-gray-800 space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold">MASTER'S DEGREE (M.SC.)</span>
                <h4 className="text-base font-bold font-display text-white">{aboutMe.education.degree}</h4>
                <p className="text-xs text-gray-300 font-sans">{aboutMe.education.institution}</p>
                <span className="inline-block text-[10px] font-mono text-gray-400 bg-gray-950 px-2 py-0.5 rounded border border-gray-800">
                  Graduated {aboutMe.education.year}
                </span>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                His master's degree in International Studies and Diplomacy provides a unique edge in global negotiation, stakeholder alignment, governance modeling, and cross-border tech team management.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strategic mind meets technical execution</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
