/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared nav data (same as Sidebar)                                  */
/* ------------------------------------------------------------------ */

const navItems = [
  { label: "home", href: "/#home" },
  { label: "projects", href: "/#projects" },
  { label: "certifications", href: "/#certifications" },
  { label: "resume", href: "/#resume" },
];

const secondaryNavItems = [
  { label: "tools & technologies", href: "/tools" },
  { label: "gears", href: "/gears" },
];

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/Suarenz" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/suarenz/" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/suarenz_/" },
  { label: "EMAIL", href: "mailto:renzcalapao12@gmail.com" },
];

/* ------------------------------------------------------------------ */
/*  Mobile theme toggle (inline)                                       */
/* ------------------------------------------------------------------ */

function MobileThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-8 w-8" />;

  const options = [
    { value: "light", icon: Sun },
    { value: "dark", icon: Moon },
    { value: "system", icon: Monitor },
  ] as const;

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-200 p-1">
      {options.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            "p-1.5 rounded-full transition-colors duration-200",
            theme === value
              ? "bg-ink text-bg"
              : "text-gray-400 hover:text-ink"
          )}
          aria-label={`Switch to ${value} theme`}
        >
          <Icon className="w-3.5 h-3.5" />
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Header                                                      */
/* ------------------------------------------------------------------ */

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Close on Escape */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  /* Lock body scroll when menu open */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* ── Sticky top bar ── */}
      <header
        className={cn(
          "sticky top-0 z-40 flex items-center justify-between",
          "lg:hidden",
          "h-14 px-4",
          "border-b border-gray-200",
          "bg-bg/90 backdrop-blur-md"
        )}
      >
        {/* Name */}
        <Link
          href="/"
          className="font-pixel text-base text-ink tracking-tight no-underline hover:no-underline"
        >
          Jan Reinnen Calapao
        </Link>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <MobileThemeToggle />

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-md text-ink hover:bg-gray-100 transition-colors duration-200"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── Full-screen overlay menu ── */}
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-200",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}
      >
        {/* Ink overlay at 30% + backdrop blur (per SKILL.md modal spec) */}
        <div
          className="absolute inset-0 bg-ink/30 backdrop-blur-lg"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Centered panel */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center p-6",
            "transition-all duration-200 ease-out",
            isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          <div
            className={cn(
              "relative w-full max-w-sm",
              "bg-bg border border-gray-200 rounded-2xl",
              "p-7 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.35)]"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-md text-gray-400 hover:text-ink hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 mb-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2.5 px-3 text-lg font-pixel lowercase text-ink no-underline hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Rule */}
            <div className="h-px bg-gray-200 dark:bg-gray-800 mb-4" />

            {/* Secondary Nav links */}
            <nav className="flex flex-col gap-1 mb-8">
              {secondaryNavItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2.5 px-3 text-lg font-pixel lowercase text-ink no-underline hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Rule */}
            <div className="h-px bg-gray-200 mb-5" />

            {/* Social links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="micro-label flex items-center gap-1 py-1 no-underline hover:text-ink transition-colors duration-200"
                >
                  <span>{label}</span>
                  <span className="text-[8px]" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            {/* Rule */}
            <div className="h-px bg-gray-200 mb-5" />

            {/* Contact email */}
            <div className="mb-6">
              <p className="text-[11px] text-gray-500 leading-relaxed mb-1">
                For work, collabs &amp; everything else, reach me at
              </p>
              <a
                href="mailto:renzcalapao12@gmail.com"
                className="text-xs font-mono text-ink hover:underline flex items-center gap-1.5 break-all"
              >
                <span>✉</span>
                <span>renzcalapao12@gmail.com</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="micro-label">
              © {new Date().getFullYear()} Jan Reinnen Calapao
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
