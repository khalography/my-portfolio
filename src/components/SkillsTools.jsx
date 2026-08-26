import React from 'react';
import { Cpu, Brain, Zap, Sparkles, Workflow, Layers, Globe, Send, Terminal, Palette } from 'lucide-react';
import { toolsAndSkills } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Zap: Zap,
  Sparkles: Sparkles,
  Cpu: Cpu,
  Workflow: Workflow,
  Layers: Layers,
  Globe: Globe,
  Send: Send,
  Terminal: Terminal,
  Palette: Palette,
};

export default function SkillsTools() {
  return (
    <section id="stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" /> AI & TOOLING ENGINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Tools, Platforms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">AI Stack</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Leveraging leading artificial intelligence models, automation workflow orchestrators, and edge hosting suites.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {toolsAndSkills.map((tool, index) => {
            const Icon = iconMap[tool.icon] || Cpu;
            return (
              <div 
                key={index}
                className="p-5 rounded-xl glass-card border border-gray-800 glass-card-hover text-left flex flex-col justify-between gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-cyan-500/40 transition-colors ${tool.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>

                <div>
                  <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    {tool.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
