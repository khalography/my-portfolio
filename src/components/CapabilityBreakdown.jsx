import React from 'react';
import { Cpu, Globe, Server, CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';
import { capabilityBreakdown } from '../data/portfolioData';

export default function CapabilityBreakdown() {
  return (
    <section id="capabilities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" /> TRANSPARENT ENGINEERING WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            {capabilityBreakdown.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {capabilityBreakdown.description}
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capabilityBreakdown.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl glass-card border border-gray-800 glass-card-hover text-left flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                    PHASE {pillar.step}
                  </span>
                  {idx === 0 && <Cpu className="w-6 h-6 text-cyan-400" />}
                  {idx === 1 && <Globe className="w-6 h-6 text-indigo-400" />}
                  {idx === 2 && <Server className="w-6 h-6 text-purple-400" />}
                </div>

                <h3 className="text-xl font-bold font-display text-white">{pillar.name}</h3>
                
                <div className="p-2.5 rounded-lg bg-gray-900/90 border border-gray-800 text-[11px] font-mono text-cyan-300">
                  ⚡ {pillar.tech}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" /> High Velocity
                </span>
                <span>0% Boilerplate Waste</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real-World Positioning Note Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border border-gray-800 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="font-bold">THE AI-NATIVE ADVANTAGE</span>
            </div>
            <h4 className="text-lg font-bold font-display text-white">Why Clients & Recruiters Hire AI-Native Specialists</h4>
            <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
              By leveraging powerful AI IDEs like Antigravity, Claude, and Gemini alongside automated edge infrastructure, projects move from concept to live deployment in days—not months—with clean code, modern UI, and zero pretense.
            </p>
          </div>

          <a 
            href="#work"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-gray-950 font-bold font-mono text-xs hover:bg-cyan-400 transition-colors shrink-0 flex items-center gap-2"
          >
            See Live Case Study <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
