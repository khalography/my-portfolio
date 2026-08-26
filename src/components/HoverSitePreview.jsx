import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Globe, Activity, CheckCircle, Server } from 'lucide-react';

export default function HoverSitePreview({ children, url = "https://onchainmutineers.site", domain = "onchainmutineers.site" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {/* Floating Hover Popover Card */}
      {isHovered && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-80 sm:w-96 p-4 rounded-xl glass-card border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto">
          {/* Popover Header */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> 200 OK (LIVE)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
              <ShieldCheck className="w-3 h-3 text-cyan-400" /> SSL SECURE
            </div>
          </div>

          {/* Site Snapshot Card */}
          <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-gray-950 group">
            {/* Visual Mock Browser Bar */}
            <div className="bg-gray-900 px-3 py-1.5 flex items-center justify-between border-b border-gray-800 text-[11px] font-mono text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/70 inline-block"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500/70 inline-block"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/70 inline-block"></span>
              </div>
              <span className="text-gray-300 font-mono truncate max-w-[180px] flex items-center gap-1">
                <Globe className="w-3 h-3 text-cyan-400" /> {domain}
              </span>
              <span className="text-[9px] text-gray-500">EDGE</span>
            </div>

            {/* Simulated Live Web Page Preview Graphic */}
            <div className="p-3 bg-gradient-to-br from-gray-950 via-cyan-950/20 to-slate-950 text-left">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏴‍☠️</span>
                  <div>
                    <h5 className="text-xs font-bold text-white tracking-wider font-display">ONCHAIN MUTINEERS</h5>
                    <p className="text-[10px] text-cyan-400 font-mono">Web3 Collective & NFT Platform</p>
                  </div>
                </div>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30 font-mono">
                  Solana / EVM
                </span>
              </div>

              {/* Sample Cards in Preview */}
              <div className="grid grid-cols-3 gap-1.5 my-2">
                <div className="p-1.5 rounded bg-gray-900/80 border border-cyan-500/20 text-center">
                  <div className="w-full h-8 rounded bg-cyan-950/60 mb-1 flex items-center justify-center text-xs">💀 #001</div>
                  <span className="text-[9px] text-gray-400 font-mono">Captain</span>
                </div>
                <div className="p-1.5 rounded bg-gray-900/80 border border-purple-500/20 text-center">
                  <div className="w-full h-8 rounded bg-purple-950/60 mb-1 flex items-center justify-center text-xs">🏴‍☠️ #042</div>
                  <span className="text-[9px] text-gray-400 font-mono">Mutineer</span>
                </div>
                <div className="p-1.5 rounded bg-gray-900/80 border border-emerald-500/20 text-center">
                  <div className="w-full h-8 rounded bg-emerald-950/60 mb-1 flex items-center justify-center text-xs">⚓ #108</div>
                  <span className="text-[9px] text-gray-400 font-mono">Quartermaster</span>
                </div>
              </div>

              {/* Metadata Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-800 text-[10px] font-mono text-gray-400">
                <span className="flex items-center gap-1 text-gray-400">
                  <Server className="w-3 h-3 text-indigo-400" /> Vercel Edge
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Activity className="w-3 h-3" /> ~42ms Latency
                </span>
              </div>
            </div>
          </div>

          {/* Popover Call-to-Action */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] text-gray-400 font-mono">Built & Deployed by Ibraheem</span>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold font-mono rounded-md bg-cyan-500 text-gray-950 hover:bg-cyan-400 transition-colors"
            >
              Open Site <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Pointer Triangle Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-8 border-transparent border-t-cyan-500/40"></div>
        </div>
      )}
    </span>
  );
}
