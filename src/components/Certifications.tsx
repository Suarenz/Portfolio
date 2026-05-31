import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

const certifications = [
  {
    title: "Introduction to Data Science",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/INTRODUCTION TO DATA SCIENCE.jfif",
    issuer: "Department of Information and Communications Technology",
    date: "2025"
  },
  {
    title: "Data Science Essentials with Python",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/DATA SCIENCE ESSENTIALS.jfif",
    issuer: "Department of Information and Communications Technology",
    date: "2025"
  },
  {
    title: "Data Analytics Essentials",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/DATA ANALYTICS ESSENTIALS.jfif",
    issuer: "Department of Information and Communications Technology",
    date: "2025"
  },
  {
    title: "AI-Powered Future: Mastering Prompt Engineering in Generative AI",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/AI POWERED FUTURE.jfif",
    issuer: "Department of Information and Communications Technology",
    date: "2025"
  },
  {
    title: "Learn ChatGPT",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/LEARN CHATGPT.jfif",
    issuer: "Department of Information and Communications Technology",
    date: "2025"
  },
  {
    title: "Data Privacy Awareness",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/DATA PRIVACY AWARENESS.jfif",
    issuer: "Department of Information and Communications Technology",
    date: "2025"
  },
  {
    title: "Artificial Intelligence in Pharmaceutical Industry",
    logo: "/assets/Udemy.png",
    certificate: "/assets/ARTIFICIAL INTELLIGENCE IN PHARMACEUTICAL INDUSTRY.jfif",
    issuer: "Udemy",
    date: "2025"
  },
  {
    title: "Data Future PH 2025",
    logo: "/assets/DAP.png",
    certificate: "/assets/DATA FUTURE PH.jfif",
    issuer: "Data Analytics Philippines",
    date: "2025"
  },
  {
    title: "Cloud Computing",
    logo: "/assets/it.png",
    certificate: "/assets/Cloud-Computing.jpg",
    issuer: "Certiport",
    date: "2026"
  }
];

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  useEffect(() => {
    if (showAllModal || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showAllModal, selectedImage]);

  // create a continuous array by duplicating the items to loop seamlessly at 50% translation
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section id="certifications" className="bg-bg py-8 md:py-16 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Certifications</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary mb-6">
              Recent <span className="italic">certifications</span>
            </h2>
            
            <p className="text-sm md:text-base text-muted">
              Professional certifications and completed courses.
            </p>
          </div>
          
          <button 
            onClick={() => setShowAllModal(true)}
            className="hidden md:inline-flex group relative rounded-full text-sm px-6 py-3 text-text-primary items-center gap-2 overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full border border-stroke group-hover:border-transparent transition-colors duration-300" />
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative w-full overflow-hidden mt-8 group flex">
        {/* Left/Right fading edges for better visual effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] py-4">
          {duplicatedCertifications.map((entry, i) => (
            <div
              key={`${entry.title}-${i}`}
              className="w-[280px] sm:w-[350px] flex-shrink-0 mx-3 sm:mx-4 cursor-pointer flex"
              onClick={() => setSelectedImage(entry.certificate)}
            >
              <div className="group/card relative flex flex-col w-full rounded-[32px] bg-surface/30 border border-stroke overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-surface hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
                
                {/* 1. The Background/Banner (Top 60%) */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-white flex-shrink-0">
                  <img 
                    src={entry.certificate} 
                    alt={`${entry.title} Certificate`} 
                    className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/20 to-surface/30 group-hover/card:to-surface" />
                </div>

                {/* 2. The Badge (Intersecting) */}
                <div className="absolute left-6 top-[160px] sm:top-[180px] -translate-y-1/2 z-10 w-12 h-12 rounded-full overflow-hidden bg-surface p-0.5 shadow-xl border border-stroke group-hover/card:border-accent transition-colors duration-300">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img 
                      src={entry.logo} 
                      alt={`${entry.issuer} Logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* 3. The Content (Bottom) */}
                <div className="flex-1 flex flex-col p-6 pt-10">
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-1 group-hover/card:text-accent transition-colors">
                    {entry.title}
                  </h3>
                  <div className="mt-auto pt-4 flex flex-col justify-end">
                    <p className="text-sm text-muted/80">{entry.issuer}</p>
                    <p className="text-xs text-muted font-mono mt-1">{entry.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {showAllModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllModal(false)}
              className="fixed inset-0 z-[9998] flex items-center justify-center bg-bg/90 backdrop-blur-sm p-4 sm:p-8"
              data-lenis-prevent
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-3xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-stroke bg-surface/95 shadow-2xl flex flex-col p-6 sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setShowAllModal(false)}
                  className="absolute top-6 right-6 z-10 p-2 bg-surface text-text-primary rounded-full hover:bg-stroke hover:scale-110 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <h3 className="text-2xl md:text-3xl font-display text-text-primary mb-6 pr-12">
                  All <span className="italic">Certifications</span>
                </h3>

                <div className="overflow-y-auto overflow-x-hidden pr-2 flex flex-col gap-3">
                  {certifications.map((entry, i) => (
                    <div 
                      key={i} 
                      className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl border border-stroke/50 bg-bg/30 hover:bg-surface hover:border-stroke transition-colors cursor-pointer"
                      onClick={() => {
                        setShowAllModal(false);
                        setTimeout(() => setSelectedImage(entry.certificate), 150);
                      }}
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 p-1 border border-stroke overflow-hidden shadow-sm">
                        <img 
                          src={entry.logo} 
                          alt={`${entry.issuer} Logo`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-text-primary truncate group-hover:text-accent transition-colors">
                          {entry.title}
                        </h4>
                        <p className="text-sm text-muted mt-0.5">
                          {entry.issuer}
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted/60 flex-shrink-0">
                        {entry.date}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Lightbox / Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg/90 backdrop-blur-sm p-4 sm:p-8"
              data-lenis-prevent
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden border border-stroke bg-surface/50 shadow-2xl flex items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 hover:scale-110 transition-all cursor-pointer backdrop-blur-md"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <img 
                  src={selectedImage} 
                  alt="Certificate Full View" 
                  className="w-full h-full max-h-[85vh] object-contain rounded-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
