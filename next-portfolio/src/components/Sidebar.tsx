/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Sun, Moon, Monitor } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Navigation data                                                    */
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
/*  Theme toggle                                                       */
/* ------------------------------------------------------------------ */

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent hydration mismatch — render placeholder with same dimensions
    return <div className="h-8 w-full" />;
  }

  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ] as const;

  return (
    <div className="flex flex-col gap-1.5">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            "flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider transition-colors duration-200",
            theme === value
              ? "text-ink bg-gray-100"
              : "text-gray-500 hover:text-ink"
          )}
          aria-label={`Switch to ${label} theme`}
        >
          <Icon className="w-3 h-3 shrink-0" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sidebar component                                                  */
/* ------------------------------------------------------------------ */

export function Sidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  /* Track active section accurately on scroll and route changes */
  useEffect(() => {
    if (pathname === "/tools") {
      setActiveSection("tools & technologies");
      return;
    }
    if (pathname === "/gears") {
      setActiveSection("gears");
      return;
    }

    const sectionIds = navItems.map((item) => item.href.split("#")[1]);

    const handleScroll = () => {
      // 1. Top of page edge case
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // 2. Bottom of page edge case
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // 3. General case: find section whose top is at or above 45% of viewport
      const threshold = window.innerHeight * 0.45;
      let currentActive = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentActive = id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial check after mount
    handleScroll();
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-screen w-56",
        "hidden lg:flex flex-col",
        "border-r border-gray-200",
        "bg-bg",
        "px-5 py-8"
      )}
      aria-label="Sidebar navigation"
    >
      {/* ── Name / logo ── */}
      <Link
        href="/"
        className="font-pixel text-[17px] leading-tight text-ink tracking-tight no-underline hover:no-underline mb-8 block"
      >
        Jan Reinnen Calapao
      </Link>

      {/* ── Rule ── */}
      <div className="h-px bg-gray-200 mb-6" />

      {/* ── Main Nav links ── */}
      <nav className="flex flex-col gap-0.5">
        {navItems.map(({ label, href }) => {
          const isActive = activeSection === label;
          return (
            <Link
              key={label}
              href={href}
              onClick={() => setActiveSection(label)}
              className={cn(
                "group flex items-center gap-2 py-2 px-2 rounded-md text-[13px] font-mono lowercase no-underline transition-colors duration-200",
                isActive
                  ? "text-ink font-medium"
                  : "text-gray-500 hover:text-ink"
              )}
            >
              {/* Leading arrow for active item */}
              <span
                className={cn(
                  "text-[10px] transition-all duration-200",
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-1"
                )}
                aria-hidden="true"
              >
                →
              </span>
              <span
                className={cn(
                  "transition-transform duration-200",
                  isActive ? "translate-x-0" : "-translate-x-3"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* ── Line separator for secondary section ── */}
      <div className="h-px bg-gray-200 my-4" />

      {/* ── Secondary Nav section (gears & tools & technologies) ── */}
      <nav className="flex flex-col gap-0.5 mb-auto">
        {secondaryNavItems.map(({ label, href }) => {
          const isActive = activeSection === label;
          return (
            <Link
              key={label}
              href={href}
              onClick={() => setActiveSection(label)}
              className={cn(
                "group flex items-center gap-2 py-2 px-2 rounded-md text-[13px] font-mono lowercase no-underline transition-colors duration-200",
                isActive
                  ? "text-ink font-medium"
                  : "text-gray-500 hover:text-ink"
              )}
            >
              {/* Leading arrow for active item */}
              <span
                className={cn(
                  "text-[10px] transition-all duration-200",
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-1"
                )}
                aria-hidden="true"
              >
                →
              </span>
              <span
                className={cn(
                  "transition-transform duration-200",
                  isActive ? "translate-x-0" : "-translate-x-3"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* ── Social links (micro-labels with ↗) ── */}
      <div className="flex flex-col gap-1 mb-5">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="micro-label flex items-center gap-1.5 py-1 px-2 rounded-md no-underline hover:text-ink transition-colors duration-200"
          >
            <span>{label}</span>
            <span className="text-[8px]" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      {/* ── Rule ── */}
      <div className="h-px bg-gray-200 mb-4" />

      {/* ── Theme toggle ── */}
      <ThemeToggle />

      {/* ── Copyright ── */}
      <div className="my-4 micro-label px-2">
        © {new Date().getFullYear()}
      </div>

      {/* ── Rule ── */}
      <div className="h-px bg-gray-200 mb-4" />

      {/* ── Contact email (Bottom of side panel) ── */}
      <div className="px-2">
        <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">
          For work, collabs &amp; everything else, reach me at
        </p>
        <a
          href="mailto:renzcalapao12@gmail.com"
          className="text-[12px] font-mono text-ink hover:underline flex items-center gap-1.5 break-all"
        >
          <span>✉</span>
          <span>renzcalapao12@gmail.com</span>
        </a>
      </div>
    </aside>
  );
}
