import React from 'react';
import { statsStrip } from '../data/portfolioData';

export default function ImpactStrip() {
  return (
    <section className="py-12 border-y border-gray-800/80 bg-gray-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsStrip.map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/60 text-left space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                {item.value}
              </span>
              <h4 className="text-xs sm:text-sm font-bold font-sans text-white">{item.label}</h4>
              <p className="text-[11px] font-mono text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
