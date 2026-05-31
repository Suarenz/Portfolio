import React from 'react';
import { useTheme } from './ThemeProvider';

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/suarenz_/" },
  { name: "Facebook", url: "https://www.facebook.com/xRenzooooo/" },
  { name: "GitHub", url: "https://github.com/Suarenz" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/suarenz/" }
];

export function Footer() {
  const { theme } = useTheme();

  return (
    <>
      {/* Section 7: Contact / Footer */}
      <footer id="resume" className="relative bg-bg pt-8 md:pt-12 pb-8 md:pb-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {theme === 'dark' && <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000" />}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent z-10" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-[30vh] min-h-[300px]">
          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href="/assets/JanReinnen_Calapao_Resume.pdf"
              download
              className="group relative rounded-full text-base md:text-lg px-8 py-4 text-text-primary inline-flex items-center gap-3 overflow-hidden border border-stroke bg-surface/50 backdrop-blur-md hover:border-transparent transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download Resume
              </span>
            </a>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mt-12 pt-8 border-t border-stroke/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text-primary transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} Jan Reinnen Calapao. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
