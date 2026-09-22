"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Section from "./section";
import { publicationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Publications() {
  const { ref } = useSectionInView("Publications", 0.5);

  return (
    <Section id="publications" ref={ref}>
      <SectionHeading>Publications</SectionHeading>
      <ol className="space-y-8">
        {publicationsData.map((pub) => (
          <li key={pub.title} className="flex gap-4">
            <span className="hidden sm:block shrink-0 w-10 pt-1 font-serif text-2xl text-muted/60">
              {pub.year}
            </span>
            <div className="min-w-0">
              <h3 className="font-serif text-xl font-semibold leading-snug">
                {pub.title}
              </h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed">
                {pub.authors.map((author, index) => {
                  const isMe = "me" in author && author.me;
                  const equal = "equal" in author && author.equal;
                  const label = (
                    <>
                      {author.name}
                      {equal && <sup>*</sup>}
                    </>
                  );
                  return (
                    <React.Fragment key={author.name}>
                      {"url" in author && author.url ? (
                        <a href={author.url} className="link" target="_blank" rel="noopener noreferrer">
                          {label}
                        </a>
                      ) : isMe ? (
                        <span className="font-semibold">{label}</span>
                      ) : (
                        <span>{label}</span>
                      )}
                      {index < pub.authors.length - 1 && ", "}
                    </React.Fragment>
                  );
                })}
              </p>
              <p className="mt-1 text-[0.95rem]">
                <em className="font-serif">{pub.venue}</em>, {pub.year}
                {pub.status && (
                  <span className="ml-2 inline-block align-middle rounded-full bg-accent-soft text-accent px-2.5 py-0.5 text-xs font-medium">
                    {pub.status}
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pub.summary}
              </p>
              {(pub.links.length > 0 || pub.note) && (
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  {pub.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                  {pub.note && <span className="text-muted text-xs">{pub.note}</span>}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
