import { ToolsAndTechSection } from "@/components/ToolsAndTechSection";
import Link from "next/link";

export const metadata = {
  title: "Tools & Technologies — Jan Reinnen Calapao",
  description:
    "Tech stack, languages, frameworks, databases, cloud, and developer tools used by Jan Reinnen Calapao.",
};

export default function ToolsPage() {
  return (
    <div className="max-w-[42rem] mx-auto px-4 lg:px-6 pt-16 lg:pt-24 pb-14">
      {/* Back button to home */}
      <Link
        href="/"
        className="micro-label inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-underline text-ink mb-6"
      >
        <span>←</span>
        <span>BACK TO PORTFOLIO</span>
      </Link>

      <ToolsAndTechSection />

      <div className="dotted-divider my-8" />

      {/* Footer micro */}
      <footer className="pb-8">
        <p className="micro-label">
          © {new Date().getFullYear()} Jan Reinnen Calapao. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
