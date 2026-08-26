import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function EditorialContact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-sans text-[#c8a97e] uppercase tracking-widest block">06 / GET IN TOUCH</span>
            <h2 className="font-serif-display text-5xl sm:text-7xl text-white font-normal leading-[0.95]">
              Initiate a <span className="italic text-[#c8a97e]">Conversation</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-xl">
              Open for contract engagements, Telegram bot automations, Web3 builds, and executive roles (AI Lead or related roles).
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenResume}
                className="text-xs font-sans text-[#c8a97e] hover:text-white uppercase tracking-wider inline-flex items-center gap-1 border-b border-[#c8a97e]/40 pb-1"
              >
                Download Curriculum Vitae Document <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Direct Links Column */}
          <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
            
            {/* Email Strip */}
            <div className="p-8 bg-editorial-card border border-editorial space-y-4">
              <span className="text-xs font-sans text-gray-400 uppercase tracking-widest block">DIRECT EMAIL</span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="font-serif-display text-2xl sm:text-3xl text-white hover:text-[#c8a97e] transition-colors"
                >
                  {personalInfo.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-sans font-semibold text-gray-950 bg-[#f4f1ea] hover:bg-[#c8a97e] px-5 py-2.5 transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" /> : <Copy className="w-3.5 h-3.5 text-gray-950" />}
                  {copiedEmail ? 'Copied' : 'Copy Email'}
                </button>
              </div>
            </div>

            {/* X / Twitter Strip */}
            <div className="p-8 bg-editorial-card border border-editorial space-y-4">
              <span className="text-xs font-sans text-gray-400 uppercase tracking-widest block">X / TWITTER</span>
              
              <div className="flex items-center justify-between">
                <a 
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif-display text-2xl sm:text-3xl text-white hover:text-[#c8a97e] transition-colors"
                >
                  {personalInfo.twitterHandle}
                </a>

                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans font-medium text-gray-950 bg-[#f4f1ea] hover:bg-[#c8a97e] px-5 py-2.5 transition-colors uppercase tracking-wider inline-flex items-center gap-1"
                >
                  Open X <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
