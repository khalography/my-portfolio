import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

export default function EditorialAbout({ onOpenResume }) {
  return (
    <section id="about" className="py-24 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-sans text-[#c8a97e] uppercase tracking-widest block">05 / BACKGROUND & BIOGRAPHY</span>
            <h2 className="font-serif-display text-4xl sm:text-5xl text-white font-normal leading-tight">
              Background
            </h2>
            <p className="text-xs font-sans text-[#c8a97e] uppercase tracking-widest pt-2 font-medium">
              ACADEMICS &rarr; WEB3 &rarr; AI
            </p>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Block 1: First-Person Narrative Story */}
            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed">
              Before the AI adventure, there was community. For four years, I worked in Web3, moderating and running collaborations across NFT and DAO communities like Veefriends Alpha and Abstract Alpha, negotiating spot allocations, and managing raffles through Alphabot and Premint. That understanding of blockchain infrastructure carried into co-founding SharkDAO (now defunct), where I turned onchain tools and products into real opportunities for members. I later grew{' '}
              <a 
                href="https://x.com/ritualnet" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#c8a97e] hover:underline font-normal inline-flex items-center gap-0.5"
              >
                Ritualnet
              </a>
              's X community from 5 members to over 2,000, hosting weekly X Spaces along the way. That same instinct for structure, negotiation, and follow-through, sharpened by a Master's in International Studies and Diplomacy, now shapes how I approach the adoption of AI for development, automation, and more.
            </p>

            {/* Block 2: 3-Part Highlight Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {aboutMe.highlights.map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#c8a97e]/40 pl-4 py-2 space-y-1">
                  <span className="text-[11px] font-sans text-[#c8a97e] uppercase tracking-wider block font-semibold">
                    {item.title}
                  </span>
                  <p className="text-xs text-gray-200 font-light leading-snug">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="text-xs font-sans font-medium text-[#c8a97e] hover:text-white uppercase tracking-wider inline-flex items-center gap-1 border-b border-[#c8a97e]/40 pb-1 cursor-pointer"
              >
                View Full Resume <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
