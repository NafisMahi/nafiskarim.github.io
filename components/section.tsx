"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, children, className = "" },
  ref
) {
  return (
    <motion.section
      id={id}
      ref={ref}
      className={`scroll-mt-32 sm:scroll-mt-24 mb-16 sm:mb-20 ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
});

export default Section;
