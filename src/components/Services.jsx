import React, { useState } from 'react';
import { Bot, Code, Sparkles, Briefcase, CheckCircle2, ArrowRight, ChevronRight, MessageSquare, Terminal } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = {
  Bot: Bot,
  Code: Code,
  Sparkles: Sparkles,
  Briefcase: Briefcase,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section id="services" className="py-20 relative bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Bot className="w-3.5 h-3.5 text-cyan-400" /> CORE EXPERTISE & OFFERINGS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Four Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">AI & Automation Mastery</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Delivering bespoke AI bot engines, modern web applications, and strategic automation solutions tailored for web3 projects, startups, and operational hubs.
          </p>
        </div>

        {/* Tab Selection Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Bot;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-4 rounded-xl border text-left transition-all font-mono text-xs sm:text-sm flex flex-col justify-between gap-3 ${
                  isActive
                    ? 'bg-gray-900 border-cyan-500 shadow-lg shadow-cyan-950/50 text-white'
                    : 'bg-gray-950/60 border-gray-800/80 text-gray-400 hover:border-gray-700 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-900 text-gray-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>}
                </div>
                <span className="font-bold font-display">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detail Display */}
        {services.map((service) => {
          if (service.id !== activeTab) return null;
          const Icon = iconMap[service.icon] || Bot;

          return (
            <div 
              key={service.id}
              className="rounded-2xl glass-card border border-gray-800 p-6 sm:p-10 bg-gray-950/80 animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-display text-white">{service.title}</h3>
                      <p className="text-xs font-mono text-cyan-400">PILLAR EXPERTISE</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Capabilities & Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-900/60 border border-gray-800/80">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-300 font-sans leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a 
                      href="#contact"
                      className="px-5 py-2.5 rounded-lg bg-cyan-500 text-gray-950 font-bold font-mono text-xs hover:bg-cyan-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      Request {service.title} <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Interactive Visual Card */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-xl bg-gray-900/90 border border-gray-800 space-y-4 text-left font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                      <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Terminal className="w-4 h-4" /> BOT & WORKFLOW DEMO
                      </span>
                      <span className="text-[10px] text-gray-500">LIVE ARCHITECTURE</span>
                    </div>

                    {service.id === 'ai-automation' && (
                      <div className="space-y-3 text-gray-300">
                        <div className="p-2.5 rounded bg-gray-950 border border-cyan-500/20 space-y-1">
                          <span className="text-[10px] text-cyan-400 font-bold">TELEGRAM BOT USE CASES:</span>
                          <ul className="text-[11px] space-y-1 text-gray-400 list-disc list-inside">
                            <li>Community support & automated FAQ bots</li>
                            <li>Instant transaction & whitelist alert triggers</li>
                            <li>Customer onboarding & query resolution</li>
                            <li>API-driven Make/Zapier workflow automations</li>
                          </ul>
                        </div>
                        <div className="p-2.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-emerald-400 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-cyan-400" />
                          <span>Custom Telegram bot engine active & ready</span>
                        </div>
                      </div>
                    )}

                    {service.id === 'web-development' && (
                      <div className="space-y-3 text-gray-300">
                        <div className="p-2.5 rounded bg-gray-950 border border-indigo-500/20 space-y-1">
                          <span className="text-[10px] text-indigo-400 font-bold">AI-NATIVE DEV STACK:</span>
                          <p className="text-[11px] text-gray-400">React, Next.js, Tailwind CSS, Vercel Edge Hosting, Custom DNS & Domain Configuration.</p>
                        </div>
                        <div className="p-2.5 rounded bg-indigo-950/40 border border-indigo-500/30 text-indigo-300">
                          ⚡ Average deployment speed: Under 24-48 hours
                        </div>
                      </div>
                    )}

                    {service.id === 'nft-launches' && (
                      <div className="space-y-3 text-gray-300">
                        <div className="p-2.5 rounded bg-gray-950 border border-purple-500/20 space-y-1">
                          <span className="text-[10px] text-purple-400 font-bold">WEB3 LAUNCH PIPELINE:</span>
                          <p className="text-[11px] text-gray-400">Generative art metadata, Smart Contract deployment, Mint dApp & Whitelist bot triggers.</p>
                        </div>
                        <div className="p-2.5 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300">
                          🏴‍☠️ Featured Launch: Onchainmutineers.site
                        </div>
                      </div>
                    )}

                    {service.id === 'tech-consulting' && (
                      <div className="space-y-3 text-gray-300">
                        <div className="p-2.5 rounded bg-gray-950 border border-emerald-500/20 space-y-1">
                          <span className="text-[10px] text-emerald-400 font-bold">EXECUTIVE CONSULTING:</span>
                          <p className="text-[11px] text-gray-400">Operational AI audits for Safaari Hub startups & international Web3 communities.</p>
                        </div>
                        <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                          🏛️ M.Sc. Diplomacy & Strategic Leadership
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
