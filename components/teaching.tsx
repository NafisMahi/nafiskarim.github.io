"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Section from "./section";
import { teachingData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Teaching() {
  const { ref } = useSectionInView("Teaching", 0.5);

  return (
    <Section id="teaching" ref={ref}>
      <SectionHeading>Teaching</SectionHeading>
      <div className="space-y-8">
        {teachingData.map((group) => (
          <div key={group.institution}>
            <h3 className="font-serif text-lg font-semibold">
              {group.institution}
            </h3>
            <p className="text-sm text-muted">{group.department}</p>
            <ul className="mt-3 divide-y divide-rule border-t border-b border-rule">
              {group.entries.map((entry) => (
                <li
                  key={`${entry.role}-${entry.course}-${entry.term}`}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3"
                >
                  <span className="shrink-0 sm:w-36 text-sm text-muted tabular-nums">
                    {entry.term}
                  </span>
                  <div className="text-[0.95rem] leading-relaxed">
                    <span className="font-medium">{entry.role}</span>
                    <span className="text-muted"> &mdash; </span>
                    <span>{entry.course}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
