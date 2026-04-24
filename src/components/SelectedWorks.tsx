import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, X, ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
  {
    title: "Pagsanjan Data Disability Management System",
    span: "md:col-span-12",
    image: "/assets/PDAO/Gemini_Generated_Image_r26l18r26l18r26l.png",
    aspect: "aspect-[4/3] md:aspect-[21/9]"
  },
  {
    title: "Knowledge Management Information System - LSPU",
    span: "md:col-span-6",
    image: "/assets/KMIS/LSPU PHOTO.png",
    aspect: "aspect-[4/3] md:aspect-[16/9]"
  },
  {
    title: "Smart Robot Car Powered with ESP32",
    span: "md:col-span-6",
    image: "/assets/ROBOTICS/front2.jpg",
    aspect: "aspect-[4/3] md:aspect-[16/9]"
  }
];

const pdaoSections = [
  { image: "/assets/PDAO/LOGIN SECTION.jfif", title: "LOGIN SECTION", description: "Secure authentication gateway for administrative access, ensuring data privacy and role-based permissions." },
  { image: "/assets/PDAO/DASHBOARD.jfif", title: "DASHBOARD", description: "The central hub providing an overview of PWD statistics, recent registrations, and quick navigation to all system modules." },
  { image: "/assets/PDAO/PWD REGISTRATION FORM.jfif", title: "PWD REGISTRATION FORM", description: "Comprehensive data entry interface for capturing detailed information of Persons with Disabilities, following standardized formats." },
  { image: "/assets/PDAO/ID CARD GENERATION.jfif", title: "ID CARD GENERATION", description: "Automated tool for generating official PWD Identification Cards with unique QR codes and registered data." },
  { image: "/assets/PDAO/ID CARD LAYOUT EDITOR.jfif", title: "ID CARD LAYOUT EDITOR", description: "Customizable visual editor allowing administrators to design and adjust the layout elements of the PWD ID cards." },
  { image: "/assets/PDAO/REPORTS SECTION.jfif", title: "REPORTS SECTION", description: "Advanced analytics and report generation module for extracting organized data, demographic breakdowns, and printable summaries." },
  { image: "/assets/PDAO/BACKUP SECTION.jfif", title: "BACKUP SECTION", description: "Essential data management interface for creating regular backups and restoring system databases to prevent data loss." }
];

const kmisSections = [
  { image: "/assets/KMIS/login.jfif", title: "LOGIN", description: "Secure and role-based access control gateway ensuring correct permissions for university personnel." },
  { image: "/assets/KMIS/dashboards.jfif", title: "DASHBOARDS", description: "KPI/KRA dashboards seamlessly aligned with the LSPU Strategic Plan 2025–2029 for comprehensive analytics." },
  { image: "/assets/KMIS/document analysis section.jfif", title: "DOCUMENT ANALYSIS SECTION", description: "An AI-powered document analysis engine designed to evaluate reports and summarize findings in real-time." },
  { image: "/assets/KMIS/quarterly performance report of operations section.jfif", title: "QUARTERLY PERFORMANCE REPORT OF OPERATIONS SECTION", description: "Module for structured QPRO analysis tracking and dynamic operational metric processing." },
  { image: "/assets/KMIS/repository section.jfif", title: "REPOSITORY SECTION", description: "Centralized document management interface equipped with semantic search capabilities." }
];

const roboticsSections = [
  { image: "/assets/ROBOTICS/front1.jpg", title: "FRONT VIEW 1", description: "Front-facing perspective of the Tekla Cybertruck, highlighting the sleek acrylic chassis and sensor placement." },
  { image: "/assets/ROBOTICS/front2.jpg", title: "FRONT VIEW 2", description: "Alternative front view showing the structural integrity and component arrangement of the robot car." },
  { image: "/assets/ROBOTICS/Actual Picture.jpg", title: "ACTUAL PICTURE", description: "Full structural view of the Smart Robot Car, showcasing the integration of the ESP32, motor drivers, and power system." },
  { image: "/assets/ROBOTICS/Actual Picture 2.jfif", title: "ACTUAL PICTURE 2", description: "The completed 'Battle Bot' (Tekla Cybertruck) showcasing its acrylic and aluminum chassis, driven by four DC motors and an ESP32 microcontroller." },
  { image: "/assets/ROBOTICS/Building Stage 1.jfif", title: "BUILDING STAGE 1", description: "Initial phase of construction focusing on the drive system powered by four 18650 batteries and an L298N motor driver for multi-directional movement." },
  { image: "/assets/ROBOTICS/Building Stage 2.jfif", title: "BUILDING STAGE 2", description: "Mounting the ESP32 Expansion Board and integrating the core hardware components with various jumper wires." },
  { image: "/assets/ROBOTICS/Building Stage 3.jfif", title: "BUILDING STAGE 3", description: "Installing the HC-SR04 ultrasonic sensor for automated obstacle detection and avoidance capabilities within 20 cm." },
  { image: "/assets/ROBOTICS/Controller via Phone.jfif", title: "CONTROLLER VIA PHONE", description: "Graphical interface accessed via the RemoteXY app over a dedicated Wi-Fi network, featuring a joystick for movement and an immediate ON/OFF safety switch." }
];

