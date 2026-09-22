"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Section from "./section";
import { newsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function News() {
  const { ref } = useSectionInView("News", 0.5);

  return (
    <Section id="news" ref={ref}>
      <SectionHeading>News</SectionHeading>
      <ul className="divide-y divide-rule">
        {newsData.map((item) => (
          <li
            key={`${item.date}-${item.text.slice(0, 20)}`}
            className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-3"
          >
            <span className="shrink-0 w-24 text-sm text-muted tabular-nums pt-[2px]">
              {item.date}
            </span>
            <p className="text-[0.95rem] leading-relaxed">
              {"href" in item && item.href ? (
                <a href={item.href} className="link">
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
