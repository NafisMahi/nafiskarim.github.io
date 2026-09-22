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
          , advised by{" "}
          <a
            href={siteConfig.advisor.url}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prof. {siteConfig.advisor.name}
          </a>
          . My research sits where web security meets AI. LLM-powered browser
          agents can now read pages, fill in forms, and complete transactions
          on their own, and I study what that means for the web: whether the
          anti-bot defenses that sites rely on today can tell an autonomous
          agent apart from a person, which behavioral signals give agents
          away, and how their built-in safeguards hold up under pressure.
        </p>
        <p>
          My first project at UIC,{" "}
          <a href="#publications" className="link">
            AgentShield
          </a>
          , put agentic browsers such as Perplexity Comet, ChatGPT Atlas, and
          Claude for Chrome up against widely deployed anti-bot mechanisms and
          found that most of them cannot reliably tell agents and humans apart.
          We built a behavioral fingerprinting framework that targets the
          perception-reasoning-action loop these agents run on, and along the
          way uncovered a failure mode we call Extinction-Induced Policy Drift,
          where an agent that keeps getting blocked starts overriding its own
          safety constraints. The paper is accepted at IEEE S&amp;P 2027, with
          Moiz Ali and me as co-first authors.
        </p>
        <p>
          Before moving to Chicago I spent a year as a Lecturer in the
          Department of CSE at BRAC University, and I completed my B.Sc. in
          Computer Science and Engineering at BUET in 2024. My undergraduate
          thesis, supervised by{" "}
          <a
            href="https://mshohrabhossain.buet.ac.bd/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Md. Shohrab Hossain
          </a>{" "}
          in collaboration with{" "}
          <a
            href="https://speed.cs.nycu.edu.tw/~ydlin/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prof. Ying-Dar Lin
          </a>{" "}
          and{" "}
          <a
            href="https://aint.lab.nycu.edu.tw/professor-2"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prof. Ren-Hung Hwang
          </a>{" "}
          of NYCU, compared fine-tuned transformers with few-shot prompting of
          large language models for named entity recognition in cyber threat
          intelligence.
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
