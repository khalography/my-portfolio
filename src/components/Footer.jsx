import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-editorial bg-editorial-subcard font-sans text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <span className="font-serif-display text-lg text-gray-200">{personalInfo.name}</span>
          <span className="text-gray-700">•</span>
          <span>AI Web Development & Automation • Lagos, Nigeria</span>
        </div>

        <div className="flex items-center gap-6 text-gray-400">
          <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8a97e] transition-colors">
            X (@restnett)
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#c8a97e] transition-colors">
            {personalInfo.email}
          </a>
        </div>

        <div className="text-gray-500">
          © {new Date().getFullYear()} Ibraheem Qazeem. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