export function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate parallax offsets based on odd/even or index
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="work" className="bg-bg py-8 md:py-12 relative" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary mb-6">
              Featured <span className="italic">projects</span>
            </h2>
            
            <p className="text-sm md:text-base text-muted">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              layoutId={`project-${project.title}`}
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ y: i % 2 === 0 ? yParallaxFast : yParallaxSlow }}
              data-cursor="VIEW"
              className={cn(
                "group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer",
                project.span,
                project.aspect
              )}
              onClick={() => (project.title === "Pagsanjan Data Disability Management System" || project.title === "Knowledge Management Information System - LSPU" || project.title === "Smart Robot Car Powered with ESP32") && setSelectedProject(project.title)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className={cn(
                  "absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105",
                  (project.title === "Pagsanjan Data Disability Management System" || project.title === "Knowledge Management Information System - LSPU" || project.title === "Smart Robot Car Powered with ESP32") ? "object-contain bg-white/5" : "object-cover"
                )}
                referrerPolicy="no-referrer"
              />
              
              {/* Halftone Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[length:4px_4px] opacity-20 mix-blend-multiply pointer-events-none" />
              
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <button className="mt-8 w-full md:hidden group relative rounded-full text-sm px-6 py-4 text-text-primary items-center justify-center gap-2 overflow-hidden border border-stroke">
          <span className="relative z-10 flex items-center gap-2">
            View all work <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* PDAO Project Modal */}
      <AnimatePresence>
        {selectedProject === "Pagsanjan Data Disability Management System" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-Pagsanjan Data Disability Management System`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-surface border border-stroke rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start p-4 sm:p-6 border-b border-stroke sticky top-0 bg-surface/90 backdrop-blur z-10 gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                  <h3 className="text-xl md:text-2xl font-display text-text-primary">
                    Pagsanjan Data Disability Management System
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <a 
                      href="https://github.com/Suarenz/PDAO-system" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted hover:text-text-primary transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-stroke"
                    >
                      <Github className="w-4 h-4" /> Repository
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-stroke text-muted hover:text-text-primary transition-colors self-start"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto scrollbar-hide space-y-12">
                {/* Brief project description */}
                <div className="max-w-3xl border-l-2 border-stroke pl-6 py-2">
                  <p className="text-muted text-sm md:text-base leading-relaxed">
                    A comprehensive web-based data management system for the Person with Disability Affairs Office (PDAO) of Pagsanjan, Laguna, Philippines. 
                    Built with React 19, TypeScript, Tailwind CSS, and Laravel 11, it manages PWD registration, ID generation, approval workflows, 
                    appointment scheduling, service requests, analytics dashboards, and reporting.
                  </p>
                </div>

                {pdaoSections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-stroke bg-bg/50">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto object-cover md:object-contain min-h-[300px] md:max-h-[85vh] block"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-medium text-text-primary mb-2">
                        {section.title}
                      </h4>
                      <p className="text-muted text-sm md:text-base">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* KMIS Project Modal */}
      <AnimatePresence>
        {selectedProject === "Knowledge Management Information System - LSPU" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-surface border border-stroke rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start p-4 sm:p-6 border-b border-stroke sticky top-0 bg-surface/90 backdrop-blur z-10 gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                  <h3 className="text-xl md:text-2xl font-display text-text-primary">
                    LSPU Knowledge Management Information System
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <a 
                      href="https://lspu-kmis.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted hover:text-text-primary transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-stroke"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Site
                    </a>
                    <a 
                      href="https://github.com/Suarenz/lspukmis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted hover:text-text-primary transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-stroke"
                    >
                      <Github className="w-4 h-4" /> Repository
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-stroke text-muted hover:text-text-primary transition-colors self-start"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto scrollbar-hide space-y-12">
                {/* Brief project description */}
                <div className="max-w-3xl border-l-2 border-stroke pl-6 py-2">
                  <p className="text-muted text-sm md:text-base leading-relaxed">
                    AI-powered Knowledge Management Information System for Laguna State Polytechnic University — 
                    Document management, QPRO analysis engine, semantic search, and KPI/KRA dashboards aligned 
                    with LSPU Strategic Plan 2025–2029. Built with Next.js 16, TypeScript, PostgreSQL, Prisma, and Docker.
                  </p>
                </div>

                {kmisSections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-stroke bg-bg/50">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto object-cover md:object-contain min-h-[300px] md:max-h-[85vh] block"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-medium text-text-primary mb-2">
                        {section.title}
                      </h4>
                      <p className="text-muted text-sm md:text-base">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robotics Project Modal */}
      <AnimatePresence>
        {selectedProject === "Smart Robot Car Powered with ESP32" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-surface border border-stroke rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start p-4 sm:p-6 border-b border-stroke sticky top-0 bg-surface/90 backdrop-blur z-10 gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                  <h3 className="text-xl md:text-2xl font-display text-text-primary">
                    Smart Robot Car Powered with ESP32 (Tekla Cybertruck)
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-stroke text-muted hover:text-text-primary transition-colors self-start"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto scrollbar-hide space-y-12">
                {/* Brief project description */}
                <div className="max-w-3xl border-l-2 border-stroke pl-6 py-2">
                  <p className="text-muted text-sm md:text-base leading-relaxed">
                    The "Battle Bot", specifically named "Tekla Cybertruck", is a robotics project demonstrating the integration of hardware 
                    components and software to create a Wi-Fi-controlled robot. Driven by an ESP32 microcontroller and an L298N motor driver, 
                    it features automated obstacle detection using an ultrasonic sensor and remote multi-directional control via a 
                    mobile application.
                  </p>
                </div>

                {roboticsSections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-stroke bg-bg/50">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto object-cover md:object-contain min-h-[300px] md:max-h-[85vh] block"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-medium text-text-primary mb-2">
                        {section.title}
                      </h4>
                      <p className="text-muted text-sm md:text-base">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
