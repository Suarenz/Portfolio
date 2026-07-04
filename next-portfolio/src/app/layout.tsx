import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { MobileHeader } from "@/components/MobileHeader";
import "./globals.css";

/* ------------------------------------------------------------------ */
/*  Font loading — four roles per SKILL.md                             */
/* ------------------------------------------------------------------ */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const geistPixel = localFont({
  src: "../fonts/GeistPixel-Square.woff2",
  variable: "--font-geist-pixel",
  display: "swap",
  weight: "400",
});

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Jan Reinnen Calapao — Portfolio",
  description:
    "Portfolio of Jan Reinnen Calapao — Computer Science graduate, fullstack developer, and creative technologist based in Laguna, Philippines.",
  keywords: [
    "Jan Reinnen Calapao",
    "Suarenz",
    "portfolio",
    "fullstack developer",
    "computer science",
  ],
};

/* ------------------------------------------------------------------ */
/*  Root Layout                                                        */
/* ------------------------------------------------------------------ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} ${geistPixel.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg text-ink font-sans antialiased">
        <ThemeProvider>
          {/* Fixed sidebar — desktop only (≥1024px) */}
          <Sidebar />

          {/* Sticky topbar — mobile only (<1024px) */}
          <MobileHeader />

          {/* Main content — shifted right on desktop to clear sidebar */}
          <main className="lg:ml-56 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
