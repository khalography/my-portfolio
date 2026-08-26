import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function EditorialHero({ onOpenResume }) {
  return (
    <section className="relative pt-36 sm:pt-44 pb-24 md:pb-32 border-b border-editorial overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main Editorial Header Block */}
        <div className="space-y-8 text-left max-w-5xl">
          
          {/* Eyebrow Line */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-sans uppercase tracking-widest text-[#c8a97e]">
            <span>Web Development</span>
            <span className="w-1 h-1 rounded-full bg-[#c8a97e]/60"></span>
            <span>AI Automation</span>
            <span className="w-1 h-1 rounded-full bg-[#c8a97e]/60"></span>
            <span>Telegram Bots</span>
            <span className="w-1 h-1 rounded-full bg-[#c8a97e]/60"></span>
            <span>NFT Launches</span>
            <span className="w-1 h-1 rounded-full bg-[#c8a97e]/60"></span>
            <span>Tech Consulting</span>
          </div>

          {/* Large Serif Title */}
          <h1 className="font-serif-display text-5xl sm:text-7xl lg:text-8xl font-normal text-gray-100 tracking-tight leading-[0.95]">
            Building modern digital platforms & <span className="italic text-[#c8a97e] font-normal">intelligent AI automations</span>.
          </h1>

          {/* Description Paragraph */}
          <p className="text-lg sm:text-xl text-gray-300 font-sans font-light max-w-3xl leading-relaxed pt-2">
            Using an AI-native development workflow, I design and ship full-stack web applications end-to-end, from domain to global deployment. I also architect autonomous AI workflows and versatile Telegram bots for community support, notifications, and operational triggers, alongside NFT project launches and strategic tech consulting for startups, founders, and modern teams.
          </p>

        </div>

        {/* Asymmetric Hero Visual & Bio Strip */}
        <div className="mt-16 pt-12 border-t border-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Portrait & Editorial Caption */}
          <div className="lg:col-span-5 flex items-center gap-6">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-lg overflow-hidden border border-editorial-accent shrink-0 bg-neutral-900">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="text-left space-y-1">
              <h3 className="font-serif-display text-2xl text-white font-normal">{personalInfo.name}</h3>
              <p className="text-xs font-sans text-gray-400">AI Web Development & Automation</p>
              <p className="text-xs font-sans text-[#c8a97e] pt-1">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Right Column: Confident Action Links */}
          <div className="lg:col-span-7 flex flex-wrap items-center justify-start lg:justify-end gap-8">
            <a
              href="#contact"
              className="text-sm font-sans font-semibold text-gray-950 bg-[#f4f1ea] hover:bg-[#c8a97e] px-8 py-4 rounded-none transition-colors uppercase tracking-wider inline-flex items-center gap-2"
            >
              Start A Project <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="text-sm font-sans text-gray-300 hover:text-white transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 border-b border-gray-600 pb-1"
            >
              Curriculum Vitae <ArrowUpRight className="w-4 h-4 text-[#c8a97e]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
