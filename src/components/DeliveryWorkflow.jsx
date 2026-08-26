import React from 'react';
import { capabilityBreakdown } from '../data/portfolioData';

export default function DeliveryWorkflow() {
  return (
    <section id="workflow" className="py-24 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
        
        {/* Header Header — Aligned to 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-14 border-b border-editorial mb-14">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-sans text-[#c8a97e] uppercase tracking-widest block">
              {capabilityBreakdown.eyebrow}
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-white font-normal">
              How This Site <span className="italic text-[#c8a97e]">Was Built</span>
            </h2>
          </div>
          <div className="lg:col-span-8 lg:flex lg:justify-end lg:text-right">
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-2xl">
              {capabilityBreakdown.description}
            </p>
          </div>
        </div>

        {/* 3 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {capabilityBreakdown.pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-8 sm:p-10 bg-editorial-card border border-editorial flex flex-col justify-between space-y-6 hover:border-[#c8a97e]/30 transition-colors"
            >
              <div className="space-y-4">
                <span className="font-serif-display text-4xl text-[#c8a97e] block font-light leading-none">
                  {pillar.number}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-normal">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed pt-1">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-editorial text-[11px] font-mono text-gray-400">
                {pillar.meta}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
