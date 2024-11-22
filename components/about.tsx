"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a passionate Computer Science student who enjoys learning new
        stuffs about technology and research methodology. I am always eager to
        learn new things and apply them in real life. My undergraduate thesis
        was done under the supervision of{" "}
        <a
          href="https://mshohrabhossain.buet.ac.bd/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          Dr. Md. Shohrab Hossain
        </a>{" "}
        in collaboration with Professors{" "}
        <a
          href="https://rhhwang.csie.io/English/index.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          Ren-Hung Hwang
        </a>{" "}
        and{" "}
        <a
          href="https://speed.cs.nycu.edu.tw/~ydlin/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          Ying-Dar Lin
        </a>{" "}
        of NYCU. It focused on exploring the effectiveness of in-context
        learning for Named Entity Recognition in Cyber Threat Intelligence,
        along with fine-tuning and prompting Large Language Models for the
        task.
      </p>
      <p className="mb-3">
        When I am not studying, I enjoy listening to music, playing the guitar,
        and watching movies. I enjoy performing on stage in various cultural
        programs with my own band and have done so on quite a few occasions
        during my undergraduate life.
      </p>
      <p className="mb-3">
        Starting from Summer 2024, I joined the CSE Department at the School of
        Data and Sciences (SDS) in BRAC University as a Lecturer. I am actively
        looking for fully-funded Graduate Research Student positions in top CS
        research labs. You are also welcome to knock me with startup ideas and
        educational content creation opportunities.
      </p>
    </section>
  );
}
s
export default About;
