import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { cn } from '../lib/utils';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Background } from './Background';
import { ContactModal } from './ContactModal';

const roles = ["Creative", "Fullstack", "Scholar"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(".name-reveal span", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, delay: 0.1 }
    );
    
    tl.fromTo(".blur-in",
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      "-=0.8"
    );
  }, []);

  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Background />
        <div className={cn(
          "absolute inset-0 transition-all duration-1000",
          theme === 'dark' ? "bg-black/40" : "bg-white/40 backdrop-blur-[2px]"
        )} />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-10" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <div className={cn(
          "inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300",
          scrolled ? "shadow-md shadow-black/10" : ""
        )}>
          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {["Home", "Work", "Resume"].map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={cn(
                  "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors",
                  i === 0 
                    ? "text-text-primary bg-stroke/50" 
                    : "text-muted hover:text-text-primary hover:bg-stroke/50"
                )}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="w-px h-5 bg-stroke mx-1" />

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-full text-muted hover:text-text-primary hover:bg-stroke/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16">
        {/* Photo Container */}
        <div className="blur-in relative w-40 h-40 md:w-52 md:h-52 mb-12 group mx-auto mt-4">
          {/* Ambient Glowing Aura */}
          <div className={cn(
            "absolute -inset-4 rounded-full opacity-40 blur-2xl group-hover:opacity-70 transition-opacity duration-700 animate-[spin_8s_linear_infinite]",
            theme === 'dark' 
              ? "bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500" 
              : "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
          )} />
          
          {/* Elegant Glass Border Ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-white/50 to-white/10 p-[2px] shadow-2xl z-10">
            <div className="w-full h-full rounded-full bg-bg/60 backdrop-blur-xl" />
          </div>
          
          {/* Central Image Container */}
          <div className="absolute inset-1 rounded-full overflow-hidden z-20 shadow-[inset_0_2px_20px_rgba(0,0,0,0.2)] bg-surface">
            <img 
              src="/assets/1x1 with new unif.jpg" 
              alt="Jan Reinnen Calapao" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" 
            />
            {/* Soft inner highlight for 3D depth */}
            <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none mix-blend-overlay" />
          </div>
        </div>
        
        <h1 className="name-reveal text-5xl md:text-7xl lg:text-8xl font-sans font-bold leading-[0.9] tracking-tight text-text-primary mb-6 cursor-default">
          {Array.from("Jan Reinnen Calapao").map((char, index) => (
            <span key={index} className={cn(
              "inline-block transition-all duration-300 hover:scale-110 hover:-translate-y-2",
              theme === 'light' ? "hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" : "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            )}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        
        <div className={cn(
          "blur-in text-xl md:text-2xl text-text-primary mb-12 transition-all duration-300 cursor-default hover:scale-105",
          theme === 'light' ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]" : "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
        )}>
          A <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block min-w-[100px] text-left hover:text-[#4E85BF] transition-colors">
            {roles[roleIndex]}
          </span> based in Calauan, Laguna.
        </div>
        
        <div className="blur-in inline-flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#work"
            className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-transform duration-300 bg-text-primary text-bg hover:bg-bg hover:text-text-primary overflow-hidden inline-block"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 font-medium text-center">View Projects</span>
          </a>
          
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-transform duration-300 border-2 border-stroke bg-bg text-text-primary hover:border-transparent">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 font-medium">Contact Me</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-text-primary animate-scroll-down" />
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
}
