"use client";

import React from "react";
import { FaGithub, FaFileAlt, FaAward } from "react-icons/fa";
import SectionHeading from "./section-heading";
import Section from "./section";
import { researchData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const linkLabels: Record<string, { label: string; icon: React.ReactNode }> = {
  code: { label: "Code", icon: <FaGithub aria-hidden /> },
  poster: { label: "Poster", icon: <FaFileAlt aria-hidden /> },
};

export default function Research() {
  const { ref } = useSectionInView("Research", 0.3);

  return (
    <Section id="research" ref={ref}>
      <SectionHeading>Research Experience</SectionHeading>
      <div className="space-y-10">
        {researchData.map((item) => (
          <article key={item.title}>
            <h3 className="font-serif text-xl font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {item.organization}
              <span className="mx-2" aria-hidden>
                &middot;
              </span>
              {item.date}
            </p>

            {(item.supervisor || item.collaborators.length > 0) && (
              <p className="mt-2 text-sm leading-relaxed">
                {item.supervisor && (
                  <>
                    <span className="text-muted">Supervisor:</span>{" "}
                    <a
                      href={item.supervisor.url}
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.supervisor.name}
                    </a>
                  </>
                )}
                {item.supervisor && item.collaborators.length > 0 && (
                  <span className="mx-2 text-muted" aria-hidden>
                    &middot;
                  </span>
                )}
                {item.collaborators.length > 0 && (
                  <>
                    <span className="text-muted">Collaborators:</span>{" "}
                    {item.collaborators.map((person, index) => (
                      <React.Fragment key={person.name}>
                        <a
                          href={person.url}
                          className="link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {person.name}
                        </a>
                        {index < item.collaborators.length - 1 && ", "}
                      </React.Fragment>
                    ))}
                  </>
                )}
              </p>
            )}

            <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed list-disc pl-5 marker:text-muted/60">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            {(item.awards.length > 0 || item.links.length > 0) && (
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                {item.awards.map((award) => (
                  <span
                    key={`${award.title}-${award.event}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft text-accent px-2.5 py-0.5 text-xs font-medium"
                  >
                    <FaAward aria-hidden />
                    {award.title}, {award.event}
                  </span>
                ))}
                {item.links.map((link) => {
                  const meta = linkLabels[link.type] ?? {
                    label: link.type,
                    icon: null,
                  };
                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      className="link inline-flex items-center gap-1.5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {meta.icon}
                      {meta.label}
                    </a>
                  );
                })}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
