/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ToolCategory {
  category: string;
  items: {
    name: string;
    icon: string;
    description?: string;
  }[];
}

const techCategories: ToolCategory[] = [
  {
    category: "FRONTEND & FRAMEWORKS",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        description: "UI Library",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        description: "Fullstack Framework",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        description: "Typed JavaScript",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        description: "ES6+ Logic",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        description: "Utility CSS",
      },
    ],
  },
  {
    category: "BACKEND & DATABASES",
    items: [
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        description: "PHP Framework",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        description: "Server-side Language",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        description: "Relational DB",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        description: "SQL Database",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
        description: "BaaS & Auth",
      },
    ],
  },
  {
    category: "AI, CLOUD & DEPOYMENT",
    items: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        description: "Containerization",
      },
      {
        name: "Microsoft Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
        description: "Cloud Services",
      },
      {
        name: "Google Colab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg",
        description: "Python / AI Notebooks",
      },
      {
        name: "Render",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg",
        description: "Cloud Hosting",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        description: "Frontend Platform",
      },
    ],
  },
  {
    category: "DEVELOPMENT TOOLS",
    items: [
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        description: "Primary Editor",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        description: "Version Control",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        description: "Code Hosting",
      },
      {
        name: "NPM",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
        description: "Package Manager",
      },
    ],
  },
];

export function ToolsAndTechSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredCategories =
    activeCategory === "ALL"
      ? techCategories
      : techCategories.filter((cat) => cat.category.includes(activeCategory));

  return (
    <section id="tools & technologies" className="py-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <span className="micro-label text-gray-400 dark:text-gray-500 font-mono text-xs sm:text-sm tracking-widest block mb-1">
            05 — stack &amp; workflow
          </span>
          <h2 className="font-sans text-xl sm:text-3xl font-semibold text-ink tracking-tight">
            Tools &amp; Technologies
          </h2>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {["ALL", "FRONTEND", "BACKEND", "AI", "TOOLS"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-2.5 py-1 rounded-md font-mono text-[11px] uppercase tracking-wider transition-colors duration-200 cursor-pointer border",
                activeCategory === cat
                  ? "bg-ink text-bg border-ink font-medium"
                  : "border-gray-200 dark:border-gray-800 text-gray-500 hover:text-ink hover:border-gray-300 dark:hover:border-gray-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid by Categories */}
      <div className="space-y-10">
        {filteredCategories.map((group, gIdx) => (
          <div key={gIdx} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="micro-label text-ink font-medium">{group.category}</span>
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
              {group.items.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "group relative rounded-xl border border-gray-200/90 dark:border-gray-800/80",
                    "bg-white dark:bg-[#141419] p-4 flex flex-col items-center text-center justify-center gap-2.5",
                    "shadow-[0_4px_14px_-6px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.4)]",
                    "hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.7)]",
                    "hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700",
                    "transition-all duration-300 ease-out select-none"
                  )}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs sm:text-[13px] font-medium text-ink tracking-tight">
                      {item.name}
                    </h3>
                    {item.description && (
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono block">
                        {item.description}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
