import React from 'react';
import { toolsAndSkills } from '../data/portfolioData';

export default function EditorialTools() {
  return (
    <section id="skills" className="py-20 border-b border-editorial bg-editorial-card">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
        
        <div className="pb-8 border-b border-editorial">
          <span className="text-xs font-sans text-[#c8a97e] uppercase tracking-widest block mb-1">04 / TOOLCHAIN & PLATFORMS</span>
          <h3 className="font-serif-display text-3xl text-white font-normal">
            Primary AI & Automation Tech Stack
          </h3>
        </div>

        {/* Editorial Wordmark Row / List */}
        <div className="py-10 flex flex-wrap items-center justify-between gap-y-6 gap-x-12">
          {toolsAndSkills.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#c8a97e]">/{idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`}</span>
              <span className="font-serif-display text-2xl sm:text-3xl text-gray-200 hover:text-[#c8a97e] transition-colors cursor-default">
                {tool}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
