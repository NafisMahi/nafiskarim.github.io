"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import profilePic from "@/public/dp.jpg";
import { siteConfig, socialsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const iconLinkClass =
  "inline-flex items-center gap-2 rounded-md border border-rule bg-card px-3 py-1.5 text-sm text-ink hover:border-accent hover:text-accent transition-colors";

function Intro() {
  const { ref } = useSectionInView("About", 0.6);

  return (
    <motion.section
      ref={ref}
      id="home"
      className="scroll-mt-32 sm:scroll-mt-24 mb-16 sm:mb-20"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-8">
        <Image
          src={profilePic}
          alt={siteConfig.name}
          priority
          className="h-56 w-[10.5rem] shrink-0 rounded-xl object-cover object-top border border-rule shadow-sm"
        />
        <div className="min-w-0">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-lg text-muted">
            {siteConfig.position},{" "}
            <a
              href={siteConfig.institutionUrl}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.institution}
            </a>
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed max-w-prose">
            {siteConfig.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={siteConfig.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white dark:text-paper hover:opacity-90 transition"
            >
              <FaFilePdf aria-hidden /> Curriculum Vitae
            </a>
            <a
              href={`mailto:${socialsData.email.address}`}
              className={iconLinkClass}
            >
              <FaEnvelope aria-hidden /> Email
            </a>
            <a
              href={socialsData.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
            >
              <FaGithub aria-hidden /> GitHub
            </a>
            <a
              href={socialsData.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
            >
              <FaLinkedin aria-hidden /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Intro;
