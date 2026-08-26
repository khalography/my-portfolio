import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, Briefcase, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom sleek SVG Icon for X / Twitter
const XTwitterIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactSection({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTwitter, setCopiedTwitter] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedTwitter(true);
      setTimeout(() => setCopiedTwitter(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Glass Card Box */}
        <div className="rounded-3xl glass-card border border-gray-800 p-8 sm:p-14 bg-gray-950/90 shadow-2xl relative overflow-hidden text-left">
          
          {/* Radial Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Send className="w-3.5 h-3.5 text-cyan-400" /> START A CONVERSATION
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Extraordinary</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Whether you're a startup founder looking for custom AI bot automation, a Web3 brand preparing a launch, or a recruiter seeking an AI Lead & AI Specialist—I'm ready to connect.
              </p>

              {/* Pitch Badges for Freelance + Recruiting */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-1">
                  <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> FOR CLIENTS & STARTUPS
                  </span>
                  <p className="text-xs text-gray-300">Bespoke Telegram bots, web design, NFT launches, and operational workflow automations.</p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-1">
                  <span className="text-xs font-mono text-indigo-400 font-bold flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> FOR RECRUITERS & EXECUTIVES
                  </span>
                  <p className="text-xs text-gray-300">Executive leadership as AI Lead at Safaari Hub, AI-native full-stack speed, M.Sc. strategic background.</p>
                </div>
              </div>
            </div>

            {/* Right Contact Cards Column */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-gray-900/90 border border-gray-800 hover:border-cyan-500/50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-gray-400 block">DIRECT EMAIL</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors font-mono">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-cyan-500 text-gray-950 font-bold font-mono text-xs text-center hover:bg-cyan-400 transition-colors"
                  >
                    Send Email
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="py-2 px-3 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 font-mono text-xs flex items-center gap-1 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* X / Twitter Card */}
              <div className="p-5 rounded-2xl bg-gray-900/90 border border-gray-800 hover:border-indigo-500/50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                      <XTwitterIcon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-gray-400 block">X / TWITTER</span>
                      <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-indigo-400 transition-colors font-mono">
                        {personalInfo.twitterHandle}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a 
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-indigo-600 text-white font-bold font-mono text-xs text-center hover:bg-indigo-500 transition-colors flex items-center justify-center gap-1"
                  >
                    Open X Profile <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalInfo.twitter, 'twitter')}
                    className="py-2 px-3 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 font-mono text-xs flex items-center gap-1 transition-colors"
                  >
                    {copiedTwitter ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedTwitter ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Resume Quick Trigger */}
              <div className="p-4 rounded-2xl bg-gray-950 border border-gray-800 text-center">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-cyan-300 border border-cyan-500/30 font-mono text-xs font-semibold transition-colors"
                >
                  📄 Download / Print Full CV Document
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
