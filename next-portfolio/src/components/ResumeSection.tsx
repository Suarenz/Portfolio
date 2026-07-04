"use client";

import { ArrowUpRight, Download, FileText, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResumeSection() {
  return (
    <section id="resume" className="py-14 pb-24">
      {/* Section Header matching Projects & Certifications */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <span className="micro-label text-gray-400 dark:text-gray-500 font-mono text-xs sm:text-sm tracking-widest block">
          04 — resume
        </span>
      </div>

      {/* ── Enhanced Curriculum Vitae & Profile Deck ── */}
      <div
        className={cn(
          "group relative rounded-2xl sm:rounded-3xl border border-gray-200/90 dark:border-gray-800/80",
          "bg-white dark:bg-[#141419] p-6 sm:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.5)]",
          "hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
        )}
      >
        {/* Top Header inside Card — Centered Preview PDF & Download Resume */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="/assets/JanReinnen_Calapao_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 text-ink font-mono text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all no-underline"
          >
            <FileText className="w-3.5 h-3.5 text-gray-500" />
            <span>Preview PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>

          <a
            href="/assets/JanReinnen_Calapao_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-ink text-bg font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl no-underline hover:opacity-85 transition-opacity duration-200 shadow-sm font-medium"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Hairline Rule per SKILL.md */}
        <div className="h-px bg-gray-200 dark:bg-gray-800/80 my-8" />

        {/* 3-Column Editorial Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Column 1: Education */}
          <div className="space-y-3">
            <span className="micro-label text-gray-400 dark:text-gray-500 block">
              01 / EDUCATION &amp; BACKGROUND
            </span>
            <h4 className="font-sans text-base font-semibold text-ink">
              B.S. in Computer Science
            </h4>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Laguna State Polytechnic University (LSPU). Specialized in Natural Language Processing (NLP), Machine Learning algorithms, and Fullstack Systems Architecture.
            </p>
          </div>

          {/* Column 2: Tech Stack */}
          <div className="space-y-3">
            <span className="micro-label text-gray-400 dark:text-gray-500 block">
              02 / TECHNICAL ARSENAL
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "TypeScript",
                "React & Next.js",
                "Python / AI",
                "PostgreSQL",
                "Laravel / PHP",
                "Tailwind CSS",
                "Docker",
                "Prisma ORM",
                "Git / CI/CD",
              ].map((tech) => (
                <span
                  key={tech}
                  className="micro-label px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 text-gray-600 dark:text-gray-300 font-medium lowercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Impact */}
          <div className="space-y-3">
            <span className="micro-label text-gray-400 dark:text-gray-500 block">
              03 / KEY HIGHLIGHTS
            </span>
            <ul className="space-y-2 text-gray-500 text-[14px] leading-relaxed list-none p-0 m-0">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 font-mono text-xs">→</span>
                <span>Engineered #1 LGU Disability System (PDAO) for Pagsanjan, Laguna.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 font-mono text-xs">→</span>
                <span>Built AI-powered document analysis &amp; QPRO engine for LSPU Strategic Plan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 font-mono text-xs">→</span>
                <span>Certified IT Specialist in Cloud Computing &amp; Cisco Data Analytics.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Contact Prompt inside Card */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Mail className="w-4 h-4 text-gray-400" />
            <span>Interested in collaborating or discussing opportunities?</span>
          </div>
          <a
            href="mailto:renzcalapao12@gmail.com"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink hover:underline font-medium"
          >
            <span>renzcalapao12@gmail.com</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
