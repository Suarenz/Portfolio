/* eslint-disable @next/next/no-img-element */
import { SelectedProjects } from "@/components/SelectedProjects";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ResumeSection } from "@/components/ResumeSection";

const socialLinks = [
  { label: "github", href: "https://github.com/Suarenz" },
  { label: "linkedin", href: "https://www.linkedin.com/in/suarenz/" },
  { label: "instagram", href: "https://www.instagram.com/suarenz_/" },
  { label: "email", href: "mailto:renzcalapao12@gmail.com" },
];

export default function Home() {
  return (
    <div className="max-w-[42rem] mx-auto px-4 lg:px-6">
      {/* ── Section: Home / Hero ── */}
      <section id="home" className="pt-16 lg:pt-24 pb-14">
        <span
          className="micro-label mb-6 block fade-up"
          style={{ animationDelay: "50ms" }}
        >
          01 — home
        </span>

        {/* Hero: Photo (left) + Bio (right) */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          {/* Profile photo with halftone dissolve */}
          <div
            className="halftone-photo-wrap w-40 h-48 sm:w-44 sm:h-52 shrink-0 fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <img
              src="/assets/1x1 with new unif copy.jpg"
              alt="Jan Reinnen Calapao"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Name + Bio + Social links */}
          <div className="flex flex-col">
            <h1
              className="font-pixel text-[2.5rem] sm:text-[3rem] leading-none text-ink mb-4 fade-up"
              style={{ animationDelay: "190ms" }}
            >
              Jan Reinnen Calapao
            </h1>

            <div
              className="space-y-3 mb-5 fade-up"
              style={{ animationDelay: "260ms" }}
            >
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Highly organized and driven to create impactful tech solutions.
                I specialize in leveraging Natural Language Processing and
                Machine Learning to streamline processes and deliver
                high-quality results.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                I am actively seeking roles where I can drive innovation and
                continue mastering advanced artificial intelligence.
              </p>
            </div>

            {/* Inline social links */}
            <div
              className="flex flex-wrap items-center gap-x-3 gap-y-1 fade-up"
              style={{ animationDelay: "330ms" }}
            >
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
                  className="micro-label inline-flex items-center gap-1 py-1 no-underline hover:text-ink transition-colors duration-200"
                >
                  <span>{label}</span>
                  <span className="text-[8px]" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dotted halftone divider ── */}
      <div className="dotted-divider" />

      {/* ── Section: Work / Selected Projects ── */}
      <SelectedProjects />

      <div className="dotted-divider" />

      {/* ── Section: Certifications ── */}
      <CertificationsSection />

      <div className="dotted-divider" />

      {/* ── Section: Resume ── */}
      <ResumeSection />

      <div className="dotted-divider mb-8" />

      {/* ── Footer micro ── */}
      <footer className="pb-8">
        <p className="micro-label">
          © {new Date().getFullYear()} Jan Reinnen Calapao. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
