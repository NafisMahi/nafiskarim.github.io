"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Section from "./section";
import { researchInterests, siteConfig } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About", 0.4);

  return (
    <Section id="about" ref={ref}>
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4 text-[1.02rem] leading-[1.75]">
        <p>
          I am a first-year PhD student in Computer Science at the{" "}
          <a
            href={siteConfig.institutionUrl}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Illinois Chicago
          </a>
          . My research sits at the intersection of web security and AI. As
          large language models turn into autonomous agents that browse, fill
          in forms, and complete transactions on our behalf, many of the
          assumptions behind today&apos;s web defenses stop holding. I am
          interested in what that shift means for the web ecosystem: how
          websites can recognise and reason about agentic clients, how the
          behaviour of these agents differs from that of people, and how the
          safeguards built into them behave under adversarial conditions.
        </p>
        <p>
          More broadly, I care about measurement-driven security research:
          building realistic experiments, collecting the telemetry that
          reveals how systems actually behave, and turning those observations
          into practical defenses that developers can deploy. My current
          interests include agentic AI security, behavioral and browser
          fingerprinting, bot detection, and the security of AI-driven web
          automation. My first paper at UIC, listed under{" "}
          <a href="#publications" className="link">
            Publications
          </a>
          , grew out of these questions.
        </p>
        <p>
          Before moving to Chicago I spent a year as a Lecturer in the
          Department of CSE at BRAC University, and I completed my B.Sc. in
          Computer Science and Engineering at BUET in 2024. My undergraduate
          research spanned applied machine learning for security, in
          particular extracting structured cyber threat intelligence from
          unstructured text with language models, as well as deep learning for
          epidemic forecasting and an unusual side project on signal
          processing in deceased animal brains.
        </p>
        <p>
          Away from research I play the guitar, listen to far too much music,
          and have spent a fair number of evenings on stage with my band. I
          also enjoy travelling and video games. If you want to talk about web
          security, agentic systems, or teaching, my inbox is open.
        </p>
      </div>

      <h3 className="font-serif text-lg font-semibold mt-8 mb-3">
        Research interests
      </h3>
      <ul className="flex flex-wrap gap-2">
        {researchInterests.map((interest) => (
          <li
            key={interest}
            className="rounded-md border border-rule bg-card px-3 py-1 text-sm"
          >
            {interest}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default About;
