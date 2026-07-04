/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Certifications Data                                                */
/* ------------------------------------------------------------------ */

interface CertItem {
  title: string;
  logo: string;
  certificate: string;
  issuer: string;
  shortIssuer: string;
  date: string;
  verifyUrl?: string;
}

const certificationsData: CertItem[] = [
  {
    title: "Introduction to Large Language Models",
    logo: "/assets/google_logo.svg",
    certificate: "/assets/google_llm_badge.svg",
    issuer: "Google",
    shortIssuer: "GOOGLE",
    date: "2026",
    verifyUrl:
      "https://www.skills.google/public_profiles/fbc12976-100a-4f8d-b3bc-2f15bd5f3998/badges/23918370?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Cloud Computing",
    logo: "/assets/it-specialist-cloud-computing.png",
    certificate: "/assets/Cloud-Computing.jpg",
    issuer: "Certiport / Pearson VUE",
    shortIssuer: "CERTIPORT",
    date: "2026",
    verifyUrl: "https://www.credly.com/badges/e6bb9e8b-160b-4e02-af67-a3758b72e2e1",
  },
  {
    title: "Data Analytics Essentials",
    logo: "/assets/DATA ANALYTICS.png",
    certificate: "/assets/DATA ANALYTICS ESSENTIALS.jfif",
    issuer: "Cisco Networking Academy / DICT",
    shortIssuer: "CISCO",
    date: "2025",
    verifyUrl: "https://www.credly.com/badges/93035a52-652e-486c-a83b-683a53182fbf",
  },
  {
    title: "Data Science Essentials With Python",
    logo: "/assets/DATA SCIENCE ESSENTIALS.png",
    certificate: "/assets/DATA SCIENCE ESSENTIALS.jfif",
    issuer: "Cisco Networking Academy / DICT",
    shortIssuer: "CISCO",
    date: "2025",
    verifyUrl: "https://www.credly.com/badges/ae0ce923-ef06-489b-bdd2-26a060e18b1a",
  },
  {
    title: "Introduction to Data Science",
    logo: "/assets/DATA SCIENCE.png",
    certificate: "/assets/INTRODUCTION TO DATA SCIENCE.jfif",
    issuer: "Cisco Networking Academy / DICT",
    shortIssuer: "CISCO",
    date: "2025",
  },
  {
    title: "AI-Powered Future: Mastering Prompt Engineering in Generative AI",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/AI POWERED FUTURE.jfif",
    issuer: "Department of Information and Communications Technology",
    shortIssuer: "DICT",
    date: "2025",
  },
  {
    title: "Learn ChatGPT",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/LEARN CHATGPT.jfif",
    issuer: "Department of Information and Communications Technology",
    shortIssuer: "DICT",
    date: "2025",
  },
  {
    title: "Data Privacy Awareness",
    logo: "/assets/Department_of_Information_and_Communications_Technology_(DICT)_-_Seal_only.svg",
    certificate: "/assets/DATA PRIVACY AWARENESS.jfif",
    issuer: "Department of Information and Communications Technology",
    shortIssuer: "DICT",
    date: "2025",
  },
  {
    title: "Artificial Intelligence in Pharmaceutical Industry",
    logo: "/assets/Udemy.png",
    certificate: "/assets/ARTIFICIAL INTELLIGENCE IN PHARMACEUTICAL INDUSTRY.jfif",
    issuer: "Udemy",
    shortIssuer: "UDEMY",
    date: "2025",
  },
  {
    title: "Data Future PH 2025",
    logo: "/assets/DAP.png",
    certificate: "/assets/DATA FUTURE PH.jfif",
    issuer: "Data Analytics Philippines",
    shortIssuer: "DAP",
    date: "2025",
  },
];

