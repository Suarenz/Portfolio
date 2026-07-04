/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useCallback } from "react";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects & Subsystem Data                                          */
/* ------------------------------------------------------------------ */

interface SubSection {
  image: string;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  cardTitle: string;
  badges: string[];
  shortDesc: string;
  fullDesc: string;
  image: string;
  github?: string;
  live?: string;
  tags: string[];
  sections: SubSection[];
}

const projectsData: Project[] = [
  {
    id: "pdao",
    title: "Pagsanjan Data Disability Management System",
    cardTitle: "PDAO — Disability System",
    badges: [
      "( #1 LGU SYSTEM )",
      "PAGSANJAN, LAGUNA",
      "BUILT FOR THE PHILIPPINES",
    ],
    shortDesc:
      "Comprehensive web-based data management system for the Person with Disability Affairs Office (PDAO) of Pagsanjan, Laguna.",
    fullDesc:
      "A comprehensive web-based data management system for the Person with Disability Affairs Office (PDAO) of Pagsanjan, Laguna, Philippines. Built with React, TypeScript, Tailwind CSS, and Laravel, it manages PWD registration, ID generation, approval workflows, appointment scheduling, service requests, analytics dashboards, and reporting.",
    image: "/assets/PDAO/Gemini_Generated_Image_r26l18r26l18r26l.png",
    github: "https://github.com/Suarenz/PDAO-system",
    tags: ["REACT", "TYPESCRIPT", "LARAVEL", "TAILWIND"],
    sections: [
      {
        image: "/assets/PDAO/LOGIN SECTION.jfif",
        title: "LOGIN SECTION",
        description:
          "Secure authentication gateway for administrative access, ensuring data privacy and role-based permissions.",
      },
      {
        image: "/assets/PDAO/DASHBOARD.jfif",
        title: "DASHBOARD",
        description:
          "The central hub providing an overview of PWD statistics, recent registrations, and quick navigation to all system modules.",
      },
      {
        image: "/assets/PDAO/PWD REGISTRATION FORM.jfif",
        title: "PWD REGISTRATION FORM",
        description:
          "Comprehensive data entry interface for capturing detailed information of Persons with Disabilities, following standardized formats.",
      },
      {
        image: "/assets/PDAO/ID CARD GENERATION.jfif",
        title: "ID CARD GENERATION",
        description:
          "Automated tool for generating official PWD Identification Cards with unique QR codes and registered data.",
      },
      {
        image: "/assets/PDAO/ID CARD LAYOUT EDITOR.jfif",
        title: "ID CARD LAYOUT EDITOR",
        description:
          "Customizable visual editor allowing administrators to design and adjust the layout elements of the PWD ID cards.",
      },
      {
        image: "/assets/PDAO/REPORTS SECTION.jfif",
        title: "REPORTS SECTION",
        description:
          "Advanced analytics and report generation module for extracting organized data, demographic breakdowns, and printable summaries.",
      },
      {
        image: "/assets/PDAO/BACKUP SECTION.jfif",
        title: "BACKUP SECTION",
        description:
          "Essential data management interface for creating regular backups and restoring system databases to prevent data loss.",
      },
    ],
  },
  {
    id: "kmis",
    title: "Knowledge Management Information System — LSPU",
    cardTitle: "KMIS — Knowledge System",
    badges: [
      "( #1 AI ENGINE )",
      "LSPU STRATEGIC PLAN",
      "QPRO ANALYTICS",
    ],
    shortDesc:
      "AI-powered document analysis engine, KPI/KRA dashboards, and semantic search aligned with LSPU Strategic Plan 2025–2029.",
    fullDesc:
      "AI-powered Knowledge Management Information System for Laguna State Polytechnic University — Document management, QPRO analysis engine, semantic search, and KPI/KRA dashboards aligned with LSPU Strategic Plan 2025–2029. Built with Next.js, TypeScript, PostgreSQL, Prisma, and Docker.",
    image: "/assets/KMIS/LSPU PHOTO.png",
    live: "https://lspu-kmis.onrender.com",
    github: "https://github.com/Suarenz/lspukmis",
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "AI/ML"],
    sections: [
      {
        image: "/assets/KMIS/login.jfif",
        title: "LOGIN",
        description:
          "Secure and role-based access control gateway ensuring correct permissions for university personnel.",
      },
      {
        image: "/assets/KMIS/dashboards.jfif",
        title: "DASHBOARDS",
        description:
          "KPI/KRA dashboards seamlessly aligned with the LSPU Strategic Plan 2025–2029 for comprehensive analytics.",
      },
      {
        image: "/assets/KMIS/document analysis section.jfif",
        title: "DOCUMENT ANALYSIS SECTION",
        description:
          "An AI-powered document analysis engine designed to evaluate reports and summarize findings in real-time.",
      },
      {
        image: "/assets/KMIS/quarterly performance report of operations section.jfif",
        title: "QUARTERLY PERFORMANCE REPORT OF OPERATIONS SECTION",
        description:
          "Module for structured QPRO analysis tracking and dynamic operational metric processing.",
      },
      {
        image: "/assets/KMIS/repository section.jfif",
        title: "REPOSITORY SECTION",
        description:
          "Centralized document management interface equipped with semantic search capabilities.",
      },
    ],
  },
  {
    id: "robotics",
    title: "Smart Robot Car Powered with ESP32",
    cardTitle: "Tekla — Smart Robot Car",
    badges: [
      "( IOT BATTLE BOT )",
      "TEKLA CYBERTRUCK",
      "ESP32 & C++",
    ],
    shortDesc:
      "Wi-Fi-controlled battle bot ('Tekla Cybertruck') featuring automated obstacle detection and multi-directional joystick app control.",
    fullDesc:
      "The 'Battle Bot', specifically named 'Tekla Cybertruck', is a robotics project demonstrating the integration of hardware components and software to create a Wi-Fi-controlled robot. Driven by an ESP32 microcontroller and an L298N motor driver, it features automated obstacle detection using an ultrasonic sensor and remote multi-directional control via a mobile application.",
    image: "/assets/ROBOTICS/front2.jpg",
    tags: ["ESP32", "C++", "IOT", "ROBOTICS"],
    sections: [
      {
        image: "/assets/ROBOTICS/front1.jpg",
        title: "FRONT VIEW 1",
        description:
          "Front-facing perspective of the Tekla Cybertruck, highlighting the sleek acrylic chassis and sensor placement.",
      },
      {
        image: "/assets/ROBOTICS/front2.jpg",
        title: "FRONT VIEW 2",
        description:
          "Alternative front view showing the structural integrity and component arrangement of the robot car.",
      },
      {
        image: "/assets/ROBOTICS/Actual Picture.jpg",
        title: "ACTUAL PICTURE",
        description:
          "Full structural view of the Smart Robot Car, showcasing the integration of the ESP32, motor drivers, and power system.",
      },
      {
        image: "/assets/ROBOTICS/Actual Picture 2.jfif",
        title: "ACTUAL PICTURE 2",
        description:
          "The completed 'Battle Bot' (Tekla Cybertruck) showcasing its acrylic and aluminum chassis, driven by four DC motors and an ESP32 microcontroller.",
      },
      {
        image: "/assets/ROBOTICS/Building Stage 1.jfif",
        title: "BUILDING STAGE 1",
        description:
          "Initial phase of construction focusing on the drive system powered by four 18650 batteries and an L298N motor driver for multi-directional movement.",
      },
      {
        image: "/assets/ROBOTICS/Building Stage 2.jfif",
        title: "BUILDING STAGE 2",
        description:
          "Mounting the ESP32 Expansion Board and integrating the core hardware components with various jumper wires.",
      },
      {
        image: "/assets/ROBOTICS/Building Stage 3.jfif",
        title: "BUILDING STAGE 3",
        description:
          "Installing the HC-SR04 ultrasonic sensor for automated obstacle detection and avoidance capabilities within 20 cm.",
      },
      {
        image: "/assets/ROBOTICS/Controller via Phone.jfif",
        title: "CONTROLLER VIA PHONE",
        description:
          "Graphical interface accessed via the RemoteXY app over a dedicated Wi-Fi network, featuring a joystick for movement and an immediate ON/OFF safety switch.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  SelectedProjects Component                                         */
/* ------------------------------------------------------------------ */

export function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjectsModal, setShowAllProjectsModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /* Lock scroll when either modal is open */
  useEffect(() => {
    if (selectedProject || showAllProjectsModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, showAllProjectsModal]);

  /* Close on Escape */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProject) {
          setSelectedProject(null);
        } else if (showAllProjectsModal) {
          setShowAllProjectsModal(false);
        }
      }
    },
    [selectedProject, showAllProjectsModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="projects" className="py-14">
      {/* Section Header matching light & dark reference images */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <span className="micro-label text-gray-400 dark:text-gray-500 font-mono text-xs sm:text-sm tracking-widest block">
          02 — projects
        </span>
        <button
          onClick={() => setShowAllProjectsModal(true)}
          className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest text-gray-400 hover:text-ink dark:text-gray-500 dark:hover:text-ink transition-colors cursor-pointer border-0 bg-transparent p-0"
        >
          <span>ALL PROJECTS</span>
          <span className="group-hover:translate-x-1 transition-transform inline-block">
            →
          </span>
        </button>
      </div>

      {/* Fanned-out Projects Showcase Deck */}
      <div className="relative w-full max-w-2xl mx-auto h-[380px] sm:h-[420px] flex items-center justify-center my-6 sm:my-10 select-none">
        {projectsData.map((project, idx) => {
          const isHovered = hoveredIndex === idx;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== idx;

          // Determine base transform based on card position (0: left, 1: center, 2: right)
          let baseTransform = "translate-x-0 translate-y-0 rotate-0 z-20";
          if (idx === 0) {
            baseTransform =
              "-translate-x-12 sm:-translate-x-28 md:-translate-x-36 translate-y-4 sm:translate-y-6 -rotate-6 sm:-rotate-12 z-10";
          } else if (idx === 2) {
            baseTransform =
              "translate-x-12 sm:translate-x-28 md:translate-x-36 translate-y-4 sm:translate-y-6 rotate-6 sm:rotate-12 z-10";
          }

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "absolute w-[280px] sm:w-[350px] md:w-[400px] min-h-[310px] sm:min-h-[350px]",
                "rounded-2xl sm:rounded-3xl border border-gray-200/90 dark:border-gray-800/80",
                "bg-white dark:bg-[#141419] backdrop-blur-xl",
                "p-5 sm:p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]",
                "transition-all duration-500 cubic-bezier(0.16,1,0.3,1) cursor-pointer",
                "flex flex-col justify-between",
                isHovered
                  ? "translate-x-0 -translate-y-3 rotate-0 !z-40 !opacity-100 scale-105 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.18)] dark:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.9)] border-gray-300 dark:border-gray-600"
                  : baseTransform,
                isOtherHovered ? "opacity-60 sm:opacity-70 scale-95" : "opacity-95"
              )}
            >
              {/* Card Badges */}
              <div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.badges.map((badge, bIdx) => (
                    <span
                      key={badge}
                      className={cn(
                        "inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] sm:text-[11px] tracking-wide",
                        bIdx === 0
                          ? "bg-black text-white dark:bg-white dark:text-black font-bold shadow-sm"
                          : "border border-gray-200/80 dark:border-gray-800 bg-white/90 dark:bg-gray-800/40 text-gray-400 dark:text-gray-400"
                      )}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/90 dark:border-gray-700/80 bg-gray-100 dark:bg-gray-800 shrink-0 shadow-sm">
                    <img
                      src={project.image}
                      alt={project.cardTitle}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="font-mono text-base sm:text-lg font-medium text-ink tracking-tight leading-snug group-hover:text-blue-500 transition-colors">
                    {project.cardTitle}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 text-[13px] sm:text-[14px] leading-relaxed line-clamp-3 mb-6">
                  {project.shortDesc}
                </p>
              </div>

              {/* Action Buttons at bottom (styled after app store pills in light/dark mode) */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-800/60 mt-auto">
                {project.live && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.live, "_blank");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] sm:text-[11px] font-medium hover:opacity-85 transition-all shadow-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Live Demo</span>
                  </span>
                )}
                {project.github && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, "_blank");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-800/60 text-ink font-mono text-[10px] sm:text-[11px] font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>GitHub</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] sm:text-[11px] font-medium ml-auto hover:opacity-85 transition-all shadow-sm">
                  <span>Case Study</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── All Projects Modal (Triggered by ALL PROJECTS ->) ── */}
      {showAllProjectsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/30 dark:bg-black/60 backdrop-blur-lg transition-opacity duration-200 animate-in fade-in"
          onClick={() => setShowAllProjectsModal(false)}
        >
          <div
            className={cn(
              "relative w-full max-w-4xl max-h-[88vh] flex flex-col",
              "bg-bg border border-gray-200 dark:border-gray-800 rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)]",
              "overflow-hidden animate-in zoom-in-95 duration-200 ease-out"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 dark:border-gray-800 bg-bg/90 backdrop-blur-md sticky top-0 z-10">
              <div>
                <span className="micro-label mb-1 block">02 — projects archive</span>
                <h3 className="font-sans text-lg sm:text-2xl font-semibold text-ink">
                  All Projects &amp; Case Studies
                </h3>
              </div>

              <button
                onClick={() => setShowAllProjectsModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-ink hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content: Grid of All Projects */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-gray-500 text-[15px] mb-4 max-w-xl">
                Purpose-driven software and digital tools engineered to solve complex problems and empower users. Select any project to view its full technical case study.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                    }}
                    className={cn(
                      "group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/20",
                      "p-4 sm:p-6 transition-all duration-350 ease-out cursor-pointer",
                      "hover:shadow-[0_18px_36px_-20px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700"
                    )}
                  >
                    {/* Top Preview Image */}
                    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800/50 mb-5 border border-gray-200/60 dark:border-gray-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 halftone opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-overlay" />
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="max-w-xl">
                        <div className="flex flex-wrap gap-1.5 mb-2.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="micro-label px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-800 bg-bg text-gray-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h4 className="font-sans text-lg sm:text-xl font-semibold text-ink mb-2 group-hover:text-ink transition-colors flex items-center gap-1.5">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-gray-400" />
                        </h4>

                        <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed">
                          {project.shortDesc}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="sm:self-end shrink-0 mt-2 sm:mt-0">
                        <span className="micro-label inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-bg group-hover:bg-ink group-hover:text-bg group-hover:border-ink transition-all duration-200">
                          <span>VIEW DETAILS</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Full-screen Modal for Project Details (Case Study) ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-ink/30 dark:bg-black/60 backdrop-blur-lg transition-opacity duration-200 animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={cn(
              "relative w-full max-w-4xl max-h-[88vh] flex flex-col",
              "bg-bg border border-gray-200 dark:border-gray-800 rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)]",
              "overflow-hidden animate-in zoom-in-95 duration-200 ease-out"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 dark:border-gray-800 bg-bg/90 backdrop-blur-md sticky top-0 z-10">
              <div>
                <span className="micro-label mb-1 block">Project Case Study</span>
                <h3 className="font-sans text-lg sm:text-2xl font-semibold text-ink">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-underline text-ink"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>LIVE SITE ↗</span>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-underline text-ink"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>REPO ↗</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-ink hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-10">
              {/* Overview Box */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 p-5 sm:p-6">
                <span className="micro-label mb-2 block text-ink">System Overview</span>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Subsections */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="micro-label text-ink">System Modules &amp; Interfaces</span>
                  <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1" />
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {selectedProject.sections.map((sec, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-gray-50/30 dark:bg-gray-900/10 flex flex-col sm:flex-row gap-5 p-4 sm:p-5 items-center"
                    >
                      <div className="w-full sm:w-1/2 aspect-[16/10] rounded-lg overflow-hidden border border-gray-200/80 dark:border-gray-800 bg-bg shrink-0">
                        <img
                          src={sec.image}
                          alt={sec.title}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col justify-center w-full sm:w-1/2">
                        <span className="micro-label mb-1.5 text-ink">
                          MODULE {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h4 className="font-sans text-base font-semibold text-ink mb-2">
                          {sec.title}
                        </h4>
                        <p className="text-gray-500 text-[14px] leading-relaxed">
                          {sec.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

