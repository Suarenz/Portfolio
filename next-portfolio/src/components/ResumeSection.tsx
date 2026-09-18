"use client";

import {
  ArrowUpRight,
  Download,
  FileText,
  Mail,
  GraduationCap,
  Briefcase,
  Wrench,
  Award,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    category: "Cloud & Databases",
    skills: ["Microsoft Azure", "MySQL & PostgreSQL", "Cloud Database Storage"],
  },
  {
    category: "AI & Automation",
    skills: [
      "Google AI Studio",
      "Gemini & ChatGPT",
      "AI Prompt Engineering",
      "Workflow Optimization",
      "Report Automation",
    ],
  },
  {
    category: "Operations & Governance",
    skills: [
      "Data Privacy & Validation",
      "KPI Tracking & Analytics",
      "Google Workspace",
      "MS Office Suite",
    ],
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-14 pb-24">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <span className="micro-label text-gray-400 dark:text-gray-500 font-mono text-xs sm:text-sm tracking-widest block">
          04 — resume
        </span>
      </div>

      {/* ── Curriculum Vitae Card ── */}
      <div
        className={cn(
          "group relative rounded-2xl sm:rounded-3xl border border-gray-200/90 dark:border-gray-800/80",
          "bg-white dark:bg-[#141419] p-6 sm:p-9 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.5)]",
          "hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
        )}
      >
        {/* Top Header Row: Profile Title + Download/Preview Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-gray-150 dark:border-gray-800/80">
          <div>
            <span className="micro-label text-gray-400 dark:text-gray-500 mb-1.5 block">
              curriculum vitae
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-ink tracking-tight">
              Jan Reinnen Calapao
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
              B.S. in Computer Science (Intelligent Systems) • Laguna, Philippines
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-3 shrink-0">
            <span className="inline-flex items-center self-start sm:self-end whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-medium bg-gray-100 dark:bg-gray-800/70 text-ink dark:text-gray-300 border border-gray-200 dark:border-gray-700/80">
              ● Available for Roles
            </span>

            <div className="flex items-center gap-2.5">
              <a
                href="/assets/JanReinnen_Calapao_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/50 text-ink font-mono text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-underline"
              >
                <FileText className="w-3.5 h-3.5 text-gray-500" />
                <span>Preview PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <a
                href="/assets/JanReinnen_Calapao_Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-ink text-bg font-mono text-xs uppercase tracking-wider px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl no-underline hover:opacity-85 transition-opacity duration-200 shadow-sm font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Section 01: Work Experience & Leadership ── */}
        <div className="py-6 border-b border-gray-150 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-gray-400" />
            <span className="micro-label text-gray-400 dark:text-gray-500">
              01 / work experience &amp; highlights
            </span>
          </div>

          <div className="space-y-3.5">
            {/* Experience 1 */}
            <div className="p-4 sm:p-5 rounded-xl border border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/30">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-1.5">
                <h4 className="font-sans text-sm sm:text-base font-semibold text-ink">
                  Municipality of Pagsanjan – PDAO
                </h4>
                <span className="font-mono text-xs text-gray-400 dark:text-gray-500 shrink-0">
                  Internship • 2026
                </span>
              </div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                Technical Support &amp; Data Intern
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-[13.5px] leading-relaxed">
                Digitized citizen records and automated reporting workflows, streamlining registry operations and service distribution for over 1,500+ constituents.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="p-4 sm:p-5 rounded-xl border border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/30">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-1.5">
                <h4 className="font-sans text-sm sm:text-base font-semibold text-ink">
                  KMIS for LSPU-SCC
                </h4>
                <span className="font-mono text-xs text-gray-400 dark:text-gray-500 shrink-0">
                  Academic / Capstone
                </span>
              </div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                Lead Project Administrator &amp; Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-[13.5px] leading-relaxed">
                Architected a centralized KPI dashboard and cloud database repository to monitor institutional deliverables, performance metrics, and department reporting.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 02: Education & Academic Honors ── */}
        <div className="py-6 border-b border-gray-150 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <span className="micro-label text-gray-400 dark:text-gray-500">
              02 / education &amp; academic background
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl border border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/30">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-1.5">
              <h4 className="font-sans text-sm sm:text-base font-semibold text-ink">
                B.S. in Computer Science
              </h4>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-gray-200/70 dark:bg-gray-800 text-ink">
                  GWA: 1.59
                </span>
                <span className="font-mono text-xs text-gray-400 dark:text-gray-500">
                  2022–2026
                </span>
              </div>
            </div>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
              Major in Intelligent Systems • Laguna State Polytechnic University (Sta. Cruz Campus)
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-[13.5px] leading-relaxed">
              Solid theoretical and applied foundation in intelligent systems, database administration, workflow automation, and predictive data modeling.
            </p>
          </div>
        </div>

        {/* ── Section 03: Core Competencies & Tools ── */}
        <div className="py-6 border-b border-gray-150 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-3.5 h-3.5 text-gray-400" />
            <span className="micro-label text-gray-400 dark:text-gray-500">
              03 / core competencies &amp; tools
            </span>
          </div>

          <div className="space-y-3">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="p-3.5 sm:p-4 rounded-xl border border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/30"
              >
                <span className="micro-label text-gray-400 dark:text-gray-500 block mb-2 text-[10px]">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono border border-gray-200/80 dark:border-gray-800/90 bg-white dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 font-medium hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 04: Key Certifications Highlights ── */}
        <div className="pt-6 pb-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-gray-400" />
              <span className="micro-label text-gray-400 dark:text-gray-500">
                verified credentials &amp; certifications
              </span>
            </div>
            <a
              href="#certifications"
              className="text-xs font-mono text-gray-400 hover:text-ink transition-colors inline-flex items-center gap-1 no-underline"
            >
              <span>View All 10</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              "Cloud Computing (Certiport)",
              "Azure AI Fundamentals (TESDA)",
              "Cisco Data Analytics Essentials",
              "AI Prompt Engineering (DICT)",
            ].map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-gray-200/70 dark:border-gray-800/70 bg-gray-50/60 dark:bg-gray-900/30 text-gray-600 dark:text-gray-300 text-[11px]"
              >
                <Sparkles className="w-2.5 h-2.5 text-gray-400 dark:text-gray-500" />
                <span>{cert}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom Contact & Discussion Bar ── */}
        <div className="mt-8 pt-6 border-t border-gray-150 dark:border-gray-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
            <span>Interested in collaborating or discussing opportunities?</span>
          </div>
          <a
            href="mailto:renzcalapao12@gmail.com"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink hover:underline font-medium shrink-0"
          >
            <span>renzcalapao12@gmail.com</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
