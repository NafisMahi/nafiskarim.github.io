import React from "react";
import { siteConfig } from "@/lib/data";

function Footer() {
  return (
    <footer className="mt-auto border-t border-rule">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-muted">
        <span>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Last updated{" "}
          {siteConfig.lastUpdated}.
        </span>
        <span>Built with Next.js and Tailwind CSS.</span>
      </div>
    </footer>
  );
}

export default Footer;
