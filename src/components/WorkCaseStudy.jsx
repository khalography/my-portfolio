import React from 'react';
import { ExternalLink, Globe, CheckCircle2, ShieldCheck, Server, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import HoverSitePreview from './HoverSitePreview';

export default function WorkCaseStudy() {
  const project = caseStudies[0]; // Onchainmutineers

  return (
    <section id="work" className="py-20 relative bg-gray-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Globe className="w-3.5 h-3.5 text-cyan-400" /> FEATURED CASE STUDY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            End-to-End Deployed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Production Web Application</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Hover over the website link or CTA below to inspect the live hover preview card with server status ping, SSL verification, and edge metadata.
          </p>
        </div>

        {/* Case Study Feature Card */}
        <div className="rounded-2xl glass-card border border-gray-800 p-6 sm:p-10 bg-gray-950/90 shadow-2xl relative overflow-hidden text-left">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> LIVE DEPLOYED SITE
                </span>
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  SOLANA / EVM WEB3
                </span>
                <span className="px-2.5 py-1 rounded-md bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                  VERCEL EDGE
                </span>
              </div>

              {/* Title & Domain Link with Hover Preview */}
              <div>
                <h3 className="text-3xl font-extrabold font-display text-white tracking-tight">
                  {project.title}
                </h3>
                
                <div className="mt-2 text-sm font-mono text-cyan-400 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  
                  {/* Interactive Hover Preview Wrapper */}
                  <HoverSitePreview url={project.url} domain={project.domain}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-cyan-500/50 hover:decoration-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-1 font-bold"
                    >
                      {project.domain} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </HoverSitePreview>
                  
                  <span className="text-[10px] text-gray-500 font-mono">(Hover link to preview)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.tagline} Built end-to-end by Ibraheem Qazeem—covering domain acquisition, custom dark web3 UI layout, NFT collection showcase, and automated edge hosting.
              </p>

              {/* Workflow Breakdown Pill list */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block font-semibold">Scope of Work Executed:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-gray-300">
                  <div className="p-2.5 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Domain Acquisition & DNS Setup
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> AI-Native UI/UX Engineering
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Web3 Collectibles Gallery
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Edge Deployment on Vercel
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <HoverSitePreview url={project.url} domain={project.domain}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-cyan-500 text-gray-950 font-bold font-mono text-xs sm:text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
                  >
                    Visit Live Site <ExternalLink className="w-4 h-4" />
                  </a>
                </HoverSitePreview>

                <div className="text-xs font-mono text-gray-400 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified 200 OK Response</span>
                </div>
              </div>

            </div>

            {/* Right Mockup Window Column */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-gray-800 bg-gray-950 overflow-hidden shadow-2xl group">
                
                {/* Window Top Controls */}
                <div className="bg-gray-900/90 px-4 py-2.5 border-b border-gray-800 flex items-center justify-between font-mono text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="px-3 py-1 rounded bg-gray-950 text-cyan-300 font-mono text-[11px] border border-gray-800 flex items-center gap-1.5 truncate max-w-[240px]">
                    <Globe className="w-3 h-3 text-cyan-400" /> https://{project.domain}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">200 OK</span>
                </div>

                {/* Simulated Live Web Page Preview Graphic */}
                <div className="p-6 bg-gradient-to-br from-gray-950 via-cyan-950/30 to-purple-950/20 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🏴‍☠️</span>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">ONCHAIN MUTINEERS</h4>
                        <span className="text-[10px] text-cyan-400 font-mono">PIRATE CREW COLLECTIBLES & STAKING</span>
                      </div>
                    </div>
                    <HoverSitePreview url={project.url} domain={project.domain}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono hover:bg-cyan-500/30 transition-colors flex items-center gap-1"
                      >
                        Launch <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </HoverSitePreview>
                  </div>

                  {/* Grid Cards inside Preview */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-gray-900/90 border border-cyan-500/30 space-y-1 text-center">
                      <div className="w-full h-16 rounded bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center text-lg">
                        💀 #0814
                      </div>
                      <p className="text-[11px] font-bold text-white font-mono">Mutineer #0814</p>
                      <span className="text-[9px] text-cyan-400 font-mono">Captain Tier</span>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-900/90 border border-purple-500/30 space-y-1 text-center">
                      <div className="w-full h-16 rounded bg-purple-950/60 border border-purple-500/20 flex items-center justify-center text-lg">
                        🏴‍☠️ #1105
                      </div>
                      <p className="text-[11px] font-bold text-white font-mono">Mutineer #1105</p>
                      <span className="text-[9px] text-purple-400 font-mono">Commodore</span>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-900/90 border border-emerald-500/30 space-y-1 text-center hidden sm:block">
                      <div className="w-full h-16 rounded bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center text-lg">
                        ⚓ #0045
                      </div>
                      <p className="text-[11px] font-bold text-white font-mono">Mutineer #0045</p>
                      <span className="text-[9px] text-emerald-400 font-mono">Quartermaster</span>
                    </div>
                  </div>

                  {/* Live Stats Footer in Mockup */}
                  <div className="p-3 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Server className="w-3.5 h-3.5" /> Edge Routing Active
                    </span>
                    <span className="text-emerald-400">SSL TLS 1.3</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
