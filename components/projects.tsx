"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Section from "./section";
import Project from "./project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <Section id="projects" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <p className="-mt-3 mb-6 text-sm text-muted">
        Selected course and independent projects from my undergraduate years at
        BUET.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
