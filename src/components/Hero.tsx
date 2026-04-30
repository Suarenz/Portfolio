import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn, calculateAge } from '../lib/utils';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Background } from './Background';
import { ContactModal } from './ContactModal';
import { Magnetic } from './Magnetic';

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

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="home" className="relative w-full min-h-[100dvh] py-24 md:py-0 overflow-hidden flex flex-col items-center justify-center">
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
          "inline-flex items-center rounded-full backdrop-blur-2xl border border-white/10 px-2 py-2 transition-all duration-300",
          theme === 'dark' ? "bg-white/5" : "bg-black/5",
          scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.12)]" : ""
        )}>
          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {["Home", "Work", "Resume"].map((link, i) => (
              <Magnetic key={link} strength={0.3}>
                <a
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
              </Magnetic>
            ))}
          </div>

          <div className="w-px h-5 bg-white/20 mx-2" />

          {/* Theme Toggle */}
          <Magnetic strength={0.3}>
            <button 
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full text-muted hover:text-text-primary hover:bg-stroke/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </Magnetic>
        </div>
      </nav>

      {/* Hero Content */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-4 mt-8 sm:mt-16 md:mt-20"
      >
        {/* Photo Container */}
        <motion.div variants={itemVars} className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mb-6 sm:mb-8 md:mb-12 group mx-auto mt-4">
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
        </motion.div>
        
        <motion.h1 
          variants={itemVars} 
          className={cn(
            "flex flex-wrap justify-center text-[2.25rem] leading-[1.2] sm:text-5xl md:text-7xl lg:text-8xl font-sans font-bold sm:leading-[1.1] tracking-tight mb-4 sm:mb-8 cursor-default py-2",
            "bg-clip-text text-transparent bg-gradient-to-b",
            theme === 'light' 
              ? "from-gray-700 via-gray-900 to-black drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]" 
              : "from-white via-gray-300 to-gray-600 drop-shadow-[0_5px_8px_rgba(0,0,0,0.9)]"
          )}
        >
          {"Jan Reinnen Calapao".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-flex whitespace-pre mr-[0.3em] last:mr-0">
              {Array.from(word).map((char, charIndex) => {
                const xOffsets = [-300, 300, 0, 0, -200, 200, -250, 250];
                const yOffsets = [0, 0, -300, 300, -200, 200, 250, -250];
                const idx = (wordIndex * 7 + charIndex) % 8;
                
                return (
                <motion.span 
                  key={charIndex}
                  initial={{ opacity: 0, x: xOffsets[idx], y: yOffsets[idx], rotate: (idx % 2 === 0 ? -45 : 45) }}
                  animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{
                    type: "spring",
                    damping: 16,
                    stiffness: 80,
                    delay: 0.2 + (wordIndex * 0.3) + (charIndex * 0.08)
                  }}
                  className={cn(
                    "inline-block transition-transform duration-300 hover:scale-125 hover:-translate-y-3",
                    theme === 'light' ? "hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]" : "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                  )}
                >
                  {char}
                </motion.span>
              )})}
            </span>
          ))}
        </motion.h1>
        
        <motion.div variants={itemVars} className="hero-intro text-center flex flex-col gap-2 md:gap-3 mb-8 sm:mb-12 capitalize">
          <h2 className={cn(
            "intro-heading text-lg sm:text-xl font-medium",
            theme === 'light' ? "text-slate-800 drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]" : "text-slate-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
          )}>
            <span className="rotating-wrapper block-1 italic">
              <span className="phrase">I build purpose-driven software.</span>
              <span className="phrase">I build solutions to complex problems.</span>
              <span className="phrase">I build digital tools that empower users.</span>
            </span>
          </h2>

          <h3 className={cn(
            "intro-subheading block-2-container text-sm sm:text-base font-normal",
            theme === 'light' ? "text-slate-800 drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]" : "text-slate-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
          )}>
            <span className="rotating-wrapper block-2 italic">
              <span className="phrase">A {calculateAge('2003-10-07')} year old</span>
              <span className="phrase">A Computer Science Graduate</span>
              <span className="phrase">A Scholar based in Calauan, Laguna, Philippines</span>
            </span>
          </h3>
        </motion.div>
        
        <motion.div variants={itemVars} className="inline-flex flex-col sm:flex-row justify-center gap-4">
          <Magnetic strength={0.4}>
            <a
              href="#work"
              className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-transform duration-300 bg-text-primary text-bg hover:bg-bg hover:text-text-primary overflow-hidden inline-block border-[1px] border-white/10"
            >
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-3xl" />
              <span className="relative z-10 font-medium text-center">View Projects</span>
            </a>
          </Magnetic>
          
          <Magnetic strength={0.4}>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-transform duration-300 border-[1px] border-white/20 bg-bg/50 backdrop-blur-md text-text-primary hover:border-transparent">
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-3xl" />
              <span className="relative z-10 font-medium">Contact Me</span>
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden [@media(min-height:650px)]:flex flex-col items-center gap-4 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-text-primary animate-scroll-down" />
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
}
