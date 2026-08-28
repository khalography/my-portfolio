import React from 'react';
import { X, Printer } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-none border border-editorial-accent bg-[#0c0c0e] cv-modal-sheet shadow-2xl flex flex-col overflow-hidden my-auto text-left">
        
        {/* Top Action Header Bar */}
        <div className="bg-[#121215] cv-modal-header px-8 py-5 border-b border-editorial flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-serif-display text-xl text-white">Curriculum Vitae</h3>
            <p className="text-xs font-sans text-gray-400">IBRAHEEM QAZEEM • AI Web Development & Automation</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#f4f1ea] text-gray-950 hover:bg-[#c8a97e] cv-modal-print-btn text-xs font-sans font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Save / Print PDF
            </button>
            
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white cv-modal-close-btn transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="p-8 sm:p-12 overflow-y-auto text-gray-200 font-sans space-y-10">
          
          {/* Main Name & Title Header */}
          <div className="border-b border-editorial pb-8 space-y-2">
            <h1 className="font-serif-display text-4xl sm:text-5xl text-white font-normal uppercase tracking-wide">IBRAHEEM QAZEEM</h1>
            <p className="text-sm font-sans text-[#c8a97e] uppercase tracking-widest font-medium">
              AI Web Development & Automation
            </p>
          </div>

          {/* 2-Column CV Grid (Sidebar + Main Column) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar Info */}
            <div className="md:col-span-4 space-y-7 border-b md:border-b-0 md:border-r border-editorial pb-8 md:pb-0 md:pr-6">
              
              {/* Contact */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  CONTACT
                </h4>
                <div className="text-xs text-gray-300 space-y-1 font-light">
                  <p>Lagos, Nigeria</p>
                  <p className="font-mono">08153137879 / 08168371434</p>
                  <p className="font-mono">qazeemibraheem@gmail.com</p>
                  <p className="font-mono text-[#c8a97e]">x.com/restnett</p>
                </div>
              </div>

              {/* AI & Automation */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  AI & AUTOMATION
                </h4>
                <ul className="text-xs text-gray-300 space-y-1 font-light">
                  <li>Claude</li>
                  <li>ChatGPT</li>
                  <li>Google AI Studio</li>
                  <li>Telegram Bot Development</li>
                  <li>Make (Integromat) / Zapier</li>
                </ul>
              </div>

              {/* Web Development */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  WEB DEVELOPMENT
                </h4>
                <ul className="text-xs text-gray-300 space-y-1 font-light">
                  <li>React & Next.js</li>
                  <li>AI-native frontend & backend</li>
                  <li>Domain & DNS management, Cloudflare security</li>
                  <li>Vercel / Netlify deployment</li>
                </ul>
              </div>

              {/* Web3 & NFT */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  WEB3 & NFT
                </h4>
                <ul className="text-xs text-gray-300 space-y-1 font-light">
                  <li>Smart contract deployment (EVM) via Remix & no-code platforms</li>
                  <li>Wallet integration: MetaMask, OKX, Privy, WalletConnect</li>
                  <li>Google Workspace</li>
                </ul>
              </div>

              {/* Content Creation */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  CONTENT CREATION
                </h4>
                <ul className="text-xs text-gray-300 space-y-1 font-light">
                  <li>Canva</li>
                  <li>Google AI Studio</li>
                  <li>Grok AI</li>
                  <li>ElevenLabs</li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  SOFT SKILLS
                </h4>
                <ul className="text-xs text-gray-300 space-y-1 font-light">
                  <li>Communication</li>
                  <li>Negotiation</li>
                  <li>Problem Solving</li>
                  <li>Community Building</li>
                  <li>Leadership</li>
                </ul>
              </div>

              {/* Languages */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  LANGUAGES
                </h4>
                <p className="text-xs text-gray-300 font-light">English (Professional)</p>
              </div>

              {/* Interests */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  INTERESTS
                </h4>
                <ul className="text-xs text-gray-300 space-y-1 font-light">
                  <li>Researching & Reading</li>
                  <li>Board & Video Games</li>
                  <li>Music & Football</li>
                </ul>
              </div>

            </div>

            {/* Right Main Column (Profile, Experience, Education) */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Profile */}
              <div className="space-y-3">
                <h3 className="text-xs font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  PROFILE
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  AI Web Developer and AI Automation Specialist with 4+ years of experience across DeFi, NFT, and DAO communities, applying an understanding of blockchain infrastructure to real-world collaboration and growth work. Now channels that expertise into AI-native web development, automation, and Telegram bot engineering, delivering full-stack digital products and workflow solutions for individuals and businesses.
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <h3 className="text-xs font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  EXPERIENCE
                </h3>

                {/* Job 1 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif-display text-xl text-white">AI Lead</h4>
                    <span className="text-xs font-mono text-gray-400 italic">2025 – 2026</span>
                  </div>
                  <p className="text-xs font-sans text-[#c8a97e] font-medium">Safaari Hub</p>
                  <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside font-light pt-1">
                    <li>Pioneered the AI automation function at Safaari Hub, a startup and co-working hub offering smart workspaces, conference facilities, and business services.</li>
                    <li>Established and led the office responsible for delivering AI automation solutions to individuals and businesses for productivity, growth, and cost reduction.</li>
                    <li>Drove growing demand for automation services, with a steady increase in client inquiries since the office was founded.</li>
                    <li>Designed, built, and deployed full-stack web applications and custom Telegram bot systems for community management, notifications, and operational workflows, using an AI-native development process.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="space-y-2 pt-4 border-t border-editorial/50">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif-display text-xl text-white">X Community Manager</h4>
                    <span className="text-xs font-mono text-gray-400 italic">Mar 2025 – Sep 2025</span>
                  </div>
                  <p className="text-xs font-sans text-[#c8a97e] font-medium">Ritualnet · Volunteer / Contributor</p>
                  <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside font-light pt-1">
                    <li>Grew the community organically from 5 to 2,000+ members through consistent engagement and strategic outreach.</li>
                    <li>Hosted weekly X Spaces (Ritual Hangout) to keep members informed on project updates, events, and community developments.</li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="space-y-2 pt-4 border-t border-editorial/50">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif-display text-xl text-white">Community Moderator & Collaborations Lead</h4>
                    <span className="text-xs font-mono text-gray-400 italic">2021 – 2025</span>
                  </div>
                  <p className="text-xs font-sans text-[#c8a97e] font-medium">Veefriends Alpha, Abstract Alpha, SharkDAO (now defunct)</p>
                  <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside font-light pt-1">
                    <li>Managed hundreds of collaboration campaigns across multiple Web3 communities, primarily within the NFT space.</li>
                    <li>Led end-to-end collab execution: identifying and reaching out to upcoming NFT projects, negotiating spot allocations, and managing raffle setups using Alphabot and Premint.</li>
                    <li>Configured entry requirements for raffles, collected and verified winner data, and delivered structured reports to partner projects via Google Sheets.</li>
                    <li>Co-founded SharkDAO, applying blockchain infrastructure knowledge to build real opportunities for community members before the project became defunct.</li>
                  </ul>
                </div>

              </div>

              {/* Education */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-sans font-bold text-[#c8a97e] uppercase tracking-widest border-b border-editorial pb-1">
                  EDUCATION
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="font-serif-display text-lg text-white">Master of International Studies and Diplomacy</h4>
                    <p className="text-xs font-sans text-gray-400">Bayero University, Kano · 2021</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
