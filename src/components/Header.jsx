import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0c0c0e]/90 backdrop-blur-md border-b border-editorial py-4 shadow-2xl' 
          : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Brand Name */}
        <a href="#" className="group flex flex-col text-left">
          <span className="font-serif-display text-xl sm:text-2xl font-normal text-gray-100 tracking-tight group-hover:text-[#c8a97e] transition-colors">
            {personalInfo.name}
          </span>
          <span className="text-[11px] font-sans text-gray-500 uppercase tracking-widest -mt-0.5">
            AI Web Development & Automation
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-sans text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Action Controls: CV Link + Light/Dark Mode Switch */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={onOpenResume}
            className="text-xs font-sans font-medium text-[#c8a97e] hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider group"
          >
            Curriculum Vitae <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Light / Dark Theme Pill Toggle Switch */}
          <button
            onClick={toggleTheme}
            className="relative inline-flex items-center p-1 rounded-full bg-[#1a1a1e] border border-editorial transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-[#f4f1ea] text-gray-950 shadow-md font-bold' : 'text-gray-400 hover:text-white'}`}>
              <Sun className="w-3.5 h-3.5" />
            </div>
            <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-[#c8a97e] text-gray-950 shadow-md font-bold' : 'text-gray-400 hover:text-white'}`}>
              <Moon className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Mobile Menu & Theme Switch Container */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative inline-flex items-center p-1 rounded-full bg-[#1a1a1e] border border-editorial transition-colors"
            aria-label="Toggle theme"
          >
            <div className={`flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-[#f4f1ea] text-gray-950' : 'text-gray-400'}`}>
              <Sun className="w-3 h-3" />
            </div>
            <div className={`flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-[#c8a97e] text-gray-950' : 'text-gray-400'}`}>
              <Moon className="w-3 h-3" />
            </div>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white p-2"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0e] border-b border-editorial px-6 py-6 space-y-4 text-left animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-sans text-gray-300 hover:text-[#c8a97e] uppercase tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-editorial flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs font-sans text-[#c8a97e] uppercase tracking-wider font-semibold flex items-center gap-1"
            >
              Download CV / Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
