import React from 'react';
import { services } from '../data/portfolioData';

export default function EditorialServices() {
  return (
    <section id="services" className="py-24 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
        
        {/* Section Title Header — Aligned to 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-14 border-b border-editorial">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-sans text-[#c8a97e] uppercase tracking-widest block">01 / CAPABILITIES</span>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-white font-normal">
              What I <span className="italic text-[#c8a97e]">Build</span>
            </h2>
          </div>
          <div className="lg:col-span-8 lg:flex lg:justify-end lg:text-right">
            <p className="text-sm font-sans text-gray-400 max-w-xl font-light leading-relaxed">
              Full-stack web apps, custom Telegram bots, Web3 launches, and strategic tech consulting.
            </p>
          </div>
        </div>

        {/* 4 Pillars List — Identical Template for All Four */}
        <div className="divide-y divide-editorial">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative group"
            >
              {/* Left Pillar Title Column with Vertical Rule Anchor */}
              <div className="lg:col-span-4 border-l-2 border-[#c8a97e]/30 pl-6 space-y-2 pt-1">
                <span className="font-serif-display text-4xl sm:text-5xl text-[#c8a97e] block font-light leading-none">
                  {service.number}
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-white font-normal leading-tight">
                  {service.title}
                </h3>
                <span className="text-xs font-sans font-medium text-[#c8a97e] uppercase tracking-wider block pt-1">
                  {service.subtitle}
                </span>
              </div>

              {/* Right Content Column — Aligned Baseline */}
              <div className="lg:col-span-8 space-y-6 pt-1">
                {/* Intro Paragraph */}
                <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Standardized Capability Grid */}
                <div className="p-6 sm:p-8 bg-editorial-card border border-editorial space-y-4">
                  <span className="text-xs font-sans font-semibold text-[#c8a97e] uppercase tracking-wider block border-b border-editorial pb-3">
                    WHAT THIS COVERS:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3.5 bg-editorial-subcard border border-editorial/80 transition-colors group-hover:border-[#c8a97e]/30"
                      >
                        <span className="text-[#c8a97e] font-serif-display text-base font-normal shrink-0">
                          0{idx + 1}.
                        </span>
                        <span className="text-xs sm:text-sm font-sans font-light text-gray-300 leading-snug">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
