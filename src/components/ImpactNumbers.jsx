import React from 'react';
import { statsStrip } from '../data/portfolioData';

export default function ImpactNumbers() {
  return (
    <section className="py-16 border-b border-editorial bg-editorial-card">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-editorial/40">
          {statsStrip.map((item, idx) => (
            <div key={idx} className={`${idx === 0 ? '' : 'pl-6 sm:pl-8'} space-y-1`}>
              <span className="font-serif-display text-4xl sm:text-5xl text-[#c8a97e] block">
                {item.value}
              </span>
              <h4 className="text-sm font-sans font-medium text-white tracking-wide">{item.label}</h4>
              {item.detail && <p className="text-xs font-sans text-gray-400 font-light">{item.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
