"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Section from "./section";
import { educationData, honorsData, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.3);

  return (
    <Section id="education" ref={ref}>
      <SectionHeading>Education</SectionHeading>
      <ol className="space-y-6">
        {educationData.map((item) => (
          <li
            key={`${item.degree}-${item.institution}`}
            className="grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6"
          >
            <span className="text-sm text-muted tabular-nums pt-[3px]">
              {item.date}
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold leading-snug">
                {item.degree}
              </h3>
              <p className="text-[0.95rem]">
                {item.institution}
                <span className="text-muted"> &middot; {item.location}</span>
              </p>
              {item.details.length > 0 && (
                <ul className="mt-1.5 space-y-0.5 text-sm text-muted">
                  {item.details.map((detail: string) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="font-serif text-lg font-semibold mt-12 mb-3">
        Honors and Awards
      </h3>
      <ul className="space-y-1.5 text-[0.95rem] leading-relaxed list-disc pl-5 marker:text-muted/60">
        {honorsData.map((honor) => (
          <li key={honor}>{honor}</li>
        ))}
      </ul>

      <h3 className="font-serif text-lg font-semibold mt-12 mb-3">Skills</h3>
      <dl className="grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-3 text-[0.95rem]">
        {skillsData.map((group) => (
          <React.Fragment key={group.category}>
            <dt className="text-sm text-muted pt-[3px]">{group.category}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-rule bg-card px-2 py-0.5 text-sm"
                >
                  {skill}
                </span>
              ))}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </Section>
  );
}