/* ------------------------------------------------------------------ */
/*  CertificationsSection Component                                    */
/* ------------------------------------------------------------------ */

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);
  const [showAllCertsModal, setShowAllCertsModal] = useState(false);

  /* Lock scroll when either modal is open */
  useEffect(() => {
    if (selectedCert || showAllCertsModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert, showAllCertsModal]);

  /* Close on Escape */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedCert) {
          setSelectedCert(null);
        } else if (showAllCertsModal) {
          setShowAllCertsModal(false);
        }
      }
    },
    [selectedCert, showAllCertsModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="certifications" className="py-14">
      {/* Section Header matching Projects section & reference image */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <span className="micro-label text-gray-400 dark:text-gray-500 font-mono text-xs sm:text-sm tracking-widest block">
          03 — certifications
        </span>
        <button
          onClick={() => setShowAllCertsModal(true)}
          className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest text-gray-400 hover:text-ink dark:text-gray-500 dark:hover:text-ink transition-colors cursor-pointer border-0 bg-transparent p-0"
        >
          <span>ALL CERTIFICATIONS</span>
          <span className="group-hover:translate-x-1 transition-transform inline-block">
            →
          </span>
        </button>
      </div>

      {/* ── Top 4 Certification Cards (Main Page Showcase) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {certificationsData.slice(0, 4).map((cert, i) => (
          <div
            key={i}
            onClick={() => {
              if (cert.verifyUrl) {
                window.open(cert.verifyUrl, "_blank");
              } else {
                setSelectedCert(cert);
              }
            }}
            className={cn(
              "group relative rounded-2xl sm:rounded-3xl border border-gray-200/90 dark:border-gray-800/80",
              "bg-white dark:bg-[#141419] p-6 sm:p-8 flex flex-col items-center justify-between text-center",
              "shadow-[0_8px_22px_-14px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.5)]",
              "hover:shadow-[0_18px_36px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]",
              "hover:-translate-y-1.5 hover:border-gray-300 dark:hover:border-gray-700",
              "transition-all duration-400 ease-out cursor-pointer select-none"
            )}
          >
            {/* Top Logo / Icon Box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white dark:bg-gray-800/80 flex items-center justify-center p-3 mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img
                src={cert.logo}
                alt={cert.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title & Short Issuer */}
            <div className="mb-6 flex flex-col items-center">
              <h3 className="font-sans text-base sm:text-lg font-semibold text-ink tracking-tight mb-1.5 leading-snug group-hover:text-ink transition-colors">
                {cert.title}
              </h3>
              <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">
                {cert.shortIssuer}
              </span>
            </div>

            {/* Verify Button (⟨ VERIFY ⟩) */}
            <div className="mt-auto pt-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-gray-400 group-hover:text-ink dark:text-gray-500 dark:group-hover:text-ink transition-colors tracking-widest font-medium">
                <span className="text-gray-300 dark:text-gray-600 group-hover:text-ink transition-colors">⟨</span>
                <span>VERIFY</span>
                <span className="text-gray-300 dark:text-gray-600 group-hover:text-ink transition-colors">⟩</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── All Certifications Modal (Triggered by ALL CERTIFICATIONS ->) ── */}
      {showAllCertsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/30 dark:bg-black/60 backdrop-blur-lg transition-opacity duration-200 animate-in fade-in"
          onClick={() => setShowAllCertsModal(false)}
        >
          <div
            className={cn(
              "relative w-full max-w-5xl max-h-[88vh] flex flex-col",
              "bg-bg border border-gray-200 dark:border-gray-800 rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)]",
              "overflow-hidden animate-in zoom-in-95 duration-200 ease-out"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 dark:border-gray-800 bg-bg/90 backdrop-blur-md sticky top-0 z-10">
              <div>
                <span className="micro-label mb-1 block">03 — certifications archive</span>
                <h3 className="font-sans text-lg sm:text-2xl font-semibold text-ink">
                  All Certifications &amp; Credentials
                </h3>
              </div>

              <button
                onClick={() => setShowAllCertsModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-ink hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content: Grid of Actual Certificate Pictures */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-gray-500 text-[15px] mb-4 max-w-xl">
                Professional badges, technical specializations, and official completion certificates. Select any picture to view the full-resolution document.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedCert(cert);
                    }}
                    className={cn(
                      "group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/20",
                      "p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer",
                      "hover:shadow-[0_18px_36px_-20px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700"
                    )}
                  >
                    <div>
                      {/* Actual Picture Thumbnail */}
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800/50 mb-4 border border-gray-200/60 dark:border-gray-800 flex items-center justify-center">
                        <img
                          src={cert.certificate}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 halftone opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-overlay" />
                      </div>

                      {/* Issuer Badge + Date */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="micro-label px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800 bg-bg text-gray-500">
                          {cert.shortIssuer}
                        </span>
                        <span className="micro-label text-gray-400">{cert.date}</span>
                      </div>

                      {/* Title */}
                      <h4 className="font-sans text-base font-semibold text-ink mb-3 group-hover:underline decoration-gray-400 underline-offset-4 line-clamp-2 leading-snug">
                        {cert.title}
                      </h4>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-3 mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-800/60 text-gray-400 group-hover:text-ink transition-colors">
                      <span className="micro-label flex items-center gap-1">
                        <span>VIEW PICTURE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="micro-label text-blue-500 hover:underline flex items-center gap-1 no-underline"
                        >
                          <span>CREDLY</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Full-screen Modal for Certificate Image Viewport ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-ink/30 dark:bg-black/60 backdrop-blur-lg transition-opacity duration-200 animate-in fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={cn(
              "relative max-w-4xl w-full max-h-[90vh] flex flex-col",
              "bg-bg border border-gray-200 dark:border-gray-800 rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)]",
              "overflow-hidden animate-in zoom-in-95 duration-200 ease-out"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800 bg-bg/90 backdrop-blur-md sticky top-0 z-10">
              <div className="min-w-0 pr-4">
                <span className="micro-label mb-1 block">
                  {selectedCert.issuer} • {selectedCert.date}
                </span>
                <h3 className="font-sans text-base sm:text-lg font-semibold text-ink truncate">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-underline text-ink"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>VERIFY ON CREDLY ↗</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-ink hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shrink-0 ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Image Viewport */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/20 max-h-[75vh]">
              <img
                src={selectedCert.certificate}
                alt={selectedCert.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
