import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { featuredCaseStudy, otherWorks } from '../data/portfolioData';

export default function EditorialCaseStudy() {
  return (
    <section id="work" className="py-24 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
        
        {/* Section Header — Aligned to 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-14 border-b border-editorial">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-sans text-[#c8a97e] uppercase tracking-widest block">02 / WORK & EXPERIENCE</span>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-white font-normal">
              Work & <span className="italic text-[#c8a97e]">Experience</span>
            </h2>
          </div>
          <div className="lg:col-span-8 lg:flex lg:justify-end lg:text-right">
            <p className="text-sm font-sans text-gray-400 max-w-xl font-light leading-relaxed">
              Featured web builds and recent experience.
            </p>
          </div>
        </div>

        {/* 2 Compact Entries Side-by-Side Grid */}
        <div className="py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          
          {/* Entry 01: Featured Web Build */}
          <div className="p-8 sm:p-10 bg-editorial-card border border-editorial flex flex-col justify-between space-y-8 hover:border-[#c8a97e]/30 transition-colors">
            
            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="space-y-2 border-b border-editorial pb-6">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#c8a97e] font-serif-display text-lg">01.</span>
                  <span className="text-gray-400 font-mono text-[11px] uppercase">PROJECT BUILD</span>
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-white font-normal">
                  {featuredCaseStudy.title}
                </h3>
                <p className="text-xs font-sans text-[#c8a97e] uppercase tracking-wider font-medium">
                  {featuredCaseStudy.role}
                </p>
              </div>

              {/* Compact Story Blocks */}
              <div className="space-y-4 text-xs sm:text-sm font-sans">
                <div className="space-y-1">
                  <span className="text-[11px] font-sans font-semibold text-white uppercase tracking-wider block">Context:</span>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {featuredCaseStudy.context}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-editorial">
                  <span className="text-[11px] font-sans font-semibold text-white uppercase tracking-wider block">Technical Execution:</span>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {featuredCaseStudy.execution}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-editorial">
                  <span className="text-[11px] font-sans font-semibold text-white uppercase tracking-wider block">Concrete Outcome:</span>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {featuredCaseStudy.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA Link */}
            <div className="pt-4 border-t border-editorial flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500">Status: 200 OK (Live)</span>
              <a
                href={featuredCaseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#f4f1ea] text-gray-950 hover:bg-[#c8a97e] font-sans font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Entry 02: AI Lead Role */}
          <div className="p-8 sm:p-10 bg-editorial-card border border-editorial flex flex-col justify-between space-y-8 hover:border-[#c8a97e]/30 transition-colors">
            
            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="space-y-2 border-b border-editorial pb-6">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#c8a97e] font-serif-display text-lg">02.</span>
                  <span className="text-gray-400 font-mono text-[11px] uppercase">EXECUTIVE ROLE</span>
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-white font-normal">
                  AI Lead
                </h3>
                <p className="text-xs font-sans text-[#c8a97e] uppercase tracking-wider font-medium">
                  Safaari Hub • 2025 – 2026
                </p>
              </div>

              {/* Compact Story Blocks */}
              <div className="space-y-4 text-xs sm:text-sm font-sans">
                <div className="space-y-1">
                  <span className="text-[11px] font-sans font-semibold text-white uppercase tracking-wider block">Context:</span>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Pioneered the AI automation function at Safaari Hub, a startup and co-working hub offering smart workspaces, conference facilities, and business services.
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-editorial">
                  <span className="text-[11px] font-sans font-semibold text-white uppercase tracking-wider block">Technical Execution:</span>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Established and lead the office responsible for delivering AI automation solutions to individuals and businesses, focused on productivity, growth, and cost reduction.
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-editorial">
                  <span className="text-[11px] font-sans font-semibold text-white uppercase tracking-wider block">Concrete Outcome:</span>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Driving growing demand for automation services, with a steady increase in client inquiries since the office was founded.
                  </p>
                </div>
              </div>
            </div>

            {/* Role Metadata Footer */}
            <div className="pt-4 border-t border-editorial flex items-center justify-between text-xs font-mono text-gray-400">
              <span>Focus: AI Automation & Client Delivery</span>
            </div>

          </div>

        </div>

        {/* Other Works Footer Row */}
        <div className="pt-10 border-t border-editorial flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif-display text-2xl text-white font-normal">Other Works:</h4>
            <p className="text-xs font-sans text-gray-400 font-light">Additional live web platforms engineered and deployed.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-auto">
            {otherWorks.map((work, idx) => (
              <a
                key={idx}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-editorial-card border border-editorial hover:border-[#c8a97e]/50 transition-all flex items-center justify-between gap-4 group rounded-none"
              >
                <div>
                  <span className="text-xs sm:text-sm font-sans font-medium text-white group-hover:text-[#c8a97e] transition-colors block">
                    {work.title}
                  </span>
                  <span className="text-[11px] font-sans text-gray-400 block font-light">
                    {work.subtitle}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#c8a97e] shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
