import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, FileText, Send, Terminal, Bot } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Role & Hub Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-semibold text-white">AI Automation Specialist</span>
              <span className="text-cyan-500">|</span>
              <span className="text-cyan-400">AI Lead @ Safaari Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">{personalInfo.name}</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg sm:text-xl text-gray-300 font-sans max-w-2xl font-normal leading-relaxed">
              Architecting <span className="text-cyan-300 font-medium">autonomous AI workflows</span>, custom <span className="text-purple-300 font-medium">Telegram bot ecosystems</span>, and <span className="text-indigo-300 font-medium">Web3 platforms</span> for startups and innovative teams globally.
            </p>

            {/* Workflow Teaser Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-400 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-gray-900 border border-gray-800 flex items-center gap-1.5 text-cyan-300">
                <Bot className="w-3.5 h-3.5 text-cyan-400" /> Telegram Bots
              </span>
              <span className="px-2.5 py-1 rounded-md bg-gray-900 border border-gray-800 flex items-center gap-1.5 text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> AI-Native Delivery
              </span>
              <span className="px-2.5 py-1 rounded-md bg-gray-900 border border-gray-800 flex items-center gap-1.5 text-purple-300">
                <Terminal className="w-3.5 h-3.5 text-purple-400" /> Web3 & NFT Suite
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-gray-950 font-bold font-mono text-xs sm:text-sm hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Work With Ibraheem
              </a>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl bg-gray-900/90 text-gray-200 border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 font-mono text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                View 4 Pillars <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-3.5 rounded-xl bg-gray-900/60 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-600 font-mono text-xs transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" /> Download CV
              </button>
            </div>

          </div>

          {/* Right Column: User Avatar & Interactive Terminal Simulator */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* User Avatar Card */}
            <div className="relative group max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
              
              <div className="relative rounded-2xl glass-card border border-gray-800 p-4 bg-gray-950/80 flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-cyan-500/40 shrink-0">
                  <img 
                    src={personalInfo.avatar} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent"></div>
                </div>

                <div className="text-left space-y-1">
                  <span className="inline-block text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    EXECUTIVE PROFILE
                  </span>
                  <h3 className="text-base font-bold font-display text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-gray-400 font-mono">AI Lead</p>
                  <p className="text-[11px] text-cyan-300 font-mono flex items-center gap-1">
                    📍 Safaari Hub (Ilorin, Nigeria)
                  </p>
                </div>
              </div>
            </div>

            {/* Live Interactive Terminal Console */}
            <InteractiveTerminal />

          </div>

        </div>
      </div>
    </section>
  );
}
