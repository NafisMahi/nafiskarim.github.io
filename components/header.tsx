"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { links, siteConfig } from "@/lib/data";
import { useActiveSectionContext } from "@/context/activeSectionContext";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-rule bg-paper/85 backdrop-blur">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
        <Link
          href="#home"
          className="font-serif text-lg font-semibold tracking-tight"
          onClick={() => {
            setActiveSection("About");
            setTimeOfLastClick(Date.now());
          }}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Sections">
          <ul className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-0.5 text-sm">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className={clsx(
                    "inline-block py-1 border-b-2 transition-colors",
                    activeSection === link.name
                      ? "border-accent text-ink"
                      : "border-transparent text-muted hover:text-ink"
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 border-b-2 border-transparent text-muted hover:text-ink transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
