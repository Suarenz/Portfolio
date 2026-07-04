/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { Laptop, Monitor, Keyboard, Headphones, Cpu, HardDrive } from "lucide-react";

interface GearCategory {
  title: string;
  items: {
    name: string;
    specs: string;
    category: string;
    iconName: string;
  }[];
}

const gearCategories: GearCategory[] = [
  {
    title: "HARDWARE & WORKSTATION",
    items: [
      {
        name: "AMD Ryzen 5 5600",
        specs: "6-Core, 12-Thread Processor @ 3.50 GHz Base Speed",
        category: "CPU",
        iconName: "Cpu",
      },
      {
        name: "16 GB DDR4 RAM",
        specs: "16.0 GB High-Speed System Memory for Multitasking & Dev",
        category: "MEMORY",
        iconName: "Cpu",
      },
      {
        name: "1.5 TB Dual SSD Array",
        specs: "477 GB Ramsta S800 512GB SSD + 954 GB TEAM T2531TB SSD",
        category: "STORAGE",
        iconName: "HardDrive",
      },
      {
        name: "AMD Radeon RX 580 2048SP",
        specs: "8 GB GDDR5 Dedicated VRAM for Graphics & Compute",
        category: "GPU",
        iconName: "Cpu",
      },
    ],
  },
  {
    title: "PERIPHERALS & AUDIO",
    items: [
      {
        name: "AULA F75 Mechanical Keyboard",
        specs: "75% Gasket-Mounted Wireless Mechanical Keyboard",
        category: "KEYBOARD",
        iconName: "Keyboard",
      },
      {
        name: "Attack Shark X11 Mouse",
        specs: "Ultra-Lightweight Ergonomic Wireless Mouse",
        category: "MOUSE",
        iconName: "HardDrive",
      },
      {
        name: "Headphones & Microphone",
        specs: "Clear Audio Monitoring & Voice Capture for Remote Collaboration",
        category: "AUDIO",
        iconName: "Headphones",
      },
    ],
  },
];

const renderIcon = (name: string) => {
  switch (name) {
    case "Cpu":
      return <Cpu className="w-5 h-5" />;
    case "Monitor":
      return <Monitor className="w-5 h-5" />;
    case "Laptop":
      return <Laptop className="w-5 h-5" />;
    case "Keyboard":
      return <Keyboard className="w-5 h-5" />;
    case "Headphones":
      return <Headphones className="w-5 h-5" />;
    default:
      return <HardDrive className="w-5 h-5" />;
  }
};

export function GearsSection() {
  return (
    <section id="gears" className="py-14">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <span className="micro-label text-gray-400 dark:text-gray-500 font-mono text-xs sm:text-sm tracking-widest block mb-1">
          06 — setup &amp; hardware
        </span>
        <h2 className="font-sans text-xl sm:text-3xl font-semibold text-ink tracking-tight">
          Gears &amp; Hardware
        </h2>
        <p className="text-gray-500 text-[14px] sm:text-[15px] mt-1.5 max-w-xl">
          The physical instruments, developer workstation, and everyday hardware powering my engineering workflow.
        </p>
      </div>

      {/* Grid of Gear Items */}
      <div className="space-y-10">
        {gearCategories.map((cat, cIdx) => (
          <div key={cIdx} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="micro-label text-ink font-medium">{cat.title}</span>
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "group relative rounded-2xl border border-gray-200/90 dark:border-gray-800/80",
                    "bg-white dark:bg-[#141419] p-5 sm:p-6 flex flex-col justify-between",
                    "shadow-[0_4px_14px_-6px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.4)]",
                    "hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_32px_-10px_rgba(0,0,0,0.7)]",
                    "hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700",
                    "transition-all duration-300 ease-out select-none"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800/60 flex items-center justify-center text-ink group-hover:scale-105 transition-transform">
                        {renderIcon(item.iconName)}
                      </div>
                      <span className="micro-label px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800 text-gray-500">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-sans text-base font-semibold text-ink tracking-tight mb-2">
                      {item.name}
                    </h3>
                  </div>

                  <p className="font-mono text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800/60 pt-3 mt-3">
                    {item.specs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
